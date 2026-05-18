# Composition recalibration: `/about` v2 — register-lead explorations

**Route**: `/about`
**Status**: Draft (memo, not a composition revision)
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-18
**Supersedes**: `meta/compositions/proposals/about-v2-apple-inspired.md` (renamed to this file under founder feedback 2026-05-18 — "Apple-inspired" framed the recalibration too narrowly; the brief is now register-lead exploration with full DS-side collaboration).
**Trigger**: founder reviewed v1 of memo + live `/about` v1 and recalibrated two things — (1) `/about` is the first of its class, not the page that has to fit the existing four routes' rhythm; the rest of the site iterates *toward* whatever `/about` establishes. (2) `@poukai-inc/poukai-ui` maintainers is a collaborator, not a constraint — file DS-gap proposals optimistically; restraint stays, "boring" is now also a failure mode.
**Governing spec (v1, will be revised)**: [`meta/specs/pages/about.md`](../../specs/pages/about.md) (Approved 2026-05-18; PM being re-briefed in parallel with the same recalibration).
**Live v1 reference**: shipped page at commit head; rendered HTML inspected at `http://localhost:4321/about/` (15,644 bytes; ~440 words across 7 prose blocks in one column).
**Composition v1**: [`meta/compositions/pages/about.md`](../pages/about.md) (Approved 2026-05-18). Stays `Approved` and shipped until v2 composition revision lands; this memo does not flip v1.
**DS version targeted**: `@poukai-inc/ui@0.9.0`.
**DS-gap proposals filed concurrently with this memo** (under `meta/proposals/ds-side/`):
- [`section-surface-rhythm.md`](../../proposals/ds-side/section-surface-rhythm.md) — multi-surface page composition (page-section background tier).
- [`statement-molecule.md`](../../proposals/ds-side/statement-molecule.md) — `<Statement>` molecule for pull-quote-shape declarative units.
- [`type-display-scale.md`](../../proposals/ds-side/type-display-scale.md) — `--fs-display` and `--fs-display-lg` for editorial moments larger than `--fs-tagline`.

---

## 0. Framing

`/about` v1 reads as a wall of text. v1 of this memo (the Apple-inspired pass) sketched a six-moments composition that fixes the wall, but framed itself defensively — *"v2 lands contained on `/about`; the other four routes are untouched"* — and ruled three Apple-vocabulary patterns out of bounds on DS-contract grounds: surface alternation, full-bleed type, `--fs-tagline-intimate` outside `<Hero>`.

The founder retired both framings:

> **"Don't compare /about to the rest of the pages in the site because /about is the first one of its class and would work as an inspiration for the rest of the site."**
>
> **"Feel free to explore other formats, sections, visuals and compositions for the page. I want you to still be minimalistic but creative to introduce great experiences. You have a whole Design System team to generate components for you."**

So this memo retires `containment` and replaces it with `register-lead`. It also retires `honest constraints` and replaces it with `DS-gap inventory, ranked by what each unlocks`. Restraint stays. "Boring" is also a failure mode.

**Stance**: pouk.ai's brand voice is restrained, operator-grade, technically confident. Restraint is not the opposite of crafted — it is what *makes* the craft legible. The page should feel like a piece of considered design, not like a template. Three properties guide every direction below:

1. **Type and rhythm are load-bearing.** They have to do most of the work imagery would do on a peer brand site.
2. **One register, executed deeply.** Better to pick one strong compositional move and do it fully than to interleave four softer moves.
3. **The page is a *moment*, not a *manifesto*.** Total read-time target: 60–90 seconds. The page should be scannable in 10–15 seconds and read-through in under two minutes.

**Assumptions** (called out so future readers can argue against them):

- A3 (no illustration in v1) **is re-opened** by this memo per the founder's feedback, but the surface is broader than "commission an urban sketcher" — it's *illustration-as-language*. See §4.
- PM A5 (first-person voice) **is reversed**. v2 is brand-voice throughout. The founder's "this is a company, not Arian's story" is read as a direct reversal of A5.
- PM A6 (~400–600 words, three sections) **is collapsed**. v2's target is ~120–250 words across whatever the chosen direction's IA shape is. Three sections is no longer a structural lock.
- Lighthouse 100/100/100/100 and `prefers-reduced-motion` and zero-JS-unless-justified contracts **all hold**. The recalibration buys creative scope; it does not buy out the engineering contract.

---

## 1. Read of v1's failure modes

What the live page actually does, block by block, with the failure-mode call. (Unchanged from the prior memo — this read remains accurate.)

