import {
  LayoutGrid,
  Users,
  Sparkles,
  BookOpen,
  MessageCircleHeart,
  LineChart,
  DoorOpen,
  Settings,
} from "lucide-react";
import type { NavItem } from "@/types/nav";

/**
 * Primary sidebar navigation. All destinations are placeholder
 * pages in Phase 1 — no route here reflects real product scope
 * or an implementation commitment for Phase 2.
 */
export const primaryNav: NavItem[] = [
  {
    label: "Overview",
    href: "/overview",
    icon: LayoutGrid,
    description: "A high-level placeholder for the future operations overview.",
  },
  {
    label: "Profiles",
    href: "/profiles",
    icon: Users,
    description: "Placeholder for future resident and staff profile management.",
  },
  {
    label: "AI Planner",
    href: "/planner",
    icon: Sparkles,
    description: "Placeholder for a future AI-assisted rehabilitation planning tool.",
  },
  {
    label: "Learning",
    href: "/learning",
    icon: BookOpen,
    description: "Placeholder for future education and vocational program tracking.",
  },
  {
    label: "Counselor",
    href: "/counselor",
    icon: MessageCircleHeart,
    description: "Placeholder for a future counselor collaboration workspace.",
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: LineChart,
    description: "Placeholder for future program and outcome analytics.",
  },
  {
    label: "Release",
    href: "/release",
    icon: DoorOpen,
    description: "Placeholder for future release and reintegration planning.",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Placeholder for future workspace and account settings.",
  },
];
