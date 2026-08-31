"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { Goal, GoalStatus } from "@/types/profile";

const STATUS_TONE: Record<GoalStatus, "growth" | "achievement" | "neutral"> = {
  "on-track": "growth",
  "at-risk": "achievement",
  "not-started": "neutral",
};
const STATUS_LABEL: Record<GoalStatus, string> = {
  "on-track": "On track",
  "at-risk": "At risk",
  "not-started": "Not started",
};

export function CurrentGoals({ goals, show }: { goals: Goal[]; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Current goals
      </p>

      <ul className="mt-5 space-y-5">
        {goals.map((g, i) => (
          <li key={g.id}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[14px] font-medium text-[var(--text-primary)]">{g.title}</p>
              <Badge tone={STATUS_TONE[g.status]}>{STATUS_LABEL[g.status]}</Badge>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
              <motion.div
                className="h-full rounded-full bg-[var(--accent-primary)]"
                initial={{ width: 0 }}
                animate={{ width: show ? `${g.progressPct}%` : 0 }}
                transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-0.5 text-[12px] text-[var(--text-muted)]">
              <span>{g.progressPct}% complete</span>
              <span>Due {g.deadline}</span>
              <span>{g.owner}</span>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
