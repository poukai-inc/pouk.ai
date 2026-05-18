# DS Proposal: `<Button size="compact">` — intermediate size between `sm` and `md`

**Target**: `@poukai-inc/ui` `<Button>` atom
**Status**: Draft (consumer-side authored, awaiting DS team review)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer` per composition §6, audit verdict 2026-05-17)
**Proposing date**: 2026-05-17
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) revision 2026-05-17 (after live audit revealed `sm`-on-display pairing was visually too small)

---

## Problem

`<Button>` currently exposes three sizes per the DS snapshot at `@poukai-inc/ui@0.6.1` (`meta/ds-snapshot/llms-full.txt` §"Button"):

| Size | Min height |
|---|---|
| `sm` | 32px |
| `md` | 44px (default) |
| `lg` | 52px |

The 12px gap between `sm` and `md` is too coarse for editorial / brand-restrained surfaces where the CTA must read as an *actionable affordance* rather than a peer-weight call-to-arms — but also must not disappear into the page.

On pouk.ai `/`, the Hero CTA at `size="md"` (44px) reads visually too heavy against the brand's restraint-as-credential intent (founder reaction during PM amendment authorship). At `size="sm"` (32px) — currently shipped via commit `9076cc4` — it reads visually too small against the (currently-default) `<Hero size="display">` title. The composition-level pairing convention (composition §6.3) reflects this: `sm` is proportional with `<Hero size="intimate">`, `md` is proportional with `<Hero size="display">`. There is no Button size proportional with `<Hero size="display">` *minus* one editorial-restraint notch — which is exactly what the brand surface needs.

This proposal introduces an intermediate Button size, `compact`, sitting between `sm` and `md`, recommended ~38px min-height (DS team's exact value).

---

## Proposed API

```tsx
<Button size="compact">…</Button>
// where size?: "sm" | "compact" | "md" | "lg"
// default remains "md" (zero-regression for every existing consumer)
```

Default `size="md"` is preserved — `compact` is opt-in. No existing DS consumer is affected.

---

## Behavior

| Aspect | `sm` | `compact` (proposed) | `md` (default) | `lg` |
|---|---|---|---|---|
| Min-height | 32px | **38px** (DS team's call, ~36–40px range) | 44px | 52px |
| Horizontal padding | DS-scaled | scaled proportionally between `sm` and `md` | DS-scaled | DS-scaled |
| Typography | DS-scaled | scaled proportionally between `sm` and `md` | DS-scaled | DS-scaled |
| Icon size (if any) | DS-scaled | scaled proportionally | DS-scaled | DS-scaled |

Internal padding, font-size, and icon-slot dimensions scale proportionally to fit between `sm` and `md`. DS team picks the exact token values.

---

## Cross-page applicability

This is a **universal `<Button>` contract change**, not a home-only override. Other pouk.ai routes (`/roles`, `/principles`, `/why-ai`) may consume `size="compact"` once their own composition recipes adopt it. SaaS-density form surfaces (e.g., consumers outside pouk.ai) typically stick with `md` and are unaffected. Editorial / restrained brand surfaces benefit from the new option.

---

## Pairing convention (composition-level guidance, not DS rule)

After `compact` lands, pouk.ai composition §6.3 will be amended to read:

| Hero size | Recommended Button size |
|---|---|
| `<Hero size="display">` (default) | **`compact`** for editorial restraint, OR `md` for default DS register. Site default for pouk.ai brand surfaces: `compact`. |
| `<Hero size="intimate">` ([poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39)) | `sm` (locked pairing). |

This is a composition-level convention, not a DS-enforced rule. The DS does not validate Hero × Button size pairings.

---

## Token compliance

If `<Button>` uses size tokens internally (e.g., `--btn-h-sm`, `--btn-h-md`), a new token `--btn-h-compact` is added at ~38px. If `<Button>` uses computed scale, no new token is needed. DS team's call.

---

## Accessibility

- **WCAG 2.5.8 AA tap target** (24×24px minimum): **passes** at 38px.
- **WCAG 2.5.5 AAA tap target** (44×44px target): **fails** at 38px — same trade-off as `sm`. AA accepted as the brand-stage bar per pouk.ai `meta/decisions/2026-05-17-home-illustration-and-density.md` D-20.
- Focus ring, hover, active states: inherit `<Button>`'s existing behavior.

---

## Motion / hydration

No motion implications. No hydration implications. R-079 zero-JS contract preserved.

---

## Trade-offs

1. **API surface widens**. Three sizes becomes four. Consumers face one more option in the decision tree. The proposal accepts this — the gap between `sm` (32) and `md` (44) is functionally too coarse, and the AAA-tap-target waiver is already established at `sm`.
2. **AAA tap target still not met.** Same trade-off as `sm`. Consumers needing strict AAA must use `md` or `lg`.
3. **Token / scale-table addition.** Minor DS-side maintenance cost.
4. **Pairing convention is consumer-owned, not DS-enforced.** The DS does not validate that Button × Hero size combinations are visually proportional. The risk of a future consumer using `<Hero size="display">` + `<Button size="sm">` (the wrong pairing pouk.ai currently ships interim) is unchanged by this proposal.

---

## Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Exact min-height**: 36px / 38px / 40px? Proposal recommends 38px as the midpoint; DS team's typographic intuition decides.
2. **Naming**: `"compact"` vs `"sm-plus"` vs `"intermediate"` vs other? `compact` is suggested as it's a register-name not a position-name.
3. **Scale interpolation**: padding/typography linear-interpolated between `sm` and `md`, or tuned by hand? Hand-tuned likely reads better.
4. **Token introduction**: new token (e.g. `--btn-h-compact`) or computed value? DS-side architectural call.
5. **Documentation**: should DS docs surface a pairing-convention recommendation per Hero size, or leave that fully consumer-owned?

---

## Adoption plan

1. `@poukai-inc/poukai-ui` maintainers accept proposal (or counter-propose).
2. DS minor bump shipping `Button` `size="compact"` + any new token. Per ADR-0003, prop addition with preserved default = minor (`0.6.x` → `0.7.0` or alongside the `<Hero size>` / `<Hero illustration>` minor if bundled).
3. pouk.ai site bumps DS dep.
4. pouk.ai composition `meta/compositions/pages/home.md` §6.3 amended: `compact` replaces `sm` as the Hero CTA pairing at `<Hero size="display">`. Pairing-convention table added.
5. Engineer flips `<Button asChild size="sm">` → `<Button asChild size="compact">` in `src/components/HomeHero.tsx`. Single line change in same PR that consumes `<Hero size="intimate">` (poukai-ui#39).
6. Subsequent pouk.ai pages adopt as their amendments land.

---

## Out of scope

- A `size="xs"` below 32px. Tap-target AA would fail. Brand surfaces don't need it.
- A `size="xl"` above 52px. Existing `lg` covers any "loud CTA" need.
- Per-pairing automatic validation in `<Hero>` (e.g., warning if `<Hero size="display"> + <Button size="sm">`). Pairing remains a composition-level convention, not a DS-enforced contract.
- Responsive size variations (different size on mobile vs desktop). If needed by future consumers, a separate `size` prop accepting responsive shorthand is a follow-up proposal.

---

## Why this is a third proposal, not bundled

[poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39) (`<Hero size>`) and [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) (`<Hero illustration>`) were filed 2026-05-17 with the framing that `<Button size>` was already in the API and required no DS work. Audit of the partial-ship state on 2026-05-17 revealed the `sm`/`md` gap is too coarse at the brand's editorial register, surfacing the need for `compact`. This is a follow-on proposal, not a re-framing of the originals — the originals stand. Maintainers may choose to bundle the three minor bumps or ship them separately.
