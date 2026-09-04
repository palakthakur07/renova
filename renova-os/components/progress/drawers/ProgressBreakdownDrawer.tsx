"use client";

import { InfoIcon } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { calculateCategoryProgress, calculateOverallProgress } from "@/lib/progress/progressEngine";
import type { ProgressCategory } from "@/types/progress";

/**
 * ProgressBreakdownDrawer — "How is this progress calculated?" (brief
 * §7). Shows the same weights the engine actually uses, then each
 * category's raw value × weight contribution, so nothing about the
 * number is opaque. The disclaimer is fixed copy, not passed in — see
 * brief §8, this is the module's core ethical requirement.
 */
export function ProgressBreakdownDrawer({
  categories,
  open,
  onClose,
}: {
  categories: ProgressCategory[];
  open: boolean;
  onClose: () => void;
}) {
  const overall = calculateOverallProgress(categories);
  const rows = calculateCategoryProgress(categories);

  return (
    <Drawer open={open} onClose={onClose} eyebrow="Rehabilitation progress" title="How is this progress calculated?">
      <div className="space-y-6">
        <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-4 text-center">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Overall</p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-[32px] font-semibold text-[var(--text-primary)]">
            {overall}%
          </p>
        </div>

        <div className="space-y-3">
          {rows.map((row) => (
            <div
              key={row.key}
              className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--border-hairline)] px-3.5 py-3"
            >
              <div>
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{row.label}</p>
                <p className="mt-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                  {row.valuePct} × {row.weightPct}%
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[12px] text-[var(--accent-primary)]">{row.weightPct}% contribution</p>
                <p className="text-[13px] font-semibold text-[var(--text-primary)]">+{row.contribution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">
          <InfoIcon size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
          Rehabilitation progress is an activity-based indicator. It is not a risk assessment
          and does not determine legal, disciplinary, parole, or release decisions.
        </div>

        <p className="text-[11px] leading-relaxed text-[var(--text-muted)]">
          This is a prototype progress model. Category weights and calculations are centralized in
          lib/progress/progressEngine.ts and can be reviewed or retuned as the underlying data model matures.
        </p>
      </div>
    </Drawer>
  );
}
