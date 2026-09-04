"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import type { ProgramProgress } from "@/types/progress";

const STATUS_LABEL: Record<ProgramProgress["status"], string> = {
  completed: "Completed",
  active: "Active",
  upcoming: "Upcoming",
};

const STATUS_TONE: Record<ProgramProgress["status"], "growth" | "structure" | "neutral"> = {
  completed: "growth",
  active: "structure",
  upcoming: "neutral",
};

/** ProgramParticipation — participation vs. completion per program (brief §18). */
export function ProgramParticipation({ programs, show }: { programs: ProgramProgress[]; show: boolean }) {
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

      <div className="mt-5 space-y-5">
        {programs.map((p) => (
          <div key={p.id}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[13px] font-medium text-[var(--text-primary)]">{p.name}</span>
              <Badge tone={STATUS_TONE[p.status]}>{STATUS_LABEL[p.status]}</Badge>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <Progress value={p.participationPct} label="Participation" tone="primary" />
              <Progress value={p.completionPct} label="Completion" tone="growth" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
