"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/types/learning";

/**
 * LearningHeader — the personalized greeting (brief §5) plus the
 * explicit connection back to the rehabilitation plan (brief §6),
 * proving learning isn't an isolated page. Links to /planner where
 * the corresponding goal actually lives.
 */
export function LearningHeader({ course, progressPct }: { course: Course; progressPct: number }) {
  const currentModule = course.modules.find((m) => m.status === "current");

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Continue your path
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
        You&apos;re building toward your {course.rehabilitationGoal.toLowerCase()} goal.
      </h1>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[15px] font-medium text-[var(--text-primary)]">{course.title}</p>
          <p className="mt-0.5 text-[13px] text-[var(--text-secondary)]">
            {currentModule ? `Module ${currentModule.order} of ${course.modules.length} — ${currentModule.title}` : ""} ·{" "}
            {progressPct}% complete
          </p>
          <div className="mt-2 h-1.5 w-56 max-w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
            <motion.div
              className="h-full rounded-full bg-[var(--accent-primary)]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
        <Link
          href="/learning/lesson/lesson-variables"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-[var(--radius-sm)] bg-[var(--color-off-white)] px-5 py-2.5 text-[14px] font-medium text-[var(--color-graphite-900)] transition-transform hover:-translate-y-0.5"
        >
          Continue learning
        </Link>
      </div>

      <Link
        href="/planner"
        className="mt-6 flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-4 transition-colors hover:border-[var(--accent-primary)]"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
            Connected rehabilitation goal
          </p>
          <p className="mt-1 text-[13px] font-medium text-[var(--text-primary)]">{course.rehabilitationGoal}</p>
          <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
            Current learning contributes to: {course.skills.join(", ")}
          </p>
        </div>
        <ArrowUpRight size={16} className="shrink-0 text-[var(--text-muted)]" />
      </Link>
    </div>
  );
}
