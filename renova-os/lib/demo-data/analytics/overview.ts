import { facilityStats } from "@/lib/demo-data/facility";
import type { KeyIndicator, DevelopmentArea, ProgressStageCount, MilestoneAnalytics } from "@/types/analytics";

/**
 * KEY INDICATORS (brief §4). Reuses lib/demo-data/facility.ts's
 * facilityStats where an equivalent number already exists — brief
 * §26 asks to reuse existing demo data rather than duplicate it —
 * and adds the two figures Mission Control doesn't already track
 * (milestones, learning completion delta).
 */
export const keyIndicators: KeyIndicator[] = [
  {
    id: "active-journeys",
    label: "Active Rehabilitation Journeys",
    value: String(facilityStats.activeIndividuals),
    deltaLabel: "+8% this month",
    deltaDirection: "up",
    definition: "Individuals currently participating in an active rehabilitation plan.",
    drillHref: "/progress",
  },
  {
    id: "program-participation",
    label: "Program Participation",
    value: `${facilityStats.programParticipationPct}%`,
    deltaLabel: "+5%",
    deltaDirection: "up",
    definition: "Share of active individuals enrolled in at least one rehabilitation program this period.",
    drillHref: "/learning",
  },
  {
    id: "learning-completion",
    label: "Learning Completion",
    value: `${facilityStats.educationEngagementPct}%`,
    deltaLabel: "+9%",
    deltaDirection: "up",
    definition: "Percentage of assigned learning activities completed during the selected period.",
    drillHref: "/learning",
  },
  {
    id: "milestones-achieved",
    label: "Milestones Achieved",
    value: "43",
    deltaLabel: "+12 this month",
    deltaDirection: "up",
    definition: "Rehabilitation milestones marked complete during the selected period, across all active journeys.",
    drillHref: "/progress",
  },
];

/**
 * DEVELOPMENT AREAS (brief §9) — distinct from
 * facility.ts's rehabilitationHealth (which tracks program
 * categories for Mission Control); these map onto the specific
 * development areas the brief names and that Learning (Phase 6) and
 * Release (Phase 8) already use, e.g. "Employment Preparation."
 */
export const developmentAreas: DevelopmentArea[] = [
  { id: "digital-skills", label: "Digital Skills", progressPct: 82, trendPct: 6 },
  { id: "communication", label: "Communication", progressPct: 71, trendPct: 3 },
  { id: "vocational-skills", label: "Vocational Skills", progressPct: 63, trendPct: 5 },
  { id: "employment-preparation", label: "Employment Preparation", progressPct: 54, trendPct: 9 },
  { id: "life-skills", label: "Life Skills", progressPct: 66, trendPct: 2 },
  { id: "education", label: "Education", progressPct: 78, trendPct: 4 },
];

/** PROGRESS DISTRIBUTION (brief §10) — rehabilitation-stage language only, never risk tiers. */
export const progressDistribution: ProgressStageCount[] = [
  { id: "foundation", label: "Foundation", count: 32 },
  { id: "developing", label: "Developing", count: 47 },
  { id: "active-development", label: "Active Development", count: 35 },
  { id: "milestone-phase", label: "Milestone Phase", count: 28 },
  { id: "reintegration-preparation", label: "Reintegration Preparation", count: 18 },
];

/** MILESTONE ANALYTICS (brief §11). */
export const milestoneAnalytics: MilestoneAnalytics = {
  completedPct: 67,
  inProgressPct: 24,
  needsReviewPct: 9,
  completedCount: 43,
  overdueCount: 19,
};
