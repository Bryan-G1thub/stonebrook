export type PackTier = "floor" | "mini" | "big_chase";

export const DEFAULT_TARGET_CHASE_ODDS_PERCENT = 100 / 3;

export const CHASE_ODDS_PRESETS = [
  { label: "1/3 (33%)", value: 100 / 3 },
  { label: "1/4 (25%)", value: 25 },
  { label: "1/2 (50%)", value: 50 },
  { label: "1/5 (20%)", value: 20 },
] as const;

export type PackCatalogItem = {
  id: string;
  name: string;
  tier: PackTier;
  imageUrl?: string;
  imageData?: string;
};

export type RoundAllocation = {
  packId: string;
  count: number;
  costPerPack: number;
};

export type Round = {
  id: string;
  name: string;
  totalBags: number;
  packsPerBag: number;
  sellPrice: number;
  targetMarginPercent: number;
  targetChaseOddsPercent: number;
  allocations: RoundAllocation[];
  createdAt: string;
  updatedAt: string;
};

export type BagType = "big_chase" | "mini" | "floor_only";

export type BagPack = {
  packId: string;
  name: string;
  tier: PackTier;
  imageUrl?: string;
  imageData?: string;
};

export type BagWarning = {
  bagIndex: number;
  type: "duplicate" | "double_big_chase";
  message: string;
};

export type BuiltBag = {
  index: number;
  type: BagType;
  packs: BagPack[];
  warnings: BagWarning[];
};

export type BagBuildResult = {
  bags: BuiltBag[];
  warnings: BagWarning[];
  fillStats: {
    filled: number;
    total: number;
  };
  bagCounts: {
    bigChaseBags: number;
    miniBags: number;
    floorOnlyBags: number;
  };
  errors: string[];
};

export type RoundCalculations = {
  totalPackSlots: number;
  totalCost: number;
  floorValue: number;
  floorSlotsNeeded: number;
  floorPacksAllocated: number;
  floorSlotGap: number;
  grossRevenue: number;
  netRevenue: number;
  profit: number;
  marginPercent: number;
  bigChaseOdds: number;
  bigChaseBags: number;
  miniBags: number;
  floorOnlyBags: number;
  allocationValid: boolean;
  allocationError?: string;
};

export type BudgetSuggestions = {
  sweetSpotMargin: number;
  idealMargin: number;
  lowMargin: number;
  targetChaseOddsPercent: number;
  recommendedChaseCount: number;
  chasePacksNeeded: number;
  emptyPackSlots: number;
  maxTotalCostAt25: number;
  maxTotalCostAt30: number;
  remainingBudgetAt25: number;
  remainingBudgetAt30: number;
  avgChaseCostAt25: number | null;
  avgChaseCostAt30: number | null;
  marginZone: "great" | "good" | "low" | "critical";
};
