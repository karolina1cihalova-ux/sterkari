"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { SectionShell } from "@/components/SectionShell";
import { sterky } from "@/content/site";

export function Sterky() {
  const [selectedId, setSelectedId] = useState(sterky.swatches[0].id);
  const selected = sterky.swatches.find((s) => s.id === selectedId) ?? sterky.swatches[0];

  return (
    <section id="sterky" className="scroll-mt-20 bg-white py-16 md:py-24">
      <SectionShell>
        <SectionReveal className="w-full">
          <h2
            data-reveal
            className="text-left text-3xl font-bold text-charcoal md:text-4xl"
          >
            {sterky.title}
          </h2>
          <p data-reveal className="mt-3 max-w-prose text-left text-neutral-600">
            {sterky.subtitle}
          </p>
        </SectionReveal>

        <div className="mt-10 grid w-full gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <ul className="grid w-full list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {sterky.swatches.map((swatch) => {
              const isActive = swatch.id === selectedId;
              return (
                <li key={swatch.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(swatch.id)}
                    className={`w-full rounded-lg border-2 p-1 text-left transition-[border-color,box-shadow] duration-200 ease-out ${
                      isActive
                        ? "border-accent shadow-md shadow-accent/15"
                        : "border-transparent hover:border-neutral-300 hover:shadow-sm"
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Vybrat ${swatch.name}`}
                  >
                    <div
                      className={`grain aspect-square w-full rounded-md object-left ${swatch.textureClass}`}
                    />
                    <span className="mt-2 block px-1 text-sm font-semibold">{swatch.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex w-full flex-col items-start justify-start">
            <div
              className={`grain aspect-[4/3] w-full rounded-xl object-left shadow-inner ${selected.textureClass}`}
              role="img"
              aria-label={`Náhled stěrky ${selected.name}`}
            />
            <h3 className="mt-6 text-left text-2xl font-bold text-charcoal">{selected.name}</h3>
            <p className="mt-2 max-w-prose text-left text-neutral-600">{selected.description}</p>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
