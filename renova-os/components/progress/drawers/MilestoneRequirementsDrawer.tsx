"use client";

import { Drawer } from "@/components/common/Drawer";
import { Progress } from "@/components/ui/Progress";
import type { MilestoneProgress } from "@/types/progress";

/** MilestoneRequirementsDrawer — requirements / completed / remaining / expected outcome (brief §19). */
export function MilestoneRequirementsDrawer({
  milestone,
  onClose,
}: {
  milestone: MilestoneProgress | null;
  onClose: () => void;
}) {
  return (
    <Drawer open={!!milestone} onClose={onClose} eyebrow="Milestone" title={milestone?.title ?? ""}>
      {milestone && (
        <div className="space-y-6">
          <Progress value={milestone.completionPct} label="Completion" tone="primary" />

          <List title="Requirements" items={milestone.requirements} />
          {milestone.completedActivities.length > 0 && (
            <List title="Completed activities" items={milestone.completedActivities} tone="growth" />
          )}
          {milestone.remainingActivities.length > 0 && (
            <List title="Remaining activities" items={milestone.remainingActivities} />
          )}

          <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Expected outcome</p>
            <p className="mt-1 text-[13px] text-[var(--text-primary)]">{milestone.expectedOutcome}</p>
          </div>
        </div>
      )}
    </Drawer>
  );
}

function List({ title, items, tone }: { title: string; items: string[]; tone?: "growth" }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{title}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
              style={{ background: tone === "growth" ? "var(--accent-growth)" : "var(--text-muted)" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
