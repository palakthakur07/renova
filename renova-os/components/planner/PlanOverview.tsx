"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { RehabilitationPlan } from "@/types/planner";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

/** PlanOverview — the transition into the generated roadmap (brief §20). */
export function PlanOverview({ plan }: { plan: RehabilitationPlan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal-500) 10%, transparent) 0%, transparent 70%)" }}
      />
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Rehabilitation roadmap
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
        {plan.primaryGoalTitle}
      </h2>
      <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--text-secondary)]">{plan.summary}</p>

      <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
        <Stat label="Estimated duration" value={`${plan.estimatedDurationWeeks} weeks`} />
        <Stat label="Recommended activities" value={String(plan.recommendations.length)} />
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Plan confidence</p>
          <Badge tone={CONFIDENCE_TONE[plan.confidence]}>{plan.confidence}</Badge>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
      <p className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
