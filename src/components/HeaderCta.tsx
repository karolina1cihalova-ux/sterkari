"use client";

import { primaryCta } from "@/content/navigation";
import { CtaLink } from "@/components/CtaLink";

export function HeaderCta() {
  return (
    <CtaLink
      href={primaryCta.href}
      variant="charcoal"
      className="px-5 py-2.5 text-xs"
    >
      {primaryCta.label}
    </CtaLink>
  );
}
