"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ContinuityPlanEntry } from "@/types/reintegration";

/**
 * ContinuityPlan — "Continuity Plan" (brief §10). The idea is that
 * rehabilitation doesn't abruptly end when institutional support
 * ends — three cards continuing the same visual language as the rest
 * of the page rather than a hard "end of journey" screen.
 */
export function ContinuityPlan({ entries, show }: { entries: ContinuityPlanEntry[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Continuity plan
      </p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        Support continues beyond the facility — a plan for the first days, weeks, and months ahead.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.period}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
          >
            <p className="text-[13px] font-semibold text-[var(--text-primary)]">{entry.label}</p>
            <ul className="mt-3 space-y-1.5">
              {entry.actions.map((a) => (
                <li key={a} className="flex items-start gap-2 text-[12px] leading-snug text-[var(--text-secondary)]">
                  <CheckSquare size={13} className="mt-0.5 shrink-0 text-[var(--color-teal-400)]" />
                  {a}
                </li>
              ))}
            </ul>
            {entry.supportContacts.length > 0 && (
              <p className="mt-3 border-t border-[var(--border-hairline)] pt-2.5 text-[11px] text-[var(--text-muted)]">
                Support: {entry.supportContacts.join(", ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
