"use client";

import { useMemo, useState } from "react";
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
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold text-charcoal md:text-4xl">{inspirace.title}</h2>
        <p className="mt-3 max-w-2xl text-neutral-600">{inspirace.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtr místností">
          {inspirace.filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
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

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-0.5">
                <div
                  className="grain aspect-[3/4] bg-neutral-300"
                  aria-label={`${item.title} — před`}
                />
                <div
                  className="grain aspect-[3/4] bg-neutral-400"
                  aria-label={`${item.title} — po`}
                />
              </div>
              <p className="p-4 text-sm font-medium text-charcoal">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
