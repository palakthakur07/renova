"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { StaffRole } from "@/types/profile";

interface RoleContextValue {
  role: StaffRole;
  setRole: (role: StaffRole) => void;
  can: (allowed: StaffRole[]) => boolean;
}

const RoleContext = createContext<RoleContextValue | null>(null);

/**
 * RoleProvider — permission-aware rendering, prepared ahead of real
 * authentication (Phase 4 brief §28). No auth exists yet, so `role` is
 * just local state defaulting to "officer," switchable via the demo
 * RoleSwitcher in ProfileHeader. Components call `can([...])` to decide
 * whether to render restricted content or a RestrictedNotice — the same
 * call shape a real permission check would use later.
 */
export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<StaffRole>("officer");
  const can = (allowed: StaffRole[]) => allowed.includes(role);
  return <RoleContext.Provider value={{ role, setRole, can }}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within RoleProvider");
  return ctx;
}
