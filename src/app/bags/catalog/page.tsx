"use client";

import Link from "next/link";
import { useCatalog } from "@/bags/hooks/useCatalog";
import { useRounds } from "@/bags/hooks/useRounds";
import { CatalogManager } from "@/bags/components/CatalogManager";

export default function BagsCatalogPage() {
  const { catalog, loaded, addPack, updatePack, deletePack } = useCatalog();
  const { isPackUsedInRounds } = useRounds();

  if (!loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-zinc-200 px-6 py-3">
        <Link
          href="/bags"
          className="text-sm text-zinc-500 hover:text-zinc-800"
        >
          ← Back to rounds
        </Link>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <CatalogManager
          catalog={catalog}
          isPackUsed={isPackUsedInRounds}
          onAdd={addPack}
          onUpdate={updatePack}
          onDelete={deletePack}
        />
      </div>
    </div>
  );
}
