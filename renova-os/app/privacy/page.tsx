import { PublicPage } from "@/components/layout/PublicPage";

export default function PrivacyPage() {
  return (
    <PublicPage
      eyebrow="Legal"
      title="Privacy policy"
      description="Last updated: — add your effective date here."
    >
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        This is placeholder text. Before launch, replace this page with a
        real privacy policy covering what data you collect, how it&apos;s
        used and stored, who it&apos;s shared with, and how people can
        request access or deletion — especially given the sensitive nature
        of rehabilitation and reintegration data.
      </p>
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        Consider having this reviewed by counsel, particularly for
        compliance with any applicable health, education, or corrections
        data regulations in your jurisdiction.
      </p>
    </PublicPage>
  );
}
