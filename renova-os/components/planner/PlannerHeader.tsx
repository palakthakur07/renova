"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { PlanStatus } from "@/types/planner";

export function PlannerHeader({
  personName,
  profileId,
  status,
  lastAssessment,
}: {
  personName: string;
  profileId: string;
  status: PlanStatus;
  lastAssessment: string;
}) {
  return (
    <div className="flex flex-col gap-6 border-b border-[var(--border-hairline)] pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <motion.span
          className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--border-hairline-strong)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          ReNova intelligence online
        </motion.span>

        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          AI rehabilitation planner
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          Personalized rehabilitation pathway
        </h1>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-4 text-[12px]">
        <div>
          <p className="text-[var(--text-muted)]">Profile</p>
          <p className="font-medium text-[var(--text-primary)]">{personName}</p>
          <p className="font-mono text-[11px] text-[var(--text-muted)]">{profileId}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)]">Plan status</p>
          <Badge tone={status === "active" ? "growth" : "neutral"}>{status === "active" ? "Active" : "Draft"}</Badge>
        </div>
        <div>
          <p className="text-[var(--text-muted)]">Last assessment</p>
          <p className="font-medium text-[var(--text-primary)]">{lastAssessment}</p>
        </div>
      </div>
    </div>
  );
}
