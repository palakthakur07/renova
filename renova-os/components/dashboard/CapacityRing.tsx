"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * CapacityRing — the occupancy visualization for FacilityStatus.
 * A single ring that draws itself in once (not a continuous rotation
 * like the landing page's OrbitalRing — this is a progress indicator,
 * not an ambient system), with a slow breathing glow at rest.
 */
export function CapacityRing({
  current,
  capacity,
  size = 168,
}: {
  current: number;
  capacity: number;
  size?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const pct = Math.min(1, current / capacity);
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          <linearGradient id="capacity-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-teal-400)" />
            <stop offset="100%" stopColor="var(--color-cyan-400)" />
          </linearGradient>
        </defs>
        <circle cx={c} cy={c} r={r} fill="none" stroke="var(--border-hairline)" strokeWidth={stroke} />
        <motion.circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke="url(#capacity-gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          transform={`rotate(-90 ${c} ${c})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${circumference * pct} ${circumference}` }}
          transition={{ duration: reducedMotion ? 0 : 1.3, ease: [0.16, 1, 0.3, 1], delay: reducedMotion ? 0 : 0.2 }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal-400) 10%, transparent) 0%, transparent 70%)",
        }}
        animate={reducedMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-[var(--text-primary)]">
          {Math.round(pct * 100)}%
        </span>
        <span className="text-[10px] text-[var(--text-muted)]">occupied</span>
      </div>
    </div>
  );
}
