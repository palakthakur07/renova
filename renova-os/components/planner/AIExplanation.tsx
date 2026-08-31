"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { RehabilitationPlan } from "@/types/planner";

/**
 * AIExplanation — "Why this path?" (brief §21) plus strengths and
 * development areas (§11–12) in one distinctly-styled panel, matching
 * the AI visual language established in Phases 3–4 (ambient drift,
 * not a flat card).
 */
export function AIExplanation({ plan }: { plan: RehabilitationPlan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 h-40 w-96 opacity-40"
        style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--color-teal-500) 22%, transparent), transparent 70%)" }}
        initial={{ left: "0%" }}
        animate={{ left: ["0%", "55%", "0%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <p className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Why this path?
      </p>
      <p className="relative mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--text-secondary)]">
        Technology-focused learning was prioritized because the profile indicates strong interest in
        digital skills, successful completion of foundational computer training, and high engagement
        with structured learning.
      </p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {plan.strengths.slice(0, 3).map((s) => (
          <span
            key={s.label}
            className="rounded-full border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] px-3 py-1 text-[11px] text-[var(--text-secondary)]"
          >
            {s.label} <span className="text-[var(--text-muted)]">— {s.detail}</span>
          </span>
        ))}
      </div>

      <div className="relative mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Strengths</p>
          <ul className="space-y-1.5">
            {plan.strengths.map((s) => (
              <li key={s.label} className="text-[12.5px] text-[var(--text-secondary)]">
                <span className="text-[var(--text-primary)]">{s.label}</span> — {s.detail}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
            Areas for development
          </p>
          <ul className="space-y-1.5">
            {plan.developmentAreas.map((d) => (
              <li key={d.label} className="text-[12.5px] text-[var(--text-secondary)]">
                <span className="text-[var(--text-primary)]">{d.label}</span> — {d.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <details className="relative mt-6 rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-4">
        <summary className="cursor-pointer text-[12px] font-medium text-[var(--text-primary)]">
          How this recommendation was formed
        </summary>
        <ol className="mt-3 space-y-2">
          {plan.explanationFactors.map((factor, i) => (
            <li key={i} className="flex items-center gap-2 text-[12px] text-[var(--text-secondary)]">
              <span className="font-mono text-[10px] text-[var(--text-muted)]">{i + 1}</span>
              {factor}
              {i < plan.explanationFactors.length - 1 && (
                <ArrowRight size={11} className="ml-auto shrink-0 text-[var(--text-muted)]" />
              )}
            </li>
          ))}
        </ol>
      </details>
    </motion.div>
  );
}
