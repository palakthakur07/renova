"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import type { Tone } from "@/types/common";

export interface Toast {
  id: string;
  title: string;
  detail?: string;
  tone: Tone;
}

interface NotificationContextValue {
  toasts: Toast[];
  pushToast: (toast: Omit<Toast, "id">) => void;
  dismissToast: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextValue | null>(null);

/**
 * App-wide toast/notification state. This is the "Notification Layer"
 * from the app shell brief — a real, working (if minimal) system so
 * future phases have somewhere to push real alerts, not just a stub.
 */
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const pushToast = useCallback(
    (toast: Omit<Toast, "id">) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { ...toast, id }]);
      setTimeout(() => dismissToast(id), 4200);
    },
    [dismissToast]
  );

  return (
    <NotificationContext.Provider value={{ toasts, pushToast, dismissToast }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotifications must be used within NotificationProvider");
  return ctx;
}
