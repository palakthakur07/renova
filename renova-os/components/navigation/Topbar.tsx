"use client";

import { Menu, Search } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { PersonContextChip } from "./PersonContextChip";
import { SearchBar } from "@/components/common/SearchBar";
import { NotificationBell } from "@/components/common/NotificationBell";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Avatar } from "@/components/ui/Avatar";
import { useIsMobile } from "@/hooks/useMediaQuery";

/**
 * Topbar — sticky, backdrop-blurred strip above the main content
 * area. On mobile it also carries the drawer trigger for Sidebar.
 * Controls are progressively dropped as width shrinks: breadcrumb
 * and inline search collapse first, then the theme switcher moves
 * out of the way, in favor of the menu + search + bell + avatar.
 */
export function Topbar({
  onOpenSidebar,
  onOpenCommandPalette,
}: {
  onOpenSidebar: () => void;
  onOpenCommandPalette: () => void;
}) {
  const isMobile = useIsMobile();

  return (
    <header className="glass-panel sticky top-0 z-20 mx-3 mt-3 flex h-[var(--topbar-height)] items-center gap-3 rounded-[var(--radius-lg)] px-3 sm:gap-4 sm:px-4">
      {isMobile ? (
        <button
          onClick={onOpenSidebar}
          aria-label="Open navigation"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
        >
          <Menu size={17} />
        </button>
      ) : (
        <Breadcrumb />
      )}

      {isMobile && <div className="flex-1" />}

      <div className="mx-auto hidden max-w-sm flex-1 md:block">
        <SearchBar onOpen={onOpenCommandPalette} />
      </div>

      {isMobile && (
        <button
          onClick={onOpenCommandPalette}
          aria-label="Search"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
        >
          <Search size={16} />
        </button>
      )}

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <PersonContextChip />
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
        <NotificationBell />
        <Avatar initials="JD" size="sm" />
      </div>
    </header>
  );
}
