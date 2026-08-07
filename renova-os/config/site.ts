/**
 * Site-wide configuration. Placeholder values only — Phase 1 has
 * no backend, no auth, no real org data. This file is the single
 * place a future phase wires in real config (env-driven name,
 * feature flags, etc.) without touching components.
 */
export const siteConfig = {
  name: "ReNova OS",
  tagline: "AI-Powered Rehabilitation & Reintegration Platform",
  shortName: "ReNova",
  description:
    "An operating system for rehabilitation, built on structure, precision, and human dignity.",
  commandShortcut: { mac: "⌘K", other: "Ctrl K" },
} as const;
