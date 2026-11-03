"use client";

import gsap from "gsap";
import Link from "next/link";
import {
  type ComponentProps,
  type MouseEvent,
  useCallback,
  useRef,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const variantClasses = {
  charcoal:
    "bg-charcoal text-white shadow-md shadow-charcoal/15 hover:shadow-lg hover:shadow-charcoal/25 focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2",
  accent:
    "bg-accent text-white shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/35 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  outline:
    "border-2 border-charcoal bg-transparent text-charcoal shadow-sm hover:bg-charcoal hover:text-white focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2",
} as const;

type CtaVariant = keyof typeof variantClasses;

type CtaLinkProps = ComponentProps<typeof Link> & {
  variant?: CtaVariant;
};

export function CtaLink({
  variant = "accent",
  className = "",
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}: CtaLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const pop = useCallback(
    (scale: number, y: number, shadow?: string) => {
      if (reduceMotion || !ref.current) return;
      gsap.to(ref.current, {
        scale,
        y,
        boxShadow: shadow,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    [reduceMotion],
  );

  return (
    <Link
      ref={ref}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-[box-shadow,background-color,color] will-change-transform ${variantClasses[variant]} ${className}`}
      onMouseEnter={(e) => {
        pop(1.04, -2);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        pop(1, 0);
        onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        pop(0.97, 0);
        onMouseDown?.(e as MouseEvent<HTMLAnchorElement>);
      }}
      onMouseUp={(e) => {
        pop(1.04, -2);
        onMouseUp?.(e as MouseEvent<HTMLAnchorElement>);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
