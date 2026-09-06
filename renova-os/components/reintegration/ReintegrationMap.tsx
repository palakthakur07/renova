"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { STATUS_LABEL } from "@/lib/reintegration/reintegrationEngine";
import type { ReadinessMapArea, PreparationStatus } from "@/types/reintegration";

const STATUS_STYLE: Record<PreparationStatus, string> = {
  strong: "border-[color-mix(in_srgb,var(--color-teal-400)_45%,transparent)] text-[var(--color-teal-300)]",
  "in-progress": "border-[color-mix(in_srgb,var(--accent-primary)_45%,transparent)] text-[var(--accent-primary)]",
  "needs-attention": "border-[color-mix(in_srgb,var(--color-gold-400)_45%,transparent)] text-[var(--color-gold-400)]",
  "not-started": "border-[var(--border-hairline-strong)] text-[var(--text-muted)]",
};

const STATUS_FILL: Record<PreparationStatus, string> = {
  strong: "var(--color-teal-400)",
  "in-progress": "var(--accent-primary)",
  "needs-attention": "var(--color-gold-400)",
  "not-started": "var(--text-muted)",
};

/**
 * ReintegrationMap — "Reintegration Readiness Map" (brief §3). Ten
 * areas, each with a transparent preparation status — deliberately
 * never a probability of successful release, per the brief's core
 * language rule (§25).
 */
export function ReintegrationMap({ areas, show }: { areas: ReadinessMapArea[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Reintegration readiness map
      </p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        Preparation status across every area that supports the next chapter — not a prediction of release.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {areas.map((area, i) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-[var(--radius-md)] border bg-[var(--bg-surface-raised)] p-3.5 ${STATUS_STYLE[area.status]}`}
            title={area.note}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: STATUS_FILL[area.status] }} />
              <p className="text-[12px] font-medium text-[var(--text-primary)]">{area.label}</p>
            </div>
            <p className="mt-1.5 text-[11px] font-medium">{STATUS_LABEL[area.status]}</p>
            <p className="mt-1.5 text-[11px] leading-snug text-[var(--text-secondary)]">{area.note}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
