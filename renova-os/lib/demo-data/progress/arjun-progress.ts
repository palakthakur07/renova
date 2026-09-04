import type {
  ProgressCategory,
  SkillProgress,
  SkillHistory,
  LearningProgressSnapshot,
  ProgramProgress,
  MilestoneProgress,
  JourneyPhase,
  CurrentPhaseSummary,
  ActivityEvent,
  ProgressSnapshot,
  SupportArea,
  NextAction,
  StaffNote,
  ProgressAuditEvent,
} from "@/types/progress";

/**
 * A single fictional demo individual — the same "Arjun Mehta" /
 * "RN-1042" used across Phases 4–6 (see lib/demo-data/profiles/arjun.ts).
 * Every value here is invented for the prototype, never real data.
 */
export const progressMeta = {
  planVersion: "1.0",
  lastUpdated: "16 Aug 2026",
};

/**
 * The five weighted categories the progress engine combines. Weights
 * sum to 100 and are shown verbatim in the explainability drawer —
 * nothing here is a hidden or opaque calculation.
 */
export const categoryProgress: ProgressCategory[] = [
  { key: "education", label: "Education", valuePct: 82, weightPct: 25 },
  { key: "skills", label: "Skills", valuePct: 71, weightPct: 25 },
  { key: "participation", label: "Participation", valuePct: 89, weightPct: 20 },
  { key: "learning", label: "Learning", valuePct: 76, weightPct: 20 },
  { key: "milestones", label: "Milestones", valuePct: 74, weightPct: 10 },
];

export const skillProgress: SkillProgress[] = [
  { id: "s1", label: "Digital Literacy", category: "digital", previousScore: 62, currentScore: 82 },
  { id: "s2", label: "Communication", category: "communication", previousScore: 51, currentScore: 68 },
  { id: "s3", label: "Workplace Readiness", category: "workplace", previousScore: 38, currentScore: 47 },
  { id: "s4", label: "Financial Literacy", category: "financial", previousScore: 41, currentScore: 54 },
];

export const skillHistory: Record<string, SkillHistory> = {
  s1: {
    skillId: "s1",
    currentLevel: "Intermediate",
    previousLevel: "Foundation",
    change: 20,
    evidence: ["Computer Applications", "Digital Literacy Assessment", "Learning Sessions"],
    lastUpdated: "16 Aug 2026",
  },
  s2: {
    skillId: "s2",
    currentLevel: "Intermediate",
    previousLevel: "Foundation",
    change: 17,
    evidence: ["Counseling session participation", "Workplace communication exercise"],
    lastUpdated: "12 Aug 2026",
  },
  s3: {
    skillId: "s3",
    currentLevel: "Foundation",
    previousLevel: "Foundation",
    change: 9,
    evidence: ["Workplace communication exercise"],
    lastUpdated: "10 Aug 2026",
  },
  s4: {
    skillId: "s4",
    currentLevel: "Foundation",
    previousLevel: "Foundation",
    change: 13,
    evidence: ["Financial Literacy — in progress"],
    lastUpdated: "3 Aug 2026",
  },
};

/**
 * Static denominators for the learning snapshot (§16). Live values
 * (lessons completed, hours, average score) are blended in at render
 * time from useLearningProgress() — see components/progress/
 * LearningProgressSection.tsx — so this stays a floor, not a duplicate
 * source of truth.
 */
export const learningProgressBaseline: LearningProgressSnapshot = {
  coursesCompleted: 3,
  coursesTotal: 6,
  lessonsCompleted: 18,
  lessonsTotal: 30,
  assessmentsTaken: 5,
  averageScorePct: 82,
  learningHours: 24,
};

export const programParticipation: ProgramProgress[] = [
  { id: "pp1", name: "Digital Literacy", participationPct: 100, completionPct: 100, status: "completed" },
  { id: "pp2", name: "Computer Applications", participationPct: 78, completionPct: 72, status: "active" },
  { id: "pp3", name: "Counseling", participationPct: 85, completionPct: 78, status: "active" },
  { id: "pp4", name: "Employment Preparation", participationPct: 30, completionPct: 25, status: "upcoming" },
];

/** Mirrors the milestone set the AI Rehabilitation Planner produces (lib/ai/rehabilitationPlanner.ts), kept consistent across Phases 5–7. */
export const milestoneProgress: MilestoneProgress[] = [
  {
    id: "ms-1",
    order: 1,
    title: "Digital Foundations",
    state: "complete",
    completionPct: 100,
    requirements: ["Computer Fundamentals II complete", "Assessment ≥75%"],
    completedActivities: ["Computer Fundamentals II", "Digital Literacy Assessment — 84%"],
    remainingActivities: [],
    expectedOutcome: "Core computer competency established.",
  },
  {
    id: "ms-2",
    order: 2,
    title: "Technical Capability",
    state: "in-progress",
    completionPct: 68,
    requirements: ["Web Development Fundamentals complete", "Working project delivered"],
    completedActivities: ["Computer Applications — Module 3"],
    remainingActivities: ["Web Development Fundamentals — remaining modules", "Front-end project submission"],
    expectedOutcome: "Applied technical skill demonstrated through project work.",
  },
  {
    id: "ms-3",
    order: 3,
    title: "Workplace Readiness",
    state: "upcoming",
    completionPct: 0,
    requirements: ["Communication workshop complete", "Financial literacy course complete"],
    completedActivities: [],
    remainingActivities: ["Communication Skills Workshop", "Financial Literacy course"],
    expectedOutcome: "Communication and financial foundations in place.",
  },
  {
    id: "ms-4",
    order: 4,
    title: "Employment Preparation",
    state: "upcoming",
    completionPct: 0,
    requirements: ["Mock interview complete", "Employment plan drafted"],
    completedActivities: [],
    remainingActivities: ["Mock interview", "Draft employment plan"],
    expectedOutcome: "Ready for interviews with a draft employment plan.",
  },
];

