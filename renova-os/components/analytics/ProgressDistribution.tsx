"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { calculateStageTotal, calculateStagePct } from "@/lib/analytics/analyticsEngine";
import type { ProgressStageCount } from "@/types/analytics";

/**
 * ProgressDistribution — brief §10. How active rehabilitation
 * journeys are distributed across stages — rehabilitation-stage
 * language only, deliberately never "risk" tiers (brief §10, §29).
 */
export function ProgressDistribution({ stages, show }: { stages: ProgressStageCount[]; show: boolean }) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();
  const total = calculateStageTotal(stages);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Progress distribution
        </p>
        <button
          onClick={() => router.push("/progress")}
          className="text-[11px] text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          View progress →
        </button>
      </div>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        {total} active rehabilitation journeys across current stages.
      </p>

      <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
        {stages.map((s, i) => (
          <motion.div
            key={s.id}
            className="h-full"
            style={{ background: STAGE_COLOR[i % STAGE_COLOR.length] }}
            initial={{ width: 0 }}
            animate={{ width: show ? `${calculateStagePct(s, stages)}%` : 0 }}
            transition={{ duration: 0.8, delay: reducedMotion ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stages.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 6 }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: STAGE_COLOR[i % STAGE_COLOR.length] }} />
              <p className="text-[11px] leading-snug text-[var(--text-secondary)]">{s.label}</p>
            </div>
            <p className="mt-0.5 text-[16px] font-semibold text-[var(--text-primary)]">{s.count}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const STAGE_COLOR = [
  "var(--text-muted)",
  "var(--accent-structure)",
  "var(--accent-primary)",
  "var(--color-gold-500)",
  "var(--color-teal-400)",
];
