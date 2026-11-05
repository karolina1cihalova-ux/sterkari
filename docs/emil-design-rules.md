# Emil design rules (sterkari.cz)

Reference for agents and humans. Based on [emil-design-eng](https://github.com/emilkowalski/skills).

## Motion

- **Often (nav, scroll):** no or minimal animation.
- **Buttons:** `:active` scale ~0.97; hover = shadow/lift, not big scale.
- **Never** `transition: all` — list properties explicitly.
- **Easing:** ease-out for enter/UI; custom curves over weak defaults.
- **Respect** `prefers-reduced-motion`.

## Anti–AI-slop

- No emoji icons, no identical 3-card feature grids, no blur-on-enter, no stagger every heading.
- Terracotta `#c45c26` as **accent**, not default filled hero buttons.
- Header stays **monochrome** (black/white).

## Layout (sterkari)

- **Editorial left align:** headlines, body, CTAs, media start-aligned in shared column (`max-w-6xl`, body ~65ch).
- Header: logo left, nav/CTA right unchanged.

## Typography

- DM Sans, latin-ext; clear hierarchy; tabular nums for prices if added later.

## Copy

- Czech/EN mix is OK where it fits the brand voice.
