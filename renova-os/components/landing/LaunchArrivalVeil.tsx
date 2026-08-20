"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getSessionFlag, clearSessionFlag, SESSION_KEYS } from "@/lib/session";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const subscribeNever = () => () => {};
const getServerFalse = () => false;

/**
 * LaunchArrivalVeil — the other half of OSLaunchTransition. If the
 * app shell mounts immediately after the cinematic "Enter ReNova OS"
 * click (flagged via sessionStorage since the landing page's own veil
 * unmounts on navigation and can't survive the route change directly),
 * this renders one solid obsidian frame and fades it out — so the
 * handoff from the landing page's fade-to-black reads as one continuous
 * motion instead of a hard cut. No-ops on a normal/direct visit to any
 * app-shell route.
 */
export function LaunchArrivalVeil() {
  const show = useSyncExternalStore(
    subscribeNever,
    () => getSessionFlag(SESSION_KEYS.launching),
    getServerFalse
  );
  const reducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[200] bg-[var(--bg-stage)]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.2 : 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          onAnimationComplete={() => clearSessionFlag(SESSION_KEYS.launching)}
        />
      )}
    </AnimatePresence>
  );
}
