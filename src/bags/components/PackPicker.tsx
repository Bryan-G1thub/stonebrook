"use client";

import { useState } from "react";
import { generateId } from "@/bags/lib/storage";
import type { PackCatalogItem, PackTier } from "@/bags/lib/types";
import { PackImage } from "./PackImage";

const tierLabels: Record<PackTier, string> = {
  floor: "Floors",
  mini: "Mini chases",
  big_chase: "Big chases",
};

type PackPickerProps = {
  catalog: PackCatalogItem[];
  tier: PackTier;
  existingPackIds: string[];
  onSelect: (pack: PackCatalogItem) => void;
  onCreate: (pack: PackCatalogItem) => void;
  onClose: () => void;
};

export function PackPicker({
  catalog,
  tier,
  existingPackIds,
  onSelect,
  onCreate,
  onClose,
}: PackPickerProps) {
  const [mode, setMode] = useState<"pick" | "create">("pick");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageData, setImageData] = useState<string | undefined>();

  const filtered = catalog.filter(
    (p) => p.tier === tier && !existingPackIds.includes(p.id),
  );

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result as string);
      setImageUrl("");
    };
    reader.readAsDataURL(file);
  };

  const handleCreate = () => {
    if (!name.trim()) return;

    const pack: PackCatalogItem = {
      id: generateId(),
      name: name.trim(),
      tier,
      imageUrl: imageUrl || undefined,
      imageData,
    };

    onCreate(pack);
    onSelect(pack);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="max-h-[85vh] w-full max-w-lg overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
          <div>
            <h3 className="font-semibold text-zinc-900">Add pack</h3>
            <p className="text-xs text-zinc-500">{tierLabels[tier]}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-zinc-500 hover:text-zinc-700"
          >
            Close
          </button>
        </div>

        <div className="flex border-b border-zinc-200">
          <button
            type="button"
            onClick={() => setMode("pick")}
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              mode === "pick"
                ? "border-b-2 border-zinc-900 text-zinc-900"
                : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            Pick existing
          </button>
          <button
            type="button"
            onClick={() => setMode("create")}
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              mode === "create"
                ? "border-b-2 border-zinc-900 text-zinc-900"
                : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            Create new
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {mode === "pick" ? (
            <>
              {filtered.length === 0 ? (
                <div className="py-6 text-center">
                  <p className="text-sm text-zinc-500">No packs in this tier yet.</p>
                  <button
                    type="button"
                    onClick={() => setMode("create")}
                    className="mt-3 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Create new pack
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setMode("create")}
                    className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-300 p-3 text-zinc-500 transition-colors hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-700"
                  >
                    <span className="text-2xl leading-none">+</span>
                    <span className="text-center text-xs font-medium">New pack</span>
                  </button>
                  {filtered.map((pack) => (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => onSelect(pack)}
                      className="flex flex-col items-center gap-2 rounded-lg border border-zinc-200 p-3 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                    >
                      <PackImage pack={pack} size="lg" />
                      <span className="text-center text-sm font-medium text-zinc-800">
                        {pack.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  placeholder="ME02: Phantasmal Flames"
                  autoFocus
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zinc-700">Image URL</span>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                    setImageData(undefined);
                  }}
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

              {(imageUrl || imageData) && (
                <div className="flex justify-center">
                  <PackImage
                    pack={{ name, imageUrl, imageData }}
                    size="lg"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handleCreate}
                disabled={!name.trim()}
                className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Create & add to round
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
