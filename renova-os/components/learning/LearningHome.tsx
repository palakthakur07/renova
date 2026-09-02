"use client";

import { useEffect, useState } from "react";
import { LearningHeader } from "./LearningHeader";
import { LearningPath } from "./LearningPath";
import { TodaysLearning } from "./TodaysLearning";
import { LearningProgressSummary } from "./LearningProgressSummary";
import { SkillProgressPanel } from "./SkillProgressPanel";
import { RecommendationPanel } from "./RecommendationPanel";
import { useLearningProgress } from "@/components/providers/LearningProgressProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { computerApplicationsCourse } from "@/lib/demo-data/learning/courses";
import { variablesLesson } from "@/lib/demo-data/learning/lessons";
import { recommendations } from "@/lib/demo-data/learning/recommendations";

/**
 * LearningHome — composes the default /learning screen. Progressive
 * reveal mirrors Mission Control and the Human Growth Profile: a
 * handful of staggered flags, no separate skeleton screen.
 */
export function LearningHome() {
  const reducedMotion = usePrefersReducedMotion();
  const { progress } = useLearningProgress();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), reducedMotion ? 0 : 80);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  return (
    <div className="mx-auto max-w-[1100px] space-y-5" style={{ opacity: show ? 1 : 0, transition: "opacity 0.5s ease" }}>
      <LearningHeader course={computerApplicationsCourse} progressPct={progress.courseProgressPct} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <LearningPath modules={computerApplicationsCourse.modules} />
        </div>
        <div className="space-y-5 lg:col-span-5">
          <TodaysLearning lesson={variablesLesson} />
        </div>
      </div>

      <LearningProgressSummary progress={progress} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <SkillProgressPanel skills={progress.skills} />
        <RecommendationPanel recommendations={recommendations} />
      </div>
    </div>
  );
}