/** The signature journey visual (§9–10) — broader phases than the milestone tracker above, spanning intake through reintegration. */
export const journeyPhases: JourneyPhase[] = [
  { id: "jp-1", order: 1, label: "Admission", state: "complete" },
  { id: "jp-2", order: 2, label: "Assessment", state: "complete" },
  { id: "jp-3", order: 3, label: "Foundational Learning", state: "complete" },
  { id: "jp-4", order: 4, label: "Skill Development", state: "current" },
  { id: "jp-5", order: 5, label: "Employment Preparation", state: "upcoming" },
  { id: "jp-6", order: 6, label: "Reintegration Preparation", state: "upcoming" },
];

export const currentPhaseSummary: CurrentPhaseSummary = {
  phaseLabel: "Skill Development",
  completionPct: 68,
  activeActivities: 3,
  upcomingMilestones: 1,
  recommendedActions: 2,
};

export const activityHistory: ActivityEvent[] = [
  {
    id: "act-1",
    date: "16 Aug",
    category: "education",
    activity: "Completed Computer Applications — Module 3",
    impact: "Education +2, Skills +1",
    resultPct: 84,
    relatedSkill: "Digital Literacy",
    relatedGoal: "Technology Employment",
  },
  {
    id: "act-2",
    date: "14 Aug",
    category: "assessment",
    activity: "Completed Digital Literacy assessment",
    impact: "Skills +3",
    resultPct: 82,
    relatedSkill: "Digital Literacy",
    relatedGoal: "Technology Employment",
  },
  {
    id: "act-3",
    date: "12 Aug",
    category: "counseling",
    activity: "Attended counseling session",
    impact: "Participation +1",
    relatedSkill: "Communication",
    relatedGoal: "Workplace Readiness",
  },
  {
    id: "act-4",
    date: "10 Aug",
    category: "skills",
    activity: "Completed workplace communication exercise",
    impact: "Skills +1",
    relatedSkill: "Workplace Readiness",
    relatedGoal: "Workplace Readiness",
  },
];

/** Progress can fluctuate — see §31. No implication that it must always rise. */
export const progressHistory: ProgressSnapshot[] = [
  { date: "16 Aug", overallPct: 72 },
  { date: "09 Aug", overallPct: 68 },
  { date: "02 Aug", overallPct: 64 },
  { date: "26 Jul", overallPct: 59, note: "Course participation decreased during this period." },
];

export const positiveInsights: string[] = [
  "Learning activity increased 18% over the last four weeks.",
  "Digital literacy assessment improved from 62% to 82%.",
  "Three planned milestones have been completed.",
];

export const supportAreas: SupportArea[] = [
  {
    id: "sup-1",
    area: "Employment Preparation",
    completionPct: 25,
    suggestedSupport: ["Interview practice", "Resume preparation", "Workplace communication"],
  },
];

export const nextActions: NextAction[] = [
  {
    id: "na-1",
    title: "Continue Web Development Fundamentals",
    reason: "Currently in progress at 68% completion, ahead of the typical pace for this module.",
    relatedGoal: "Technical Capability",
    estimatedEffort: "~45 min",
    target: "learning",
    href: "/learning",
  },
  {
    id: "na-2",
    title: "Complete Employment Preparation Module 1",
    reason: "Lowest-completion program area and a planned milestone requirement.",
    relatedGoal: "Employment Preparation",
    estimatedEffort: "~30 min",
    target: "learning",
    href: "/learning",
  },
  {
    id: "na-3",
    title: "Schedule communication practice",
    reason: "Workplace readiness would benefit from structured practice ahead of employment prep.",
    relatedGoal: "Workplace Readiness",
    estimatedEffort: "~20 min",
    target: "profile",
    href: "/profiles",
  },
  {
    id: "na-4",
    title: "Review Financial Literacy lesson",
    reason: "Currently the lowest-scoring assessed skill category.",
    relatedGoal: "Workplace Readiness",
    estimatedEffort: "~15 min",
    target: "planner",
    href: "/planner",
  },
];

export const staffNotesSeed: StaffNote[] = [
  {
    id: "note-1",
    category: "education",
    note: "Arjun has expressed continued interest in technology-related learning.",
    author: "Priya Nair",
    role: "Education Staff",
    date: "14 Aug 2026",
  },
  {
    id: "note-2",
    category: "counseling",
    note: "Engaged well in this week's session; discussed post-release employment goals.",
    author: "Counselor Demo User",
    role: "Counselor",
    date: "12 Aug 2026",
  },
];

export const progressAuditEvents: ProgressAuditEvent[] = [
  { id: "pa-1", date: "16 Aug", action: "Course completion recorded — Computer Applications Module 3", actor: "Education Staff" },
  { id: "pa-2", date: "16 Aug", action: "Progress recalculated", actor: "System" },
  { id: "pa-3", date: "16 Aug", action: "AI insight generated", actor: "ReNova Intelligence" },
  { id: "pa-4", date: "12 Aug", action: "Counseling session logged", actor: "Counselor Demo User" },
  { id: "pa-5", date: "10 Aug", action: "Workplace communication exercise recorded", actor: "Education Staff" },
];