| Block | Live content (approx.) | What it does well | Where it collapses into prose density |
|---|---|---|---|
| Eyebrow | "About" (`--fs-micro`, `--fg-muted`) | Quiet page label; correct register; nothing wrong. | Keep. |
| Hero lede | "Who you'd be writing into if you sent the email below." (1 sentence, 12 words, `--fs-body`) | Names the reader's actual question, points to the conversion target. | The single thing above the page's `<h1>` is set in the same size as the body paragraphs below it. No display-scale moment anchors the page's identity before the reader hits prose. |
| §1 `<h1>` ("The arc") + 3 paragraphs ~165 words | Three first-person paragraphs telling Arian's career arc | First-person, specific verbs, ends on a load-bearing sentence. | The page's first display-weight type is an autobiographical heading. "The arc" is personal-essay framing, not company-about-page framing. |
| §2 `<h2>` + 2 paragraphs ~175 words | Founding posture, autobiographical AI-collapse seam | The seam framing is real and substantive. | Second wave of first-person prose. ~340 words of "I" voice in five paragraphs, no rhythm break. Wall-of-text peak. |
| §3 `<h2>` + 1 paragraph ~75 words | Brand-voice declarative origin paragraph | Voice-shift correct; macron preserved; discipline list lands. | Arrives 340 words in — after the reader has categorized the page as "long bio." |
| End CTA | 1 line, `--fg-muted` | Wry, differentiated. | Lands as the ninth prose block in one column. The CTA's invite is invisible. |

Aggregate failure modes:

1. **One column, one type ramp, one surface, one register.** Everything sits on `--bg`, capped at `--content-max`, styled at three sizes. No surface alternation, no display-scale moment, no rhythm break.
2. **First-person + autobiographical + ~340 words of "I" prose = personal-blog register.** Reverses the founder's "this is a company" mental model.
3. **Zero pull-quote moments.** Apple-class company pages do most of their work with statements at size; v1 has none.
4. **The page's first display-scale type is an autobiographical heading.** The typographic signal is "one person's story" before the body says it.
5. **Density is paragraph-density, not composition-density.** v1 packs substance into paragraphs; v2 must distribute substance across compositional units.
6. **End-CTA is undercooked.** A muted one-line CTA after eight prose blocks is invisible.

The composition got token-discipline and a11y right. It failed on **register and rhythm**. v2 composes moments, not paragraphs.

---

## 2. DS-gap inventory (ranked by how much each unlocks)

Every prior "binding prohibition" is now a candidate proposal. I rank by how much each unlocks the v2 directions in §3, file the ones that change the page meaningfully, and note the ones that don't earn a proposal yet.

### Rank-1 unlocks (filed concurrently with this memo)

These three DS-side proposals are filed *now* under `meta/proposals/ds-side/`, framed from the v2 composition need. The DS team can accept, revise, or reject on their own timeline; the v2 composition revision (when it lands) consumes them if accepted.

#### 2.1 `section-surface-rhythm.md` — multi-surface page composition

