"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Users, DoorOpen, Sparkles, LineChart, GraduationCap, Milestone, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { primaryNav } from "@/constants/navigation";
import { siteConfig } from "@/config/site";

interface QuickAction {
  label: string;
  href: string;
  icon: typeof Search;
}

/**
 * Demo quick actions (Phase 3 brief §25). These navigate to existing
 * routes — "View programs" and "Open AI insights" both land on
 * /overview since that's genuinely where Mission Control currently
 * surfaces that data, not an arbitrary placeholder mapping.
 */
const quickActions: QuickAction[] = [
  { label: "Open Arjun Mehta", href: "/profiles", icon: Users },
  { label: "View rehabilitation journey", href: "/profiles#journey", icon: Milestone },
  { label: "View skills", href: "/profiles#skills", icon: LineChart },
  { label: "View AI insights", href: "/profiles#ai-insights", icon: Sparkles },
  { label: "View release preparation", href: "/profiles#release", icon: DoorOpen },
  { label: "View releases", href: "/release", icon: DoorOpen },
  { label: "Show learning path", href: "/learning", icon: GraduationCap },
  { label: "Open current lesson", href: "/learning/lesson/lesson-variables", icon: BookOpen },
  { label: "Find course", href: "/learning/course/computer-applications", icon: GraduationCap },
];

/**
 * CommandPalette — UI only, per the Phase 1 brief. The single
 * working action is navigation to the existing placeholder routes;
 * there is no search index, no command execution engine yet.
 */
export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[18vh] z-[100] w-[min(560px,calc(100vw-2rem))] -translate-x-1/2"
          >
            <Command
              className="glass-panel overflow-hidden rounded-[var(--radius-lg)]"
              shouldFilter
            >
              <div className="flex items-center gap-2.5 border-b border-[var(--border-hairline)] px-4 py-3.5">
                <Search size={15} className="text-[var(--text-muted)]" />
                <Command.Input
                  autoFocus
                  placeholder={`Search ${siteConfig.shortName}…`}
                  className="w-full bg-transparent text-[14px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
                />
                <kbd className="rounded-[var(--radius-xs)] border border-[var(--border-hairline-strong)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                  Esc
                </kbd>
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-[13px] text-[var(--text-muted)]">
                  No results found.
                </Command.Empty>
                <Command.Group
                  heading="Navigate"
                  className="px-1 py-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-[var(--text-muted)]"
                >
                  {primaryNav.map((item) => (
                    <Command.Item
                      key={item.href}
                      onSelect={() => {
                        router.push(item.href);
                        onClose();
                      }}
                      className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-[13px] text-[var(--text-primary)] aria-selected:bg-[var(--bg-surface-raised)]"
                    >
                      <item.icon size={15} strokeWidth={1.75} className="text-[var(--text-secondary)]" />
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group
                  heading="Quick actions"
                  className="px-1 py-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-[var(--text-muted)]"
                >
                  {quickActions.map((action) => (
                    <Command.Item
                      key={action.label}
                      onSelect={() => {
                        router.push(action.href);
                        onClose();
                      }}
                      className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-[13px] text-[var(--text-primary)] aria-selected:bg-[var(--bg-surface-raised)]"
                    >
                      <action.icon size={15} strokeWidth={1.75} className="text-[var(--text-secondary)]" />
                      {action.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
