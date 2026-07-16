"use client";

import { useState } from "react";
import type { RoundCalculations } from "@/bags/lib/types";
import {
  computeBudgetSuggestions,
  formatChaseGoalLabel,
  formatCurrency,
  formatPercent,
} from "@/bags/lib/calculations";
import { MarginBadge } from "./MarginBadge";
import { BudgetSuggestionsPanel } from "./BudgetSuggestionsPanel";

type RoundSummaryProps = {
  calc: RoundCalculations;
  sellPrice: number;
  targetMarginPercent: number;
  targetChaseOddsPercent: number;
  fillStats: { filled: number; total: number };
  onSellPriceChange: (price: number) => void;
};

export function RoundSummary({
  calc,
  sellPrice,
  targetMarginPercent,
  targetChaseOddsPercent,
  fillStats,
  onSellPriceChange,
}: RoundSummaryProps) {
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const gapLabel =
    calc.floorSlotGap === 0
      ? "Balanced"
      : calc.floorSlotGap > 0
        ? `${calc.floorSlotGap} surplus`
        : `${Math.abs(calc.floorSlotGap)} short`;

  const gapColor =
    calc.floorSlotGap === 0
      ? "text-zinc-600"
      : calc.floorSlotGap > 0
        ? "text-amber-600"
        : "text-red-600";

  const suggestions = computeBudgetSuggestions(
    calc,
    fillStats,
    targetChaseOddsPercent,
  );

  const chaseGoalLabel = formatChaseGoalLabel(targetChaseOddsPercent);
  const chaseOnTarget =
    Math.abs(calc.bigChaseOdds - targetChaseOddsPercent) < 1;

  return (
    <div className="sticky top-0 z-10 rounded-xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
      {!calc.allocationValid && calc.allocationError && (
        <div className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {calc.allocationError}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Metric label="Total cost" value={formatCurrency(calc.totalCost)} />
        <Metric
          label="Sale price"
          value={
            <div className="relative inline-flex items-center">
              <span className="mr-0.5 text-sm text-zinc-400">$</span>
              <input
                type="number"
                min={0}
                step={0.01}
                value={sellPrice || ""}
                onChange={(e) =>
                  onSellPriceChange(Math.max(0, parseFloat(e.target.value) || 0))
                }
                className="w-20 rounded border border-zinc-200 bg-white px-2 py-0.5 text-lg font-semibold"
              />
            </div>
          }
        />
        <Metric label="Net (after 6%)" value={formatCurrency(calc.netRevenue)} />
        <Metric
          label="Profit"
          value={formatCurrency(calc.profit)}
          valueClass={calc.profit >= 0 ? "text-emerald-700" : "text-red-600"}
        />
        <Metric
          label="Margin"
          value={
            <MarginBadge
              marginPercent={calc.marginPercent}
              targetMarginPercent={targetMarginPercent}
            />
          }
        />
        <Metric
          label="Big chase odds"
          value={formatPercent(calc.bigChaseOdds)}
          sub={
            <span className={chaseOnTarget ? "text-emerald-600" : "text-zinc-500"}>
              Goal {chaseGoalLabel} ({formatPercent(targetChaseOddsPercent)})
            </span>
          }
        />
        <Metric
          label="Filler value"
          value={formatCurrency(calc.floorValue)}
          sub={<span className="text-zinc-400">floors + minis</span>}
        />
        <Metric
          label="Slots filled"
          value={`${fillStats.filled} / ${fillStats.total}`}
        />
        <Metric
          label="Filler slots"
          value={`${calc.floorPacksAllocated} / ${calc.floorSlotsNeeded}`}
          sub={<span className={gapColor}>{gapLabel}</span>}
        />
      </div>

      {suggestions && (
        <div className="mt-3 border-t border-zinc-200 pt-3">
          <button
            type="button"
            onClick={() => setSuggestionsOpen((o) => !o)}
            className="flex w-full items-center justify-between rounded-lg px-1 py-1 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            <span>Budget suggestions</span>
            <span className="flex items-center gap-2 text-xs font-normal text-zinc-500">
              {suggestions.chasePacksNeeded > 0 && (
                <span>
                  {suggestions.chasePacksNeeded} chases · ~
                  {suggestions.avgChaseCostAt25 !== null
                    ? formatCurrency(suggestions.avgChaseCostAt25)
                    : "—"}
                  /pack
                </span>
              )}
              <span className="text-zinc-400">{suggestionsOpen ? "▲" : "▼"}</span>
            </span>
          </button>

          {suggestionsOpen && (
            <BudgetSuggestionsPanel
              suggestions={suggestions}
              currentChaseCount={calc.bigChaseBags}
              currentMargin={calc.marginPercent}
              chaseGoalLabel={chaseGoalLabel}
            />
          )}
        </div>
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  valueClass = "text-zinc-900",
  sub,
}: {
  label: string;
  value: React.ReactNode;
  valueClass?: string;
  sub?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
        {label}
      </p>
      <div className={`mt-0.5 text-lg font-semibold ${valueClass}`}>{value}</div>
      {sub && <div className="mt-0.5 text-xs">{sub}</div>}
    </div>
  );
}
