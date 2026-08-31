"use client";

import { motion } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";
import { Badge } from "@/components/ui/Badge";

function timeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

/**
 * DashboardHeader — the command-center header. Greeting and date are
 * computed client-side only (see useHasMounted guard) since they
 * depend on the visitor's local clock — computing them during SSR
 * would either be wrong or risk a hydration mismatch against the
 * client's actual timezone.
 */
export function DashboardHeader({ lastSyncMinutesAgo }: { lastSyncMinutesAgo: number }) {
  const mounted = useHasMounted();
  const today = mounted
    ? new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date())
    : "";

  return (
    <div className="flex flex-col gap-6 border-b border-[var(--border-hairline)] pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <motion.span
            className="flex items-center gap-1.5 rounded-full border border-[var(--border-hairline-strong)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent-growth)]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            Rehabilitation systems online
          </motion.span>
          <Badge tone="neutral">Demo environment</Badge>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Mission control
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          Facility rehabilitation overview
        </h1>
        <p className="mt-2 text-[14px] text-[var(--text-secondary)]">
          {mounted ? timeGreeting() : "Good day"}, Officer. Here&apos;s what requires your attention today.
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-1 text-[12px] text-[var(--text-muted)] sm:text-right">
        {mounted && <span>{today}</span>}
        <span>ReNova Facility · Demo Site</span>
        <span className="font-mono">Last sync — {lastSyncMinutesAgo} min ago</span>
      </div>
    </div>
  );
}
