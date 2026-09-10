"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, HeartHandshake, DoorOpen } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { AnalyticsActivityEvent } from "@/types/analytics";

const MODULE_ICON = {
  learning: GraduationCap,
  progress: TrendingUp,
  counselor: HeartHandshake,
  release: DoorOpen,
} as const;
const MODULE_COLOR = {
  learning: "var(--color-teal-400)",
  progress: "var(--accent-primary)",
  counselor: "var(--accent-structure)",
  release: "var(--color-gold-500)",
} as const;

/** AnalyticsActivity — RECENT ACTIVITY (brief §3), a cross-module feed proving the ecosystem loop (brief §28). */
export function AnalyticsActivity({ events, show }: { events: AnalyticsActivityEvent[]; show: boolean }) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Recent activity
      </p>

      <div className="mt-4 space-y-2.5">
        {events.length === 0 ? (
          <p className="text-[12.5px] text-[var(--text-muted)]">No rehabilitation activity available for this period.</p>
        ) : (
          events.map((e, i) => {
            const Icon = MODULE_ICON[e.module];
            return (
              <motion.button
                key={e.id}
                onClick={() => router.push(e.href)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: show ? 1 : 0, y: show ? 0 : 6 }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full items-start gap-3 rounded-[var(--radius-md)] border border-transparent p-2.5 text-left transition-colors hover:border-[var(--border-hairline)] hover:bg-[var(--bg-surface-raised)]"
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border"
                  style={{ borderColor: MODULE_COLOR[e.module], color: MODULE_COLOR[e.module] }}
                >
                  <Icon size={12} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{e.date}</p>
                  </div>
                  <p className="text-[12.5px] font-medium text-[var(--text-primary)]">{e.title}</p>
                  <p className="text-[11.5px] leading-snug text-[var(--text-secondary)]">{e.detail}</p>
                </div>
              </motion.button>
            );
          })
        )}
      </div>
    </motion.div>
  );
}
