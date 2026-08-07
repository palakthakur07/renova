"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Owns open/close state for the command palette and wires the
 * ⌘K / Ctrl+K global shortcut. No command execution logic yet —
 * Phase 1 is UI-only, per the brief.
 */
export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return { open, setOpen, close };
}
