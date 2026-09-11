"use client";

import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

/** SettingsHeader — brief §2: a professional institutional configuration area, not a generic SaaS settings template. */
export function SettingsHeader({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[var(--border-hairline)] pb-7"
    >
      <div className="flex items-center gap-2">
        <SlidersHorizontal size={15} className="text-[var(--accent-primary)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">Settings</p>
      </div>
      <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
        Platform configuration
      </h1>
      <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-[var(--text-secondary)]">
        Account, preferences, and platform information. Changes are saved to this device for the demo session.
      </p>
    </motion.div>
  );
}
