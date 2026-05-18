# DS Proposal: `<Hero>` no-title variant for editorial doorways

**Status**: Filed (consumer-side proposal routed to `@poukai-inc/poukai-ui` maintainers)
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-18
**Companion site composition that drives this**: [`meta/compositions/pages/about.md`](../../compositions/pages/about.md) §6.1
**Spec context**: [`meta/specs/pages/about.md`](../../specs/pages/about.md) §4, §9 (A9 designer-review gate)
**DS version observed**: `@poukai-inc/ui@0.9.0`
**Tracked**: [`poukai-inc/poukai-ui#52`](https://github.com/poukai-inc/poukai-ui/issues/52), filed 2026-05-18 by Arian (founder).

---

## 0. Framing

This proposal is **forward-looking**, **not blocking**. `/about` v1 ships on existing DS primitives via the composition's site-side workaround (skip `<Hero>`, compose eyebrow + lede as raw prose elements). This proposal exists so that future editorial pages — and a future revision of `/about` itself — can consume a documented DS surface for the **"page-label eyebrow + 1-2 sentence lede, no display tagline, no `<h1>` in the doorway region"** pattern.

The proposal speaks from the **composition need** (where it appears, how it would slot in), per the designer agent's DS-gap protocol. It does **not** prescribe the DS API shape — that's `@poukai-inc/poukai-ui` maintainers' decision space.

---

## 1. The composition gap

`<Hero>` at `@poukai-inc/ui@0.9.0` exposes four documented slots — `status`, `title`, `lede`, `cta` — plus two newer surfaces from the 0.7.0 / 0.8.0 ships (`size="display" | "intimate"`, `entrance="stagger"`, `illustration` slot — when illustration ships).

The DS recommended-usages block (`dist/llms-full.txt` lines 119–125) and the anti-pattern block (line 156: "Do not nest Hero inside another Hero. Invalid ARIA structure, **duplicate h1**, compounded max-width") establish a load-bearing structural contract: **`<Hero>` renders an `<h1>` in its `title` slot**. The `title` slot is not documented as `title?: ReactNode`-optional; passing `title={undefined}` would either:

- Render an empty `<h1>` (WCAG 1.3.1 + 2.4.6 violation: the page has a structural heading with no accessible name).
- Throw or fall into an unspecified runtime state.
- Render no `<h1>` at all (the page's `<h1>` count drops to zero, also a WCAG / SEO violation).

None of these are acceptable as a composition surface for an editorial page that wants to move its `<h1>` out of the doorway region.

### Where this need appears (in priority order)

1. **`/about` v1 (active)** — spec [`meta/specs/pages/about.md`](../../specs/pages/about.md) §4 item 2 (A9): the page drops `<h1>` from the hero region and moves it into section 1. The composition ships a site-side workaround in v1 (raw `<p>` eyebrow + `<p>` lede), but the workaround is **not durable** — see §3 below.
2. **Future editorial pages (likely)**:
   - A long-form essay or manifesto page (if pouk.ai ever publishes one).
   - A future `/customer-story-<slug>` page that opens in essay register rather than promotional register.
   - A `/404` or `/contact` page that wants a low-volume page label rather than a display tagline (P1 / P2 per spec §9 A16).
3. **Cross-consumer (speculative)**: any other DS consumer that wants the editorial-doorway register without authoring their own eyebrow + lede scaffolding.

### What the composition wants from the DS

The composition wants to express, in a single Hero invocation, the shape:

```
<Hero variant="no-title"                // or equivalent — DS picks the API shape
      eyebrow="About"                    // page label
      lede={<>One to two sentences setting up the page…</>}
/>
```

And have it render:

- An accessible page-label band (the eyebrow) at `--fs-micro` (or DS-equivalent label register), color `--fg-muted`.
- A lede paragraph at `--fs-body`, color `--fg-muted`, max-width `--hero-max` (the same lede contract `<Hero>` already ships).
- **No `<h1>` in the doorway region.** The consumer's page is responsible for rendering its own `<h1>` elsewhere (in body content, in a subsequent section, wherever the page's information architecture places it).
- The same DS-owned spacing and breakpoint behavior `<Hero>` already provides — `<Hero>`'s vertical rhythm tokens (`--space-2` eyebrow-to-lede, lede max-width `--hero-max`, content-max constraints) all apply.

The proposal **does not** want the DS to:

- Make `title` retroactively optional on the existing `<Hero>` API (that would be a breaking semver change per ADR-0003 if any consumer relies on the current `<h1>` rendering — which `/` does).
- Ship a new top-level molecule that duplicates 80% of `<Hero>`'s internals (compound primitives are heavier to maintain than variants).
- Lock the consumer's `<h1>` placement (the DS's job is the doorway surface; the consumer's job is to render their own `<h1>` wherever their IA wants it).

---

## 2. Three viable DS API shapes (consumer doesn't choose; DS does)

Three sketches, in the consumer's vocabulary. The DS-side authors pick the right shape, the right semver step, and the right token wiring.

### Shape A — `variant` prop on `<Hero>`

```
<Hero
  variant="no-title"           // default "display" (current behavior); add "no-title"
  eyebrow={<>About</>}          // becomes load-bearing when variant="no-title"
  lede={<>…</>}
/>
```

- **Minor semver** per ADR-0003 (additive prop, additive variant).
- `eyebrow` slot exists already in some DS molecules (e.g., `<RoleCard>` eyebrow); the prop name carries semantically.
- At `variant="no-title"`, the molecule omits `<h1>` rendering and uses the eyebrow + lede composition instead.

### Shape B — `title?: ReactNode` optional + DS-emitted no-`<h1>` behavior

```
<Hero
  eyebrow={<>About</>}
  // title omitted
  lede={<>…</>}
/>
```

- Make `title` explicitly optional in the prop signature.
- When omitted, the molecule renders only the eyebrow + lede band — no `<h1>` element at all.
- Documented in `llms-full.txt`: "Omitting `title` produces an editorial doorway with no `<h1>`. Use only when the page's `<h1>` lives in body content."
- **Minor semver** (prop signature change is additive; existing consumers that pass `title` keep working).

### Shape C — Sibling molecule `<EditorialOpener>` (or equivalent)

```
<EditorialOpener
  eyebrow={<>About</>}
  lede={<>…</>}
/>
```

- New molecule, dedicated to the editorial-doorway register.
- Internally reuses the same tokens and layout primitives as `<Hero>`'s eyebrow + lede subset.
- **Minor semver** (additive new molecule).
- Best if the DS-side authors decide the no-title surface is *semantically distinct enough* from `<Hero>` to warrant its own primitive (an `<EditorialOpener>` page does not have a doorway; it has an opening — different register, different mental model for consumers).

### Designer recommendation

**Shape A or Shape B**, with a mild lean toward **Shape A** (the `variant` prop reads as an explicit register switch, which matches the brand register vocabulary the site already uses on `<Hero size="intimate">`). Shape C is acceptable but doubles the surface area; Shape B is the cleanest typescript-signature change but is less self-documenting in JSX than Shape A.

**Out of scope for this proposal**: which of the three the DS picks. The composition need is the same regardless.

---

## 3. Why the site-side workaround in v1 is acceptable but not durable

The composition at [`meta/compositions/pages/about.md`](../../compositions/pages/about.md) ships v1 by composing the eyebrow + lede as raw prose elements directly inside `<SiteShell>`'s slot, using documented DS tokens (`--fs-micro`, `--fs-body`, `--fg-muted`, `--space-2`, `--space-16`, `--hero-max`) in their documented roles.

**Acceptable for v1**:

- No new tokens introduced.
- All values resolve to existing DS tokens in their documented semantic roles.
- The site-side composition is small (a few prose elements, no new component scaffolding).
- The brand register is preserved (the page reads as quiet, typography-led, restrained).
- The composition explicitly documents the workaround as transitional.

**Not durable**:

- Every future editorial page with the same shape re-authors the same site-side scaffolding. The brand contract for "eyebrow + lede band" stays implicit, not codified in the DS.
- The DS does not learn from the consumer pattern. A second consumer (or a DS-internal contributor) cannot inspect the DS package and discover that "this surface exists, here's how to consume it."
- The site-side composition is silent about the DS's eyebrow + lede register at the token level — the consumer is implicitly defining a register the DS could (and arguably should) own.
- If the DS-side authors later ship a different no-title primitive (with different tokens, different breakpoint behavior, different `<Wordmark>` interaction), the site-side workaround would not seamlessly adopt it — the page would need a composition revision.

The v1 workaround is **a known transitional state**, not a permanent solution. This proposal is the path to retiring the workaround.

---

## 4. Acceptance criteria for a future DS-side ship

Whichever shape (A, B, or C) the DS-side authors pick, the shipped variant must:

- **Render no `<h1>` in the eyebrow + lede band.** The consumer's page is responsible for its own `<h1>` placement.
- **Use the existing DS tokens** for the eyebrow + lede band — `--fs-micro` (or DS-equivalent label register), `--fs-body`, `--fg-muted`, `--space-2` (or DS-internal eyebrow-to-lede gap), `--hero-max` (lede max-width). No new tokens introduced unless `@poukai-inc/poukai-ui` maintainers determines the editorial-doorway register warrants a dedicated label-register token.
- **Be documented in `dist/llms-full.txt`** with the consumer rule: "Use only when the page's `<h1>` lives in body content. The molecule does not emit an `<h1>`; the consumer must."
- **Be documented in the `<Hero>` (or `<EditorialOpener>`) component's `.stories.tsx`** as a named story (e.g., "Editorial doorway, no title") so the visual contract is testable.
- **Pass axe-core** with zero violations (no empty headings, no missing landmarks, no orphaned text content).
- **Not break existing consumers**: any existing `<Hero>` invocation that passes `title` continues to work without code change. Semver minor per ADR-0003.
- **Optional, recommended**: ship a story that composes `<Hero variant="no-title">` (or equivalent) on top of `<SiteShell>` to visually confirm the cross-organism rhythm.

---

## 5. What this proposal does *not* cover

- **DS API final shape.** That's `@poukai-inc/poukai-ui` maintainers' call. Three shapes are sketched in §2 as candidates; the DS-side authors choose.
- **Token additions or renames.** This proposal works on existing tokens. If `@poukai-inc/poukai-ui` maintainers wants to introduce a dedicated `--fs-eyebrow-doorway` or similar, that's a separate DS decision and a separate token addition.
- **Semver step beyond "minor".** ADR-0003 governs; the proposal assumes minor (additive prop, additive variant, or additive molecule) is appropriate.
- **`/about` v2.** The illustration v2 question is parked at [`meta/proposals/about-illustration-v2.md`](../about-illustration-v2.md) and is separate from this DS surface.
- **Cross-page Hero refactors.** `/`, `/why-ai`, `/roles`, `/principles` continue to consume `<Hero>` with `title` per their current compositions. This proposal does not propose changing any of those consumers.

---

## 6. Routing

This proposal is consumer-side draft only. Arian decides whether to:

1. Route to `@poukai-inc/poukai-ui` maintainers as-is (the DS-side authors then author the formal DS proposal at `proposals/hero-no-title-variant.md` in `poukai-inc/poukai-ui`, file an issue, and run the ADR-0010 proposal loop).
2. Hold the proposal for a future routing decision (perhaps after `/404` or `/contact` is composed and the cross-page need is more concrete).
3. Reject the proposal (in which case `/about` continues to ship the site-side workaround indefinitely, and any future editorial page re-authors the same scaffolding).

The composition at [`meta/compositions/pages/about.md`](../../compositions/pages/about.md) does not depend on this proposal's acceptance — `/about` v1 ships either way. The proposal is the path to a *more durable* surface for future editorial pages.
