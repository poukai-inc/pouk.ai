# DS Proposal: `<Hero illustration>` slot

**Target**: `@poukai-inc/ui` `<Hero>` molecule
**Status**: Draft (consumer-side authored, awaiting DS team review)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-17
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) revision 2026-05-17 (§2 Section 2 illustration asset, §6.2)
**Companion consumer-side context**: [`meta/specs/pages/home-amendment-illustration-and-density.md`](../../specs/pages/home-amendment-illustration-and-density.md) §4.1 (acceptance criteria), [`meta/proposals/home-illustration-and-title-softening.md`](../home-illustration-and-title-softening.md) §2 Option A + §4.1 (round-1 research)
**Companion DS-side proposal**: [`hero-size-prop.md`](./hero-size-prop.md) — independent, lands on its own merits.

---

## Problem

The current `<Hero>` molecule exposes four slots — `status`, `title`, `lede`, `cta` — all of which carry text. There is **no slot for a visual element** alongside the text column. The pouk.ai homepage composition introduces a Pouākai engraving (single-color line-art, decorative, in the editorial register of Audubon plates / Cabinet Magazine ornithological inserts) as a quiet figurative companion to the Hero text, positioned to the right of the text column at desktop widths and hidden on narrow viewports.

Without a DS-owned slot for this, the consumer site has two bad options:

1. **Render the illustration outside the Hero block.** This breaks `<Hero>`'s role as the page's organizing molecule — the illustration becomes a sibling element that has to be positioned relative to the Hero via consumer-side CSS, with no DS-owned breakpoint logic and no shared rhythm token between the two. The composition's "Hero owns its internal rhythm; site does not override" contract holds for the text column but cracks at the seam between the Hero and the illustration sibling.
2. **Wrap `<Hero>` in a positioning container site-side and absolutely-position the illustration.** Soft-violates the same "no site-side override of Hero internals" rule. Forces the consumer to author the breakpoint at which the illustration hides on mobile, the gap between the text column and the illustration column, the max-width of the illustration column. All of these are layout decisions the DS should own per ADR-0001 (atomic taxonomy — `<Hero>` is the molecule that owns its composition; consumers should not reinvent it).

Either workaround scales badly: every future page (`/roles`, `/principles`, `/why-ai`) that adopts a per-page illustration repeats the same site-side scaffolding. The clean shape is to add a slot to the molecule and let consumers pass any ReactNode into it.

## Proposed API

Add a new optional slot on `<Hero>`:

```tsx
<Hero
  illustration={<PouakaiEngraving />}
  status={...}
  title={...}
  lede={...}
  cta={...}
/>
```

