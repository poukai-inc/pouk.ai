# DS Proposal: `<Hero>` eyebrow alongside title (default variant)

**Status**: Filed (consumer-side proposal routed to `@poukai-inc/poukai-ui` maintainers)
**Owner**: Arian (founder) · Author: pouk-ai-engineer (via OMC review fan-out)
**Last updated**: 2026-05-18
**Companion site composition that drives this**: [`meta/compositions/pages/404.md`](../../compositions/pages/404.md) §2 Section 2 (Hero composition for /404)
**Spec context**: [`meta/specs/pages/404.md`](../../specs/pages/404.md) §4 IA item 2 + §5 (content requirements: eyebrow optional)
**Content context**: [`meta/content/drafts/pages/404.md`](../../content/drafts/pages/404.md) v1.1 §2 `heroEyebrow` block (drafter ships `eyebrow="404"`)
**DS version observed**: `@poukai-inc/ui@0.15.0`
**Sibling proposal**: [`hero-no-title-variant.md`](./hero-no-title-variant.md) — opened the no-title doorway variant; this proposal addresses the *opposite* gap (eyebrow-with-title-present)
**Tracked**: not yet filed in `poukai-inc/poukai-ui` — file at proposal ratification

---

## 0. Framing

This proposal is **forward-looking, not blocking**. `/404` ships in P0 without an eyebrow (drafter-optional per spec §5). The composition's open-Q recommendation was to drop the eyebrow unless it earned its place; the DS constraint forced the call. The drafter-authored content draft v1.1 §2 still ships `heroEyebrow: "404"` — that copy will only land when the DS surface admits an eyebrow above a title.

The proposal speaks from the **composition need**, per the designer agent's DS-gap protocol. It does **not** prescribe the DS API shape — that's `@poukai-inc/poukai-ui` maintainers' decision space.

---

## 1. The composition gap

