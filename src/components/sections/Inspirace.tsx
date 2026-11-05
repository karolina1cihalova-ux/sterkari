"use client";

import { useMemo, useState } from "react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { SectionShell } from "@/components/SectionShell";
import { inspirace } from "@/content/site";

type FilterId = (typeof inspirace.filters)[number]["id"];

export function Inspirace() {
  const [filter, setFilter] = useState<FilterId>("vse");

  const filtered = useMemo(() => {
    if (filter === "vse") return inspirace.items;
    return inspirace.items.filter((item) => item.room === filter);
  }, [filter]);

  return (
    <section id="inspirace" className="scroll-mt-20 bg-warm py-16 md:py-24">
      <SectionShell>
        <SectionReveal className="w-full">
          <h2 data-reveal className="text-left text-3xl font-bold text-charcoal md:text-4xl">
            {inspirace.title}
          </h2>
          <p data-reveal className="mt-3 max-w-prose text-left text-neutral-600">
            {inspirace.subtitle}
          </p>
        </SectionReveal>

        <div
          className="mt-8 flex flex-wrap justify-start gap-2"
          role="tablist"
          aria-label="Filtr místností"
        >
          {inspirace.filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-[background-color,color] duration-200 ease-out ${
                  active
                    ? "bg-accent text-white"
                    : "bg-white text-charcoal hover:bg-neutral-100"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-xl bg-white text-left shadow-sm">
              <div className="grid grid-cols-2 gap-0.5">
                <div
                  className="grain aspect-[3/4] bg-neutral-300 object-left"
                  aria-label={`${item.title} — před`}
                />
                <div
                  className="grain aspect-[3/4] bg-neutral-400 object-left"
                  aria-label={`${item.title} — po`}
                />
              </div>
              <p className="p-4 text-left text-sm font-medium text-charcoal">{item.title}</p>
            </li>
          ))}
        </ul>
      </SectionShell>
    </section>
  );
}
