"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** SettingsSection — consistent card/heading treatment shared by every Settings section. */
export function SettingsSection({
  icon: Icon,
  title,
  description,
  children,
  show,
  delay = 0,
  id,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  children: React.ReactNode;
  show: boolean;
  delay?: number;
  id?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.5, delay: reducedMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center gap-2">
        <Icon size={15} className="text-[var(--accent-primary)]" />
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">{title}</h2>
      </div>
      {description && <p className="mt-1 text-[12px] text-[var(--text-secondary)]">{description}</p>}
      <div className="mt-5 space-y-4">{children}</div>
    </motion.section>
  );
}

/** SettingRow — label + description on the left, control on the right. Used inside every SettingsSection. */
export function SettingRow({
  label,
  description,
  htmlFor,
  children,
}: {
  label: string;
  description?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 pr-4">
        <label htmlFor={htmlFor} className="text-[13px] font-medium text-[var(--text-primary)]">
          {label}
        </label>
        {description && <p className="mt-0.5 text-[11.5px] leading-snug text-[var(--text-muted)]">{description}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}
