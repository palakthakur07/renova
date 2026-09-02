import type { Course } from "@/types/learning";

/**
 * One demo course, matching the module list from the Phase 6 brief
 * exactly. Module 3 shares its name with the course itself in the
 * brief's own example — kept as specified rather than renamed.
 */
export const computerApplicationsCourse: Course = {
  id: "computer-applications",
  title: "Computer Applications",
  description:
    "A practical course in workplace computing — from digital foundations through basic web concepts — built to support the Technology Employment Pathway.",
  goal: "Build workplace digital competency.",
  durationWeeks: 6,
  skills: ["Digital Literacy", "Productivity", "Workplace Readiness"],
  rehabilitationGoal: "Technology Employment",
  objectives: [
    { id: "obj-1", label: "Use common productivity tools" },
    { id: "obj-2", label: "Organize digital files" },
    { id: "obj-3", label: "Create simple documents and spreadsheets" },
    { id: "obj-4", label: "Navigate online resources" },
    { id: "obj-5", label: "Apply basic workplace technology skills" },
  ],
  modules: [
    { id: "mod-1", order: 1, title: "Digital Foundations", status: "completed", progressPct: 100, lessonIds: ["lesson-foundations"] },
    { id: "mod-2", order: 2, title: "Files & Information", status: "completed", progressPct: 100, lessonIds: ["lesson-files"] },
    { id: "mod-3", order: 3, title: "Computer Applications", status: "current", progressPct: 68, lessonIds: ["lesson-variables", "lesson-spreadsheets"] },
    { id: "mod-4", order: 4, title: "Online Productivity", status: "upcoming", progressPct: 0, lessonIds: ["lesson-productivity"] },
    { id: "mod-5", order: 5, title: "Introduction to Web", status: "upcoming", progressPct: 0, lessonIds: ["lesson-web-intro"] },
    { id: "mod-6", order: 6, title: "Workplace Digital Skills", status: "upcoming", progressPct: 0, lessonIds: ["lesson-workplace"] },
  ],
};

export const courses: Course[] = [computerApplicationsCourse];
