import type { ReleaseCandidate } from "@/types/dashboard";

/**
 * Clearly fictional demo participants — "Demo Participant A/B/C" rather
 * than realistic-sounding names, per the Phase 3 brief's instruction to
 * never present anything that could be mistaken for real personal data.
 */
export const upcomingReleases: ReleaseCandidate[] = [
  { id: "r1", name: "Demo Participant A", releaseDate: "Sep 12", daysOut: 30, rehabCompletionPct: 92, employmentReadinessPct: 85, documentsReady: true },
  { id: "r2", name: "Demo Participant B", releaseDate: "Sep 28", daysOut: 30, rehabCompletionPct: 78, employmentReadinessPct: 60, documentsReady: false },
  { id: "r3", name: "Demo Participant C", releaseDate: "Oct 20", daysOut: 60, rehabCompletionPct: 88, employmentReadinessPct: 74, documentsReady: true },
  { id: "r4", name: "Demo Participant D", releaseDate: "Nov 15", daysOut: 90, rehabCompletionPct: 65, employmentReadinessPct: 48, documentsReady: false },
  { id: "r5", name: "Demo Participant E", releaseDate: "Nov 30", daysOut: 90, rehabCompletionPct: 81, employmentReadinessPct: 69, documentsReady: true },
];
