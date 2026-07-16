import type { BagBuildResult } from "@/bags/lib/types";
import { BagCard } from "./BagCard";

type BagGridProps = {
  buildResult: BagBuildResult;
  packsPerBag: number;
};

function sortBagsByFill(bags: BagBuildResult["bags"]) {
  return [...bags].sort((a, b) => {
    const fillDiff = b.packs.length - a.packs.length;
    if (fillDiff !== 0) return fillDiff;
    return a.index - b.index;
  });
}

export function BagGrid({ buildResult, packsPerBag }: BagGridProps) {
  const { bags, fillStats, errors } = buildResult;
  const sortedBags = sortBagsByFill(bags);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900">Bag preview</h2>
        <span className="text-sm text-zinc-500">
          {fillStats.filled} / {fillStats.total} slots filled
        </span>
      </div>

      {errors.length > 0 && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errors.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      )}

      {bags.length === 0 ? (
        <p className="text-sm text-zinc-500">No bags to preview yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {sortedBags.map((bag) => (
            <BagCard key={bag.index} bag={bag} packsPerBag={packsPerBag} />
          ))}
        </div>
      )}
    </div>
  );
}
