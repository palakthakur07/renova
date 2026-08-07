"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, AlertTriangle, Trophy, X } from "lucide-react";
import { useNotifications } from "@/components/providers/NotificationProvider";
import type { Tone } from "@/types/common";

const toneIcon: Record<Tone, typeof Info> = {
  neutral: Info,
  structure: Info,
  growth: CheckCircle2,
  achievement: Trophy,
  critical: AlertTriangle,
};

const toneColor: Record<Tone, string> = {
  neutral: "var(--text-secondary)",
  structure: "var(--accent-structure)",
  growth: "var(--accent-growth)",
  achievement: "var(--accent-achievement)",
  critical: "var(--accent-critical)",
};

/**
 * Renders the live toast stack, bottom-right, above everything else.
 * Mount once near the root of the app shell.
 */
export function NotificationLayer() {
  const { toasts, dismissToast } = useNotifications();

  return (
    <div
      className="pointer-events-none fixed bottom-5 right-5 z-[100] flex w-[min(360px,calc(100vw-2.5rem))] flex-col gap-2.5"
      aria-live="polite"
    >
      <AnimatePresence initial={false}>
        {toasts.map((toast) => {
          const Icon = toneIcon[toast.tone];
          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, transition: { duration: 0.2 } }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel pointer-events-auto flex items-start gap-3 rounded-[var(--radius-md)] p-3.5"
            >
              <Icon size={16} className="mt-0.5 shrink-0" style={{ color: toneColor[toast.tone] }} />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{toast.title}</p>
                {toast.detail && (
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">
                    {toast.detail}
                  </p>
                )}
              </div>
              <button
                onClick={() => dismissToast(toast.id)}
                aria-label="Dismiss notification"
                className="shrink-0 rounded-full p-0.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
