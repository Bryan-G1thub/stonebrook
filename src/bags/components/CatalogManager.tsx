"use client";

import { useState } from "react";
import { generateId } from "@/bags/lib/storage";
import type { PackCatalogItem, PackTier } from "@/bags/lib/types";
import { PackImage } from "./PackImage";

type CatalogManagerProps = {
  catalog: PackCatalogItem[];
  isPackUsed: (packId: string) => boolean;
  onAdd: (pack: PackCatalogItem) => void;
  onUpdate: (id: string, updates: Partial<PackCatalogItem>) => void;
  onDelete: (id: string) => void;
};

const tierLabels: Record<PackTier, string> = {
  floor: "Floors",
  mini: "Mini chases",
  big_chase: "Big chases",
};

const tiers: PackTier[] = ["floor", "mini", "big_chase"];

export function CatalogManager({
  catalog,
  isPackUsed,
  onAdd,
  onUpdate,
  onDelete,
}: CatalogManagerProps) {
  const [editing, setEditing] = useState<PackCatalogItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  const startNew = () => {
    setEditing({
      id: generateId(),
      name: "",
      tier: "floor",
    });
    setShowForm(true);
  };

  const startEdit = (pack: PackCatalogItem) => {
    setEditing({ ...pack });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!editing || !editing.name.trim()) return;

    const exists = catalog.some((p) => p.id === editing.id);
    if (exists) {
      onUpdate(editing.id, editing);
    } else {
      onAdd(editing);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (editing) {
        setEditing({
          ...editing,
          imageData: reader.result as string,
          imageUrl: undefined,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Pack catalog</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Reusable pack library. Costs are set per round.
          </p>
        </div>
        <button
          type="button"
          onClick={startNew}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Add pack
        </button>
      </div>

      {tiers.map((tier) => {
        const packs = catalog.filter((p) => p.tier === tier);
        return (
          <section key={tier}>
            <h2 className="mb-3 text-lg font-semibold text-zinc-800">
              {tierLabels[tier]}
            </h2>
            {packs.length === 0 ? (
              <p className="text-sm text-zinc-400">No packs in this tier</p>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {packs.map((pack) => (
                  <div
                    key={pack.id}
                    className="rounded-lg border border-zinc-200 p-3"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <PackImage pack={pack} size="lg" />
                      <p className="text-center text-sm font-medium text-zinc-900">
                        {pack.name}
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(pack)}
                          className="text-xs text-zinc-500 hover:text-zinc-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (isPackUsed(pack.id)) {
                              alert(
                                "This pack is used in a round. Remove it from rounds first.",
                              );
                              return;
                            }
                            if (confirm(`Delete ${pack.name}?`)) {
                              onDelete(pack.id);
                            }
                          }}
                          className="text-xs text-red-400 hover:text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}

      {showForm && editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-zinc-900">
              {catalog.some((p) => p.id === editing.id) ? "Edit pack" : "New pack"}
            </h3>

            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Name</span>
                <input
                  type="text"
                  value={editing.name}
                  onChange={(e) =>
                    setEditing({ ...editing, name: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  placeholder="Perfect Order"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Tier</span>
                <select
                  value={editing.tier}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      tier: e.target.value as PackTier,
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                >
                  {tiers.map((t) => (
                    <option key={t} value={t}>
                      {tierLabels[t]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Image URL</span>
                <input
                  type="url"
                  value={editing.imageUrl || ""}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      imageUrl: e.target.value || undefined,
                      imageData: undefined,
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  placeholder="https://..."
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zinc-700">
                  Or upload image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(file);
                  }}
                  className="mt-1 w-full text-sm"
                />
              </label>

              {(editing.imageUrl || editing.imageData) && (
                <div className="flex justify-center">
                  <PackImage pack={editing} size="lg" />
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditing(null);
                }}
                className="rounded-lg px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
