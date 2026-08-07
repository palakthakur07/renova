/**
 * Small, dependency-free helpers that don't belong to a specific
 * component. `lib/` holds framework-adjacent helpers (cn, motion
 * variants); `utils/` holds plain data/formatting utilities.
 */

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Debounce a function by `wait` milliseconds. */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  wait = 200
) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

/** Format an ISO-ish timestamp as a short, readable relative-free label. */
export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    month: "short",
    day: "numeric",
  }).format(date);
}

/** True if running on the client (safe to call during render). */
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}
