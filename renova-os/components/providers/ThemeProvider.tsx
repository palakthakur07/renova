"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Wraps next-themes. `attribute="data-theme"` matches the selector
 * used throughout styles/tokens.css ([data-theme="light"], etc).
 * `disableTransitionOnChange` is intentionally OFF — globals.css
 * defines --transition-theme precisely so switching themes cross-
 * fades instead of flashing.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem
      themes={["dark", "light"]}
    >
      {children}
    </NextThemesProvider>
  );
}
