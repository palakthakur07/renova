"use client";

import { useEffect, useMemo, useState } from "react";
import { RoleProvider } from "@/components/providers/RoleProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { AnalyticsHeader } from "./AnalyticsHeader";
import { AnalyticsFilters } from "./AnalyticsFilters";
import { AnalyticsMetrics } from "./AnalyticsMetrics";
import { RehabilitationTrajectory } from "./RehabilitationTrajectory";
import { ProgramParticipation } from "./ProgramParticipation";
import { DevelopmentAreas } from "./DevelopmentAreas";
import { ProgressDistribution } from "./ProgressDistribution";
import { MilestoneAnalyticsPanel } from "./MilestoneAnalyticsPanel";
import { LearningAnalyticsPanel } from "./LearningAnalyticsPanel";
import { CounselorActivityPanel } from "./CounselorActivityPanel";
import { ReleaseAnalyticsPanel } from "./ReleaseAnalyticsPanel";
import { AnalyticsInsights } from "./AnalyticsInsights";
import { AnalyticsActivity } from "./AnalyticsActivity";
import { AnalyticsDataSources } from "./AnalyticsDataSources";

import { programs } from "@/lib/demo-data/programs";
import { keyIndicators, developmentAreas, progressDistribution, milestoneAnalytics } from "@/lib/demo-data/analytics/overview";
import { learningAnalytics, counselorActivity, releaseAnalytics } from "@/lib/demo-data/analytics/moduleAnalytics";
import { analyticsActivity } from "@/lib/demo-data/analytics/activity";
import type { AnalyticsTimeRange } from "@/types/analytics";

/**
 * AnalyticsExperience — composes Phase 10 (brief §3, §36). Same
 * staggered-reveal pattern as Reintegration/Counselor. Unlike those
 * phases, Analytics is facility-wide rather than per-person — there
 * is no profileId route, mirroring Mission Control.
 */
export function AnalyticsExperience() {
  return (
    <RoleProvider>
      <AnalyticsBody />
    </RoleProvider>
  );
}

function AnalyticsBody() {
  const reducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState({ header: false, filters: false, metrics: false, trajectory: false, rest: false });

  useEffect(() => {
    const t = reducedMotion ? 0 : 1;
    const timers = [
      setTimeout(() => setStage((s) => ({ ...s, header: true })), 60 * t),
      setTimeout(() => setStage((s) => ({ ...s, filters: true })), 180 * t),
      setTimeout(() => setStage((s) => ({ ...s, metrics: true })), 280 * t),
      setTimeout(() => setStage((s) => ({ ...s, trajectory: true })), 400 * t),
      setTimeout(() => setStage((s) => ({ ...s, rest: true })), 520 * t),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const [timeRange, setTimeRange] = useState<AnalyticsTimeRange>("30d");
  const [program, setProgram] = useState("all");
  const [area, setArea] = useState("all");

  const programOptions = useMemo(() => programs.map((p) => p.name), []);
  const areaOptions = useMemo(() => developmentAreas.map((a) => a.label), []);

  const filteredPrograms = useMemo(
    () => (program === "all" ? programs : programs.filter((p) => p.name === program)),
    [program]
  );

  return (
    <div className="mx-auto max-w-[1200px]">
      <AnalyticsHeader show={stage.header} />

      <div className="mt-5 space-y-5">
        <AnalyticsFilters
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
          programOptions={programOptions}
          program={program}
          onProgramChange={setProgram}
          areaOptions={areaOptions}
          area={area}
          onAreaChange={setArea}
          show={stage.filters}
        />

        <AnalyticsMetrics indicators={keyIndicators} show={stage.metrics} />

        <RehabilitationTrajectory timeRange={timeRange} show={stage.trajectory} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ProgramParticipation programs={filteredPrograms} show={stage.rest} />
          <DevelopmentAreas areas={developmentAreas} filterArea={area} show={stage.rest} />
        </div>

        <ProgressDistribution stages={progressDistribution} show={stage.rest} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <MilestoneAnalyticsPanel data={milestoneAnalytics} show={stage.rest} />
          <LearningAnalyticsPanel data={learningAnalytics} show={stage.rest} />
          <CounselorActivityPanel data={counselorActivity} show={stage.rest} />
          <ReleaseAnalyticsPanel data={releaseAnalytics} show={stage.rest} />
        </div>

        <AnalyticsInsights show={stage.rest} />

        <AnalyticsActivity events={analyticsActivity} show={stage.rest} />

        <AnalyticsDataSources show={stage.rest} />
      </div>
    </div>
  );
}
