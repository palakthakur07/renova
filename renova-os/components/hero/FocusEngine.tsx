"use client";

import { useEffect, useRef } from "react";

/**
 * FocusEngine — a soft light that follows the cursor, implemented
 * with a raw ref + rAF loop (no state, no re-renders) so it stays
 * perfectly smooth. This is the "the interface feels alive" layer.
 * Disabled entirely under prefers-reduced-motion.
 */
export function FocusEngine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 320}px, ${y - 320}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-[640px] w-[640px] rounded-full opacity-0 md:opacity-100"
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--color-off-white) 4%, transparent) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
