"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { Recommendation, ReviewDecision } from "@/types/planner";

/** PlanReview (05) — the human-review summary (brief §32) before approval. */
export function PlanReview({
  recommendations,
  decisions,
  onBack,
  onApprove,
}: {
  recommendations: Recommendation[];
  decisions: Record<string, ReviewDecision>;
  onBack: () => void;
  onApprove: () => void;
}) {
  const counts = { accepted: 0, modified: 0, removed: 0 };
  recommendations.forEach((r) => {
    const d = decisions[r.id] ?? "accepted";
    counts[d]++;
  });

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">Plan review</p>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <ReviewStat label="AI recommendations" value={recommendations.length} color="var(--text-primary)" />
          <ReviewStat label="Accepted" value={counts.accepted} color="var(--accent-growth)" />
          <ReviewStat label="Modified" value={counts.modified} color="var(--accent-structure)" />
          <ReviewStat label="Removed" value={counts.removed} color="var(--accent-critical)" />
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5 text-[13px] text-[var(--text-secondary)]">
          Review complete. The plan below reflects your decisions and is ready for approval.
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="ghost" onClick={onBack}>Back to recommendations</Button>
        <Button onClick={onApprove}>Continue to approval</Button>
      </div>
    </motion.div>
  );
}

function ReviewStat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-display)] text-[26px] font-semibold" style={{ color }}>
        {value}
      </p>
      <p className="text-[11px] text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
