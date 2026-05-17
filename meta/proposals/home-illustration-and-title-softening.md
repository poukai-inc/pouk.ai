# Proposal: Home illustration + Hero title softening

**Status**: Draft — research + options, not a final recipe
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Date**: 2026-05-17
**Governing spec**: `meta/specs/pages/home.md` (Approved)
**Ratified composition this would supersede (in part)**: `meta/compositions/pages/home.md`
**DS version targeted**: `@poukai-inc/ui@0.6.1`

---

## 0. Why this proposal exists

Arian reviewed `/` post-cutover and surfaced two reactions:

1. **The page reads as a finished wireframe, not a finished page.** No imagery, no figurative anchor. The brand is named for the Pouākai (the mythic Haast's eagle) and the bird is nowhere visible. The page passes parity with the holding `index.html` but does not yet earn the editorial weight the inspiration anchors (Anthropic, Every, Lex) carry.
2. **The Hero title at its current scale reads as brutalist** — confrontational where the brand voice wants quiet authority. Specifically the title slot at clamp 36–68px feels too loud at typical desktop widths. A secondary, softer concern: on a 13–14" laptop (~800px viewport), the SiteShell footer sits below the fold; Arian would prefer it slightly closer up.

This document is the **research + options** stage. It does not propose a final composition. The ratified `meta/compositions/pages/home.md` continues to govern shipped behavior until Arian approves a direction here and a successor composition is authored.

**What this document is allowed to touch (per the brief):**

- Hero illustration concepts (DS-gap territory — `<Hero>` has no image/illustration slot today).
- Hero title softening levers (DS-gap territory for two of three options; editorial for the third).
- `.site-page` `padding-block` tuning (site-side, already in our lane per the ratified composition §2 Section 2).

**What this document explicitly does not touch:**

- D-11 (integrated lede-extension shape, `Here's why →` as a single integrated link sentence).
- D-12 (status-line text byte-identical: `"Currently taking conversations for Q3."`).
- D-13 (funnel nav order: `/why-ai`, `/roles`, `/principles`).
- IA — still a single Hero block followed by the `SiteShell` footer. No new sections.
- StatusBadge motion or hydration model. Zero-JS contract (R-079) holds.
- Nav structure or behavior.

---

## 1. Moodboard — Pouākai-flavored, Anthropic/Every/Lex-coded

Eight references, grouped by what they teach us. Each caption names the takeaway, not just the source.

### a. AI-thoughtful editorial — the primary anchors

1. **Anthropic homepage — [anthropic.com](https://anthropic.com)**
   Calm, near-monochrome, editorial-serif tagline on a warm off-white canvas, with quietly abstract product art (the recent "Glasswing" treatments use soft layered geometry and a muted palette). No mascot, no stock photography. The page earns its weight from typographic restraint plus one or two figurative moments per scroll. **Lesson:** restraint can coexist with one strong figurative anchor — but the anchor must be muted enough that it never competes with the headline.

2. **Every — [every.to](https://every.to)**
   Custom hand-drawn illustration headers on every essay — distinctive, single-color line work, often surreal, sometimes mythological. Treated as editorial inserts, not background wash. Each illustration belongs to its piece and never repeats. **Lesson:** when illustration is bespoke and signed by the brand, it reads as authorship, not decoration. The opposite of stock or generative-AI imagery.

3. **Lex — [lex.page](https://lex.page)**
   Sparse hero, large display sans, generous whitespace, a single product screenshot as the figurative element. No mascot. The page's calm is its product demo. **Lesson:** for a tool brand, the product itself can be the imagery. For pouk.ai (no product surface to show) we don't get this option — we need a different figurative anchor.

### b. Editorial restraint with figurative anchor — adjacent

4. **Stripe Press — [press.stripe.com](https://press.stripe.com)**
   Book covers are the imagery. The grid is sparse, the typography is editorial, and the only color comes from the cover art. No decorative shapes, no gradients. **Lesson:** when each visual artifact is a *thing in itself* (a book cover, a plate), you don't need decoration to fill space — the artifact carries it.

5. **NYT The Daily, podcast tile illustrations — [nytimes.com/the-daily](https://www.nytimes.com/column/the-daily)**
   Editorial ink-wash + line-art portraits for each episode. Single-color, painterly, never photographic. Sits inside a calm grid. **Lesson:** ink-wash + line-art is a viable register for "serious, considered, hand-made" without going Old-World engraving.

### c. Eagle / bird-of-prey illustration history — for Pouākai specifically

6. **Audubon, *Birds of America* plates — [audubon.org/birds-of-america](https://www.audubon.org/birds-of-america)**
   19th-century lithographic plates: precise, naturalist, life-size on the page, single-bird focus, often with a hint of habitat. Color exists but is restrained. **Lesson:** this is the most direct historical reference for a single-bird editorial illustration. The trade-off is the Old-World register — beautiful, but at risk of reading as antiquarian rather than AI-forward.

7. **Te Papa Pouākai / Haast's eagle reconstructions — [tepapa.govt.nz](https://www.tepapa.govt.nz/discover-collections/read-watch-play/maori/haasts-eagle-pouakai)**
   New Zealand museum reconstructions and scientific illustrations of the actual Pouākai (Haast's eagle): stooping silhouette, wing geometry, immense scale relative to the moa it hunted. **Lesson:** the bird's *silhouette in flight* (stooping from height) is iconographically distinctive — recognizable as Pouākai to anyone who knows the story, and as "raptor stooping" to anyone who doesn't. The lede already cites this; the visual could match it. **Constraint:** never appropriate Māori visual motifs (no kowhaiwhai patterning, no koru, no carving stylization). The eagle as bird is shared cultural-natural heritage; Māori visual language is not.

8. **Ernst Haeckel, *Kunstformen der Natur* — [wikipedia.org/Kunstformen_der_Natur](https://en.wikipedia.org/wiki/Kunstformen_der_Natur)**
   Symmetrical scientific-naturalist plates with extraordinary line precision. The register is "rigorous observer, beautiful execution." **Lesson:** if we go figurative-naturalist, this is the high bar. Risk: visually heavy; would need significant restraint in our application (single mark, never a full plate).

### d. Generative-but-figurative — to keep in our peripheral vision

9. **Cabinet Magazine — [cabinetmagazine.org](https://www.cabinetmagazine.org)**
   Curated editorial that mixes ink wash, archival imagery, and bold typography in a clearly old-world-meets-now register. **Lesson:** an antiquarian illustration register *can* sit beside contemporary content without reading as costume, but only if the surrounding typography is restrained and modern (Geist on the body copy carries this for us already).

---

## 2. Illustration concept options — three distinct directions

Each option is a complete concept brief. None are mutually exclusive at the moodboard level, but at composition time we pick one lane. All three respect R-079 (zero JS on `/`) and the `prefers-reduced-motion` contract.

### Option A — "The stooping silhouette" (engraving register, right-side companion)

- **Brief:** A single black-line engraving-style illustration of Pouākai mid-stoop — wings drawn back, descending from upper-right toward lower-left, no background. Single SVG asset, ~280–360px on the long axis, sits as a right-side companion to the Hero text block in a two-column layout above the fold.
- **Form:** Black line on transparent, in the register of Audubon plate cross-hatching at a modern weight — closer to Cabinet Magazine's ornithological inserts than to literal 19th-century lithography. Subtle stippling for shading; no color. Stroke color resolves to `--fg` (`#1D1D1F`), allowing clean dark-mode inversion.
- **Placement on the Hero:** Two-column split — Hero text in left column (~60% width), illustration in right column (~40% width), both vertically centered. On viewports below the `--hero-max` threshold (608px Hero text cap), the illustration shifts below the lede (or hides — see trade-off).
- **Motion behavior:** Static. No hover state. No scroll trigger. The wings do not animate. CSS-only.
- **Trade-offs vs "restraint is the credential":**
  - **For:** A single figurative mark, signed by the brand, no decorative noise. The same restraint principle (one Hero, one StatusBadge, one Button) extended to "one illustration." Pouākai becomes a visible part of the brand instead of a buried etymology footnote.
  - **Against:** Engraving register risks reading as Old-World / antiquarian. The most direct conflict with the Anthropic/Every/Lex anchors, which are all near-monochrome but contemporary in line quality. Mitigatable by stroke weight and avoiding ornamental flourishes — closer to Reading.supply's restraint than to a Haeckel plate. Highest execution risk: a bad engraving illustration looks like clip art.
  - **Against:** Hero shipped centered (or DS-default-aligned per the ratified composition); a right-side companion requires a horizontal-split layout the current `<Hero>` does not expose.
- **DS gap surfaced:** `<Hero>` needs an `illustration` (or `companion`) slot. See §4.
- **Mobile fallback:** Hide on viewports < 720px (text-only Hero, identical to today's shipped state). The illustration is desktop enhancement, not core content. The fall-back to today's centered Hero on mobile is acceptable because the brand restraint principle is preserved everywhere.

### Option B — "The watermark feather" (faint full-bleed backdrop)

- **Brief:** A very faint (8–12% opacity) silhouette of a single Pouākai feather or wing-tip occupies the page background behind the Hero. Hero text sits on top with no layout change. The mark is large (~60% of viewport width), oriented diagonally, color is `--fg-muted` at low opacity — present but ambient, not figurative-foreground.
- **Form:** SVG, single shape, no detail. Closer to a tonal wash than an illustration. Inspired by the way Anthropic occasionally puts a soft abstract geometric form behind a section without competing for attention.
- **Placement on the Hero:** Behind the entire Hero block, full-bleed within the `.site-page` content area. Hero text composition is unchanged from today.
- **Motion behavior:** Static. CSS `background-image` (or SVG `<svg>` positioned absolutely with `pointer-events: none`). No animation.
- **Trade-offs vs "restraint is the credential":**
  - **For:** Lowest layout disruption. Hero internal rhythm is untouched (the DS still owns it). Brand presence increases without competing with the tagline. Mobile-safe — at low opacity the mark scales gracefully or hides without issue.
  - **For:** Closest aesthetic register to the Anthropic/Every/Lex anchors (ambient, abstract-leaning, no figurative-foreground statement).
  - **Against:** Risks reading as "watermark" in the cheap sense — the move every B2B SaaS site does. Has to be executed at exactly the right opacity and scale or it falls into noise.
  - **Against:** Doesn't fully address Arian's "finished wireframe, not finished page" reaction — a watermark is still less than a real figurative anchor.
- **DS gap surfaced:** Minimal. Could be implemented as a site-side `.site-page` background-image without DS changes — *but* the composition's no-override rule on Hero rhythm means we'd be doing this as a page-level background, not a Hero-internal element. Worth flagging to DS that `<Hero>` could optionally accept a `background` slot for consistency across other Pouk AI INC services.
- **Mobile fallback:** Reduce opacity further or hide entirely below 720px.

### Option C — "The small mark above the status" (tucked figurative)

- **Brief:** A small (24–32px tall) Pouākai isotype mark — minimal line-art silhouette of the stooping bird, single color, no detail — tucked above the StatusBadge in the Hero. Reads as a brand sigil, the way a publisher's colophon sits above a book's title page.
- **Form:** SVG, single closed silhouette, very simple line. More iconographic than illustrative — closer to a printer's mark than a plate. Resolves to `--fg`.
- **Placement on the Hero:** Above the StatusBadge in the `status` slot of `<Hero>`. The slot accepts ReactNode so we can render a `<div>` containing the mark + the badge stacked, with `--space-3` (12px) between them.
- **Motion behavior:** Static. Optionally a *very* subtle CSS-only fade-in on initial load using `--dur-slow` + `--easing` — but the safer default is no entrance animation at all (matches today's Hero behavior, no R-079 pressure). Gated by `prefers-reduced-motion: reduce` via the DS's `:root !important` block. Recommendation: ship static.
- **Trade-offs vs "restraint is the credential":**
  - **For:** Smallest possible figurative addition. Sits as a colophon, not as art-direction. Mobile-safe at this scale. Composes inside the existing `status` slot — no DS layout change needed.
  - **For:** Reads as a *sigil*, which fits the "brand mark already a credential" framing of the page (the tagline does the same job typographically; this would do it iconographically).
  - **Against:** Smallest payoff against Arian's "finished wireframe" reaction. If the goal is to bring Pouākai into the visual world of the page in a way the reader actually feels, this option may be too quiet.
  - **Against:** Composing inside the `status` slot blurs the slot's semantic — `status` is currently a `StatusBadge`-only slot per the DS. Stacking a mark above the badge inside that slot works mechanically (ReactNode), but it's a soft violation of the slot's intent. Cleaner long-term would be a separate `eyebrow` or `mark` slot in `<Hero>` above `status`.
- **DS gap surfaced:** Optional cleaner path — a `mark` or `sigil` slot on `<Hero>` that sits above `status`. See §4.
- **Mobile fallback:** Unchanged from desktop. The mark is small enough to live everywhere.

### My recommendation among the three

**Option A — "The stooping silhouette"** carries the most weight per pixel and aligns best with Arian's "finished page, not finished wireframe" concern. The trade-off (engraving register) is real but executable — see §1d on stroke weight discipline. **Option C** is the safest fallback. **Option B** is the lowest-risk-of-execution-failure but the smallest payoff. If we have to ship something before a real illustration commission lands, I'd default to **Option C** as an interim and queue **Option A** as the post-launch upgrade.

---

## 3. Title-softening options — three levers

The ratified composition (§2 Section 2) forbids site-side override of the Hero's internal rhythm and the title's display scale. The DS owns `--fs-tagline: clamp(2.25rem, 1.5rem + 3.5vw, 4.25rem)` (36–68px) — and this is what feels brutalist at desktop widths. Three levers, in order of how much DS work they require.

### Option A — DS-gap: `<Hero size>` (or `<Hero density>`) prop

- **What changes:** `<Hero>` exposes a new prop, e.g. `size="display" | "intimate"` (default: `"display"`, preserves current behavior). At `size="intimate"`, the Hero internally swaps `--fs-tagline` for a new lower-range token (e.g., `--fs-tagline-intimate: clamp(2rem, 1.25rem + 2.5vw, 3.25rem)` — 32px to ~52px). The DS owns the new token.
- **What stays:** Everything else — text column cap (`--hero-max` 38rem), status→title gap (`--space-6`), title→lede gap (`--space-8`), DS-default alignment, font family (Instrument Serif), italic on `<em>AI</em>`.
- **Which composition clause reopens:** §2 Section 2 "Hero title display scale: DS-owned (`<Hero>` molecule). Cannot be altered site-side without violating the ratification." — that clause stays true; we just opt into a different DS-owned scale. The ratified composition would be amended to set `size="intimate"` on the home Hero specifically.
- **Who approves:** Arian (composition change). `@poukai-inc/poukai-ui` maintainers (new DS prop + new token + Ladle story + a11y check). DS PR opens a new minor version (per ADR-0003: token additions = minor).
- **Trade-offs:** Cleanest long-term — every page that opts for "intimate" mode (likely just `/`, possibly `/principles` later) uses one prop. Worst short-term — requires a DS release and a successor composition before we can ship the softening.

### Option B — DS-gap: `<Hero titleScale>` token override slot

- **What changes:** `<Hero>` exposes a prop like `titleScale={{ min: "2rem", mid: "1.25rem + 2.5vw", max: "3.25rem" }}` (or a single `titleScale` token name to swap in). The site passes a custom scale per page.
- **What stays:** Same as Option A — column cap, gaps, alignment, font.
- **Which composition clause reopens:** Same as Option A.
- **Who approves:** Arian + `@poukai-inc/poukai-ui` maintainers. DS PR is a minor version.
- **Trade-offs:** More flexible than Option A, but it pushes a typography decision *out* of the DS and into the consumer — exactly the inversion of the shape-vs-substance rule (the masterplan's framing puts type scale in the DS). Strongly **not recommended** — Option A is the right shape for this. Including Option B only to make the third lever distinct.

### Option C — Editorial fix at the content layer

- **What changes:** Re-word the tagline so its visual weight reads differently without touching the scale. Today: `"Technical consulting for teams shipping with AI."` — 8 words, dense, every word load-bearing, the italic `<em>AI</em>` carries the typographic accent. Options:
  - **C.1** — Cut a clause: `"Technical consulting for teams shipping AI."` (7 words; removes "with"). Reads slightly more declarative. Risk: less precise about the relationship between the team and AI.
  - **C.2** — Soften the verb: `"Consulting for teams shipping with AI."` (6 words; drops "Technical"). Risk: loses the precision of "Technical" — the page's audience self-selects on that word.
  - **C.3** — Restructure: `"For teams shipping with AI."` (5 words). Reads as a dedication line, not a tagline. Risk: too oblique; reads as caption, not headline.
  - **C.4** — Add a hairline break: keep the words, but split into two visual lines via a `<br>` at the natural caesura: `"Technical consulting / for teams shipping with AI."` This is a *visual* edit, not a content edit — the line break gives the eye a rest mid-headline, which softens perceived density without changing scale. **Recommended C variant.**
- **What stays:** The DS-owned scale (no DS work). The italic `<em>AI</em>` (preserved verbatim). The column cap.
- **Which composition clause reopens:** §2 Section 2 brand notes ("The `<em>AI</em>` inside the title is preserved verbatim from the pre-cutover `index.html`") — stays true. The `<br>` for C.4 is a substance-layer addition (a line break inside a `ReactNode`), not a DS rhythm override. The composition could ratify the break placement.
- **Who approves:** Arian only. No DS work. Could ship in a same-day successor composition.
- **Trade-offs:**
  - **For:** Fastest path. No DS dependency. Doesn't require a new composition recipe — only a `HomeHero.tsx` content edit (which the engineer can land per the existing content-substance lane).
  - **For:** C.4 specifically addresses the *perceived* density without touching the *actual* scale. The brutalist feeling Arian flagged may be partly a wrapping artifact — at clamp-max widths, the title wraps to two lines awkwardly; a deliberate break at the caesura controls this.
  - **Against:** Doesn't actually lower the title scale. If the brutalism feeling persists after C.4, we still need Option A.

### My recommendation among the three

**Ship Option C.4 immediately as a same-day softening** (zero DS dependency, low-risk, high-information). **Then evaluate after a week of looking at it** whether the title scale itself needs to come down. If yes, **commission Option A**: file the DS proposal, work with `@poukai-inc/poukai-ui` maintainers on `<Hero size="intimate">`, ship the successor composition. **Reject Option B** — wrong shape for the DS.

---

## 4. DS-gap proposals to file

These are *names and scopes only*. We do not author DS-side proposals in this repo. Arian decides whether to route each to `@poukai-inc/poukai-ui` maintainers.

### 4.1 `<Hero illustration>` slot

- **File path in DS repo (proposed):** `proposals/hero-illustration-slot.md` in `poukai-inc/poukai-ui`.
- **Scope:** Add an optional `illustration?: ReactNode` slot to `<Hero>`. Renders to the right of the Hero text column above a configurable breakpoint (default: `--content-max` or similar); collapses below the lede or hides on narrow viewports per a `hideOnMobile` companion prop or DS-owned breakpoint logic. Respects `--hero-max` for the text column; the illustration column gets remaining width up to a DS-owned cap.
- **Motion contract:** Static by default. Any animation gates on the DS's `:root !important` `prefers-reduced-motion` block.
- **Triggered by:** Illustration Option A (and would also enable future per-page editorial illustrations on `/why-ai`, `/principles` if we want them).
- **Open question for DS:** Whether this is one slot (`illustration`) or two (`illustration` + a `position: "right" | "below" | "background"` companion). My instinct: single slot, DS owns position rules. Don't push composition control to the consumer.

### 4.2 `<Hero size>` prop for title-scale density

- **File path in DS repo (proposed):** `proposals/hero-size-prop.md` in `poukai-inc/poukai-ui`.
- **Scope:** Add `size?: "display" | "intimate"` prop on `<Hero>` (default `"display"`, preserves current behavior). At `"intimate"`, the Hero swaps `--fs-tagline` for a new `--fs-tagline-intimate` token (DS-defined). All other Hero internal rhythm tokens unchanged. Token addition is a DS-side minor bump per ADR-0003.
- **Motion contract:** No motion change.
- **Triggered by:** Title-softening Option A.
- **Open question for DS:** Whether `"intimate"` should also tune the status→title and title→lede gaps (today's `--space-6` and `--space-8`) proportionally. My instinct: leave the gaps alone — a smaller title with the same gaps will already feel less brutalist. Tuning the gaps too is over-engineering at this stage.

### 4.3 `<Hero mark>` or `<Hero sigil>` slot (optional, lower priority)

- **File path in DS repo (proposed):** `proposals/hero-mark-slot.md` in `poukai-inc/poukai-ui`.
- **Scope:** Add an optional `mark?: ReactNode` slot above the `status` slot in `<Hero>`. Centered (or DS-default-aligned), small (~24–32px tall by convention), with `--space-3` gap to the status slot.
- **Motion contract:** Static. Same `prefers-reduced-motion` gating as everything else.
- **Triggered by:** Illustration Option C — but only if we want a cleaner slot rather than overloading the existing `status` slot.
- **Open question for DS:** Whether this is worth a dedicated slot vs. just documenting that the `status` slot can carry a stacked node. My instinct: dedicated slot, because slot semantics matter and overloading is the start of API drift.

### 4.4 `<Hero background>` slot (only if we pick Illustration Option B)

- **File path in DS repo (proposed):** `proposals/hero-background-slot.md` in `poukai-inc/poukai-ui`.
- **Scope:** Add an optional `background?: ReactNode | string` slot on `<Hero>` that renders behind the Hero text block, full-bleed within the Hero's container, with `pointer-events: none` and an opacity ceiling enforced by the DS.
- **Motion contract:** Static.
- **Triggered by:** Illustration Option B.
- **Open question for DS:** Whether to support this at all, given Option B can be implemented as a site-side `.site-page` background-image without DS work. Worth filing only if Option B wins *and* we want other Pouk AI INC services to be able to reuse the pattern.

---

## 5. `.site-page` padding tuning — site-side

The composition explicitly tags `.site-page { padding-block: var(--space-16); }` (64px top and bottom) as **site-owned** in `src/styles/site.css`. This is freely tunable at the site layer.

### Current state

- `.site-page` padding-block: `var(--space-16)` = **64px** top, **64px** bottom.
- `<SiteShell>` header height ≈ Wordmark 56px + DS-internal padding (estimated ~48px combined header band — DS-owned, not exposed but inferable from the shipped page).
- Hero internal height (status + title + lede + CTA + DS-internal gaps) ≈ 380–460px at desktop widths, depending on title wrap (the brutalist clamp-max at ~68px pushes this higher when the title wraps two lines).
- `<SiteShell>` footer height ≈ 60–80px including DS-internal padding.

### Math at the two target viewports

Approximate vertical accounting (header + top-padding + Hero + bottom-padding + footer), all values in px:

| Viewport | Header | Top-pad | Hero | Bottom-pad | Footer | **Total** | Fits in viewport? |
|---|---|---|---|---|---|---|---|
| **800px** (~13–14" laptop) | ~104 | 64 (`--space-16`) | ~420 | 64 (`--space-16`) | ~70 | **~722** | yes, but tight; footer ~78px from bottom |
| **800px** with `--space-12` (48px) | ~104 | 48 | ~420 | 48 | ~70 | **~690** | yes; footer ~110px from bottom |
| **800px** with `--space-10` (40px) | ~104 | 40 | ~420 | 40 | ~70 | **~674** | yes; footer ~126px from bottom |
| **768px** (iPad portrait) | ~104 | 64 | ~440* | 64 | ~70 | **~742** | yes, tight; footer ~26px from bottom |
| **768px** with `--space-12` (48px) | ~104 | 48 | ~440* | 48 | ~70 | **~710** | yes; footer ~58px from bottom |
| **768px** with `--space-10` (40px) | ~104 | 40 | ~440* | 40 | ~70 | **~694** | yes; footer ~74px from bottom |

*Hero height is slightly larger at 768px because the title is more likely to wrap to two or three lines at narrower widths.

### Important DS-token reality check

Per the DS `tokens.css`, the spacing scale is `--space-1, -2, -3, -4, -6, -8, -12, -16, -24, -32`. **`--space-10` does not exist** (the scale skips from 8 → 12). The line in the brief proposing `--space-10` (40px) is not implementable without a DS proposal to add the token. The realistic site-side options are:

- Keep `--space-16` (64px).
- Step down one stop to `--space-12` (48px).
- Step down two stops to `--space-8` (32px) — likely too tight; Hero would crowd the header band.

### Recommendation

**`var(--space-12)`** (48px top and bottom). It buys ~32px back on every viewport, brings the footer noticeably closer to the fold on 800px laptops (footer rises from ~78px below to ~110px below — visible improvement in proportional terms), and stays well clear of the "too tight" floor at `--space-8`. It preserves a clear page-level rhythm that's distinct from the Hero's internal rhythm (DS-owned `--space-6` / `--space-8`), so the page still has a hierarchy of breathing room.

This change is **site-side, no DS dependency, no composition rewrite** — only a §3 "Cross-section rhythm" amendment in the successor composition.

If after a week with `--space-12` the footer still feels too far, **the next move is not to reduce padding further** — it's to revisit whether the Hero itself is too tall (which loops back to title-softening Option A: a smaller title means a shorter Hero means the footer rises naturally without compressing the page's breathing room).

---

## 6. Open questions for Arian

1. **Engraving register vs. modern-line register.** The eagle illustration question hinges on this. Audubon / Cabinet / Haeckel = Old-World naturalist. Anthropic / Every / Lex = contemporary abstract or modern-line. If you want the bird to be a visible figurative anchor (Option A), do we go naturalist-line (engraving) or modern-line (closer to Every's editorial illustration register)? The choice changes the brief we'd give an illustrator.

2. **Bird in flight vs. bird at rest.** Pouākai is most iconographically distinctive *stooping from height* — wings drawn back, descending. This is also what the lede already says ("hunting by stooping from height"). Alternative: a profile silhouette (perched, head turned), which is calmer but loses the kinetic association. My instinct: stooping. Confirm or override.

3. **Commission vs. AI-generated vs. archive.** None of the three is automatically wrong, but they read very differently. A commissioned illustration signs the brand (Every's model). An AI-generated illustration risks reading as exactly the cliché pouk.ai sells against. An archival plate (e.g., from Te Papa or an out-of-copyright Audubon equivalent) is fastest but constrains the visual to the source's register. Which lane do you want to be in?

4. **Title softening — same-day vs. wait for DS.** Do you want me to author the same-day successor composition for the C.4 `<br>` lever (no DS dependency, ships immediately), or hold and wait until Option A (DS prop) is in flight so both ship together?

5. **Padding change — bundle or separate.** Should `.site-page` padding-block tuning ship as part of the same composition revision as the title softening (one PR, one composition successor, one ratification cycle), or as its own minor revision now? My instinct: bundle — they're both "softening the page" moves and ratifying them together makes the rationale clearer.

6. **Does any of this affect `/why-ai`, `/roles`, `/principles`?** The illustration question in particular: if we commission an illustration for `/`, does the same illustrator do per-page marks for the other three routes, or is the bird unique to `/`? This affects the brief and the budget but not this composition.

---

## 7. Out of scope for this proposal

- D-11, D-12, D-13 — closed launch-readiness decisions, not reopened here.
- IA — still single Hero, no further sections. Adding a section is a spec-level conversation per the ratified composition §2 Section 3.
- StatusBadge motion or hydration model. The CSS pulse is DS-owned and not touched.
- Nav structure or behavior. The funnel order (D-13) holds.
- Footer composition. The duplicated email link (Hero CTA + footer line) is ratified and not revisited.
- Dark-mode behavior. Out of scope per the ratified composition §8.
- OG image, favicon, apple-touch-icon, robots.txt, sitemap.xml. Owned by `BaseLayout.astro` and `public/`, not composition concerns.
- The other three routes (`/why-ai`, `/roles`, `/principles`). Each has its own composition; cross-route illustration consistency is question 6 above, not a deliverable here.
- Authoring any DS-side proposal markdown. Section 4 names and scopes them only.
- Writing code. This is a research document.
