# DS Proposal: `<Hero size>` prop

**Target**: `@poukai-inc/ui` `<Hero>` molecule
**Status**: Draft (consumer-side authored, awaiting DS team review)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-17
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) revision 2026-05-17 (§2 Section 2, §6.1)
**Companion consumer-side context**: [`meta/specs/pages/home-amendment-illustration-and-density.md`](../../specs/pages/home-amendment-illustration-and-density.md) §4.2 (acceptance criteria), [`meta/proposals/home-illustration-and-title-softening.md`](../home-illustration-and-title-softening.md) §3 Option A (round-1 research)

---

## Problem

The current `<Hero>` molecule renders its `title` slot at the DS display scale (`--fs-tagline`, `clamp(2.25rem, 1.5rem + 3.5vw, 4.25rem)` — 36px floor to 68px ceiling). On the pouk.ai homepage `/`, this scale reads as visually confrontational against the brand's restraint-as-credential intent — the title overpowers the surrounding StatusBadge, lede, and CTA, and produces a "brutalist" first impression at typical 13–14" laptop widths (1440×900) that conflicts with the page's "doorway, not destination" framing.

The consumer-side amendment evaluated three levers: a new DS-owned size variant (Lever A — this proposal), a finer-grained `titleScale` override prop (Lever B — explicitly rejected as wrong-shape, since it pushes typography decisions out of the DS into the consumer), and a content-layer rewrite (Lever C — explicitly rejected by Arian: "copy is fine, font-size is just too big"). The site composition forbids any site-side override of the Hero's internal type scale or rhythm — that is DS contract territory. **Therefore the only remaining path is a DS contract change**: add a size variant on `<Hero>` that scales the title clamp down while leaving the rest of the molecule's contract untouched.

## Proposed API

Add a new optional prop on `<Hero>`:

```tsx
<Hero
  size="intimate"        // "display" (default) | "intimate"
  status={...}
  title={...}
  lede={...}
  cta={...}
/>
```

- **Prop name**: `size`
- **Type**: `"display" | "intimate"`
- **Default**: `"display"`
- **Allowed values**: `"display"` (preserves current behavior on every existing consumer — zero regression), `"intimate"` (lowers the title clamp range).
- **Semver impact**: minor version bump per ADR-0003 (prop addition, no removal, no rename, default preserves prior behavior).

The recommended new token added to `tokens.css`:

```css
--fs-tagline:          clamp(2.25rem, 1.5rem + 3.5vw, 4.25rem);  /* 36–68px — unchanged */
--fs-tagline-intimate: clamp(2rem,    1.25rem + 2.5vw, 3.25rem); /* 32–52px — new */
```

The `intimate` range is ~75–80% of the `display` range at each endpoint (32/36 ≈ 0.89 at the floor; 52/68 ≈ 0.76 at the ceiling), with a flatter `vw` slope so the scale grows less aggressively across viewport widths — the "intimate" register is meant to feel deliberately controlled at any size, not just smaller.

## Behavior

What changes at `size="intimate"`:

- **Title font-size token**: swaps from `var(--fs-tagline)` to `var(--fs-tagline-intimate)`.
- **All other Hero internal rhythm**: **unchanged**.
  - `--space-6` (24px) status→title gap — unchanged.
  - `--space-8` (32px) title→lede gap — unchanged.
  - lede→cta DS-internal gap — unchanged.
  - Rationale: the inter-slot rhythm is structural (it defines what a `<Hero>` *is* compositionally); only the title's visual mass should respond to the size prop. Scaling the gaps proportionally would over-engineer the variant and couple two independent concerns. The designer-side instinct (carried forward from the round-1 research at `meta/proposals/home-illustration-and-title-softening.md` §4.2 "Open question for DS") is: **leave the gaps alone**. A smaller title with the same gaps will already feel less brutalist.
- **`--hero-max` text column cap (38rem / 608px)**: **unchanged**.
- **Title font family** (`--font-serif` / Instrument Serif): **unchanged**.
- **Title color** (`--fg`): **unchanged**.
- **`<em>` accent rendering inside title**: **unchanged**. The pouk.ai homepage relies on Instrument Serif italic on `<em>AI</em>` being preserved verbatim; the size variant must not strip or restyle the `<em>`.
- **StatusBadge, Button, lede typography**: **unchanged**. The size prop scopes to the title slot's font-size only.

What does NOT change at `size="display"`: literally nothing. The default preserves the molecule's current rendered output byte-for-byte. Every existing consumer of `<Hero>` continues to work without code change.

