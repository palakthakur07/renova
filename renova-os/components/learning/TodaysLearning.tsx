"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Lesson } from "@/types/learning";

/** TodaysLearning — the focused single call-to-action (brief §9). */
export function TodaysLearning({ lesson }: { lesson: Lesson }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Today&apos;s learning
      </p>

      <h3 className="mt-2 font-[family-name:var(--font-display)] text-[20px] font-semibold text-[var(--text-primary)]">
        {lesson.title}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-3 text-[12px] text-[var(--text-secondary)]">
        <span className="flex items-center gap-1"><Clock size={12} /> {lesson.estimatedMinutes} min</span>
        <Badge tone="neutral">{lesson.skill}</Badge>
        <Badge tone="structure">{lesson.difficulty}</Badge>
      </div>

      <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5">
        <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Why this lesson</p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--text-secondary)]">{lesson.whyThisLesson}</p>
      </div>

      <Link
        href={`/learning/lesson/${lesson.id}`}
        className="mt-5 inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-off-white)] px-5 py-2.5 text-[14px] font-medium text-[var(--color-graphite-900)] transition-transform hover:-translate-y-0.5"
      >
        Start lesson
      </Link>
    </div>
  );
}
