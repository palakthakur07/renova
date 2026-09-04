"use client";

import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { GlassPanel } from "./GlassPanel";
import { Badge } from "@/components/ui/Badge";
import type { NotificationItem } from "@/types/common";

/** Static placeholder feed — no backend to source real alerts from yet. */
const demoNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "Communication module completed",
    detail: "Arjun Mehta finished Professional Communication with a 94% score.",
    tone: "achievement",
    timestamp: "9:12 AM",
  },
  {
    id: "2",
    title: "Progress updated",
    detail: "Rehabilitation progress recalculated after this week's activity.",
    tone: "structure",
    timestamp: "Yesterday",
  },
  {
    id: "3",
    title: "New counselor action available",
    detail: "A recommended check-in is ready for review.",
    tone: "neutral",
    timestamp: "Yesterday",
  },
];

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Notifications"
        aria-expanded={open}
        className="relative flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
      >
        <Bell size={16} strokeWidth={1.75} />
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-achievement)]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full z-50 mt-2 w-80"
          >
            <GlassPanel className="rounded-[var(--radius-md)] p-2">
              <div className="flex items-center justify-between px-2.5 py-2">
                <span className="text-[12px] font-medium text-[var(--text-primary)]">
                  Notifications
                </span>
                <Badge tone="neutral">{demoNotifications.length}</Badge>
              </div>
              <div className="flex flex-col gap-1">
                {demoNotifications.map((n) => (
                  <div
                    key={n.id}
                    className="rounded-[var(--radius-sm)] px-2.5 py-2 transition-colors hover:bg-[var(--bg-surface-raised)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[12.5px] font-medium text-[var(--text-primary)]">
                        {n.title}
                      </p>
                      <span className="shrink-0 font-mono text-[10px] text-[var(--text-muted)]">
                        {n.timestamp}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">
                      {n.detail}
                    </p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
