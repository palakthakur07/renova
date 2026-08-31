"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { AIInsight } from "@/types/dashboard";

const CONFIDENCE_LABEL: Record<AIInsight["confidence"], string> = {
  high: "High confidence",
  medium: "Medium confidence",
  low: "Low confidence",
};

/**
 * AIInsights — deliberately styled differently from every other module:
 * a slow-drifting gradient border instead of a flat hairline, so it
 * reads as "the system actively analyzing" rather than another static
 * card. Language throughout stays in decision-support register — see
 * lib/demo-data/insights.ts for why "recommended for review," never
 * "AI has determined."
 */
export function AIInsights({
  insights,
  show,
  onSelect,
}: {
  insights: AIInsight[];
  show: boolean;
  onSelect: (insight: AIInsight) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 h-40 w-[420px] opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-teal-500) 22%, transparent), transparent 70%)",
        }}
        initial={{ left: "5%" }}
        animate={reducedMotion ? undefined : { left: ["5%", "65%", "5%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex items-center gap-2">
        <Sparkles size={16} className="text-[var(--accent-primary)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          ReNova intelligence
        </p>
      </div>
      <p className="relative mt-1 text-[13px] text-[var(--text-secondary)]">
        Patterns observed in facility data. Decision support — review required.
      </p>

      <div className="relative mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {insights.map((insight, i) => (
          <motion.button
            key={insight.id}
            onClick={() => onSelect(insight)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -2 }}
            className="flex flex-col items-start rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4 text-left transition-colors duration-200 hover:border-[var(--accent-primary)]"
          >
            <span className="mb-2 rounded-full border border-[var(--border-hairline-strong)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
              {CONFIDENCE_LABEL[insight.confidence]}
            </span>
            <p className="text-[13px] font-medium leading-snug text-[var(--text-primary)]">
              {insight.observation}
            </p>
            <span className="mt-3 flex items-center gap-1 text-[12px] font-medium text-[var(--accent-primary)]">
              {insight.actionLabel}
              <ArrowRight size={12} />
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
