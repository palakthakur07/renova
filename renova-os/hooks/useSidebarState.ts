"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useIsTablet } from "./useMediaQuery";

const STORAGE_KEY = "renova-sidebar-collapsed";

const listeners = new Set<() => void>();
let cached = false;

function readStorage() {
  cached = window.localStorage.getItem(STORAGE_KEY) === "true";
  return cached;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setStoredCollapsed(value: boolean) {
  window.localStorage.setItem(STORAGE_KEY, String(value));
  cached = value;
  listeners.forEach((l) => l());
}

/**
 * Sidebar collapse preference, persisted across visits via
 * localStorage (read through useSyncExternalStore — no effect,
 * no setState cascade) and combined with the tablet breakpoint,
 * which forces a collapsed state without needing its own effect.
 * Mobile ignores this entirely and uses the drawer instead.
 */
export function useSidebarState() {
  const isTablet = useIsTablet();
  const storedCollapsed = useSyncExternalStore(subscribe, readStorage, () => false);

  const toggle = useCallback(() => {
    setStoredCollapsed(!cached);
  }, []);

  return { collapsed: isTablet || storedCollapsed, toggle };
}
