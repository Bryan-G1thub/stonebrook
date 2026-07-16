import { createSeedCatalog } from "./seedCatalog";
import type { PackCatalogItem, Round } from "./types";
import { DEFAULT_TARGET_CHASE_ODDS_PERCENT } from "./types";

const CATALOG_KEY = "bags:catalog";
const ROUNDS_KEY = "bags:rounds";

function normalizeRound(round: Round): Round {
  return {
    ...round,
    targetChaseOddsPercent:
      round.targetChaseOddsPercent ?? DEFAULT_TARGET_CHASE_ODDS_PERCENT,
  };
}

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadCatalog(): PackCatalogItem[] {
  if (!isBrowser()) return createSeedCatalog();

  const raw = localStorage.getItem(CATALOG_KEY);
  if (!raw) {
    const seed = createSeedCatalog();
    localStorage.setItem(CATALOG_KEY, JSON.stringify(seed));
    return seed;
  }

  try {
    return JSON.parse(raw) as PackCatalogItem[];
  } catch {
    const seed = createSeedCatalog();
    localStorage.setItem(CATALOG_KEY, JSON.stringify(seed));
    return seed;
  }
}

export function saveCatalog(catalog: PackCatalogItem[]) {
  if (!isBrowser()) return;
  localStorage.setItem(CATALOG_KEY, JSON.stringify(catalog));
}

export function loadRounds(): Round[] {
  if (!isBrowser()) return [];

  const raw = localStorage.getItem(ROUNDS_KEY);
  if (!raw) return [];

  try {
    return (JSON.parse(raw) as Round[]).map(normalizeRound);
  } catch {
    return [];
  }
}

export function saveRounds(rounds: Round[]) {
  if (!isBrowser()) return;
  localStorage.setItem(ROUNDS_KEY, JSON.stringify(rounds));
}

export function generateId() {
  return crypto.randomUUID();
}
