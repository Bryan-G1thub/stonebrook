import type {
  PackCatalogItem,
  Round,
  RoundCalculations,
  BudgetSuggestions,
} from "./types";

const TIKTOK_FEE_RATE = 0.06;

export const SWEET_SPOT_MARGIN = 25;
export const IDEAL_MARGIN = 30;
export const LOW_MARGIN = 20;

export function getTierCounts(
  round: Round,
  catalog: PackCatalogItem[],
) {
  const catalogMap = new Map(catalog.map((p) => [p.id, p]));

  let bigChaseCount = 0;
  let miniCount = 0;
  let floorPacksAllocated = 0;

  for (const alloc of round.allocations) {
    const pack = catalogMap.get(alloc.packId);
    if (!pack || alloc.count <= 0) continue;

    if (pack.tier === "big_chase") bigChaseCount += alloc.count;
    else if (pack.tier === "mini") miniCount += alloc.count;
    else floorPacksAllocated += alloc.count;
  }

  // Minis are generous floors — count toward filler slots
  const fillerPacksAllocated = floorPacksAllocated + miniCount;

  return {
    bigChaseCount,
    miniCount,
    floorPacksAllocated,
    fillerPacksAllocated,
    catalogMap,
  };
}

export function getBagCounts(totalBags: number, bigChaseCount: number) {
  const bigChaseBags = bigChaseCount;
  const floorOnlyBags = totalBags - bigChaseBags;

  return { bigChaseBags, floorOnlyBags };
}

/** Filler slots = every non-big-chase slot (floors + minis can go anywhere) */
export function getFillerSlotsNeeded(
  totalBags: number,
  packsPerBag: number,
  bigChaseBags: number,
) {
  if (packsPerBag <= 0) return 0;
  return totalBags * packsPerBag - bigChaseBags;
}

export function calculateRound(
  round: Round,
  catalog: PackCatalogItem[],
): RoundCalculations {
  const {
    bigChaseCount,
    miniCount,
    fillerPacksAllocated,
    catalogMap,
  } = getTierCounts(round, catalog);

  const { bigChaseBags, floorOnlyBags } = getBagCounts(
    round.totalBags,
    bigChaseCount,
  );

  const allocationValid = bigChaseBags <= round.totalBags;
  const allocationError = allocationValid
    ? undefined
    : `Too many big chases: ${bigChaseBags} chase packs for ${round.totalBags} bags (max 1 per bag)`;

  const floorSlotsNeeded = getFillerSlotsNeeded(
    round.totalBags,
    round.packsPerBag,
    bigChaseBags,
  );

  const totalPackSlots = round.totalBags * round.packsPerBag;

  let totalCost = 0;
  let floorValue = 0;

  for (const alloc of round.allocations) {
    const pack = catalogMap.get(alloc.packId);
    if (!pack || alloc.count <= 0) continue;

    const lineCost = alloc.count * alloc.costPerPack;
    totalCost += lineCost;
    // Floors + minis both count as filler value
    if (pack.tier === "floor" || pack.tier === "mini") {
      floorValue += lineCost;
    }
  }

  const grossRevenue = round.totalBags * round.sellPrice;
  const netRevenue = grossRevenue * (1 - TIKTOK_FEE_RATE);
  const profit = netRevenue - totalCost;
  const marginPercent =
    netRevenue > 0 ? (profit / netRevenue) * 100 : 0;

  const bigChaseOdds =
    round.totalBags > 0 ? (bigChaseBags / round.totalBags) * 100 : 0;

  return {
    totalPackSlots,
    totalCost,
    floorValue,
    floorSlotsNeeded,
    floorPacksAllocated: fillerPacksAllocated,
    floorSlotGap: fillerPacksAllocated - floorSlotsNeeded,
    grossRevenue,
    netRevenue,
    profit,
    marginPercent,
    bigChaseOdds,
    bigChaseBags,
    miniBags: miniCount,
    floorOnlyBags: Math.max(0, floorOnlyBags),
    allocationValid,
    allocationError,
  };
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

/** Human label for common chase odds goals (e.g. 33.3 → "1/3") */
export function formatChaseGoalLabel(percent: number) {
  const presets: [number, string][] = [
    [50, "1/2"],
    [33.3, "1/3"],
    [25, "1/4"],
    [20, "1/5"],
  ];
  const match = presets.find(([p]) => Math.abs(p - percent) < 0.6);
  if (match) return match[1];
  return formatPercent(percent);
}

export function maxTotalCostForMargin(
  netRevenue: number,
  marginPercent: number,
) {
  return netRevenue * (1 - marginPercent / 100);
}

export function computeBudgetSuggestions(
  calc: RoundCalculations,
  fillStats: { filled: number; total: number },
  targetChaseOddsPercent: number,
): BudgetSuggestions | null {
  if (calc.netRevenue <= 0) return null;

  const totalBags = calc.bigChaseBags + calc.floorOnlyBags;
  const chaseOddsRatio = targetChaseOddsPercent / 100;
  const recommendedChaseCount = Math.round(totalBags * chaseOddsRatio);
  const chasePacksNeeded = Math.max(0, recommendedChaseCount - calc.bigChaseBags);
  const emptyPackSlots = Math.max(0, fillStats.total - fillStats.filled);

  const maxTotalCostAt25 = maxTotalCostForMargin(
    calc.netRevenue,
    SWEET_SPOT_MARGIN,
  );
  const maxTotalCostAt30 = maxTotalCostForMargin(
    calc.netRevenue,
    IDEAL_MARGIN,
  );

  const remainingBudgetAt25 = maxTotalCostAt25 - calc.totalCost;
  const remainingBudgetAt30 = maxTotalCostAt30 - calc.totalCost;

  const planningCount =
    chasePacksNeeded > 0 ? chasePacksNeeded : emptyPackSlots;

  const avgChaseCostAt25 =
    planningCount > 0 && remainingBudgetAt25 > 0
      ? remainingBudgetAt25 / planningCount
      : null;
  const avgChaseCostAt30 =
    planningCount > 0 && remainingBudgetAt30 > 0
      ? remainingBudgetAt30 / planningCount
      : null;

  let marginZone: BudgetSuggestions["marginZone"];
  if (calc.marginPercent >= IDEAL_MARGIN) marginZone = "great";
  else if (calc.marginPercent >= SWEET_SPOT_MARGIN) marginZone = "good";
  else if (calc.marginPercent >= LOW_MARGIN) marginZone = "low";
  else marginZone = "critical";

  return {
    sweetSpotMargin: SWEET_SPOT_MARGIN,
    idealMargin: IDEAL_MARGIN,
    lowMargin: LOW_MARGIN,
    targetChaseOddsPercent,
    recommendedChaseCount,
    chasePacksNeeded,
    emptyPackSlots,
    maxTotalCostAt25,
    maxTotalCostAt30,
    remainingBudgetAt25,
    remainingBudgetAt30,
    avgChaseCostAt25,
    avgChaseCostAt30,
    marginZone,
  };
}
