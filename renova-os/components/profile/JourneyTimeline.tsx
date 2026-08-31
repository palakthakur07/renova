"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { Milestone } from "@/types/profile";

/**
 * JourneyTimeline — the signature component of the profile (brief §13–15).
 * A connected vertical path rather than a plain list: completed segments
 * are solid and illuminated, the current milestone breathes gently, and
 * upcoming ones stay muted. Clicking a node opens the detail drawer;
 * hovering reveals a quick preview inline.
 */
export function JourneyTimeline({
  milestones,
  show,
  onSelect,
}: {
  milestones: Milestone[];
  show: boolean;
  onSelect: (milestone: Milestone) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Rehabilitation journey
      </p>

      <div className="relative mt-6">
        {milestones.map((m, i) => {
          const isLast = i === milestones.length - 1;
          const segmentLit = m.state === "completed";
          return (
            <div key={m.id} className="relative flex gap-4 pb-8 last:pb-0">
              {!isLast && (
                <span
                  className="absolute left-[15px] top-8 w-px"
                  style={{
                    height: "calc(100% - 1rem)",
                    background: segmentLit
                      ? "linear-gradient(to bottom, var(--color-teal-400), var(--border-hairline-strong))"
                      : "var(--border-hairline)",
                  }}
                />
              )}

              <motion.button
                onClick={() => onSelect(m)}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6 }}
                transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 hover:scale-110"
                style={{
                  borderColor:
                    m.state === "upcoming" ? "var(--border-hairline-strong)" : "var(--color-teal-400)",
                  background:
                    m.state === "completed"
                      ? "var(--color-teal-400)"
                      : m.state === "current"
                      ? "var(--bg-surface-raised)"
                      : "var(--bg-canvas)",
                }}
              >
                {m.state === "completed" && <Check size={14} className="text-[var(--color-graphite-950)]" />}
                {m.state === "current" && (
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full bg-[var(--color-teal-400)]"
                    animate={reducedMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </motion.button>

              <motion.button
                onClick={() => onSelect(m)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: show ? 1 : 0, x: show ? 0 : -8 }}
                transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.09 + 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group -mt-0.5 flex-1 rounded-[var(--radius-md)] px-3 py-1.5 text-left transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p
                    className={`text-[14px] font-medium ${
                      m.state === "upcoming" ? "text-[var(--text-muted)]" : "text-[var(--text-primary)]"
                    }`}
                  >
                    {m.title}
                  </p>
                  {m.state === "completed" && <span className="text-[11px] text-[var(--accent-growth)]">Completed</span>}
                  {m.state === "current" && <span className="text-[11px] text-[var(--accent-primary)]">In progress</span>}
                  {m.state === "upcoming" && <span className="text-[11px] text-[var(--text-muted)]">Upcoming</span>}
                </div>
                <p className="mt-0.5 text-[12px] text-[var(--text-muted)]">
                  {m.program}
                  {m.date ? ` · ${m.date}` : ""}
                </p>
                {m.state === "current" && (
                  <div className="mt-2 h-1 w-40 max-w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
                    <motion.div
                      className="h-full rounded-full bg-[var(--accent-primary)]"
                      initial={{ width: 0 }}
                      animate={{ width: show ? `${m.completionPct}%` : 0 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                )}
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
