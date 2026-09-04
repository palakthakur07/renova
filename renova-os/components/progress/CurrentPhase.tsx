"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/Progress";
import type { CurrentPhaseSummary } from "@/types/progress";

/** CurrentPhase — highlights where the person is right now (brief §11), directly beneath the trajectory. */
export function CurrentPhase({ summary, show }: { summary: CurrentPhaseSummary; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mt-4 rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Current phase</p>
          <p className="mt-0.5 text-[16px] font-semibold text-[var(--text-primary)]">{summary.phaseLabel}</p>
        </div>
        <div className="w-full sm:w-56">
          <Progress value={summary.completionPct} tone="primary" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-[var(--text-secondary)]">
        <span>
          <span className="font-medium text-[var(--text-primary)]">{summary.activeActivities}</span> active activities
        </span>
        <span>
          <span className="font-medium text-[var(--text-primary)]">{summary.upcomingMilestones}</span> upcoming milestone
        </span>
        <span>
          <span className="font-medium text-[var(--text-primary)]">{summary.recommendedActions}</span> recommended actions
        </span>
      </div>
    </motion.div>
  );
}
