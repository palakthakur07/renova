"use client";

import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { ActivityEvent } from "@/types/progress";

const CATEGORY_LABEL: Record<ActivityEvent["category"], string> = {
  education: "Education",
  skills: "Skills",
  counseling: "Counseling",
  program: "Program",
  assessment: "Assessment",
};

/** ActivityDrawer — activity detail (brief §13), demonstrating data connectivity across the profile, skill, and goal it touches. */
export function ActivityDrawer({ activity, onClose }: { activity: ActivityEvent | null; onClose: () => void }) {
  return (
    <Drawer open={!!activity} onClose={onClose} eyebrow="Activity" title={activity?.activity ?? ""}>
      {activity && (
        <div className="space-y-5">
          <Badge tone="structure">{CATEGORY_LABEL[activity.category]}</Badge>

          <Field label="Completed">{activity.date} 2026</Field>

          {activity.resultPct !== undefined && <Field label="Result">{activity.resultPct}%</Field>}
          {activity.relatedSkill && <Field label="Related skill">{activity.relatedSkill}</Field>}
          {activity.relatedGoal && <Field label="Related rehabilitation goal">{activity.relatedGoal}</Field>}
          <Field label="Impact on progress">{activity.impact}</Field>
        </div>
      )}
    </Drawer>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
      <p className="mt-1 text-[13px] text-[var(--text-primary)]">{children}</p>
    </div>
  );
}
