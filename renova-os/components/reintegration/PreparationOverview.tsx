"use client";

import { motion } from "framer-motion";
import { ScoreRing } from "@/components/profile/ScoreRing";
import { STATUS_LABEL } from "@/lib/reintegration/reintegrationEngine";
import type { ReintegrationCategory } from "@/types/reintegration";

const STATUS_DOT: Record<ReintegrationCategory["status"], string> = {
  strong: "var(--color-teal-400)",
  "in-progress": "var(--accent-primary)",
  "needs-attention": "var(--color-gold-400)",
  "not-started": "var(--text-muted)",
};

/**
 * PreparationOverview — "Reintegration Preparation" hero (brief §4).
 * Deliberately reuses ScoreRing from Phase 4/7 rather than inventing
 * a new ring, and the framing sentence beneath it is fixed copy —
 * "preparation activities completed," never a probability of release.
 */
export function PreparationOverview({
  overallProgress,
  categories,
  show,
  onOpenExplanation,
}: {
  overallProgress: number;
  categories: ReintegrationCategory[];
  show: boolean;
  onOpenExplanation: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9"
    >
      <div className="flex flex-col items-start gap-7 sm:flex-row sm:items-center">
        <button onClick={onOpenExplanation} className="shrink-0 rounded-full transition-transform hover:scale-[1.02]">
          <ScoreRing value={overallProgress} show={show} size={168} />
        </button>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Reintegration preparation
          </p>
          <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[var(--text-secondary)]">
            {overallProgress}% of identified preparation activities and milestones are currently completed. This
            reflects preparation for reintegration — it is not a measure of readiness for release.
          </p>
          <button
            onClick={onOpenExplanation}
            className="mt-3 inline-block text-[12px] font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
          >
            What contributed to this percentage? →
          </button>
        </div>

        <div className="grid w-full shrink-0 grid-cols-2 gap-x-6 gap-y-4 sm:w-auto sm:grid-cols-1 md:grid-cols-2">
          {categories.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: STATUS_DOT[c.status] }} />
                <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{c.name}</p>
              </div>
              <p className="mt-0.5 text-[18px] font-semibold text-[var(--text-primary)]">{c.progress}%</p>
              <p className="text-[11px] text-[var(--text-muted)]">{STATUS_LABEL[c.status]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
