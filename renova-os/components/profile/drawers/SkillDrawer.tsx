"use client";

import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import type { Skill } from "@/types/profile";

export function SkillDrawer({ skill, onClose }: { skill: Skill | null; onClose: () => void }) {
  return (
    <Drawer open={!!skill} onClose={onClose} eyebrow="Skill detail" title={skill?.label ?? ""}>
      {skill && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge tone="structure">{skill.level}</Badge>
            <span className="font-mono text-[12px] text-[var(--text-muted)]">Current level</span>
          </div>

          <Progress value={skill.score} label="Score" tone="primary" />

          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Evidence</p>
            <ul className="space-y-2">
              {skill.evidence.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Recommended next</p>
            <p className="mt-1 text-[13px] text-[var(--text-primary)]">{skill.recommendedNext}</p>
          </div>
        </div>
      )}
    </Drawer>
  );
}
