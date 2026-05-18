# DS Proposal: `--content-max-bleed` / `<Hero bleed="full">` — editorial full-bleed permission

**Target**: `@poukai-inc/ui` layout tokens + `<Hero>` molecule (additive)
**Status**: Filed (consumer-side proposal routed to DS team)
**Tracked**: [`poukai-inc/poukai-ui#57`](https://github.com/poukai-inc/poukai-ui/issues/57), filed 2026-05-18 by Arian (founder)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-18
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/about.md`](../../compositions/pages/about.md) v2 §6.5
**Related**: [`section-surface-rhythm.md`](./section-surface-rhythm.md) — sibling proposal flagged this in §6 as the "natural next proposal" after surface-rhythm; this file is that next proposal.
**DS version observed**: `@poukai-inc/ui@0.9.0`

---

## 0. Framing

The DS contract today caps every page surface at `--content-max` (1024px). The rule is explicit: `llms-full.txt` line 60: *"Maximum width of the main content column. NEVER exceed in the main column layout."* It is one of the DS's most consistently-enforced contracts across every shipped molecule and page composition.

The rule was authored before editorial register pages were in scope. Editorial register on the web routinely uses **full-bleed bands** — sections that extend horizontally to the viewport's edges (or the viewport's `--page-pad` edges) — as a compositional move that signals "this is a moment of editorial intent." Apple's company pages, Stripe's brand pages, the New York Times' visual investigations, MoMA's collection pages, and most editorial-quality marketing sites lean on full-bleed bands routinely.

`/about` v2 needs one. The portrait band's whole register relies on the orange surface running to the viewport edges — without it, the band reads as a rectangle in the middle of the page (the rectangle and band registers are *fundamentally different compositions*).

This proposal asks the DS to admit a **permission**, not a default: components and bands opt-in to full-bleed via an explicit prop or layout token. Default behavior across the existing molecules stays unchanged.

---

## 1. The composition gap

### Where this need appears

1. **`/about` v2 portrait band** (active driver). Without full-bleed, the orange band caps at `--content-max` and the gesture's "this is the brand's editorial moment" reading collapses to "an orange card sits in the middle of the page."
2. **Future editorial pages** (any band-pattern page per the register-lead framing). A future `/manifesto`, `/values`, customer-story page, or band-section variant of an existing page.
3. **Surface-rhythm proposal companion** ([`section-surface-rhythm.md`](./section-surface-rhythm.md)). Sectional rhythm via `--surface-section` reads stronger when bands span viewport width. Pattern A in that proposal can ship without bleed (sections bleed inside `--content-max`); Pattern A + bleed is the full editorial expression.
4. **Cross-consumer (speculative)** — any other DS consumer doing editorial marketing-site composition.

### What consumers currently do (in the DS contract's absence)

- **Workaround A**: ship the band capped at `--content-max`. The band reads as a card; the editorial gesture collapses.
- **Workaround B**: wrap the band in a site-side full-bleed div outside `.site-page`, using `width: 100vw; margin-left: calc(50% - 50vw);` or equivalent. Violates `.site-page`'s `max-width` contract structurally (the band escapes the container). Engineer-side gymnastics; ADR-0002 (every CSS value resolves to a token) gets fudged because `50vw` and `calc(50% - 50vw)` are not token-derived.
- **Workaround C**: move the band out of `.site-page` entirely, into the `<BaseLayout>` slot or a custom layout. Complex; requires changing layout primitives the DS doesn't currently parameterize.

None scale cleanly. Each future band consumer re-authors the bleed scaffolding.

---

## 2. Proposed contract

Two complementary additions; the DS picks how to expose them.

### Addition A — `<Hero bleed="full">` prop

Add a `bleed` prop to `<Hero>` that, when `"full"`, causes the molecule to render at viewport-width while keeping its **inner content** capped at `--content-max`.

```tsx
<Hero
  bleed="full"        // NEW — default: "none"
  surface="warm-accent"  // NEW — see color-warm-accent proposal
  illustration={<Portrait />}
  title={…}
  lede={…}
/>
```

**Behavior**:
- Default (`bleed="none"` or omitted): `<Hero>` renders at its current width (capped at `--content-max` by its parent `.site-page`). Zero regression.
- `bleed="full"`: `<Hero>`'s outermost container renders at `100vw` minus padding. The inner content row (text column + illustration column, each at their existing max-widths) centers inside the bled container. The surface (background color, image) fills viewport-width.

**Semver impact**: minor version bump per ADR-0003 (additive prop; default preserves behavior).

### Addition B — `--content-max-bleed` layout permission token

Add a layout permission token that any site-side composition can consume to opt into full-bleed for sections (not just `<Hero>`).

```css
:root {
  --content-max-bleed: 100vw; /* or: calc(100vw - 0) per DS picks */
}
```

**Behavior**: site-side compositions reference the token in their CSS to declare "this band opts into full-bleed." The DS doesn't enforce; the token names the permission. The CSS pattern (e.g., `margin-inline: calc(50% - 50vw);` or modern CSS `width: 100vw; margin-inline: calc(50% - 50vw);`) is documented in `llms-full.txt` as the canonical implementation.

**Semver impact**: patch or minor — additive token, no behavior change in DS components.

### Designer-side recommendation

Ship **both** in the same minor:
- Addition A (`<Hero bleed="full">`) for the canonical `/about` v2 case + any future Hero-band composition.
- Addition B (`--content-max-bleed`) as the layout permission for site-side compositions that don't fit `<Hero>`'s shape (e.g., a band-only molecule, a recessed section that wants bleed without a Hero overlay).

Together they cover the full editorial-band design space without forcing every band-pattern page through `<Hero>`.

---

## 3. Behavior on the existing molecules

What this proposal does **not** change:

- `<Hero>` default: `bleed="none"`. The current single-column or two-column layout inside `--content-max` remains the default. Every existing `<Hero>` consumer (`/`, `/why-ai`, `/roles`, `/principles`) works without code change.
- All other molecules (`<RoleCard>`, `<Principle>`, `<FailureMode>`, `<Stat>`, `<StatusBadge>`, `<Button>`, `<SiteShell>`): no `bleed` prop. They stay capped at their existing widths. The `--content-max` rule continues to apply universally to listing and CTA primitives.
- `<SiteShell>`: already bleeds (its header and footer are 100dvh-anchored chrome that already spans viewport width per `--page-pad`). No change.
- `.site-page` site-side wrapper: continues to cap content at `--content-max`. A bleed band sits *outside* `.site-page` or escapes it via the layout pattern; default flow is unchanged.

---

## 4. Composition rules (proposed for `llms-full.txt`)

- **`bleed="full"` is opt-in.** Consumers must declare it explicitly. Default behavior is `--content-max` cap.
- **At most one bleed band per page**, initially. (As more editorial pages adopt the pattern, the cap may relax to "no more than two" or "bands must alternate with non-bled sections" — TBD when a real consumer surfaces the need.)
- **Bled bands must declare a `surface`** (background color or image). A bleed band with no surface is invisible — it's a wider empty container, which doesn't make sense.
- **Inner content stays at `--content-max`.** The bleed extends the *surface*, not the content. A bleed band with text spanning 1800px would read as a wall of unreadable text; the inner content cap protects readability.
- **Vertical padding inside bled bands**: `--space-24` (96px) minimum at desktop. Bled bands need generous internal breathing or the bleed reads as accidentally-tall rather than deliberately-spacious.
- **Bled bands MAY carry**: a background color (e.g., `--bg-warm-accent`), a recessed surface (e.g., `--surface-section` if the surface-rhythm proposal also lands), or a background image. They MAY NOT carry hairline borders left/right (the bleed extends to viewport edges; left/right hairlines would imply a container).

---

## 5. Accessibility considerations

- **WCAG 1.4.10 (Reflow)**: full-bleed bands on small viewports (320px wide) reflow naturally — the band's `100vw` is `320px`, content reflows inside. No horizontal scroll. Designer-side note: the band's internal padding (`--space-24`) is comfortable at 320px; the band collapses to single-column at narrow viewports as `<Hero>` already does.
- **WCAG 1.4.4 (Resize text)**: bleed bands don't impede text resize. The band's surface scales with viewport; text inside scales with browser zoom independently.
- **WCAG 2.4.3 (Focus Order)**: a bleed band's internal focus order is the same as any DS molecule's — focus moves through interactive elements in DOM order. Bleed is a visual layout decision, not a focus-flow change.
- **Landmark roles**: a bleed band rendered as `<section>` or `<aside>` carries its expected ARIA semantics. The bleed doesn't introduce new landmark roles.

---

## 6. Trade-offs

1. **Layout primitive becomes more complex.** `<Hero>` gains a `bleed` prop on top of `size`, `entrance`, `illustration`, `surface`. The molecule's API surface grows. **Mitigation**: each prop is optional with a sensible default; consumers who don't need bleed never touch it. The molecule's type signature expands by one prop.
2. **CSS implementation can vary by browser.** Modern CSS (`100vw - calc(...)`, `margin-inline`, etc.) is well-supported but has edge cases (scrollbar-width affecting `100vw`, particularly on Windows browsers). **Mitigation**: the DS picks the canonical implementation pattern and tests it; `llms-full.txt` documents browser-support caveats.
3. **The DS commits to bleed semantics across browsers.** Once bleed lands, the DS team owns the bleed CSS for all consumers. **Mitigation**: the implementation is small (a few CSS rules); maintenance cost is low.
4. **Possible misuse**: consumers might apply `bleed="full"` to non-band Heroes ("my Hero looks better at viewport width") and lose readability. **Mitigation**: composition guidance documents bleed is for editorial bands with surfaces; consumers without a surface have no reason to bleed.
5. **Drift risk**: once one page bleeds, second and third pages may want to. The "at most one per page" cap is the discipline guard. **Mitigation**: composition guidance + per-page review.

---

## 7. Adoption plan

1. **DS-side accept / revise / reject** the proposal. Decide between Addition A only, Addition B only, or both. Pick canonical CSS implementation for bleed.
2. **DS-side ship**: add the prop (Addition A) and/or the token (Addition B). Add Ladle stories demonstrating bleed at three breakpoints (mobile collapse, tablet, desktop). Add Playwright CT tests verifying bleed extends to viewport width and inner content caps at `--content-max`. Update `dist/llms-full.txt` with composition rules. Add changeset.
3. **Site bumps DS dep**: pouk.ai bumps `@poukai-inc/ui` to the new minor.
4. **`/about` v2 composition revision** consumes the bleed prop (alongside `surface="warm-accent"` from the warm-accent proposal and the `<Hero illustration>` slot already filed).
5. **Subsequent pages adopt**: per their own revision cadences.

---

## 8. Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Addition A only, Addition B only, or both?** Designer-side recommends both. Addition A covers the canonical Hero-band case; Addition B opens bleed to non-Hero compositions. DS picks.
2. **Canonical CSS pattern.** Several modern patterns exist for full-bleed:
   - `width: 100vw; margin-left: calc(50% - 50vw);` (traditional, works inside container)
   - `margin-inline: calc(50% - 50vw); width: 100vw;` (modern, logical properties)
   - `width: 100%; max-width: 100vw; padding-inline: var(--page-pad);` (less aggressive)
   - CSS Grid `subgrid` or `display: contents` patterns (newest, edge-case browser support)
   DS picks the pattern. Designer-side recommends the second option (modern logical properties + 100vw width).
3. **Scrollbar-width handling.** On platforms with always-visible scrollbars (some Windows browsers), `100vw` includes the scrollbar width, causing `bleed="full"` to overflow horizontally by ~15px. Mitigations: `width: calc(100vw - var(--scrollbar-width, 0px));` or `overflow-x: hidden` on `html`. DS picks.
4. **`bleed` values: just `"full"`, or `{"none", "full", "page-pad"}`?** Designer-side stance: ship `{"none", "full"}` for v1. A `"page-pad"` variant (extends to viewport padding but not edges) is a different shape; defer until a real consumer surfaces.
5. **Should `<Hero bleed="full">` automatically apply `surface=` styling, or are bleed and surface orthogonal?** Designer-side stance: orthogonal. A consumer with `bleed="full"` but no `surface=` gets an invisible-wider container (which they probably misconfigured); a consumer with `surface=` but no `bleed=` gets a colored section capped at `--content-max` (a legitimate variant). The two props compose; neither implies the other.
6. **Naming.** `bleed` is the designer-side recommendation. Alternatives: `width="full"` (overloaded — width usually means content width), `fullBleed` (boolean, camelCased — fine but less expressive), `layout="bleed"` (groups with future layout variants — good if more variants emerge). DS picks.
7. **Inner content cap.** Designer-side recommends `--content-max` for inner content (existing). Should bleed bands optionally take a wider inner content cap? Stance: no for v1 — content stays at `--content-max` for readability; bleed extends surface only.

---

## 9. Out of scope

- Variants of bleed beyond `"none"` and `"full"` (e.g., `"page-pad"`, `"half"`, asymmetric). Future proposals if real consumers surface.
- A `<Band>` or `<EditorialBand>` molecule that ships bleed by default. The `/about` v2 composition uses `<Hero>` with bleed; a dedicated band molecule may emerge later.
- Multi-band rhythm composition (multiple bleed bands per page). Out — the proposal caps at one per page initially.
- Print bleed semantics (margins, crop marks). Out — pouk.ai is web-only.
- Server-side rendering edge cases for `100vw` on hydration. Out — pouk.ai is static + Astro; no SSR hydration to mismatch.
- The companion `color-warm-accent.md` and `portrait-image-primitive.md` proposals — orthogonal; land on their own merits.
- The `/about` v2 composition revision (in review).
