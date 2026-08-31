/**
 * Human Growth Profile data model. Mirrors the discipline set in
 * types/dashboard.ts — every field typed, no `any`, demo data only.
 */

export type StaffRole = "administrator" | "counselor" | "educator" | "officer";

export type RehabStatus = "active" | "transitioning" | "release-prep";

export interface HumanProfile {
  id: string;
  name: string;
  age: number;
  profileId: string;
  status: RehabStatus;
  admissionDate: string;
  targetReleaseDate: string;
  programParticipationPct: number;
  /** Initials-based avatar tone — never a photo. See ProfileHeader. */
  avatarInitials: string;
}

export interface RehabilitationProgress {
  overall: number;
  education: number;
  skillDevelopment: number;
  programParticipation: number;
  counselingEngagement: number;
  milestoneCompletion: number;
}

export type MilestoneState = "completed" | "current" | "upcoming";

export interface Milestone {
  id: string;
  title: string;
  state: MilestoneState;
  date?: string;
  program: string;
  completionPct: number;
  assessmentPct?: number;
  certificateAvailable?: boolean;
  staffMember?: string;
  notes?: string;
}

export type GoalCategory = "education" | "vocational" | "financial" | "employment";
export type GoalStatus = "on-track" | "at-risk" | "not-started";

export interface Goal {
  id: string;
  title: string;
  category: GoalCategory;
  progressPct: number;
  deadline: string;
  owner: string;
  status: GoalStatus;
}

export type SkillCategory = "technical" | "communication" | "vocational" | "financial" | "digital" | "workplace";

export interface Skill {
  id: string;
  category: SkillCategory;
  label: string;
  score: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  evidence: string[];
  recommendedNext: string;
}

export type EducationStatus = "completed" | "in-progress" | "not-started";

export interface EducationRecord {
  id: string;
  title: string;
  status: EducationStatus;
  progressPct: number;
  hours: number;
}

export type ProgramStatus = "completed" | "active" | "upcoming";

export interface ProgramParticipation {
  id: string;
  name: string;
  status: ProgramStatus;
  progressPct: number;
  startDate: string;
  expectedCompletion: string;
  facilitator: string;
}

export interface CounselingSession {
  id: string;
  date: string;
  topic: string;
  outcome: "completed" | "rescheduled";
}

export interface CounselingSummary {
  sessionCount: number;
  participationPct: number;
  lastSession: string;
  nextSession: string;
  sessions: CounselingSession[];
}

export type DocumentKind = "assessment" | "certificate" | "completion" | "summary" | "plan";

export interface DocumentRecord {
  id: string;
  title: string;
  kind: DocumentKind;
  date: string;
}

export type InsightConfidence = "high" | "medium" | "low";

export interface AIProfileInsight {
  id: string;
  title: string;
  observation: string;
  supportingSignals: string[];
  potentialOpportunities: string[];
  limitations: string[];
  confidence: InsightConfidence;
}

export type ReleaseChecklistState = "done" | "in-progress" | "not-started";

export interface ReleaseChecklistItem {
  id: string;
  label: string;
  state: ReleaseChecklistState;
}

export interface ReleasePreparation {
  readinessPct: number;
  targetReleaseDate: string;
  attentionAreas: string[];
  checklist: ReleaseChecklistItem[];
}

export interface AuditEvent {
  id: string;
  date: string;
  action: string;
  actor: string;
}
