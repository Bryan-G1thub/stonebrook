"use client";

import { useCallback, useEffect, useState } from "react";
import { generateId, loadRounds, saveRounds } from "@/bags/lib/storage";
import type { Round } from "@/bags/lib/types";
import { DEFAULT_TARGET_CHASE_ODDS_PERCENT } from "@/bags/lib/types";

export function useRounds() {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRounds(loadRounds());
    setLoaded(true);
  }, []);

  const persist = useCallback((next: Round[]) => {
    setRounds(next);
    saveRounds(next);
  }, []);

  const createRound = useCallback(
    (data: Pick<Round, "name" | "totalBags" | "packsPerBag">) => {
      const now = new Date().toISOString();
      const round: Round = {
        id: generateId(),
        name: data.name,
        totalBags: data.totalBags,
        packsPerBag: data.packsPerBag,
        sellPrice: 0,
        targetMarginPercent: 30,
        targetChaseOddsPercent: DEFAULT_TARGET_CHASE_ODDS_PERCENT,
        allocations: [],
        createdAt: now,
        updatedAt: now,
      };
      persist([round, ...rounds]);
      return round;
    },
    [rounds, persist],
  );

  const updateRound = useCallback(
    (id: string, updates: Partial<Round>) => {
      persist(
        rounds.map((r) =>
          r.id === id
            ? { ...r, ...updates, updatedAt: new Date().toISOString() }
            : r,
        ),
      );
    },
    [rounds, persist],
  );

  const deleteRound = useCallback(
    (id: string) => {
      persist(rounds.filter((r) => r.id !== id));
    },
    [rounds, persist],
  );

  const duplicateRound = useCallback(
    (id: string) => {
      const source = rounds.find((r) => r.id === id);
      if (!source) return null;

      const now = new Date().toISOString();
      const copy: Round = {
        ...source,
        id: generateId(),
        name: `${source.name} (copy)`,
        createdAt: now,
        updatedAt: now,
        allocations: source.allocations.map((a) => ({ ...a })),
      };
      persist([copy, ...rounds]);
      return copy;
    },
    [rounds, persist],
  );

  const getRound = useCallback(
    (id: string) => rounds.find((r) => r.id === id),
    [rounds],
  );

  const isPackUsedInRounds = useCallback(
    (packId: string) =>
      rounds.some((r) => r.allocations.some((a) => a.packId === packId)),
    [rounds],
  );

  return {
    rounds,
    loaded,
    createRound,
    updateRound,
    deleteRound,
    duplicateRound,
    getRound,
    isPackUsedInRounds,
  };
}