## Cross-page applicability

This is a **universal contract change** to `<Hero>`, not a home-only override. Other pouk.ai routes (`/roles`, `/principles`, `/why-ai`) may consume `size="intimate"` once their own composition recipes adopt it. `/principles` is the most likely next consumer (a lower-density register suits a list-of-tenets page); `/roles` and `/why-ai` are open per their own amendments.

No page is forced to opt in. Consumers outside the pouk.ai site (any future `@poukai-inc/ui` consumer) can ignore the prop entirely; the default preserves their current behavior.

The variant name (`intimate`) carries editorial weight that may not generalize to every future consumer — see "Open questions" below.

## Token compliance

- New clamp values must be defined as a DS-owned token (`--fs-tagline-intimate` recommended). No raw px or rem in component CSS — the `<Hero>` molecule's CSS module reads the token by name, just as it reads `--fs-tagline` today.
- Token addition is a DS minor version bump per ADR-0003.
- No new `--space-N` tokens introduced (none needed; rhythm is unchanged).
- No new color, radius, or motion tokens introduced.
- The DS continues to own the token file exclusively; the site never authors or overrides.

If `@poukai-inc/poukai-ui` maintainers prefers a different token naming convention (e.g., `--fs-h1-intimate` for consistency with a wider type-scale taxonomy, or a generic `--fs-display-2` keyed by step rather than register), the consumer-side has no preference — the value matters, the name is DS's to decide.

## Accessibility

- **Minimum font size at smallest viewport**: the `intimate` clamp floor is **32px** (`2rem`). This is well above the WCAG-recommended minimum for headlines and remains readable at the smallest viewport widths (~320px). The display register's floor (36px) is preserved as the default; consumers who depend on the larger floor get it for free.
- **Heading semantics**: `<Hero>` continues to render its title as an `<h1>` (or whatever heading level the molecule currently renders). The size variant is a visual change, not a semantic one. No ARIA changes required.
- **Reading-order and tab-order**: unchanged.
- **High-contrast modes**: token-driven; no impact.

## Motion / hydration

