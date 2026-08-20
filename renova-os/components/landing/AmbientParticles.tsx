"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Deterministic pseudo-random in [0,1), seeded by index — never Math.random(). */
function seeded(i: number) {
  const v = Math.sin(i * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

/**
 * AmbientParticles — sparse, near-invisible drifting points. Per the
 * brief: "if particles make the design look like a space website,
 * remove them" — kept deliberately minimal (14 points, opacity under
 * 0.35, no trails, no twinkle). Mounted client-only since this layer
 * is purely decorative and gated off on mobile and reduced-motion, so
 * there's no SSR/hydration cost to paying for it at all there.
 */
export function AmbientParticles({ show }: { show: boolean }) {
  const mounted = useHasMounted();
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: `${(seeded(i) * 100).toFixed(1)}%`,
        top: `${(seeded(i + 50) * 100).toFixed(1)}%`,
        size: 1 + seeded(i + 100) * 1.5,
        duration: 26 + seeded(i + 150) * 18,
        delay: seeded(i + 200) * 8,
      })),
    []
  );

  if (!mounted || isMobile || reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[var(--color-fog-100)]"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: show ? [0, 0.28, 0.1, 0.28, 0] : 0,
            y: [0, -16, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
