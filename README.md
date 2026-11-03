# STĚRKAŘI. — sterkari.cz

Jednostránkový marketingový web pro český workshop stěrkových stěn (Next.js App Router, React, TypeScript, Tailwind CSS v4).

## Vývoj / Development

```bash
npm ci
npm run dev
```

Aplikace běží na **http://127.0.0.1:4321** (`dev` / `start` naslouchají jen na localhost).

**Cloud Agent / port forwarding:** použijte `npm run dev:cloud` nebo `npm run start:cloud` (`-H 0.0.0.0`). Hosted preview v `.cursor/environment.json` volá `start:cloud` po buildu.

Pro Cloud Agent Preview: pokud Preview hlásí `ERR_EMPTY_RESPONSE`, ověřte port **4321** v nastavení port forwardu a že běží `start:cloud`, ne výchozí `start`.

## Windows / Git Bash

- Spouštějte `npm` **jen uvnitř kořene repozitáře** (složka s `package-lock.json` projektu).
- Používejte `npm ci` a pak **`npm run dev`** nebo **`npm start`** (vazba na **127.0.0.1**) — otevřete **http://127.0.0.1:4321** v Edge nebo Chrome. **Ne** `npx next dev` (může stáhnout Next.js 16 mimo lockfile).
- Pokud Next/Turbopack hlásí lockfile v domovském adresáři (`C:\Users\…\package-lock.json` nebo `~/package-lock.json`), smažte ten omylem vytvořený soubor; kořen projektu je nastaven v `next.config.ts` (`turbopack.root`).

### Řešení problémů (curl 56 / connection aborted)

Pokud `curl http://127.0.0.1:4321/` spojí a pak spadne s **Recv failure: Connection was aborted** (curl 56):

1. Sledujte terminál s `npm run dev` při **prvním** requestu — compile/runtime chyba může proces ukončit.
2. Ověřte, že na portu **4321** běží jen jedna instance (`netstat` / Správce úloh).
3. Výchozí **`npm run dev`** už binduje **127.0.0.1** — nepoužívejte `-H 0.0.0.0` na Windows, pokud nepotřebujete síťový přístup (`dev:cloud`).
4. Zkuste **`npm run dev:webpack`** — na Next.js **15** (tento projekt) je dev server už Webpack; skript přidá `--webpack` automaticky od Next **16**, kde je výchozí Turbopack.
5. Pokud dev padá, ale produkce funguje: `npm run build && npm start` a testujte znovu — používejte webpack dev nebo produkční režim pro lokální preview.

## Windows / Git Bash

- Spouštějte `npm` **jen uvnitř kořene repozitáře** (složka s `package-lock.json` projektu).
- Používejte `npm ci` a pak `npm run dev` — **ne** `npx next dev` (může stáhnout Next.js 16 mimo lockfile).
- Pokud Next/Turbopack hlásí lockfile v domovském adresáři (`C:\Users\…\package-lock.json` nebo `~/package-lock.json`), smažte ten omylem vytvořený soubor; kořen projektu je nastaven v `next.config.ts` (`turbopack.root`).

### Řešení problémů (curl 56 / connection aborted)

Pokud `curl http://127.0.0.1:4321/` spojí a pak spadne s **Recv failure: Connection was aborted** (curl 56):

1. Sledujte terminál s `npm run dev` při **prvním** requestu — compile/runtime chyba může proces ukončit.
2. Ověřte, že na portu **4321** běží jen jedna instance (`netstat` / Správce úloh).
3. Zkuste **`npm run dev:local`** (jen localhost, bez `-H 0.0.0.0`) — Windows firewall někdy blokuje vazbu na všechna rozhraní.
4. Zkuste **`npm run dev:webpack`** — na Next.js **15** (tento projekt) je dev server už Webpack; skript přidá `--webpack` automaticky od Next **16**, kde je výchozí Turbopack.
5. Pokud dev padá, ale produkce funguje: `npm run build && npm start` a testujte znovu — používejte webpack dev nebo produkční režim pro lokální preview.

## Produkční build

```bash
npm ci
npm run build
npm start
```

## Animace a UI knihovny

- **GSAP** — `import gsap from "gsap"` v client komponentách (`"use client"`).
- **Lenis** — smooth scroll je zapnutý v `LenisProvider` (`src/components/LenisProvider.tsx`); vypíná se při `prefers-reduced-motion: reduce`.
- **React Bits** — registry je v `components.json`. Přidejte komponentu (TypeScript + Tailwind):

  ```bash
  npx shadcn@latest add @react-bits/SplitText-TS-TW
  ```

  Další komponenty a závislosti: [reactbits.dev](https://reactbits.dev/get-started/installation).

## Struktura

- `src/content/site.ts` — české texty a data sekcí
- `src/content/navigation.ts` — wordmark, navigace, CTA
- `src/components/` — Header, Footer, sekce, sticky mobilní CTA
- `src/app/api/contact/route.ts` — placeholder POST endpoint (log do konzole)

## Out of scope

Rezervační systém, platby, e-shop, CMS, autentizace a databáze nejsou součástí tohoto repozitáře.
