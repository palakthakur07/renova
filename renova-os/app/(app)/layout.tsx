import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { SelectedProfileProvider } from "@/components/providers/SelectedProfileProvider";

export default function AppGroupLayout({ children }: { children: ReactNode }) {
  return (
    <SelectedProfileProvider>
      <AppShell>{children}</AppShell>
    </SelectedProfileProvider>
  );
}
