"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True only after the component has mounted on the client.
 * Implemented with useSyncExternalStore (server snapshot = false,
 * client snapshot = true) rather than a useEffect+setState pair,
 * so there's no synchronous setState-in-effect render cascade.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
