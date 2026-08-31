"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { AttentionItem, AttentionSeverity } from "@/types/dashboard";

const SEVERITY_COLOR: Record<AttentionSeverity, string> = {
  critical: "var(--accent-critical)",
  high: "var(--accent-achievement)",
  medium: "var(--accent-structure)",
};

/**
 * AttentionQueue — sorted by severity so the most urgent item is both
 * first and visually largest; everything below it steps down in size,
 * matching the brief's "the system should visually prioritize the most
 * important item" instruction literally rather than with equal rows.
 */
export function AttentionQueue({ items, show }: { items: AttentionItem[]; show: boolean }) {
  const order: Record<AttentionSeverity, number> = { critical: 0, high: 1, medium: 2 };
  const sorted = [...items].sort((a, b) => order[a.severity] - order[b.severity]);
  const [primary, ...rest] = sorted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Requires attention
      </p>

      {primary && (
        <button className="group mt-4 flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-4 text-left transition-colors duration-200 hover:border-[var(--accent-critical)]">
          <div className="flex items-center gap-4">
            <span
              className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-none"
              style={{ color: SEVERITY_COLOR[primary.severity] }}
            >
              {primary.count}
            </span>
            <div>
              <p className="text-[14px] font-medium text-[var(--text-primary)]">{primary.label}</p>
              <p className="mt-0.5 text-[12px] text-[var(--text-secondary)]">{primary.description}</p>
            </div>
          </div>
          <ArrowRight
            size={16}
            className="shrink-0 text-[var(--text-muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
          />
        </button>
      )}

      <ul className="mt-3 flex-1 space-y-1">
        {rest.map((item) => (
          <li key={item.id}>
            <button className="group flex w-full items-center justify-between gap-3 rounded-[var(--radius-sm)] px-2.5 py-2.5 text-left transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="w-6 shrink-0 font-mono text-[15px] font-semibold"
                  style={{ color: SEVERITY_COLOR[item.severity] }}
                >
                  {item.count}
                </span>
                <span className="min-w-0 truncate text-[13px] text-[var(--text-secondary)]">
                  {item.label}
                </span>
              </div>
              <ArrowRight
                size={13}
                className="shrink-0 text-[var(--text-muted)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
