import {
  LayoutGrid,
  Users,
  Sparkles,
  BookOpen,
  MessageCircleHeart,
  LineChart,
  DoorOpen,
  Settings,
  TrendingUp,
} from "lucide-react";
import type { NavItem } from "@/types/nav";

/**
 * Primary sidebar navigation. Labels match ReNova's final product
 * terminology; hrefs point at the actual routes implemented across
 * Phases 1-8 (relabeling only — no routes were added or removed).
 */
export const primaryNav: NavItem[] = [
  {
    label: "Mission Control",
    href: "/overview",
    icon: LayoutGrid,
    description: "A high-level view of facility status, rehabilitation health, and what needs attention.",
  },
  {
    label: "People",
    href: "/profiles",
    icon: Users,
    description: "Resident and staff profiles, each tracking a full rehabilitation journey.",
  },
  {
    label: "Plan",
    href: "/planner",
    icon: Sparkles,
    description: "AI-assisted rehabilitation planning.",
  },
  {
    label: "Learn",
    href: "/learning",
    icon: BookOpen,
    description: "Education and vocational program tracking, with an AI learning companion.",
  },
  {
    label: "Progress",
    href: "/progress",
    icon: TrendingUp,
    description: "A transparent view of rehabilitation progress across education, skills, programs, and learning.",
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: LineChart,
    description: "Program and outcome analytics across the facility.",
  },
  {
    label: "Reintegrate",
    href: "/release",
    icon: DoorOpen,
    description: "Release readiness and reintegration planning.",
  },
  {
    label: "Counselor",
    href: "/counselor",
    icon: MessageCircleHeart,
    description: "Counselor collaboration workspace.",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Workspace and account settings.",
  },
];