- **Prop name**: `illustration`
- **Type**: `ReactNode`
- **Default**: `undefined` (when omitted, `<Hero>` renders today's single-column text-only layout — zero regression for existing consumers)
- **Allowed values**: any ReactNode. Typical consumers will pass `<svg>`, `<img>`, or a custom component that wraps one of those. The DS does not constrain the asset type — consumers retain full freedom on what they slot in.
- **Semver impact**: minor version bump per ADR-0003 (prop addition, no removal, no rename, default preserves prior behavior).

## Behavior

What changes when `illustration` is provided:

- **Layout**: `<Hero>` switches from single-column text-only to a two-column layout above a DS-owned breakpoint. The text column (carrying `status`, `title`, `lede`, `cta`) sits at the left; the illustration column sits at the right. Vertical alignment between the two columns: vertically centered (designer-side recommendation; `@poukai-inc/poukai-ui` maintainers' call).
- **Text column width**: continues to honor `--hero-max` (38rem / 608px). The text column does not widen to fill remaining space — it remains capped at `--hero-max`, and the illustration column gets the remaining width up to a DS-owned cap.
- **Illustration column width**: DS-owned. Designer-side recommendation: a max of ~`--hero-max` × 0.66 (~25rem / 400px) so the illustration never visually overpowers the text column. `@poukai-inc/poukai-ui` maintainers picks the precise value.
- **Inter-column gap**: DS-owned spacing token. Designer-side recommendation: `--space-12` (48px) or `--space-16` (64px). `@poukai-inc/poukai-ui` maintainers picks.
- **Breakpoint**: below a DS-owned breakpoint (designer-side recommendation: ~720px viewport width, or `--content-max / 1.42` if the DS prefers a token-derived value), the illustration column **hides** (`display: none`) and `<Hero>` reverts to its existing single-column text-only layout. **This preserves today's mobile behavior exactly** — no consumer-side responsive scaffolding required, no mobile-specific asset variant required.
- **Aspect ratio / max-height**: DS may impose a max-height to prevent the illustration from making the Hero block taller than the text column. Designer-side recommendation: max-height matches the rendered height of the text column at desktop widths (DS computes; consumers don't think about it).
- **Internal Hero rhythm** (`status → title → lede → cta` spacing): **unchanged**. The DS's `--space-6` and `--space-8` continue to govern the text column. The illustration column is independent.

What does NOT change when `illustration` is omitted: literally nothing. The default (`undefined`) preserves the molecule's current rendered output byte-for-byte. Every existing consumer of `<Hero>` continues to work without code change.

## Accessibility contract

Consumer-owned, with a recommended DS default.

- **Default behavior**: the DS **does not** impose `aria-hidden="true"` on the slot. The consumer decides whether the illustration is decorative or informative.
  - If decorative: consumer passes `<svg aria-hidden="true" ...>` or `<img aria-hidden="true" alt="">`.
  - If informative: consumer passes `<svg role="img"><title>…</title></svg>` or `<img alt="…">`.
- **Rationale**: some future illustrations may carry informational weight (e.g., a chart, a state diagram, an iconographic legend) that the consumer needs to expose to assistive tech. Forcing `aria-hidden="true"` at the DS level would block those use cases. Leaving the contract to the consumer matches how `<Hero>` already treats its other slots (`status`, `title`, `lede`, `cta` are all ReactNode and consumer-owned).
- **DS guidance** (in `dist/llms-full.txt`): "The `illustration` slot is consumer-owned for accessibility. If decorative, set `aria-hidden='true'` on the slotted element. If informative, provide a `<title>` or `alt`. The DS does not impose either default."
- **WCAG 1.4.11 non-text contrast**: if the illustration conveys state (e.g., a color-coded availability indicator), the consumer is responsible for meeting the 3:1 contrast floor against adjacent surface. This is the same contract that already governs `status` slot consumers — no DS change needed.

For the pouk.ai homepage, the illustration is decorative (`aria-hidden="true"`) and duplicates information already carried in the lede prose (the name Pouākai, the kinetic story). This is the consumer's choice, not a DS-imposed default.

## Cross-page applicability

This is a **universal contract change** to `<Hero>`, not a home-only override. All pouk.ai routes (`/`, `/roles`, `/principles`, `/why-ai`) may consume this slot independently. Each page may pass a different `ReactNode` (or none).

For the pouk.ai site specifically: a single shared Pouākai engraving SVG asset is the design intent (one asset, four placements). Per-page pose variations are deferred to each page's future composition. But that consumer-side reuse pattern is **not** a DS contract — the DS slot accepts any ReactNode, and any future `@poukai-inc/ui` consumer can use the slot for any illustration they want.

The illustration slot composes orthogonally with the `<Hero size>` prop ([`hero-size-prop.md`](./hero-size-prop.md)) — a consumer can use either, both, or neither.

## Token compliance

All layout values resolve to DS tokens. No raw px. No magic numbers.

- **Inter-column gap**: DS-owned `--space-N` token (designer-side recommendation: `--space-12` 48px or `--space-16` 64px).
- **Illustration column max-width**: DS-owned. Designer-side recommendation: a new `--hero-illustration-max` token (e.g., `25rem` / 400px), or reuse an existing layout token if the DS prefers. Naming is `@poukai-inc/poukai-ui` maintainers' call.
- **Breakpoint at which illustration hides**: DS-owned. Designer-side recommendation: ~720px (matches the consumer-side mobile fallback target in the home composition). Could be expressed as a media query inside the molecule's CSS module, or as a token (`--bp-hero-illustration`) if `@poukai-inc/poukai-ui` maintainers prefers token-driven breakpoints.
- **Vertical alignment between columns**: handled by Flexbox or CSS Grid inside the molecule's CSS module. No new token needed.

If `@poukai-inc/poukai-ui` maintainers wants to add a `--hero-illustration-max` token (or any related new tokens) as part of this proposal, that addition is in scope and bundled into the same minor version bump per ADR-0003 (token additions = minor).

## Motion / hydration

- **Static by default.** The DS does not animate the slot. The slot renders its content as static markup; any motion is consumer-owned.
- **`prefers-reduced-motion` contract**: if a consumer chooses to animate something inside the slot (CSS keyframes on an `<svg>`, for example), that animation gates on the DS's `:root !important` `prefers-reduced-motion` block per existing rules. No exception for the new slot.
- **No `IntersectionObserver`, no scroll triggers, no parallax** built into the slot. The DS does not introduce any JavaScript runtime as part of this proposal. Zero-JS contract (consumer-side R-079) is trivially preserved.
- **Static SVG, static `<img>`, static custom component — all are allowed.** Animated content is allowed but consumer-responsibility under the same motion rules as today.

For the pouk.ai homepage: the illustration is **fully static** (no CSS keyframes, no SVG `<animate>` elements, no hover state, no scroll trigger). This is the consumer's choice, not a DS-imposed constraint.

## Trade-offs

1. **Couples `<Hero>` to a slot that not every Hero use-case needs.** Text-only Heroes (the most common case) now have a `illustration?: ReactNode` prop in the type signature that they will ignore. Mitigation: the prop is optional with a `undefined` default; consumers who don't need it pay zero cost (no prop, no code change). The `<Hero>` type signature gains one prop — minor surface-area cost, real but small.
2. **Introduces responsive-hide behavior that DS must own.** The DS now owns the breakpoint at which the illustration hides. If a future consumer wants different responsive behavior (e.g., move the illustration below the text column on mobile instead of hiding), the DS contract doesn't expose that — the consumer would need to file a new DS-gap. Mitigation: ship the simplest behavior first (hide below breakpoint), and add `responsiveBehavior?: "hide" | "stack"` later only if a real consumer need surfaces. YAGNI.
3. **Some Hero use-cases will ignore the slot harmlessly; some will misuse it.** A consumer could pass a 2MB raster image and break the page's weight budget. Mitigation: the DS cannot prevent this at the type system — `ReactNode` is intentionally broad. The DS can document the asset-budget guidance in `dist/llms-full.txt` ("illustrations slotted into `<Hero illustration>` should be ≤ 10KB compressed at typical pouk.ai-scale brand sites") but cannot enforce it. Consumer-side budgets remain consumer-side concerns.
4. **The slot's *position* (right-of-text-column at desktop, hidden on mobile) is opinionated.** Some consumers may want left-of-text-column, or above-text-column. This proposal does not expose a position prop. Adding `position?: "right" | "left" | "above"` later is a non-breaking minor. Designer-side recommendation: ship `position="right"` as the only behavior, add others on demand. YAGNI.
5. **The DS now decides what "below the breakpoint" means.** A consumer who wants the illustration to stay visible at narrower widths cannot override the breakpoint. Designer-side stance: this is correct. Responsive behavior is structural; consumer-side per-page breakpoint overrides would fragment the contract.

## Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Preferred slot name.**
   - `illustration` (designer recommendation — names *intent*: an editorial illustration).
   - `media` (more general — accepts SVG, raster, video, anything).
   - `accessory` (purely positional — names the slot by its layout role, not its content).
   - `aside` (semantic — matches the HTML element name if `@poukai-inc/poukai-ui` maintainers wants to render the slot as `<aside>`).
   Designer-side preference is `illustration` — the pouk.ai use case is specifically editorial illustration, and the name signals that. `media` is broader and may invite use cases (autoplaying video) the DS doesn't want. `@poukai-inc/poukai-ui` maintainers' call.

2. **Should the DS constrain to SVG-only, or accept any ReactNode?** Designer-side recommendation: accept any ReactNode. SVG is the consumer-side preference for pouk.ai (for `currentColor` inheritance, dark-mode behavior, and weight), but a future consumer may legitimately want raster (a photograph, a hand-drawn raster illustration). The DS does not need to opinionate on asset format.

3. **Should the DS impose a max-size at the type level?** No way to do this in TypeScript for a ReactNode prop. The DS can only document the budget. Confirmed out-of-scope for the type system; in-scope for `llms-full.txt` guidance.

4. **Should the slot accept `position` configuration?** Designer-side recommendation: **no** for this proposal. Ship `position="right"` as the only behavior. Re-open as a follow-up DS-gap if a real consumer need surfaces. YAGNI.

5. **Should the slot render inside `<aside>` semantically?** Open question. Designer-side recommendation: yes if the illustration is decorative, but `<aside>` carries semantic weight ("related but tangential content") that may not fit every consumer's use. Safer default: `<div>` with no extra ARIA role; consumers who want `<aside>` can pass an `<aside>` element into the slot directly. `@poukai-inc/poukai-ui` maintainers' call.

6. **Should `<Hero illustration>` and `<Hero size>` (the companion proposal) interact?** Designer-side stance: **no implicit interaction**. The two props are orthogonal. A consumer using `size="intimate"` with an illustration gets a smaller title alongside a same-sized illustration; the illustration column does not scale down with the title. If `@poukai-inc/poukai-ui` maintainers wants explicit coupling (e.g., `size="intimate"` shrinks the illustration column max-width proportionally), that's a design call — but designer-side recommendation is to keep them orthogonal until a real need surfaces.

7. **Vertical alignment between the two columns.** Designer-side recommendation: vertically centered. `@poukai-inc/poukai-ui` maintainers' visual eye in Ladle is the final word — if start-aligned or baseline-aligned reads better at the molecule level, override the recommendation.

## Adoption plan

1. **DS-side accept**: `@poukai-inc/poukai-ui` maintainers reviews this proposal. Accepts as-is, requests revisions, or rejects. If rejected, consumer-side fallback is to compose the illustration as an absolutely-positioned sibling element next to the Hero via a site-side positioning wrapper — a soft violation of the "no site-side override of Hero internals" rule, but it would work. **Strongly prefer the DS-gap.**
2. **DS-side ship**: `@poukai-inc/poukai-ui` maintainers implements the slot, adds Ladle stories for both `with-illustration` and `without-illustration` variants and at least one responsive breakpoint demonstration (ADR-0005), adds Playwright CT + axe-core tests covering the responsive-hide behavior and the consumer-owned accessibility contract (ADR-0004), authors a changeset for a minor bump (ADR-0003), merges to `main`, publishes the new minor of `@poukai-inc/ui` to GitHub Packages (ADR-0006).
3. **DS-side documentation**: update `dist/llms-full.txt` to document the new slot, the accessibility contract (consumer-owned), the breakpoint behavior, the asset-budget guidance, and the orthogonality with `<Hero size>`. This is part of the same DS PR.
4. **Site bumps DS dep**: pouk.ai site bumps `@poukai-inc/ui` to the new minor (likely the same minor as `<Hero size>` if both proposals land together; otherwise sequential bumps). No code change required by the bump itself; the default preserves existing behavior on every page.
5. **Site consumes**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) revision 2026-05-17 (already `Approved` on the design side, waiting on this DS-gap *and* on `<Hero size>` and on Arian's curated illustration asset) moves to `Built`. Engineer adds the illustration asset to `src/assets/`, imports it in `HomeHero.tsx`, passes it to `<Hero illustration={...}>`. PR ships.
6. **Subsequent pages adopt**: as `/roles`, `/principles`, `/why-ai` receive their own PM amendments and composition revisions, each may independently pass an illustration (the same shared SVG, or a per-page variant) into the slot. No global rollout; per-page decision.

## Out of scope for this proposal

- The companion DS-gap for the title-density variant ([`hero-size-prop.md`](./hero-size-prop.md)) — filed separately. Independent contract change; lands on its own merits.
- The Pouākai SVG asset production itself (out of designer's lane and out of DS's lane; Arian owns asset production for the pouk.ai site).
- Dark-mode behavior of the slotted content. Inline SVG with `currentColor` inverts cleanly per the DS palette's "never pure edges" principle; raster fallback would need a dark-mode variant. Both concerns are consumer-side, not DS contract.
- A `<Hero background>` slot (full-bleed background imagery behind the Hero text). Considered and rejected at the consumer-side round-1 proposal stage ([`meta/proposals/home-illustration-and-title-softening.md`](../home-illustration-and-title-softening.md) §2 Option B + §4.4) — the watermark register doesn't fit the editorial direction. If a future consumer needs it, it's a separate DS-gap.
- A `<Hero mark>` or `<Hero sigil>` slot (a small iconographic mark above the `status` slot). Considered and rejected at the round-1 stage ([`meta/proposals/home-illustration-and-title-softening.md`](../home-illustration-and-title-softening.md) §2 Option C + §4.3) — the small-mark register is too quiet to satisfy the consumer-side "finished page, not finished wireframe" criterion. If a future consumer needs it, it's a separate DS-gap.
- Animated illustration support (built-in motion choreography from the DS). The slot accepts ReactNode; consumers can animate their own content per existing motion rules. The DS does not opinionate on motion *inside* the slot.
- Multiple illustration slots per Hero. One slot, one illustration. If a future Hero needs more than one figurative element, that's a different molecule, not a new prop on `<Hero>`.
- Cross-page rollout scheduling for `/roles`, `/principles`, `/why-ai` (PM-side decision, per consumer-side amendment §9).
