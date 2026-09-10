"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { trajectoryByRange, TRAJECTORY_METRICS } from "@/lib/demo-data/analytics/trajectory";
import type { AnalyticsTimeRange } from "@/types/analytics";
import type { TrajectoryMetricKey, TrajectoryPoint } from "@/lib/demo-data/analytics/trajectory";

/**
 * RehabilitationTrajectory — the visual centerpiece of Analytics
 * (brief §6), same Area-chart approach as Progress's
 * ProgressTrendChart, extended with a real hover tooltip (date,
 * metric, value, change vs. prior point) and a text summary sentence
 * beneath the chart so the trend is never conveyed by the visual
 * alone (brief §30).
 */
export function RehabilitationTrajectory({
  timeRange,
  onTimeRangeChangeExternal,
  show,
}: {
  timeRange: AnalyticsTimeRange;
  onTimeRangeChangeExternal?: (r: AnalyticsTimeRange) => void;
  show: boolean;
}) {
  void onTimeRangeChangeExternal;
  const [activeMetrics, setActiveMetrics] = useState<Set<TrajectoryMetricKey>>(
    new Set(["activeJourneys", "learningParticipation"])
  );

  const data = useMemo(() => trajectoryByRange[timeRange], [timeRange]);

  const toggleMetric = (key: TrajectoryMetricKey) => {
    setActiveMetrics((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        if (next.size > 1) next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const summary = useMemo(() => {
    const key = Array.from(activeMetrics)[0];
    const metric = TRAJECTORY_METRICS.find((m) => m.key === key);
    if (!metric || data.length < 2) return null;
    const first = data[0][key];
    const last = data[data.length - 1][key];
    const direction = last > first ? "increased" : last < first ? "decreased" : "stayed steady";
    return `${metric.label} ${direction} from ${first}${key === "activeJourneys" ? "" : "%"} to ${last}${
      key === "activeJourneys" ? "" : "%"
    } during the selected period.`;
  }, [activeMetrics, data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Rehabilitation trajectory
          </p>
          <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
            How is the rehabilitation ecosystem changing over time?
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {TRAJECTORY_METRICS.map((m) => {
          const active = activeMetrics.has(m.key);
          return (
            <button
              key={m.key}
              onClick={() => toggleMetric(m.key)}
              aria-pressed={active}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] transition-all duration-200",
                active
                  ? "border-[var(--border-hairline-strong)] text-[var(--text-primary)]"
                  : "border-[var(--border-hairline)] text-[var(--text-muted)] opacity-60"
              )}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: active ? m.color : "var(--text-muted)" }} />
              {m.label}
            </button>
          );
        })}
      </div>

      <div
        className="mt-5 h-72 w-full"
        role="img"
        aria-label={summary ?? "Rehabilitation trajectory chart"}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              {TRAJECTORY_METRICS.map((m) => (
                <linearGradient key={m.key} id={`traj-fill-${m.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={m.color} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={m.color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} stroke="var(--border-hairline)" />
            <XAxis
              dataKey="label"
              tick={{ fill: "var(--color-stone-300)", fontSize: 11 }}
              axisLine={{ stroke: "var(--border-hairline)" }}
              tickLine={false}
            />
            <YAxis tick={{ fill: "var(--color-stone-300)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<TrajectoryTooltip data={data} />} />
            {TRAJECTORY_METRICS.filter((m) => activeMetrics.has(m.key)).map((m) => (
              <Area
                key={m.key}
                type="monotone"
                dataKey={m.key}
                name={m.label}
                stroke={m.color}
                strokeWidth={2}
                fill={`url(#traj-fill-${m.key})`}
                isAnimationActive
                animationDuration={700}
                animationEasing="ease-out"
                dot={false}
                activeDot={{ r: 3.5, strokeWidth: 0 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {summary && <p className="mt-3 text-[12px] text-[var(--text-secondary)]">{summary}</p>}
    </motion.div>
  );
}

interface TooltipPayloadItem {
  name?: string;
  value?: number;
  color?: string;
  dataKey?: TrajectoryMetricKey;
}

function TrajectoryTooltip({
  active,
  payload,
  label,
  data,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
  data: TrajectoryPoint[];
}) {
  if (!active || !payload?.length) return null;
  const index = data.findIndex((d) => d.label === label);
  return (
    <div className="glass-panel rounded-[var(--radius-sm)] px-3 py-2 text-[12px]">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
      {payload.map((p) => {
        const prev = index > 0 && p.dataKey ? data[index - 1][p.dataKey] : undefined;
        const change = prev !== undefined && p.value !== undefined ? p.value - prev : undefined;
        return (
          <div key={p.name} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
            <span className="text-[var(--text-secondary)]">{p.name}</span>
            <span className="ml-auto font-medium text-[var(--text-primary)]">{p.value}</span>
            {change !== undefined && (
              <span className={change >= 0 ? "text-[var(--accent-growth)]" : "text-[var(--accent-critical)]"}>
                ({change >= 0 ? "+" : ""}
                {change})
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
