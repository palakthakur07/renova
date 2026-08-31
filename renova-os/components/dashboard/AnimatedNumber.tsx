"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * AnimatedNumber — counts up from 0 to `value` once, on mount (or
 * whenever `value` itself changes — never on an unrelated re-render,
 * guarded by the ref below). Plain rAF + easing, not Framer Motion:
 * this is a single scalar with no transform/opacity involved, so a
 * lighter-weight approach is enough.
 *
 * Under reduced motion, the animated `display` state is never used at
 * all — `value` is rendered directly — rather than syncing it via an
 * effect, since a synchronous setState-on-mount is exactly the effect
 * anti-pattern React's own lint rule flags; skipping the state
 * entirely for that path is both simpler and correct.
 */
export function AnimatedNumber({
  value,
  duration = 1100,
  formatter,
}: {
  value: number;
  duration?: number;
  formatter?: (n: number) => string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);
  const lastValue = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    if (lastValue.current === value) return;
    lastValue.current = value;

    let raf = 0;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      setDisplay(Math.round(value * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, reducedMotion]);

  const shown = reducedMotion ? value : display;
  const text = formatter ? formatter(shown) : shown.toLocaleString("en-US");
  return <>{text}</>;
}
