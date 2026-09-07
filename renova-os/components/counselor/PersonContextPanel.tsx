"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Avatar } from "@/components/ui/Avatar";
import type { CounselorContext } from "@/types/counselor";
import type { HumanProfile } from "@/types/profile";

/**
 * PersonContextPanel — "ARJUN MEHTA / Rehabilitation Journey" (brief
 * §5). Answers WHO / WHERE / WHAT CHANGED / WHAT COMES NEXT at a
 * glance, in plain lists rather than another dashboard of numbers —
 * this is the page a counselor reads in the sixty seconds before a
 * session starts.
 */
export function PersonContextPanel({
  profile,
  context,
  show,
}: {
  profile: HumanProfile;
  context: CounselorContext;
  show: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center gap-3">
        <Avatar initials={profile.name.split(" ").map((n) => n[0]).join("")} size="md" />
        <div>
          <p className="font-[family-name:var(--font-display)] text-[18px] font-semibold uppercase tracking-tight text-[var(--text-primary)]">
            {profile.name}
          </p>
          <p className="text-[12px] text-[var(--text-muted)]">Rehabilitation Journey · {profile.profileId}</p>
        </div>
        <span className="ml-auto rounded-full border border-[var(--border-hairline-strong)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)]">
          Now viewing
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Column title="Current Focus" delay={0} show={show} reducedMotion={reducedMotion}>
          <p className="text-[13px] text-[var(--text-primary)]">{context.currentFocus}</p>
        </Column>

        <Column title="Current Goals" delay={1} show={show} reducedMotion={reducedMotion}>
          <ul className="space-y-1.5">
            {context.goals.map((g) => (
              <li key={g} className="flex items-start gap-2 text-[12.5px] leading-snug text-[var(--text-secondary)]">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                {g}
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Recent Progress" delay={2} show={show} reducedMotion={reducedMotion}>
          <ul className="space-y-1.5">
            {context.recentProgress.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[12.5px] leading-snug text-[var(--text-secondary)]">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-teal-400)]" />
                {p}
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Upcoming" delay={3} show={show} reducedMotion={reducedMotion}>
          <ul className="space-y-2">
            {context.upcoming.map((u) => (
              <li key={u.label}>
                <p className="text-[12.5px] font-medium text-[var(--text-primary)]">{u.label}</p>
                <p className="text-[11px] text-[var(--text-muted)]">{u.detail}</p>
              </li>
            ))}
          </ul>
        </Column>
      </div>
    </motion.div>
  );
}

function Column({
  title,
  children,
  delay,
  show,
  reducedMotion,
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
  show: boolean;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
      transition={{ duration: 0.45, delay: reducedMotion ? 0 : 0.15 + delay * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{title}</p>
      <div className="mt-2">{children}</div>
    </motion.div>
  );
}
