"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** ScoreRing — a single-value progress ring, clickable. Not a "grade": see ProgressOverview for the framing text this always ships with. */
export function ScoreRing({ value, show, size = 152 }: { value: number; show: boolean; size?: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const stroke = 7;
  const r = (size - stroke) / 2;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-teal-400)" />
            <stop offset="100%" stopColor="var(--color-emerald-500)" />
          </linearGradient>
        </defs>
        <circle cx={c} cy={c} r={r} fill="none" stroke="var(--border-hairline)" strokeWidth={stroke} />
        <motion.circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke="url(#score-gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          transform={`rotate(-90 ${c} ${c})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: show ? `${circumference * (value / 100)} ${circumference}` : `0 ${circumference}` }}
          transition={{ duration: reducedMotion ? 0 : 1.2, ease: [0.16, 1, 0.3, 1], delay: reducedMotion ? 0 : 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-[family-name:var(--font-display)] text-[34px] font-semibold text-[var(--text-primary)]">
          {value}%
        </span>
      </div>
    </div>
  );
}
