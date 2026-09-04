"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** ProgressInsightsList — plain, structured positive observations (brief §22), no AI framing — these are read directly off the demo data. */
export function ProgressInsightsList({ insights, show }: { insights: string[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-growth)]">
        Progress insights
      </p>
      <ul className="mt-4 space-y-3">
        {insights.map((insight, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: show ? 1 : 0, x: show ? 0 : -8 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-2.5 text-[13px] text-[var(--text-secondary)]"
          >
            <TrendingUp size={14} className="mt-0.5 shrink-0 text-[var(--accent-growth)]" />
            {insight}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
