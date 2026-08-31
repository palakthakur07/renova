"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";
import type { TrendPoint, TrendMetricKey, TrendRange } from "@/types/dashboard";

const RANGES: { key: TrendRange; label: string }[] = [
  { key: "7d", label: "7 days" },
  { key: "30d", label: "30 days" },
  { key: "90d", label: "90 days" },
  { key: "1y", label: "1 year" },
];

const METRICS: { key: TrendMetricKey; label: string; color: string }[] = [
  { key: "participation", label: "Participation", color: "var(--color-teal-400)" },
  { key: "completion", label: "Completion", color: "var(--color-cyan-400)" },
  { key: "skillDevelopment", label: "Skill development", color: "var(--color-emerald-500)" },
  { key: "counseling", label: "Counseling", color: "var(--color-gold-500)" },
];

/**
 * RehabilitationTrend — range + dataset toggles drive both the chart
 * data and which Area series are visible. Recharts re-animates the
 * path automatically on data change (isAnimationActive), which is
 * what gives the range switch its "redraw" feel.
 */
export function RehabilitationTrend({
  trendsByRange,
  show,
}: {
  trendsByRange: Record<TrendRange, TrendPoint[]>;
  show: boolean;
}) {
  const [range, setRange] = useState<TrendRange>("30d");
  const [activeMetrics, setActiveMetrics] = useState<Set<TrendMetricKey>>(
    new Set(["participation", "completion"])
  );

  const data = useMemo(() => trendsByRange[range], [trendsByRange, range]);

  const toggleMetric = (key: TrendMetricKey) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Rehabilitation progress
        </p>
        <div className="flex gap-0.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-0.5">
          {RANGES.map((r) => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              className={cn(
                "rounded-[var(--radius-xs)] px-2.5 py-1 text-[12px] transition-colors duration-200",
                range === r.key
                  ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {METRICS.map((m) => {
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
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: active ? m.color : "var(--text-muted)" }}
              />
              {m.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 h-64 w-full" role="img" aria-label={`Rehabilitation progress trend over ${range}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              {METRICS.map((m) => (
                <linearGradient key={m.key} id={`fill-${m.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={m.color} stopOpacity={0.28} />
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
            <YAxis
              tick={{ fill: "var(--color-stone-300)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ChartTooltip />} />
            {METRICS.filter((m) => activeMetrics.has(m.key)).map((m) => (
              <Area
                key={m.key}
                type="monotone"
                dataKey={m.key}
                name={m.label}
                stroke={m.color}
                strokeWidth={2}
                fill={`url(#fill-${m.key})`}
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
    </motion.div>
  );
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name?: string; value?: number; color?: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-panel rounded-[var(--radius-sm)] px-3 py-2 text-[12px]">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
          <span className="text-[var(--text-secondary)]">{p.name}</span>
          <span className="ml-auto font-medium text-[var(--text-primary)]">{p.value}</span>
        </div>
      ))}
    </div>
  );
}
