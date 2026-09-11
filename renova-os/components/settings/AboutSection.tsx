"use client";

import { Info } from "lucide-react";
import { SettingsSection } from "./SettingsSection";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";

/** AboutSection — brief §11–12. Version reads from siteConfig (package.json-derived), never an invented enterprise version number. */
export function AboutSection({ show }: { show: boolean }) {
  return (
    <SettingsSection icon={Info} title="About ReNova" show={show} delay={0.2}>
      <div className="flex items-center gap-3">
        <p className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-[var(--text-primary)]">
          {siteConfig.name}
        </p>
        <Badge tone="neutral">v{siteConfig.version} · Prototype / Hackathon Edition</Badge>
      </div>
      <p className="text-[13px] text-[var(--text-secondary)]">{siteConfig.description}</p>
      <p className="max-w-xl text-[12.5px] leading-relaxed text-[var(--text-muted)]">
        ReNova connects rehabilitation planning, learning, progress tracking, counseling, analytics and
        reintegration preparation into one human-centered platform.
      </p>
    </SettingsSection>
  );
}
