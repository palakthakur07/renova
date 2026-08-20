/**
 * sessionStorage flags coordinating the cinematic intro across the
 * navigation boundary between `/` and the app shell. Centralized here
 * so both sides read/write the same key names.
 */
export const SESSION_KEYS = {
  /** Set once the full intro has played once this session — enables the fast boot path. */
  visited: "renova-visited",
  /** Set right before navigating away from "/" so the app shell can fade in from black. */
  launching: "renova-launching",
} as const;

export function getSessionFlag(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

export function setSessionFlag(key: string) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(key, "1");
  } catch {
    /* sessionStorage unavailable (e.g. private mode) — degrade silently, always use the full sequence */
  }
}

export function clearSessionFlag(key: string) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    /* no-op */
  }
}
