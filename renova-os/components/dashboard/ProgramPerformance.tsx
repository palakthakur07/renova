"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { ProgramPerformance as ProgramPerformanceType } from "@/types/dashboard";

/**
 * ProgramPerformance — a compact ranked list (by average progress),
 * not a data table. Hovering a row reveals a contextual overlay with
 * the fuller breakdown (brief §14); clicking opens ProgramDrawer.
 */
export function ProgramPerformance({
  programs,
  show,
  onSelect,
}: {
  programs: ProgramPerformanceType[];
  show: boolean;
  onSelect: (program: ProgramPerformanceType) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const ranked = [...programs].sort((a, b) => b.avgProgressPct - a.avgProgressPct);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Program performance
      </p>

      <ul className="mt-4 flex-1 space-y-1">
        {ranked.map((p, i) => (
          <li key={p.id} className="relative">
            <button
              onClick={() => onSelect(p)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.id)}
              onBlur={() => setHovered(null)}
              className="flex w-full items-center gap-3 rounded-[var(--radius-sm)] px-2 py-2.5 text-left transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]"
            >
              <span className="w-4 shrink-0 font-mono text-[11px] text-[var(--text-muted)]">
                {i + 1}
              </span>
              <span className="w-36 shrink-0 truncate text-[13px] text-[var(--text-primary)]">
                {p.name}
              </span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
                <motion.span
                  className="block h-full rounded-full bg-[var(--accent-primary)]"
                  initial={{ width: 0 }}
                  animate={{ width: show ? `${p.avgProgressPct}%` : 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
              <span className="w-9 shrink-0 text-right font-mono text-[12px] text-[var(--text-secondary)]">
                {p.avgProgressPct}%
              </span>
            </button>

            <AnimatePresence>
              {hovered === p.id && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="glass-panel absolute left-1/2 top-full z-30 mt-1.5 w-64 -translate-x-1/2 rounded-[var(--radius-md)] p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-primary)]">
                    {p.name}
                  </p>
                  <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px]">
                    <span className="text-[var(--text-muted)]">Participants</span>
                    <span className="text-right text-[var(--text-primary)]">{p.enrollment}</span>
                    <span className="text-[var(--text-muted)]">Completion</span>
                    <span className="text-right text-[var(--text-primary)]">{p.completionPct}%</span>
                    <span className="text-[var(--text-muted)]">Avg. progress</span>
                    <span className="text-right text-[var(--text-primary)]">{p.avgProgressPct}%</span>
                    <span className="text-[var(--text-muted)]">Trend</span>
                    <span
                      className={`flex items-center justify-end gap-0.5 ${
                        p.trendPct >= 0 ? "text-[var(--accent-growth)]" : "text-[var(--accent-critical)]"
                      }`}
                    >
                      {p.trendPct >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {Math.abs(p.trendPct)}%
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
