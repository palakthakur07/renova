"use client";

import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { SupportResource, SupportStatus } from "@/types/reintegration";

const STATUS_TONE: Record<SupportStatus, "neutral" | "structure" | "growth"> = {
  "not-connected": "neutral",
  connected: "structure",
  active: "growth",
};
const STATUS_LABEL: Record<SupportStatus, string> = {
  "not-connected": "Not connected",
  connected: "Connected",
  active: "Active",
};

/**
 * SupportNetwork — support resources by category (brief §9). Real
 * organization names are never invented — assignedTo uses realistic
 * demo placeholders only, per the brief's instruction not to fabricate
 * real partners.
 */
export function SupportNetwork({ resources, show }: { resources: SupportResource[]; show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center gap-2">
        <HandHeart size={15} className="text-[var(--accent-structure)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-structure)]">
          Support network
        </p>
      </div>

      <div className="mt-4 space-y-2.5">
        {resources.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{r.category}</p>
              <p className="text-[13px] font-medium text-[var(--text-primary)]">{r.title}</p>
              {r.assignedTo && <p className="mt-0.5 text-[11px] text-[var(--text-secondary)]">{r.assignedTo}</p>}
              {r.nextAction && (
                <p className="mt-1 text-[11px] text-[var(--accent-primary)]">Next: {r.nextAction}</p>
              )}
            </div>
            <Badge tone={STATUS_TONE[r.status]}>{STATUS_LABEL[r.status]}</Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
