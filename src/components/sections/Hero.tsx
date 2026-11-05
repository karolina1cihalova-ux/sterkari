"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { CtaLink } from "@/components/CtaLink";
import { SectionShell } from "@/components/SectionShell";
import { hero } from "@/content/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll("[data-hero-reveal]");
      gsap.from(targets, {
        opacity: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.06,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative bg-warm">
      <SectionShell className="py-16 md:py-24">
        <h1
          data-hero-reveal
          className="max-w-3xl text-left text-4xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-6xl"
        >
          {hero.sloganLine1}
          <br />
          <span className="text-accent">{hero.sloganLine2}</span>
        </h1>
        <p
          data-hero-reveal
          className="mt-6 max-w-prose text-left text-lg text-neutral-600 md:text-xl"
        >
          {hero.subtitle}
        </p>

        <div data-hero-reveal className="mt-10 flex flex-wrap justify-start gap-4">
          <CtaLink href={hero.ctaWorkshop.href} variant="outline">
            {hero.ctaWorkshop.label}
          </CtaLink>
          <CtaLink href={hero.ctaHow.href} variant="outline">
            {hero.ctaHow.label}
          </CtaLink>
        </div>
      </SectionShell>
      <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" aria-hidden />
    </section>
  );
}
