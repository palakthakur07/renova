"use client";

import { LayoutDashboard } from "lucide-react";
import { SettingsSection, SettingRow } from "./SettingsSection";
import { useSettings } from "@/components/providers/SettingsProvider";
import { primaryNav } from "@/constants/navigation";
import { TIME_RANGE_OPTIONS } from "@/lib/demo-data/analytics/trajectory";

const LANDING_OPTIONS = primaryNav.filter((item) => item.href !== "/settings");

/**
 * ApplicationSection — brief §8. Both controls genuinely drive
 * behavior: Default landing page changes where "Enter ReNova" lands
 * (components/landing/CinematicIntro.tsx reads it), and Default
 * analytics period sets Analytics' initial time range
 * (components/analytics/AnalyticsExperience.tsx reads it) rather than
 * being a decorative control.
 */
export function ApplicationSection({ show }: { show: boolean }) {
  const { defaultLandingPage, setDefaultLandingPage, defaultAnalyticsRange, setDefaultAnalyticsRange } = useSettings();

  return (
    <SettingsSection
      icon={LayoutDashboard}
      title="Application"
      description="Defaults applied the next time you enter ReNova or open Analytics."
      show={show}
      delay={0.1}
    >
      <SettingRow label="Default landing page" description="Where 'Enter ReNova' takes you from the landing page." htmlFor="default-landing">
        <select
          id="default-landing"
          value={defaultLandingPage}
          onChange={(e) => setDefaultLandingPage(e.target.value)}
          className="rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-2.5 py-1.5 text-[12px] text-[var(--text-secondary)] outline-none transition-colors focus:border-[var(--accent-primary)]"
        >
          {LANDING_OPTIONS.map((item) => (
            <option key={item.href} value={item.href}>
              {item.label}
            </option>
          ))}
        </select>
      </SettingRow>

      <SettingRow label="Default analytics period" description="The time range Analytics opens with." htmlFor="default-range">
        <select
          id="default-range"
          value={defaultAnalyticsRange}
          onChange={(e) => setDefaultAnalyticsRange(e.target.value)}
          className="rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-2.5 py-1.5 text-[12px] text-[var(--text-secondary)] outline-none transition-colors focus:border-[var(--accent-primary)]"
        >
          {TIME_RANGE_OPTIONS.map((r) => (
            <option key={r.key} value={r.key}>
              {r.label}
            </option>
          ))}
        </select>
      </SettingRow>
    </SettingsSection>
  );
}
