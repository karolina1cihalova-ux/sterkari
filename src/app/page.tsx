import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyWorkshopCta } from "@/components/StickyWorkshopCta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Inspirace } from "@/components/sections/Inspirace";
import { JakToFunguje } from "@/components/sections/JakToFunguje";
import { Kontakt } from "@/components/sections/Kontakt";
import { Sterky } from "@/components/sections/Sterky";
import { Workshop } from "@/components/sections/Workshop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sterky />
        <JakToFunguje />
        <Workshop />
        <Inspirace />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
      <StickyWorkshopCta />
    </>
  );
}
