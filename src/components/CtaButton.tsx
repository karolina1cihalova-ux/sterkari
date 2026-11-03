"use client";

import gsap from "gsap";
import {
  type ButtonHTMLAttributes,
  useCallback,
  useRef,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type CtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "charcoal" | "accent";
};

const variantClasses = {
  charcoal:
    "bg-charcoal text-white shadow-md shadow-charcoal/15 hover:shadow-lg hover:shadow-charcoal/25 focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2",
  accent:
    "bg-accent text-white shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/35 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
};

export function CtaButton({
  variant = "charcoal",
  className = "",
  type = "button",
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}: CtaButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const pop = useCallback(
    (scale: number, y: number) => {
      if (reduceMotion || !ref.current) return;
      gsap.to(ref.current, {
        scale,
        y,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    [reduceMotion],
  );

  return (
    <button
      ref={ref}
      type={type}
      className={`rounded-full py-3 text-sm font-semibold uppercase tracking-wide transition-[box-shadow,opacity] will-change-transform disabled:opacity-60 ${variantClasses[variant]} ${className}`}
      onMouseEnter={(e) => {
        pop(1.03, -1);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        pop(1, 0);
        onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        pop(0.97, 0);
        onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        pop(1.03, -1);
        onMouseUp?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
