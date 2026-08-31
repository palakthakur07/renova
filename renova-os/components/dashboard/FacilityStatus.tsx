"use client";

import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/Tooltip";
import { AnimatedNumber } from "./AnimatedNumber";
import { CapacityRing } from "./CapacityRing";
import type { FacilityStats } from "@/types/dashboard";

/**
 * FacilityStatus — the dominant visual centerpiece (brief §6+§7 combined
 * into one module rather than a separate equal-width "occupancy card,"
 * which is exactly the generic-dashboard pattern the brief warns against).
 */
export function FacilityStatus({ stats, show }: { stats: FacilityStats; show: boolean }) {
  const available = stats.capacity - stats.activeIndividuals;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal-500) 10%, transparent) 0%, transparent 70%)" }}
      />

      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Current facility status
      </p>

      <div className="mt-5 flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="min-w-0">
          <div className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,6vw,4.25rem)] font-semibold leading-none tracking-[-0.02em] text-[var(--text-primary)]">
            {show ? <AnimatedNumber value={stats.activeIndividuals} /> : 0}
          </div>
          <p className="mt-2.5 text-[14px] text-[var(--text-secondary)]">
            Individuals under active rehabilitation
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[13px]">
            <Stat label="Program participation" value={`${stats.programParticipationPct}%`} />
            <Stat label="Education engagement" value={`${stats.educationEngagementPct}%`} />
            <Stat label="Releases this quarter" value={`${stats.releasesThisQuarter}`} />
          </div>
        </div>

        <Tooltip label={`${stats.activeIndividuals} of ${stats.capacity} · ${available} available`}>
          <div className="mx-auto sm:mx-0">
            <CapacityRing current={stats.activeIndividuals} capacity={stats.capacity} />
            <div className="mt-3 flex justify-center gap-4 text-center font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
              <span>{stats.activeIndividuals} current</span>
              <span>{stats.capacity} capacity</span>
            </div>
          </div>
        </Tooltip>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-[var(--text-primary)]">
        {value}
      </span>
      <span className="ml-2 text-[var(--text-secondary)]">{label}</span>
    </div>
  );
}
