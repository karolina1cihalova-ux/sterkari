"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import { primaryCta } from "@/content/navigation";

export function StickyWorkshopCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur-sm md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CtaLink
        href={primaryCta.href}
        variant="charcoal"
        className="block w-full px-5 py-3 text-center text-xs"
      >
        {primaryCta.label}
      </CtaLink>
    </div>
  );
}
