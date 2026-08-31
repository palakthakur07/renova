/**
 * Mission Control data model. Every dashboard component reads one of
 * these shapes from lib/demo-data/ — never inline data — so swapping
 * the demo files for a real API later is a data-layer change only.
 */

export interface FacilityStats {
  activeIndividuals: number;
  capacity: number;
  programParticipationPct: number;
  educationEngagementPct: number;
  releasesThisQuarter: number;
  lastSyncMinutesAgo: number;
}

export type RehabDomain = "education" | "counseling" | "vocational" | "behavioral" | "employment";

export interface RehabilitationHealthMetric {
  domain: RehabDomain;
  label: string;
  /** 0–100 */
  score: number;
  /** Signed percentage-point change vs. the prior period. */
  trend: number;
}

export type TrendRange = "7d" | "30d" | "90d" | "1y";

export interface TrendPoint {
  label: string;
  participation: number;
  completion: number;
  skillDevelopment: number;
  counseling: number;
}

export type TrendMetricKey = keyof Omit<TrendPoint, "label">;

export type InsightConfidence = "high" | "medium" | "low";

export interface AIInsight {
  id: string;
  title: string;
  observation: string;
  dataSignals: string[];
  recommendation: string;
  confidence: InsightConfidence;
  actionLabel: string;
}

export type AttentionSeverity = "critical" | "high" | "medium";

export interface AttentionItem {
  id: string;
  count: number;
  label: string;
  description: string;
  severity: AttentionSeverity;
  actionLabel: string;
}

export interface ReleaseCandidate {
  id: string;
  /** Clearly fictional demo name — never real personal information. */
  name: string;
  releaseDate: string;
  daysOut: 30 | 60 | 90;
  rehabCompletionPct: number;
  employmentReadinessPct: number;
  documentsReady: boolean;
}

export interface ProgramPerformance {
  id: string;
  name: string;
  enrollment: number;
  completionPct: number;
  avgProgressPct: number;
  dropOffPct: number;
  /** Signed percentage-point change vs. the prior period. */
  trendPct: number;
}

export interface ActivityEvent {
  id: string;
  time: string;
  description: string;
}
