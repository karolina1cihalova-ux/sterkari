# STĚRKAŘI. — sterkari.cz

Jednostránkový marketingový web pro český workshop stěrkových stěn (Next.js App Router, React, TypeScript, Tailwind CSS v4).

## Vývoj / Development

```bash
npm ci
npm run dev
```

Aplikace běží na **http://127.0.0.1:4321** (dev server naslouchá na `0.0.0.0`).

Pro Cloud Agent Preview: pokud Preview hlásí `ERR_EMPTY_RESPONSE`, ověřte port **4321** v nastavení port forwardu.

## Windows / Git Bash

- Spouštějte `npm` **jen uvnitř kořene repozitáře** (složka s `package-lock.json` projektu).
- Používejte `npm ci` a pak `npm run dev` — **ne** `npx next dev` (může stáhnout Next.js 16 mimo lockfile).
- Pokud Next/Turbopack hlásí lockfile v domovském adresáři (`C:\Users\…\package-lock.json` nebo `~/package-lock.json`), smažte ten omylem vytvořený soubor; kořen projektu je nastaven v `next.config.ts` (`turbopack.root`).

## Produkční build

```bash
npm ci
npm run build
npm start
```

## Struktura

- `src/content/site.ts` — české texty a data sekcí
- `src/content/navigation.ts` — wordmark, navigace, CTA
- `src/components/` — Header, Footer, sekce, sticky mobilní CTA
- `src/app/api/contact/route.ts` — placeholder POST endpoint (log do konzole)

## Out of scope

Rezervační systém, platby, e-shop, CMS, autentizace a databáze nejsou součástí tohoto repozitáře.
