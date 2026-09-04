import { PublicPage } from "@/components/layout/PublicPage";

export default function AccessibilityPage() {
  return (
    <PublicPage
      eyebrow="Accessibility"
      title="Accessibility"
      description="ReNova is built for a wide range of users, including staff and residents who rely on assistive technology."
    >
      <ul className="space-y-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">
        <li>· Full keyboard navigation, with visible focus states throughout.</li>
        <li>· Semantic HTML and ARIA labels on interactive and decorative elements alike.</li>
        <li>· Active navigation states are conveyed through more than color alone.</li>
        <li>· Motion respects your system&apos;s reduced-motion preference.</li>
      </ul>
      <p className="text-[13px] leading-relaxed text-[var(--text-muted)]">
        If something isn&apos;t accessible to you, please{" "}
        <a href="/contact" className="text-[var(--accent-primary)] hover:underline">
          get in touch
        </a>
        .
      </p>
    </PublicPage>
  );
}
