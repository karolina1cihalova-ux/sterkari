"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { CtaLink } from "@/components/CtaLink";
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
        y: 36,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative bg-warm">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h1
          data-hero-reveal
          className="max-w-3xl text-4xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-6xl"
        >
          {hero.sloganLine1}
          <br />
          <span className="text-accent">{hero.sloganLine2}</span>
        </h1>
        <p
          data-hero-reveal
          className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl"
        >
          {hero.subtitle}
        </p>

        <div data-hero-reveal className="mt-10 flex flex-wrap gap-4">
          <CtaLink href={hero.ctaWorkshop.href} variant="outline">
            {hero.ctaWorkshop.label}
          </CtaLink>
          <CtaLink href={hero.ctaHow.href} variant="outline">
            {hero.ctaHow.label}
          </CtaLink>
        </div>

        <p
          data-hero-reveal
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-700"
        >
          {hero.trustStrip.map((item) => (
            <span key={item} className="whitespace-nowrap">
              {item}
            </span>
          ))}
        </p>
      </div>
      <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" aria-hidden />
    </section>
  );
}
