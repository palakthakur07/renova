"use client";

import { motion } from "framer-motion";
import { ScoreRing } from "./ScoreRing";
import type { RehabilitationProgress } from "@/types/profile";

/**
 * ProgressOverview — the primary profile metric (brief §7). The
 * framing sentence directly under the number is not optional copy —
 * it's the guardrail against reading "72%" as "72% good person."
 */
export function ProgressOverview({
  progress,
  show,
  onOpenExplanation,
}: {
  progress: RehabilitationProgress;
  show: boolean;
  onOpenExplanation: () => void;
}) {
  return (
    <motion.button
      onClick={onOpenExplanation}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex w-full flex-col items-start gap-5 rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 text-left transition-colors duration-200 hover:border-[var(--accent-primary)] sm:flex-row sm:items-center"
    >
      <ScoreRing value={progress.overall} show={show} />
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Rehabilitation progress
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">
          Completion of the current rehabilitation journey — based on education, skills,
          program participation, counseling engagement, and completed milestones.
        </p>
        <span className="mt-3 inline-block text-[12px] font-medium text-[var(--accent-primary)]">
          Tap to see the breakdown →
        </span>
      </div>
    </motion.button>
  );
}
