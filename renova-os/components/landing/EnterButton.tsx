"use client";

import { forwardRef, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * EnterButton — the primary CTA, built on the Phase 0 `Button`
 * primitive (never duplicated) plus one addition specific to this
 * moment: a proximity halo that brightens as the cursor approaches,
 * tracked via a motion value so proximity never triggers a re-render.
 * Press feedback is Button's own whileTap depth-compression — nothing
 * new needed there.
 */
export const EnterButton = forwardRef<HTMLButtonElement, { onClick: () => void; show: boolean }>(
  ({ onClick, show }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const reducedMotion = usePrefersReducedMotion();
    const coarsePointer = useMediaQuery("(pointer: coarse)");
    const proximityEnabled = !reducedMotion && !coarsePointer;

    const distance = useMotionValue(9999);
    const glow = useTransform(
      distance,
      (d) => `0 0 ${36}px color-mix(in srgb, var(--color-teal-400) ${Math.max(0, 46 - d / 5)}%, transparent)`
    );

    useEffect(() => {
      if (!proximityEnabled) return;
      const onMove = (e: PointerEvent) => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        if (!rect) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        distance.set(Math.hypot(e.clientX - cx, e.clientY - cy));
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    }, [proximityEnabled, distance]);

    return (
      <motion.div
        ref={wrapperRef}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ borderRadius: "var(--radius-sm)", boxShadow: proximityEnabled ? glow : undefined }}
        className="inline-flex"
      >
        <Button ref={ref} size="lg" onClick={onClick} disabled={!show}>
          Enter ReNova
          <ArrowRight size={16} className="ml-0.5" />
        </Button>
      </motion.div>
    );
  }
);
EnterButton.displayName = "EnterButton";
