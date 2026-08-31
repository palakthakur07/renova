"use client";

import { motion } from "framer-motion";
import { FileCheck2, FileWarning } from "lucide-react";
import type { ReleaseCandidate } from "@/types/dashboard";
import { EmptyState } from "@/components/ui/EmptyState";
import { DoorOpen } from "lucide-react";

const GROUPS: { key: ReleaseCandidate["daysOut"]; label: string }[] = [
  { key: 30, label: "Within 30 days" },
  { key: 60, label: "Within 60 days" },
  { key: 90, label: "Within 90 days" },
];

/**
 * UpcomingReleases — an elegant timeline grouped by horizon, not a
 * table. Clicking a row opens ReleaseDrawer via `onSelect`.
 */
export function UpcomingReleases({
  releases,
  show,
  onSelect,
}: {
  releases: ReleaseCandidate[];
  show: boolean;
  onSelect: (release: ReleaseCandidate) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Upcoming releases
      </p>

      {releases.length === 0 ? (
        <div className="mt-4 flex-1">
          <EmptyState
            icon={DoorOpen}
            title="No upcoming releases"
            description="Release readiness schedules will appear here once assessments are completed."
          />
        </div>
      ) : (
        <div className="mt-4 flex-1 space-y-5">
          {GROUPS.map((group) => {
            const items = releases.filter((r) => r.daysOut === group.key);
            if (items.length === 0) return null;
            return (
              <div key={group.key}>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
                  {group.label}
                </p>
                <ul className="space-y-1 border-l border-[var(--border-hairline)] pl-4">
                  {items.map((r) => (
                    <li key={r.id} className="relative">
                      <span className="absolute -left-[18.5px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]" />
                      <button
                        onClick={() => onSelect(r)}
                        className="flex w-full items-center justify-between gap-3 rounded-[var(--radius-sm)] px-2 py-2 text-left transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[13px] text-[var(--text-primary)]">{r.name}</p>
                          <p className="text-[11px] text-[var(--text-muted)]">{r.releaseDate}</p>
                        </div>
                        {r.documentsReady ? (
                          <FileCheck2 size={15} className="shrink-0 text-[var(--accent-growth)]" />
                        ) : (
                          <FileWarning size={15} className="shrink-0 text-[var(--accent-achievement)]" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
