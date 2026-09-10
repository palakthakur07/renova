"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { MilestoneAnalytics as MilestoneAnalyticsData } from "@/types/analytics";

const SEGMENTS: { key: keyof Pick<MilestoneAnalyticsData, "completedPct" | "inProgressPct" | "needsReviewPct">; label: string; color: string }[] = [
  { key: "completedPct", label: "Completed", color: "var(--color-teal-400)" },
  { key: "inProgressPct", label: "In Progress", color: "var(--accent-primary)" },
  { key: "needsReviewPct", label: "Needs Review", color: "var(--color-gold-500)" },
];

/** MilestoneAnalytics — brief §11: completed / in progress / needs review, linking through to Progress. */
export function MilestoneAnalyticsPanel({ data, show }: { data: MilestoneAnalyticsData; show: boolean }) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">Milestones</p>
        <button
          onClick={() => router.push("/progress")}
          className="text-[11px] text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          View progress →
        </button>
      </div>

      <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
        {SEGMENTS.map((seg, i) => (
          <motion.div
            key={seg.key}
            className="h-full"
            style={{ background: seg.color }}
            initial={{ width: 0 }}
            animate={{ width: show ? `${data[seg.key]}%` : 0 }}
            transition={{ duration: 0.8, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {SEGMENTS.map((seg) => (
          <div key={seg.key}>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: seg.color }} />
              <p className="text-[11px] text-[var(--text-secondary)]">{seg.label}</p>
            </div>
            <p className="mt-0.5 text-[15px] font-semibold text-[var(--text-primary)]">{data[seg.key]}%</p>
          </div>
        ))}
      </div>

      <p className="mt-3 border-t border-[var(--border-hairline)] pt-3 text-[11px] text-[var(--text-muted)]">
        {data.completedCount} completed this period · {data.overdueCount} milestones overdue
      </p>
    </motion.div>
  );
}
