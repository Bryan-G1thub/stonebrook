import { calculateRound, getBagCounts, getTierCounts } from "./calculations";
import type {
  BagBuildResult,
  BagPack,
  BagType,
  BagWarning,
  BuiltBag,
  PackCatalogItem,
  Round,
} from "./types";

type PoolEntry = {
  packId: string;
  name: string;
  tier: "floor" | "mini" | "big_chase";
  imageUrl?: string;
  imageData?: string;
};

function toBagPack(entry: PoolEntry): BagPack {
  return {
    packId: entry.packId,
    name: entry.name,
    tier: entry.tier,
    imageUrl: entry.imageUrl,
    imageData: entry.imageData,
  };
}

function expandPool(
  round: Round,
  catalogMap: Map<string, PackCatalogItem>,
  tier: "floor" | "mini" | "big_chase",
): PoolEntry[] {
  const pool: PoolEntry[] = [];

  for (const alloc of round.allocations) {
    const pack = catalogMap.get(alloc.packId);
    if (!pack || pack.tier !== tier || alloc.count <= 0) continue;

    for (let i = 0; i < alloc.count; i++) {
      pool.push({
        packId: pack.id,
        name: pack.name,
        tier: pack.tier,
        imageUrl: pack.imageUrl,
        imageData: pack.imageData,
      });
    }
  }

  return pool;
}

function validateBag(bag: BuiltBag): BagWarning[] {
  const warnings: BagWarning[] = [];
  const bigChaseCount = bag.packs.filter((p) => p.tier === "big_chase").length;

  if (bigChaseCount > 1) {
    warnings.push({
      bagIndex: bag.index,
      type: "double_big_chase",
      message: "Bag contains more than one big chase pack",
    });
  }

  const names = bag.packs.map((p) => p.name);
  const seen = new Set<string>();
  for (const name of names) {
    if (seen.has(name)) {
      warnings.push({
        bagIndex: bag.index,
        type: "duplicate",
        message: `Duplicate pack in bag: ${name}`,
      });
      break;
    }
    seen.add(name);
  }

  return warnings;
}

/**
 * Bag rules:
 * - Max 1 big chase per bag
 * - Minis are fillers (like floors) and can sit in any bag, including chase bags
 * - Remaining slots filled from a combined floor + mini pool
 */
export function buildBags(
  round: Round,
  catalog: PackCatalogItem[],
): BagBuildResult {
  const calc = calculateRound(round, catalog);
  const { catalogMap } = getTierCounts(round, catalog);
  const { bigChaseBags, floorOnlyBags } = getBagCounts(
    round.totalBags,
    calc.bigChaseBags,
  );

  const errors: string[] = [];
  if (!calc.allocationValid && calc.allocationError) {
    errors.push(calc.allocationError);
  }
  if (floorOnlyBags < 0) {
    errors.push("Big chase count exceeds total bags");
  }

  const bags: BuiltBag[] = [];
  let bagIndex = 0;

  const createBag = (type: BagType) => {
    const bag: BuiltBag = {
      index: bagIndex,
      type,
      packs: [],
      warnings: [],
    };
    bagIndex++;
    bags.push(bag);
    return bag;
  };

  for (let i = 0; i < bigChaseBags; i++) createBag("big_chase");
  for (let i = 0; i < Math.max(0, floorOnlyBags); i++) createBag("floor_only");

  const bigChasePool = expandPool(round, catalogMap, "big_chase");
  const miniPool = expandPool(round, catalogMap, "mini");
  const floorPool = expandPool(round, catalogMap, "floor");
  // Minis mix into filler pool with floors — can land in chase bags too
  const fillerPool = [...miniPool, ...floorPool];

  let bigIdx = 0;
  for (const bag of bags.filter((b) => b.type === "big_chase")) {
    if (bigIdx < bigChasePool.length) {
      bag.packs.push(toBagPack(bigChasePool[bigIdx]));
      bigIdx++;
    }
  }

  const packsPerBag = round.packsPerBag;
  let fillerIdx = 0;
  let safety = fillerPool.length * bags.length + 100;

  while (fillerIdx < fillerPool.length && safety > 0) {
    safety--;
    let placed = false;

    for (const bag of bags) {
      if (bag.packs.length >= packsPerBag) continue;
      if (fillerIdx >= fillerPool.length) break;

      bag.packs.push(toBagPack(fillerPool[fillerIdx]));
      fillerIdx++;
      placed = true;
    }

    if (!placed) break;
  }

  const allWarnings: BagWarning[] = [];
  for (const bag of bags) {
    bag.warnings = validateBag(bag);
    allWarnings.push(...bag.warnings);
  }

  const filled = bags.reduce((sum, b) => sum + b.packs.length, 0);
  const total = round.totalBags * round.packsPerBag;

  if (fillerIdx < fillerPool.length) {
    errors.push(
      `${fillerPool.length - fillerIdx} filler pack(s) could not be placed`,
    );
  }

  if (bigIdx < bigChasePool.length) {
    errors.push(
      `${bigChasePool.length - bigIdx} big chase pack(s) could not be placed`,
    );
  }

  return {
    bags,
    warnings: allWarnings,
    fillStats: { filled, total },
    bagCounts: {
      bigChaseBags,
      miniBags: 0,
      floorOnlyBags: Math.max(0, floorOnlyBags),
    },
    errors,
  };
}
