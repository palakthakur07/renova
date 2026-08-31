"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useHasMounted } from "@/hooks/useHasMounted";

/**
 * Drawer — the generic slide-in side panel every Mission Control and
 * profile detail view (insight, program, release, milestone, skill...)
 * is built on. Closes on Escape or backdrop click.
 *
 * Rendered via a portal into document.body rather than inline. Every
 * route's content is wrapped in PageTransition's motion.div, which
 * animates `scale`/`filter` — and per the CSS spec, any ancestor with
 * a non-`none` transform or filter (even at rest, e.g. `scale(1)`)
 * becomes the containing block for `position: fixed` descendants
 * instead of the viewport. Without the portal, this drawer would
 * render at the wrong position and an enormous height the moment the
 * page is scrolled away from the very top — confirmed by inspecting
 * the rendered bounding box, not just a screenshot at scroll-top zero.
 */
export function Drawer({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const mounted = useHasMounted();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ x: reducedMotion ? 0 : "100%", opacity: reducedMotion ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: reducedMotion ? 0 : "100%", opacity: reducedMotion ? 0 : 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel fixed inset-y-3 right-3 z-[120] flex w-[min(440px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[var(--radius-lg)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border-hairline)] p-5">
              <div>
                {eyebrow && (
                  <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
                    {eyebrow}
                  </p>
                )}
                <h2 className="font-[family-name:var(--font-display)] text-[18px] font-semibold text-[var(--text-primary)]">
                  {title}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close panel"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-raised)] hover:text-[var(--text-primary)]"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
