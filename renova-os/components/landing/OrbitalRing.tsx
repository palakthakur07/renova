"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface OrbitalMarker {
  /** Angle in degrees, 0 = 3 o'clock, increasing clockwise. */
  angle: number;
  size?: number;
}

interface OrbitalRingProps {
  center: number;
  radius: number;
  show: boolean;
  /** Full rotation duration in seconds. Omit for a static ring. */
  rotateSeconds?: number;
  direction?: 1 | -1;
  strokeDasharray?: string;
  strokeWidth?: number;
  color?: string;
  opacity?: number;
  /** Entrance delay, seconds. */
  delay?: number;
  markers?: OrbitalMarker[];
  markerColor?: string;
  /** Render markers only, no visible circle stroke — for pure orbital-point layers. */
  hideRing?: boolean;
}

/**
 * OrbitalRing — a single reusable ring layer of the HolographicCore.
 * Every ring in the core (hairline outer ring, dashed structural arcs,
 * the growth-progress arc, orbital marker points) is one of these,
 * configured differently, rather than bespoke SVG per ring — so a
 * future 4th or 5th ring is a prop change, not new markup.
 */
export function OrbitalRing({
  center: c,
  radius: r,
  show,
  rotateSeconds,
  direction = 1,
  strokeDasharray,
  strokeWidth = 1,
  color = "var(--border-hairline-strong)",
  opacity = 0.7,
  delay = 0,
  markers,
  markerColor,
  hideRing = false,
}: OrbitalRingProps) {
  const reducedMotion = usePrefersReducedMotion();
  const shouldRotate = rotateSeconds && !reducedMotion;

  return (
    <motion.g
      style={{ transformOrigin: `${c}px ${c}px` }}
      initial={{ opacity: 0, scale: 0.85, rotate: direction * -60 }}
      animate={{
        opacity: show ? opacity : 0,
        scale: 1,
        rotate: show && shouldRotate ? direction * 360 : 0,
      }}
      transition={{
        opacity: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
        rotate: shouldRotate
          ? { duration: rotateSeconds, repeat: Infinity, ease: "linear", delay }
          : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {!hideRing && (
        <circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
        />
      )}
      {markers?.map((m, i) => {
        const rad = (m.angle * Math.PI) / 180;
        const round = (n: number) => Math.round(n * 100) / 100;
        const mx = round(c + r * Math.cos(rad));
        const my = round(c + r * Math.sin(rad));
        return (
          <circle
            key={i}
            cx={mx}
            cy={my}
            r={m.size ?? 2.5}
            fill={markerColor ?? color}
          />
        );
      })}
    </motion.g>
  );
}
