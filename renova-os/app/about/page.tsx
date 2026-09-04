import { PublicPage } from "@/components/layout/PublicPage";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <PublicPage
      eyebrow="About"
      title={`About ${siteConfig.name}`}
      description={siteConfig.description}
    >
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        {siteConfig.name} is being built to give rehabilitation and
        reintegration programs a structured, dignified platform —
        one place to plan, track, and support progress across education,
        skills, and personal growth.
      </p>
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        This page is a placeholder. Replace it with your team&apos;s real
        story, mission, and background once it&apos;s ready.
      </p>
    </PublicPage>
  );
}
