import { Accordion } from "@/components/Accordion";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-3xl font-bold text-charcoal md:text-4xl">{faq.title}</h2>
        <div className="mt-10">
          <Accordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}
