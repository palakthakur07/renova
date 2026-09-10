import type { ProgramPerformance } from "@/types/dashboard";
import type { DevelopmentArea, ProgressStageCount, MilestoneAnalytics, ReleaseAnalyticsSummary } from "@/types/analytics";

/**
 * ANALYTICS ENGINE
 * ------------------------------------------------------------------
 * Centralized, deterministic calculations — same boundary discipline
 * as lib/reintegration/reintegrationEngine.ts (brief §27). UI
 * components never compute a percentage inline; they call one of
 * these pure functions and render the result.
 * ------------------------------------------------------------------
 */

/** Enrollment-weighted average completion across programs — not a simple average, so larger programs count more. */
export function calculateParticipationRate(programs: ProgramPerformance[]): number {
  const totalEnrollment = programs.reduce((sum, p) => sum + p.enrollment, 0);
  if (totalEnrollment === 0) return 0;
  const weighted = programs.reduce((sum, p) => sum + p.completionPct * p.enrollment, 0);
  return Math.round(weighted / totalEnrollment);
}

export function calculateLearningCompletion(completionRatePct: number): number {
  return Math.round(completionRatePct);
}

export function calculateMilestoneCompletion(milestones: MilestoneAnalytics): number {
  return Math.round(milestones.completedPct);
}

/** Equal-weighted average progress and trend across development areas — drives the "which areas are strongest/weakest" read. */
export function calculateDevelopmentTrend(areas: DevelopmentArea[]): { averageProgress: number; averageTrend: number; weakest: DevelopmentArea; strongest: DevelopmentArea } {
  const averageProgress = Math.round(areas.reduce((sum, a) => sum + a.progressPct, 0) / areas.length);
  const averageTrend = Math.round((areas.reduce((sum, a) => sum + a.trendPct, 0) / areas.length) * 10) / 10;
  const weakest = areas.reduce((min, a) => (a.progressPct < min.progressPct ? a : min));
  const strongest = areas.reduce((max, a) => (a.progressPct > max.progressPct ? a : max));
  return { averageProgress, averageTrend, weakest, strongest };
}

/** Same equal-weighted-average approach as Phase 8's calculateOverallPreparation, applied at population scale. */
export function calculateReleasePreparation(release: ReleaseAnalyticsSummary): number {
  if (release.categories.length === 0) return 0;
  return Math.round(release.categories.reduce((sum, c) => sum + c.progressPct, 0) / release.categories.length);
}

export function calculateStageTotal(stages: ProgressStageCount[]): number {
  return stages.reduce((sum, s) => sum + s.count, 0);
}

export function calculateStagePct(stage: ProgressStageCount, stages: ProgressStageCount[]): number {
  const total = calculateStageTotal(stages);
  if (total === 0) return 0;
  return Math.round((stage.count / total) * 100);
}
