import { PublicPage } from "@/components/layout/PublicPage";

export default function SupportPage() {
  return (
    <PublicPage
      eyebrow="Support"
      title="Support"
      description="Need help? Reach out and we'll get back to you as soon as we can."
    >
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        A dedicated help center is on the way. For now, use the{" "}
        <a href="/contact" className="text-[var(--accent-primary)] hover:underline">
          contact page
        </a>{" "}
        to reach the team.
      </p>
    </PublicPage>
  );
}