- **The current rule**: `--surface` is "recessed inline elements only" (DS llms-full.txt line 18: *"NEVER use as a section divider"*). `--bg-elevated` is "overlays only" (line 16, anti-pattern line 164). Surface alternation between page sections is doubly-prohibited.
- **What it unlocks**: Apple-class sectional rhythm via tonal alternation. A page that runs `--bg` → `--surface` (recessed band) → `--bg` → `--surface` reads as a sequence of *moments* without any new type primitive. The single largest visual rhythm move available to a type-only page.
- **What's being proposed**: a new token tier — `--surface-section` (a recessed page-section background, **not** the inline-recessed `--surface`) — plus a documented composition pattern: page-section backgrounds may alternate between `--bg` and `--surface-section`, but never use `--surface` (inline-recessed) for the same job. The elevation rhythm stays three steps; the new token sits between `--surface` and `--bg` semantically.
- **Why the DS should care**: the current rule was authored before the v2 use-case existed. The cost of breaking the rule today (inline-recessed and section-recessed compete for the same color) is real; the cost of keeping the rule (every editorial page collapses to one surface) is also real, just not previously named. The proposal asks the DS team to choose, with the page's substantive need surfaced.
- **What the v2 composition does if DS rejects**: ship single-surface page (today's contract), lean harder on the type-and-spacing directions (§3 Directions B and C below stay viable; Direction A loses one of its strongest moves).

#### 2.2 `statement-molecule.md` — `<Statement>` molecule

- **The current rule**: no DS primitive for "short editorial-scale declarative line + optional muted supporting line, hairline-bounded." Site-side scaffolding via `principles-bookend`-equivalent classes works but does not codify the pattern.
- **What it unlocks**: every direction in §3 uses some variant of this — even the most minimal direction wants a stand-alone declarative moment that isn't a `<Hero>` title. Codifying it lets the DS opinionate on the scale, rhythm, and color contract once, instead of every consumer re-authoring it.
- **What's being proposed**: `<Statement statement={…} supporting={…} hairline={…}>` — Instrument Serif italic statement at editorial scale (between `--fs-body` and `--fs-tagline`), optional muted body-scale supporting line, optional hairline-above. The molecule is type-led; no illustration slot, no CTA slot. Scope intentionally narrow.
- **Why the DS should care**: this is the editorial-page primitive the DS doesn't have yet. `<Hero>` is a doorway; `<RoleCard>` / `<Principle>` / `<FailureMode>` are listing molecules. `<Statement>` fills the gap for editorial body composition.
- **What the v2 composition does if DS rejects**: ship a site-side `.about-statement` class resolving to existing tokens (the v1-of-memo's site-side workaround). The composition still ships; the brand-contract codification doesn't happen.

#### 2.3 `type-display-scale.md` — `--fs-display` and `--fs-display-lg`

- **The current rule**: `--fs-tagline` (clamp 2.25rem, 1.5rem + 3.5vw, 4.25rem — 36–68px) is the largest documented type scale, with `"Used exactly once per page for the Hero title"` (line 33). `--fs-tagline-intimate` is smaller (32–52px) and Hero-scoped. There is no token for type larger than `--fs-tagline`.
- **What it unlocks**: a *single-statement display moment* — a sentence or short phrase set at 80–120px (`--fs-display`) or 120–200px (`--fs-display-lg`) that makes the page feel like a piece of editorial design, not a website template. The biggest typographic move available; the move every Apple-class company page leads with.
- **What's being proposed**: two new tokens — `--fs-display: clamp(3rem, 2rem + 5vw, 7.5rem)` (~48–120px) and `--fs-display-lg: clamp(4rem, 2rem + 8vw, 12rem)` (~64–192px). Used **at most once per page**, on an editorial moment that owns the page (not on a Hero title — different role).
- **Why the DS should care**: the brand voice is restrained, but restraint doesn't preclude a single deliberate moment of scale. The token bounds the discipline (one per page, opt-in) and the consumer cannot drift into "every page has 120px type." If accepted, this becomes the largest single move the DS gives editorial pages.
- **What the v2 composition does if DS rejects**: cap display type at `--fs-tagline` for Hero and `--fs-tagline-intimate` for in-page editorial moments (the v1-of-memo's recipe). Direction A in §3 below collapses to a smaller-scale rendering.

### Rank-2 unlocks (named here, not filed)

These would meaningfully unlock v2 if filed, but the v2 composition can ship without them and they don't earn a proposal until a real consumer need beyond `/about` surfaces.

- **`--content-max-bleed`** — a layout token allowing certain components to exceed `--content-max` (1024px) up to the viewport's `--page-pad` edges. Apple uses full-bleed routinely (Pattern E in v1-of-memo); pouk.ai is type-only so the move buys less than it would buy Apple. **Not filed.** Adds layout-token surface area for one composition; revisit when a second consumer wants it.
- **`<Spread>` molecule** — a layout primitive for asymmetric grid moments (Direction C below). Would codify the "two-column layout where one column is one word at scale and the other is a body paragraph" pattern. **Not filed.** Direction C ships as site-side composition for v2; a second consumer would tip this into proposal territory.
- **`<Pull>` molecule** — pulled-quote-with-attribution. pouk.ai is brand-voice throughout; there is no attribution to pull. **Not filed.** Resurfaces if pouk.ai ever ships customer-story pages.
- **Motion token: `--ambient-period`** — would govern slow ambient loops (a wing-rise on an illustration, a hue cycle on a generative SVG). Direction D below depends on this if motion ships at all. **Not filed yet** — defer to v2-of-illustration decision in §4; if Arian picks an illustration direction that wants motion, file then.

### Rank-3 (existing DS-gaps that v2 may consume)

- **`<Hero illustration>`** (already filed at [`hero-illustration-slot.md`](../../proposals/ds-side/hero-illustration-slot.md)) — Direction D's "illustration-as-language" approach consumes this slot if accepted by DS.
- **`<Hero entrance="stagger">`** (already shipped in 0.8.0, consumed on `/`) — Direction A's hero moment may consume this for the page's opening unit; Direction B and C ship static.
- **`<Hero size="intimate">`** (already shipped in 0.7.0) — Direction A's hero scale may be `display` (default) or `intimate` depending on the rest of the page's density.
- **`<Hero variant="no-title">`** (filed v1-of-memo at [`hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md), forward-looking) — only consumed if v2 picks a direction that puts the page `<h1>` below the hero region (e.g., Direction C). Direction A re-adopts `<Hero>` with a title; Direction B uses no `<Hero>` and puts the `<h1>` in the page's display moment instead.

---

## 3. Composition directions (three to sketch, one to recommend)

Three directions, each minimalistic but creative, each pickable as v2's recipe. They differ in *which compositional move carries the page*. The recommendation at the end picks one and names the trade-off; the founder picks the final shape.

All three share:

- Brand-voice throughout (A5 reversed).
- ~120–250 words total.
- Zero motion at first paint (motion considered separately in §3.5).
- Lighthouse contract preserved.
- Same `<SiteShell>` + four-item nav + footer.
- Page `<h1>` exactly once; no level skips.

They differ in:

- Whether `<Hero>` is invoked.
- Whether type leads, surface leads, or grid leads.
- Whether motion is allowed.
- Word count distribution.

### Direction A — *Single-statement display lead* (type-led, vertical)

**One-line summary**: the page leads with one declarative sentence at `--fs-display` (or `--fs-display-lg`) scale, breathing for ~70vh, then unrolls four short stacked statements down the page.

**IA shape** (5 units, vertical):

1. **The Statement** — single declarative sentence (or two-clause phrase) at `--fs-display-lg`, Instrument Serif italic, `--fg`, max-width 90% of `--content-max`. Page `<h1>`. **One per page; the move is once, executed fully.**
   - Placeholder shape: *Draft: pouk.ai. One operator, technical consulting, AI that ships.*
   - Or: *Draft: Built by an operator. For operators.*
   - Type ramp: 80–120px on mobile, 120–192px on desktop (per `--fs-display-lg`).
   - Whitespace: `~--space-32` (128px) below the statement before the next unit.
2. **The Page Label Eyebrow** — small `--fs-micro` "About" label, sits *under* the statement, not above (inverted from v1). The reader sees the statement first; the label is annotation.
3. **The Story** — four to six lines of brand-voice declarative body at `--fs-body`, `--fg`, max-width `--hero-max`. No headings. ~60–90 words. Tells the *substantive* story (what pouk.ai is, what it does, who runs it) without auto-bio framing.
4. **The Name** — Pouākai section. Heading `<h2>` at `--fs-tagline-intimate` Instrument Serif italic, ~75-word body. Voice-shift collapses (the whole page is brand-voice now; this section sits in continuous register).
5. **The Invite** — single muted line + `mailto:`. Hairline above.

**DS surface used**: `--fs-display-lg` (new token, filed §2.3), `<Statement>` (new molecule, filed §2.2; consumed for Unit 3 if it lands, otherwise site-side), `--fs-tagline-intimate` (existing), Instrument Serif italic (existing), `--fg-muted` (existing).

**Rhythm**: vertical, type-led, asymmetric — the display moment dominates the first viewport, then the page settles into compressed body type.

**Whitespace contract**: ~70vh empty above the statement (top padding + breathing), `--space-32` between statement and label, `--space-16` between label and story, `--space-24` between story and Pouākai section, `--space-16` between sections.

**Motion**: optional. The display statement can rise on initial render via DS-internal `<Hero entrance="stagger">`-style CSS keyframes (~600ms, gated by `prefers-reduced-motion`). The rest static.

**Word count**: ~120–160 words.

**Trade-off**: this is the strongest single move available. Risk: at `--fs-display-lg`, the display statement *is* the brand — if the wording is wrong by 10%, the page fails. Copy carries 90% of this direction's weight; design carries 10%. **Picking this direction is a bet on the copy.**

**Reference points**: Apple `apple.com/about` opening statement scale, Stripe's brand-page typographic leads, A24's film-detail page typography.

### Direction B — *Surface-rhythmed scroll* (surface-led, 4-band)

**One-line summary**: the page composes as four to five alternating-surface bands. Each band is one short statement or one micro-section. Surface alternation carries the rhythm; type stays restrained.

**IA shape** (5 units, vertical, surface-alternated):

1. **Band 1 — `--bg`** — Page eyebrow + `<Hero size="intimate">` with brand-voice title. Page `<h1>`. ~12 words total.
2. **Band 2 — `--surface-section` (new)** — Single `<Statement>`: what pouk.ai is. ~12 words. Full-viewport-width recessed band, content capped at `--content-max`, vertical padding `--space-24` top + bottom.
3. **Band 3 — `--bg`** — Single `<Statement>`: how it works. ~18 words.
4. **Band 4 — `--surface-section`** — Pouākai section (heading + ~75-word body). The recessed band gives the origin section its own room.
5. **Band 5 — `--bg`** — End CTA. Hairline above. ~6 words.

**DS surface used**: `--surface-section` (new token, filed §2.1), `<Statement>` (new molecule, filed §2.2; Bands 2 and 3 consume it).

**Rhythm**: vertical bands, color-rhythmed, low type-variation. The page reads like a piece of furniture — each section is its own surface, breathing visible at every break.

**Whitespace contract**: each band has its own internal `--space-24` vertical padding; transition between bands is the surface change itself (no extra spacer).

**Motion**: zero. Surface alternation is the rhythm; motion would compete with it.

**Word count**: ~130–180 words.

**Trade-off**: this is the move the DS most resists (surface alternation is currently prohibited). If the DS rejects §2.1, this direction collapses. If the DS accepts, this is the most *immediate* visual rhythm — the page reads as composed at first glance, before any prose is read. **Picking this direction is a bet on the DS proposal landing.**

**Reference points**: Apple `apple.com/values` band rhythm, MoMA's collection-page sectioning, Patagonia's environmental-page surface alternation.

### Direction C — *Asymmetric editorial grid* (grid-led, mixed)

**One-line summary**: the page composes as a deliberate asymmetric grid — one or two display-scale words alongside a body paragraph alongside a hairlined moment. Reads as a magazine spread, not a website.

**IA shape** (3 grid spreads + a footer):

1. **Spread 1 — *page header***
   - Left column (40%): page eyebrow + page `<h1>` at `--fs-tagline-intimate` Instrument Serif italic, brand-voice declarative.
     - Placeholder: *Draft: pouk.ai. (the eyebrow), Built by an operator. (the `<h1>`).*
   - Right column (60%): one short brand-voice paragraph (~30 words) at `--fs-body`, `--fg`, naming what pouk.ai does and for whom.
2. **Spread 2 — *the work***
   - Left column (60%): one `<Statement>` — declarative, ~15 words, Instrument Serif italic, `--fg`.
     - Placeholder: *Draft: Custom builds. Automations. Advisory engagements.*
   - Right column (40%): one supporting line (~12 words, `--fg-muted`, `--fs-body`).
3. **Spread 3 — *the name***
   - Full-width — Pouākai section. Heading `<h2>`, three-sentence body. (Pouākai resists asymmetric framing — the origin lives in the brand's voice, full-bleed inside `--content-max`.)
4. **Footer band** — End CTA, hairline above.

**DS surface used**: existing tokens only. `<Hero>` not invoked. `<Statement>` (new molecule, filed §2.2) consumed for Spread 2. Asymmetric grid is site-side CSS (no new molecule yet — would file `<Spread>` only if a second consumer wants it).

**Rhythm**: horizontal at each spread, vertical between spreads. Reads as three discrete *moments* on three rows. Each row composes independently; whitespace between rows is `--space-24`.

**Whitespace contract**: each spread is ~`--space-24` tall vertical padding, `--space-12` inter-column gap on desktop, collapses to vertical stack below 720px.

**Motion**: zero.

**Word count**: ~110–150 words.

**Trade-off**: the grid is the most *crafted*-feeling move — it signals "considered design" at a glance. Risk: on mobile, the grid collapses to a vertical stack, and the move's visual signature evaporates. **Picking this direction is a bet that the desktop experience is the canonical one** (consistent with v1 dropping illustrations below 720px on `/` — same precedent).

**Reference points**: New York Times Magazine essay-opener layouts, Cabinet Magazine print spreads, A.G. Fronzoni's editorial work, Massimo Vignelli's NYT redesign grids.

### §3.4 The pick (designer recommendation)

**Recommend Direction A** — the single-statement display lead.

Reasoning:

- It is the strongest single move available to a type-only page. Surface alternation (Direction B) depends on a DS proposal landing. Asymmetric grid (Direction C) is visually rich on desktop and structurally weaker on mobile. The display moment works on every breakpoint and depends on one filed DS-gap (`--fs-display-lg`) that bounds itself ("at most once per page").
- It composes the *least* and accomplishes the *most* — one statement at scale does the work of seven prose blocks. The restraint reads.
- It can ship even if the DS rejects every Rank-1 proposal — fallback is `--fs-tagline` for the display moment, slightly smaller scale, same shape.
- It commits the brand to **one editorial move**, which is consistent with the brand voice (restraint, one register executed deeply, no decorative interleaving).
- The risk (the copy carries 90% of the page's weight) is a *good* risk to take — it forces the content drafter to write the single best line of copy pouk.ai has shipped, and that line then becomes a brand asset reusable on every surface (deck cover, email signature, OG card, future home tagline).

The trade-off I'm explicitly accepting: **Direction A is the least visually "rich" of the three** at first glance. It looks austere. The bet is that austerity at scale reads as confidence, not as boring — and that's the *exact* difference between "minimal" and "templated" the founder named.

**If the founder prefers visual rhythm over typographic concentration**, swap to Direction B once `section-surface-rhythm.md` is accepted by DS. **If the founder prefers a crafted-spread feel**, swap to Direction C and accept the mobile-collapse trade-off.

### §3.5 Motion considerations (across all three directions)

- All three ship **static at first paint** by default.
- Direction A's display statement *can* consume `<Hero entrance="stagger">`-equivalent for its first render — a single 600ms rise, gated by `prefers-reduced-motion`, zero JS. Brand-voice declarative statements at this scale benefit from arrival animation in a way body prose doesn't.
- Directions B and C ship fully static.
- **Scroll-triggered, parallax, intersection-observer-driven motion is out** for v2 (would force `client:*`, breaking R-079).
- If the Pouākai section ever gets a visual companion (§4 Direction X below), that companion may carry ambient motion — but that's a separate decision and a separate DS-gap (`--ambient-period` token, not yet filed).

### §3.6 Word-count discipline

All three directions land at ~120–250 words total. v1 shipped ~440. The compression is the point — the page is a *moment*, not a manifesto. The 80–90 word body block of Direction A is where the substantive story lives; everything else is composition.

---

## 4. Illustration-as-language directions (re-opening A3)

A3 closed v1's illustration question as "deferred to v2 — commission an urban sketcher or revisit at trigger." The founder re-opens it broader: *illustration* is no longer just "a drawing." With the DS team available, it could be **type as illustration, generative SVG, motion-rendered glyphs, ASCII portraiture, anything composable.**

I surface three directions. None reverse A3 yet — they are *options* for the founder. v2 of the page can ship type-only (Directions A/B/C above without any illustration); any of these illustration directions composes *on top of* a chosen v2 direction.

### Direction X — *Generative typographic mark*

The page's Pouākai section (or its display moment, in Direction A) carries a programmatic SVG mark composed entirely of typography — the word "Pouākai" or a fragment of the page's display sentence, set in Instrument Serif italic at extreme scale, with one or two letters treated as **figural** rather than typographic (a stretched ascender becomes a wing-line, the macron becomes an arc above the eagle's flight path).

**Composition shape**: a single inline SVG, ~12–20KB, single color resolving to `currentColor` (inherits `--fg`). Rendered as a static asset; no generative runtime, no JS. The "generative" framing means **the asset is generated once at design time** from a base typeface manipulation (kerning, stretching, masking) — it ships as a finished SVG.

**Brand fit**: highest of the three. The brand is type-led; an illustration that IS type doubles down on the existing brand surface rather than introducing a new vocabulary. The cross-page-register fork the v1-of-memo §1 worried about (sketch on `/about` + engraving on `/`) collapses — both are *type*.

**DS-gap**: optionally consumes [`hero-illustration-slot.md`](../../proposals/ds-side/hero-illustration-slot.md) if placed in the hero region; otherwise composes site-side as a sibling element.

**Reference points**: Massimo Vignelli's typographic-monogram work, Paula Scher's Public Theater wordmarks, Cabinet Magazine's expressive headline typography.

### Direction Y — *Computational portraiture (ASCII / glyph mosaic)*

A portrait of the founder rendered entirely from typographic glyphs — ASCII art at a refined register, or a glyph mosaic where the constituent characters are letters from the page's body prose. Sits as a single static block, monospace, `--fg` on `--bg`, ~30–60 lines tall.

**Composition shape**: a `<pre>` block containing fixed-width text. Engineer-mechanical. Asset production: Arian generates the portrait via image-to-ASCII tooling (a one-time generation step), curates for character density and silhouette legibility, ships the final string as a constant.

**Brand fit**: medium-high. ASCII portraiture is a deeply-coded operator signal (the kind of thing a founder who came up writing frontend code would ship). It's also potentially *too* coded — the casual reader sees decorative text and may not parse it as figurative. The signal is high-density for the cognoscenti, blank for everyone else.

**DS-gap**: none. Sits as a `<pre>` block with `font-family: var(--font-mono)`. Existing tokens.

**Reference points**: early-2000s ASCII portrait generators, terminal aesthetics in Lisp / hacker culture, `cowsay`-class artifacts done well.

### Direction Z — *Hand-drawn mark from the founder*

A single hand-drawn mark — not a portrait, not an illustration — a small typographic flourish or geometric figure that Arian draws himself (a wing-stroke, a sigil, a single ink mark). Scanned, vectorized, inline SVG. Used **once** per page as a signature-class artifact.

**Composition shape**: inline SVG, ~3–8KB, single color `currentColor`. Sits adjacent to the display moment (Direction A) or in the Pouākai section. Static.

**Brand fit**: highest *signal density* of the three. A hand-drawn mark says "an operator made this site, by hand" — exactly the brand voice the founder wants. The risk is execution: if Arian's hand doesn't read at-register, the mark reads as wireframe-finish, not as restraint.

**DS-gap**: consumes [`hero-illustration-slot.md`](../../proposals/ds-side/hero-illustration-slot.md) if placed in a hero region; otherwise site-side sibling.

**Reference points**: the "Hand of John" mark in the Lindisfarne Gospels (one figural fragment in an otherwise typographic page), Paul Rand's IBM signature, founder hand-marks on operator-class B2B brands (Stripe, Cursor, Linear all signed early-stage assets).

### §4.4 Recommendation on illustration

**Surface as options, do not reverse A3 yet.** v2 of the page can ship type-only and remain strong (Direction A executed cleanly carries the page on its own). Adding an illustration is a *separate* decision the founder makes after picking a composition direction.

**If the founder picks Direction X, Y, or Z**, the illustration v2 proposal at [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md) moves from `Draft (parked)` to `Draft (active)` and gets a real spec revision. Until then, the proposal stays parked and the page ships type-only.

**Designer-side preference**: Direction X (generative typographic mark) — highest brand-fit, lowest production cost, type-only doubles down on existing brand vocabulary. Direction Z is the strongest emotional move but the highest production-execution risk. Direction Y is operator-coded but accessibility-risky (a `<pre>` block with `aria-label="portrait of Arian Zargaran rendered in ASCII"` is fine; many screen readers will read the entire glyph mosaic if not gated correctly).

---

## 5. `/about` as register-lead (replaces v1-of-memo §5 cross-page containment)

The v1 of this memo framed `/about` v2 as *contained* — "the four shipped routes stay untouched; v2 lands on one route." The founder retired that framing. v2 of `/about` is the **first of its class**; the rest of the site eventually iterates toward whatever register `/about` establishes, not the other way around.

What that means in practice:

### 5.1 The four shipped routes do not need to change *now*

`/`, `/why-ai`, `/roles`, `/principles` continue to ship as-is. The recalibration **does not retroactively trigger amendments to the four shipped specs.** Each of those four pages has its own job and its own composition; v2 of `/about` does not break any of them.

### 5.2 But v2 of `/about` is the brand's new register-leader

If Direction A ships, the next time `/` is revised, the home composition will probably want to consume `--fs-display` for its tagline. The next time `/why-ai` is revised, the opening band may want to absorb its lede into a single `<Statement>` at editorial scale. The next time `/principles` is revised, the bookend register may scale up toward `--fs-display`.

None of these are *forced* by the v2 ship. They are *available* once v2 lands. The cadence of when each of the four routes adopts the v2 vocabulary is a PM-and-founder call per route.

### 5.3 The DS-gaps filed under §2 are *brand-contract* additions, not `/about`-only

This is the most important implication. The three DS proposals filed concurrently with this memo are written as **universal contract additions to `@poukai-inc/ui`**, not as `/about`-only carve-outs:

- `--surface-section` is a new sitewide token. Once accepted, any page can compose with it.
- `<Statement>` is a new molecule. Any page can consume it.
- `--fs-display` / `--fs-display-lg` are new sitewide tokens, scoped to "at most once per page" by composition guidance.

This is by design. The founder's "first of its class" framing means the DS proposals serve future pages too. The DS team should evaluate them on universal merit, not on `/about`-specific merit. (Each proposal frames the universal case explicitly.)

### 5.4 If the founder wants the four shipped routes to adopt v2 vocabulary

A separate spec revision per route, triggered by the founder. Composition revisions follow. This memo does not author any of those; it surfaces them as **available** once v2 ships.

The cleanest sequence:

1. v2 of `/about` ships (this memo's recipe + PM spec revision + content draft revision + composition revision + engineer implementation).
2. v2 lives on the site for 2–4 weeks; the brand observes how it reads in practice.
3. If v2 reads as the register-lead the founder wants, PM amendments for `/` (maybe absorbing `--fs-display` into the tagline) and `/principles` (maybe scaling the bookends up) follow. Each is a separate small spec revision, a separate composition pass.
4. `/why-ai` and `/roles` are list-format pages and may iterate differently — `/why-ai`'s opening band could absorb `<Statement>` into its lede; `/roles`'s Hero might gain a display moment. Each per its own pass.

**No forced sitewide refresh.** No simultaneous five-route shipover. The brand evolves toward the new register on each page's own revision cadence.

### 5.5 What this memo doesn't promise

- v2 of `/about` doesn't fix `/why-ai`'s wall-of-text-of-stats character (different problem, different page job — stats are scannable in a way prose isn't).
- v2 doesn't replace `<RoleCard>` with `<Statement>` on `/roles` (cards are a listing primitive; statements are an editorial primitive).
- v2 doesn't dictate the future home illustration direction (still parked at the home composition's 2026-05-17 deferral).

The recalibration is a brand-vocabulary expansion. It's not a brand-rewrite.

---

## 6. Open questions for Arian (before composition revision lands)

The four most consequential decisions, in order:

1. **Pick a Direction (A, B, or C).** Designer recommendation: A. If the founder prefers visual rhythm at the cost of waiting on DS, pick B. If the founder prefers a crafted-spread feel and accepts the mobile-collapse trade-off, pick C.
2. **Illustration: type-only (status quo) or pick X / Y / Z.** Designer preference: type-only ship first (Direction A executed cleanly is enough); revisit illustration after v2 lives on the site for 2–4 weeks. If overriding: Direction X (generative typographic mark) is the strongest brand-fit.
3. **`<h1>` placement.** Direction A puts the page `<h1>` *on the display statement* (Unit 1). Directions B and C have variants. Confirm Direction A puts the `<h1>` at the top, displayed.
4. **PM spec revision scope.** This memo's recipe requires reversing A5 (first-person), revising §4 IA to whatever Direction the founder picks, collapsing §5 voice-shifts to one (body → CTA), and dropping the ~400–600 word + three-section locks. Confirm PM gets the brief to revise.

Lower-stakes:

5. **DS-gap routing.** All three Rank-1 proposals filed under `meta/proposals/ds-side/`. Arian routes to `@poukai-inc/poukai-ui` maintainers at his timeline.
6. **End-CTA wording.** Direction A drops the "inbox" pivot (v1's hero lede setup is gone). Content drafter authors final string against the new IA.
7. **Pouākai section retention.** All three Directions keep the Pouākai section as a near-verbatim carry-forward from v1. Confirm.

---

## 7. Out of scope (for this memo)

- Authoring the v2 composition revision at `meta/compositions/pages/about.md`. Waits on founder picking a Direction + PM spec revision.
- Authoring v2 content draft. Content drafter's lane, against the revised spec.
- Sitewide refresh of `/`, `/why-ai`, `/roles`, `/principles`. §5 holds these as future-available, not current-mandate.
- The illustration v2 proposal at [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md). Stays parked unless founder picks Direction X, Y, or Z.
- Asset production for any picked illustration direction. Arian's lane.
- Dark-mode behavior. The DS palette inverts cleanly; all directions compose on tokens that invert. Out of scope until dark mode is shipped.
- Composition v1's `Approved` status. v1 stays `Approved` and shipped until v2 revision lands.

---

## 8. Recommendation summary

- **Adopt Direction A — single-statement display lead.** One declarative sentence at `--fs-display-lg`, ~70vh breathing above, ~80-word body story, Pouākai section, end-CTA. Type-only ship.
- **Three DS-side proposals filed concurrently** under `meta/proposals/ds-side/`: `section-surface-rhythm.md`, `statement-molecule.md`, `type-display-scale.md`. All framed as universal `@poukai-inc/ui` contract additions; Arian routes to `@poukai-inc/poukai-ui` maintainers on his timeline.
- **Illustration: ship type-only for v2.** Surface Directions X, Y, Z to founder as future options; revisit after v2 lives 2–4 weeks.
- **`/about` is register-lead.** The four shipped routes don't refresh now; they iterate toward v2's vocabulary on their own revision cadences when their PM amendments arrive.
- **PM spec revision required**: reverse A5, revise §4 IA, drop three-section + ~400–600-word locks, collapse voice-shifts.
- **Sequence**: founder reviews this memo → PM revises spec → designer composition revision (supersedes v1 at `meta/compositions/pages/about.md`) → content drafter re-authors → engineer implements.

Restraint stays. Boring is also a failure mode. v2 is the brand's first piece of composed editorial design, not its first wall of text.

Override any §6 default and I revise.
