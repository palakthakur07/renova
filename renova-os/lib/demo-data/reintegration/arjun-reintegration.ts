import type {
  ReintegrationCategory,
  ReadinessMapArea,
  RoadmapStage,
  EmploymentSkill,
  EmploymentPathway,
  EmploymentAction,
  PreparationItem,
  SupportResource,
  ContinuityPlanEntry,
  ReintegrationActivityEvent,
} from "@/types/reintegration";

/**
 * A single fictional demo individual — the same "Arjun Mehta" /
 * "RN-1042" used across Phases 4–7 (see lib/demo-data/profiles/arjun.ts).
 * Every value here is invented for the prototype, never real data.
 *
 * Category values are chosen so the equal-weighted average matches
 * the 68% overall preparation figure referenced in the brief, and so
 * they stay consistent with the 68% ReleasePreparation.readinessPct
 * already used on the Human Growth Profile (Phase 4) — this page is
 * the detailed, explainable version of that same number.
 */

export const reintegrationMeta = {
  lastUpdated: "16 Aug 2026",
  staffReviewStatus: "pending review" as const,
};

export const reintegrationCategories: ReintegrationCategory[] = [
  { id: "employment", name: "Employment Preparation", progress: 74, status: "in-progress", completedItems: 8, totalItems: 11 },
  { id: "education", name: "Education & Skills", progress: 82, status: "strong", completedItems: 9, totalItems: 11 },
  { id: "documentation", name: "Documentation", progress: 62, status: "in-progress", completedItems: 5, totalItems: 8 },
  { id: "lifeSkills", name: "Life Skills", progress: 66, status: "in-progress", completedItems: 6, totalItems: 9 },
  { id: "housing", name: "Housing Planning", progress: 50, status: "needs-attention", completedItems: 2, totalItems: 4 },
  { id: "support", name: "Support Network", progress: 74, status: "in-progress", completedItems: 5, totalItems: 7 },
];

export const readinessMapAreas: ReadinessMapArea[] = [
  { id: "education", label: "Education", status: "strong", note: "Web Development coursework and digital literacy assessments completed." },
  { id: "skills", label: "Skills", status: "strong", note: "Digital literacy and communication skills developed through Learning Companion." },
  { id: "employment", label: "Employment", status: "in-progress", note: "Resume drafted; interview practice underway." },
  { id: "documentation", label: "Documentation", status: "in-progress", note: "Government ID confirmed; banking access still pending." },
  { id: "housing", label: "Housing", status: "needs-attention", note: "Housing plan not yet finalized — recommend staff follow-up." },
  { id: "financial", label: "Financial Literacy", status: "in-progress", note: "Financial literacy module in progress." },
  { id: "digital", label: "Digital Readiness", status: "strong", note: "Comfortable with core digital tools used in most entry-level roles." },
  { id: "life-skills", label: "Life Skills", status: "in-progress", note: "Daily-living and workplace-communication practice ongoing." },
  { id: "community", label: "Family / Community Support", status: "in-progress", note: "Family contact re-established; community organization introduction pending." },
  { id: "wellbeing", label: "Wellbeing Support", status: "strong", note: "Regular counseling sessions attended and up to date." },
];

export const roadmapStages: RoadmapStage[] = [
  {
    id: "build",
    order: 1,
    title: "Build",
    description: "Complete remaining learning goals.",
    status: "complete",
    completionPct: 100,
    tasks: ["Complete Web Development module", "Finish digital literacy assessment"],
    milestone: "Core learning goals completed",
    nextAction: "Maintain skills through continued practice.",
  },
  {
    id: "prepare",
    order: 2,
    title: "Prepare",
    description: "Resume, interview and employment preparation.",
    status: "current",
    completionPct: 65,
    tasks: ["Draft resume", "Practice interview responses", "Review workplace communication scenarios"],
    milestone: "Resume drafted and under review",
    nextAction: "Complete a structured interview practice session.",
  },
  {
    id: "organize",
    order: 3,
    title: "Organize",
    description: "Documentation and practical arrangements.",
    status: "current",
    completionPct: 62,
    tasks: ["Confirm government ID", "Set up banking access", "Confirm transportation plan"],
    milestone: "Government ID confirmed",
    nextAction: "Complete banking access setup with staff support.",
  },
  {
    id: "connect",
    order: 4,
    title: "Connect",
    description: "Family, community and support resources.",
    status: "current",
    completionPct: 70,
    tasks: ["Re-establish family contact", "Connect with community organization", "Confirm counseling continuity"],
    milestone: "Family contact re-established",
    nextAction: "Introduce community organization contact.",
  },
  {
    id: "transition",
    order: 5,
    title: "Transition",
    description: "Final preparation and follow-up planning.",
    status: "upcoming",
    completionPct: 20,
    tasks: ["Finalize housing plan", "Confirm first-week schedule", "Complete final staff review"],
    milestone: "Not yet started",
    nextAction: "Begin housing plan discussion with staff.",
  },
  {
    id: "continue",
    order: 6,
    title: "Continue",
    description: "Post-release support and continued development.",
    status: "upcoming",
    completionPct: 0,
    tasks: ["Schedule 30-day check-in", "Identify continued learning goals"],
    milestone: "Not yet started",
    nextAction: "Will be scheduled closer to transition.",
  },
];

