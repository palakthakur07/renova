"use client";

import { ShieldCheck, Check, X } from "lucide-react";
import { SettingsSection } from "./SettingsSection";
import { useSettings } from "@/components/providers/SettingsProvider";

const AI_DOES = [
  "Rehabilitation planning support",
  "Learning guidance",
  "Progress insights",
  "Counselor session preparation",
  "Analytics observations",
];

const AI_DOES_NOT = [
  "Decide parole",
  "Determine release eligibility",
  "Diagnose medical conditions",
  "Predict criminal behavior",
  "Recommend punishment",
  "Determine whether a person is good or bad",
];

/**
 * PrivacySecuritySection — brief §9–10. Deliberately factual, no
 * "military-grade" / "100% secure" / "fully compliant" language
 * (brief §9) — only claims that are actually true of this prototype.
 */
export function PrivacySecuritySection({ show }: { show: boolean }) {
  const { account } = useSettings();

  return (
    <SettingsSection
      id="privacy"
      icon={ShieldCheck}
      title="Privacy & security"
      description="How ReNova handles rehabilitation information and AI assistance."
      show={show}
      delay={0.15}
    >
      <InfoBlock title="Session information">
        Signed in as {account.name} ({account.role}) for this demo session. Session data is held locally in this
        browser and is not shared outside the platform.
      </InfoBlock>

      <InfoBlock title="Data access">
        ReNova presents rehabilitation information only to authorized staff within the platform.
      </InfoBlock>

      <InfoBlock title="Human review">
        Final decisions remain with qualified staff. AI-generated recommendations and insights are decision-support
        tools, never automated determinations.
      </InfoBlock>

      <InfoBlock title="Auditability">
        Important actions — accepted suggestions, saved notes, and preparation updates — remain reviewable through
        the platform where they were created.
      </InfoBlock>

      <div className="border-t border-[var(--border-hairline)] pt-4">
        <p className="mb-3 text-[13px] font-medium text-[var(--text-primary)]">How ReNova uses AI</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--accent-growth)]">
              <Check size={12} /> AI assists with
            </p>
            <ul className="space-y-1.5">
              {AI_DOES.map((d) => (
                <li key={d} className="text-[12px] leading-snug text-[var(--text-secondary)]">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--accent-critical)]">
              <X size={12} /> AI does not
            </p>
            <ul className="space-y-1.5">
              {AI_DOES_NOT.map((d) => (
                <li key={d} className="text-[12px] leading-snug text-[var(--text-secondary)]">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{title}</p>
      <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--text-secondary)]">{children}</p>
    </div>
  );
}
