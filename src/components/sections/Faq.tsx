import { Accordion } from "@/components/Accordion";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { SectionShell } from "@/components/SectionShell";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 md:py-24">
      <SectionShell className="max-w-3xl">
        <SectionReveal className="w-full">
          <h2 data-reveal className="text-left text-3xl font-bold text-charcoal md:text-4xl">
            {faq.title}
          </h2>
        </SectionReveal>
        <div className="mt-10 w-full">
          <Accordion items={faq.items} />
        </div>
      </SectionShell>
    </section>
  );
}
