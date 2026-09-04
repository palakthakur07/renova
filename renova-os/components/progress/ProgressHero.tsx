"use client";

import { motion } from "framer-motion";
import { ScoreRing } from "@/components/profile/ScoreRing";
import { calculateOverallProgress } from "@/lib/progress/progressEngine";
import type { ProgressCategory } from "@/types/progress";

/**
 * ProgressHero — the primary progress indicator (brief §5). Reuses
 * ScoreRing from the Human Growth Profile rather than a new ring
 * component, per the Phase 7 instruction not to introduce a new
 * visual language. The framing sentence under the number is fixed,
 * not optional copy — same guardrail as ProgressOverview in Phase 4.
 */
export function ProgressHero({
  categories,
  show,
  onOpenExplanation,
}: {
  categories: ProgressCategory[];
  show: boolean;
  onOpenExplanation: () => void;
}) {
  const overall = calculateOverallProgress(categories);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9"
    >
      <div className="flex flex-col items-start gap-7 sm:flex-row sm:items-center">
        <button onClick={onOpenExplanation} className="shrink-0 rounded-full transition-transform hover:scale-[1.02]">
          <ScoreRing value={overall} show={show} size={168} />
        </button>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Rehabilitation progress
          </p>
          <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[var(--text-secondary)]">
            Overall progress across active rehabilitation activities — education, skills, program
            participation, learning, and completed milestones.
          </p>
          <button
            onClick={onOpenExplanation}
            className="mt-3 inline-block text-[12px] font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
          >
            How is this calculated? →
          </button>
        </div>

        <div className="grid w-full shrink-0 grid-cols-2 gap-x-6 gap-y-4 sm:w-auto sm:grid-cols-1 md:grid-cols-2">
          {categories.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{c.label}</p>
              <p className="mt-0.5 text-[18px] font-semibold text-[var(--text-primary)]">{c.valuePct}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
