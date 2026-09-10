"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import type { CounselorActivitySummary } from "@/types/analytics";

/**
 * CounselorActivity — brief §13. Operational workload visibility
 * only — sessions, follow-ups, reviews, pending notes — never a
 * per-counselor scorecard or ranking (brief §13, §29).
 */
export function CounselorActivityPanel({ data, show }: { data: CounselorActivitySummary; show: boolean }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HeartHandshake size={14} className="text-[var(--accent-structure)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Counselor activity
          </p>
        </div>
        <button
          onClick={() => router.push("/counselor")}
          className="text-[11px] text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Open counselor →
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Stat label="Sessions this month" value={data.sessionsThisMonth} />
        <Stat label="Follow-ups due" value={data.followUpsDue} />
        <Stat label="Reviews completed" value={data.reviewsCompleted} />
        <Stat label="Notes pending" value={data.notesPending} />
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-[11px] text-[var(--text-secondary)]">{label}</p>
      <p className="mt-0.5 text-[17px] font-semibold text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
