"use client";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { primaryNav } from "@/constants/navigation";

const nav = primaryNav.find((item) => item.href === "/counselor")!;

export default function CounselorPage() {
  return (
    <PlaceholderPage
      eyebrow="Phase 1 · Placeholder module"
      title={nav.label}
      description={nav.description}
      icon={nav.icon}
    />
  );
}
