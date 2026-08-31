"use client";

import { FileCheck2, FileWarning } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { Progress } from "@/components/ui/Progress";
import type { ReleaseCandidate } from "@/types/dashboard";

export function ReleaseDrawer({
  release,
  onClose,
}: {
  release: ReleaseCandidate | null;
  onClose: () => void;
}) {
  return (
    <Drawer open={!!release} onClose={onClose} eyebrow="Upcoming release" title={release?.name ?? ""}>
      {release && (
        <div className="space-y-6">
          <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
              Release date
            </p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-[20px] font-semibold text-[var(--text-primary)]">
              {release.releaseDate}
            </p>
            <p className="mt-0.5 text-[12px] text-[var(--text-muted)]">Within {release.daysOut} days</p>
          </div>

          <div className="space-y-4">
            <Progress value={release.rehabCompletionPct} label="Rehabilitation completion" tone="growth" />
            <Progress value={release.employmentReadinessPct} label="Employment readiness" tone="primary" />
          </div>

          <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3 text-[13px]">
            {release.documentsReady ? (
              <>
                <FileCheck2 size={16} className="text-[var(--accent-growth)]" />
                Documents ready
              </>
            ) : (
              <>
                <FileWarning size={16} className="text-[var(--accent-achievement)]" />
                Documents pending
              </>
            )}
          </div>

          <p className="text-[12px] leading-relaxed text-[var(--text-muted)]">
            Demo data — fictional participant. Real release records would include full case
            documentation and role-based access controls.
          </p>
        </div>
      )}
    </Drawer>
  );
}
