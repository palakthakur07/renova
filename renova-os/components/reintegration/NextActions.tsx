"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ReintegrationNextAction {
  id: string;
  title: string;
  reason: string;
  href: string;
  target: string;
}

const actions: ReintegrationNextAction[] = [
  {
    id: "na1",
    title: "Continue Learning Companion",
    reason: "Keep developing the skills that feed employment preparation.",
    href: "/learning",
    target: "Learning",
  },
  {
    id: "na2",
    title: "Review rehabilitation plan",
    reason: "Confirm the plan reflects current reintegration priorities.",
    href: "/planner",
    target: "AI Planner",
  },
  {
    id: "na3",
    title: "View rehabilitation progress",
    reason: "See how learning and program participation feed this page.",
    href: "/progress",
    target: "Progress",
  },
];

/**
 * NextActions — proves Phase 8 is part of one closed-loop system
 * (brief §13), not an isolated page. Clicking navigates into the
 * module that owns the action, mirroring Phase 7's NextActions.
 */
export function NextActions({ show }: { show: boolean }) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Continue the journey
      </p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">Suggested — not mandatory.</p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {actions.map((action, i) => (
          <motion.button
            key={action.id}
            onClick={() => router.push(action.href)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4 text-left transition-colors duration-200 hover:border-[var(--accent-primary)]"
          >
            <p className="text-[13px] font-medium leading-snug text-[var(--text-primary)]">{action.title}</p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">{action.reason}</p>
            <span className="mt-3 flex items-center gap-1 text-[12px] font-medium text-[var(--accent-primary)]">
              Go to {action.target}
              <ArrowRight size={12} />
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
