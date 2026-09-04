"use client";

import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import { Progress } from "@/components/ui/Progress";
import type { SupportArea } from "@/types/progress";

/**
 * SupportAreas — "Areas that may benefit from additional support"
 * (brief §23). Deliberately never framed as failure, weakness, or
 * risk — the heading and copy are fixed, not passed in, so this
 * framing can't drift as data changes.
 */
export function SupportAreas({ areas, show }: { areas: SupportArea[]; show: boolean }) {
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
          Areas that may benefit from additional support
        </p>
      </div>

      <div className="mt-5 space-y-5">
        {areas.map((a) => (
          <div key={a.id}>
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-[var(--text-primary)]">{a.area}</span>
              <span className="font-mono text-[12px] text-[var(--text-muted)]">{a.completionPct}% complete</span>
            </div>
            <div className="mt-2">
              <Progress value={a.completionPct} tone="primary" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {a.suggestedSupport.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[var(--border-hairline-strong)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
