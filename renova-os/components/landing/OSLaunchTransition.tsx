"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * OSLaunchTransition — the "entering the operating system" moment
 * when the user clicks Enter. An expanding ring silhouette + a fade
 * to solid obsidian, covering the screen before navigation happens
 * (`onCovered` fires once fully opaque — that's when the caller should
 * call router.push). The app shell picks up the handoff on the other
 * side with its own matching fade-from-black (see AppShell + lib/session.ts) —
 * two one-way veils rather than one DOM node surviving the route change,
 * since the App Router unmounts this tree on navigation regardless.
 */
export function OSLaunchTransition({
  active,
  onCovered,
}: {
  active: boolean;
  onCovered: () => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-hidden bg-[var(--bg-stage)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.7, ease: [0.7, 0, 0.84, 0] }}
          onAnimationComplete={onCovered}
        >
          {!reducedMotion && (
            <motion.div
              className="absolute left-1/2 top-1/2 rounded-full border border-[var(--color-teal-400)]"
              initial={{ width: 40, height: 40, opacity: 0.9 }}
              animate={{ width: "220vmax", height: "220vmax", opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.84, 0] }}
              style={{ x: "-50%", y: "-50%" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
