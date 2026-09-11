"use client";

import { UserCircle } from "lucide-react";
import { SettingsSection, SettingRow } from "./SettingsSection";
import { Input } from "@/components/ui";
import { Badge } from "@/components/ui/Badge";
import { useSettings } from "@/components/providers/SettingsProvider";
import { useNotifications } from "@/components/providers/NotificationProvider";

/** AccountSection — brief §4: editable demo staff profile, never real personal information. */
export function AccountSection({ show }: { show: boolean }) {
  const { account, setAccount } = useSettings();
  const { pushToast } = useNotifications();

  const update = (field: keyof typeof account) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [field]: e.target.value });
  };

  return (
    <SettingsSection icon={UserCircle} title="Account" description="Demo staff profile for this session." show={show}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Name" value={account.name} onChange={update("name")} />
        <Input label="Role" value={account.role} onChange={update("role")} />
      </div>
      <Input label="Email" type="email" value={account.email} onChange={update("email")} />

      <SettingRow label="Account status">
        <Badge tone="growth">Active — demo session</Badge>
      </SettingRow>

      <div className="border-t border-[var(--border-hairline)] pt-4">
        <button
          onClick={() => pushToast({ title: "Account updated", tone: "growth" })}
          className="rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
        >
          Save account details
        </button>
      </div>
    </SettingsSection>
  );
}
