import type { LearningAnalyticsSummary, CounselorActivitySummary, ReleaseAnalyticsSummary } from "@/types/analytics";

/**
 * LEARNING ANALYTICS (brief §12). completionRatePct intentionally
 * matches facility.ts's facilityStats.educationEngagementPct (64%)
 * so Learning Completion reads the same number whether it's seen on
 * Mission Control or here — one system, one number.
 */
export const learningAnalytics: LearningAnalyticsSummary = {
  coursesActive: 18,
  lessonsCompleted: 142,
  completionRatePct: 64,
  skillsDeveloped: 37,
  trend: [
    { label: "May", value: 51 },
    { label: "Jun", value: 55 },
    { label: "Jul", value: 58 },
    { label: "Aug", value: 61 },
    { label: "Sep", value: 64 },
  ],
};

/** COUNSELOR ACTIVITY (brief §13) — operational visibility, never a staff scorecard. */
export const counselorActivity: CounselorActivitySummary = {
  sessionsThisMonth: 84,
  followUpsDue: 12,
  reviewsCompleted: 76,
  notesPending: 5,
};

/**
 * RELEASE ANALYTICS (brief §14) — aggregate completion of documented
 * preparation activities only. Category labels match Phase 8's
 * reintegration categories for narrative continuity; these are
 * population-wide averages, not any one individual's numbers.
 */
export const releaseAnalytics: ReleaseAnalyticsSummary = {
  upcomingReleases: 43,
  categories: [
    { id: "employment", label: "Employment Preparation", progressPct: 68 },
    { id: "documentation", label: "Documentation Readiness", progressPct: 81 },
    { id: "support", label: "Support Planning", progressPct: 74 },
  ],
};
