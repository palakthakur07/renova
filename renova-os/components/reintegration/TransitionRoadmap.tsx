"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { RoadmapStage } from "@/types/reintegration";

/**
 * TransitionRoadmap — "Next Chapter Roadmap" (brief §5, §16), the
 * signature visual of Phase 8. Same horizontal connected-path
 * language as Phase 7's ProgressTrajectory, but the metaphor shifts
 * from a completed record of the past to an open path toward what's
 * ahead — the line doesn't stop at "today," it keeps drawing toward
 * the final node, and the current stage sits mid-path rather than at
 * the end. Deliberately avoids anything read as a countdown to
 * release: stages describe preparation work, not a release date.
 */
export function TransitionRoadmap({ stages, show }: { stages: RoadmapStage[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const currentIndex = stages.findIndex((s) => s.status === "current");
  const completedCount = stages.filter((s) => s.status === "complete").length;
  const pathProgress =
    stages.length > 1 ? (completedCount + (currentIndex >= 0 ? 0.5 : 0)) / (stages.length - 1) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Next chapter roadmap
      </p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        The path from current preparation toward the next chapter.
      </p>

      <div className="mt-8 overflow-x-auto pb-2">
        <div className="relative flex min-w-[760px] items-start justify-between px-2">
          <div className="absolute left-6 right-6 top-5 h-px bg-[var(--border-hairline)]" />
          <motion.div
            className="absolute left-6 top-5 h-px"
            style={{ background: "linear-gradient(to right, var(--color-teal-400), var(--accent-primary))" }}
            initial={{ width: 0 }}
            animate={{ width: show ? `calc(${Math.min(1, pathProgress) * 100}% - ${Math.min(1, pathProgress) * 48}px)` : 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
          {!reducedMotion && (
            <motion.div
              aria-hidden
              className="absolute top-3 h-3 w-20 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in srgb, var(--accent-primary) 60%, transparent), transparent 75%)",
              }}
              animate={{ left: ["4%", `${Math.max(4, Math.min(1, pathProgress) * 92)}%`, "4%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {stages.map((stage, i) => (
            <div key={stage.id} className="relative z-10 flex w-28 flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6 }}
                transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor: stage.status === "upcoming" ? "var(--border-hairline-strong)" : "var(--accent-primary)",
                  background:
                    stage.status === "complete"
                      ? "var(--color-teal-400)"
                      : stage.status === "current"
                      ? "var(--bg-surface-raised)"
                      : "var(--bg-canvas)",
                }}
              >
                {stage.status === "complete" && <Check size={15} className="text-[var(--color-graphite-950)]" />}
                {stage.status === "current" && (
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]"
                    animate={reducedMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {stage.status === "upcoming" && (
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">{stage.order}</span>
                )}
              </motion.div>
              <p
                className={`mt-2.5 text-[12px] font-semibold leading-tight ${
                  stage.status === "upcoming" ? "text-[var(--text-muted)]" : "text-[var(--text-primary)]"
                }`}
              >
                {stage.title}
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-[var(--text-muted)]">{stage.description}</p>
              {stage.status !== "upcoming" && (
                <p className="mt-1 font-mono text-[10px] text-[var(--accent-primary)]">{stage.completionPct}%</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : 0.4 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold text-[var(--text-primary)]">
                {stage.order}. {stage.title}
              </p>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">{stage.completionPct}%</span>
            </div>
            <p className="mt-2 text-[11px] font-medium text-[var(--text-secondary)]">Milestone</p>
            <p className="text-[12px] text-[var(--text-primary)]">{stage.milestone}</p>
            <ul className="mt-2 space-y-1">
              {stage.tasks.map((t) => (
                <li key={t} className="flex items-start gap-1.5 text-[11px] leading-snug text-[var(--text-secondary)]">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-2.5 border-t border-[var(--border-hairline)] pt-2.5 text-[11px] text-[var(--accent-primary)]">
              Next: {stage.nextAction}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
