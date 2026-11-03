import Link from "next/link";
import { Fragment } from "react";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative bg-warm">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-6xl">
          {hero.sloganLine1}
          <br />
          <span className="text-accent">{hero.sloganLine2}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl">{hero.subtitle}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={hero.ctaWorkshop.href}
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:opacity-90"
          >
            {hero.ctaWorkshop.label}
          </Link>
          <Link
            href={hero.ctaHow.href}
            className="rounded-full border-2 border-charcoal px-8 py-3 text-sm font-semibold text-charcoal uppercase tracking-wide hover:bg-charcoal hover:text-white"
          >
            {hero.ctaHow.label}
          </Link>
        </div>

        <div
          className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-neutral-700"
          aria-label="Proč nám věřit"
        >
          {hero.trustStrip.map((item, index) => (
            <Fragment key={item}>
              {index > 0 && (
                <span
                  className="select-none text-neutral-400 leading-none"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
              <span>{item}</span>
            </Fragment>
          ))}
        </div>
      </div>
      <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" aria-hidden />
    </section>
  );
}
