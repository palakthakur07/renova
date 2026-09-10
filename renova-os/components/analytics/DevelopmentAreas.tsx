"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { DevelopmentArea } from "@/types/analytics";

/**
 * DevelopmentAreas — brief §9. Deliberately plain "progress" bars
 * with a trend arrow — never labeled or colored as risk/danger
 * (brief §9, §29). `filterArea` narrows to a single area when the
 * Development Area filter is active; "all" shows every area.
 */
export function DevelopmentAreas({
  areas,
  filterArea,
  show,
}: {
  areas: DevelopmentArea[];
  filterArea: string;
  show: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const visible = filterArea === "all" ? areas : areas.filter((a) => a.label === filterArea);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Development areas
      </p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        Which development areas are progressing — and which need more support?
      </p>

      {visible.length === 0 ? (
        <p className="mt-5 text-[12.5px] text-[var(--text-muted)]">No matching activity found.</p>
      ) : (
        <div className="mt-5 space-y-3.5">
          {visible.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-[var(--text-primary)]">{a.label}</span>
                <span className="flex items-center gap-1 font-mono text-[var(--text-muted)]">
                  {a.progressPct}%
                  <span className="flex items-center gap-0.5 text-[var(--accent-growth)]">
                    <TrendingUp size={10} />
                    {a.trendPct}%
                  </span>
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
                <motion.div
                  className="h-full rounded-full bg-[var(--color-teal-400)]"
                  initial={{ width: 0 }}
                  animate={{ width: show ? `${a.progressPct}%` : 0 }}
                  transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
