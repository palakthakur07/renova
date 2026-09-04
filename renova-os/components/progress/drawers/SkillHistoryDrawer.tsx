"use client";

import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { SkillProgress, SkillHistory } from "@/types/progress";

/** SkillHistoryDrawer — evidence-based skill detail (brief §15). Every level change is backed by named evidence, never an unexplained jump. */
export function SkillHistoryDrawer({
  skill,
  history,
  onClose,
}: {
  skill: SkillProgress | null;
  history: SkillHistory | null;
  onClose: () => void;
}) {
  return (
    <Drawer open={!!skill} onClose={onClose} eyebrow="Skill history" title={skill?.label ?? ""}>
      {skill && history && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5">
              <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Current level</p>
              <p className="mt-1 text-[15px] font-semibold text-[var(--text-primary)]">{history.currentLevel}</p>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5">
              <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Previous level</p>
              <p className="mt-1 text-[15px] font-medium text-[var(--text-secondary)]">{history.previousLevel}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[13px] text-[var(--text-muted)]">Change</span>
            <Badge tone="growth">+{history.change}</Badge>
            <span className="ml-auto text-[13px] text-[var(--text-muted)]">
              {skill.previousScore} → {skill.currentScore}
            </span>
          </div>

          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Evidence</p>
            <ul className="space-y-2">
              {history.evidence.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[11px] text-[var(--text-muted)]">Last updated {history.lastUpdated}</p>
        </div>
      )}
    </Drawer>
  );
}
