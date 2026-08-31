"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { PlanStatus } from "@/types/planner";

/** PlanApproval (06) — brief §33–34. The human, not the AI, approves; the confirmation copy says so explicitly. */
export function PlanApproval({
  status,
  approvedBy,
  approvedDate,
  version,
  onApprove,
}: {
  status: PlanStatus;
  approvedBy?: string;
  approvedDate?: string;
  version: string;
  onApprove: () => void;
}) {
  const [confirming, setConfirming] = useState(false);

  if (status === "active") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-[var(--radius-xl)] border border-[color-mix(in_srgb,var(--accent-growth)_30%,transparent)] bg-[var(--bg-surface)] p-8 text-center"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-growth)_16%,transparent)] text-[var(--accent-growth)]">
          <CheckCircle2 size={20} />
        </span>
        <div>
          <Badge tone="growth">Active plan</Badge>
          <p className="mt-2 text-[13px] text-[var(--text-secondary)]">
            Approved by <span className="text-[var(--text-primary)]">{approvedBy}</span> on{" "}
            <span className="text-[var(--text-primary)]">{approvedDate}</span> · Version {version}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">Approval</p>
      <h3 className="mt-2 font-[family-name:var(--font-display)] text-[20px] font-semibold text-[var(--text-primary)]">
        Approve rehabilitation plan
      </h3>

      <AnimatePresence mode="wait">
        {!confirming ? (
          <motion.div key="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="mx-auto mt-2 max-w-md text-[13px] text-[var(--text-secondary)]">
              This plan becomes the individual&apos;s active rehabilitation roadmap once approved.
            </p>
            <Button className="mt-5" onClick={() => setConfirming(true)}>
              Approve plan
            </Button>
          </motion.div>
        ) : (
          <motion.div key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mx-auto mt-2 flex max-w-md items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5 text-left text-[12.5px] text-[var(--text-secondary)]">
              <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
              You are approving this plan as the responsible staff member. AI recommendations remain advisory.
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <Button variant="ghost" onClick={() => setConfirming(false)}>Cancel</Button>
              <Button onClick={onApprove}>Approve plan</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
