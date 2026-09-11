"use client";

import { useContext } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { SettingsContext } from "@/components/providers/SettingsProvider";

/**
 * True if motion should be reduced. Prefers the user's explicit
 * Settings → Preferences → Reduced Motion override when one is set
 * (brief Part 6), falling back to the OS/browser
 * `prefers-reduced-motion` query otherwise. Every animated component
 * already calls this hook, so wiring the override in here — rather
 * than touching every component — is what makes the Settings toggle
 * real instead of decorative.
 */
export function usePrefersReducedMotion(): boolean {
  const systemPreference = useMediaQuery("(prefers-reduced-motion: reduce)");
  const settings = useContext(SettingsContext);
  if (!settings) return systemPreference;
  return settings.effectiveReducedMotion;
}
