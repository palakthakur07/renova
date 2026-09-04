"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { JourneyPhase } from "@/types/progress";

/**
 * ProgressTrajectory — the signature visual of Phase 7 (brief §9–10,
 * §43). A horizontal connected path rather than JourneyTimeline's
 * vertical list (Phase 4) or a set of separate dashboards: completed
 * phases are illuminated, the current phase breathes gently, upcoming
 * phases stay muted, and a slow gradient sweep along the completed
 * segment reads as forward motion rather than a static illustration.
 */
export function ProgressTrajectory({ phases, show }: { phases: JourneyPhase[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const completedCount = phases.filter((p) => p.state !== "upcoming").length;
  const lineProgress = phases.length > 1 ? (completedCount - 0.5) / (phases.length - 1) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Rehabilitation journey
      </p>

      <div className="mt-8 overflow-x-auto pb-2">
        <div className="relative flex min-w-[640px] items-start justify-between px-2">
          <div className="absolute left-6 right-6 top-4 h-px bg-[var(--border-hairline)]" />
          <motion.div
            className="absolute left-6 top-4 h-px"
            style={{
              background: "linear-gradient(to right, var(--color-teal-400), var(--color-cyan-400))",
            }}
            initial={{ width: 0 }}
            animate={{ width: show ? `calc(${lineProgress * 100}% - ${lineProgress * 48}px)` : 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
          {!reducedMotion && (
            <motion.div
              aria-hidden
              className="absolute top-2.5 h-2.5 w-16 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in srgb, var(--color-teal-400) 60%, transparent), transparent 75%)",
              }}
              animate={{ left: ["4%", `${Math.max(4, lineProgress * 92)}%`, "4%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {phases.map((phase, i) => (
            <div key={phase.id} className="relative z-10 flex w-24 flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6 }}
                transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor: phase.state === "upcoming" ? "var(--border-hairline-strong)" : "var(--color-teal-400)",
                  background:
                    phase.state === "complete"
                      ? "var(--color-teal-400)"
                      : phase.state === "current"
                      ? "var(--bg-surface-raised)"
                      : "var(--bg-canvas)",
                }}
              >
                {phase.state === "complete" && <Check size={14} className="text-[var(--color-graphite-950)]" />}
                {phase.state === "current" && (
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full bg-[var(--color-teal-400)]"
                    animate={reducedMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
              <p
                className={`mt-2.5 text-[11px] font-medium leading-tight ${
                  phase.state === "upcoming" ? "text-[var(--text-muted)]" : "text-[var(--text-primary)]"
                }`}
              >
                {phase.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
