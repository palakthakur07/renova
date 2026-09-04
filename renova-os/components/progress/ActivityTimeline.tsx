"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, MessageCircleHeart, ClipboardCheck, Users } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ActivityEvent } from "@/types/progress";

const CATEGORY_ICON: Record<ActivityEvent["category"], typeof GraduationCap> = {
  education: GraduationCap,
  skills: Sparkles,
  counseling: MessageCircleHeart,
  program: Users,
  assessment: ClipboardCheck,
};

/** ActivityTimeline — recent rehabilitation activity (brief §12), demo data only. Each row opens ActivityDrawer for detail. */
export function ActivityTimeline({
  activities,
  show,
  onSelect,
}: {
  activities: ActivityEvent[];
  show: boolean;
  onSelect: (activity: ActivityEvent) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Recent activity</p>

      <ul className="mt-4 space-y-1">
        {activities.map((a, i) => {
          const Icon = CATEGORY_ICON[a.category];
          return (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: show ? 1 : 0, x: show ? 0 : -8 }}
              transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => onSelect(a)}
                className="flex w-full items-start gap-3 rounded-[var(--radius-md)] px-3 py-3 text-left transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface-raised)] text-[var(--accent-primary)]">
                  <Icon size={14} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-medium text-[var(--text-primary)]">{a.activity}</span>
                    <span className="shrink-0 font-mono text-[11px] text-[var(--text-muted)]">{a.date}</span>
                  </span>
                  <span className="mt-0.5 block text-[12px] text-[var(--text-secondary)]">{a.impact}</span>
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
