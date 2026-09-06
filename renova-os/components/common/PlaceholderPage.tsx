"use client";

import type { LucideIcon } from "lucide-react";
import { PageHeader } from "./PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";

/**
 * PlaceholderPage — the single template every Phase 1 route renders.
 * One responsibility: large animated title + description (PageHeader)
 * above a beautiful empty state. No page-specific logic lives here —
 * each route file just supplies copy and an icon.
 */
export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={<Badge tone="structure">Phase 2 · Not yet built</Badge>}
      />
      <Reveal delay={0.3} className="pt-12">
        <EmptyState
          icon={Icon}
          title="This module hasn't been built yet"
          description="Phase 1 establishes the application shell only — routing, navigation, and layout. Real functionality for this module arrives in a later phase."
        />
      </Reveal>
    </div>
  );
}
