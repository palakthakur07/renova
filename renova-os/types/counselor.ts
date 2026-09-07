/**
 * AI Counselor workspace data model (Phase 9). Same discipline as
 * types/reintegration.ts — demo data only, no `any`.
 *
 * This module is decision SUPPORT for counseling staff. Nothing here
 * represents or infers a legal, parole, sentencing, or release
 * decision, a risk/dangerousness score, or a mental-health diagnosis.
 * See lib/ai/counselorAssistant.ts and brief §19 for the language and
 * scope rules this module is written under.
 */

export interface CounselorOverviewStats {
  activeIndividuals: number;
  upcomingSessions: number;
  followUpsDue: number;
  goalsNeedingReview: number;
}

export interface CounselorContext {
  currentFocus: string;
  goals: string[];
  recentProgress: string[];
  upcoming: { label: string; detail: string }[];
}

export type InsightConfidence = "high" | "medium" | "low";

/** "PREPARE SESSION" output (brief §6, §18). */
export interface SessionBrief {
  focus: string;
  recentProgress: string[];
  positiveSignals: string[];
  needsAttention: string[];
  suggestedQuestions: string[];
  suggestedFollowUp: string;
  confidence: InsightConfidence;
}

/** "PROGRESS INSIGHT" output (brief §6). */
export interface CounselorInsight {
  id: string;
  observation: string;
  evidence: string[];
  confidence: InsightConfidence;
}

export type ActionState = "suggested" | "accepted" | "dismissed";

/** "NEXT ACTIONS" output (brief §6). */
export interface CounselorAction {
  id: string;
  title: string;
  reason: string;
  state: ActionState;
}

/** Structured counselor note — merges Part 6's "Session Summary" fields with Part 9's note fields, since they're the same information captured once. */
export interface CounselorNote {
  id: string;
  sessionDate: string;
  focusArea: string;
  observations: string;
  progressDiscussed: string;
  challenges: string;
  actionsAgreed: string;
  nextFollowUpDate: string;
  createdAt: string;
}

export type TimelineCategory = "session" | "learning" | "employment" | "goal";

export interface CounselorTimelineEntry {
  id: string;
  date: string;
  title: string;
  detail: string;
  category: TimelineCategory;
}

export type StaffDecision = "accepted" | "edited" | "dismissed";
