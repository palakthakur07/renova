"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { HumanProfile } from "@/types/profile";

/**
 * ProgressHeader — identity strip at the top of /progress (brief §4).
 * Deliberately quiet compared to ProfileHeader's ambient hero — this
 * page's centerpiece is the trajectory below, not the identity card.
 */
export function ProgressHeader({
  profile,
  planVersion,
  lastUpdated,
  show,
}: {
  profile: HumanProfile;
  planVersion: string;
  lastUpdated: string;
  show: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6 border-b border-[var(--border-hairline)] pb-7 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <Link
          href="/profiles"
          className="mb-3 inline-flex items-center gap-1.5 text-[12px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        >
          <ArrowLeft size={13} />
          Back to profile
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Rehabilitation progress
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          {profile.name}
        </h1>
        <p className="mt-1.5 max-w-md text-[13px] text-[var(--text-secondary)]">
          A transparent view of progress across the rehabilitation journey.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] text-[var(--text-muted)]">{profile.profileId}</span>
          <Badge tone="growth">Active rehabilitation</Badge>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-5 text-[12px]">
        <div>
          <p className="text-[var(--text-muted)]">Plan version</p>
          <p className="font-medium text-[var(--text-primary)]">{planVersion}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)]">Last updated</p>
          <p className="font-medium text-[var(--text-primary)]">{lastUpdated}</p>
        </div>
        <Link
          href="/planner"
          className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] px-3.5 py-2 text-[12px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
        >
          <FileText size={13} />
          View rehabilitation plan
        </Link>
      </div>
    </motion.div>
  );
}
