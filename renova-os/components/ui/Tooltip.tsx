"use client";

import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-[var(--radius-xs)] bg-[var(--color-graphite-950)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--text-primary)] shadow-[var(--shadow-2)] border border-[var(--border-hairline)]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
