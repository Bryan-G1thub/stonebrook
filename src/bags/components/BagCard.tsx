import type { BuiltBag } from "@/bags/lib/types";
import { PackImage } from "./PackImage";

const typeLabels = {
  big_chase: "Big chase",
  mini: "Mini",
  floor_only: "Filler",
};

const typeColors = {
  big_chase: "bg-violet-50 text-violet-700",
  mini: "bg-sky-50 text-sky-700",
  floor_only: "bg-zinc-100 text-zinc-600",
};

type BagCardProps = {
  bag: BuiltBag;
  packsPerBag: number;
};

export function BagCard({ bag, packsPerBag }: BagCardProps) {
  const hasRed = bag.warnings.some((w) => w.type === "double_big_chase");
  const hasYellow = bag.warnings.some((w) => w.type === "duplicate");
  const filled = bag.packs.length;
  const isFilled = filled > 0;
  const isComplete = filled >= packsPerBag;

  let borderClass = "border-zinc-200 bg-white";
  if (hasRed) borderClass = "border-red-300 bg-red-50";
  else if (hasYellow) borderClass = "border-amber-200 bg-amber-50";
  else if (isFilled) borderClass = "border-emerald-200 bg-emerald-50";

  const fillLabelClass = isComplete
    ? "font-semibold text-emerald-700"
    : isFilled
      ? "text-emerald-600"
      : "text-zinc-400";

  return (
    <div className={`rounded-lg border p-3 ${borderClass}`}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-zinc-500">
            Bag {bag.index + 1}
          </span>
          <span className={`text-xs ${fillLabelClass}`}>
            {filled}/{packsPerBag}
          </span>
        </div>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${typeColors[bag.type]}`}
        >
          {typeLabels[bag.type]}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {filled === 0 ? (
          <span className="text-xs text-zinc-400">Empty</span>
        ) : (
          bag.packs.map((pack, i) => (
            <div key={`${pack.packId}-${i}`} className="flex flex-col items-center gap-1">
              <PackImage pack={pack} size="sm" />
              <span className="max-w-16 truncate text-[10px] text-zinc-600">
                {pack.name}
              </span>
            </div>
          ))
        )}
      </div>

      {bag.warnings.length > 0 && (
        <div className="mt-2 space-y-1">
          {bag.warnings.map((w, i) => (
            <p
              key={i}
              className={`text-[10px] ${
                w.type === "double_big_chase" ? "text-red-600" : "text-amber-600"
              }`}
            >
              {w.message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
