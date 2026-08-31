import type { PlanningContext, AssessmentCategory, PlanGoal } from "@/types/planner";
import { profile } from "@/lib/demo-data/profiles/arjun";

/**
 * Planning inputs for Arjun Mehta — built from the same demo profile
 * Phase 4 already established (types/profile.ts), not a disconnected
 * duplicate. This is what brief §57 means by the planner integrating
 * with the Human Growth Profile rather than re-collecting information.
 */
export const planningContext: PlanningContext = {
  personName: profile.name,
  personAge: profile.age,
  profileId: profile.profileId,
  education: "Secondary Education — completed",
  currentStatus: "Active rehabilitation",
  completedPrograms: ["Digital Literacy", "Computer Fundamentals"],
  activePrograms: ["Web Development", "Counseling Program"],
  recentMilestones: ["Computer Fundamentals certificate (12 Jul 2025)", "Digital Literacy certificate (22 May 2025)"],
  skills: [
    { label: "Digital Literacy — Intermediate", value: "82", source: "assessment" },
    { label: "Technical Skills — Intermediate", value: "61", source: "assessment" },
    { label: "Communication — Intermediate", value: "68", source: "counseling" },
  ],
  interests: [
    { label: "Technology", value: "High", source: "self-reported" },
    { label: "Structured learning environments", value: "Medium", source: "counseling" },
  ],
  completenessPct: 82,
  missingFields: ["Employment preference", "Recent workplace-readiness assessment"],
};

export const assessmentCategories: AssessmentCategory[] = [
  { id: "education", label: "Education", level: "Advanced", score: 82, confidence: "high", lastUpdated: "12 Jul 2025", evidence: ["Secondary education completed", "Digital Literacy certificate", "Computer Fundamentals certificate"] },
  { id: "digital-skills", label: "Digital skills", level: "Intermediate", score: 84, confidence: "high", lastUpdated: "8 Aug 2026", evidence: ["Digital Literacy assessment: 84%", "18 learning sessions completed"] },
  { id: "vocational-skills", label: "Vocational skills", level: "Intermediate", score: 58, confidence: "medium", lastUpdated: "12 Jul 2025", evidence: ["Computer Fundamentals certificate", "No formal vocational assessment yet"] },
  { id: "communication", label: "Communication", level: "Intermediate", score: 68, confidence: "medium", lastUpdated: "1 Aug 2026", evidence: ["Group counseling participation", "Peer mentoring session completed"] },
  { id: "financial-literacy", label: "Financial literacy", level: "Beginner", score: 54, confidence: "medium", lastUpdated: "20 Jul 2026", evidence: ["Financial Literacy course in progress"] },
  { id: "workplace-readiness", label: "Workplace readiness", level: "Beginner", score: 47, confidence: "low", lastUpdated: "Not yet assessed", evidence: ["Employment Preparation not yet started"] },
  { id: "program-participation", label: "Program participation", level: "Advanced", score: 89, confidence: "high", lastUpdated: "8 Aug 2026", evidence: ["89% overall program participation", "Consistent attendance across active programs"] },
  { id: "counseling-engagement", label: "Counseling engagement", level: "Intermediate", score: 65, confidence: "high", lastUpdated: "8 Aug 2026", evidence: ["12 sessions completed", "78% participation rate"] },
];

export const initialGoals: PlanGoal[] = [
  { id: "goal-primary", title: "Build skills for technology-related employment", priority: "high", horizon: "medium", status: "active" },
  { id: "goal-2", title: "Improve communication confidence", priority: "medium", horizon: "short", status: "active" },
  { id: "goal-3", title: "Develop financial literacy", priority: "medium", horizon: "short", status: "not-started" },
  { id: "goal-4", title: "Prepare for employment interviews", priority: "low", horizon: "long", status: "not-started" },
];

export const personalGoalStatement =
  "I want to learn computers and get a job where I can use technology.";
