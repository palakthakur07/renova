"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeft, X } from "lucide-react";
import { primaryNav } from "@/constants/navigation";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";
import { useSidebarState } from "@/hooks/useSidebarState";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { Tooltip } from "@/components/ui/Tooltip";

/**
 * Sidebar — persistent primary navigation.
 *
 * Desktop/tablet: fixed column, animated width between expanded
 * (15.5rem) and collapsed (4.5rem), collapsed labels hidden with
 * icon-only + tooltip fallback.
 *
 * Mobile: becomes a slide-in drawer (see `open`/`onClose`), triggered
 * from the Topbar's menu button.
 */
export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const { collapsed, toggle } = useSidebarState();
  const isMobile = useIsMobile();

  const content = (isCollapsed: boolean) => (
    <>
      <div
        className={cn(
          "flex h-[var(--topbar-height)] shrink-0 items-center border-b border-[var(--border-hairline)] px-4",
          isCollapsed ? "justify-center" : "justify-between"
        )}
      >
        <Logo collapsed={isCollapsed} />
        {isMobile && (
          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-[var(--radius-xs)] p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {primaryNav.map((item) => {
          const active = pathname === item.href;
          const link = (
            <Link
              key={item.href}
              href={item.href}
              onClick={isMobile ? onClose : undefined}
              className={cn(
                "group relative flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-[13px] transition-colors duration-200",
                active
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active-indicator"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 rounded-[var(--radius-sm)] bg-[var(--bg-surface-raised)] shadow-[var(--shadow-1)]"
                />
              )}
              {!active && (
                <span className="absolute inset-0 rounded-[var(--radius-sm)] bg-[var(--accent-primary)] opacity-0 transition-opacity duration-200 group-hover:opacity-[0.06]" />
              )}
              <item.icon
                size={17}
                strokeWidth={1.75}
                className={cn(
                  "relative z-10 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105",
                  active && "text-[var(--accent-primary)]"
                )}
              />
              <span
                className={cn(
                  "relative z-10 whitespace-nowrap transition-opacity duration-150",
                  isCollapsed && "pointer-events-none opacity-0"
                )}
              >
                {item.label}
              </span>
            </Link>
          );

          return isCollapsed ? (
            <Tooltip key={item.href} label={item.label}>
              {link}
            </Tooltip>
          ) : (
            link
          );
        })}
      </nav>

      {!isMobile && (
        <button
          onClick={toggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex items-center gap-2.5 border-t border-[var(--border-hairline)] px-4 py-3.5 text-[12px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        >
          <ChevronsLeft
            size={15}
            className={cn("shrink-0 transition-transform duration-300", isCollapsed && "rotate-180")}
          />
          <span className={cn("whitespace-nowrap transition-opacity duration-150", isCollapsed && "opacity-0")}>
            Collapse
          </span>
        </button>
      )}
    </>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel fixed inset-y-0 left-0 z-50 flex w-72 flex-col rounded-none border-y-0 border-l-0"
            >
              {content(false)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <motion.aside
      animate={{ width: collapsed ? "var(--sidebar-width-collapsed)" : "var(--sidebar-width-expanded)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel sticky top-0 z-30 m-3 flex h-[calc(100vh-1.5rem)] shrink-0 flex-col overflow-hidden rounded-[var(--radius-lg)]"
    >
      {content(collapsed)}
    </motion.aside>
  );
}
