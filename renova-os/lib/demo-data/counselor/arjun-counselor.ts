import type { CounselorOverviewStats, CounselorContext, CounselorNote, CounselorTimelineEntry } from "@/types/counselor";

/**
 * Demo data for the Counselor workspace, built around the same
 * fictional "Arjun Mehta" / RN-1042 used throughout Phases 4–8 (brief
 * §14 — continuity, not a new person). Overview stats represent a
 * small fictional caseload; the detailed context below is Arjun's,
 * the only individual with a full rehabilitation journey in this
 * prototype.
 */

export const counselorOverviewStats: CounselorOverviewStats = {
  activeIndividuals: 6,
  upcomingSessions: 3,
  followUpsDue: 2,
  goalsNeedingReview: 1,
};

export const counselorContext: CounselorContext = {
  currentFocus: "Digital Communication",
  goals: [
    "Improve professional communication",
    "Complete digital literacy pathway",
    "Prepare employment materials",
  ],
  recentProgress: [
    "Communication lesson completed",
    "Digital literacy milestone reached",
    "Employment preparation pending",
  ],
  upcoming: [
    { label: "Counseling review", detail: "Scheduled for this week" },
    { label: "Next learning activity", detail: "Professional Writing module" },
    { label: "Next action", detail: "Interview practice session" },
  ],
};

export const counselorTimelineSeed: CounselorTimelineEntry[] = [
  { id: "ct1", date: "Sep 04", title: "Communication session", detail: "Progress reviewed with counselor.", category: "session" },
  { id: "ct2", date: "Sep 01", title: "Learning milestone completed", detail: "Digital literacy milestone reached.", category: "learning" },
  { id: "ct3", date: "Aug 29", title: "Employment preparation discussed", detail: "Reviewed resume and interview practice plan.", category: "employment" },
  { id: "ct4", date: "Aug 25", title: "Initial rehabilitation goal reviewed", detail: "Confirmed goals for the current phase.", category: "goal" },
];

export const counselorNotesSeed: CounselorNote[] = [
  {
    id: "cn1",
    sessionDate: "Sep 04",
    focusArea: "Professional communication",
    observations: "Engaged well in the session and spoke confidently about recent coursework.",
    progressDiscussed: "Completed communication module; digital literacy milestone reached.",
    challenges: "Still building confidence with unscripted interview questions.",
    actionsAgreed: "Practice one mock interview before the next session.",
    nextFollowUpDate: "Sep 11",
    createdAt: "Sep 04",
  },
];
