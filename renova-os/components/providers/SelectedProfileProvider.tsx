"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { profile as arjun } from "@/lib/demo-data/profiles/arjun";

export interface SelectedProfile {
  id: string;
  name: string;
  avatarInitials: string;
}

interface SelectedProfileContextValue {
  profile: SelectedProfile | null;
  selectProfile: (profile: SelectedProfile) => void;
  clearProfile: () => void;
}

const SelectedProfileContext = createContext<SelectedProfileContextValue | null>(null);

/**
 * SelectedProfileProvider — keeps track of which person's rehabilitation
 * journey the app is currently focused on, so the header context chip
 * (and, later, person-scoped routes) stay in sync as the user moves
 * between Plan, Learn, Progress, Reintegrate, and Counselor.
 *
 * There is only one demo profile in the prototype (Arjun Mehta), so the
 * context defaults to it — the same "one real record, wired for more"
 * approach the rest of the demo data follows.
 */
export function SelectedProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<SelectedProfile | null>({
    id: arjun.id,
    name: arjun.name,
    avatarInitials: arjun.avatarInitials,
  });

  return (
    <SelectedProfileContext.Provider
      value={{
        profile,
        selectProfile: setProfile,
        clearProfile: () => setProfile(null),
      }}
    >
      {children}
    </SelectedProfileContext.Provider>
  );
}

export function useSelectedProfile() {
  const ctx = useContext(SelectedProfileContext);
  if (!ctx) throw new Error("useSelectedProfile must be used within SelectedProfileProvider");
  return ctx;
}
