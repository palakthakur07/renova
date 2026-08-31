import type {
  FacilityStats,
  RehabilitationHealthMetric,
  TrendRange,
  TrendPoint,
  AttentionItem,
} from "@/types/dashboard";

export const facilityStats: FacilityStats = {
  activeIndividuals: 1284,
  capacity: 1550,
  programParticipationPct: 87,
  educationEngagementPct: 64,
  releasesThisQuarter: 43,
  lastSyncMinutesAgo: 2,
};

export const rehabilitationHealth: RehabilitationHealthMetric[] = [
  { domain: "education", label: "Education", score: 78, trend: 4 },
  { domain: "counseling", label: "Counseling", score: 82, trend: 2 },
  { domain: "vocational", label: "Vocational Training", score: 71, trend: 6 },
  { domain: "behavioral", label: "Behavioral Programs", score: 75, trend: -1 },
  { domain: "employment", label: "Employment Preparation", score: 63, trend: 9 },
];

export const attentionItems: AttentionItem[] = [
  {
    id: "employment-plans",
    count: 12,
    label: "Employment plans incomplete",
    description: "Individuals within 60 days of release without a finalized employment plan.",
    severity: "critical",
    actionLabel: "Review queue",
  },
  {
    id: "learning-milestones",
    count: 19,
    label: "Learning milestones overdue",
    description: "Coursework milestones past their expected completion date.",
    severity: "high",
    actionLabel: "View milestones",
  },
  {
    id: "counseling-reviews",
    count: 7,
    label: "Counseling reviews due",
    description: "Progress reviews awaiting counselor sign-off this week.",
    severity: "high",
    actionLabel: "Open reviews",
  },
  {
    id: "release-assessments",
    count: 4,
    label: "Release assessments pending",
    description: "Final readiness assessments not yet scheduled.",
    severity: "medium",
    actionLabel: "Schedule",
  },
];

/**
 * Deterministic demo trend series — a smooth upward drift plus a small
 * sinusoidal wobble per metric, never Math.random(), so this data (and
 * anything derived from it) is stable across server and client renders.
 */
function buildSeries(labels: string[], base: TrendPoint): TrendPoint[] {
  return labels.map((label, i) => {
    const t = i / Math.max(1, labels.length - 1);
    return {
      label,
      participation: Math.round(base.participation + t * 9 + Math.sin(i * 0.9) * 2.5),
      completion: Math.round(base.completion + t * 13 + Math.sin(i * 0.7 + 1) * 2),
      skillDevelopment: Math.round(base.skillDevelopment + t * 8 + Math.sin(i * 1.1 + 2) * 2.5),
      counseling: Math.round(base.counseling + t * 6 + Math.sin(i * 0.5 + 0.5) * 2),
    };
  });
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEK_LABELS_30D = ["Wk 1", "Wk 2", "Wk 3", "Wk 4"];
const WEEK_LABELS_90D = Array.from({ length: 12 }, (_, i) => `Wk ${i + 1}`);
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const BASE: TrendPoint = { label: "", participation: 68, completion: 55, skillDevelopment: 60, counseling: 71 };

export const rehabilitationTrends: Record<TrendRange, TrendPoint[]> = {
  "7d": buildSeries(DAY_LABELS, BASE),
  "30d": buildSeries(WEEK_LABELS_30D, BASE),
  "90d": buildSeries(WEEK_LABELS_90D, BASE),
  "1y": buildSeries(MONTH_LABELS, BASE),
};
