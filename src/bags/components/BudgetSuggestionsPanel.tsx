import type { BudgetSuggestions } from "@/bags/lib/types";
import {
  formatCurrency,
  formatPercent,
} from "@/bags/lib/calculations";

type BudgetSuggestionsPanelProps = {
  suggestions: BudgetSuggestions;
  currentChaseCount: number;
  currentMargin: number;
  chaseGoalLabel: string;
};

const zoneStyles = {
  great: "border-emerald-200 bg-emerald-50 text-emerald-900",
  good: "border-sky-200 bg-sky-50 text-sky-900",
  low: "border-amber-200 bg-amber-50 text-amber-900",
  critical: "border-red-200 bg-red-50 text-red-900",
};

const zoneLabels = {
  great: "Above target — room to spend on chases",
  good: "In the sweet spot",
  low: "Getting thin — watch chase spend",
  critical: "Too low — cut costs or raise price",
};

export function BudgetSuggestionsPanel({
  suggestions,
  currentChaseCount,
  currentMargin,
  chaseGoalLabel,
}: BudgetSuggestionsPanelProps) {
  const {
    sweetSpotMargin,
    idealMargin,
    lowMargin,
    targetChaseOddsPercent,
    recommendedChaseCount,
    chasePacksNeeded,
    emptyPackSlots,
    remainingBudgetAt25,
    remainingBudgetAt30,
    avgChaseCostAt25,
    avgChaseCostAt30,
    marginZone,
  } = suggestions;

  const planningCount =
    chasePacksNeeded > 0 ? chasePacksNeeded : emptyPackSlots;

  return (
    <div className={`mt-2 rounded-lg border p-4 ${zoneStyles[marginZone]}`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold">Budget suggestions</h3>
          <p className="mt-0.5 text-xs opacity-80">{zoneLabels[marginZone]}</p>
        </div>
        <span className="rounded-full bg-white/60 px-2.5 py-0.5 text-xs font-medium">
          Aim {formatPercent(sweetSpotMargin)} · Max {formatPercent(idealMargin)}{" "}
          · Floor {formatPercent(lowMargin)}
        </span>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <SuggestionCard
          title="Chase odds target"
          value={`${chaseGoalLabel} (${formatPercent(targetChaseOddsPercent)} of bags)`}
          detail={
            chasePacksNeeded > 0
              ? `Add ${chasePacksNeeded} big chase pack${chasePacksNeeded === 1 ? "" : "s"} (${currentChaseCount} → ${recommendedChaseCount})`
              : `On target at ${currentChaseCount} / ${recommendedChaseCount} chase bags`
          }
        />

        {planningCount > 0 && (
          <SuggestionCard
            title="Chase spend budget"
            value={
              remainingBudgetAt25 > 0
                ? `Up to ${formatCurrency(remainingBudgetAt25)}`
                : `${formatCurrency(Math.abs(remainingBudgetAt25))} over`
            }
            detail={
              remainingBudgetAt25 > 0
                ? `Total extra spend to land near ${formatPercent(sweetSpotMargin)} margin`
                : `Already past ${formatPercent(sweetSpotMargin)}% cost cap — trim spend or raise price`
            }
          />
        )}

        {planningCount > 0 && avgChaseCostAt25 !== null && (
          <SuggestionCard
            title={`Avg per chase (${planningCount} pack${planningCount === 1 ? "" : "s"})`}
            value={`~${formatCurrency(avgChaseCostAt25)} @ ${formatPercent(sweetSpotMargin)}`}
            detail={
              avgChaseCostAt30 !== null
                ? `Conservative: ~${formatCurrency(avgChaseCostAt30)} @ ${formatPercent(idealMargin)}`
                : undefined
            }
          />
        )}

        {emptyPackSlots > 0 && (
          <SuggestionCard
            title="Open pack slots"
            value={`${emptyPackSlots} unfilled`}
            detail={
              chasePacksNeeded > 0
                ? `If these become chases, target ~${avgChaseCostAt25 !== null ? formatCurrency(avgChaseCostAt25) : "—"} each for ${formatPercent(sweetSpotMargin)}%`
                : "Fill remaining slots or adjust allocations"
            }
          />
        )}
      </div>

      {currentMargin >= idealMargin && remainingBudgetAt25 > 0 && planningCount > 0 && (
        <p className="mt-3 text-xs opacity-90">
          You&apos;re at {formatPercent(currentMargin)} margin with headroom. For{" "}
          {planningCount} XY / Sun &amp; Moon-style chases, try to stay around{" "}
          <strong>{formatCurrency(avgChaseCostAt25 ?? 0)}</strong> per pack to
          land near {formatPercent(sweetSpotMargin)}%.
        </p>
      )}

      {currentMargin < lowMargin && (
        <p className="mt-3 text-xs font-medium">
          Margin is below {formatPercent(lowMargin)}% — chase spend is eating too
          much. Raise sale price or use cheaper chases.
        </p>
      )}
    </div>
  );
}

function SuggestionCard({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="rounded-lg bg-white/50 px-3 py-2">
      <p className="text-[10px] font-medium uppercase tracking-wide opacity-70">
        {title}
      </p>
      <p className="mt-0.5 text-sm font-semibold">{value}</p>
      {detail && <p className="mt-1 text-xs opacity-80">{detail}</p>}
    </div>
  );
}
