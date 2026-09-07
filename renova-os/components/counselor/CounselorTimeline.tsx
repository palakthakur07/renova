"use client";

import { motion } from "framer-motion";
import { MessagesSquare, GraduationCap, Briefcase, Target } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { CounselorTimelineEntry, TimelineCategory } from "@/types/counselor";

const CATEGORY_ICON: Record<TimelineCategory, typeof MessagesSquare> = {
  session: MessagesSquare,
  learning: GraduationCap,
  employment: Briefcase,
  goal: Target,
};
const CATEGORY_COLOR: Record<TimelineCategory, string> = {
  session: "var(--accent-primary)",
  learning: "var(--color-teal-400)",
  employment: "var(--accent-structure)",
  goal: "var(--color-gold-400)",
};

/**
 * CounselorTimeline — chronological counseling/support history (brief
 * §10). New notes saved via CounselorNoteForm appear here immediately
 * — the same connection Phase 7/8's activity feeds use, so the
 * counselor sees their own note land in the record right away.
 */
export function CounselorTimeline({ entries, show }: { entries: CounselorTimelineEntry[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Counselor timeline
      </p>

      <div className="mt-5 space-y-0">
        {entries.map((entry, i) => {
          const Icon = CATEGORY_ICON[entry.category];
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: show ? 1 : 0, x: show ? 0 : -8 }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-4 pb-6 last:pb-0"
            >
              {i < entries.length - 1 && (
                <span className="absolute left-[15px] top-8 h-full w-px bg-[var(--border-hairline)]" />
              )}
              <span
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: CATEGORY_COLOR[entry.category], color: CATEGORY_COLOR[entry.category] }}
              >
                <Icon size={13} />
              </span>
              <div className="min-w-0 pb-1">
                <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{entry.date}</p>
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{entry.title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-[var(--text-secondary)]">{entry.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
