"use client";

import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingOverlay — full-panel glass veil with a slow breathing dot,
 * for moments a section needs to signal "working" without a spinner.
 * Not a full-page loader; scope it to the container that's loading.
 */
export function LoadingOverlay({ show, label = "Loading" }: { show: boolean; label?: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="glass-panel absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-[inherit]"
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-[var(--accent-primary)]"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
            {label}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
