/**
 * AI Rehabilitation Planner data model. Same discipline as
 * types/dashboard.ts and types/profile.ts — no `any`, demo data only.
 */

export type ConfidenceLevel = "high" | "medium" | "low";
export type ContextSource = "profile" | "assessment" | "counseling" | "self-reported";

export interface ContextField {
  label: string;
  value: string;
  source: ContextSource;
}

export interface PlanningContext {
  personName: string;
  personAge: number;
  profileId: string;
  education: string;
  currentStatus: string;
  completedPrograms: string[];
  activePrograms: string[];
  recentMilestones: string[];
  skills: ContextField[];
  interests: ContextField[];
  completenessPct: number;
  missingFields: string[];
}

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface AssessmentCategory {
  id: string;
  label: string;
  level: SkillLevel;
  score: number;
  confidence: ConfidenceLevel;
  lastUpdated: string;
  evidence: string[];
}

export type GoalPriority = "high" | "medium" | "low";
export type GoalHorizon = "short" | "medium" | "long";
export type GoalStatus = "not-started" | "active" | "completed";

export interface PlanGoal {
  id: string;
  title: string;
  priority: GoalPriority;
  horizon: GoalHorizon;
  status: GoalStatus;
  isPersonal?: boolean;
}

export interface EvidenceSignal {
  label: string;
  detail: string;
}

export type RecommendationCategory =
  | "education"
  | "skill-development"
  | "counseling"
  | "employment-prep"
  | "life-skills"
  | "reintegration";

export type ReviewDecision = "accepted" | "modified" | "removed";

export interface Recommendation {
  id: string;
  title: string;
  category: RecommendationCategory;
  priority: GoalPriority;
  reason: string;
  expectedOutcome: string;
  durationWeeks: number;
  prerequisites: string[];
  confidence: ConfidenceLevel;
  evidence: EvidenceSignal[];
  successCriteria: string[];
}

export interface RoadmapNode {
  id: string;
  recommendationId: string;
  title: string;
  category: RecommendationCategory;
  durationWeeks: number;
  order: number;
  /** Nodes sharing a parallelGroup happen concurrently, not in sequence. */
  parallelGroup?: number;
}

export interface Milestone {
  id: string;
  order: number;
  title: string;
  description: string;
  successCriteria: string[];
}

export type AlternativePathType = "primary" | "alternative" | "secondary";

export interface AlternativePath {
  id: string;
  type: AlternativePathType;
  label: string;
  description: string;
  confidence: ConfidenceLevel;
}

export interface PlanVersion {
  version: string;
  label: string;
  date: string;
  changes: string[];
}

export interface PlanChangeEvent {
  id: string;
  date: string;
  action: string;
}

export type PlanStatus = "draft" | "active";

export interface RehabilitationPlan {
  id: string;
  profileId: string;
  status: PlanStatus;
  primaryGoalTitle: string;
  summary: string;
  estimatedDurationWeeks: number;
  confidence: ConfidenceLevel;
  strengths: EvidenceSignal[];
  developmentAreas: EvidenceSignal[];
  recommendations: Recommendation[];
  roadmap: RoadmapNode[];
  milestones: Milestone[];
  alternatives: AlternativePath[];
  warnings: string[];
  explanationFactors: string[];
}
