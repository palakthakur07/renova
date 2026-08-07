export type Tone = "neutral" | "structure" | "growth" | "achievement" | "critical";
export type Size = "sm" | "md" | "lg";

/** Shared shape for the notification placeholder list. */
export interface NotificationItem {
  id: string;
  title: string;
  detail: string;
  tone: Tone;
  timestamp: string;
}
