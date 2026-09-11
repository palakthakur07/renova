"use client";

import { useEffect, useState } from "react";
import { RoleProvider } from "@/components/providers/RoleProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { SettingsHeader } from "./SettingsHeader";
import { AccountSection } from "./AccountSection";
import { PreferencesSection } from "./PreferencesSection";
import { ApplicationSection } from "./ApplicationSection";
import { PrivacySecuritySection } from "./PrivacySecuritySection";
import { AboutSection } from "./AboutSection";

/**
 * SettingsExperience — composes Phase 11's Settings module (brief
 * Part 2–12). Same staggered-reveal pattern as every other phase.
 * Facility-wide/session-wide, not per-person — no profileId route,
 * same as Mission Control and Analytics.
 */
export function SettingsExperience() {
  return (
    <RoleProvider>
      <SettingsBody />
    </RoleProvider>
  );
}

function SettingsBody() {
  const reducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState({ header: false, account: false, preferences: false, application: false, privacy: false, about: false });

  useEffect(() => {
    const t = reducedMotion ? 0 : 1;
    const timers = [
      setTimeout(() => setStage((s) => ({ ...s, header: true })), 60 * t),
      setTimeout(() => setStage((s) => ({ ...s, account: true })), 180 * t),
      setTimeout(() => setStage((s) => ({ ...s, preferences: true })), 260 * t),
      setTimeout(() => setStage((s) => ({ ...s, application: true })), 340 * t),
      setTimeout(() => setStage((s) => ({ ...s, privacy: true })), 420 * t),
      setTimeout(() => setStage((s) => ({ ...s, about: true })), 500 * t),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  return (
    <div className="mx-auto max-w-[860px]">
      <SettingsHeader show={stage.header} />

      <div className="mt-5 space-y-5">
        <AccountSection show={stage.account} />
        <PreferencesSection show={stage.preferences} />
        <ApplicationSection show={stage.application} />
        <PrivacySecuritySection show={stage.privacy} />
        <AboutSection show={stage.about} />
      </div>
    </div>
  );
}
