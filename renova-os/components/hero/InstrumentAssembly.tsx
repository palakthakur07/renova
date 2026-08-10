"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * InstrumentAssembly — the signature element of ReNova OS.
 *
 * A circular instrument that assembles itself from scattered
 * fragments into a calm, ordered dial. It is the literal thesis
 * of the product: structure emerging from disorder, arrived at
 * slowly and deliberately, never forced.
 *
 * Three independent rings (outer tick ring, mid arc ring, inner
 * core) settle in sequence, then continue an imperceptibly slow
 * ambient rotation — "waking up," not "loading."
 */
export function InstrumentAssembly({ size = 560 }: { size?: number }) {
  const ticks = useMemo(
    () =>
      Array.from({ length: 72 }, (_, i) => {
        const angle = (i / 72) * 360;
        const major = i % 6 === 0;
        return { angle, major };
      }),
    []
  );

  const c = size / 2;
  const rOuter = size * 0.46;
  const rTicks = size * 0.42;
  const rMid = size * 0.33;
  const rInner = size * 0.2;

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      role="img"
      aria-label="ReNova OS instrument assembling"
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="absolute inset-0"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-teal-400)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-teal-400)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-teal-400)" />
            <stop offset="100%" stopColor="var(--color-cyan-400)" />
          </linearGradient>
        </defs>

        {/* Core ambient glow — breathes gently, always present */}
        <motion.circle
          cx={c}
          cy={c}
          r={rInner * 0.9}
          fill="url(#coreGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ opacity: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.4 } }}
        />

        {/* Outer hairline ring */}
        <motion.circle
          cx={c}
          cy={c}
          r={rOuter}
          fill="none"
          stroke="var(--border-hairline-strong)"
          strokeWidth={1}
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ transformOrigin: `${c}px ${c}px` }}
        />

        {/* Tick ring — fragments fly in individually, staggered */}
        <g>
          {ticks.map((t, i) => {
            const rad = (t.angle * Math.PI) / 180;
            const len = t.major ? 14 : 6;
            // Rounded to 2dp: Math.cos/sin can differ in their last float digit
            // between Node's V8 build and the browser's, which otherwise causes
            // a hydration mismatch on these SSR'd coordinates. Invisible at this
            // scale (sub-pixel), but keeps server/client markup byte-identical.
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
                initial={{ opacity: 0, scale: 0.4, rotate: (i % 2 === 0 ? -1 : 1) * 40 }}
                animate={{ opacity: t.major ? 0.85 : 0.35, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5 + (i % 24) * 0.012,
                }}
                style={{ transformOrigin: `${c}px ${c}px` }}
              />
            );
          })}
        </g>

        {/* Mid arc ring — assembles then rotates continuously */}
        <motion.g
          style={{ transformOrigin: `${c}px ${c}px` }}
          initial={{ opacity: 0, rotate: -70, scale: 0.85 }}
          animate={{ opacity: 1, rotate: 360, scale: 1 }}
          transition={{
            opacity: { duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 90, repeat: Infinity, ease: "linear", delay: 1.3 },
          }}
        >
          <circle
            cx={c}
            cy={c}
            r={rMid}
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth={1.5}
            strokeDasharray="4 3 40 3 4 3 90 3"
            strokeLinecap="round"
            opacity={0.7}
          />
        </motion.g>

        {/* Counter-rotating thin arc */}
        <motion.g
          style={{ transformOrigin: `${c}px ${c}px` }}
          initial={{ opacity: 0, rotate: 60 }}
          animate={{ opacity: 1, rotate: -360 }}
          transition={{
            opacity: { duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 140, repeat: Infinity, ease: "linear", delay: 1.6 },
          }}
        >
          <circle
            cx={c}
            cy={c}
            r={rMid - 14}
            fill="none"
            stroke="var(--color-cyan-500)"
            strokeWidth={1}
            strokeDasharray="1 5"
            strokeLinecap="round"
            opacity={0.5}
          />
        </motion.g>

        {/* Inner core ring */}
        <motion.circle
          cx={c}
          cy={c}
          r={rInner}
          fill="none"
          stroke="var(--color-teal-400)"
          strokeWidth={1.5}
          opacity={0.8}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${c}px ${c}px` }}
        />

        {/* Scanning sweep — single slow pass, purposeful not decorative */}
        <motion.line
          x1={c}
          y1={c}
          x2={c}
          y2={c - rTicks}
          stroke="var(--color-teal-300)"
          strokeWidth={1}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], rotate: 360 }}
          transition={{
            opacity: { duration: 3.2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut", delay: 3 },
            rotate: { duration: 3.2, repeat: Infinity, repeatDelay: 5, ease: "linear", delay: 3 },
          }}
          style={{ transformOrigin: `${c}px ${c}px` }}
        />

        {/* Center point */}
        <motion.circle
          cx={c}
          cy={c}
          r={2.5}
          fill="var(--color-off-white)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        />
      </svg>
    </div>
  );
}