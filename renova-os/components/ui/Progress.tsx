"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Progress — represents rehabilitation-program completion.
 * Fills with an eased sweep, never a snap, echoing the hero's
 * "scanning" motion language at a smaller scale.
 */
export function Progress({
  value,
  label,
  tone = "primary",
  className,
}: {
  value: number;
  label?: string;
  tone?: "primary" | "growth" | "achievement";
  className?: string;
}) {
  const toneColor =
    tone === "growth"
      ? "var(--accent-growth)"
      : tone === "achievement"
      ? "var(--accent-achievement)"
      : "var(--accent-primary)";

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="mb-2 flex items-center justify-between text-[12px] font-mono text-[var(--text-secondary)]">
          <span>{label}</span>
          <span>{Math.round(value)}%</span>
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
        <motion.div
          className="h-full rounded-full"
          style={{ background: toneColor }}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
