# DS Proposal: `<Hero entrance>` prop — staggered CSS-only reveal on load

**Target**: `@poukai-inc/ui` `<Hero>` molecule
**Status**: Draft (consumer-side authored)
**Proposing consumer**: pouk.ai site
**Proposing date**: 2026-05-17
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) §4 — current composition locks out Hero entrance animation citing R-079 (zero-JS contract); this proposal demonstrates the lock is on a faulty premise (CSS-only achieves the effect) and adds the capability to the DS.
**Source-of-truth precedent**: the pre-cutover holding page (`public/index.html`, deleted in commit `9e56cdb`) shipped this exact motion as pure CSS keyframes — zero JS, zero IntersectionObserver, fully gated by `prefers-reduced-motion`. The DS lost the capability when the page was ported to `<Hero>`; this proposal restores it as a first-class DS feature.

---

## Problem

`<Hero>` renders status / title / lede / CTA as a static block on first paint. The pre-cutover holding page rendered the same block with a **staggered top-down reveal** — each element rose 8–12px with a fade-in, 150ms apart, ~1.1s total. The motion gave the page a sense of arrival without performing.

The current site composition §4 documents this lockout citing R-079 (zero client-side JS on `/`): *"Hero entrance animation would force `client:visible`, breaking R-079."* That premise is **wrong**. The original implementation used pure CSS `@keyframes` + `animation-delay` + `animation-fill-mode: both` — no JS, no IntersectionObserver, no hydration directive. The effect runs on load via the browser's animation engine, not the React runtime.

This proposal adds the capability back to the DS as an opt-in `<Hero>` prop.

---

## Proposed API

```tsx
<Hero
  entrance="stagger"        // undefined (default — no animation) | "stagger"
  status={...}
  title={...}
  lede={...}
  cta={...}
/>
```

Default `entrance={undefined}` preserves current behavior — zero regression for every existing consumer. `entrance="stagger"` opts into the staggered reveal described below.

---

## Behavior

When `entrance="stagger"` is passed:

| Slot | Animation | Duration | Delay | Rise |
|---|---|---|---|---|
| status | `rise-8` + fade | 600ms | 0ms | 8px |
| title | `rise-12` + fade | 700ms | 150ms | 12px (emphasis) |
| lede | `rise-8` + fade | 600ms | 300ms | 8px |
| cta | `rise-8` + fade | 600ms | 450ms | 8px |

Total animation span: ~1.05s end-to-end. CSS keyframes:

```css
@keyframes rise-8  { from { opacity: 0; transform: translateY(8px);  } to { opacity: 1; transform: translateY(0); } }
@keyframes rise-12 { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
```

