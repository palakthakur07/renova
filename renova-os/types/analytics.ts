/**
 * Rehabilitation Analytics data model (Phase 10). Same discipline as
 * types/reintegration.ts and types/counselor.ts — demo data only, no
 * `any`.
 *
 * This module measures PROGRAM ACTIVITY AND DEVELOPMENT across the
 * rehabilitation ecosystem. It is never a scoring, ranking, risk, or
 * decision-making system for individuals — see brief §1, §29 and
 * lib/ai/analyticsInsights.ts for the language rules this module is
 * written under.
 */

import type { TrendRange } from "@/types/dashboard";

export type AnalyticsTimeRange = TrendRange | "6m";

export interface KeyIndicator {
  id: string;
  label: string;
  value: string;
  deltaLabel: string;
  deltaDirection: "up" | "down" | "flat";
  definition: string;
  drillHref?: string;
}

export interface DevelopmentArea {
  id: string;
  label: string;
  progressPct: number;
  trendPct: number;
}

export type ProgressStageId = "foundation" | "developing" | "active-development" | "milestone-phase" | "reintegration-preparation";

export interface ProgressStageCount {
  id: ProgressStageId;
  label: string;
  count: number;
}

export interface MilestoneAnalytics {
  completedPct: number;
  inProgressPct: number;
  needsReviewPct: number;
  completedCount: number;
  overdueCount: number;
}

export interface LearningAnalyticsSummary {
  coursesActive: number;
  lessonsCompleted: number;
  completionRatePct: number;
  skillsDeveloped: number;
  trend: { label: string; value: number }[];
}

export interface CounselorActivitySummary {
  sessionsThisMonth: number;
  followUpsDue: number;
  reviewsCompleted: number;
  notesPending: number;
}

export interface ReleaseAnalyticsSummary {
  upcomingReleases: number;
  categories: { id: string; label: string; progressPct: number }[];
}

export type AnalyticsInsightConfidence = "high" | "medium" | "low";
export type AnalyticsInsightCategory = "learning" | "employment" | "communication" | "counseling" | "documentation" | "housing";

export interface AnalyticsInsight {
  id: string;
  title: string;
  observation: string;
  evidence: string[];
  confidence: AnalyticsInsightConfidence;
  suggestedReview: string;
  category: AnalyticsInsightCategory;
  drillHref?: string;
}

export interface AnalyticsActivityEvent {
  id: string;
  date: string;
  title: string;
  detail: string;
  module: "learning" | "progress" | "counselor" | "release";
  href: string;
}
