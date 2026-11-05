"use client";

import { type ButtonHTMLAttributes } from "react";

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
  ...props
}: CtaButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-[box-shadow,transform] duration-200 ease-out active:scale-[0.97] motion-reduce:active:scale-100 disabled:opacity-60 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
