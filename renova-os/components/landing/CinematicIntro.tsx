"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { AmbientBackground } from "./AmbientBackground";
import { PrecisionGrid } from "./PrecisionGrid";
import { AmbientParticles } from "./AmbientParticles";
import { HolographicCore } from "./HolographicCore";
import { FocusLight } from "./FocusLight";
import { SystemStatus, type SystemStage } from "./SystemStatus";
import { BrandReveal } from "./BrandReveal";
import { EnterButton } from "./EnterButton";
import { OSLaunchTransition } from "./OSLaunchTransition";
import { PointerFieldProvider } from "@/components/providers/PointerFieldProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { getSessionFlag, setSessionFlag, SESSION_KEYS } from "@/lib/session";
import { motion } from "framer-motion";

interface Timeline {
  ambient: number;
  grid: number;
  core: number;
  brand: number;
  online: number;
  ready: number;
}

/** First-ever visit this session: the full ~6s "waking up" sequence. */
const FULL_TIMELINE: Timeline = {
  ambient: 350,
  grid: 1000,
  core: 1800,
  brand: 3100,
  online: 3500,
  ready: 5100,
};

/** Already visited this session: a much quicker, still-legible boot. */
const FAST_TIMELINE: Timeline = {
  ambient: 60,
  grid: 180,
  core: 340,
  brand: 600,
  online: 680,
  ready: 1000,
};

/** prefers-reduced-motion: near-instant, simple fades, no one made to wait. */
const REDUCED_TIMELINE: Timeline = {
  ambient: 0,
  grid: 0,
  core: 40,
  brand: 100,
  online: 120,
  ready: 220,
};

/**
 * CinematicIntro — orchestrates the entire boot sequence described in
 * the Phase 2 brief. Owns exactly one thing: timing. Every visual
 * layer is a separate component that just reacts to boolean/stage
 * props — this file has no rendering logic of its own beyond
 * composing them.
 */
const subscribeNever = () => () => {};
const getServerFalse = () => false;

export function CinematicIntro() {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();
  const visited = useSyncExternalStore(
    subscribeNever,
    () => getSessionFlag(SESSION_KEYS.visited),
    getServerFalse
  );
  const timeline = reducedMotion ? REDUCED_TIMELINE : visited ? FAST_TIMELINE : FULL_TIMELINE;
  // The core's own internal per-layer entrance delays are tuned for the
  // full ~6s cinematic boot. Under the fast/reduced timelines, showCore
  // flips true almost immediately — without this, the core would still
  // take its own ~2.2s to finish assembling regardless, defeating the
  // point of a fast boot. Scale those delays down to match.
  const coreSpeed = timeline === FULL_TIMELINE ? 1 : 0.15;

  const [showAmbient, setShowAmbient] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showCore, setShowCore] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [status, setStatus] = useState<SystemStage>("initializing");
  const [launching, setLaunching] = useState(false);

  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowAmbient(true), timeline.ambient),
      setTimeout(() => setShowGrid(true), timeline.grid),
      setTimeout(() => setShowCore(true), timeline.core),
      setTimeout(() => setShowBrand(true), timeline.brand),
      setTimeout(() => setStatus("online"), timeline.online),
      setTimeout(() => {
        setStatus("ready");
        setShowCta(true);
        setSessionFlag(SESSION_KEYS.visited);
      }, timeline.ready),
    ];
    return () => timers.forEach(clearTimeout);
  }, [timeline]);

  // Accessibility: lets keyboard/screen-reader users skip straight to
  // the CTA instead of waiting on a purely decorative sequence.
  const skipIntro = () => {
    setShowAmbient(true);
    setShowGrid(true);
    setShowCore(true);
    setShowBrand(true);
    setStatus("ready");
    setShowCta(true);
    setSessionFlag(SESSION_KEYS.visited);
    requestAnimationFrame(() => ctaRef.current?.focus());
  };

  const handleEnter = () => {
    setLaunching(true);
  };

  const handleCovered = () => {
    setSessionFlag(SESSION_KEYS.launching);
    router.push("/overview");
  };

  return (
    <PointerFieldProvider>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        <button
          type="button"
          onClick={skipIntro}
          className="absolute left-4 top-4 z-50 -translate-y-16 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] px-4 py-2 text-[13px] text-[var(--text-primary)] transition-transform focus:translate-y-0"
        >
          Skip intro
        </button>

        <AmbientBackground active={showAmbient} />
        <PrecisionGrid show={showGrid} />
        <AmbientParticles show={showCore} />
        <FocusLight />

        <div className="absolute inset-0 flex items-center justify-center opacity-90">
          <HolographicCore show={showCore} size={620} speed={coreSpeed} />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: showCore ? 1 : 0, y: showCore ? 0 : 8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <SystemStatus stage={status} show={showCore} />
          </motion.div>

          <BrandReveal show={showBrand} />

          <div className="mt-10">
            <EnterButton ref={ctaRef} onClick={handleEnter} show={showCta} />
          </div>
        </div>

        {showCta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-9 flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--text-muted)]"
          >
            <span>Scroll</span>
            <motion.span
              className="h-8 w-px bg-[var(--border-hairline-strong)]"
              animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        )}
      </section>

      <OSLaunchTransition active={launching} onCovered={handleCovered} />
    </PointerFieldProvider>
  );
}
