/**
 * Site-wide configuration. Placeholder values only — Phase 1 has
 * no backend, no auth, no real org data. This file is the single
 * place a future phase wires in real config (env-driven name,
 * feature flags, etc.) without touching components.
 */
export const siteConfig = {
  name: "ReNova",
  tagline: "Intelligent Rehabilitation & Reintegration Platform",
  shortName: "ReNova",
  description: "An intelligent rehabilitation & reintegration platform.",
  version: "0.1.0",
  commandShortcut: { mac: "⌘K", other: "Ctrl K" },
} as const;