`<Hero>` at `@poukai-inc/ui@0.15.0` exposes a discriminated-union prop type ([`molecules/Hero/Hero.d.ts`](https://github.com/poukai-inc/poukai-ui)):

```typescript
export type HeroDefaultProps = HeroShared & {
    variant?: "default" | undefined;
    title: ReactNode;             // required
    titleAs?: "h1" | "h2";
    status?: ReactNode;            // slot above title
    eyebrow?: never;               // <-- forbidden in default variant
};

export type HeroNoTitleProps = HeroShared & {
    variant: "no-title";
    eyebrow?: ReactNode;           // <-- only valid here
    title?: never;
    titleAs?: never;
    status?: never;
};
```

The discriminator is load-bearing: `eyebrow` and `title` are mutually exclusive at the type level. The DS contract is "if you want an eyebrow, drop the title; if you want a title, drop the eyebrow." The composition (`/about` and `/404` are the live cases) wants the third option — **eyebrow above title, both present, single `<h1>` preserved**.

### Where this need appears (in priority order)

1. **`/404` v1 (active P0)** — content draft v1.1 §2 ships `heroEyebrow: "404"` AND `heroTitle: "This page doesn't exist."`. Spec §6 + §8 ACs require exactly one `<h1>` (the Hero title). The DS forbids the combination. P0 shipped without the eyebrow.
2. **Future editorial pages with structural eyebrows** — RoleCard already uses eyebrows as structural labels ("Role 01"); a future page-level Hero with a structural eyebrow ("Section A", "Issue 03") would face the same constraint.
3. **Cross-consumer (speculative)** — any DS consumer that wants an editorial-band Hero with both a page-function eyebrow and a load-bearing `<h1>`.

### What the composition wants from the DS

A single Hero invocation, default variant, that ships:

```
<Hero size="intimate"
      align="center"
      eyebrow="404"                            // page-function label (≤4 chars/words)
      title="This page doesn't exist."         // page <h1>
      lede="The link is broken, or the URL was typed wrong. Try the nav above, or return home."
      cta={<Button asChild size="compact"><a href="/">Return to pouk.ai →</a></Button>}
/>
```

Rendered shape: eyebrow band at `--fs-micro` `--fg-muted` uppercase-tracked → title (h1) at `--fs-tagline-intimate` → lede → cta. The eyebrow sits where `status` would sit in the current default variant — the slot is reusable, only the prop name changes.

The proposal **does not** prescribe:

- Whether eyebrow renders above or beside `status` if both are passed.
- Whether eyebrow is rendered as a `<p>`, `<span>`, or a DS-specific eyebrow primitive.
- The exact typographic register (DS picks against existing eyebrow conventions on RoleCard / Principle).

---

## 2. The site-side workaround for /404 v1

P0 shipped `/404` without the eyebrow. The page reads cleanly without it: the H1 "This page doesn't exist." carries the function. The composition's §2 open-Q recommended drop "unless it earns its place"; DS constraint forced the call.

If `/404` content draft v1.2 retires `heroEyebrow`, this proposal becomes non-blocking. If the drafter wants to preserve the eyebrow, the workaround is:

```html
<!-- site-side: render eyebrow as a <p> before the Hero, scoped to /404 only -->
<p class="not-found-eyebrow">404</p>
<Hero size="intimate" align="center" title="This page doesn't exist." lede="…" cta={…} />
```

with CSS:

```css
.not-found-eyebrow {
  font-size: var(--fs-micro);
  color: var(--fg-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  margin-block-end: var(--space-3);
}
```

The workaround is **structurally cheap** but **not durable** — it duplicates the DS's eyebrow register in site CSS, which is exactly the kind of token-shadowing the standards doc forbids ("Never: new color values, new type sizes, new spacing tokens" in `site.css`). It also forces the consumer to author scoped wrapper CSS for every page that wants this shape.

---

## 3. Why this is a DS surface, not a consumer surface

The eyebrow register is **DS vocabulary**, not page composition. The DS already ships eyebrow rendering inside `RoleCard` and `Principle` molecules, and inside `<Hero variant="no-title">`. The shape "eyebrow at `--fs-micro` `--fg-muted` uppercase-tracked above body content" is canonical brand register. Forcing each consumer to re-author the eyebrow in scoped CSS:

1. Duplicates the typography decision across consumers.
2. Risks register drift the next time DS revises eyebrow scale.
3. Breaks the "DS owns visual vocabulary, site owns composition" contract.
4. Forces a one-shot CSS file for each consuming page — three pages today (`/`, `/about`, `/404`-future) and a `RoleCard`-style eyebrow that doesn't compose cleanly.

The right surface is `<Hero eyebrow="…" title="…" />` in default variant. The DS owns the eyebrow's typography, position, and spacing; the consumer owns whether to pass the prop.

---

## 4. Suggested API shapes (DS picks)

The DS picks the API; these are illustrative.

**Option A — eyebrow as new optional slot in default variant**:

```typescript
export type HeroDefaultProps = HeroShared & {
    variant?: "default" | undefined;
    eyebrow?: ReactNode;          // <-- NEW: optional structural label above title
    title: ReactNode;
    titleAs?: "h1" | "h2";
    status?: ReactNode;
};
```

Rendered order: `eyebrow` (if present) → `status` (if present) → `title` → `lede` → `cta`. Backwards-compatible: existing consumers don't pass `eyebrow` and see no change.

**Option B — eyebrow + status as mutually exclusive in default variant**:

```typescript
type HeroDefaultProps = HeroShared & (
  | { variant?: "default"; title: ReactNode; eyebrow?: ReactNode; status?: never; ... }
  | { variant?: "default"; title: ReactNode; status?: ReactNode; eyebrow?: never; ... }
);
```

Preserves the "one element above the title" rule. /` ships `status`, `/404` ships `eyebrow`, `/about` ships neither — and the DS picks which one renders. Trade-off: forces a runtime decision in the consumer.

**Option C — third variant `variant="titled-with-eyebrow"`**:

```typescript
export type HeroEyebrowTitleProps = HeroShared & {
    variant: "titled-with-eyebrow";
    eyebrow: ReactNode;
    title: ReactNode;
    titleAs?: "h1" | "h2";
    status?: never;
};
```

Most explicit; widens the discriminator. Heaviest API surface.

Drafter's bias: **Option A** — it's the smallest backwards-compatible widen, eyebrow becomes an optional slot in default variant, no new variant to discover, no runtime decision in the consumer. The DS may pick differently.

---

## 5. Accessibility contract

The DS must preserve:

- Exactly one `<h1>` in default variant (title slot). Eyebrow renders as a non-heading element (`<p>` or `<span>`).
- Heading hierarchy stays untouched: no eyebrow elevates to `<h2>` or `<h3>`.
- `prefers-reduced-motion: reduce` — eyebrow inherits the existing Hero motion gate (already DS-owned via `tokens.css`).
- WCAG SC 1.3.1 + 2.4.6 (heading + label semantics) — eyebrow is structural label, not heading. DS owns the semantic role.

---

## 6. Out of scope

- Eyebrow rendering inside `variant="no-title"` (already shipped).
- Eyebrow on RoleCard / Principle molecules (already shipped via different surfaces; the consumer pattern is `Role 01` / `Principle i.` — different register).
- An eyebrow link affordance (eyebrow-as-anchor). The DS may or may not admit this; the consumer doesn't need it today.
- A "deprecate `status` in favor of `eyebrow`" path. Both serve different jobs (status = StatusBadge availability, eyebrow = page-function label). Keep both.

---

## 7. Open questions for `@poukai-inc/poukai-ui` maintainers

- Does `eyebrow` belong as an optional slot in default variant, or as a third discriminated variant?
- If both `eyebrow` and `status` are accepted in default variant, what's the render order? Does `status` win the slot above the title and `eyebrow` go above status? Or are they mutually exclusive?
- What's the eyebrow's typographic contract — does it inherit the same `--fs-micro` `--fg-muted` register the no-title variant uses, or does it adopt a `--fs-eyebrow-display` for default-variant Hero specifically?
- Is the eyebrow accessible as `aria-describedby` on the title, or is it free-standing?

---

## 8. Adoption sequence

1. `@poukai-inc/poukai-ui` accepts the proposal (any of options A/B/C, or a fourth shape).
2. DS publishes a minor bump (`@poukai-inc/ui@0.16.0` or similar).
3. Site repo's ds-bump workflow opens the bump PR per `.github/workflows/ds-bump.yml`.
4. `meta/content/drafts/pages/404.md` content drafter ratifies whether to keep eyebrow "404" (now possible) or retire it (close OMC-F1 in `meta/backlog.md` either way).
5. If kept: `src/components/NotFoundHero.tsx` regains the `eyebrow` prop; the eyebrow renders above the `<h1>` per the new DS contract.
6. Update `meta/compositions/pages/404.md` §2 to lock the eyebrow render decision against the new DS surface (the open-Q on eyebrow in §2 closes).

No coordination with the canonical-funnel routes (`/`, `/why-ai`, `/roles`, `/principles`, `/about`) is required — those pages don't consume an eyebrow today, and the prop addition is backwards-compatible.
