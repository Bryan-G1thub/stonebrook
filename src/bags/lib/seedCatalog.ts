import type { PackCatalogItem } from "./types";

function id(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

const floors = [
  "Perfect Order",
  "Chaos",
  "Mega Evolution",
  "Journey Together",
];

const minis = ["Phantasmal", "Destined", "Ascended", "Prismatic"];

const bigChases = [
  "XY Evo",
  "151",
  "Crown Zenith",
  "Evolving Skies",
  "Paldean Fates",
  "Prismatic Evolutions",
];

export function createSeedCatalog(): PackCatalogItem[] {
  return [
    ...floors.map((name) => ({ id: id(name), name, tier: "floor" as const })),
    ...minis.map((name) => ({ id: id(name), name, tier: "mini" as const })),
    ...bigChases.map((name) => ({
      id: id(name),
      name,
      tier: "big_chase" as const,
    })),
  ];
}
