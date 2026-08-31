import type {
  HumanProfile,
  RehabilitationProgress,
  Milestone,
  Goal,
  Skill,
  EducationRecord,
  ProgramParticipation,
  CounselingSummary,
  DocumentRecord,
  AIProfileInsight,
  ReleasePreparation,
  AuditEvent,
} from "@/types/profile";
import type { AIInsight } from "@/types/dashboard";

/**
 * A single fictional demo individual. Every field here is invented for
 * the prototype — never real personal data. "RN-1042" and "Arjun Mehta"
 * are placeholders in the same spirit as Phase 3's "Demo Participant A."
 */
export const profile: HumanProfile = {
  id: "arjun-mehta",
  name: "Arjun Mehta",
  age: 27,
  profileId: "RN-1042",
  status: "active",
  admissionDate: "3 February 2025",
  targetReleaseDate: "18 November 2026",
  programParticipationPct: 89,
  avatarInitials: "AM",
};

export const rehabilitationProgress: RehabilitationProgress = {
  overall: 72,
  education: 82,
  skillDevelopment: 71,
  programParticipation: 89,
  counselingEngagement: 65,
  milestoneCompletion: 74,
};

export const milestones: Milestone[] = [
  { id: "m1", title: "Admission", state: "completed", date: "3 Feb 2025", program: "Intake", completionPct: 100 },
  { id: "m2", title: "Initial Assessment", state: "completed", date: "17 Feb 2025", program: "Assessment", completionPct: 100, staffMember: "Assessment Team" },
  { id: "m3", title: "Digital Literacy", state: "completed", date: "22 May 2025", program: "Education", completionPct: 100, assessmentPct: 88, certificateAvailable: true, staffMember: "Education Staff" },
  { id: "m4", title: "Computer Fundamentals", state: "completed", date: "12 Jul 2025", program: "Education", completionPct: 100, assessmentPct: 84, certificateAvailable: true, staffMember: "Education Staff" },
  { id: "m5", title: "Web Development", state: "current", program: "Education", completionPct: 68, staffMember: "Education Staff", notes: "Progressing through front-end fundamentals module." },
  { id: "m6", title: "Employment Preparation", state: "upcoming", program: "Vocational", completionPct: 0 },
];

export const goals: Goal[] = [
  { id: "g1", title: "Complete Web Development Fundamentals", category: "education", progressPct: 68, deadline: "30 Sep 2026", owner: "Education Staff", status: "on-track" },
  { id: "g2", title: "Complete Financial Literacy", category: "financial", progressPct: 42, deadline: "15 Oct 2026", owner: "Counselor Demo User", status: "on-track" },
  { id: "g3", title: "Employment Preparation", category: "employment", progressPct: 25, deadline: "1 Nov 2026", owner: "Vocational Staff", status: "at-risk" },
];

export const skills: Skill[] = [
  { id: "s1", category: "digital", label: "Digital Literacy", score: 82, level: "Advanced", evidence: ["Computer Fundamentals completed", "Digital Literacy assessment: 84%", "18 learning sessions completed"], recommendedNext: "Advanced Digital Applications" },
  { id: "s2", category: "communication", label: "Communication", score: 68, level: "Intermediate", evidence: ["Group counseling participation", "Peer mentoring session completed"], recommendedNext: "Public Speaking Fundamentals" },
  { id: "s3", category: "financial", label: "Financial Literacy", score: 54, level: "Beginner", evidence: ["Financial Literacy course in progress"], recommendedNext: "Budgeting & Credit Basics" },
  { id: "s4", category: "technical", label: "Technical Skills", score: 61, level: "Intermediate", evidence: ["Web Development Fundamentals — 68% complete"], recommendedNext: "Front-End Applications Project" },
  { id: "s5", category: "workplace", label: "Workplace Readiness", score: 47, level: "Beginner", evidence: ["Employment Preparation not yet started"], recommendedNext: "Workplace Communication Basics" },
  { id: "s6", category: "vocational", label: "Vocational Skills", score: 58, level: "Intermediate", evidence: ["Computer Fundamentals certificate"], recommendedNext: "Applied Vocational Project" },
];

export const education: EducationRecord[] = [
  { id: "e1", title: "Secondary Education", status: "completed", progressPct: 100, hours: 0 },
  { id: "e2", title: "Digital Literacy", status: "completed", progressPct: 100, hours: 42 },
  { id: "e3", title: "Computer Fundamentals", status: "completed", progressPct: 100, hours: 56 },
  { id: "e4", title: "Web Development", status: "in-progress", progressPct: 68, hours: 34 },
];

