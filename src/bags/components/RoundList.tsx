"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { calculateRound, formatPercent } from "@/bags/lib/calculations";
import { buildBags } from "@/bags/lib/bagBuilder";
import type { Round } from "@/bags/lib/types";
import type { PackCatalogItem } from "@/bags/lib/types";
import { MarginBadge } from "./MarginBadge";

type RoundListProps = {
  rounds: Round[];
  catalog: PackCatalogItem[];
  onCreate: (data: Pick<Round, "name" | "totalBags" | "packsPerBag">) => Round;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => Round | null;
};

export function RoundList({
  rounds,
  catalog,
  onCreate,
  onDelete,
  onDuplicate,
}: RoundListProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [totalBags, setTotalBags] = useState(50);
  const [packsPerBag, setPacksPerBag] = useState(3);

  const handleCreate = () => {
    if (!name.trim()) return;
    const round = onCreate({ name: name.trim(), totalBags, packsPerBag });
    setShowModal(false);
    setName("");
    router.push(`/bags/rounds/${round.id}`);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Bags
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Plan pack bag rounds — margins, costs, and chase odds.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/bags/catalog"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Catalog
          </Link>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            New round
          </button>
        </div>
      </div>

      {rounds.length === 0 ? (
        <div className="mt-16 rounded-xl border border-dashed border-zinc-300 px-6 py-16 text-center">
          <p className="text-lg font-medium text-zinc-600">No rounds yet</p>
          <p className="mt-2 text-sm text-zinc-400">
            Create your first round to start planning bags.
          </p>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="mt-6 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            New round
          </button>
        </div>
      ) : (
        <div className="mt-8 space-y-3">
          {rounds.map((round) => {
            const calc = calculateRound(round, catalog);
            const build = buildBags(round, catalog);

            return (
              <div
                key={round.id}
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-5 py-4"
              >
                <div>
                  <h2 className="font-semibold text-zinc-900">{round.name}</h2>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {round.totalBags} bags × {round.packsPerBag} packs
                    {" · "}
                    {build.fillStats.filled}/{build.fillStats.total} slots filled
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <MarginBadge
                      marginPercent={calc.marginPercent}
                      targetMarginPercent={round.targetMarginPercent}
                    />
                    <span className="text-xs text-zinc-400">
                      Chase odds: {formatPercent(calc.bigChaseOdds)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/bags/rounds/${round.id}`}
                    className="rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Open
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      const copy = onDuplicate(round.id);
                      if (copy) router.push(`/bags/rounds/${copy.id}`);
                    }}
                    className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-50"
                  >
                    Duplicate
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Delete "${round.name}"?`)) onDelete(round.id);
                    }}
                    className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-red-500 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-zinc-900">New round</h3>

            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  placeholder="Chicken bags"
                  autoFocus
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Total bags</span>
                <input
                  type="number"
                  min={1}
                  value={totalBags}
                  onChange={(e) =>
                    setTotalBags(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Packs per bag</span>
                <input
                  type="number"
                  min={1}
                  value={packsPerBag}
                  onChange={(e) =>
                    setPacksPerBag(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreate}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
