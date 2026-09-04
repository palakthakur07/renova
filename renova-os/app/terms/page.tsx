import { PublicPage } from "@/components/layout/PublicPage";

export default function TermsPage() {
  return (
    <PublicPage
      eyebrow="Legal"
      title="Terms of service"
      description="Last updated: — add your effective date here."
    >
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        This is placeholder text. Before launch, replace this page with
        real terms covering acceptable use, account responsibilities,
        limitation of liability, and how the terms may change over time.
      </p>
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        Consider having this reviewed by counsel before publishing.
      </p>
    </PublicPage>
  );
}
