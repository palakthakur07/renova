"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

/**
 * CounselorHeader — "COUNSELOR WORKSPACE" (brief §4). Same quiet
 * register as ReintegrationHeader/ProgressHeader, but the mood is
 * calmer and more human — no phase badges or ring visuals up top,
 * just the workspace identity and its one fixed principle.
 */
export function CounselorHeader({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[var(--border-hairline)] pb-7"
    >
      <div className="flex items-center gap-2">
        <HeartHandshake size={15} className="text-[var(--accent-structure)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-structure)]">
          Counselor workspace
        </p>
      </div>
      <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
        Session preparation &amp; support
      </h1>
      <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-[var(--text-secondary)]">
        AI provides decision support. Final decisions remain with qualified staff.
      </p>
    </motion.div>
  );
}
