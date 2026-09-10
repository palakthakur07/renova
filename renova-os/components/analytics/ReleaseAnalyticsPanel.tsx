"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DoorOpen } from "lucide-react";
import { calculateReleasePreparation } from "@/lib/analytics/analyticsEngine";
import type { ReleaseAnalyticsSummary } from "@/types/analytics";

/**
 * ReleaseAnalytics — brief §14. Aggregate completion of documented
 * preparation activities only — never a release/parole probability
 * (brief §14, §29), same principle as Phase 8's engine at population
 * scale.
 */
export function ReleaseAnalyticsPanel({ data, show }: { data: ReleaseAnalyticsSummary; show: boolean }) {
  const router = useRouter();
  const overall = calculateReleasePreparation(data);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DoorOpen size={14} className="text-[var(--accent-primary)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Release preparation
          </p>
        </div>
        <button
          onClick={() => router.push("/release")}
          className="text-[11px] text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Open release →
        </button>
      </div>
      <p className="mt-1 text-[11px] text-[var(--text-muted)]">
        {data.upcomingReleases} upcoming releases · {overall}% average preparation completion
      </p>

      <div className="mt-4 space-y-3">
        {data.categories.map((c) => (
          <div key={c.id}>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-[var(--text-primary)]">{c.label}</span>
              <span className="font-mono text-[var(--text-muted)]">{c.progressPct}%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
              <div className="h-full rounded-full bg-[var(--color-teal-400)]" style={{ width: `${c.progressPct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
