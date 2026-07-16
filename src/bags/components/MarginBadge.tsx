import { formatPercent } from "@/bags/lib/calculations";

type MarginBadgeProps = {
  marginPercent: number;
  targetMarginPercent: number;
};

export function MarginBadge({ marginPercent, targetMarginPercent }: MarginBadgeProps) {
  const met = marginPercent >= targetMarginPercent;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ${
        met
          ? "bg-emerald-50 text-emerald-700"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      {formatPercent(marginPercent)}
      <span className="ml-1 text-xs opacity-70">
        / {formatPercent(targetMarginPercent)} target
      </span>
    </span>
  );
}
