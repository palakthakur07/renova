"use client";

import { motion } from "framer-motion";
import { Users, CalendarClock, ClipboardList, Target } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { CounselorOverviewStats } from "@/types/counselor";

/**
 * OverviewStats — "COUNSELOR WORKSPACE" overview strip (brief §4):
 * active individuals, upcoming sessions, follow-ups due, goals
 * needing review. A small fictional caseload, not tied to individual
 * profiles that don't exist in this prototype — see the demo-data
 * file's comment on why only Arjun has full depth.
 */
export function OverviewStats({ stats, show }: { stats: CounselorOverviewStats; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const cards = [
    { icon: Users, label: "Active individuals", value: stats.activeIndividuals },
    { icon: CalendarClock, label: "Upcoming sessions", value: stats.upcomingSessions },
    { icon: ClipboardList, label: "Follow-ups due", value: stats.followUpsDue },
    { icon: Target, label: "Goals needing review", value: stats.goalsNeedingReview },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
          transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-4"
        >
          <c.icon size={15} className="text-[var(--accent-structure)]" />
          <p className="mt-2.5 font-[family-name:var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
            {c.value}
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-[var(--text-secondary)]">{c.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
