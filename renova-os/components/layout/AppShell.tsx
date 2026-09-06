"use client";

import type { ReactNode } from "react";
import { BackgroundLayer } from "@/components/background/BackgroundLayer";
import { Sidebar } from "@/components/navigation/Sidebar";
import { Topbar } from "@/components/navigation/Topbar";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { NotificationLayer } from "@/components/layout/NotificationLayer";
import { PageTransition } from "@/components/animations/PageTransition";
import { LaunchArrivalVeil } from "@/components/landing/LaunchArrivalVeil";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { useState } from "react";

/**
 * AppShell — the persistent application frame every internal route
 * renders inside: background layer, sidebar, topbar, command palette,
 * and the notification layer, wrapping page content in PageTransition.
 *
 * Mounted once by app/(app)/layout.tsx — individual pages only need
 * to render their own content.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { open: paletteOpen, setOpen: setPaletteOpen, close: closePalette } = useCommandPalette();

  return (
    <div className="relative flex min-h-screen">
      <BackgroundLayer />
      <Sidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          onOpenSidebar={() => setMobileSidebarOpen(true)}
          onOpenCommandPalette={() => setPaletteOpen(true)}
        />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>

      <CommandPalette open={paletteOpen} onClose={closePalette} />
      <NotificationLayer />
      <LaunchArrivalVeil />
    </div>
  );
}
