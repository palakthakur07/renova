"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Circle, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ReleasePreparation, ReleaseChecklistState } from "@/types/profile";

const STATE_ICON: Record<ReleaseChecklistState, typeof Check> = {
  done: Check,
  "in-progress": CircleDot,
  "not-started": Circle,
};
const STATE_COLOR: Record<ReleaseChecklistState, string> = {
  done: "var(--accent-growth)",
  "in-progress": "var(--accent-primary)",
  "not-started": "var(--text-muted)",
};

/**
 * ReleaseJourney — a preview only (brief §24). "View readiness" points
 * at the existing /release placeholder route; the full Release
 * Readiness system is explicitly out of scope until Phase 9.
 */
export function ReleaseJourney({ release, show }: { release: ReleasePreparation; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Release journey
          </p>
          <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
            Target release · {release.targetReleaseDate}
          </p>
        </div>
        <span className="font-[family-name:var(--font-display)] text-[28px] font-semibold text-[var(--text-primary)]">
          {release.readinessPct}%
        </span>
      </div>

      <ul className="mt-5 flex flex-wrap gap-3">
        {release.checklist.map((item) => {
          const Icon = STATE_ICON[item.state];
          return (
            <li
              key={item.id}
              className="flex items-center gap-1.5 rounded-full border border-[var(--border-hairline-strong)] px-3 py-1.5 text-[12px]"
            >
              <Icon size={13} style={{ color: STATE_COLOR[item.state] }} />
              <span className="text-[var(--text-secondary)]">{item.label}</span>
            </li>
          );
        })}
      </ul>

      {release.attentionAreas.length > 0 && (
        <p className="mt-4 text-[12px] text-[var(--text-muted)]">
          {release.attentionAreas.length} areas require attention — {release.attentionAreas.join(", ")}.
        </p>
      )}

      <div className="mt-5">
        <Link href="/release">
          <Button variant="secondary" size="sm">
            View readiness
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
