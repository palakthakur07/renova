import type { AnalyticsActivityEvent } from "@/types/analytics";

/**
 * RECENT ACTIVITY (brief §3). A facility-wide feed spanning modules —
 * distinct from Counselor's per-person timeline or Reintegration's
 * per-person activity log — to make the cross-module loop (brief
 * §28) visible in one place.
 */
export const analyticsActivity: AnalyticsActivityEvent[] = [
  { id: "aa1", date: "Today", title: "Digital literacy cohort milestone reached", detail: "14 individuals completed the Digital Literacy milestone this week.", module: "learning", href: "/learning" },
  { id: "aa2", date: "Today", title: "Counseling review backlog reduced", detail: "6 counseling reviews completed, down from 9 overdue.", module: "counselor", href: "/counselor" },
  { id: "aa3", date: "Yesterday", title: "Employment preparation sessions up", detail: "Employment preparation completion rose 9% over the last 30 days.", module: "release", href: "/release" },
  { id: "aa4", date: "Yesterday", title: "Progress milestone batch reviewed", detail: "12 rehabilitation milestones moved to Milestone Phase.", module: "progress", href: "/progress" },
  { id: "aa5", date: "2 days ago", title: "Communication module completions rising", detail: "Communication course completions increased across three cohorts.", module: "learning", href: "/learning" },
  { id: "aa6", date: "3 days ago", title: "Documentation readiness updated", detail: "Documentation readiness for upcoming releases now averages 81%.", module: "release", href: "/release" },
];
