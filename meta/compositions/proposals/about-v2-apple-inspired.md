# Composition recalibration: `/about` v2 — Apple-inspired compositional rhythm, type-only

**Route**: `/about`
**Status**: Draft (memo, not a composition revision)
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-18
**Trigger**: founder reviewed live `/about` v1, flagged wall-of-text + over-personal + missing Apple-inspired *moment*-shaped rhythm. PM is being re-briefed in parallel. This memo is the designer-side recalibration; the composition revision waits on founder review of this memo and the PM's coupled spec revision.
**Governing spec (v1, may be revised)**: [`meta/specs/pages/about.md`](../../specs/pages/about.md) (Approved 2026-05-18; interview record A1–A18)
**Live v1 reference**: shipped page at commit head; rendered HTML inspected at `http://localhost:4321/about/` (15,644 bytes; same prose density as the content draft v1.0). Composition v1 lives at [`meta/compositions/pages/about.md`](../pages/about.md) (Approved 2026-05-18). v1 stays `Approved` and shipped until this memo's recipe is ratified into a composition revision; this memo does not retroactively flip v1's status.
**DS version targeted**: `@poukai-inc/ui@0.9.0`
**Companion docs**:
- [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md) — parked illustration proposal; **stays parked** under this recalibration (the answer to wall-of-text is composition rhythm, not images).
- [`meta/proposals/ds-side/hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md) — DS-gap from v1 (forward-looking, non-blocking). This memo proposes its scope expand — see §4.
- [`meta/compositions/pages/home.md`](../pages/home.md) — register baseline for the existing four routes; this memo argues `/about` v2 sits in a *different* compositional register than the four routes but uses the *same* token vocabulary.

---

## 0. Framing

The founder's feedback is structural, not cosmetic. v1 of `/about` reads as a wall of text because it *is* a wall of text — seven prose blocks in one column, ~440 words, no moment-rhythm. The composition got the structural divergence right (verdict (ii): skip `<Hero>`, eyebrow + lede + three sections + CTA), and it correctly used DS tokens in documented roles. But the *register* it landed in is **long-form essay**, and the founder's read of the page is that **`/about` should not be a long-form essay** — it should be a **company surface**, brand-tone, moment-shaped, compositionally rhythmic, with scannable declarative units rather than continuous prose.

Apple's company surfaces (`apple.com/about/`, `apple.com/values/`, `apple.com/newsroom`, `apple.com/leadership/`) do this by stacking *moments* — large typographic statements as standalone units, generous breathing, sectional theming via background/surface alternation, type-led pull-quote-shaped sections. Apple has the budget for full-bleed photography to do half the work of each moment. **pouk.ai does not**, and (A3) `/about` v2 ships type-only — no illustration, no photograph, no signature. The translation is therefore: **Apple's *compositional rhythm*, not Apple's *imagery infrastructure***. Bigger type, more whitespace, fewer paragraphs, declarative standalone statements, possibly multiple typography weights and surface elevations.

This memo proposes the recipe. The composition revision waits until (a) Arian reads this memo, (b) PM revises the spec to admit moment-shaped IA and to relax the first-person + ~400–600 word + three-section locks, and (c) the content drafter re-authors against the revised IA. The recipe is implementable inside the current DS surface with **one new DS-gap proposal expansion** (see §4) and zero new tokens.

**Assumptions** (called out at the top so future readers can argue against them):

- The four shipped routes (`/`, `/why-ai`, `/roles`, `/principles`) **stay where they are** — this recalibration does not fork the sitewide register. `/about` v2 is a *contained* compositional shift on one route. The four routes' Heroes, role cards, principle lists, and end-CTAs remain canonical. See §5 for the cross-page implications I rule on.
- A3 (no illustration in v1) **continues to hold** for v2. The recalibration is type-only by deliberate constraint — proving the brand can land moment-rhythm without buying its way out with imagery. The illustration v2 proposal stays parked.
- The PM's first-person voice lock (A5 — explicit "I" through sections 1 and 2) is the single biggest copy-side constraint the recalibration *will challenge* — the founder's feedback ("brand-tone and less personal", "this is a company, it's not Arian's story") is a direct contradiction of A5. This memo recommends PM reverse A5 in the revised spec; the composition recipe below is authored for brand-voice declarative throughout, not first-person.

---

## 1. Read of v1's failure modes

What the live page actually does, block by block, with the failure-mode call:

| Block | Live content (approx.) | What it does well | Where it collapses into prose density |
|---|---|---|---|
| Eyebrow | "About" (`--fs-micro`, `--fg-muted`) | Quiet page label; correct register; nothing wrong. | **Nothing — keep.** |
| Hero lede | "Who you'd be writing into if you sent the email below." (1 sentence, 12 words, `--fs-body`, `--fg-muted`) | Names the reader's actual question, points to the conversion target. | **Reads as the highest-volume line on the page above section 1's `<h1>`, but at body type. The single thing above the page's `<h1>` is set in the same size as the body paragraphs below it.** There is no display-scale moment to anchor the page's identity before the reader hits prose. Apple's company surfaces start with a *statement at size*, not a quiet sentence. |
| Section 1 `<h1>` ("The arc") + 3 paragraphs ~165 words | Three first-person paragraphs telling Arian's career arc | First-person, specific verbs, ends on a load-bearing sentence ("I am the person who replies"). | **The page's first display-weight type is an autobiographical heading ("The arc"). Then three paragraphs of "I came up writing frontend code…" — by the third sentence the page reads as Arian's personal blog, not pouk.ai's about page.** The founder's "this is a company, not Arian's story" lands here. |
| Section 2 `<h2>` ("Why pouk.ai") + 2 paragraphs ~175 words | Founding posture, autobiographical framing of the AI-collapse seam | The seam framing is real and substantive. | **Second wave of first-person prose. By this point the page has shipped ~340 words of "I" voice in five paragraphs, no rhythm break, no visual change. This is the wall-of-text peak.** The seam framing — pouk.ai operates where AI tools collapse months into days — is a *company statement*. It is buried inside autobiography. |
| Section 3 `<h2>` ("Pouākai") + 1 paragraph ~75 words | Brand-voice declarative origin paragraph | The voice-shift to brand-voice is correct; the macron is preserved; the discipline list lands. | **The voice-shift arrives 340 words in, after the reader has already mentally categorized the page as "long bio."** The paragraph itself is fine; its placement compounds the wall. |
| End CTA | "If the inbox sounds right, hello@pouk.ai." (1 line, `--fg-muted`) | Wry, differentiated from sibling end-CTAs, closes the loop on the lede's "inbox" noun. | **Reads as the page's ninth prose block in one column. The CTA's job is to invite; it lands as another small line of muted text after eight other prose blocks.** |

The aggregate failure modes:

1. **One column, one type ramp, one surface, one register.** Everything sits on `--bg` `#FBFBFD`, inside `.site-page` `max-width: var(--content-max)` (1024px), styled at one of three sizes (`--fs-micro` eyebrow, `--fs-tagline-intimate` heading, `--fs-body` everything else). There is no surface alternation, no display-scale moment, no rhythm break. The page reads as one long prose vessel.
2. **First-person voice + autobiographical framing + ~340 words of "I" prose = personal-blog register.** The founder's "this is a company, not Arian's story" maps directly: the voice tells the reader the page is about Arian; the surface tells the reader the page is a long-form essay; together they collapse the company-about-page register.
3. **No pull-quote moment.** Apple's company pages do most of their work with a single declarative statement at size, breathing room around it, repeated three to six times down the page. v1 has zero of these. The page's only display-scale type is the section headings — but they label *prose blocks*, not *statements*. A heading is a name; a pull-quote is a claim.
4. **The page's first display-scale type is an autobiographical heading.** "The arc" is the first big type the reader sees, and it's a personal-essay title. Even before the body voice issue, the *typographic signal* of the page is "this is one person's story."
5. **Density is paragraph-density, not composition-density.** v1 satisfies its spec ACs (one `<h1>`, voice-shifts locked, three sections, ≤3-word section headings) by **packing substance into paragraphs**. v2 needs to **distribute substance across compositional units**: a statement, a supporting line, breathing, another statement.
6. **End-CTA is undercooked.** A muted one-line CTA after a wall of body prose is invisible. Apple's company pages end on a clear, breathing, often differently-surfaced final unit.

The composition got the structural a11y / token discipline correct; it failed on **register and rhythm**. v2 must compose moments, not paragraphs.

---

## 2. Apple-inspired composition vocabulary, translated to the DS surface

Apple's company surfaces lean on five compositional patterns. I translate each to what's available in `@poukai-inc/ui@0.9.0` and document the gap honestly where there is one. **No new tokens are needed.** One DS-gap proposal (a new molecule, see §4) would *codify* the pattern; the v2 ship does not strictly require it.

### Pattern A — Display statement (one short declarative line at size, breathing around it)

Apple example: "Apple revolutionized personal technology with the introduction of the Macintosh in 1984." set as a single-line Instrument-Serif-italic-equivalent display statement on `apple.com/about`.

**DS surface available**:
- Type: `--fs-tagline` (clamp 2.25rem, 1.5rem + 3.5vw, 4.25rem — 36–68px). DS recommendation: "Used exactly once per page for the Hero title" (`llms-full.txt` line 33). **Strict reading: one `--fs-tagline` per page.** A v2 with three or four display statements would technically exceed this if interpreted literally.
- Type alternative: `--fs-tagline-intimate` (clamp 2rem, 1.25rem + 2.5vw, 3.25rem — 32–52px). DS recommendation: "Use only inside the Hero molecule" (line 34). Same single-page constraint by implication.
- Font: `--font-serif` (Instrument Serif), italic accent via `<em>` — established editorial register.
- Color: `--fg`.

**Recipe**: a series of **three to five short declarative lines** at `--fs-tagline-intimate`, set in Instrument Serif (italic accents permitted on key words via `<em>`), color `--fg`, each on its own surface unit with generous whitespace. The DS's "use only inside Hero" guidance for `--fs-tagline-intimate` is composition guidance, not a hard cap — the DS doesn't *enforce* it. But the brand-contract spirit of the rule is "don't use the display scale promiscuously." **My read: a v2 with 3–5 display statements *is* promiscuous if they all happen on `/about` without a DS surface to consecrate them.** This is where §4's DS-gap proposal expands.

### Pattern B — Statement + supporting line (display line above a single muted sentence at body scale)

Apple example: a big "Designing the future" headline with one body-scale line of context below it.

**DS surface available**:
- Same as Pattern A, plus `--fs-body` for the supporting line and `--fg-muted` for its color. Tokens are already documented for both roles.
- Spacing: `--space-2` (8px) for tight pair, `--space-4` (16px) for breathing pair.

**Recipe**: each moment is a paired unit — short display statement (Instrument Serif, `--fs-tagline-intimate`, `--fg`) over a single muted sentence (`--font-sans`, `--fs-body`, `--fg-muted`, max-width `--hero-max`). Approximately 8–18 words per moment total. **Three to five moments down the page.**

### Pattern C — Surface alternation (sections sit on different background tiers — page, recessed, elevated)

Apple example: a `/values` page where successive sections alternate background colors (white / off-white / pale gray) to mark moments.

**DS surface available** (`llms-full.txt` lines 14–24):
- `--bg` (`#FBFBFD`) — page canvas, primary surface.
- `--surface` (`#F5F5F7`) — recessed inline elements (code blocks, quote backgrounds, card fills). **DS rule** (line 18): *"NEVER use as a section divider."* This is binding.
- `--bg-elevated` (`#FFFFFF`) — front-most layer, reserved exclusively for popovers/sheets/modals/dialogs (line 16). **DS rule** (line 16, anti-pattern line 164): *"NEVER use `--bg-elevated` for page background or content sections."* Also binding.

**Read of the DS rule**: surface alternation **between page sections is explicitly prohibited** by both rules. `--surface` is for inline recessed elements only (code blocks, card fills inside `<RoleCard>`); `--bg-elevated` is for overlays only. **You cannot legally compose v2 by stacking sections on alternating background tiers.** This is a hard contract, not a guideline.

**Recipe implication**: surface alternation is **off the table** without a DS-gap proposal to introduce a section-surface variant token. The composition must achieve "moment rhythm" *without* changing the background between sections. The whole page sits on `--bg`. Moments are differentiated by **spacing, type-scale, and full-bleed-vs-content-max layout**, not by surface color.

I am surfacing this as the **biggest single constraint** on the v2 recipe and choosing to compose inside it rather than propose a DS surface change. Reasoning: the "never pure edges" + three-step elevation rhythm + "do not collapse the elevation rhythm" anti-pattern (line 165) is one of the most brand-contract-load-bearing rules in the DS. Proposing a "section-surface" token would risk forking the elevation rhythm sitewide for one page's recalibration. Not worth it.

### Pattern D — Hairline-rule section break (a single 1px line as a moment separator)

Apple example: `apple.com/leadership` uses hairline rules between team-member rows.

**DS surface available**:
- `--hairline` (`#D2D2D7`) — dividers, 1px rules, borders (line 20). **DS rule** (line 20): *"Always applied as a border/border-top/border-bottom, NEVER as a background. Never render thicker than `--hairline-w: 1px`."*
- `--hairline-w: 1px` (line 78).

**Recipe**: hairline rules between moments **are supported as composition guidance** (`/why-ai`'s `.references` block already uses `border-top: 1px solid var(--hairline)` per `site.css` line 175; `/why-ai`'s `.end-cta` does the same per line 252–256). I can compose v2 with optional hairline section breaks **without a DS-gap**. This is the DS surface that *does* let me mark moments — through 1px rules above each moment, rather than through background alternation.

### Pattern E — Full-bleed type moment (a single statement that breaks the content-max container)

Apple example: Apple's `/values` headline statements often visually span wider than the body column.

**DS surface available**:
- `--content-max: 64rem` (1024px, line 60) — *"Maximum width of the main content column. NEVER exceed in the main column layout."* Binding.
- `--hero-max: 38rem` (608px, line 61) — Hero text column cap.
- `--page-pad: clamp(1.5rem, 2vw + 1rem, 3rem)` (line 59).

**Recipe implication**: full-bleed display statements that exceed `--content-max` are **prohibited** by the DS contract. I can compose statements that span `--content-max` itself (1024px), but I cannot break beyond it. **Width-based theatricality is off the table.** Apple uses 1440px+ statements on viewports that support it; pouk.ai is capped at 1024px sitewide.

This is a brand-restraint feature, not a bug. The recipe leans on *type scale* and *spacing* to achieve moment-presence, not on width.

### Pattern F — Pull-quote-shape unit (a short statement at editorial scale, in serif italic, with a small attribution or supporting line)

Apple example: `apple.com/values/environment` interleaves serif-italic pull-quote units between sections.

**DS surface available**:
- Type: `--font-serif` italic, `--fs-tagline-intimate` or `--fs-body` enlarged.
- Color: `--fg`.
- Container: site-side div, no DS molecule for this exact shape today.
- Closest existing primitive: the `.principles-bookend` site-side class in `site.css` lines 260–274, which renders an Instrument Serif italic editorial statement at `clamp(1.125rem, 1rem + 0.5vw, 1.3125rem)` with `--fg-muted`, max-width 38rem. This is **already in the site repo** and used on `/principles` for the intro + conclusion bookends.

**Recipe**: the v2 page can reuse the `principles-bookend` register or a sibling site-side variant for editorial pull-quote moments. **No DS-gap needed for the bookend register itself**; it's already a documented site-side pattern. The v2 recipe may want a *bolder* variant of it (larger scale, color `--fg` not `--fg-muted`), which is a site-side CSS addition resolving to existing tokens — fine.

### Summary of available vocabulary

- **Use freely**: Pattern A (display statement, with caveats per §4), Pattern B (statement + supporting line), Pattern D (hairline rules), Pattern F (pull-quote / bookend variant).
- **Off the table**: Pattern C (surface alternation), Pattern E (full-bleed beyond `--content-max`).
- **Needs DS scrutiny**: Pattern A's "promiscuity" of `--fs-tagline-intimate` outside the Hero molecule. The DS guidance ("use only inside Hero") is composition guidance, but the brand-contract spirit argues against three to five `--fs-tagline-intimate` statements on one page. See §4.

---

## 3. Proposed v2 composition recipe

A type-only, moment-shaped, brand-tone `/about` that satisfies the founder's three asks. **Six moments** in vertical order, all sitting on `--bg`, all capped at `--content-max`, separated by hairline rules and generous whitespace. **Zero motion, zero client JS, zero hydration.** A11y contract: exactly one `<h1>` per page, no level-skip.

### Moment 1 — Page label (top of page, quiet)

- **Visual unit**: eyebrow only, no lede.
- **DS primitives**: none. `<p class="about-eyebrow">` (already styled in `site.css` lines 296–303).
- **Type**: `--fs-micro` (12px) uppercase, letter-spacing 0.04em, `--fg-muted`.
- **Content**: `About`.
- **Spacing**: `.site-page` top padding (`--space-12`) + `--space-16` below the eyebrow before Moment 2.
- **Rationale**: v1's eyebrow is correct. Keep. Drop the v1 hero lede ("Who you'd be writing into…") — its job is absorbed by Moment 2's statement, which does it at size.

### Moment 2 — Page statement (display-scale, page `<h1>`)

- **Visual unit**: one display-scale Instrument Serif italic line as the page's `<h1>`, optionally a single muted body-scale supporting sentence below.
- **DS primitives**: `<Hero>` if we adopt it again; or site-side if we keep verdict (ii). **My recommendation: adopt `<Hero>` for Moment 2 with a brand-voice statement as the title.** The page does need an `<h1>`, and Moment 2 is the natural place for it — *if* the title is a brand-voice declarative line, not the autobiographical "The arc". Reusing `<Hero>` here also re-aligns `/about` with the four-route rhythm at the top of the page, which addresses part of the founder's "this is a company" feedback.
- **Type**: `--fs-tagline-intimate` (32–52px, Instrument Serif italic, `--fg`) for the title; optional `--fs-body` `--fg-muted` for the supporting line.
- **Content placeholders** (final wording is content-drafter's lane):
  - Title (`<h1>`): `Draft: pouk.ai is one operator.` (brand-voice declarative, names the substantive fact, second-person-implicating without using "I")
  - Supporting line (optional): `Draft: Technical consulting for teams shipping with AI.` (echoes the `/` tagline register without copying)
- **Spacing**: standard `<Hero>` internal rhythm (DS-owned), `--space-16` below Moment 2 before Moment 3's hairline rule.
- **Rationale**: this is the page's *first display-scale type*, and it is **brand-voice**, not autobiographical. The founder's "this is a company, not Arian's story" lands here. The reader's mental model is set in the first beat: *pouk.ai is one operator*, not *Arian came up writing frontend code*.
- **Verdict shift from v1**: v1 verdict (ii) skipped `<Hero>` entirely. v2 *re-adopts* `<Hero>` for Moment 2, with a brand-voice title. The DS-gap from v1 (no-title variant of `<Hero>`) therefore **becomes less urgent for v2** — but a new DS surface is implied by the moment-recipe overall (see §4).

### Moment 3 — Statement of work (pull-quote register, hairline above)

- **Visual unit**: hairline rule, then a short brand-voice statement at editorial-serif scale (`principles-bookend`-style or a sibling variant), then one muted body-scale supporting line.
- **DS primitives**: none. Site-side `<div class="about-moment about-moment--statement">` with site CSS resolving to existing tokens.
- **Type**: Instrument Serif italic, `clamp(1.5rem, 1rem + 2vw, 2.5rem)` (~24–40px — a *bolder* variant of `principles-bookend`'s `1.125rem–1.3125rem` register, but **still smaller** than `--fs-tagline-intimate` to preserve Moment 2's primacy). Color: `--fg` (not `--fg-muted` — this is a *statement*, not a bookend).
- **Hairline**: `border-top: 1px solid var(--hairline)`, `padding-block-start: var(--space-12)`.
- **Content placeholders**:
  - Statement: `Draft: Work pouk.ai does — custom AI builds, automations, and advisory engagements.` (or three short declaratives stacked: `Custom AI builds. / Automations. / Advisory engagements.`)
  - Supporting line: `Draft: For teams who'd rather ship than speculate.`
- **Spacing**: `--space-16` below Moment 3 before Moment 4's hairline.
- **Rationale**: this is what v1's section 2 ("Why pouk.ai") was *trying* to do — name the work — but did it in two prose paragraphs. Moment 3 does it in a sentence at scale. The "ship than speculate" line echoes the `/` register without copying. **The autobiographical seam framing from v1 §2 is dropped** under the founder's "not Arian's story" feedback.

### Moment 4 — Statement of posture (pull-quote register, hairline above)

- **Visual unit**: hairline rule, then a brand-voice statement at the same scale as Moment 3, then one muted supporting line.
- **DS primitives**: none. Same site-side construction as Moment 3.
- **Type**: same as Moment 3.
- **Hairline**: same.
- **Content placeholders**:
  - Statement: `Draft: One operator. Small engagements. Code, not decks.` (three short declaratives, no slogans)
  - Supporting line: `Draft: pouk.ai takes on a small number of engagements at a time, writes the code it recommends, and leaves behind systems an in-house team can run.`
- **Spacing**: `--space-16` below.
- **Rationale**: this is what v1's section 1 ("The arc") and section 2 ("Why pouk.ai") were collectively *trying* to do — establish the operating posture (one person, small engagements, ship-not-deck) — but in 340 words of autobiography. Moment 4 does it in ~30 words, brand-voice declarative.

### Moment 5 — The name (Pouākai origin, brand-voice; hairline above)

- **Visual unit**: hairline rule, then **a section heading at `--fs-tagline-intimate` Instrument Serif italic** (this *is* a section, not a pull-quote — the name's origin deserves its own marked unit), then ~75 words of brand-voice declarative prose. Heading: `<h2>` (Moment 2's `<h1>` is the page heading; this is a level-2 section).
- **DS primitives**: none. Site-side `<section>`, heading, paragraph.
- **Type**: heading `--fs-tagline-intimate` Instrument Serif italic `--fg`; body `--fs-body` `--fg`.
- **Hairline**: same as Moment 3 / 4.
- **Content**: v1's section 3 prose **carries forward verbatim**. This is the one block of v1 that already lands — brand-voice declarative, 75 words, three sentences, R27 origin sentence opens it. The voice-shift is *already* brand-voice; in v2 the voice is brand-voice *throughout*, so this section reads as continuous register, not a voice-shift moment.
- **Spacing**: `--space-16` below.
- **Rationale**: Pouākai stays. The macron stays. The discipline list ("no Māori visual motifs in the brand, no claim to the culture, no metaphor stretched past the one-line origin") stays. This is the page's one section that v1 got right at the prose level.

### Moment 6 — End CTA (single line, breathing, optional hairline)

- **Visual unit**: optional hairline rule, then a single muted invitational line with a `mailto:` link.
- **DS primitives**: none. Site-side `<p class="about-end-cta">` (already styled in `site.css` lines 356–365).
- **Type**: `--font-sans`, `--fs-body`, `--fg-muted`.
- **Hairline**: optional. **Recommendation: yes**, for rhythm consistency with Moments 3–5. The hairline marks the CTA as the page's final moment, not as a stray line at the bottom.
- **Content placeholder**: `Draft: hello@pouk.ai.` (single muted line — see §3a below for alternatives and rationale on register).
- **Spacing**: `--space-16` above (if hairline), `--space-16` below before `.site-page` bottom padding.

### §3a Note on the end-CTA wording

v1's CTA — `"If the inbox sounds right, hello@pouk.ai."` — depends on the page's hero lede ("Who you'd be writing into") to set up the "inbox" noun. **v2 drops the hero lede.** The "inbox" pivot loses its setup. v2's CTA either needs (a) a different invitational frame, or (b) a Moment 2 supporting line that re-introduces the inbox noun.

Recommendation: **(a) drop the wry register.** v2 ends on a single muted line — `Draft: hello@pouk.ai.` or `Draft: For inbound: hello@pouk.ai.` — without the conditional setup. Brand-voice, direct, no joke. Apple's company surfaces close with direct invitations, not setups. The content drafter authors the final string.

### Total content footprint

- Moment 1: 1 word.
- Moment 2: 4–6 words title + 0–8 words supporting line = ~6–14 words.
- Moment 3: ~8–15 words statement + ~8–12 words supporting line = ~16–27 words.
- Moment 4: ~8–15 words statement + ~25–35 words supporting line = ~33–50 words.
- Moment 5: ~3 words heading + ~75 words body = ~78 words.
- Moment 6: ~3–6 words CTA.

**Total: ~137–175 words across six moments.** Down from ~440 words in v1 across seven prose blocks. Words-per-moment: ~22–29 (v2) vs. ~63 (v1). **The page is ~60–70% shorter in word count and ~15% denser per moment** — exactly the inversion the founder asked for.

### Vertical rhythm (token-resolved)

Top-to-bottom token resolution:

1. `<SiteShell>` header (DS-owned, four-item nav per A4 — unchanged from v1).
2. `.site-page` top padding: `--space-12` (48px).
3. Moment 1 (eyebrow) → `--space-16` (64px) below.
4. Moment 2 (`<Hero>` or site-side hero) → `--space-16` below.
5. Hairline → `--space-12` above each of Moments 3, 4, 5. Moment-internal: heading/statement → `--space-4` to supporting line.
6. `--space-16` between moments (below Moment 3, 4, 5).
7. Moment 6 (CTA, optional hairline `--space-12` above) → `--space-16` below.
8. `.site-page` bottom padding: `--space-12`.
9. `<SiteShell>` footer (DS-owned, four-item link list — unchanged from v1).

**All values resolve to DS tokens.** No raw pixels. No `--space-5`, `--space-7`, `--space-10`, etc.

### Visual hierarchy contract

Three type scales, three roles:

- `--fs-tagline-intimate` (32–52px, Instrument Serif italic, `--fg`) — Moment 2 page `<h1>` + Moment 5 section `<h2>`. **Two instances per page.** This is the page's display register.
- `clamp(1.5rem, 1rem + 2vw, 2.5rem)` (~24–40px, Instrument Serif italic, `--fg`) — Moment 3 and Moment 4 statements. **Two instances per page.** This is the page's pull-quote register, distinctly smaller than the display register so Moment 2 retains primacy.
- `--fs-body` (17–19px clamp, sans, `--fg` for body / `--fg-muted` for supporting lines and CTA) — everywhere else.

The clamp on Moments 3–4 is a *new clamp expression* but resolves to **no new tokens** — it uses the same shape as `principles-bookend`'s clamp and falls between `--fs-body` (1.0625–1.1875rem) and `--fs-tagline-intimate` (2–3.25rem). **If `@poukai-inc/poukai-ui` maintainers reads this and insists the clamp be a named token, I propose `--fs-statement: clamp(1.5rem, 1rem + 2vw, 2.5rem)` and route through the DS-gap process in §4.**

### A11y contract

- Exactly one `<h1>` — Moment 2 title.
- Moment 5 heading is `<h2>` (descends cleanly from Moment 2's `<h1>`).
- Moments 3 and 4 statements are **not headings** — they are `<p>` (or `<blockquote>` if pull-quote semantics matter; **recommendation: `<p>` with site-side class**, to avoid implying citation). They are typographic moments, not document-structure landmarks.
- No level skip; the document outline reads `h1 → h2`.
- `aria-labelledby` on `<section>` for Moment 5 (preserving v1's pattern).

---

## 4. DS-gap implications

The v2 recipe ships on the existing DS surface **with zero new tokens** and **one site-side CSS clamp** that has no corresponding DS token today. There are, however, three honest gap conversations worth surfacing — all forward-looking, none blocking v2 ship.

### 4.1 `--fs-tagline-intimate` outside `<Hero>` — composition-rule vs. hard rule

- **The DS rule** (`llms-full.txt` line 34): *"Use only inside the Hero molecule. Never use directly on `h1` outside Hero context."*
- **v2 implication**: Moment 2 uses `<Hero>` (compliant). Moment 5 uses `--fs-tagline-intimate` on an `<h2>` *outside* `<Hero>`. This is **non-compliant** if read strictly.
- **Workarounds**:
  - (a) Bring Moment 5 inside a second `<Hero>` instance. **Violates** the DS rule "One per page" (line 120) — non-starter.
  - (b) Compose Moment 5's heading at the same clamp as Moments 3 and 4 (`clamp(1.5rem, 1rem + 2vw, 2.5rem)`), not `--fs-tagline-intimate`. **Acceptable.** Loses Moment 5's structural distinction (a section heading vs. a pull-quote statement) but keeps token compliance.
  - (c) Propose a DS extension: `--fs-tagline-intimate` permitted on the page's `<h2>` carrying a named section's heading. **Forward-looking proposal**, not blocking.
- **Recommendation**: ship v2 with **(b)** — Moment 5 heading at the statement clamp, not at `--fs-tagline-intimate`. Visually, Moment 5 reads as "another statement, but with a section anchor and body prose under it." The discipline holds.

### 4.2 New molecule proposal: `<Statement>` (or `<EditorialMoment>`)

- **The composition need**: Moments 3 and 4 both compose "short Instrument Serif italic statement at editorial scale + optional muted supporting line, hairline-separated from neighbors." This is the load-bearing v2 pattern. A future editorial page (a `/values` if pouk.ai ever ships one, a `/manifesto`, a customer-story page in essay register) would re-author the same scaffolding.
- **The current state**: I can compose v2 site-side with `.about-moment--statement` CSS resolving to existing tokens. No DS-gap is *required* to ship.
- **The forward-looking gap**: codify the pattern as a DS molecule so multiple consumers can adopt it without re-authoring. Proposed shape (DS-side authors pick the actual API):

  ```
  <Statement
    statement={<>Custom AI builds. <em>Automations.</em> Advisory engagements.</>}
    supporting={<>For teams who'd rather ship than speculate.</>}
  />
  ```

  Renders Instrument Serif italic statement + optional muted supporting line, with internal rhythm DS-owned, hairline-above as a prop or as a parent layout decision.

- **DS-gap proposal file**: would land at `meta/proposals/ds-side/statement-molecule.md` (not authored by this memo — that's the next step if Arian routes it).
- **Recommendation**: file the proposal forward; v2 ships on site-side CSS in the interim. **Non-blocking.**

### 4.3 Expansion of the existing `<Hero variant="no-title">` proposal

- **The v1 proposal** at [`meta/proposals/ds-side/hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md) was filed under v1's verdict (ii). **v2 re-adopts `<Hero>` for Moment 2**, so the no-title variant is no longer the v2 page's primary need.
- **Recommendation**: leave the no-title proposal in `Draft (consumer-side)` — future editorial pages may still need it. Do not retract. The v2 recipe simply *doesn't consume* it.

### Summary of DS-gap state

| # | Gap | Required for v2? | Workaround | DS-side proposal |
|---|---|---|---|---|
| 4.1 | `--fs-tagline-intimate` outside `<Hero>` on Moment 5 | No (use statement clamp instead) | Compose at `clamp(1.5rem…2.5rem)` instead | Not filing — workaround is acceptable |
| 4.2 | `<Statement>` molecule | No (ship site-side CSS) | Site-side `.about-moment--statement` | Forward-looking; Arian's routing decision |
| 4.3 | `<Hero variant="no-title">` (from v1) | No (v2 re-adopts `<Hero>`) | n/a — v1 site-side workaround retires | Keep filed for future editorial pages |

**No tokens added. No DS source touched. v2 ships on existing primitives + site-side CSS.**

---

## 5. Cross-page implications

The recalibration risk the founder feedback creates: does v2's register **fork the brand** from the four shipped routes? Concretely — if `/about` ships moment-shaped pull-quote rhythm, do `/`, `/why-ai`, `/roles`, `/principles` now read as compositionally inconsistent?

My read: **no, v2 lands contained.** Here's the case, page by page:

- **`/`** — Hero + page-end. Doorway register. v2 of `/about` adopts `<Hero>` for Moment 2, which *aligns* `/about` with `/`'s pattern rather than diverging from it. The four moments below the hero are new composition vocabulary, but they only appear on `/about`. `/` is unchanged.
- **`/why-ai`** — long-form analytical page with stats, blockquotes, footnotes. v2 of `/about` is *shorter and quieter* than `/why-ai`, but the type-led + brand-voice + hairline-marked rhythm is a register-cousin of `/why-ai`'s reference-citation discipline. They don't conflict; they read as different *jobs* on a shared register baseline.
- **`/roles`** — Hero + four `<RoleCard>`s + jump nav + end-CTA. Card-grid layout. v2 of `/about` doesn't use cards. Different layout vocabulary, same token vocabulary. Reads as a different page job, not a different brand.
- **`/principles`** — Hero + Instrument Serif italic intro + ten `<Principle>` molecules + Instrument Serif italic conclusion + end-CTA. **This is v2's closest sibling.** `/principles` already does editorial-serif-italic bookends, hairline-bounded principle units, and a single muted end-CTA. v2's pull-quote-statement register is structurally similar to `/principles`'s bookend-italic register, just at slightly larger scale. The brand has *already* established this vocabulary on `/principles`; v2 of `/about` extends it to a different page job.

**The cross-page argument: v2 of `/about` is structurally closer to `/principles` than v1 was, not further.** v1 of `/about` was the only route in the sitewide rhythm without a `<Hero>` at the top. v2 of `/about` re-adopts `<Hero>` (alignment) and uses pull-quote-statement units that echo `/principles`'s bookend register (alignment), in a moment-shaped vertical rhythm Apple-inspires but the DS supports natively.

**The case for contained landing**: `/` and `/roles` are not touched. `/why-ai` and `/principles` are unchanged. v2 ships on one route and reads as the brand's *company-about-page* expression of the same vocabulary the four routes already speak.

**The one risk to flag**: if the founder later wants the **same moment-shaped pull-quote rhythm on the home page or on `/why-ai`'s opening band**, that *would* fork the four-route Heroes and force a sitewide rhythm conversation. **This memo does not propose that.** v2 lands contained on `/about` and stays contained unless a future spec revision says otherwise.

---

## 6. How the no-illustration constraint is preserved

A3 holds: no photograph, no illustration, no signature, no handwritten asset on `/about` v1, and (this memo extends) no v2 either. The illustration v2 proposal at [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md) **stays parked under this recalibration**.

Apple does a lot of its company-page work with full-bleed photography. **pouk.ai cannot afford to and (more importantly) does not want to.** The translation runs as follows, with specifics:

- **Apple's full-bleed product/team photography** carries the page's *moment*-presence by image-volume. → **v2 substitutes type scale + spacing**. Moments 2, 3, 4, 5 each occupy vertical real estate equivalent to where Apple would place an image (~480px tall on desktop, mostly whitespace). The reader's eye rests on a short typographic statement instead of an image, with comparable breathing.
- **Apple's interior color/surface alternation** marks sectional rhythm. → **v2 substitutes hairline rules + uniform `--bg`**. The DS prohibits surface alternation for sections (see §2 Pattern C). Hairlines are the legal substitute; they're 1px instead of a 100%-width color block, but they perform the same compositional job: marking a moment break.
- **Apple's chrome bands** (headers, footers in slightly different surfaces). → **v2 keeps `<SiteShell>` default**. No change.
- **Apple's headshots / team grids** on `/leadership`. → **v2 has none of these**. pouk.ai is one operator (the spec's Moment 4 substantive fact); there are no team headshots to place. The page's "who-is-behind-this" job is done by the brand-voice statements in Moments 2 and 4, not by a face.
- **Apple's pull-quote attributions ("— Tim Cook")**. → **v2 has no attribution lines**. Brand-voice declarative throughout means there is no "speaker" to attribute to. The page is pouk.ai speaking as pouk.ai.

The whole recipe is type-and-token. **Zero image weight.** Total HTML payload should be ~similar to v1 (it's the same JSON-LD, same `<SiteShell>`, similar prose length compressed into fewer paragraphs, plus four hairlines and three additional clamp-styled type runs). Lighthouse contract preserved.

**The signal the absence sends**: the brand is confident enough that it lands the page on type and rhythm alone. Apple's company pages are *louder* because Apple has resources to spend on imagery. pouk.ai's company page is *quieter* because the restraint is the credential. The two pages share a compositional grammar; they don't share a volume budget.

---

## 7. Open questions for Arian (before composition revision lands)

The recipe in §3 is opinionated but every choice is reversible. Questions, in order of priority:

1. **PM A5 (first-person voice) — reverse?** The biggest content-side decision the recalibration depends on. The founder's "this is a company, not Arian's story" reads as a direct reversal of A5. My recipe assumes A5 is reversed and v2 is brand-voice declarative throughout. **If Arian wants to keep A5 partially** (e.g., one moment in first-person, the rest brand-voice), the recipe holds but Moment 4's wording shifts. *Default if no answer: reverse A5 entirely; brand-voice throughout.*

2. **Drop the v1 hero lede entirely, or absorb it into Moment 2 supporting line?** v1's `"Who you'd be writing into…"` line has equity (it was Q3-ratified). My recipe drops it because (a) the "inbox" noun doesn't work in v2's end-CTA, (b) Moment 2 at display scale absorbs the lede's job. *Default if no answer: drop entirely; Moment 2 supporting line is brand-voice / declarative, not second-person.*

3. **Reuse `<Hero>` for Moment 2, or keep verdict (ii) site-side?** My recommendation is **reuse `<Hero>`**, because (a) it aligns `/about` with the four-route rhythm at the top, (b) it gives the page a real `<h1>` at display scale, (c) it retires the v1 `<Hero variant="no-title">` DS-gap as v2's blocker. *Default if no answer: adopt `<Hero>` for Moment 2.*

4. **Number of moments — six (recipe in §3), or fewer/more?** Six is my call. Five would compress Moments 3 and 4 into one. Seven would split Moment 4's "operating posture" into "small engagements" + "ship not deck" as separate moments. *Default if no answer: six.*

5. **End-CTA wording — drop "inbox" pivot, or rebuild it?** §3a flags this. *Default if no answer: drop the conditional setup; CTA is a direct `mailto:` line.*

6. **`<Statement>` molecule DS-gap — file forward, or leave to a future page that hits the same need?** §4.2 question. *Default if no answer: file forward now; `@poukai-inc/poukai-ui` maintainers can accept on their own timeline.*

7. **Moment 5 — keep Pouākai section as-is, or compress to a single pull-quote statement?** v1 §3 prose is 75 words across three sentences and is already brand-voice. My recipe keeps it as Moment 5. Compressing to a single statement loses the macron-preservation discipline and the explicit "no Māori visual motifs" line, which are load-bearing for the brand's respect posture. *Default: keep Pouākai as a full section, not a compressed statement.*

8. **Hairlines above every moment, or only some?** §3 recommends hairlines above Moments 3, 4, 5, 6. *Default: hairlines above 3, 4, 5; optional above 6.*

9. **PM spec revision — does this memo wait on the spec revision, or feed into it?** The PM is being re-briefed in parallel. **My recommendation: PM revises spec to admit moment-shaped IA; designer composition revision follows the PM revision; content drafter re-authors against the revised IA.** *Default sequence: PM revises → designer composition revision → content draft revision → engineer implements.*

---

## 8. Out of scope (for this memo)

- **Authoring the v2 composition revision at `meta/compositions/pages/about.md`.** This memo proposes the recipe; the composition revision waits on founder review of this memo and PM spec revision.
- **Authoring v2 content draft.** Content drafter's lane, against the revised spec.
- **Authoring DS-side proposals.** §4.2 and §4.3 name the gaps; the DS-side markdown is `@poukai-inc/poukai-ui` maintainers' lane if Arian routes them.
- **`/values`, `/manifesto`, `/leadership`, `/team`, or any other Apple-inspired page type** the recalibration might tempt the brand toward. Out of scope — pouk.ai has four routes plus `/about` plus P1 `/404` plus P2 `/contact`. Adding routes is a masterplan-level decision.
- **Sitewide register revisions to `/`, `/why-ai`, `/roles`, `/principles`.** §5 rules this out. `/about` v2 lands contained.
- **Reopening A3 (illustration).** §6 holds illustration parked.
- **Reopening A4 (four-item nav order).** Unchanged. Nav order `Why AI → Roles → Principles → About` carries forward verbatim.
- **Reopening A14 (`<title>`, meta description) or A15 (JSON-LD Person, no `worksFor`, no `sameAs`).** Metadata layer is unchanged by this recalibration — moment-shaped page content does not affect the SERP / structured-data surface.
- **Performance / Lighthouse re-baseline.** v2's HTML payload is comparable to v1 (similar token count, slightly fewer words, slightly more elements). The Lighthouse 100/100/100/100 contract holds unchanged.
- **Composition v1's `Approved` status.** v1 stays `Approved` and shipped until a v2 revision lands. This memo does not flip v1.

---

## 9. Recommendation summary

- **Adopt the six-moment recipe in §3.** Composition is moment-shaped, brand-voice, type-only, zero motion. Word count drops from ~440 to ~155.
- **Re-adopt `<Hero>` for Moment 2** with a brand-voice title (`Draft: pouk.ai is one operator.`) — gives the page a real `<h1>` at display scale and aligns `/about`'s top-of-page rhythm with the four shipped routes.
- **PM spec revision required**: reverse A5 (first-person), revise §4 IA from three-sections to six-moments, revise §5 content requirements to admit pull-quote register, revise §8 ACs accordingly. The voice-shift documentation in §5 collapses to one shift (body → CTA, both brand-voice variants).
- **Zero new tokens. One forward-looking DS-gap proposal** (`<Statement>` molecule). Both gaps non-blocking for v2 ship.
- **No illustration**, no surface alternation, no full-bleed type. Restraint vocabulary preserves.
- **v2 lands contained on `/about`.** The four shipped routes stay untouched.
- **Sequence**: founder reviews this memo → PM revises spec → designer composition revision (replaces v1 at `meta/compositions/pages/about.md`, supersedes the (ii) verdict) → content drafter re-authors → engineer implements.

The recipe is opinionated. Override any of §7's defaults and I revise.
