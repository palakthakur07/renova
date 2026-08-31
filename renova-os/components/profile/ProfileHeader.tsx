"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { RoleSwitcher } from "./RoleSwitcher";
import type { HumanProfile, RehabStatus } from "@/types/profile";

const STATUS_LABEL: Record<RehabStatus, string> = {
  active: "Active rehabilitation",
  transitioning: "Transitioning",
  "release-prep": "Release preparation",
};

const STATUS_TONE: Record<RehabStatus, "growth" | "structure" | "achievement"> = {
  active: "growth",
  transitioning: "structure",
  "release-prep": "achievement",
};

/**
 * ProfileHeader — deliberately not a mugshot. The avatar is a soft
 * gradient disc with initials and a slow ambient ring, the same visual
 * register as the rest of ReNova OS (see the Instrument Assembly/
 * Holographic Core lineage from Phases 2–3) rather than an ID-card photo.
 */
export function ProfileHeader({
  profile,
  show,
  onOpenAiSummary,
}: {
  profile: HumanProfile;
  show: boolean;
  onOpenAiSummary: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9">
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal-500) 9%, transparent) 0%, transparent 70%)" }}
      />

      <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.9 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--color-teal-500) 30%, var(--bg-surface-raised)), color-mix(in srgb, var(--color-cyan-500) 22%, var(--bg-surface-raised)))",
          }}
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-[var(--color-teal-400)]"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-[family-name:var(--font-display)] text-[26px] font-semibold text-[var(--text-primary)]">
            {profile.avatarInitials}
          </span>
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge tone="neutral">Demo data</Badge>
            <Badge tone={STATUS_TONE[profile.status]}>{STATUS_LABEL[profile.status]}</Badge>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[var(--text-secondary)]"
          >
            <span>{profile.age} years</span>
            <span className="font-mono text-[var(--text-muted)]">{profile.profileId}</span>
            <span>{profile.programParticipationPct}% program participation</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <div className="rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] px-3 py-1.5 text-[12px]">
              <span className="text-[var(--text-muted)]">Target release · </span>
              <span className="font-medium text-[var(--text-primary)]">{profile.targetReleaseDate}</span>
            </div>
            <button
              onClick={onOpenAiSummary}
              className="flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] px-3 py-1.5 text-[12px] text-[var(--accent-primary)] transition-colors hover:border-[var(--accent-primary)]"
            >
              <Sparkles size={12} />
              AI summary available
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="shrink-0"
        >
          <RoleSwitcher />
        </motion.div>
      </div>
    </div>
  );
}
