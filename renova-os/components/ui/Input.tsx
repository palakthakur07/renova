"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-1.5 block text-[12px] font-medium text-[var(--text-secondary)]"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "rounded-[var(--radius-sm)] border bg-[var(--bg-surface)] transition-colors duration-200",
            focused
              ? "border-[var(--accent-primary)]"
              : "border-[var(--border-hairline-strong)]"
          )}
        >
          <input
            ref={ref}
            id={id}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            className={cn(
              "w-full bg-transparent px-3.5 py-2.5 text-[14px] text-[var(--text-primary)]",
              "placeholder:text-[var(--text-muted)] outline-none",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";
