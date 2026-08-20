"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * FocusLight — a soft light that eases toward the cursor. Uses Framer
 * Motion's own spring (useSpring) for the trailing-lag feel instead of
 * a hand-rolled requestAnimationFrame + lerp loop — same effect, no
 * manual animation-frame bookkeeping. Fully inert on touch devices and
 * under reduced motion, matching the brief's "extremely restrained"
 * instruction — this never chases the cursor, it drifts toward it.
 */
export function FocusLight() {
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const disabled = reducedMotion || coarsePointer;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { damping: 26, stiffness: 40, mass: 0.6 });
  const y = useSpring(rawY, { damping: 26, stiffness: 40, mass: 0.6 });

  useEffect(() => {
    if (disabled) return;
    rawX.set(window.innerWidth / 2);
    rawY.set(window.innerHeight / 2);
    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [disabled, rawX, rawY]);

  if (disabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--color-off-white) 4%, transparent) 0%, transparent 70%)",
      }}
    />
  );
}
