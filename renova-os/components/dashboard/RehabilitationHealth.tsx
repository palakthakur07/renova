"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { RehabilitationHealthMetric } from "@/types/dashboard";

const DOMAIN_COLOR: Record<string, string> = {
  education: "var(--color-teal-400)",
  counseling: "var(--color-cyan-400)",
  vocational: "var(--color-emerald-500)",
  behavioral: "var(--color-teal-300)",
  employment: "var(--color-cyan-500)",
};

/**
 * RehabilitationHealth — a multi-layer radial visualization: one
 * concentric ring per domain, each drawn to its own score. Hovering a
 * legend row brightens its ring — the dashboard's local version of
 * the signature "focus movement," scoped to this module rather than
 * a global scanning system.
 */
export function RehabilitationHealth({
  metrics,
  show,
}: {
  metrics: RehabilitationHealthMetric[];
  show: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);

  const size = 220;
  const c = size / 2;
  const stroke = 9;
  const gap = 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Rehabilitation health
      </p>

      <div className="mt-5 flex flex-1 flex-col items-center gap-6 sm:flex-row sm:items-center">
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="shrink-0">
          {metrics.map((m, i) => {
            const r = c - stroke / 2 - i * (stroke + gap);
            const circumference = 2 * Math.PI * r;
            const isHovered = hovered === m.domain;
            return (
              <g key={m.domain}>
                <circle cx={c} cy={c} r={r} fill="none" stroke="var(--border-hairline)" strokeWidth={stroke} />
                <motion.circle
                  cx={c}
                  cy={c}
                  r={r}
                  fill="none"
                  stroke={DOMAIN_COLOR[m.domain]}
                  strokeWidth={isHovered ? stroke + 2 : stroke}
                  strokeLinecap="round"
                  opacity={hovered && !isHovered ? 0.35 : 1}
                  transform={`rotate(-90 ${c} ${c})`}
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={{
                    strokeDasharray: show ? `${circumference * (m.score / 100)} ${circumference}` : `0 ${circumference}`,
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 1,
                    delay: reducedMotion ? 0 : 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transition: "stroke-width 0.2s ease, opacity 0.2s ease" }}
                />
              </g>
            );
          })}
        </svg>

        <ul className="w-full min-w-0 space-y-2.5">
          {metrics.map((m) => (
            <li
              key={m.domain}
              onMouseEnter={() => setHovered(m.domain)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-between gap-3 rounded-[var(--radius-sm)] px-2 py-1.5 text-[13px] transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]"
            >
              <span className="flex min-w-0 items-center gap-2">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: DOMAIN_COLOR[m.domain] }}
                />
                <span className="truncate text-[var(--text-secondary)]">{m.label}</span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="font-mono text-[var(--text-primary)]">{m.score}</span>
                <span
                  className={`flex items-center gap-0.5 text-[11px] ${
                    m.trend >= 0 ? "text-[var(--accent-growth)]" : "text-[var(--accent-critical)]"
                  }`}
                >
                  {m.trend >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                  {Math.abs(m.trend)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
