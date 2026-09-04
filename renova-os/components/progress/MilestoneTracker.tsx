"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { MilestoneProgress } from "@/types/progress";

const STATE_LABEL: Record<MilestoneProgress["state"], string> = {
  complete: "Complete",
  "in-progress": "In progress",
  upcoming: "Upcoming",
};

/** MilestoneTracker — milestone list (brief §19), clicking opens requirements/evidence/outcome. */
export function MilestoneTracker({
  milestones,
  show,
  onSelect,
}: {
  milestones: MilestoneProgress[];
  show: boolean;
  onSelect: (milestone: MilestoneProgress) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">Milestones</p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {milestones.map((m, i) => (
          <motion.button
            key={m.id}
            onClick={() => onSelect(m)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-4 text-left transition-colors duration-200 hover:border-[var(--accent-primary)]"
          >
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
              style={{
                borderColor: m.state === "upcoming" ? "var(--border-hairline-strong)" : "var(--color-teal-400)",
                background: m.state === "complete" ? "var(--color-teal-400)" : "transparent",
              }}
            >
              {m.state === "complete" && <Check size={12} className="text-[var(--color-graphite-950)]" />}
              {m.state === "in-progress" && <span className="h-2 w-2 rounded-full bg-[var(--color-teal-400)]" />}
            </span>
            <span>
              <span className="block text-[13px] font-medium text-[var(--text-primary)]">{m.title}</span>
              <span className="mt-0.5 block text-[11px] text-[var(--text-muted)]">
                {STATE_LABEL[m.state]}
                {m.state !== "upcoming" ? ` · ${m.completionPct}%` : ""}
              </span>
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
