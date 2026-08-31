"use client";

import { motion } from "framer-motion";
import type { ActivityEvent } from "@/types/dashboard";

/** ActivityStream — a quiet, low-emphasis timeline; the last beat in the page's story, not a table. */
export function ActivityStream({ events, show }: { events: ActivityEvent[]; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
        Facility activity
      </p>
      <ul className="mt-4 space-y-3">
        {events.map((e) => (
          <li key={e.id} className="flex items-start gap-3 text-[13px]">
            <span className="w-11 shrink-0 pt-0.5 font-mono text-[11px] text-[var(--text-muted)]">
              {e.time}
            </span>
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--border-hairline-strong)]" />
            <span className="text-[var(--text-secondary)]">{e.description}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
