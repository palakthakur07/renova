"use client";

import { motion } from "framer-motion";
import type { Milestone } from "@/types/planner";

/** MilestoneList — measurable checkpoints (brief §27–28), each with suggested success criteria. */
export function MilestoneList({ milestones, show }: { milestones: Milestone[]; show: boolean }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">Milestones</p>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {milestones.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
              Milestone {String(m.order).padStart(2, "0")}
            </span>
            <p className="mt-1 text-[13px] font-medium text-[var(--text-primary)]">{m.title}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-[var(--text-secondary)]">{m.description}</p>
            <ul className="mt-2.5 space-y-1">
              {m.successCriteria.map((c, ci) => (
                <li key={ci} className="text-[11px] text-[var(--text-muted)]">
                  · {c}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-[var(--text-muted)]">
        Suggested success criteria — for planning purposes only, not automatic determinations of readiness or eligibility.
      </p>
    </div>
  );
}
