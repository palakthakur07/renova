"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { ProgramParticipation, ProgramStatus } from "@/types/profile";

const STATUS_TONE: Record<ProgramStatus, "growth" | "structure" | "neutral"> = {
  completed: "growth",
  active: "structure",
  upcoming: "neutral",
};

export function ProgramsSection({ programs, show }: { programs: ProgramParticipation[]; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Program participation
      </p>

      <ul className="mt-5 space-y-3">
        {programs.map((p) => (
          <li
            key={p.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{p.name}</p>
                <Badge tone={STATUS_TONE[p.status]}>{p.status}</Badge>
              </div>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">
                {p.startDate} → {p.expectedCompletion} · {p.facilitator}
              </p>
            </div>
            <div className="w-24 shrink-0">
              <div className="h-1 overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
                <div
                  className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-700"
                  style={{ width: show ? `${p.progressPct}%` : "0%" }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
