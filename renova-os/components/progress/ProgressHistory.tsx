"use client";

import { motion } from "framer-motion";
import { calculateTrend } from "@/lib/progress/progressEngine";
import type { ProgressSnapshot } from "@/types/progress";

/**
 * ProgressHistory — the journey over time (brief §30–31). Never
 * implies progress should always increase: a decrease reads as
 * "Progress changed," with an observable reason shown only when the
 * data actually supports one — never an inferred cause.
 */
export function ProgressHistory({ history, show }: { history: ProgressSnapshot[]; show: boolean }) {
  const trend = calculateTrend(history);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Progress history</p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">{trend.summary}</p>

      <ul className="mt-4 space-y-3">
        {history.map((snapshot) => (
          <li key={snapshot.date} className="flex items-start gap-3 text-[13px]">
            <span className="w-16 shrink-0 pt-0.5 font-mono text-[11px] text-[var(--text-muted)]">
              {snapshot.date}
            </span>
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--border-hairline-strong)]" />
            <span className="min-w-0 flex-1">
              <span className="font-medium text-[var(--text-primary)]">{snapshot.overallPct}%</span>
              {snapshot.note && <span className="ml-2 text-[var(--text-muted)]">{snapshot.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