- **No motion implications.** The size variant changes only font-size; no animation, no transition, no entrance choreography. The DS's `:root !important` `prefers-reduced-motion` block continues to govern all motion on the page, unchanged.
- **No hydration implications.** `<Hero>` continues to render as static HTML; consumers using it inside Astro `.astro` files without `client:*` directives (e.g., the pouk.ai homepage's `HomeHero.tsx` wrapped via React, statically rendered at build time) get the new prop for free without introducing any JavaScript runtime.
- **Zero-JS contract preserved.** The variant is CSS-only at the consumer surface.

## Trade-offs

1. **Introduces a non-default size that future Hero consumers must consider.** Every new page that uses `<Hero>` now has a choice to make. Mitigation: the default is `"display"`, and the design guidance in `llms-full.txt` can state explicitly that `"intimate"` is opt-in for low-density doorways (homepages, principle lists), while `"display"` is the standing default for product, marketing, and feature pages.
2. **Couples the DS to a brand-side editorial decision.** Adding a variant named for a register the brand cares about ("intimate" vs. "display") embeds a specific editorial vocabulary into the DS contract. A future consumer who wants a different density vocabulary may find the variant names awkward. Mitigation: variant names can be renamed in a future major version if a clearer taxonomy emerges; the underlying capability (a smaller title clamp) is the durable contract.
3. **Variant name ("intimate") may not generalize.** "Intimate" is editorial; "compact" or "condensed" would be more functional. Designer-side preference is `"intimate"` because the name signals *intent* (a quieter Hero) rather than *mechanism* (a smaller Hero), but `@poukai-inc/poukai-ui` maintainers' call. See "Open questions" #1.
4. **A future need for a third register (e.g., `"display-large"`, `"compact"`) is not pre-empted.** This proposal adds exactly one new variant. If a third register is needed later, it can be added as a non-breaking minor; this proposal does not need to anticipate it.

## Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Preferred prop name and variant taxonomy.**
   - `size="display" | "intimate"` (designer recommendation — names *intent*).
   - `size="default" | "compact"` (more functional naming).
   - `density="display" | "intimate"` (separate prop name, frees `size` for a future "small | medium | large" axis).
   - `scale="lg" | "md"` (matches `<Stat size="md" | "lg">` convention but inverts the relationship — `Stat`'s `lg` is bigger; `Hero`'s default already feels `lg`).
   Designer-side preference is `size="display" | "intimate"` — it composes naturally with the existing DS pattern (`<Stat size="md" | "lg">`) and the variant names carry editorial weight that other DS docs already use ("display scale", "editorial restraint"). But this is `@poukai-inc/poukai-ui` maintainers' call, not the consumer's.

2. **Should `intimate` also tune the inter-slot gaps?** Consumer-side recommendation is **no** — leave `--space-6` (status→title) and `--space-8` (title→lede) unchanged. A smaller title with the same gaps still composes correctly; the gaps are structural, not scale-derived. But if `@poukai-inc/poukai-ui` maintainers' visual eye disagrees after seeing the variant in Ladle, this is renegotiable.

3. **Should the size variant also expose a multiplier or token override?** The round-1 research (Lever B) explicitly rejected a `titleScale` override prop as wrong-shape — it pushes typography out of the DS. We recommend `@poukai-inc/poukai-ui` maintainers also reject any consumer-side token-override slot here; the variant approach (closed set of named registers) is the right shape long-term.

4. **Future variants.** Should this proposal land with just `"intimate"`, or should `@poukai-inc/poukai-ui` maintainers also pre-emptively introduce `"display-large"` (a *louder* register for landing-page A/B tests, founder personal pages, etc.)? Designer-side recommendation: ship `"intimate"` alone, add others on demand. YAGNI.

5. **Token naming.** `--fs-tagline-intimate` is the designer-suggested name. If the DS prefers a step-based naming (`--fs-tagline-2`, `--fs-tagline-step-down`) or a semantic-scale name (`--fs-h1-intimate`, `--fs-display-intimate`), no consumer-side preference. The value range matters, the name does not.

## Adoption plan

1. **DS-side accept**: `@poukai-inc/poukai-ui` maintainers reviews this proposal. Accepts as-is, requests revisions, or rejects. If rejected, consumer-side amendment ([`meta/specs/pages/home-amendment-illustration-and-density.md`](../../specs/pages/home-amendment-illustration-and-density.md) §6) reopens and Arian re-decides between Lever B (rejected here) and Lever C (rejected by Arian).
2. **DS-side ship**: `@poukai-inc/poukai-ui` maintainers implements the prop + token, adds Ladle stories for both `"display"` and `"intimate"` variants (ADR-0005), adds Playwright CT + axe-core tests (ADR-0004), authors a changeset for a minor bump (ADR-0003), merges to `main`, publishes the new minor of `@poukai-inc/ui` to GitHub Packages (ADR-0006).
3. **DS-side documentation**: update `dist/llms-full.txt` to document the new prop, the new token, and the editorial guidance (`"intimate"` is opt-in for low-density doorways; default `"display"` remains the standing register). This is part of the same DS PR — `llms-full.txt` is hand-authored by `poukai-design` and is the LLM contract.
4. **Site bumps DS dep**: pouk.ai site bumps `@poukai-inc/ui` to the new minor (e.g., `0.6.1 → 0.7.0`). No code change required by the bump itself; the default preserves existing behavior on every page.
5. **Site consumes**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) revision 2026-05-17 (already `Approved` on the design side, waiting on this DS-gap) moves to `Built`. Engineer sets `<Hero size="intimate">` in `HomeHero.tsx`. PR ships.
6. **Subsequent pages adopt**: as `/roles`, `/principles`, `/why-ai` receive their own PM amendments and composition revisions, each may independently opt into `size="intimate"`. No global rollout; per-page decision.

## Out of scope for this proposal

- The companion DS-gap for the illustration slot ([`hero-illustration-slot.md`](./hero-illustration-slot.md)) — filed separately. Independent contract change; lands on its own merits.
- The `<Button size>` API question — `<Button>` already exposes `size="sm" | "md" | "lg"` in the public DS API at `@poukai-inc/ui@0.6.1` per `dist/llms-full.txt` ("Min heights: size='sm' 32px, size='md' 44px, size='lg' 52px"). The consumer-side composition uses `<Button size="sm">` directly. No DS change needed.
- Dark-mode behavior of the new token. The DS palette inverts cleanly per its "never pure edges" principle; the new token resolves to the same color and font as `--fs-tagline` at any palette and inherits color from `--fg`. No dark-mode-specific work required for this proposal.
- Asset production for the pouk.ai homepage illustration (out of designer's lane; Arian owns).
- Cross-page rollout scheduling for `/roles`, `/principles`, `/why-ai` (PM-side decision, per consumer-side amendment §9).
