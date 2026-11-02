export type Swatch = {
  id: string;
  name: string;
  description: string;
  textureClass: string;
};

export type GalleryItem = {
  id: string;
  room: "obyvak" | "koupelna" | "chodba";
  title: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const hero = {
  sloganLine1: "Stěrku zvládnete sami.",
  sloganLine2: "My vám ukážeme jak.",
  subtitle:
    "Jednodenní workshop ve showroomu, materiály připravené v balíku a podpora, když je potřeba. Naučíte se nanášet stěrku s jistotou — na stěnu, kterou budete mít doma.",
  ctaWorkshop: { label: "Chci na workshop", href: "#kontakt" },
  ctaHow: { label: "Jak to funguje", href: "#jak-to-funguje" },
  trustStrip: ["1 den", "Showroom", "Materiály v balíku", "Podpora"],
};

export const sterky = {
  title: "Stěrky",
  subtitle: "Vyberte si odstín a strukturu. Ve workshopu si vše vyzkoušíte na vzorku.",
  swatches: [
    {
      id: "piskova",
      name: "Písková",
      description: "Teplý neutrální tón s jemnou strukturou — univerzální do obýváku i chodby.",
      textureClass: "swatch-piskova",
    },
    {
      id: "siva",
      name: "Šedá mlha",
      description: "Chladnější šedá s měkkým přechodem, skvělá k dřevu a černým detailům.",
      textureClass: "swatch-siva",
    },
    {
      id: "olivova",
      name: "Olivová hlína",
      description: "Zemitý odstín s výraznější strukturou pro industriální a přírodní interiéry.",
      textureClass: "swatch-olivova",
    },
    {
      id: "bila",
      name: "Bílá křída",
      description: "Světlá, matná stěrka — do koupelen a malých místností, kde chcete vzdušnost.",
      textureClass: "swatch-bila",
    },
    {
      id: "terakota",
      name: "Teplá terakota",
      description: "Jemný teplý nádech bez přehnané oranžové — jako akcentová stěna.",
      textureClass: "swatch-terakota",
    },
    {
      id: "antracit",
      name: "Antracit",
      description: "Tmavší tón s jemným zrnem pro kontrastní stěny a chodby.",
      textureClass: "swatch-antracit",
    },
  ] satisfies Swatch[],
};

export const jakToFunguje = {
  title: "Jak to funguje",
  subtitle: "Od prvního dotazu po hotovou stěnu u vás doma — jednoduchý postup ve čtyřech krocích.",
  steps: [
    {
      number: 1,
      title: "Rezervace workshopu",
      description:
        "Vyplníte krátký formulář, domluvíme termín ve showroomu a pošleme vám potvrzení e-mailem.",
    },
    {
      number: 2,
      title: "Příprava materiálu",
      description:
        "Sestavíme balíček stěrky, nářadí a vzorky podle vašeho odstínu — vše připravené na den workshopu.",
    },
    {
      number: 3,
      title: "Den ve showroomu",
      description:
        "V malé skupině projdete přípravu podkladu, nanášení, broušení a finální úpravu na cvičné ploše.",
    },
    {
      number: 4,
      title: "Aplikace doma",
      description: "Na vlastní stěně to zvládnete sami — ",
      emphasis: "Vy",
      descriptionAfter:
        " — s postupem z workshopu a možností konzultace, když něco nejde podle plánu.",
    },
  ],
};

export const workshop = {
  title: "Workshop ve showroomu",
  lead:
    "Jeden den, malá skupina, reálné podmínky. Není to teorie — odcházíte s rukama, které už stěrku znají.",
  highlights: [
    "Showroom připravený jako reálná místnost",
    "Maximálně 6 účastníků na termín",
    "Materiály a nářadí k dispozici na místě",
    "Občerstvení během dne",
  ],
  takeHomeTitle: "Co si odnesete",
  takeHome: [
    "Jistotu v postupu od přípravy po finální vrstvu",
    "Vzorky odstínů pro rozhodnutí doma",
    "Checklist kroků pro vaši stěnu",
    "Kontakt na podporu po workshopu",
  ],
  terminTeaser: "Nejbližší volné termíny: říjen–listopad 2026 — kapacita se rychle plní.",
};

export const inspirace = {
  title: "Inspirace",
  subtitle: "Před a po — reálné stěny našich klientů (ilustrační ukázky).",
  filters: [
    { id: "vse", label: "Vše" },
    { id: "obyvak", label: "Obývák" },
    { id: "koupelna", label: "Koupelna" },
    { id: "chodba", label: "Chodba" },
  ] as const,
  items: [
    { id: "1", room: "obyvak", title: "Obývák — teplá písková stěna" },
    { id: "2", room: "koupelna", title: "Koupelna — bílá křída" },
    { id: "3", room: "chodba", title: "Chodba — antracitový pruh" },
    { id: "4", room: "obyvak", title: "Obývák — olivová hlína" },
    { id: "5", room: "koupelna", title: "Koupelna — šedá mlha" },
    { id: "6", room: "chodba", title: "Chodba — písková s dřevěnou lištou" },
  ] satisfies GalleryItem[],
};

export const faq = {
  title: "Časté dotazy",
  items: [
    {
      question: "Jak dlouho workshop trvá?",
      answer:
        "Počítejte s celým dnem, typicky 9:00–17:00 včetně pauz. Tempo přizpůsobujeme skupině — důležité je, aby každý stihl celý postup vyzkoušet.",
    },
    {
      question: "Jak velkou stěnu zvládnu sám?",
      answer:
        "Ve workshopu trénujete techniku na vzorku; doma zvládnete běžný obývací pokoj nebo koupelnu, pokud dodržíte postup. U větších ploch doporučíme rozdělení na etapy.",
    },
    {
      question: "Je stěrka vhodná do koupelny?",
      answer:
        "Ano, s vhodnou přípravou podkladu a správným finišem. Na workshopu projdeme specifika vlhkého prostředí a doporučené vrstvy.",
    },
    {
      question: "Pomůžete mi doma, když uvíznu?",
      answer:
        "Ano — po workshopu máte kontakt na konzultaci (telefon/e-mail). U složitějších situací domluvíme individuální podporu.",
    },
    {
      question: "Jak probíhá dodání materiálu?",
      answer:
        "Balíček připravíme podle zvoleného odstínu a rozměrů, které si domluvíte po workshopu. Doručení kurýrem nebo vyzvednutí ve showroomu — podle domluvy.",
    },
  ] satisfies FaqItem[],
};

export const kontakt = {
  title: "Rezervace workshopu",
  subtitle: "Napište nám — ozveme se s termíny a detaily.",
  showroomTitle: "Showroom",
  showroomAddress: "Showroom Stěrkaři\nPraha — přesná adresa bude doplněna\nVstup po domluvě",
  form: {
    name: "Jméno a příjmení",
    email: "E-mail",
    phone: "Telefon (nepovinné)",
    message: "Zpráva",
    preferredDate: "Preferovaný termín (nepovinné)",
    submit: "Odeslat rezervaci",
    success: "Děkujeme — brzy se ozveme.",
    error: "Odeslání se nepovedlo. Zkuste to prosím znovu.",
  },
};

export const footer = {
  ico: "IČO: 00000000",
  dic: "DIČ: CZ00000000",
  gdprLabel: "Ochrana osobních údajů",
  gdprHref: "#",
  social: {
    instagram: "https://instagram.com/",
    pinterest: "https://pinterest.com/",
  },
};
