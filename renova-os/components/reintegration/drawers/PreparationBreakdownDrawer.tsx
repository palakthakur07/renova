"use client";

import { InfoIcon } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { calculateCategoryContributions, calculateOverallPreparation } from "@/lib/reintegration/reintegrationEngine";
import type { ReintegrationCategory } from "@/types/reintegration";

/**
 * PreparationBreakdownDrawer — "What contributed to this percentage?"
 * (brief §4). Shows the same equal-weighted categories the engine
 * actually uses. The disclaimer is fixed copy, not passed in — this
 * is the module's core ethical requirement (brief §1, §25).
 */
export function PreparationBreakdownDrawer({
  categories,
  open,
  onClose,
}: {
  categories: ReintegrationCategory[];
  open: boolean;
  onClose: () => void;
}) {
  const overall = calculateOverallPreparation(categories);
  const rows = calculateCategoryContributions(categories);

  return (
    <Drawer open={open} onClose={onClose} eyebrow="Reintegration preparation" title="What contributed to this percentage?">
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
              key={row.id}
              className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--border-hairline)] px-3.5 py-3"
            >
              <div>
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{row.name}</p>
                <p className="mt-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                  {row.progress}% complete · equal weight
                </p>
              </div>
              <p className="text-[13px] font-semibold text-[var(--text-primary)]">+{row.contribution}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">
          <InfoIcon size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
          Reintegration preparation reflects completion of identified preparation activities. It is not a risk
          assessment, a probability of release, or a prediction of future behavior. Humans remain responsible for
          all legal and institutional decisions.
        </div>

        <p className="text-[11px] leading-relaxed text-[var(--text-muted)]">
          This is a prototype preparation model. The calculation is centralized in
          lib/reintegration/reintegrationEngine.ts and can be reviewed or retuned as the underlying data model
          matures.
        </p>
      </div>
    </Drawer>
  );
}
