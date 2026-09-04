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
        action={<Badge tone="structure">Coming soon</Badge>}
      />
      <Reveal delay={0.3} className="pt-12">
        <EmptyState
          icon={Icon}
          title="This module hasn't been built yet"
          description="This part of ReNova is still in development. The navigation, layout, and routing are already in place — full functionality is on the way."
        />
      </Reveal>
    </div>
  );
}
