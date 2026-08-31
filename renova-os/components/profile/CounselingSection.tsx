"use client";

import { motion } from "framer-motion";
import { useRole } from "@/components/providers/RoleProvider";
import { RestrictedNotice } from "./RestrictedNotice";
import type { CounselingSummary } from "@/types/profile";

/**
 * CounselingSection — summary-level stats are always visible; the
 * session-by-session timeline (topic + outcome only, never clinical
 * content) requires counselor or administrator role. See RoleProvider.
 */
export function CounselingSection({ summary, show }: { summary: CounselingSummary; show: boolean }) {
  const { can } = useRole();
  const canViewDetail = can(["counselor", "administrator"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Counseling engagement
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Sessions" value={String(summary.sessionCount)} />
        <Stat label="Participation" value={`${summary.participationPct}%`} />
        <Stat label="Last session" value={summary.lastSession} />
        <Stat label="Next session" value={summary.nextSession} />
      </div>

      <div className="mt-6">
        {canViewDetail ? (
          <ul className="space-y-1 border-l border-[var(--border-hairline)] pl-4">
            {summary.sessions.map((s) => (
              <li key={s.id} className="relative py-1.5">
                <span className="absolute -left-[18.5px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]" />
                <div className="flex items-center justify-between gap-3 text-[13px]">
                  <span className="text-[var(--text-primary)]">{s.topic}</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">{s.date}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <RestrictedNotice requiredRole="Counselor or administrator" />
        )}
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-display)] text-[17px] font-semibold text-[var(--text-primary)]">
        {value}
      </p>
      <p className="text-[11px] text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
