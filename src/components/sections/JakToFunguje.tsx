import { SectionReveal } from "@/components/motion/SectionReveal";
import { SectionShell } from "@/components/SectionShell";
import { jakToFunguje } from "@/content/site";

export function JakToFunguje() {
  return (
    <section id="jak-to-funguje" className="scroll-mt-20 bg-warm py-16 md:py-24">
      <SectionShell>
        <SectionReveal className="w-full">
          <h2 data-reveal className="text-left text-3xl font-bold text-charcoal md:text-4xl">
            {jakToFunguje.title}
          </h2>
          <p data-reveal className="mt-3 max-w-prose text-left text-neutral-600">
            {jakToFunguje.subtitle}
          </p>
        </SectionReveal>

        <ol className="mt-12 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-4">
          {jakToFunguje.steps.map((step) => (
            <li key={step.number} className="relative text-left">
              <span className="text-accent text-4xl font-bold">{step.number}</span>
              <h3 className="mt-2 text-lg font-bold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {"emphasis" in step && step.emphasis ? (
                  <>
                    {step.description}
                    <strong className="font-bold text-charcoal">{step.emphasis}</strong>
                    {step.descriptionAfter}
                  </>
                ) : (
                  step.description
                )}
              </p>
            </li>
          ))}
        </ol>
      </SectionShell>
    </section>
  );
}