export const employmentSkills: EmploymentSkill[] = [
  { id: "es1", name: "Basic Computer Skills", readiness: "developed", linkedCourse: "Digital Literacy" },
  { id: "es2", name: "Communication", readiness: "developed", linkedCourse: "Workplace Communication" },
  { id: "es3", name: "Digital Literacy", readiness: "developed", linkedCourse: "Digital Literacy" },
  { id: "es4", name: "Workplace Safety", readiness: "developed", linkedCourse: "Workplace Readiness" },
  { id: "es5", name: "Advanced Office Tools", readiness: "developing", linkedCourse: "Spreadsheet Essentials" },
  { id: "es6", name: "Interview Communication", readiness: "developing" },
  { id: "es7", name: "Professional Writing", readiness: "developing" },
];

export const employmentPathways: EmploymentPathway[] = [
  {
    id: "ep1",
    title: "Data Entry",
    description: "Potential pathway based on current skills and development goals.",
    matchedSkills: ["Basic Computer Skills", "Digital Literacy"],
    developmentAreas: ["Advanced Office Tools"],
    status: "preparing",
  },
  {
    id: "ep2",
    title: "Office Support",
    description: "Potential pathway based on current skills and development goals.",
    matchedSkills: ["Communication", "Digital Literacy"],
    developmentAreas: ["Professional Writing"],
    status: "exploring",
  },
  {
    id: "ep3",
    title: "Retail Operations",
    description: "Potential pathway based on current skills and development goals.",
    matchedSkills: ["Communication", "Workplace Safety"],
    developmentAreas: ["Interview Communication"],
    status: "interested",
  },
  {
    id: "ep4",
    title: "Technical Assistant",
    description: "Potential pathway based on current skills and development goals.",
    matchedSkills: ["Digital Literacy", "Basic Computer Skills"],
    developmentAreas: ["Advanced Office Tools", "Interview Communication"],
    status: "exploring",
  },
];

export const employmentActions: EmploymentAction[] = [
  {
    id: "ea1",
    title: "Resume Preparation",
    description: "Build a resume that reflects completed education, skills, and program participation.",
    linkedSkill: "Professional Writing",
    estimatedEffort: "~1 hour",
    state: "in-progress",
  },
  {
    id: "ea2",
    title: "Interview Practice",
    description: "Practice introducing yourself, explaining your strengths and responding to common workplace questions.",
    linkedSkill: "Interview Communication",
    estimatedEffort: "~45 min",
    state: "in-progress",
  },
  {
    id: "ea3",
    title: "Digital Skills",
    description: "Confirm comfort with the core digital tools used in most entry-level roles.",
    linkedSkill: "Digital Literacy",
    estimatedEffort: "~30 min",
    state: "completed",
  },
  {
    id: "ea4",
    title: "Workplace Communication",
    description: "Practice professional communication in common workplace scenarios.",
    linkedSkill: "Communication",
    estimatedEffort: "~30 min",
    state: "completed",
  },
  {
    id: "ea5",
    title: "Job Search Preparation",
    description: "Review how to search for and evaluate potential opportunities.",
    linkedSkill: "Digital Literacy",
    estimatedEffort: "~40 min",
    state: "not-started",
  },
  {
    id: "ea6",
    title: "Professional Documentation",
    description: "Organize certificates and records that support employment applications.",
    linkedSkill: "Professional Writing",
    estimatedEffort: "~20 min",
    state: "not-started",
  },
];

