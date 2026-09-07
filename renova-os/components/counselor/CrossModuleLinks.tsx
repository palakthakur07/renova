"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const links = [
  { label: "View full profile", href: "/profiles" },
  { label: "Review rehabilitation plan", href: "/planner" },
  { label: "Open learning progress", href: "/learning" },
  { label: "View progress history", href: "/progress" },
  { label: "Review release plan", href: "/release" },
];

/**
 * CrossModuleLinks — "View full profile" / "Review rehabilitation
 * plan" / etc. (brief §12). Navigates into the module that owns the
 * data rather than duplicating it here, keeping Counselor a summary
 * layer, not a second copy of Profile/Plan/Learn/Progress/Release.
 */
export function CrossModuleLinks({ show }: { show: boolean }) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Open the full journey
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((l, i) => (
          <motion.button
            key={l.href}
            onClick={() => router.push(l.href)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 6 }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1.5 rounded-full border border-[var(--border-hairline-strong)] px-3.5 py-1.5 text-[12px] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
          >
            {l.label}
            <ArrowUpRight size={12} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
