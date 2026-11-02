"use client";

import { useState } from "react";
import { sterky } from "@/content/site";

export function Sterky() {
  const [selectedId, setSelectedId] = useState(sterky.swatches[0].id);
  const selected = sterky.swatches.find((s) => s.id === selectedId) ?? sterky.swatches[0];

  return (
    <section id="sterky" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold text-charcoal md:text-4xl">{sterky.title}</h2>
        <p className="mt-3 max-w-2xl text-neutral-600">{sterky.subtitle}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {sterky.swatches.map((swatch) => {
              const isActive = swatch.id === selectedId;
              return (
                <li key={swatch.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(swatch.id)}
                    className={`w-full rounded-lg border-2 p-1 text-left transition-[border-color,transform] ${
                      isActive ? "border-accent scale-[1.02]" : "border-transparent hover:border-neutral-300"
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Vybrat ${swatch.name}`}
                  >
                    <div
                      className={`grain aspect-square w-full rounded-md ${swatch.textureClass}`}
                    />
                    <span className="mt-2 block px-1 text-sm font-semibold">{swatch.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col justify-center">
            <div
              className={`grain aspect-[4/3] w-full rounded-xl shadow-inner ${selected.textureClass}`}
              role="img"
              aria-label={`Náhled stěrky ${selected.name}`}
            />
            <h3 className="mt-6 text-2xl font-bold text-charcoal">{selected.name}</h3>
            <p className="mt-2 text-neutral-600">{selected.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