export const preparationChecklist: PreparationItem[] = [
  { id: "pc1", category: "Identity", title: "Government ID", description: "Confirm a valid, current form of government-issued identification.", status: "completed" },
  { id: "pc2", category: "Identity", title: "Important documents", description: "Gather birth certificate, records, and other supporting documents.", status: "completed" },
  { id: "pc3", category: "Financial", title: "Banking access", description: "Set up or confirm access to a bank account.", status: "in-progress", linkedGoal: "Financial Literacy" },
  { id: "pc4", category: "Contacts", title: "Contact information", description: "Confirm current contact details for family and support contacts.", status: "completed" },
  { id: "pc5", category: "Logistics", title: "Transportation plan", description: "Plan transportation for the first days after release.", status: "in-progress" },
  { id: "pc6", category: "Housing", title: "Housing plan", description: "Confirm a housing plan for after release.", status: "needs-staff-support" },
  { id: "pc7", category: "Health", title: "Healthcare / support contacts", description: "Confirm healthcare and counseling contacts for continuity of care.", status: "completed" },
  { id: "pc8", category: "Digital", title: "Digital access", description: "Confirm access to a phone or computer for job search and communication.", status: "in-progress", linkedSkill: "Digital Literacy" },
  { id: "pc9", category: "Contacts", title: "Emergency contacts", description: "Confirm at least one emergency contact is on file.", status: "completed" },
];

export const supportResources: SupportResource[] = [
  {
    id: "sr1",
    category: "Family / trusted contacts",
    title: "Family contact",
    status: "connected",
    assignedTo: "Priya Mehta (sister)",
    nextAction: "Confirm visit schedule ahead of transition.",
  },
  {
    id: "sr2",
    category: "Community organizations",
    title: "Local reentry support program",
    status: "not-connected",
    assignedTo: "Placeholder — community partner",
    nextAction: "Introduce community organization contact.",
  },
  {
    id: "sr3",
    category: "Employment support",
    title: "Vocational placement service",
    status: "connected",
    assignedTo: "Workforce Development Liaison",
    nextAction: "Review available vocational opportunities.",
  },
  {
    id: "sr4",
    category: "Education support",
    title: "Continuing education advisor",
    status: "active",
    assignedTo: "Education Staff",
    nextAction: "Discuss continuing coursework after release.",
  },
  {
    id: "sr5",
    category: "Counseling / wellbeing support",
    title: "Counseling continuity plan",
    status: "active",
    assignedTo: "Counselor Demo User",
    nextAction: "Confirm counseling provider for after release.",
  },
  {
    id: "sr6",
    category: "Housing support",
    title: "Housing placement support",
    status: "not-connected",
    assignedTo: "Placeholder — housing partner",
    nextAction: "Begin housing plan discussion with staff.",
  },
  {
    id: "sr7",
    category: "Financial support",
    title: "Financial literacy coaching",
    status: "active",
    assignedTo: "Financial Literacy Program",
    nextAction: "Complete remaining financial literacy modules.",
  },
];

export const continuityPlan: ContinuityPlanEntry[] = [
  {
    period: "7-days",
    label: "First 7 Days",
    priorities: ["Confirm housing", "Confirm documentation", "Connect with support contact"],
    actions: ["Confirm housing", "Confirm documentation", "Connect with support contact", "Review employment plan"],
    supportContacts: ["Family contact", "Vocational placement service"],
    checkIns: ["Day 3 check-in call scheduled"],
  },
  {
    period: "30-days",
    label: "First 30 Days",
    priorities: ["Begin employment pathway", "Continue learning"],
    actions: ["Begin employment pathway", "Continue learning", "Complete scheduled support check-in"],
    supportContacts: ["Workforce Development Liaison", "Counseling continuity plan"],
    checkIns: ["30-day support check-in"],
  },
  {
    period: "90-days",
    label: "First 90 Days",
    priorities: ["Review progress", "Update development goals"],
    actions: ["Review progress", "Update development goals", "Continue skill development"],
    supportContacts: ["Continuing education advisor"],
    checkIns: ["90-day progress review"],
  },
];

export const reintegrationActivity: ReintegrationActivityEvent[] = [
  { id: "ra1", date: "16 Aug 2026", title: "Interview practice session completed", category: "employment", impact: "Employment preparation +6" },
  { id: "ra2", date: "12 Aug 2026", title: "Banking access appointment scheduled", category: "documentation", impact: "Documentation +4" },
  { id: "ra3", date: "9 Aug 2026", title: "Family contact re-established", category: "support", impact: "Support network +5" },
  { id: "ra4", date: "3 Aug 2026", title: "Financial literacy module — session 2", category: "lifeSkills", impact: "Life skills +3" },
];
