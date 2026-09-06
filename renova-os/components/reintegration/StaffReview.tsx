"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNotifications } from "@/components/providers/NotificationProvider";

/**
 * StaffReview — closing human-in-the-loop panel (brief §12). States
 * the module's core principle in fixed copy: ReNova organizes
 * evidence and preparation, humans remain responsible for every
 * legal and institutional decision.
 */
export function StaffReview({ show }: { show: boolean }) {
  const { pushToast } = useNotifications();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center gap-2">
        <ShieldCheck size={15} className="text-[var(--accent-structure)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-structure)]">
          Staff review
        </p>
      </div>
      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[var(--text-secondary)]">
        ReNova doesn&apos;t decide whether someone is ready to be released. It helps staff understand what
        preparation has been completed and what support is still needed. AI-generated preparation suggestions are
        recommendations for staff review — every task, note, and status on this page can be edited, added to, or
        removed by staff at any time.
      </p>
      <div className="mt-4">
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            pushToast({
              title: "Reviewed",
              detail: "Demo action — staff review acknowledged for this session.",
              tone: "growth",
            })
          }
        >
          Acknowledge review
        </Button>
      </div>
    </motion.div>
  );
}