export const programs: ProgramParticipation[] = [
  { id: "p1", name: "Digital Literacy", status: "completed", progressPct: 100, startDate: "10 Feb 2025", expectedCompletion: "22 May 2025", facilitator: "Education Staff" },
  { id: "p2", name: "Computer Fundamentals", status: "completed", progressPct: 100, startDate: "1 Jun 2025", expectedCompletion: "12 Jul 2025", facilitator: "Education Staff" },
  { id: "p3", name: "Counseling Program", status: "active", progressPct: 65, startDate: "3 Feb 2025", expectedCompletion: "Ongoing", facilitator: "Counselor Demo User" },
  { id: "p4", name: "Employment Preparation", status: "upcoming", progressPct: 0, startDate: "1 Nov 2026", expectedCompletion: "TBD", facilitator: "Vocational Staff" },
];

export const counseling: CounselingSummary = {
  sessionCount: 12,
  participationPct: 78,
  lastSession: "8 August 2026",
  nextSession: "15 August 2026",
  sessions: [
    { id: "c1", date: "08 Aug", topic: "Career Planning", outcome: "completed" },
    { id: "c2", date: "01 Aug", topic: "Stress Management", outcome: "completed" },
    { id: "c3", date: "25 Jul", topic: "Goal Setting", outcome: "completed" },
    { id: "c4", date: "18 Jul", topic: "Peer Relationships", outcome: "completed" },
  ],
};

export const documents: DocumentRecord[] = [
  { id: "d1", title: "Assessment Report", kind: "assessment", date: "17 Feb 2025" },
  { id: "d2", title: "Certificate — Digital Literacy", kind: "certificate", date: "22 May 2025" },
  { id: "d3", title: "Certificate — Computer Fundamentals", kind: "certificate", date: "12 Jul 2025" },
  { id: "d4", title: "Training Completion Summary", kind: "completion", date: "12 Jul 2025" },
  { id: "d5", title: "Counseling Summary", kind: "summary", date: "8 Aug 2026" },
  { id: "d6", title: "Rehabilitation Plan", kind: "plan", date: "3 Feb 2025" },
];

export const aiSummary: AIProfileInsight = {
  id: "summary-arjun",
  title: "Strong alignment with technology-oriented pathways",
  observation:
    "Arjun has demonstrated consistent participation in foundational computer training and shows strong interest in technology-oriented learning. Recent progress suggests structured digital skills training may be a useful next step.",
  supportingSignals: [
    "Completed Digital Literacy and Computer Fundamentals with assessment scores above 84%",
    "68% through Web Development Fundamentals, ahead of the typical pace for this module",
    "18 learning sessions completed with consistent attendance",
  ],
  potentialOpportunities: [
    "Advanced Digital Applications coursework",
    "Peer-mentoring role within Digital Literacy cohort",
  ],
  limitations: [
    "Workplace readiness has not yet been formally assessed",
    "Employment preparation has not started",
  ],
  confidence: "high",
};

export const aiInsights: AIInsight[] = [
  {
    id: "insight-arjun-sessions",
    title: "Shorter sessions correlate with higher participation",
    observation: "Participation increased after the introduction of shorter learning sessions.",
    dataSignals: ["Attendance +16% since format change", "Completion +11% over the same period"],
    recommendation: "Suggested: consider maintaining shorter modular sessions going forward.",
    confidence: "medium",
    actionLabel: "View analysis",
  },
];

export const releasePreparation: ReleasePreparation = {
  readinessPct: 68,
  targetReleaseDate: "18 November 2026",
  attentionAreas: ["Employment preparation", "Post-release support plan"],
  checklist: [
    { id: "r1", label: "Documentation", state: "done" },
    { id: "r2", label: "Education", state: "done" },
    { id: "r3", label: "Skills", state: "in-progress" },
    { id: "r4", label: "Employment preparation", state: "not-started" },
    { id: "r5", label: "Reintegration plan", state: "not-started" },
  ],
};

export const auditEvents: AuditEvent[] = [
  { id: "a1", date: "12 Aug", action: "Rehabilitation plan updated", actor: "Counselor Demo User" },
  { id: "a2", date: "10 Aug", action: "Course completion recorded — Web Development module", actor: "Education Staff" },
  { id: "a3", date: "08 Aug", action: "AI summary generated", actor: "ReNova Intelligence" },
  { id: "a4", date: "01 Aug", action: "Counseling session logged", actor: "Counselor Demo User" },
];
