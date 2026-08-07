"use client";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { primaryNav } from "@/constants/navigation";

const nav = primaryNav.find((item) => item.href === "/analytics")!;

export default function AnalyticsPage() {
  return (
    <PlaceholderPage
      eyebrow="Phase 1 · Placeholder module"
      title={nav.label}
      description={nav.description}
      icon={nav.icon}
    />
  );
}
