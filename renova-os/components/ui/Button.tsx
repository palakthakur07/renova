"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { durations, easeStandard } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost" | "critical";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-off-white)] text-[var(--color-graphite-900)] hover:bg-white",
  secondary:
    "bg-transparent text-[var(--text-primary)] border border-[var(--border-hairline-strong)] hover:border-[var(--accent-primary)] hover:bg-[color-mix(in_srgb,var(--accent-primary)_8%,transparent)]",
  ghost:
    "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]",
  critical:
    "bg-transparent text-[var(--accent-critical)] border border-[color-mix(in_srgb,var(--accent-critical)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--accent-critical)_10%,transparent)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-[13px] px-3.5 py-1.5 gap-1.5",
  md: "text-[14px] px-5 py-2.5 gap-2",
  lg: "text-[15px] px-7 py-3.5 gap-2.5",
};

/**
 * Button — the base interactive unit of ReNova OS.
 * Motion is a 1px rise + brightness shift, never a bounce or scale-pop.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0, scale: 0.985 }}
        transition={{ duration: durations.fast, ease: easeStandard }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-[var(--radius-sm)] font-medium",
          "transition-colors duration-200",
          "focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2",
          "disabled:opacity-40 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
