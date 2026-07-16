import type { PackCatalogItem, PackTier, RoundAllocation } from "@/bags/lib/types";
import { formatCurrency } from "@/bags/lib/calculations";
import { PackImage } from "./PackImage";

type PackRowProps = {
  pack: PackCatalogItem;
  allocation: RoundAllocation;
  onChange: (updates: Partial<RoundAllocation>) => void;
  onRemove: () => void;
};

export function PackRow({ pack, allocation, onChange, onRemove }: PackRowProps) {
  const lineTotal = allocation.count * allocation.costPerPack;

  return (
    <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2">
      <PackImage pack={pack} size="md" />

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-zinc-900">{pack.name}</p>
        <p className="text-xs text-zinc-500 capitalize">{pack.tier.replace("_", " ")}</p>
      </div>

      <div className="flex items-center gap-2">
        <label className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-wide text-zinc-400">Count</span>
          <input
            type="number"
            min={0}
            value={allocation.count || ""}
            onChange={(e) =>
              onChange({ count: Math.max(0, parseInt(e.target.value) || 0) })
            }
            className="w-16 rounded border border-zinc-200 px-2 py-1 text-sm"
          />
        </label>

        <label className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-wide text-zinc-400">Cost</span>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-zinc-400">
              $
            </span>
            <input
              type="number"
              min={0}
              step={0.01}
              value={allocation.costPerPack || ""}
              onChange={(e) =>
                onChange({
                  costPerPack: Math.max(0, parseFloat(e.target.value) || 0),
                })
              }
              className="w-20 rounded border border-zinc-200 py-1 pl-5 pr-2 text-sm"
            />
          </div>
        </label>

        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-wide text-zinc-400">Total</span>
          <span className="py-1 text-sm font-medium text-zinc-700">
            {formatCurrency(lineTotal)}
          </span>
        </div>

        <button
          type="button"
          onClick={onRemove}
          className="ml-1 rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-red-500"
          title="Remove"
        >
          ×
        </button>
      </div>
    </div>
  );
}

const tierTitles: Record<PackTier, string> = {
  floor: "Floors",
  mini: "Mini chases",
  big_chase: "Big chases",
};

const tierHints: Record<PackTier, string | null> = {
  floor: null,
  mini: "Flexible fillers — can sit in any bag, including chase bags",
  big_chase: "Max 1 per bag",
};

type AllocationSectionProps = {
  tier: PackTier;
  allocations: RoundAllocation[];
  catalog: PackCatalogItem[];
  onChange: (allocations: RoundAllocation[]) => void;
  onAddClick: () => void;
};

export function AllocationSection({
  tier,
  allocations,
  catalog,
  onChange,
  onAddClick,
}: AllocationSectionProps) {
  const catalogMap = new Map(catalog.map((p) => [p.id, p]));
  const tierAllocations = allocations.filter((a) => {
    const pack = catalogMap.get(a.packId);
    return pack?.tier === tier;
  });

  const updateAllocation = (packId: string, updates: Partial<RoundAllocation>) => {
    onChange(
      allocations.map((a) =>
        a.packId === packId ? { ...a, ...updates } : a,
      ),
    );
  };

  const removeAllocation = (packId: string) => {
    onChange(allocations.filter((a) => a.packId !== packId));
  };

  const totalCount = tierAllocations.reduce((sum, a) => sum + (a.count || 0), 0);

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-zinc-900">
            {tierTitles[tier]}
            <span className="ml-2 text-sm font-normal text-zinc-500">
              ({totalCount})
            </span>
          </h3>
          {tierHints[tier] && (
            <p className="mt-0.5 text-xs text-zinc-400">{tierHints[tier]}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onAddClick}
          className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          + Add pack
        </button>
      </div>

      {tierAllocations.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-200 px-4 py-6 text-center text-sm text-zinc-400">
          No {tierTitles[tier].toLowerCase()} added yet
        </p>
      ) : (
        <div className="space-y-2">
          {tierAllocations.map((alloc) => {
            const pack = catalogMap.get(alloc.packId);
            if (!pack) return null;
            return (
              <PackRow
                key={alloc.packId}
                pack={pack}
                allocation={alloc}
                onChange={(updates) => updateAllocation(alloc.packId, updates)}
                onRemove={() => removeAllocation(alloc.packId)}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
