"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { useSelectedProfile } from "@/components/providers/SelectedProfileProvider";

/** Routes where the current person's journey is the organizing context. */
const JOURNEY_ROUTE_PREFIXES = ["/planner", "/learning", "/progress", "/release", "/counselor"];

/**
 * PersonContextChip — shows whose rehabilitation journey the current
 * page belongs to, so the person never loses track while moving
 * between Plan, Learn, Progress, Reintegrate, and Counselor. Links
 * back to their full profile. Hidden on routes where a person isn't
 * the organizing context (Mission Control, Analytics, Settings).
 */
export function PersonContextChip() {
  const pathname = usePathname();
  const { profile } = useSelectedProfile();

  const applicable = JOURNEY_ROUTE_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  if (!applicable || !profile) return null;

  return (
    <Link
      href="/profiles"
      className="hidden shrink-0 items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] px-2.5 py-1.5 text-[12px] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] lg:flex"
    >
      <Avatar initials={profile.avatarInitials} size="sm" />
      <span className="whitespace-nowrap">
        {profile.name} <span className="text-[var(--text-muted)]">· Rehabilitation Journey</span>
      </span>
    </Link>
  );
}
