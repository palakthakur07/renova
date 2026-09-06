"use client";

import { motion } from "framer-motion";
import { Check, Circle, CircleDot, LifeBuoy } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { PreparationItem, ChecklistState } from "@/types/reintegration";

const STATE_ICON: Record<ChecklistState, typeof Check> = {
  completed: Check,
  "in-progress": CircleDot,
  "not-started": Circle,
  "needs-staff-support": LifeBuoy,
};
const STATE_COLOR: Record<ChecklistState, string> = {
  completed: "var(--color-teal-400)",
  "in-progress": "var(--accent-primary)",
  "not-started": "var(--text-muted)",
  "needs-staff-support": "var(--color-gold-400)",
};
const STATE_LABEL: Record<ChecklistState, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  "not-started": "Not started",
  "needs-staff-support": "Needs staff support",
};

/**
 * PreparationChecklist — "Preparation checklist" (brief §8).
 * Deliberately named "preparation checklist," never "release
 * requirements" — this module makes no claim about legal
 * requirements, only what practical preparation has been completed.
 */
export function PreparationChecklist({ items, show }: { items: PreparationItem[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const completed = items.filter((i) => i.status === "completed").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Preparation checklist
        </p>
        <span className="font-mono text-[12px] text-[var(--text-muted)]">
          {completed}/{items.length} completed
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {items.map((item, i) => {
          const Icon = STATE_ICON[item.status];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5"
            >
              <Icon size={15} className="mt-0.5 shrink-0" style={{ color: STATE_COLOR[item.status] }} />
              <div className="min-w-0">
                <p className="text-[12.5px] font-medium text-[var(--text-primary)]">{item.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-[var(--text-secondary)]">{item.description}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
                  {item.category} · {STATE_LABEL[item.status]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
