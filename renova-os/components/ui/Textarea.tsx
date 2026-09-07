"use client";

import { TextareaHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

/** Textarea — Input's multi-line counterpart, same focus/border treatment. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, rows = 3, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-1.5 block text-[12px] font-medium text-[var(--text-secondary)]">
            {label}
          </label>
        )}
        <div
          className={cn(
            "rounded-[var(--radius-sm)] border bg-[var(--bg-surface)] transition-colors duration-200",
            focused ? "border-[var(--accent-primary)]" : "border-[var(--border-hairline-strong)]"
          )}
        >
          <textarea
            ref={ref}
            id={id}
            rows={rows}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            className={cn(
              "w-full resize-none bg-transparent px-3.5 py-2.5 text-[13px] leading-relaxed text-[var(--text-primary)]",
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
Textarea.displayName = "Textarea";
