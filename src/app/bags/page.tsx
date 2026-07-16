"use client";

import { useCatalog } from "@/bags/hooks/useCatalog";
import { useRounds } from "@/bags/hooks/useRounds";
import { RoundList } from "@/bags/components/RoundList";

export default function BagsHome() {
  const { catalog, loaded: catalogLoaded } = useCatalog();
  const {
    rounds,
    loaded: roundsLoaded,
    createRound,
    deleteRound,
    duplicateRound,
  } = useRounds();

  if (!catalogLoaded || !roundsLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <RoundList
        rounds={rounds}
        catalog={catalog}
        onCreate={createRound}
        onDelete={deleteRound}
        onDuplicate={duplicateRound}
      />
    </div>
  );
}
