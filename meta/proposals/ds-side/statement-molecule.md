# DS Proposal: `<Statement>` molecule

**Target**: `@poukai-inc/ui` molecules (new)
**Status**: Filed (consumer-side proposal routed to DS team)
**Tracked**: [`poukai-inc/poukai-ui#54`](https://github.com/poukai-inc/poukai-ui/issues/54), filed 2026-05-18 by Arian (founder)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-18
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/proposals/about-v2-explorations.md`](../../compositions/proposals/about-v2-explorations.md) §2.2, §3 (all three Directions consume a variant of this)
**DS version observed**: `@poukai-inc/ui@0.9.0`

---

## 0. Framing

One of three DS proposals filed concurrently against the `/about` v2 recalibration. This is the *editorial body composition primitive* the DS doesn't have yet.

The existing DS molecules each fill a clear role:

- `<Hero>` — page doorway, owns the page `<h1>` and the entrance into the page's substance.
- `<RoleCard>` — listing card with eyebrow, icon, title, body, hired-by line; one of N in a grid.
- `<Principle>` — list item with lowercase roman numeral, title, body.
- `<FailureMode>` — list item with index numeral, title, body.
- `<Stat>` — display numeral + caption + source.
- `<StatusBadge>` — availability micro-state.
- `<Button>` — CTA.

Each of these is either a *page surface* (Hero) or a *listing* (RoleCard, Principle, FailureMode, Stat). **There is no molecule for editorial body composition** — a single short declarative statement at editorial scale, paired with an optional supporting line, that can sit between or instead of listings on a page.

The consumer-side workaround: site-side CSS classes (`principles-bookend` on `/principles`, the proposed `.about-statement` on `/about` v2). Works, but doesn't codify the pattern.

---

## 1. The composition gap

The `/about` v2 recalibration surfaces three composition directions, all of which use 2–4 instances of the same shape: **short Instrument Serif italic statement at editorial scale, optionally paired with a muted body-scale supporting line, optionally bounded by hairlines**.

The shape's role is *editorial body composition*. It is not a heading (it doesn't bracket a section), not a Hero (it doesn't open a page), not a listing item (it doesn't sit in a grid of peers). It is a *statement* — a sentence at scale that does the work of a paragraph.

### Where this need appears

1. **`/about` v2 Directions A, B, C** (the active drivers) — each uses 2–4 statement instances down the page.
2. **`/principles`** (existing, post-launch) — the `principles-bookend` classes in `site.css` lines 260–274 are a *site-side approximation* of this molecule, used for the page's intro and conclusion. They already prove the pattern is needed at the editorial-page scale.
3. **Future editorial pages** — any `/values`, `/manifesto`, customer-story page, `/leadership` analog will want this shape.
4. **Possible Hero alternative** — a page that doesn't want the `<Hero>` doorway register but does want a single declarative opening (e.g., a long-form essay page) might use `<Statement>` instead of `<Hero>` for its opener.

### Why a molecule (not just a token + composition guidance)

Three reasons:

- **Codifies the pair.** The statement + supporting line pair has internal rhythm (Instrument Serif italic statement → optional muted sans supporting line) that benefits from being owned by the DS. Consumers shouldn't re-author the pair.
- **Codifies the scale.** The "editorial scale" is between `--fs-body` and `--fs-tagline` — there is no current token for this range, and the existing `principles-bookend` uses a site-side clamp (`clamp(1.125rem, 1rem + 0.5vw, 1.3125rem)`). Codifying the scale inside the molecule (or with a paired `--fs-statement` token — see §6 below) is cleaner.
- **Codifies the optional hairline.** The statement-with-hairline-above pattern is exactly what `/about` v2 Direction A and B want. A molecule prop (`hairline={true}`) is cleaner than every consumer re-authoring the hairline CSS.

---

## 2. Proposed API

```tsx
<Statement
  statement={<>Custom AI builds. <em>Automations.</em> Advisory engagements.</>}
  supporting={<>For teams who'd rather ship than speculate.</>}
  hairline={true}
/>
```

### Props

- **`statement: ReactNode`** — the declarative statement. Required. ReactNode (consumer can pass `<em>` for accent words, line breaks via `<br />` if desired, or any composed fragment). Rendered as `<p>` semantically (not a heading — see §3 below).
- **`supporting?: ReactNode`** — optional supporting line. Single sentence, rendered as `<p>` below the statement at body scale, muted color. Default: undefined (no supporting line rendered).
- **`hairline?: boolean`** — optional hairline-above. Default: `false`. When `true`, renders a 1px `--hairline` border above the molecule with `--space-12` padding-block-start.
- **`as?: "p" | "blockquote"`** — semantic element override. Default: `"p"`. Consumers who want blockquote semantics (e.g., for a pulled quote with attribution) pass `as="blockquote"`. The DS does not ship a `cite` slot — if the consumer wants citation, they pass it inside `supporting`. (`<Pull>` for pulled-quote-with-attribution remains a separate future molecule if a real consumer surfaces it; see `/about` v2 memo §2 Rank-2.)

### Rendered structure

```html
<!-- with hairline=true, supporting line present -->
<div class="statement statement--hairline">
  <p class="statement-text">Custom AI builds. <em>Automations.</em> Advisory engagements.</p>
  <p class="statement-supporting">For teams who'd rather ship than speculate.</p>
</div>
```

```html
<!-- minimal (no supporting, no hairline) -->
<div class="statement">
  <p class="statement-text">…</p>
</div>
```

### Type contract

- **Statement text**: `--font-serif` (Instrument Serif), italic, color `--fg`, scale `--fs-statement` (new token — see §6). Max-width `--content-max` or `--hero-max` (DS picks).
- **Supporting line**: `--font-sans` (Geist), color `--fg-muted`, scale `--fs-body`. Max-width `--hero-max`.
- **Inter-pair gap**: `--space-4` (16px) between statement and supporting.
- **Hairline-above** (when `hairline=true`): `border-block-start: 1px solid var(--hairline)`, `padding-block-start: var(--space-12)`.

### Semver impact

Minor version bump per ADR-0003 (additive new molecule).

---

## 3. Accessibility contract

- **Statement is not a heading.** It is `<p>` (or `<blockquote>` if `as="blockquote"`). It does not enter the page's heading outline. Rationale: statements are editorial body composition, not document structure. A page's headings remain `<h1>` (Hero or equivalent) and `<h2>` for sections; statements sit between or beneath headings without claiming a heading role.
- **Statement at editorial scale on a `<p>`**: typographic prominence does not require semantic heading status. Sighted users read the scale; assistive-tech users read the heading hierarchy. The two channels remain consistent because the molecule never *claims* to be a heading.
- **Hairline**: decorative, `border` not `<hr>`. No `role="separator"`. No `aria-orientation`. The hairline marks rhythm visually only.
- **`as="blockquote"`**: semantic alternative for cases where the statement is genuinely a quotation (would need a `cite` or attribution — see §6 future-`<Pull>` discussion).
- **`prefers-reduced-motion`**: no motion at the molecule level. Any motion a consumer adds inside the slot via `<em>` content gates on the DS's `:root !important` block.

---

## 4. Composition rules (in `llms-full.txt` after ship)

- **Maximum 4 `<Statement>` instances per page.** A page with five+ statements collapses into "wall of statements," which is the same failure mode as the v1 `/about` wall-of-text but at editorial scale. The cap forces selection.
- **`<Statement>` is not a heading replacement.** Pages still need an `<h1>` (Hero or page-level `<h2>` if `<Hero variant="no-title">` ships). `<Statement>` sits between or beneath headings.
- **Maximum 1 `<Statement hairline={true}>` adjacent — do not stack hairlined statements.** Two hairlines in a row (one closing a statement, one opening the next) read as a double rule. Use `hairline={false}` on adjacent statements; the previous statement's bottom margin handles the visual break.
- **Voice**: brand voice rule per `llms-full.txt` line 169 applies. Statement text is declarative, concrete, no marketing-speak. Statements are not slogans.
- **Length**: statement text ≤ 18 words. Supporting line ≤ 24 words. Together ≤ 35 words per Statement instance.

---

## 5. Trade-offs

1. **Adds a new molecule to the DS surface area.** One more component for consumers to learn, one more set of tests to maintain. Mitigation: the molecule is small (one or two props rendered, no complex state, no internal layout decisions beyond the statement/supporting pair).
2. **Could be implemented as a CSS class with composition guidance instead.** This is the v1-of-`/about`-memo workaround (site-side `.about-statement`). Trade-off: a CSS-class approach doesn't codify the supporting-line pairing or the hairline prop; consumers re-author both. The molecule is the right shape for this; the class is the right shape for one-off page styling. Statements are a recurring pattern; they earn a molecule.
3. **Scale-vs-`<Hero>` conflict.** A page with both `<Hero>` and 3× `<Statement>` instances has two display-class type registers competing for attention. Mitigation: the proposed `--fs-statement` token is *smaller* than `--fs-tagline-intimate` (the smallest Hero title scale), so visual hierarchy is preserved.
4. **Editorial-scale italic + body sans pairing risks register drift.** Mitigation: the molecule's internal rhythm is DS-owned; consumers can't drift.
5. **Possible misuse as a heading.** Consumers may use `<Statement>` semantically as an `<h2>` substitute. The DS contract documents that it's not, but cannot enforce it. Composition guidance in `llms-full.txt` addresses this.

---

## 6. Companion token: `--fs-statement`

The molecule's type scale is between `--fs-body` (17–19px clamp) and `--fs-tagline-intimate` (32–52px clamp). There is no current token at this range.

**Designer-side recommendation**: add a paired token to the DS in the same minor as the molecule.

```css
--fs-statement: clamp(1.5rem, 1rem + 2vw, 2.5rem); /* 24-40px */
```

**Justification**: matches the `principles-bookend` site-side clamp's *upper end*, slightly larger. Reads as editorial-scale, not display-scale. Comfortably larger than `--fs-body` so the statement reads as a distinct typographic moment; comfortably smaller than `--fs-tagline-intimate` so the Hero retains primacy.

DS picks the actual value. Alternatives:

- `clamp(1.25rem, 1rem + 1.5vw, 2rem)` (~20–32px) — quieter, closer to body type.
- `clamp(1.75rem, 1.25rem + 2.5vw, 3rem)` (~28–48px) — louder, closer to Hero scale.

If the DS team prefers the molecule absorb the scale internally (no public token), that works too — the molecule's CSS module sets the scale, and consumers don't access it directly. The trade-off: future consumers (a `<Pull>` molecule, an editorial blockquote variant) can't reuse the scale by referencing a token.

---

## 7. Adoption plan

1. **DS-side accept / revise / reject** the proposal.
2. **DS-side ship**: implement the molecule (`src/molecules/Statement/`), add `Statement.test.tsx` covering both `hairline` true/false and `supporting` present/absent, add `Statement.stories.tsx` with at least four stories (minimal, with-supporting, with-hairline, with-both). Add changeset for minor bump.
3. **DS-side documentation**: update `dist/llms-full.txt` to document the molecule, the composition rules (§4), the type contract, and the accessibility contract.
4. **Site bumps DS dep**: pouk.ai bumps `@poukai-inc/ui` to the new minor.
5. **`/about` v2 composition revision** consumes the molecule (provided the founder picked a Direction that uses it — all three v2 Directions do).
6. **Subsequent pages adopt**: `/principles` may want to migrate its `principles-bookend` classes to `<Statement>` (with `--fg-muted` and a smaller scale variant — TBD per future spec revision). Per `/principles`'s own cadence.

---

## 8. Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Molecule name.** `<Statement>` is the designer-side recommendation. Alternatives: `<EditorialMoment>` (descriptive but verbose), `<Declarative>` (mouthful), `<Lede>` (already a slot inside `<Hero>` — collision risk), `<Pull>` (better reserved for quoted-pull-with-attribution if that ever ships), `<Block>` (too generic). DS picks.
2. **Companion token.** Ship `--fs-statement` as a public token, or absorb the scale into the molecule's CSS module? Designer-side recommendation: ship as a public token so a future `<Pull>` or editorial-blockquote variant can reuse it. DS picks.
3. **Default `as` element.** `<p>` is the designer-side recommendation. Alternatives: `<div>` (no semantic), `<figure>` (with optional `<figcaption>` for supporting — might be the right semantic if `<Pull>` is the future molecule). Designer-side stance: `<p>` for v1; `<figure>` is right for `<Pull>` whenever that lands.
4. **Hairline-below option?** This proposal only ships `hairline` (above). Some consumers may want hairline below (e.g., a closing statement at the bottom of a section). Designer-side stance: **YAGNI** — add `hairlineBelow?: boolean` only when a real consumer surfaces the need. Hairlined sections can compose by setting the *next* statement's `hairline={true}`.
5. **Maximum-per-page enforceable?** No — TS can't enforce instance counts. Document the cap in `llms-full.txt`; trust consumers.
6. **Supporting-line typography**: `--font-sans` `--fg-muted` `--fs-body` is the designer-side recommendation. DS may prefer `--font-serif` italic on the supporting line as well (would tighten the editorial register). Designer-side stance: sans + muted gives the supporting line a *different role* visually (it's a footnote, not a continuation); serif + muted would read as continuation. Both are defensible; DS picks.
7. **Does `<Statement>` get an `id` prop for anchor linking?** Sections benefit from anchors; statements are *not* sections. Designer-side stance: **no `id` prop in v1**. Consumers who want to anchor a statement can wrap it in a `<section id="…">`.

---

## 9. Out of scope

- `<Pull>` molecule (pulled quote with attribution). Future; flagged as future-available in the `/about` v2 memo §2 Rank-2.
- A `<Lede>` molecule (the page-opening lede line). Existing inside `<Hero>` as a slot; not standalone yet.
- A `<Quote>` molecule (full quotation with cite). Future; unrelated to `<Statement>`.
- The `--surface-section` proposal filed at [`section-surface-rhythm.md`](./section-surface-rhythm.md) — orthogonal; lands on its own merits.
- The `--fs-display` / `--fs-display-lg` proposal filed at [`type-display-scale.md`](./type-display-scale.md) — orthogonal; lands on its own merits.
- The `/about` v2 composition revision (waits on founder picking a Direction).
- Migrating `/principles`' bookend classes to `<Statement>`. Per `/principles`' own future revision cadence.
