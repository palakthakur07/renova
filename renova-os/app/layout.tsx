import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NotificationProvider } from "@/components/providers/NotificationProvider";
import { siteConfig } from "@/config/site";

/**
 * FONTS
 * ------------------------------------------------------------------
 * This sandbox has no outbound access to fonts.googleapis.com, so
 * font loading falls back to system stacks defined as CSS variables
 * in styles/tokens.css (--font-manrope / --font-inter / --font-plex-mono
 * all default to system stacks via var(--x, "Name")).
 *
 * To wire in the real typefaces once deployed, add:
 *
 *   import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
 *   const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400","500","600","700","800"] });
 *   const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600"] });
 *   const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400","500"] });
 *
 * ...and spread `${manrope.variable} ${inter.variable} ${plexMono.variable}`
 * into the body className below. No other component needs to change.
 * ------------------------------------------------------------------
 */

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
