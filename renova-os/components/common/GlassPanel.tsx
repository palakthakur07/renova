import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * GlassPanel — the raw glass surface primitive (blur + hairline +
 * inner highlight), unopinionated about padding or radius. Used
 * for chrome (sidebar, topbar, command palette) where `Card`'s
 * default padding doesn't apply.
 */
export function GlassPanel({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={cn("glass-panel", className)} {...props}>
      {children}
    </div>
  );
}
