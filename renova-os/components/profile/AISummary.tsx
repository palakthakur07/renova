"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { AIProfileInsight } from "@/types/profile";

/**
 * AISummary — the same visually-distinct treatment as Phase 3's
 * AIInsights (a slow drifting glow, not a flat hairline card), so the
 * two "the system is analyzing" moments in the product read as one
 * consistent visual language rather than two different AI patterns.
 */
export function AISummary({
  summary,
  show,
  onOpen,
}: {
  summary: AIProfileInsight;
  show: boolean;
  onOpen: () => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 h-40 w-96 opacity-40"
        style={{
          background: "radial-gradient(closest-side, color-mix(in srgb, var(--color-teal-500) 22%, transparent), transparent 70%)",
        }}
        initial={{ left: "0%" }}
        animate={reducedMotion ? undefined : { left: ["0%", "55%", "0%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex items-center gap-2">
        <Sparkles size={16} className="text-[var(--accent-primary)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          ReNova intelligence
        </p>
      </div>

      <p className="relative mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">
        {summary.observation}
      </p>

      <div className="relative mt-4 rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-3.5">
        <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Why this matters</p>
        <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
          Current strengths align with several available vocational pathways.
        </p>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-[var(--border-hairline-strong)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
          AI generated · Human review required
        </span>
        <button
          onClick={onOpen}
          className="flex items-center gap-1 text-[12px] font-medium text-[var(--accent-primary)]"
        >
          View full analysis
          <ArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}
