"use client";

import Link from "next/link";
import { type ComponentProps } from "react";

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
  ...props
}: CtaLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-[box-shadow,background-color,color,transform] duration-200 ease-out active:scale-[0.97] motion-reduce:active:scale-100 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
