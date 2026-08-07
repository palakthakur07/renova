import type { LucideIcon } from "lucide-react";

/** A single primary navigation destination in the app shell sidebar. */
export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Short description shown on the placeholder page for this route. */
  description: string;
}

/** One crumb in a breadcrumb trail. The last crumb has no href (current page). */
export interface Breadcrumb {
  label: string;
  href?: string;
}
