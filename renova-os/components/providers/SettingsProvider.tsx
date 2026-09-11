"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * SettingsProvider — the real, working half of the Settings page
 * (brief Part 5–8): preferences that genuinely affect the UI, not
 * inert toggles. Backed by localStorage so a refresh during a demo
 * doesn't reset anyone's choice mid-walkthrough (brief §30), but
 * every default is deterministic and safe if storage is unavailable.
 *
 * Scope is deliberately limited to what can change safely without
 * touching Phase 0–10 components: a motion override, a density flag
 * (root font-size, which every existing rem-based Tailwind spacing
 * utility already scales with), notification switches, and the two
 * app defaults named in the brief. Theme is handled separately by
 * next-themes (components/providers/ThemeProvider.tsx) — Settings
 * reads/writes it via `useTheme()` directly rather than duplicating
 * it here.
 */

export type MotionPreference = "system" | "reduced" | "full";
export type Density = "comfortable" | "compact";

export interface NotificationPrefs {
  counselorFollowUps: boolean;
  progressUpdates: boolean;
  learningMilestones: boolean;
  releaseReminders: boolean;
  systemNotifications: boolean;
}

export interface AccountProfile {
  name: string;
  role: string;
  email: string;
}

interface SettingsState {
  motionPreference: MotionPreference;
  setMotionPreference: (p: MotionPreference) => void;
  density: Density;
  setDensity: (d: Density) => void;
  notifications: NotificationPrefs;
  setNotification: (key: keyof NotificationPrefs, value: boolean) => void;
  defaultLandingPage: string;
  setDefaultLandingPage: (href: string) => void;
  defaultAnalyticsRange: string;
  setDefaultAnalyticsRange: (range: string) => void;
  account: AccountProfile;
  setAccount: (a: AccountProfile) => void;
  /** Resolved reduced-motion value combining the override with the OS preference — what components should actually read. */
  effectiveReducedMotion: boolean;
}

const DEFAULT_NOTIFICATIONS: NotificationPrefs = {
  counselorFollowUps: true,
  progressUpdates: true,
  learningMilestones: true,
  releaseReminders: true,
  systemNotifications: false,
};

const DEFAULT_ACCOUNT: AccountProfile = {
  name: "Demo Counselor",
  role: "Counselor",
  email: "counselor@renova.demo",
};

const STORAGE_KEY = "renova.settings.v1";

const SettingsContext = createContext<SettingsState | null>(null);
export { SettingsContext };

function readStoredJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return { ...fallback, ...JSON.parse(raw) };
  } catch {
    return fallback;
  }
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [motionPreference, setMotionPreference] = useState<MotionPreference>("system");
  const [density, setDensity] = useState<Density>("comfortable");
  const [notifications, setNotifications] = useState<NotificationPrefs>(DEFAULT_NOTIFICATIONS);
  const [defaultLandingPage, setDefaultLandingPage] = useState("/overview");
  const [defaultAnalyticsRange, setDefaultAnalyticsRange] = useState("30d");
  const [account, setAccount] = useState<AccountProfile>(DEFAULT_ACCOUNT);
  // useMediaQuery is already the codebase's safe, useSyncExternalStore-based
  // way to read a live media query without a setState-in-effect pattern.
  const osReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  // Hydrate from localStorage once on mount (client only — keeps SSR
  // deterministic and avoids a hydration mismatch). This is a one-time
  // read from an external system, the case the rule below is written to
  // allow.
  useEffect(() => {
    const stored = readStoredJSON(STORAGE_KEY, {
      motionPreference,
      density,
      notifications,
      defaultLandingPage,
      defaultAnalyticsRange,
      account,
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time localStorage hydration, see comment above
    setMotionPreference(stored.motionPreference);
    setDensity(stored.density);
    setNotifications(stored.notifications);
    setDefaultLandingPage(stored.defaultLandingPage);
    setDefaultAnalyticsRange(stored.defaultAnalyticsRange);
    setAccount(stored.account);
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ motionPreference, density, notifications, defaultLandingPage, defaultAnalyticsRange, account })
      );
    } catch {
      // Storage unavailable (private browsing, quota) — preferences simply won't persist this session.
    }
  }, [hydrated, motionPreference, density, notifications, defaultLandingPage, defaultAnalyticsRange, account]);

  // Compact density scales the root font-size; every existing rem-based
  // Tailwind spacing utility (p-7, px-3.5, gap-2, ...) shrinks with it —
  // no per-component edits needed (see app/globals.css).
  useEffect(() => {
    document.documentElement.dataset.density = density;
  }, [density]);

  const effectiveReducedMotion =
    motionPreference === "reduced" ? true : motionPreference === "full" ? false : osReducedMotion;

  const value = useMemo<SettingsState>(
    () => ({
      motionPreference,
      setMotionPreference,
      density,
      setDensity,
      notifications,
      setNotification: (key, val) => setNotifications((prev) => ({ ...prev, [key]: val })),
      defaultLandingPage,
      setDefaultLandingPage,
      defaultAnalyticsRange,
      setDefaultAnalyticsRange,
      account,
      setAccount,
      effectiveReducedMotion,
    }),
    [motionPreference, density, notifications, defaultLandingPage, defaultAnalyticsRange, account, effectiveReducedMotion]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsState {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return ctx;
}
