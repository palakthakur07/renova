"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { HumanProfile } from "@/types/profile";

/**
 * ReintegrationHeader — identity strip at the top of /release (brief
 * §3). Mirrors ProgressHeader's quiet register — this page's
 * centerpiece is the Next Chapter Roadmap below, not the header —
 * but adds a staff review indicator since Phase 8 is the first
 * module where AI suggestions require an explicit review state.
 */
export function ReintegrationHeader({
  profile,
  currentPhase,
  lastUpdated,
  staffReviewStatus,
  show,
}: {
  profile: HumanProfile;
  currentPhase: string;
  lastUpdated: string;
  staffReviewStatus: "reviewed" | "pending review";
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
          href="/progress"
          className="mb-3 inline-flex items-center gap-1.5 text-[12px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        >
          <ArrowLeft size={13} />
          Back to progress
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Reintegration
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          Release Preparation &amp; Next Chapter
        </h1>
        <p className="mt-1.5 max-w-lg text-[13px] leading-relaxed text-[var(--text-secondary)]">
          Turning rehabilitation progress into practical preparation for life beyond the facility.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] text-[var(--text-muted)]">{profile.profileId}</span>
          <Badge tone="growth">
            <TrendingUp size={11} />
            {currentPhase}
          </Badge>
          <Badge tone={staffReviewStatus === "reviewed" ? "growth" : "structure"}>
            {staffReviewStatus === "reviewed" ? "Staff reviewed" : "Staff review pending"}
          </Badge>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-5 text-[12px]">
        <div>
          <p className="text-[var(--text-muted)]">Profile</p>
          <p className="font-medium text-[var(--text-primary)]">{profile.name}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)]">Last updated</p>
          <p className="font-medium text-[var(--text-primary)]">{lastUpdated}</p>
        </div>
      </div>
    </motion.div>
  );
}
