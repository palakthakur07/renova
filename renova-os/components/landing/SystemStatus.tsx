"use client";

import { AnimatePresence, motion } from "framer-motion";

export type SystemStage = "initializing" | "online" | "ready";

const labels: Record<SystemStage, string> = {
  initializing: "System initializing",
  online: "Rehabilitation intelligence online",
  ready: "System ready",
};

/**
 * SystemStatus — the small status line that crossfades through the
 * boot sequence. Deliberately plain, professional language per the
 * brief — no terminal-green text, no fake technical output.
 */
export function SystemStatus({ stage, show }: { stage: SystemStage; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-2 rounded-full border border-[var(--border-hairline-strong)] bg-[color-mix(in_srgb,var(--bg-stage)_60%,transparent)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)] backdrop-blur-sm"
    >
      <motion.span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative inline-grid">
        <AnimatePresence mode="wait">
          <motion.span
            key={stage}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="col-start-1 row-start-1"
          >
            {labels[stage]}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.div>
  );
}
