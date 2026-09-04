/**
 * Rehabilitation Progress Intelligence data model (Phase 7). Same
 * discipline as types/profile.ts, types/planner.ts, types/learning.ts —
 * no `any`, demo data only.
 *
 * This module is strictly a PROGRESS INDICATOR — participation and
 * development within the rehabilitation program. Nothing here models
 * or infers parole, release, sentencing, discipline, or behavior
 * prediction. See lib/progress/progressEngine.ts for the calculation
 * that backs these shapes.
 */

export type ProgressCategoryKey = "education" | "skills" | "participation" | "learning" | "milestones";

export interface ProgressCategory {
  key: ProgressCategoryKey;
  label: string;
  valuePct: number;
  weightPct: number;
}

export interface ProgressOverview {
  overallPct: number;
  categories: ProgressCategory[];
  planVersion: string;
  lastUpdated: string;
}

export type SkillTrendCategory = "digital" | "communication" | "workplace" | "financial" | "technical" | "vocational";

export interface SkillProgress {
  id: string;
  label: string;
  category: SkillTrendCategory;
  previousScore: number;
  currentScore: number;
}

export interface SkillHistory {
  skillId: string;
  currentLevel: "Foundation" | "Intermediate" | "Advanced";
  previousLevel: "Foundation" | "Intermediate" | "Advanced";
  change: number;
  evidence: string[];
  lastUpdated: string;
}

export interface LearningProgressSnapshot {
  coursesCompleted: number;
  coursesTotal: number;
  lessonsCompleted: number;
  lessonsTotal: number;
  assessmentsTaken: number;
  averageScorePct: number;
  learningHours: number;
}

export type ProgramStatus = "completed" | "active" | "upcoming";

export interface ProgramProgress {
  id: string;
  name: string;
  participationPct: number;
  completionPct: number;
  status: ProgramStatus;
}

export type MilestoneProgressState = "complete" | "in-progress" | "upcoming";

export interface MilestoneProgress {
  id: string;
  order: number;
  title: string;
  state: MilestoneProgressState;
  completionPct: number;
  requirements: string[];
  completedActivities: string[];
  remainingActivities: string[];
  expectedOutcome: string;
}

export type JourneyPhaseState = "complete" | "current" | "upcoming";

export interface JourneyPhase {
  id: string;
  order: number;
  label: string;
  state: JourneyPhaseState;
}

export interface CurrentPhaseSummary {
  phaseLabel: string;
  completionPct: number;
  activeActivities: number;
  upcomingMilestones: number;
  recommendedActions: number;
}

export type ActivityCategory = "education" | "skills" | "counseling" | "program" | "assessment";

export interface ActivityEvent {
  id: string;
  date: string;
  category: ActivityCategory;
  activity: string;
  impact: string;
  resultPct?: number;
  relatedSkill?: string;
  relatedGoal?: string;
}

export interface ProgressSnapshot {
  date: string;
  overallPct: number;
  note?: string;
}

export type InsightConfidence = "high" | "medium" | "low";

export interface ProgressInsight {
  id: string;
  observation: string;
  evidence: string[];
  category: ProgressCategoryKey | "general";
  confidence: InsightConfidence;
  suggestedAction: string;
  requiresHumanReview: boolean;
}

export interface SupportArea {
  id: string;
  area: string;
  completionPct: number;
  suggestedSupport: string[];
}

export type NextActionTarget = "learning" | "planner" | "profile" | "general";

export interface NextAction {
  id: string;
  title: string;
  reason: string;
  relatedGoal: string;
  estimatedEffort: string;
  target: NextActionTarget;
  href: string;
}

export type StaffNoteCategory = "education" | "skills" | "counseling" | "program" | "general";

export interface StaffNote {
  id: string;
  category: StaffNoteCategory;
  note: string;
  author: string;
  role: string;
  date: string;
}

export interface ProgressAuditEvent {
  id: string;
  date: string;
  action: string;
  actor: string;
}
