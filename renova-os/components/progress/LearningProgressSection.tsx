"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLearningProgress } from "@/components/providers/LearningProgressProvider";
import type { LearningProgressSnapshot } from "@/types/progress";

/**
 * LearningProgressSection — connects directly to Phase 6 (brief §16,
 * §50). Course/lesson/assessment totals come from the static demo
 * baseline, but lessons completed, learning hours, and average score
 * read live from useLearningProgress() — the same module-level store
 * the Learning Companion writes to — so completing a lesson there is
 * reflected here without any duplicate data source.
 */
export function LearningProgressSection({ baseline, show }: { baseline: LearningProgressSnapshot; show: boolean }) {
  const { progress } = useLearningProgress();
  const lessonsCompleted = Math.max(progress.lessonsCompleted.length, baseline.lessonsCompleted);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Learning progress
        </p>
        <Link
          href="/learning"
          className="flex items-center gap-1 text-[12px] font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Open Learning Companion
          <ArrowUpRight size={12} />
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-5">
        <Stat value={`${baseline.coursesCompleted} / ${baseline.coursesTotal}`} label="Courses" />
        <Stat value={`${lessonsCompleted} / ${baseline.lessonsTotal}`} label="Lessons" />
        <Stat value={String(baseline.assessmentsTaken)} label="Assessments" />
        <Stat value={`${progress.averageAssessmentScorePct}%`} label="Average score" />
        <Stat value={`${baseline.learningHours}h`} label="Learning hours" />
      </div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-[var(--text-primary)]">
        {value}
      </p>
      <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
