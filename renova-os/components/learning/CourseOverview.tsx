"use client";

import { motion } from "framer-motion";
import { ModuleList } from "./ModuleList";
import { Badge } from "@/components/ui/Badge";
import type { Course } from "@/types/learning";

export function CourseOverview({ course, progressPct }: { course: Course; progressPct: number }) {
  return (
    <div className="mx-auto max-w-[900px] space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">Course</p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          {course.title}
        </h1>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--text-secondary)]">{course.description}</p>

        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-[13px]">
          <div>
            <p className="text-[var(--text-muted)]">Goal</p>
            <p className="font-medium text-[var(--text-primary)]">{course.goal}</p>
          </div>
          <div>
            <p className="text-[var(--text-muted)]">Duration</p>
            <p className="font-medium text-[var(--text-primary)]">{course.durationWeeks} weeks</p>
          </div>
          <div>
            <p className="text-[var(--text-muted)]">Progress</p>
            <p className="font-medium text-[var(--text-primary)]">{progressPct}%</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {course.skills.map((s) => (
            <Badge key={s} tone="neutral">{s}</Badge>
          ))}
        </div>

        <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5 text-[12.5px]">
          <span className="text-[var(--text-muted)]">Connects to rehabilitation goal — </span>
          <span className="font-medium text-[var(--text-primary)]">{course.rehabilitationGoal}</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
          After completing this course, the learner should be able to:
        </p>
        <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {course.objectives.map((o) => (
            <li key={o.id} className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] p-3 text-[12.5px] text-[var(--text-secondary)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-primary)]" />
              {o.label}
            </li>
          ))}
        </ul>

        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Modules</p>
        <ModuleList modules={course.modules} />
      </motion.div>
    </div>
  );
}
