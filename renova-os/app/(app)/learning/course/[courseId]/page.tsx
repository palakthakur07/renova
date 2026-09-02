"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { CourseOverview } from "@/components/learning/CourseOverview";
import { useLearningProgress } from "@/components/providers/LearningProgressProvider";
import { courses } from "@/lib/demo-data/learning/courses";

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const course = courses.find((c) => c.id === courseId);
  const { progress } = useLearningProgress();

  if (!course) notFound();

  return <CourseOverview course={course} progressPct={progress.courseProgressPct} />;
}
