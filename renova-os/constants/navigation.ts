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
 * Primary sidebar navigation. Labels and order match the brief's
 * Phase 9 navigation spec: Mission Control, People, Plan, Learn,
 * Progress, Analytics, Release, Counselor, Settings. Progress,
 * Release, and Counselor are real modules; Analytics and Settings
 * remain placeholders until their own phases (brief §22, §23).
 */
export const primaryNav: NavItem[] = [
  {
    label: "Mission Control",
    href: "/overview",
    icon: LayoutGrid,
    description: "A high-level placeholder for the future operations overview.",
  },
  {
    label: "People",
    href: "/profiles",
    icon: Users,
    description: "Placeholder for future resident and staff profile management.",
  },
  {
    label: "Plan",
    href: "/planner",
    icon: Sparkles,
    description: "Placeholder for a future AI-assisted rehabilitation planning tool.",
  },
  {
    label: "Learn",
    href: "/learning",
    icon: BookOpen,
    description: "Placeholder for future education and vocational program tracking.",
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
    description: "Placeholder for future program and outcome analytics.",
  },
  {
    label: "Release",
    href: "/release",
    icon: DoorOpen,
    description: "Release preparation and reintegration — preparation progress, employment readiness, and support planning.",
  },
  {
    label: "Counselor",
    href: "/counselor",
    icon: MessageCircleHeart,
    description: "A professional workspace for session preparation, structured notes, and AI-assisted decision support.",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Placeholder for future workspace and account settings.",
  },
];
