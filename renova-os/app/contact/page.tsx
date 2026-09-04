import { PublicPage } from "@/components/layout/PublicPage";

export default function ContactPage() {
  return (
    <PublicPage
      eyebrow="Contact"
      title="Get in touch"
      description="Questions, partnership inquiries, or feedback — we'd like to hear from you."
    >
      <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
        <p className="text-[13px] text-[var(--text-muted)]">Email</p>
        <p className="mt-1 text-[14px] text-[var(--text-primary)]">
          hello@renova.example
        </p>
      </div>
      <p className="text-[13px] leading-relaxed text-[var(--text-muted)]">
        Replace this with a real contact form or address once you&apos;re
        ready to go live.
      </p>
    </PublicPage>
  );
}
