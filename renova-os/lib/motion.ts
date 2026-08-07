/**
 * RENOVA OS — MOTION UTILITIES
 *
 * Shared Framer Motion primitives so every screen moves with the
 * same physical logic. Nothing snaps, nothing bounces aggressively.
 * Import these instead of writing ad-hoc transition objects.
 */
import { Variants, Transition } from "framer-motion";

export const easeStandard = [0.22, 1, 0.36, 1] as const;
export const easeEnter = [0.16, 1, 0.3, 1] as const;
export const easeExit = [0.7, 0, 0.84, 0] as const;

export const durations = {
  instant: 0.1,
  fast: 0.2,
  base: 0.4,
  slow: 0.8,
  ambient: 6,
};

export const transitionBase: Transition = {
  duration: durations.base,
  ease: easeStandard,
};

/** Fade + slight rise. Default entrance for most content. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easeEnter },
  },
};

/** Fade + blur resolve. For hero / cinematic moments only — use sparingly. */
export const resolveIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 0.98 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: durations.slow, ease: easeEnter },
  },
};

/** Staggered container for groups of children using fadeUp. */
export function staggerContainer(stagger = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Elevation on hover — used by cards, buttons. */
export const hoverElevate = {
  rest: { y: 0, boxShadow: "var(--shadow-1)" },
  hover: {
    y: -2,
    boxShadow: "var(--shadow-2)",
    transition: { duration: durations.fast, ease: easeStandard },
  },
};
