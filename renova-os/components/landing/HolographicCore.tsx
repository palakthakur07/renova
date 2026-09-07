"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { OrbitalRing } from "./OrbitalRing";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * HolographicCore — the central focus object and the single most
 * important visual in ReNova OS. It is not a decorative circle: each
 * layer is a deliberate metaphor.
 *
 *  - Outer hairline ring         → the boundary of the system
 *  - Tick ring                   → precision, measurement
 *  - Dashed structural ring      → structure, the framework around a person
 *  - Growth arc (teal→emerald)   → progress that is real but partial, not "done"
 *  - Orbital marker ring         → the system continuously attending to
 *                                   different things, not fixated on one
 *  - Inner core + center node    → the person the whole system is for
 *  - Scanning sweep              → periodic attention, not surveillance —
 *                                   fires once every ~8s, never constant
 *
 * Independent, non-multiple durations (23s / 34s / 61s / 90s / 140s) so
 * no two layers ever fall back into phase with each other.
 */
export function HolographicCore({
  show,
  size = 620,
  speed = 1,
}: {
  show: boolean;
  size?: number;
  /** Scales every entrance delay (not the ambient loop durations). 1 = full cinematic pacing; pass <1 to catch the core up quickly under a fast/reduced-motion boot. */
  speed?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const c = size / 2;
  const d = (seconds: number) => seconds * speed;

  const rOuter = size * 0.46;
  const rTicks = size * 0.42;
  const rGrowth = size * 0.37;
  const rStructure = size * 0.33;
  const rMarkers = size * 0.295;
  const rInnerArc = size * 0.26;
  const rCore = size * 0.185;

  const ticks = useMemo(
    () =>
      Array.from({ length: 64 }, (_, i) => ({
        angle: (i / 64) * 360,
        major: i % 8 === 0,
      })),
    []
  );

  // Growth arc: a deliberately partial ring (~64%) rather than a full
  // circle — "progress that is real but partial," per the file header.
  const growthCircumference = 2 * Math.PI * rGrowth;
  const growthLength = growthCircumference * 0.64;

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      role="img"
      aria-label="ReNova holographic core, assembling and coming online"
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="absolute inset-0">
        <defs>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-teal-400)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-teal-400)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-teal-400)" />
            <stop offset="100%" stopColor="var(--color-emerald-500)" />
          </linearGradient>
        </defs>

        {/* Core ambient glow — always breathing once shown */}
        <motion.circle
          cx={c}
          cy={c}
          r={rCore * 0.85}
          fill="url(#core-glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? [0.25, 0.5, 0.25] : 0 }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: d(1.8) }}
        />

        {/* Outer hairline ring — the boundary of the system */}
        <OrbitalRing center={c} radius={rOuter} show={show} strokeWidth={1} delay={d(0.1)} opacity={0.55} />

        {/* Tick ring — precision markers, fly in individually */}
        <g>
          {ticks.map((t, i) => {
            const rad = (t.angle * Math.PI) / 180;
            const len = t.major ? 13 : 5;
            const round = (n: number) => Math.round(n * 100) / 100;
            const x1 = round(c + (rTicks - len) * Math.cos(rad));
            const y1 = round(c + (rTicks - len) * Math.sin(rad));
            const x2 = round(c + rTicks * Math.cos(rad));
            const y2 = round(c + rTicks * Math.sin(rad));
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={t.major ? "var(--color-fog-100)" : "var(--color-slate-500)"}
                strokeWidth={t.major ? 1.5 : 1}
                strokeLinecap="round"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: show ? (t.major ? 0.8 : 0.32) : 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: d(0.35 + (i % 20) * 0.012),
                }}
                style={{ transformOrigin: `${c}px ${c}px` }}
              />
            );
          })}
        </g>

        {/* Growth arc — partial ring, gently oscillates rather than spinning */}
        <motion.g
          style={{ transformOrigin: `${c}px ${c}px` }}
          initial={{ opacity: 0, rotate: -20 }}
          animate={{
            opacity: show ? 0.85 : 0,
            rotate: show && !reducedMotion ? [-3, 3, -3] : 0,
          }}
          transition={{
            opacity: { duration: 1, delay: d(0.9), ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: d(0.9) },
          }}
        >
          <circle
            cx={c}
            cy={c}
            r={rGrowth}
            fill="none"
            stroke="url(#growth-gradient)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={`${growthLength} ${growthCircumference}`}
            transform={`rotate(-90 ${c} ${c})`}
          />
        </motion.g>

        {/* Structural ring — dashed, slow clockwise rotation */}
        <OrbitalRing
          center={c}
          radius={rStructure}
          show={show}
          rotateSeconds={90}
          direction={1}
          strokeWidth={1.5}
          strokeDasharray="3 4 34 4 3 4 80 4"
          color="var(--color-cyan-500)"
          opacity={0.55}
          delay={d(1.2)}
        />

        {/* Orbital markers — the system's attention, moving independently */}
        <OrbitalRing
          center={c}
          radius={rMarkers}
          show={show}
          rotateSeconds={34}
          direction={-1}
          delay={d(1.5)}
          hideRing
          markers={[{ angle: 40, size: 3 }, { angle: 200, size: 2 }]}
          markerColor="var(--color-teal-300)"
        />

        {/* Counter-rotating inner arc */}
        <OrbitalRing
          center={c}
          radius={rInnerArc}
          show={show}
          rotateSeconds={61}
          direction={-1}
          strokeDasharray="1 5"
          color="var(--color-cyan-500)"
          opacity={0.4}
          delay={d(1.7)}
        />

        {/* Inner core ring */}
        <motion.circle
          cx={c}
          cy={c}
          r={rCore}
          fill="none"
          stroke="var(--color-teal-400)"
          strokeWidth={1.5}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: show ? 0.8 : 0, scale: 1 }}
          transition={{ duration: 1, delay: d(2), ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${c}px ${c}px` }}
        />

        {/* Scanning sweep — fires once every ~8s, purposeful attention, not surveillance */}
        {!reducedMotion && (
          <motion.line
            x1={c}
            y1={c}
            x2={c}
            y2={c - rTicks}
            stroke="var(--color-teal-300)"
            strokeWidth={1}
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? [0, 0.55, 0] : 0, rotate: show ? 360 : 0 }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut", delay: d(2.6) },
              rotate: { duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear", delay: d(2.6) },
            }}
            style={{ transformOrigin: `${c}px ${c}px` }}
          />
        )}

        {/* Center node — the person the system is for */}
        <motion.circle
          cx={c}
          cy={c}
          r={2.5}
          fill="var(--color-off-white)"
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.6, delay: d(2.2) }}
        />
      </svg>
    </div>
  );
}
