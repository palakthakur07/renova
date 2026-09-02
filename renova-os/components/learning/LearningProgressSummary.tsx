"use client";

import type { LearningProgress } from "@/types/learning";

/**
 * LearningProgressSummary — the analytics area (brief §30). Plain
 * numbers, no gamification — "4 sessions this week," not a streak
 * counter with fire emoji, per the brief's explicit instruction to
 * keep this mature and institutional.
 */
export function LearningProgressSummary({ progress }: { progress: LearningProgress }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Learning activity
      </p>
      <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
        <Stat value={String(progress.lessonsCompleted.length)} label="Lessons completed" />
        <Stat value={`${progress.learningHours}h`} label="Learning hours" />
        <Stat value={`${progress.averageAssessmentScorePct}%`} label="Average assessment score" />
        <Stat value={`${progress.streakSessionsThisWeek}`} label="Sessions this week" />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">{value}</p>
      <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
