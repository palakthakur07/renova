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
 * Primary sidebar navigation, finalized in Phase 11. Every item is a
 * fully implemented module — Mission Control, People, Plan, Learn,
 * Progress, Analytics, Release, Counselor, Settings.
 */
export const primaryNav: NavItem[] = [
  {
    label: "Mission Control",
    href: "/overview",
    icon: LayoutGrid,
    description: "A facility-wide operational overview — activity, program health, and attention items.",
  },
  {
    label: "People",
    href: "/profiles",
    icon: Users,
    description: "Resident profiles and rehabilitation journeys.",
  },
  {
    label: "Plan",
    href: "/planner",
    icon: Sparkles,
    description: "AI-assisted rehabilitation planning, built from an individual's assessment and goals.",
  },
  {
    label: "Learn",
    href: "/learning",
    icon: BookOpen,
    description: "The AI Learning Companion — courses, lessons, and skill development.",
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
    description: "Rehabilitation activity, progress and program insights across the ecosystem — context and decision support, not a scoring system.",
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
    description: "Account, preferences, application defaults, privacy, and platform information.",
  },
];
