"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { EmploymentPathway, PathwayStatus } from "@/types/reintegration";

const STATUS_OPTIONS: PathwayStatus[] = ["interested", "exploring", "preparing", "completed"];
const STATUS_LABEL: Record<PathwayStatus, string> = {
  interested: "Interested",
  exploring: "Exploring",
  preparing: "Preparing",
  completed: "Completed",
};

/**
 * EmploymentPathways — "Career Pathways" (brief §6). Explicitly not
 * job guarantees — every pathway card carries the same fixed
 * disclaimer sentence. Status is a simple cycle-through control
 * standing in for a staff/user selection, matching the brief's
 * "Allow staff/user to mark" instruction without new UI chrome.
 */
export function EmploymentPathways({
  pathways,
  show,
  onChangeStatus,
}: {
  pathways: EmploymentPathway[];
  show: boolean;
  onChangeStatus: (id: string, status: PathwayStatus) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Career pathways
      </p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        Potential pathways based on current skills and development goals — not guaranteed opportunities.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {pathways.map((p, i) => {
          const nextIndex = (STATUS_OPTIONS.indexOf(p.status) + 1) % STATUS_OPTIONS.length;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
              transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{p.title}</p>
                <button
                  onClick={() => onChangeStatus(p.id, STATUS_OPTIONS[nextIndex])}
                  className="rounded-full border border-[var(--border-hairline-strong)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent-primary)] transition-colors hover:border-[var(--accent-primary)]"
                >
                  {STATUS_LABEL[p.status]}
                </button>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--text-secondary)]">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.matchedSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[color-mix(in_srgb,var(--color-teal-400)_40%,transparent)] px-2 py-0.5 text-[10px] text-[var(--color-teal-300)]"
                  >
                    {s}
                  </span>
                ))}
                {p.developmentAreas.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--border-hairline-strong)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]"
                  >
                    develop: {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
