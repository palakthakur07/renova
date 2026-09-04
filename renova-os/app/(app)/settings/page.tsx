"use client";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { primaryNav } from "@/constants/navigation";

const nav = primaryNav.find((item) => item.href === "/settings")!;

export default function SettingsPage() {
  return (
    <PlaceholderPage
      eyebrow="Coming soon"
      title={nav.label}
      description={nav.description}
      icon={nav.icon}
    />
  );
}
