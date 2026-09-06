/**
 * Release Readiness & Reintegration data model (Phase 8). Same
 * discipline as types/progress.ts — no `any`, demo data only.
 *
 * This module is strictly a PREPARATION INDICATOR — it organizes
 * evidence of rehabilitation activities, skills, and practical
 * arrangements completed so far. Nothing here models or infers
 * parole, release, sentencing, recidivism, criminality, or risk.
 * See lib/reintegration/reintegrationEngine.ts for the calculation
 * that backs these shapes, and brief §25 for the language rules
 * this module is written under.
 */

export type ReintegrationCategoryKey =
  | "employment"
  | "education"
  | "documentation"
  | "lifeSkills"
  | "housing"
  | "support";

export type PreparationStatus = "strong" | "in-progress" | "needs-attention" | "not-started";

export interface ReintegrationCategory {
  id: ReintegrationCategoryKey;
  name: string;
  progress: number;
  status: PreparationStatus;
  completedItems: number;
  totalItems: number;
}

export interface ReintegrationOverview {
  overallProgress: number;
  categories: ReintegrationCategory[];
  lastUpdated: string;
  staffReviewStatus: "reviewed" | "pending review";
}

/** A single node on the "readiness map" — brief §3. A broader set of areas than the six scored categories. */
export interface ReadinessMapArea {
  id: string;
  label: string;
  status: PreparationStatus;
  note: string;
}

export type RoadmapStageId = "build" | "prepare" | "organize" | "connect" | "transition" | "continue";
export type RoadmapStageStatus = "complete" | "current" | "upcoming";

export interface RoadmapStage {
  id: RoadmapStageId;
  order: number;
  title: string;
  description: string;
  status: RoadmapStageStatus;
  completionPct: number;
  tasks: string[];
  milestone: string;
  nextAction: string;
}

export type SkillReadiness = "developed" | "developing";

export interface EmploymentSkill {
  id: string;
  name: string;
  readiness: SkillReadiness;
  linkedCourse?: string;
}

export type PathwayStatus = "interested" | "exploring" | "preparing" | "completed";

export interface EmploymentPathway {
  id: string;
  title: string;
  description: string;
  matchedSkills: string[];
  developmentAreas: string[];
  status: PathwayStatus;
}

export type PreparationActionState = "not-started" | "in-progress" | "completed";

export interface EmploymentAction {
  id: string;
  title: string;
  description: string;
  linkedSkill: string;
  estimatedEffort: string;
  state: PreparationActionState;
}

export type ChecklistState = "not-started" | "in-progress" | "completed" | "needs-staff-support";

export interface PreparationItem {
  id: string;
  category: string;
  title: string;
  description: string;
  status: ChecklistState;
  linkedSkill?: string;
  linkedGoal?: string;
}

export type SupportStatus = "not-connected" | "connected" | "active";

export interface SupportResource {
  id: string;
  category: string;
  title: string;
  status: SupportStatus;
  assignedTo?: string;
  nextAction?: string;
  notes?: string;
}

export type ContinuityPeriod = "7-days" | "30-days" | "90-days";

export interface ContinuityPlanEntry {
  period: ContinuityPeriod;
  label: string;
  priorities: string[];
  actions: string[];
  supportContacts: string[];
  checkIns: string[];
}

export type InsightType = "priority" | "opportunity" | "support" | "next-step";
export type InsightConfidence = "high" | "medium" | "low";

export interface ReintegrationInsight {
  id: string;
  type: InsightType;
  title: string;
  explanation: string;
  evidence: string[];
  confidence: InsightConfidence;
  requiresStaffReview: true;
}

export type StaffDecision = "accepted" | "modified" | "dismissed";

export interface ReintegrationActivityEvent {
  id: string;
  date: string;
  title: string;
  category: ReintegrationCategoryKey;
  impact: string;
}
