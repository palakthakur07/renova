"use client";

import { InfoIcon } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { Progress } from "@/components/ui/Progress";
import type { RehabilitationProgress } from "@/types/profile";

const ROWS: { key: keyof Omit<RehabilitationProgress, "overall">; label: string }[] = [
  { key: "education", label: "Education" },
  { key: "skillDevelopment", label: "Skill development" },
  { key: "programParticipation", label: "Program participation" },
  { key: "counselingEngagement", label: "Counseling engagement" },
  { key: "milestoneCompletion", label: "Milestone completion" },
];

export function ScoreExplanationDrawer({
  progress,
  open,
  onClose,
}: {
  progress: RehabilitationProgress | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer open={open} onClose={onClose} eyebrow="Rehabilitation progress" title="How this is calculated">
      {progress && (
        <div className="space-y-6">
          <div className="space-y-4">
            {ROWS.map((row) => (
              <Progress key={row.key} value={progress[row.key]} label={row.label} tone="primary" />
            ))}
          </div>

          <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">
            <InfoIcon size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
            This indicator summarizes engagement and progress across rehabilitation
            activities. It does not determine sentencing, parole, eligibility, or
            disciplinary action.
          </div>
        </div>
      )}
    </Drawer>
  );
}
