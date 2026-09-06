import type { ReintegrationCategory, PreparationStatus, RoadmapStage } from "@/types/reintegration";

/**
 * REINTEGRATION ENGINE
 * ------------------------------------------------------------------
 * The single, centralized place Reintegration Preparation is
 * calculated — same boundary discipline as lib/progress/progressEngine.ts
 * (brief §4). UI components never compute a percentage inline; they
 * call one of these pure functions and render the result, so every
 * number on /release can be traced back to a function here.
 *
 * This engine answers one question only: how much of the identified
 * preparation work has been completed? It never estimates likelihood
 * of release, risk, or future behavior — see brief §1, §25.
 * ------------------------------------------------------------------
 */

export interface CategoryContribution {
  id: ReintegrationCategory["id"];
  name: string;
  progress: number;
  weightPct: number;
  contribution: number;
}

/** Equal-weighted blend of preparation categories into one overall percentage. */
export function calculateOverallPreparation(categories: ReintegrationCategory[]): number {
  if (categories.length === 0) return 0;
  const total = categories.reduce((sum, c) => sum + c.progress, 0);
  return Math.round(total / categories.length);
}

/** Per-category weighted contribution, for the "What contributed to this percentage?" drawer (brief §4). */
export function calculateCategoryContributions(categories: ReintegrationCategory[]): CategoryContribution[] {
  const weightPct = categories.length > 0 ? Math.round((100 / categories.length) * 10) / 10 : 0;
  return categories.map((c) => ({
    id: c.id,
    name: c.name,
    progress: c.progress,
    weightPct,
    contribution: Math.round((c.progress * weightPct) / 100),
  }));
}

/** Derives a transparent status label from a completion percentage — never a probability. */
export function deriveStatus(progress: number): PreparationStatus {
  if (progress <= 0) return "not-started";
  if (progress < 40) return "needs-attention";
  if (progress < 80) return "in-progress";
  return "strong";
}

export function completedItemsProgress(completedItems: number, totalItems: number): number {
  if (totalItems === 0) return 0;
  return Math.round((completedItems / totalItems) * 100);
}

/** Overall completion across the six Next Chapter Roadmap stages (brief §5). */
export function calculateRoadmapProgress(stages: RoadmapStage[]): number {
  if (stages.length === 0) return 0;
  const total = stages.reduce((sum, s) => sum + s.completionPct, 0);
  return Math.round(total / stages.length);
}

export const STATUS_LABEL: Record<PreparationStatus, string> = {
  strong: "Strong foundation",
  "in-progress": "In progress",
  "needs-attention": "Needs attention",
  "not-started": "Not started",
};
