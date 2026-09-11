"use client";

import { useTheme } from "next-themes";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/hooks/useHasMounted";
import { SettingsSection, SettingRow } from "./SettingsSection";
import { Switch } from "@/components/ui/Switch";
import { useSettings, type MotionPreference, type Density, type NotificationPrefs } from "@/components/providers/SettingsProvider";

const THEME_OPTIONS: { key: string; label: string }[] = [
  { key: "system", label: "System" },
  { key: "dark", label: "Dark" },
  { key: "light", label: "Light" },
];

const MOTION_OPTIONS: { key: MotionPreference; label: string }[] = [
  { key: "system", label: "System" },
  { key: "reduced", label: "Reduced" },
  { key: "full", label: "Full" },
];

const DENSITY_OPTIONS: { key: Density; label: string }[] = [
  { key: "comfortable", label: "Comfortable" },
  { key: "compact", label: "Compact" },
];

const NOTIFICATION_ITEMS: { key: keyof NotificationPrefs; label: string; description: string }[] = [
  { key: "counselorFollowUps", label: "Counselor follow-ups", description: "Reminders when a follow-up is due." },
  { key: "progressUpdates", label: "Progress updates", description: "Notify on rehabilitation progress changes." },
  { key: "learningMilestones", label: "Learning milestones", description: "Notify when a learning milestone is reached." },
  { key: "releaseReminders", label: "Release preparation reminders", description: "Notify on reintegration preparation updates." },
  { key: "systemNotifications", label: "System notifications", description: "Platform announcements and maintenance notices." },
];

/**
 * PreferencesSection — brief §5–7. Theme reads/writes next-themes
 * directly (light mode is already token-supported — see
 * styles/tokens.css — so this isn't introducing a redesign, just
 * exposing the existing toggle). Reduced Motion and Density are
 * genuinely wired to app behavior via SettingsProvider, not inert
 * controls.
 */
export function PreferencesSection({ show }: { show: boolean }) {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();
  const { motionPreference, setMotionPreference, density, setDensity, notifications, setNotification } = useSettings();

  return (
    <SettingsSection icon={Palette} title="Preferences" description="Appearance and interaction preferences." show={show} delay={0.05}>
      <SettingRow label="Theme" description="ReNova's visual identity is primarily dark; light mode is available.">
        <SegmentedControl
          options={THEME_OPTIONS}
          value={mounted ? theme ?? "system" : "system"}
          onChange={setTheme}
        />
      </SettingRow>

      <SettingRow label="Reduced motion" description="Reduces page transitions, chart animation, and decorative movement.">
        <SegmentedControl options={MOTION_OPTIONS} value={motionPreference} onChange={setMotionPreference} />
      </SettingRow>

      <SettingRow label="Interface density" description="Compact tightens spacing throughout the platform.">
        <SegmentedControl options={DENSITY_OPTIONS} value={density} onChange={setDensity} />
      </SettingRow>

      <div className="border-t border-[var(--border-hairline)] pt-4">
        <p className="mb-3 text-[13px] font-medium text-[var(--text-primary)]">Notifications</p>
        <div className="space-y-3">
          {NOTIFICATION_ITEMS.map((item) => (
            <SettingRow key={item.key} label={item.label} description={item.description} htmlFor={item.key}>
              <Switch
                id={item.key}
                label={item.label}
                checked={notifications[item.key]}
                onChange={(v) => setNotification(item.key, v)}
              />
            </SettingRow>
          ))}
        </div>
      </div>
    </SettingsSection>
  );
}

function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { key: T; label: string }[];
  value: string;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex gap-0.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-0.5">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => onChange(o.key)}
          aria-pressed={value === o.key}
          className={cn(
            "rounded-[var(--radius-xs)] px-2.5 py-1.5 text-[12px] transition-colors duration-200",
            value === o.key
              ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
              : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
