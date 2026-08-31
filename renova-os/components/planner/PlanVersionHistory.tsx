"use client";

import type { PlanVersion, PlanChangeEvent } from "@/types/planner";

/** PlanVersionHistory — brief §35–36. New versions are appended, never overwritten. */
export function PlanVersionHistory({ versions, changes }: { versions: PlanVersion[]; changes: PlanChangeEvent[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">Versions</p>
        <ul className="space-y-3">
          {versions.map((v) => (
            <li key={v.version} className="flex items-start justify-between gap-3 text-[13px]">
              <div>
                <p className="text-[var(--text-primary)]">Version {v.version}</p>
                <p className="text-[12px] text-[var(--text-secondary)]">{v.label}</p>
              </div>
              <span className="shrink-0 font-mono text-[11px] text-[var(--text-muted)]">{v.date}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">Change history</p>
        <ul className="space-y-3">
          {changes.map((c) => (
            <li key={c.id} className="flex items-start gap-3 text-[13px]">
              <span className="w-12 shrink-0 pt-0.5 font-mono text-[11px] text-[var(--text-muted)]">{c.date}</span>
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--border-hairline-strong)]" />
              <span className="text-[var(--text-secondary)]">{c.action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
