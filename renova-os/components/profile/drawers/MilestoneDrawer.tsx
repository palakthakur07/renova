"use client";

import { FileCheck2 } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import type { Milestone } from "@/types/profile";

export function MilestoneDrawer({
  milestone,
  onClose,
}: {
  milestone: Milestone | null;
  onClose: () => void;
}) {
  return (
    <Drawer open={!!milestone} onClose={onClose} eyebrow="Rehabilitation journey" title={milestone?.title ?? ""}>
      {milestone && (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge tone="neutral">{milestone.program}</Badge>
            {milestone.date && <Badge tone="neutral">{milestone.date}</Badge>}
            {milestone.state === "completed" && <Badge tone="growth">Completed</Badge>}
            {milestone.state === "current" && <Badge tone="structure">In progress</Badge>}
            {milestone.state === "upcoming" && <Badge tone="neutral">Upcoming</Badge>}
          </div>

          <Progress value={milestone.completionPct} label="Progress" tone="growth" />

          {typeof milestone.assessmentPct === "number" && (
            <Progress value={milestone.assessmentPct} label="Assessment" tone="primary" />
          )}

          {milestone.certificateAvailable && (
            <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3 text-[13px]">
              <FileCheck2 size={16} className="text-[var(--accent-growth)]" />
              Certificate available
            </div>
          )}

          {milestone.staffMember && (
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Staff member</p>
              <p className="text-[13px] text-[var(--text-secondary)]">{milestone.staffMember}</p>
            </div>
          )}

          {milestone.notes && (
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Notes</p>
              <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{milestone.notes}</p>
            </div>
          )}
        </div>
      )}
    </Drawer>
  );
}
