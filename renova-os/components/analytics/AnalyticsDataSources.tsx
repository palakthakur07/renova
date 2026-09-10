"use client";

import { motion } from "framer-motion";

const SOURCES = ["People", "Plan", "Learn", "Progress", "Counselor", "Release"];

/** AnalyticsDefinitions — data source context (brief §18), reinforcing that ReNova is one connected platform. */
export function AnalyticsDataSources({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap items-center gap-2 pb-2 pt-1 text-[11px] text-[var(--text-muted)]"
    >
      <span>Aggregated from rehabilitation activity across ReNova — data sources:</span>
      {SOURCES.map((s) => (
        <span key={s} className="rounded-full border border-[var(--border-hairline)] px-2 py-0.5">
          {s}
        </span>
      ))}
    </motion.div>
  );
}
