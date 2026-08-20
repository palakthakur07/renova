/**
 * RENOVA OS — ANIMATION PRESETS
 *
 * The canonical set of Framer Motion variants used throughout the
 * app shell and every future module. Components import from here
 * instead of writing ad-hoc transition objects, so a global motion
 * change is a one-file edit. Built on the primitives in `motion.ts`
 * (easing curves + durations) — this file is the preset layer.
 */
import { Variants, Transition, TargetAndTransition } from "framer-motion";
import { easeStandard, easeEnter, easeExit, durations } from "./motion";

/** Simple opacity fade. Default for content that doesn't need to move. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.base, ease: easeStandard } },
  exit: { opacity: 0, transition: { duration: durations.fast, ease: easeExit } },
};

/** Fade + rise. Default entrance for most content blocks. */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easeEnter },
  },
  exit: { opacity: 0, y: 8, transition: { duration: durations.fast, ease: easeExit } },
};

/** Staggered container for groups of children using slideUp / cardReveal. */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  };
}

/** Card entrance — fade + rise + a touch of scale, for grids of cards. */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: durations.base, ease: easeEnter },
  },
};

/** Hover elevation — cards, list rows, anything that should feel liftable. */
export const hoverLift = {
  rest: { y: 0, boxShadow: "var(--shadow-1)" },
  hover: {
    y: -3,
    boxShadow: "var(--shadow-3)",
    transition: { duration: durations.fast, ease: easeStandard },
  },
};

/** Button press feedback — a 1.5% scale dip, never a bounce. */
export const buttonPress = {
  rest: { scale: 1 },
  hover: { y: -1 },
  tap: { scale: 0.985, y: 0 },
};

/** Full-page transition — fade + blur-resolve + tiny scale. Used by PageTransition. */
export const pageTransition: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)", scale: 0.99 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: durations.base, ease: easeEnter },
  },
  exit: {
    opacity: 0,
    filter: "blur(6px)",
    scale: 0.99,
    transition: { duration: durations.fast, ease: easeExit },
  },
};

/** Modal / dialog entrance — settles from slightly below + scaled down. */
export const modalReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: durations.base, ease: easeEnter },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 4,
    transition: { duration: durations.fast, ease: easeExit },
  },
};

/** Tooltip / popover entrance — quick, small travel distance. */
export const tooltipReveal: Variants = {
  hidden: { opacity: 0, y: 4, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: durations.instant, ease: easeStandard },
  },
  exit: { opacity: 0, y: 4, transition: { duration: durations.instant, ease: easeExit } },
};

/** Ambient floating loop — for icons/badges that should feel alive at rest. */
export const floating: { animate: TargetAndTransition } = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

/** Ambient pulse loop — for status dots and "live" indicators. */
export const pulse: { animate: TargetAndTransition } = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.06, 1],
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
};

/** Ambient glow loop — soft breathing shadow, used sparingly (achievement states). */
export const glow: { animate: TargetAndTransition } = {
  animate: {
    boxShadow: [
      "0 0 0px color-mix(in srgb, var(--accent-achievement) 0%, transparent)",
      "0 0 24px color-mix(in srgb, var(--accent-achievement) 35%, transparent)",
      "0 0 0px color-mix(in srgb, var(--accent-achievement) 0%, transparent)",
    ],
    transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
  },
};

export const transitionBase: Transition = { duration: durations.base, ease: easeStandard };
