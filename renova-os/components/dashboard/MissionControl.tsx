"use client";

import { useEffect, useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { FacilityStatus } from "./FacilityStatus";
import { RehabilitationHealth } from "./RehabilitationHealth";
import { AIInsights } from "./AIInsights";
import { AttentionQueue } from "./AttentionQueue";
import { UpcomingReleases } from "./UpcomingReleases";
import { RehabilitationTrend } from "./RehabilitationTrend";
import { ProgramPerformance } from "./ProgramPerformance";
import { ActivityStream } from "./ActivityStream";
import { InsightDrawer } from "./drawers/InsightDrawer";
import { ProgramDrawer } from "./drawers/ProgramDrawer";
import { ReleaseDrawer } from "./drawers/ReleaseDrawer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { facilityStats, rehabilitationHealth, attentionItems, rehabilitationTrends } from "@/lib/demo-data/facility";
import { programs } from "@/lib/demo-data/programs";
import { upcomingReleases } from "@/lib/demo-data/releases";
import { aiInsights } from "@/lib/demo-data/insights";
import { activityStream } from "@/lib/demo-data/activities";

import type { AIInsight, ProgramPerformance as ProgramPerformanceType, ReleaseCandidate } from "@/types/dashboard";

/**
 * MissionControl — composes every dashboard module. Per brief §3, the
 * environment assembles progressively rather than dumping all content
 * at once: a handful of staggered boolean flags gate each module's own
 * entrance animation. This is intentionally lighter-weight than Phase
 * 2's CinematicIntro state machine — Mission Control is a page users
 * return to repeatedly, not a one-time cinematic moment, so the reveal
 * is quick (~700ms total) and every flag is true well before a returning
 * user would consciously notice a sequence at all.
 */
export function MissionControl() {
  const reducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState({
    header: false,
    status: false,
    insights: false,
    action: false,
    trends: false,
    activity: false,
  });

  useEffect(() => {
    const t = reducedMotion ? 0 : 1;
    const timers = [
      setTimeout(() => setStage((s) => ({ ...s, header: true })), 60 * t),
      setTimeout(() => setStage((s) => ({ ...s, status: true })), 160 * t),
      setTimeout(() => setStage((s) => ({ ...s, insights: true })), 320 * t),
      setTimeout(() => setStage((s) => ({ ...s, action: true })), 440 * t),
      setTimeout(() => setStage((s) => ({ ...s, trends: true })), 540 * t),
      setTimeout(() => setStage((s) => ({ ...s, activity: true })), 640 * t),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const [selectedInsight, setSelectedInsight] = useState<AIInsight | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<ProgramPerformanceType | null>(null);
  const [selectedRelease, setSelectedRelease] = useState<ReleaseCandidate | null>(null);

  return (
    <div className="mx-auto max-w-[1400px]">
      <div className={stage.header ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 0.5s ease" }}>
        <DashboardHeader lastSyncMinutesAgo={facilityStats.lastSyncMinutesAgo} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FacilityStatus stats={facilityStats} show={stage.status} />
        </div>
        <div className="lg:col-span-5">
          <RehabilitationHealth metrics={rehabilitationHealth} show={stage.status} />
        </div>
      </div>

      <div className="mt-5">
        <AIInsights insights={aiInsights} show={stage.insights} onSelect={setSelectedInsight} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <AttentionQueue items={attentionItems} show={stage.action} />
        </div>
        <div className="lg:col-span-7">
          <UpcomingReleases releases={upcomingReleases} show={stage.action} onSelect={setSelectedRelease} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <RehabilitationTrend trendsByRange={rehabilitationTrends} show={stage.trends} />
        </div>
        <div className="lg:col-span-5">
          <ProgramPerformance programs={programs} show={stage.trends} onSelect={setSelectedProgram} />
        </div>
      </div>

      <div className="mt-5 pb-4">
        <ActivityStream events={activityStream} show={stage.activity} />
      </div>

      <InsightDrawer insight={selectedInsight} onClose={() => setSelectedInsight(null)} />
      <ProgramDrawer program={selectedProgram} onClose={() => setSelectedProgram(null)} />
      <ReleaseDrawer release={selectedRelease} onClose={() => setSelectedRelease(null)} />
    </div>
  );
}
