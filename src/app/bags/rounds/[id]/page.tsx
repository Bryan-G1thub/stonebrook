"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { useCatalog } from "@/bags/hooks/useCatalog";
import { useRounds } from "@/bags/hooks/useRounds";
import { calculateRound } from "@/bags/lib/calculations";
import { buildBags } from "@/bags/lib/bagBuilder";
import type { PackCatalogItem, PackTier } from "@/bags/lib/types";
import { CHASE_ODDS_PRESETS } from "@/bags/lib/types";
import { RoundSummary } from "@/bags/components/RoundSummary";
import { AllocationSection } from "@/bags/components/AllocationSection";
import { PackPicker } from "@/bags/components/PackPicker";
import { BagGrid } from "@/bags/components/BagGrid";

export default function BagsRoundPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { catalog, loaded: catalogLoaded, addPack } = useCatalog();
  const { getRound, updateRound, loaded: roundsLoaded } = useRounds();
  const [pickerTier, setPickerTier] = useState<PackTier | null>(null);

  const round = getRound(id);

  const calc = useMemo(
    () => (round ? calculateRound(round, catalog) : null),
    [round, catalog],
  );

  const buildResult = useMemo(
    () => (round ? buildBags(round, catalog) : null),
    [round, catalog],
  );

  if (!catalogLoaded || !roundsLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  if (!round) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-zinc-500">Round not found</p>
        <Link href="/bags" className="text-sm text-zinc-900 underline">
          Back to rounds
        </Link>
      </div>
    );
  }

  const handleAddPack = (pack: PackCatalogItem) => {
    const exists = round.allocations.some((a) => a.packId === pack.id);
    if (exists) return;

    updateRound(round.id, {
      allocations: [
        ...round.allocations,
        { packId: pack.id, count: 0, costPerPack: 0 },
      ],
    });
    setPickerTier(null);
  };

  const existingPackIds = round.allocations.map((a) => a.packId);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-zinc-200 px-6 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/bags"
            className="text-sm text-zinc-500 hover:text-zinc-800"
          >
            ← Rounds
          </Link>
          <Link
            href="/bags/catalog"
            className="text-sm text-zinc-500 hover:text-zinc-800"
          >
            Catalog
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <input
              type="text"
              value={round.name}
              onChange={(e) => updateRound(round.id, { name: e.target.value })}
              className="border-b border-transparent bg-transparent text-2xl font-semibold text-zinc-900 hover:border-zinc-200 focus:border-zinc-400 focus:outline-none"
            />
            <p className="mt-1 text-sm text-zinc-500">
              {round.totalBags} bags × {round.packsPerBag} packs ={" "}
              {round.totalBags * round.packsPerBag} total pack slots
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex flex-col gap-0.5">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Total bags
              </span>
              <input
                type="number"
                min={1}
                value={round.totalBags}
                onChange={(e) =>
                  updateRound(round.id, {
                    totalBags: Math.max(1, parseInt(e.target.value) || 1),
                  })
                }
                className="w-20 rounded border border-zinc-200 px-2 py-1 text-sm"
              />
            </label>

            <label className="flex flex-col gap-0.5">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Packs / bag
              </span>
              <input
                type="number"
                min={1}
                value={round.packsPerBag}
                onChange={(e) =>
                  updateRound(round.id, {
                    packsPerBag: Math.max(1, parseInt(e.target.value) || 1),
                  })
                }
                className="w-20 rounded border border-zinc-200 px-2 py-1 text-sm"
              />
            </label>

            <label className="flex flex-col gap-0.5">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Chase goal
              </span>
              <select
                value={
                  CHASE_ODDS_PRESETS.find(
                    (p) =>
                      Math.abs(p.value - round.targetChaseOddsPercent) < 0.01,
                  )?.value ?? round.targetChaseOddsPercent
                }
                onChange={(e) =>
                  updateRound(round.id, {
                    targetChaseOddsPercent: parseFloat(e.target.value),
                  })
                }
                className="rounded border border-zinc-200 px-2 py-1 text-sm"
              >
                {CHASE_ODDS_PRESETS.map((preset) => (
                  <option key={preset.label} value={preset.value}>
                    {preset.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-0.5">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Target margin %
              </span>
              <input
                type="number"
                min={0}
                step={0.1}
                value={round.targetMarginPercent}
                onChange={(e) =>
                  updateRound(round.id, {
                    targetMarginPercent: Math.max(
                      0,
                      parseFloat(e.target.value) || 0,
                    ),
                  })
                }
                className="w-20 rounded border border-zinc-200 px-2 py-1 text-sm"
              />
            </label>
          </div>
        </div>

        {calc && buildResult && (
          <RoundSummary
            calc={calc}
            sellPrice={round.sellPrice}
            targetMarginPercent={round.targetMarginPercent}
            targetChaseOddsPercent={round.targetChaseOddsPercent}
            fillStats={buildResult.fillStats}
            onSellPriceChange={(price) =>
              updateRound(round.id, { sellPrice: price })
            }
          />
        )}

        <div className="space-y-8">
          {(["floor", "mini", "big_chase"] as PackTier[]).map((tier) => (
            <AllocationSection
              key={tier}
              tier={tier}
              allocations={round.allocations}
              catalog={catalog}
              onChange={(allocations) =>
                updateRound(round.id, { allocations })
              }
              onAddClick={() => setPickerTier(tier)}
            />
          ))}
        </div>

        {buildResult && (
          <BagGrid buildResult={buildResult} packsPerBag={round.packsPerBag} />
        )}
      </div>

      {pickerTier && (
        <PackPicker
          catalog={catalog}
          tier={pickerTier}
          existingPackIds={existingPackIds}
          onSelect={handleAddPack}
          onCreate={addPack}
          onClose={() => setPickerTier(null)}
        />
      )}
    </div>
  );
}
