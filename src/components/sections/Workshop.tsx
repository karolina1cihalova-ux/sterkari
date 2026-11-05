import { SectionReveal } from "@/components/motion/SectionReveal";
import { SectionShell } from "@/components/SectionShell";
import { workshop } from "@/content/site";

export function Workshop() {
  return (
    <section id="workshop" className="scroll-mt-20 bg-white py-16 md:py-24">
      <SectionShell>
        <SectionReveal className="w-full">
          <h2 data-reveal className="text-left text-3xl font-bold text-charcoal md:text-4xl">
            {workshop.title}
          </h2>
          <p data-reveal className="mt-4 max-w-prose text-left text-lg text-neutral-600">
            {workshop.lead}
          </p>
        </SectionReveal>

        <ul className="mt-8 grid w-full gap-3 sm:grid-cols-2">
          {workshop.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-left text-neutral-700">
              <span className="text-accent font-bold" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 w-full max-w-prose rounded-xl border border-neutral-200 bg-warm p-6 text-left md:p-8">
          <h3 className="text-xl font-bold text-charcoal">{workshop.takeHomeTitle}</h3>
          <ul className="mt-4 space-y-2">
            {workshop.takeHome.map((item) => (
              <li key={item} className="flex gap-2 text-neutral-700">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium text-accent">{workshop.terminTeaser}</p>
        </div>
      </SectionShell>
    </section>
  );
}