`animation-timing-function` uses an existing DS easing token (e.g., `--easing` from the pre-cutover page, or DS team's pick). `animation-fill-mode: both` is required — the initial state (`opacity: 0`) must apply before the delay elapses, otherwise the elements flash at full opacity then animate.

---

## Cross-page applicability

Universal. Any consumer of `<Hero>` may opt into the staggered entrance. The site's brand register suits the motion at doorway pages (`/`); editorial pages (`/why-ai`, `/principles`) and grid pages (`/roles`) may also adopt it once their compositions decide.

**Not bundled with `size="intimate"`**. Density and motion are orthogonal — the existing `size` variants stay rhythm-only, and `entrance` stays motion-only.

---

## Token compliance

- Animation durations + delays: prefer existing DS duration tokens if available (e.g., `--dur-fast` 180ms, `--dur-mid` 400ms, `--dur-slow` 600ms). Otherwise the DS adds tokens for these specific stagger values (`--dur-rise`, `--dur-stagger-step`, etc.) — DS team's call.
- Translation values (8px, 12px): could be spacing-token-aligned (`--space-2` = 8px, `--space-3` = 12px) or kept as raw px in the keyframe definitions. Designer audit recommends keeping in keyframes — these are visual-motion micro-distances, not layout rhythm.

No new public tokens required if the DS exposes the existing duration tokens. New internal-only tokens if the team prefers.

---

## Accessibility

- **`prefers-reduced-motion: reduce`**: animations must be disabled. The DS already gates motion at the `:root !important` level in `tokens.css`; verify the new keyframes inherit this gate. If they don't, add `@media (prefers-reduced-motion: reduce) { ... animation: none; }` to the Hero CSS.
- **No motion-induced layout shift**: `animation-fill-mode: both` ensures the initial `translateY` state is applied immediately, not after a flash at final position. CLS contribution: zero.
- **No focus-trap or interaction lock during animation**: elements remain focusable and interactive immediately on load. The animation is purely visual.

---

## Motion / hydration

- **R-079 zero-JS contract preserved.** All keyframes are CSS-defined; no React hooks, no IntersectionObserver, no `client:*` directive needed. The Hero molecule stays static-render-compatible.
- The composition's current §4 motion-choreography section explicitly lists Hero entrance animation as "locked out" because it "would require a `client:*` directive." This proposal demonstrates that premise is incorrect, and the site composition is updated alongside (out of scope here; tracked in the site repo).
- **Animation runs on first paint of the document.** No event handlers, no `useEffect`. The browser's animation engine handles the schedule via `animation-delay`.

---

## Trade-offs

1. **Adds API surface to `<Hero>`.** One more prop for consumers to evaluate. Mitigated by: `undefined` default preserves silence; opt-in is explicit.
2. **Opinionated stagger.** The exact delays/durations/translations are baked into the DS — consumers can't tune them. Mitigated by: tuning is the DS team's job; consumers needing different motion are filing a different proposal.
3. **Motion-induced reading delay.** ~1.05s for the last element (CTA) to settle. A user scrolling immediately may see motion in their peripheral vision. Acceptable at the brand's restraint register; the CTA is still interactive immediately (only its visual `opacity` + `transform` animate).
4. **No `entrance="fade"` variant proposed.** Just `"stagger"`. If future consumers want a simpler fade-only entrance, add as a separate variant in a follow-up.

---

## Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Variant name(s)**: `entrance="stagger"` vs `motion="stagger"` vs `reveal="stagger"`? `entrance` reads as a noun for the behavior; `motion` could expand to other motion variants in the future. DS team's call.
2. **Should the wordmark in `<SiteShell>` also stagger?** The holding-page pattern animated the header wordmark (`.reveal-1`, delay 0ms) before the Hero status (`.reveal-2`, delay 150ms). That's a `<SiteShell entrance>` proposal — out of scope here, filed separately if desired.
3. **Footer fade**: the holding page also faded the footer (`.reveal-5`, 600ms delay). That's also `<SiteShell>` scope. Out of scope here.
4. **Tokens vs raw values**: keep durations as inline keyframe values, or expose `--dur-hero-stagger-step`, `--dur-hero-rise`, etc.? Latter allows brand-level retuning later without DS patch; former is simpler.
5. **Easing**: the holding page used `var(--easing)` — what's the current canonical DS easing token for entrance motion? Or add `--easing-entrance` if no existing fit.

---

## Adoption plan

1. `@poukai-inc/poukai-ui` maintainers accept proposal (or counter-propose).
2. DS minor bump shipping `<Hero entrance>` prop + keyframes (`0.8.0` or sequenced with #42 + #44 patches per maintainer call). API addition with preserved default = minor per ADR-0003.
3. pouk.ai site bumps DS dep.
4. pouk.ai composition `meta/compositions/pages/home.md` §4 motion choreography revised: correct the R-079 misattribution and add the entrance prop to the Hero spec.
5. Engineer flips `<Hero entrance="stagger">` in `src/components/HomeHero.tsx` — single-prop change in the same PR that consumes other pending DS gaps (`#42` `<Button size="compact">`, `#44` rhythm tightening).

---

## Out of scope

- SiteShell wordmark / footer entrance animation. Filed separately if Arian wants the full-page parity restoration.
- Scroll-triggered motion. R-079 still holds — IntersectionObserver-driven reveals remain locked out.
- Per-page entrance variants (different stagger pattern on `/why-ai` vs `/`). Universal default is the proposal; per-page tuning is a future concern.
- Animation on mouse-driven interactions (hover, click). Existing DS link-hover transitions already cover those.

---

## Source-of-truth precedent

Reconstructed from `public/index.html` at commit `9e56cdb^` (immediately before the holding page was deleted in the multi-page cutover):

```css
@keyframes rise-8  { from { opacity: 0; transform: translateY(8px);  } to { opacity: 1; transform: translateY(0); } }
@keyframes rise-12 { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

.reveal   { animation-timing-function: var(--easing); animation-fill-mode: both; }
.reveal-1 { animation-name: rise-8;  animation-duration: 600ms; animation-delay: 0ms;   }  /* wordmark */
.reveal-2 { animation-name: rise-12; animation-duration: 700ms; animation-delay: 150ms; }  /* h1 title */
.reveal-3 { animation-name: rise-8;  animation-duration: 600ms; animation-delay: 300ms; }  /* lede */
.reveal-4 { animation-name: rise-8;  animation-duration: 600ms; animation-delay: 450ms; }  /* CTA */
.reveal-5 { animation-name: fade-in; animation-duration: 500ms; animation-delay: 600ms; }  /* footer */
```

The pattern shipped under R-079 zero-JS without issue — this is direct evidence that CSS-only entrance animation does not require a hydration directive. The current composition §4 lockout was authored on the faulty premise that entrance animation requires JS; this proposal corrects the premise and restores the capability as a DS-owned, opt-in `<Hero>` feature.
