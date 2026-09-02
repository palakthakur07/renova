"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Module } from "@/types/learning";

/**
 * LearningPath — the module journey (brief §7–8), deliberately reusing
 * the connected-path visual language from Phase 4's JourneyTimeline
 * (illuminated completed segments, breathing current node, muted
 * upcoming) rather than a course-list sidebar, so learning visually
 * continues the same "journey" metaphor as the rehabilitation profile.
 */
export function LearningPath({ modules }: { modules: Module[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Learning path
      </p>

      <div className="relative mt-6">
        {modules.map((m, i) => {
          const isLast = i === modules.length - 1;
          const segmentLit = m.status === "completed";
          return (
            <div key={m.id} className="relative flex gap-4 pb-7 last:pb-0">
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

              <span
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor: m.status === "upcoming" ? "var(--border-hairline-strong)" : "var(--color-teal-400)",
                  background: m.status === "completed" ? "var(--color-teal-400)" : "var(--bg-surface-raised)",
                }}
              >
                {m.status === "completed" && <Check size={14} className="text-[var(--color-graphite-950)]" />}
                {m.status === "current" && (
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full bg-[var(--color-teal-400)]"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </span>

              <div
                className="group relative -mt-0.5 flex-1"
                onMouseEnter={() => setHovered(m.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={m.status === "upcoming" ? "#" : `/learning/course/computer-applications`}
                  className={`block rounded-[var(--radius-md)] px-3 py-1.5 transition-colors duration-200 ${
                    m.status !== "upcoming" ? "hover:bg-[var(--bg-surface-raised)]" : "pointer-events-none"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className={`text-[14px] font-medium ${m.status === "upcoming" ? "text-[var(--text-muted)]" : "text-[var(--text-primary)]"}`}>
                      {m.title}
                    </p>
                    {m.status === "current" && <span className="text-[11px] text-[var(--accent-primary)]">Current</span>}
                  </div>
                  {m.status === "current" && (
                    <div className="mt-2 h-1 w-40 max-w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
                      <div className="h-full rounded-full bg-[var(--accent-primary)]" style={{ width: `${m.progressPct}%` }} />
                    </div>
                  )}
                </Link>

                {hovered === m.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full z-20 mt-1 w-56 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-3 text-[11px] text-[var(--text-secondary)] shadow-[var(--shadow-2)]"
                  >
                    {m.progressPct}% complete · {m.lessonIds.length} lesson{m.lessonIds.length !== 1 ? "s" : ""}
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
