"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { durations, easeStandard } from "@/lib/motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  glass?: boolean;
  interactive?: boolean;
}

/**
 * Card — the base container. `glass` layers it with blur + hairline
 * for panels that sit above ambient background lighting. `interactive`
 * adds a restrained hover elevation for clickable cards only.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = false, interactive = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { y: -3, boxShadow: "var(--shadow-3)" } : undefined}
        transition={{ duration: durations.fast, ease: easeStandard }}
        className={cn(
          "rounded-[var(--radius-lg)] p-6",
          glass
            ? "glass-panel"
            : "bg-[var(--bg-surface)] border border-[var(--border-hairline)] shadow-[var(--shadow-1)]",
          interactive && "cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
