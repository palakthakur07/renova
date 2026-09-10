import type { AnalyticsTimeRange } from "@/types/analytics";

/**
 * REHABILITATION TRAJECTORY demo data (brief §6). Deterministic —
 * same smooth-drift-plus-wobble generator as
 * lib/demo-data/facility.ts's buildSeries, never Math.random(), so
 * numbers are stable across renders and hover reads the same value
 * twice. Kept separate from facility.ts's rehabilitationTrends
 * because Analytics needs a 6-month range Mission Control doesn't
 * use (brief §5) — extending that Record would force an unused range
 * onto Mission Control's own switcher.
 */

export interface TrajectoryPoint {
  label: string;
  activeJourneys: number;
  learningParticipation: number;
  milestoneCompletion: number;
  programParticipation: number;
}

export type TrajectoryMetricKey = keyof Omit<TrajectoryPoint, "label">;

function buildSeries(labels: string[]): TrajectoryPoint[] {
  return labels.map((label, i) => {
    const t = i / Math.max(1, labels.length - 1);
    return {
      label,
      activeJourneys: Math.round(96 + t * 32 + Math.sin(i * 0.8) * 4),
      learningParticipation: Math.round(48 + t * 16 + Math.sin(i * 0.7 + 1) * 3),
      milestoneCompletion: Math.round(31 + t * 12 + Math.sin(i * 0.9 + 2) * 2.5),
      programParticipation: Math.round(76 + t * 11 + Math.sin(i * 0.6 + 0.5) * 2.5),
    };
  });
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEK_LABELS_30D = ["Wk 1", "Wk 2", "Wk 3", "Wk 4"];
const WEEK_LABELS_90D = Array.from({ length: 12 }, (_, i) => `Wk ${i + 1}`);
const MONTH_LABELS_6M = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const MONTH_LABELS_12M = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

export const trajectoryByRange: Record<AnalyticsTimeRange, TrajectoryPoint[]> = {
  "7d": buildSeries(DAY_LABELS),
  "30d": buildSeries(WEEK_LABELS_30D),
  "90d": buildSeries(WEEK_LABELS_90D),
  "6m": buildSeries(MONTH_LABELS_6M),
  "1y": buildSeries(MONTH_LABELS_12M),
};

export const TIME_RANGE_OPTIONS: { key: AnalyticsTimeRange; label: string }[] = [
  { key: "7d", label: "7 Days" },
  { key: "30d", label: "30 Days" },
  { key: "90d", label: "90 Days" },
  { key: "6m", label: "6 Months" },
  { key: "1y", label: "12 Months" },
];

export const TRAJECTORY_METRICS: { key: TrajectoryMetricKey; label: string; color: string }[] = [
  { key: "activeJourneys", label: "Active journeys", color: "var(--color-teal-400)" },
  { key: "learningParticipation", label: "Learning participation", color: "var(--color-cyan-400)" },
  { key: "milestoneCompletion", label: "Milestone completion", color: "var(--color-gold-500)" },
  { key: "programParticipation", label: "Program participation", color: "var(--color-emerald-500)" },
];
