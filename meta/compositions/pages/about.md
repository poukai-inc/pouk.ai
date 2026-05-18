# Composition: About — v2

**Route**: `/about`
**Status**: Approved
**Approved by**: Arian (founder), 2026-05-18 evening. Founder approval ratifies the v2 composition for downstream execution; the 6 DS-gap proposals in §6 move from blocking-composition to blocking-ship and route in parallel. Issues filed: [#52](https://github.com/poukai-inc/poukai-ui/issues/52), [#53](https://github.com/poukai-inc/poukai-ui/issues/53), [#54](https://github.com/poukai-inc/poukai-ui/issues/54), [#55](https://github.com/poukai-inc/poukai-ui/issues/55), [#56](https://github.com/poukai-inc/poukai-ui/issues/56), [#57](https://github.com/poukai-inc/poukai-ui/issues/57), [#58](https://github.com/poukai-inc/poukai-ui/issues/58).
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-18
**Supersedes**: v1 of this file (Approved 2026-05-18 by Arian, founder). v1 stays in git history; v1's ship is live on production and continues to serve `/about` until v2 ships in a coupled PR with the PM v2 spec + content draft revision + engineer build. **v2 does NOT retroactively flip v1's `Approved` status — v1 remains the canonical recipe of the live page until v2 supersedes it on deploy.**
**Governing spec**: [`meta/specs/pages/about.md`](../../specs/pages/about.md) — currently v1.0 (Approved 2026-05-18); **v2.0 in flight from PM in parallel with this composition**. This composition is authored against the v2 spec's expected outcomes per the founder's 2026-05-18 recalibration brief; if PM v2 lands differently, this composition revises.
**DS version targeted**: `@poukai-inc/ui@0.14.0` (bump 2026-05-18; six Rank-1 DS-gap proposals — see §6. Five accepted in some form by 0.14.0; one partially-shipped with brand-contract counter-proposal — see §6.3 resolution).
**Recalibration memo**: [`meta/compositions/proposals/about-v2-explorations.md`](../proposals/about-v2-explorations.md) (Draft, 2026-05-18). The exploration memo named three Directions (A, B, C); founder picked **Direction A — single-statement display lead**. This composition implements A with the portrait integration the founder ratified afterwards.
**Companion docs**:
- [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md) — illustration v2 PM proposal. **Status flips from `Draft (parked)` to `Draft (active)` under this composition** (founder triggered §3 conditions on 2026-05-18 by generating an AI portrait + selecting Direction Y from the explorations memo). PM updates the proposal's status; designer surfaces the dependency.
- [`meta/proposals/ds-side/section-surface-rhythm.md`](../../proposals/ds-side/section-surface-rhythm.md) — Rank-1 DS-gap (filed 2026-05-18 via recalibration memo).
- [`meta/proposals/ds-side/statement-molecule.md`](../../proposals/ds-side/statement-molecule.md) — Rank-1 DS-gap (filed 2026-05-18).
- [`meta/proposals/ds-side/type-display-scale.md`](../../proposals/ds-side/type-display-scale.md) — Rank-1 DS-gap (filed 2026-05-18).
- [`meta/proposals/ds-side/color-warm-accent.md`](../../proposals/ds-side/color-warm-accent.md) — **NEW** Rank-1 DS-gap (filed 2026-05-18 with this composition; saturated orange backdrop token).
- [`meta/proposals/ds-side/content-max-bleed.md`](../../proposals/ds-side/content-max-bleed.md) — **NEW** Rank-1 DS-gap (filed 2026-05-18 with this composition; full-bleed permission for editorial bands).
- [`meta/proposals/ds-side/portrait-image-primitive.md`](../../proposals/ds-side/portrait-image-primitive.md) — **NEW** Rank-1 DS-gap (filed 2026-05-18 with this composition; `<Portrait>` molecule for responsive images at-register).

---

> **What v2 does, in one paragraph.** `/about` v2 inverts v1 entirely. v1 was a wall of prose in a quiet single-column layout. v2 is **one editorial moment** — a saturated-orange full-bleed band carrying a single display-scale statement on the left and an AI-generated cinematic founder portrait on the right — followed by a quiet typographic tail (one short body block, the Pouākai section, and an end CTA) on the brand's existing `--bg` canvas. The page commits to one register-defining gesture at the top and lets the rest of the page be its breathing. The single `<h1>` lives on the display statement. The portrait is the page's first piece of figural imagery; the saturated orange is the brand's first non-neutral surface color; the full-bleed band is the brand's first composition that exceeds `--content-max`. This is the page that establishes the brand's editorial register going forward.

> **Verdict on §9 spec dependency (designer-review gate, A9 from v1 spec).** The v1 verdict (ii) — skip `<Hero>` entirely — **retires**. v2 re-adopts `<Hero>` for the page's opening moment with a brand-voice display statement as the title and the AI portrait in the `illustration` slot (DS-gap [`hero-illustration-slot.md`](../../proposals/ds-side/hero-illustration-slot.md), filed for `/` revision 2026-05-17 but unconsumed there per home composition's deferral — **/about v2 is the slot's first consumer**). The forward-looking `<Hero variant="no-title">` proposal at [`hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md) **stays filed but is no longer consumed by `/about`** — future editorial pages that want eyebrow-only opening may still want it. The page's `<h1>` is the display statement inside `<Hero>`'s title slot, satisfying WCAG 1.3.1 + 2.4.6 cleanly.

---

## 1. Intent

The reader lands on `/about` and registers, in one beat, a piece of considered editorial design — not a website's About page. The viewport's first impression is a saturated orange band running edge-to-edge, with a founder's portrait on the right at near-magazine-cover register and a single declarative statement on the left set at display scale in Instrument Serif italic. The portrait's lighting and chromatic energy carry roughly half the page's communicative weight; the statement carries the other half. The reader's mental model after three seconds: *this is a company that thinks about how it presents itself*. After ten seconds, having read the statement: *this is a one-operator consulting practice, run by the person in the portrait, available for AI work.* Then the page settles — a short body block on the brand's `--bg` canvas, a Pouākai section, an end CTA. The portrait is the page's *moment*; the tail is the page's *substance*.

This is a deliberate register expansion. The brand's first four routes (`/`, `/why-ai`, `/roles`, `/principles`) hold on neutral palette + typographic restraint + zero figural imagery. v2 of `/about` introduces **three new register elements simultaneously**:

- **Saturated orange as a brand surface color.** New territory. The existing `--accent` (blue `#0071E3`) is a signal token (links, status); orange is a *band* — a section background, used once, on this page, in this composition. See §6.4 for the DS-gap that names it.
- **Figural imagery (a portrait of the founder).** Reverses A3 from the v1 spec (which closed "type-only v1, illustration parked to v2"). The page generates v2's illustration question by *being* the v2 case. See §6.6.
- **Full-bleed composition.** First time any pouk.ai page exceeds `--content-max`. The orange band runs to the viewport's `--page-pad` edges (or to true viewport edges — DS picks; see §6.5).

The discipline that *protects* the register expansion: **everything below the band is unchanged from the brand's existing vocabulary.** Body sits on `--bg` `#FBFBFD`, typography is `--font-sans` body + `--font-serif` italic accents, the Pouākai section is brand-voice declarative carried forward verbatim from v1, the end CTA is the existing muted-line pattern. The page does not become "the orange page" — it becomes "the page with one orange band." The brand commits to *one register move*, executed completely, and lets the rest of the page hold.

The page is **register-lead** per the recalibration memo §5. The four shipped routes do not refresh under this composition; they remain on the existing vocabulary and may iterate toward v2's register on their own future cadences. v2 of `/about` is the proof-of-concept for what `/` and future pages *could* adopt — it is not the trigger for sitewide refresh.

---

## 2. Section-by-section composition

The page is five units, top to bottom. Units 1 (chrome) and 5 (chrome footer) are DS-owned. Units 2 (portrait band), 3 (story), 4 (Pouākai), and the inline end-CTA constitute the page's substance.

### Unit 1 — `<SiteShell>` (page chrome)

- **DS primitive(s)**: `<SiteShell>` (organism). Wrapped site-side by the existing `ShellWrapper.tsx`. **Unchanged from v1.**
- **Props (substantive)**:
  ```
  <SiteShell
    currentRoute="/about"
    routes={[
      { href: "/why-ai",     label: "Why AI"     },
      { href: "/roles",      label: "Roles"      },
      { href: "/principles", label: "Principles" },
      { href: "/about",      label: "About"      },     // four-item nav — unchanged from v1 (A4)
    ]}
    footer={…matches v1…}
  >
    {/* Units 2–4 + end CTA */}
  </SiteShell>
  ```
- **Layout / spacing**: same as v1. `<SiteShell>` owns its header/footer chrome internally. `.site-page` wraps Units 2–4 + end CTA inside `max-width: var(--content-max)` and `padding-block: var(--space-12)` — **EXCEPT** Unit 2 (the portrait band) which **breaks out** of `.site-page` to span full-bleed. See Unit 2 layout below for the composition mechanics.
- **Motion**: none at SiteShell level.
- **Brand notes**:
  - Wordmark stays `<Wordmark>` via SiteShell (never a string literal). Unchanged.
  - The `mailto:hello@pouk.ai` footer line remains the second appearance of the email on the page (the first is the end CTA inside Unit 4). Unchanged.
  - **Critical interaction with Unit 2**: SiteShell's header renders **above** the orange band. The wordmark and nav sit on `--bg` at the very top of the viewport; the orange band starts *below* the SiteShell header chrome. This preserves SiteShell's contract (it is min-height: 100dvh and owns the page's outer chrome) and lets the portrait band feel like a contained editorial gesture, not a takeover. See §3 for the math.

### Unit 2 — The portrait band (page hero, full-bleed orange, display statement + portrait)

This is the page's load-bearing composition. Every other unit serves it.

- **DS primitive(s)**:
  - `<Hero>` molecule (DS-owned). `<Hero>` re-adopted for v2 — the v1 verdict (ii) "skip Hero entirely" retires.
  - `<Hero illustration>` slot — consumes [`hero-illustration-slot.md`](../../proposals/ds-side/hero-illustration-slot.md). **`/about` v2 is the slot's first production consumer** (the home composition deferred the engraving direction; this is the proposal moving from filed-to-shipped).
  - Wrapped site-side in a `<section class="about-band">` element (or a small `AboutBand.tsx` carrier if the React-boundary pattern requires it, matching `HomeHero.tsx` / `ShellWrapper.tsx` precedent). The band carrier owns the full-bleed positioning + orange background; `<Hero>` composes inside it at `--content-max` width.

- **Props (substantive)**:
  ```
  <Hero
    size="display"                      // DEFAULT — re-adopted; v1 used skip-Hero
    illustration={<PortraitArian />}    // DS-gap §6.2 (hero-illustration-slot) — consumed
    title={<>…display statement…</>}    // <h1> — see Content slot below
    lede={<>…short supporting line…</>} // optional muted line, ≤12 words
    cta={null}                          // CTA lives at end of page, not in band
    status={null}                       // No StatusBadge in band — see brand notes
    // NEW props this composition assumes the DS ships:
    surface="warm-accent"               // DS-gap §6.4 — color-warm-accent
    bleed="full"                        // DS-gap §6.5 — content-max-bleed (Hero opt-in)
    titleColor="inverse"                // DS-gap §6.4 — title resolves to --fg-on-warm
  />
  ```
  **Caveat on the new props**: the recipe above assumes the DS team accepts §6.4 (warm-accent surface + on-warm foreground), §6.5 (bleed permission), and §6.6 (`<Portrait>` molecule carrying responsive imagery). If any are rejected, the composition has fallbacks documented in §6 — but the recipe ships **strongest** if all three land.

- **Portrait asset specification** (see §6.6 for the `<Portrait>` molecule proposal that codifies this):
  - **Subject**: founder (Arian), head-and-shoulders, three-quarter angle, contemplative off-frame gaze upward-left.
  - **Lighting**: cinematic side-light from camera-right, strong fall-off into shadow on the left side of the face. Editorial register (Vogue / Apple-leadership-portrait reference points).
  - **Wardrobe**: dark navy blazer over black turtleneck. The wardrobe is part of the asset; the composition does not re-specify it on each rev.
  - **Backdrop**: the saturated orange-red is **embedded in the portrait asset itself** (not the page's CSS background). The portrait asset is delivered as a full-color image (AVIF/WebP/JPEG pipeline) including the orange backdrop and the geometric tessellated shadow play. The page CSS does **not** apply orange as a `background-color` to the band; the band's background is a continuation of the portrait's right edge via a CSS-only color-match technique (see §3 for the math + engineer note).
  - **Crop**: portrait crops at the top of the shoulders (no torso) on the right ~40–45% of the band's width at desktop. Below 1024px the portrait crops tighter (head + collar only) and shifts proportionally. Below 720px the portrait collapses to a separate vertical block beneath the statement (see §3 responsive rhythm).
  - **Aspect ratio**: 3:4 portrait orientation at desktop. The 3:4 is the portrait's intrinsic ratio; the band's overall ratio is 16:7-ish (a horizontal letterbox) and the portrait's 3:4 plate sits inside it on the right.
  - **Color-matching**: the band's left half (where the display statement sits) is a flat CSS color that matches the portrait's orange backdrop *exactly*. The match is what makes the band read as one continuous orange surface that *contains* the portrait, rather than two adjacent objects (statement + image) sitting on different surfaces. The match is delivered via the new `--bg-warm-accent` token (DS-gap §6.4); the portrait asset is color-graded so its backdrop is exactly that token's value at light mode. Critical: **the DS owns the orange token's value, the asset's backdrop matches that value precisely.** Mismatch = visible seam = composition failure. Engineer-side QA gate before ship.
  - **Asset production owner**: Arian. AI-generated portrait, founder-curated, color-graded to match the DS-shipped `--bg-warm-accent` value. Production pipeline + final asset selection are Arian's lane per the home composition precedent.

- **Display statement (the page's `<h1>`)**:
  - Renders via `<Hero>`'s `title` slot.
  - **Type scale — site-side clamp, one-shot per composition §6.3 resolution (path b)**: the statement is set via a site-side CSS clamp on `.about-band__statement` (or the engineer's equivalent selector inside `AboutBand.tsx`), authored as `font-size: clamp(3.5rem, 2rem + 5vw, 8rem);` (~56–128px). This is **larger than `--fs-display`** (the DS-shipped token in 0.14.0, 48–88px) and **smaller than the v2-original-recipe `--fs-display-lg`** (rejected by DS; 64–192px). Rationale: at the DS-shipped `--fs-display` 88px ceiling, the statement does not own the first viewport at desktop (it sits inside `--fs-tagline`'s 36–68px ceiling by only 20px — that is not a register-defining moment). The site-side clamp is the DS-permitted path: `@poukai-inc/poukai-ui` maintainers' counter-proposal verbatim — *"Site can clamp locally for one-shot use; we don't bless 192 as a brand contract for one page."* The composition takes the permission, ships at a tightened 128px ceiling (down from the original 192px proposal — closer to the Apple band the DS named while still distinguishably louder than the Hero title scale), and scopes the clamp to `/about`'s band selector only. **The clamp is composition-load-bearing: any future maintainer reducing the ceiling collapses Direction A's identity.** If a future editorial page (`/manifesto`, `/values`, customer-story) wants the same scale, see §6.3 for the re-proposal trigger — the site-side clamp becomes the second confirmed surface and `--fs-display-lg` re-files against `@poukai-inc/poukai-ui` maintainers with a stronger case.
  - Font: `--font-serif` (Instrument Serif), italic throughout the statement (no `<em>` accents inside; the entire statement is italic — the cap rule from the v2 recipe holds at the new scale).
  - Color: **`--fg-on-warm`** (DS-gap §6.4 — an off-white that reads correctly against the saturated orange backdrop; the DS picks the exact value, designer recommends ~#FBFBFD-equivalent in warm space, never pure white). The DS's "never pure edges" principle applies: `--fg-on-warm` is *near* white but not `#FFFFFF`.
  - Max-width: ~50% of `--content-max` at desktop (the right ~40–45% belongs to the portrait, plus a `--space-12` interior gap). At narrower viewports the statement widens; below 720px it occupies the full text column above the portrait.
  - **Statement copy is content-drafter's lane** (per the v2 PM spec revision in flight). Draft placeholder, to anchor the composition visually: `Draft: One operator. AI that ships.` (8 words; reads at-scale; brand-voice declarative; not a slogan). Final wording is content-drafter authored, Arian approved.
  - Max length: ≤12 words per the v2 composition rule on display statements. Shorter is better at the 128px ceiling — 8-word statements wrap cleanly to two lines on desktop without crowding the portrait column; 12-word statements push to three lines and risk crowding. The reader spends 3 seconds on the statement before scanning to the portrait.

- **Optional supporting line** (`<Hero>`'s `lede` slot):
  - Renders below the display statement at `--fs-body`, `--fg-on-warm-muted` (DS-gap §6.4 second token — the on-warm equivalent of `--fg-muted`).
  - ≤12 words. Single sentence.
  - Draft placeholder: `Draft: Technical consulting through the AI tools that collapse months into days.` (12 words). Final wording is content-drafter authored.
  - Optional — the statement can stand alone if the content drafter prefers. Designer-side recommendation: ship the supporting line; the 12-word lede pulls the substantive fact down one beat from the statement's gesture.

- **No `cta` slot inside Unit 2**. The page's CTA is the end-CTA line at the bottom (preserved from v1's `--principles`-style pattern). Putting a `<Button>` inside the portrait band would over-weight the band as a doorway and contradict the "this is a portrait moment, not a landing page" register.
- **No `status` slot inside Unit 2**. `<StatusBadge>` lives canonically on `/` (DS rule: max 1 per page; the badge's job is sitewide availability signaling, not page-specific decoration). The orange backdrop already does a high-energy visual signal; layering a status pulse on top would be redundant and visually overstuffed.

- **Layout / spacing**:
  - **Band height target**: ~70vh at desktop (1440×900 → ~630px tall). Generous breathing on the orange surface; the portrait + statement own the first viewport.
  - **Band internal layout**: two-column at ≥1024px. Left ~50–55% carries statement + supporting line, vertically centered. Right ~45–50% carries the portrait, vertically centered, top-cropped at shoulders. Gap between columns: `--space-12` (48px).
  - **Band internal padding**: `--space-24` (96px) top + bottom inside the orange band, `--space-16` (64px) left + right at desktop, collapses to `--page-pad` left/right below 1024px.
  - **Full-bleed mechanics**: the band breaks out of `.site-page`'s `max-width: var(--content-max)` via DS-gap §6.5 (`bleed="full"`) — the band element renders at viewport-width minus zero padding, and the orange surface runs edge-to-edge. The band's *inner content* still caps at `--content-max` (so the statement + portrait pair never spreads wider than ~1024px even at 2560px viewports — the orange extends, the content doesn't). Below 1024px viewport, the bleed flattens to viewport-width naturally.
  - **Below 720px**: band collapses to single-column. Statement on top, portrait below, both at full viewport width (minus `--page-pad`). Band height target ~90vh at mobile (the portrait + statement together fill the first viewport on a typical mobile screen). Vertical stacking gap: `--space-12`.
  - **Below the band**: Unit 3 (story) starts immediately after the band ends — no `--space-24` gap (the band's own bottom padding handles the breathing room).

- **Motion**:
  - **Static at first paint by default.** Lighthouse 100 + zero-JS contract preserved.
  - **Optional**: consume `<Hero entrance="stagger">` (DS 0.8.0, already shipped) for a single 600ms staggered reveal: portrait fades + rises 12px (300ms delay), statement fades + rises 8px (450ms delay), supporting line fades (600ms delay). CSS-only, gated by `prefers-reduced-motion: reduce` via the DS's `:root !important` block.
  - **Designer recommendation**: SHIP THE STAGGER. The display-scale statement benefits from an arrival animation in a way body prose doesn't; the portrait's reveal alongside the statement makes the band feel *composed* rather than *displayed*. At `prefers-reduced-motion: reduce` the page paints fully formed in one beat — both states feel finished.
  - **No scroll-triggered, no parallax, no IntersectionObserver, no hover effects on portrait, no animated SVG inside portrait.** All would force `client:*` and break R-079.

- **Content slot**:
  - Display statement copy: hardcoded in `AboutBand.tsx` (or `about.astro` direct) per the home composition's "homepage prose hardcoded in template" precedent. The composition recipe assumes the statement is short enough that JSON-collection extraction is not earned.
  - Portrait asset path: imported from `src/assets/portrait-arian.{avif,webp,jpeg}` (or per the engineer's asset pipeline; `astro:assets` / Image component is the engineer-mechanical call). The asset import resolves to the same hashed URL the `<picture>` element's `<source>` attributes reference.

- **Brand notes**:
  - **Saturated orange enters the brand here.** This is the *one* page in the site that carries non-neutral surface color. Future pages may adopt the same band pattern (per the register-lead framing) — when they do, they will reach for the same `--bg-warm-accent` token. The token is the brand's first warm-color expansion; its acceptance is the DS-gap §6.4 conversation.
  - **The portrait is a real photograph (AI-generated, founder-curated).** Not an illustration in the engraving / sketchbook register the home composition once considered. The home composition's deferred engraving direction is now **explicitly retired** — see §5 cross-page implications. The brand carries *one* figural vocabulary going forward: photographic-register portraits (and other founder/operator imagery when warranted).
  - **The portrait is informative, not decorative.** `alt` text is substantive — names the subject (Arian Zargaran, founder), the framing (cinematic editorial portrait), and the asset's role on the page (introduction of the operator behind pouk.ai). See §6.6 + the `<Portrait>` proposal for the alt-text contract. **This satisfies axe-clean** (decorative `aria-hidden` would be wrong: the portrait is the page's primary identification signal for a sighted reader, and a screen-reader user deserves the equivalent signal).
  - **The display statement is the page's `<h1>`.** Exactly one per page (WCAG 1.3.1 + 2.4.6). Unit 4's Pouākai section is `<h2>`. No `<h3>` or deeper anywhere.
  - **No `<em>` accents inside the display statement.** At the site-side clamp's ~128px desktop ceiling (per §6.3 path-b resolution), italic-on-keywords would visually compete with the statement's overall presence. The statement is set in Instrument Serif italic *throughout* (the font-style applies to the entire statement, not as accent).
  - **Color-match between band's left-half background and portrait's right-edge backdrop is engineer-side QA-gated.** Visual seam between the two surfaces is a composition failure — the band must read as one continuous orange surface that contains both halves.

### Unit 3 — The story (short brand-voice body block on `--bg`)

The page's only paragraph-shape prose. Drops back to the brand's existing typographic vocabulary.

- **DS primitive(s)**: none. Site-side `<section class="about-story">` with `<p>` children.
- **Layout / spacing**:
  - Container: `.site-page` (returns to `max-width: var(--content-max)`, `padding-block: var(--space-12)`).
  - Top margin: zero (Unit 2's band has its own bottom padding `--space-24`).
  - Text column: max-width `--hero-max` (38rem / 608px) — matches the Hero lede width contract. The story reads as a continuation of the band's supporting line at body scale.
  - Body type: `--fs-body` (17–19px clamp), color `--fg`, `--font-sans`.
  - Paragraph gap: `--space-4` (16px) between `<p>`s.
  - Bottom margin: `--space-24` (96px) before Unit 4.
- **Motion**: none. Static at first paint.
- **Content slot**: 2–3 short paragraphs, ~60–90 words total. Brand-voice declarative throughout (A5 reversed per the recalibration brief; "this is a company, not Arian's story"). The content carries the substantive narrative the v1 §1+§2 carried (the AI-tools-collapse-months-into-days seam, the operator posture, the small-engagements + ship-not-decks framing) compressed into ~5–7 sentences. **Content drafter's lane**; final copy authored against the PM v2 spec. Composition does not author placeholder copy here — Unit 3's exact voice is the content-drafter's call.
- **Brand notes**:
  - **No `<h2>` heading on Unit 3.** The story is one continuous body block with no section heading. The display statement above (Unit 2) is the page's only display moment; adding a section heading here would compete with the band's primacy.
  - **First-person voice is OUT.** v1's A5 ("explicit 'I' throughout sections 1 and 2") reverses under the v2 recalibration. Unit 3 is brand-voice declarative — *pouk.ai is*, *pouk.ai builds*, *pouk.ai works with* — not *I came up*, *I started*, *I take on*.
  - **No mailto link inside Unit 3's prose.** v1's section 1 had an inline `mailto:hello@pouk.ai` inside the body; v2 drops it. The CTA lives at the end of the page only. The portrait + display statement already do the operator-identification job that v1's "I am the person who replies" sentence did.

### Unit 4 — Pouākai (origin section)

Carries forward from v1 nearly verbatim. The one block of v1 that already landed at the right register.

- **DS primitive(s)**: none. Site-side `<section class="about-poukai">` with `<h2>` and `<p>`.
- **Layout / spacing**:
  - Container: `.site-page`.
  - Top margin: `--space-24` (96px) from Unit 3 (large editorial break — this is a section, not a continuation).
  - Heading: `<h2>`, Instrument Serif italic, `--fs-tagline-intimate` (32–52px clamp), color `--fg`. Anchor `id="poukai"` (or per content-drafter slug).
  - Heading-to-body gap: `--space-6` (24px).
  - Body: `--fs-body`, color `--fg`, max-width `--hero-max`. Single `<p>`, ~75 words, three sentences.
  - Bottom margin: `--space-16` (64px) before end CTA.
- **Motion**: none. Static.
- **Content slot**:
  - Heading: `Pouākai` (with macron preserved as `&#257;` HTML entity).
  - Body: **carries forward verbatim from v1** — *Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height. The name comes from Māori tradition; the bird is real, extinct for around six hundred years, and the spelling carries the macron it was given. pouk.ai borrows the name as a reference point — a hunter that worked by altitude and timing — and stops there: no Māori visual motifs in the brand, no claim to the culture, no metaphor stretched past the one-line origin.* The content-drafter may tighten if the PM v2 spec asks for tighter; default is verbatim carry-forward.
- **Brand notes**:
  - **Voice continuous.** v2 is brand-voice declarative throughout; the v1 voice-shift from first-person body to brand-voice on this section *collapses* in v2 (the whole page is now in the same voice). The Pouākai section reads as continuous register, not as a shift.
  - **Macron preserved** (`&#257;` or literal Unicode — engineer's call).
  - **No Māori visual motifs in the brand.** Standing rule. The orange backdrop on Unit 2 is editorial-photography-register, not cultural reference; this section explicitly states the brand's respect posture.

### Unit 5 — End CTA + `<SiteShell>` footer

- **DS primitive(s)**: none for the CTA line; `<SiteShell>` footer is DS-owned (Unit 1's `footer` prop).
- **End CTA layout / spacing**:
  - Container: `.site-page`.
  - Top margin from Unit 4: `--space-16` (64px). Optional hairline-above (`border-block-start: 1px solid var(--hairline)`, `padding-block-start: var(--space-12)`) — designer recommends **yes**, for rhythm consistency with `/principles`'s end-CTA pattern.
  - Type: `<p>` at `--fs-body`, `--font-sans`, color `--fg-muted`.
  - Anchor: `<a href="mailto:hello@pouk.ai">…</a>` — DS default link styling.
  - Bottom margin: `--space-16` to `.site-page`'s bottom padding `--space-12`.
- **Motion**: none.
- **Content slot**: single muted line, ≤10 words, content-drafter authored. Draft placeholder: `Draft: For inbound, hello@pouk.ai.` (engineer-mechanical placeholder only; final wording content-drafter's lane). Differentiated from `/principles`'s line by being shorter and dropping the conditional setup — Unit 2's display statement does the qualifying work that `/principles`'s "If this is the kind of partner you want" does.
- **Brand notes**:
  - **CTA is muted, not loud.** The portrait band did the loud work; the CTA is the invitation. A `<Button>` here would re-introduce doorway-volume that the body has just spent two units quieting.
  - **The `mailto:` in the CTA is the first appearance of the email on the page;** SiteShell footer carries the second instance per the existing precedent.

---

## 3. Cross-section rhythm

Top to bottom, with token resolution:

1. **`<SiteShell>` header** — DS-owned chrome on `--bg`. Wordmark 56px (ADR-0008), four-item nav.
2. **The portrait band (Unit 2)** — full-bleed `--bg-warm-accent`, ~70vh at desktop, two-column inside `--content-max`, display statement (Instrument Serif italic, `--fs-display-lg`, `--fg-on-warm`) left + portrait right. Internal padding `--space-24` top + bottom, `--space-12` inter-column gap.
3. **Transition: zero gap** — Unit 2's bottom padding and Unit 3's top padding (`.site-page` `--space-12`) are deliberately compressed. The visual hand-off from the band's saturated surface to `--bg` is the rhythm move; no spacer between them.
4. **Unit 3 (the story)** — `--bg`, `.site-page` `max-width: var(--content-max)`, `padding-block: var(--space-12)`, body `<p>`s max-width `--hero-max`, `--space-4` paragraph gaps.
5. **`--space-24` (96px)** between Unit 3 and Unit 4.
6. **Unit 4 (Pouākai)** — `--bg`, `.site-page`, `<h2>` at `--fs-tagline-intimate` Instrument Serif italic → `--space-6` → ~75-word body.
7. **`--space-16` (64px)** between Unit 4 and the end CTA.
8. **End CTA** — optional hairline → `--space-12` padding → muted `<p>` → `--space-16` to `.site-page` bottom padding.
9. **`.site-page` bottom padding `--space-12`**.
10. **`<SiteShell>` footer** — DS-owned chrome, four-item link list.

**Math at 1440×900**:
- `<SiteShell>` header: ~104px.
- Portrait band: ~630px (70vh).
- Unit 3 story: `--space-12` top + ~180px body (~80 words at `--fs-body` line-height ~1.5 across `--hero-max`) + `--space-12` bottom = ~276px. (Within `.site-page` the `--space-12` paddings are shared with the next section.)
- `--space-24` to Unit 4: ~96px.
- Unit 4 Pouākai: ~42px heading + 24px gap + ~120px body + 64px bottom margin = ~250px.
- End CTA: `--space-12` (with hairline) + ~30px text + `--space-16` = ~94px.
- `.site-page` bottom + SiteShell footer: ~118px.
- **Total: ~1568px**. Page is ~1.7 viewports tall at 1440×900. The portrait band fills the first viewport; everything else lives in the second viewport's scroll. This is correct for an editorial page — the moment is above the fold, the substance is at one scroll.

**Token compliance**: every spacing value resolves to a DS `--space-N` token. Color values resolve to existing tokens (`--bg`, `--fg`, `--fg-muted`, `--hairline`) or the four new tokens DS-gap §6.4 proposes (`--bg-warm-accent`, `--fg-on-warm`, `--fg-on-warm-muted`, optional `--bg-warm-accent-shadow` for the tessellated shadow play if the asset's grading needs CSS-side support). Type values resolve to existing tokens (`--fs-body`, `--fs-tagline-intimate`) or the two DS-gap §6.3 proposes (`--fs-display`, `--fs-display-lg`). **No raw pixels. No raw colors. No magic numbers.**

**Surface rhythm**: two surfaces in v2.
- `--bg-warm-accent` (Unit 2 only — the portrait band).
- `--bg` (everywhere else — Unit 1 header, Unit 3 story, Unit 4 Pouākai, Unit 5 end CTA + footer chrome).

This is **two surfaces, one alternation, one moment**. Not Direction B's multi-band rhythm; Direction A's single editorial moment + return to neutral. The discipline of *one move, executed completely* holds.

**Visual hierarchy contract**:
- **Page identity**: the portrait + display statement compose as one unit; together they ARE the brand's editorial register expression.
- **Page `<h1>`**: the display statement (inside `<Hero>` title slot), Instrument Serif italic at the site-side clamp (`clamp(3.5rem, 2rem + 5vw, 8rem)`; ~56–128px) per §6.3. **One.** *Implementation note: the site-side clamp lives on the band's display-statement selector only; it is not authored as a global token (per the DS's 0.14.0 counter-proposal). If the page ever gains a second `<h1>` candidate the clamp does not propagate.*
- **Page section heading**: Unit 4 Pouākai `<h2>`, Instrument Serif italic at `--fs-tagline-intimate`. **One.**
- **Body type**: everywhere else, sans Geist at `--fs-body`.
- **Three type scales total** (`--fs-body`, `--fs-tagline-intimate`, and the band's site-side clamp) — same count as v1, but the largest scale is ~1.9× the previous ceiling (`--fs-tagline-intimate` at 52px → 128px clamp ceiling) and used once, at the page's load-bearing moment.

---

## 4. Motion choreography (page-level)

- **At first paint, `prefers-reduced-motion: no-preference`**:
  - `<Hero entrance="stagger">` consumed on Unit 2: portrait fades + rises 12px over 600ms (300ms delay), display statement fades + rises 8px over 600ms (450ms delay), supporting line fades over 600ms (600ms delay). CSS keyframes, `animation-fill-mode: both`, gated by `prefers-reduced-motion: reduce` via DS `:root !important`.
  - Total entrance: ~1.2s from page paint to fully composed.
  - No motion on Units 3, 4, 5.

- **At first paint, `prefers-reduced-motion: reduce`**:
  - DS `:root !important` block sets `animation-duration: 0.01ms` on all animations. Page paints fully composed in one beat.
  - Both states feel finished. The motion is decoration, not load-bearing.

- **On scroll**: nothing. No parallax, no scroll-triggered reveal, no intersection observer. The band is fully visible in the first viewport at typical desktop heights; on mobile the user scrolls past it normally.

- **On hover**:
  - Nav links: DS-owned link-hover transitions (`--easing-link`, `--dur-fast`). Unchanged from v1.
  - End-CTA `mailto:` link: DS-owned link hover. Unchanged.
  - Footer email link: DS-owned link hover. Unchanged.
  - **Portrait does not hover**: no scale, no tint, no overlay. The portrait is figural imagery, not an interactive element. Hovering a person's portrait to make it scale would be uncanny.

- **Fires never (locked out)**: all scroll-triggered, parallax, scroll-spy, marquee, animated SVG inside portrait, IntersectionObserver-driven, JS-driven micro-interactions. All would force `client:*` and violate R-079 + spec §8 zero-JS AC.

**`prefers-reduced-motion` behavior**: every motion the page consumes (the Hero stagger only) is gated by the DS's `:root !important` block. No exception. No site-side override.

---

## 5. Icon picks (if applicable)

**None.** `/about` v2 uses no Lucide glyphs. The portrait is the page's figural imagery; the rest is type. Same as v1 — the absence is composition-load-bearing. Future maintainers who want to add a `Mail` icon next to the end-CTA, a `ChevronDown` scroll-hint below the band, or any Lucide glyph elsewhere on `/about` — that's a register break and a spec-level conversation, not a composition revision.

---

## 6. DS gaps surfaced

Six DS-gap proposals are now relevant to `/about` v2. Three were filed 2026-05-18 via the recalibration memo. Three more are filed 2026-05-18 **concurrently with this composition**, framed from the v2 composition need. Each is named, scoped, and routed; the v2 composition's recipe assumes all six land but provides fallbacks below where each is rejectable.

### 6.1 `<Hero illustration>` slot — already filed, now consumed

- **File**: [`meta/proposals/ds-side/hero-illustration-slot.md`](../../proposals/ds-side/hero-illustration-slot.md) (Draft, consumer-side authored 2026-05-17 for the home composition; home deferred consumption).
- **Status in v2**: `/about` v2 is the slot's **first production consumer.** The slot's responsive contract (hide below ~720px breakpoint) maps cleanly to the band's mobile collapse (single-column stacking).
- **Designer note for `@poukai-inc/poukai-ui` maintainers**: the v2 use-case slightly stretches the original proposal — the original framed "illustration column gets remaining width up to a max of ~25rem"; v2's portrait wants ~45% of `--content-max` (~28rem). The proposal's open question 5 ("vertical alignment between columns") is answered for v2: vertically centered. Open question 6 ("orthogonality with `<Hero size>`") is answered for v2: orthogonal, no implicit coupling needed.
- **Blocking dependency**: yes — without this slot, the band cannot compose the portrait inside `<Hero>`. Fallback if rejected: compose the band site-side as a sibling element (the original proposal's §1 workaround), with engineer-mechanical positioning logic. Composition still ships; the DS just doesn't codify the slot.

### 6.2 `<Hero variant="no-title">` — filed, NOT consumed by v2

- **File**: [`meta/proposals/ds-side/hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md) (Draft, filed 2026-05-18 by v1 of this composition).
- **Status in v2**: v2 re-adopts `<Hero>` with a `title` slot (the display statement), so the no-title variant is **not consumed**. The proposal stays filed forward for future editorial pages that may need eyebrow-only opening (a `/manifesto`, `/values`, or customer-story page).
- **Recommendation**: keep filed; do not retract.

### 6.3 `--fs-display` (shipped, partial) / `--fs-display-lg` (rejected) — DS counter-proposal resolution

- **File**: [`meta/proposals/ds-side/type-display-scale.md`](../../proposals/ds-side/type-display-scale.md) (Draft, filed 2026-05-18 via recalibration memo).
- **DS resolution on 0.14.0 (issue #55 counter-proposal)**:
  - ✅ **`--fs-display` SHIPPED, with tightened bounds**: `clamp(3rem, 1.75rem + 4vw, 5.5rem)` — **48–88px** at desktop ceiling. The DS tightened the original proposal's upper bound (120px) to 88px. The DS rationale (verbatim): *"Apple marketing-display tops ~80-100 px. 192 is louder than anything Apple ships on its own marketing surfaces."*
  - ❌ **`--fs-display-lg` REJECTED**. The DS declined to ship a 64–192px token at all. Rationale (verbatim): *"Tokens encode 'once per page' by convention only. A 192 px token will be reached for, normalised, then become the brand. Site can clamp locally for one-shot use; we don't bless 192 as a brand contract for one page."*
- **Composition resolution — Path (b), site-side clamp (one-shot)**:
  - The composition adopts the DS-permitted site-side-clamp path. The display statement (Unit 2 in §2) uses a site-side CSS clamp on `.about-band__statement` (or the engineer's equivalent selector inside `AboutBand.tsx`):
    ```css
    .about-band__statement {
      font-size: clamp(3.5rem, 2rem + 5vw, 8rem); /* ~56–128px */
    }
    ```
  - The clamp is **smaller than the original proposal's `--fs-display-lg`** (was 64–192px) — the composition deliberately tightens the ceiling from 192px to 128px in response to the DS's substantive Apple-marketing-display read. 128px still meaningfully exceeds the DS-shipped `--fs-display` 88px ceiling and the existing `--fs-tagline` 68px ceiling, preserving Direction A's identity (the statement still owns the first viewport at desktop) while moving closer to the band the DS argued.
  - The clamp is **scoped to one selector on one page**. It is not a token. It cannot be reached for from `/`, `/why-ai`, `/roles`, `/principles`, or any future page without copy-pasting the rule — which is itself a re-proposal trigger (see "Re-proposal trigger" below).
  - Path (a) — accept the 88px cap unmodified — was considered and rejected. At 88px the statement sits inside `--fs-tagline`'s 68px ceiling by only 20px. That is not a register-defining moment; it is "slightly bigger Hero title," and Direction A collapses to "Hero with shorter copy." The founder's brief was *"one sentence at extreme scale … owning the page's first viewport"*; 88px doesn't deliver that. Path (a) is the correct call only if a second use-case argues against Direction A's loudness — none has.
  - Path (c) — wait for a second confirmed surface before re-proposing — is preserved as the *re-proposal trigger* (see below), not adopted as the immediate path. `/about` ships now; the page does not wait on a hypothetical future page.
- **Re-proposal trigger**: if a future page (`/manifesto`, `/values`, customer-story, or any editorial-register surface) wants display type larger than `--fs-display` (88px), the site-side clamp on `/about`'s `.about-band__statement` becomes **the second confirmed surface**, and `--fs-display-lg` re-files against `@poukai-inc/poukai-ui` maintainers with a stronger case: two surfaces is no longer "one page reaching for it," it's "the brand has a pattern." The re-proposal would name the second surface, document `/about`'s clamp value as the working precedent, and ask the DS to absorb the clamp into a bounded token (likely with a tighter ceiling than the original 192px — 128px would be the negotiation anchor). Until the second surface arrives, the clamp stays site-side.
- **Status**: ✅ shipped (with caveat). `--fs-display` consumable; `--fs-display-lg` retired; site-side clamp is the composition's authoritative recipe for the display statement scale.
- **Engineer-facing change vs. prior v2 recipe**: the display statement's `font-size` is no longer `var(--fs-display-lg)` — it is the site-side clamp expression authored in `site.css` (or `AboutBand.tsx`'s scoped style, engineer's call). The clamp is one CSS rule, ~1 line. No JS impact. No bundle impact (a single CSS clamp adds <100 bytes pre-compression).
- **Lighthouse / a11y / motion impact**: zero. The clamp is CSS-only; it doesn't change paint, layout, motion, or accessibility surface. axe-clean. Lighthouse 100/100/100/100 contract preserved.

### 6.4 `--bg-warm-accent` color token family — **NEW**, filed concurrently with this composition

- **File**: [`meta/proposals/ds-side/color-warm-accent.md`](../../proposals/ds-side/color-warm-accent.md) — **NEW**, drafted by this composition.
- **What it proposes**: three new tokens that name the saturated-orange surface plus two on-warm foreground values, all bounded by composition rules.
  - `--bg-warm-accent`: saturated orange-red surface, designer-recommends `~#D9523A` or `~#C84B30` (the DS picks the exact hue + saturation to match the brand's portrait grading).
  - `--fg-on-warm`: high-contrast off-white for display text on the warm surface, designer-recommends `~#FBFBF7` or equivalent (warm-tinted near-white, never pure `#FFFFFF` per "never pure edges").
  - `--fg-on-warm-muted`: muted on-warm for supporting text, designer-recommends `~#F0EBE3` or equivalent.
- **Composition rules** (proposed for `llms-full.txt`):
  - `--bg-warm-accent` is a **band background only**. Used at most once per page on a full-bleed editorial section. NEVER use as a body background, button fill, or text color.
  - `--fg-on-warm` and `--fg-on-warm-muted` are **paired with `--bg-warm-accent` only**. They have no role on `--bg` (light) or `--surface` (recessed).
  - The token family is brand-restraint-protected: one band per page, one page per site (initially).
- **Why the DS should care**: this is the brand's first warm-color expansion. The token codifies the move, bounds it, and lets future pages adopt the same band pattern if they want to — without each consumer hand-picking their own orange and risking color drift. The proposal also names the WCAG 1.4.3 contrast contract explicitly (`--fg-on-warm` against `--bg-warm-accent` must meet 4.5:1; designer-side recommended values land at 8:1+).
- **Blocking dependency**: yes — without these tokens, the band's color is undocumented and the brand cannot reuse the orange elsewhere without hand-picking. Fallback if rejected: ship the orange as a site-side CSS variable in `site.css` (`--about-warm-accent: ...`); composition still ships, but the color is `/about`-only and not a brand-vocabulary expansion. **Strongly prefer the DS-gap.**

### 6.5 `--content-max-bleed` / `<Hero bleed="full">` — **NEW**, filed concurrently with this composition

- **File**: [`meta/proposals/ds-side/content-max-bleed.md`](../../proposals/ds-side/content-max-bleed.md) — **NEW**, drafted by this composition. Flagged as "natural next proposal" in the `section-surface-rhythm.md` §6 deferred-list; v2 of `/about` triggers the file.
- **What it proposes**: a composition contract that lets certain DS components (initially: `<Hero>` via a new `bleed="full"` prop) and certain site-side bands extend horizontally to the viewport's `--page-pad` edges (or to true viewport edges, DS picks), bypassing `--content-max`'s 1024px cap. Inner content still caps at `--content-max`; only the surface extends.
- **Composition rules** (proposed for `llms-full.txt`):
  - `bleed="full"` (or equivalent layout primitive) is opt-in. Default behavior of all components is unchanged (cap at `--content-max`).
  - The bleed surface can carry a background color, an image, or a `--surface-*` token. Bleed alone does not introduce new visual weight; it is a *permission* token.
  - At most one bleed band per page, **initially**, by composition guidance. (As more editorial pages adopt the pattern, the cap may relax.)
- **Why the DS should care**: this resolves the standing prohibition (the DS contract today caps every page surface at `--content-max`, and editorial register pages on the web routinely want full-bleed rhythm). Cleanly bounded, it does not invite drift.
- **Blocking dependency**: yes — without bleed permission, the orange band caps at `--content-max` (1024px) and the gesture's full-bleed reading collapses to "an orange rectangle in the middle of the page," which is fundamentally a different composition. Fallback if rejected: ship the band capped at `--content-max` with `--bg` surrounding it; the rectangle reads as a card, not a band. **Strongly prefer the DS-gap** — the difference between rectangle and band is the composition.

### 6.6 `<Portrait>` molecule (responsive image primitive) — **NEW**, filed concurrently with this composition

- **File**: [`meta/proposals/ds-side/portrait-image-primitive.md`](../../proposals/ds-side/portrait-image-primitive.md) — **NEW**, drafted by this composition.
- **What it proposes**: a `<Portrait>` molecule that codifies the responsive image contract pouk.ai is now using — `srcset` widths, `loading` posture, AVIF/WebP/JPEG fallback, alt-text contract, crop / object-position behavior. The molecule is general (works for any portrait or single-subject editorial image), not `/about`-specific.
- **What `/about` v2 needs from it**:
  - Responsive `<picture>` element with `<source>` for AVIF + WebP + JPEG fallback.
  - `srcset` widths: 480w (mobile), 768w (tablet), 1200w (desktop), 1800w (retina desktop). The DS picks the exact width breakpoints in the molecule's API.
  - Aspect ratio prop (3:4 portrait for v2's case).
  - Alt-text prop (REQUIRED — molecule rejects empty alt for portraits per WCAG 1.1.1).
  - `loading="eager"` on the band's portrait (LCP candidate); molecule defaults to `lazy` for non-above-fold portraits.
- **Composition rules** (proposed for `llms-full.txt`):
  - Used for figural imagery only — portraits, headshots, single-subject editorial photographs. Not for product shots, illustrations, icons, or decorative images.
  - Alt text is required. Decorative portraits don't exist (a portrait is always identifying a person).
  - One per page recommended; multiple instances are allowed for multi-portrait pages (e.g., a future `/team` or `/leadership`).
- **Why the DS should care**: pouk.ai is about to ship its first photographic asset. Without a primitive, every future image consumer (a `/team` page, a customer-story testimonial portrait, a press-photo block) hand-rolls the `<picture>` element + responsive widths + alt contract + loading posture. The molecule codifies the pattern once.
- **Blocking dependency**: weak — `/about` v2 can ship with a site-side `<picture>` element if the DS rejects the molecule (engineer authors the responsive HTML directly inside `AboutBand.tsx`). Composition still ships; the brand contract for image primitives just doesn't get codified.

### Summary of DS-gap state (v2)

| # | Gap | Universal contract? | Status | Blocks v2 ship? | Fallback if rejected |
|---|---|---|---|---|---|
| 6.1 | `<Hero illustration>` | Yes (any future Hero with an illustration) | Filed 2026-05-17; `/about` v2 is first consumer | Yes | Compose portrait site-side as a Hero sibling |
| 6.2 | `<Hero variant="no-title">` | Yes (future editorial pages) | Filed 2026-05-18 by v1 of this comp; not consumed by v2 | No | N/A — not consumed |
| 6.3 | `--fs-display` (shipped 0.14.0, 48–88px) / `--fs-display-lg` (rejected) | Yes (any editorial page) | ✅ `--fs-display` shipped 2026-05-18 with tightened bounds; ❌ `--fs-display-lg` rejected by counter-proposal (see §6.3); composition uses site-side clamp for one-shot per DS permission | **No** (resolved) | Site-side `clamp(3.5rem, 2rem + 5vw, 8rem)` scoped to `.about-band__statement` |
| 6.4 | `--bg-warm-accent` + on-warm fg tokens | Yes (any band-pattern page) | NEW — filed with this comp | Yes | Ship orange as site-side var; brand vocabulary not expanded |
| 6.5 | `--content-max-bleed` / `<Hero bleed>` | Yes (any band-pattern page) | NEW — filed with this comp | Yes | Cap band at `--content-max`; band reads as rectangle |
| 6.6 | `<Portrait>` molecule | Yes (any image-bearing page) | NEW — filed with this comp | No (soft) | Author `<picture>` site-side; primitive not codified |

**Sequence**: Composition revision (this file, `In review`) → founder approves → PM v2 spec lands (in flight) → DS team reviews six proposals (Arian routes) → DS-side ships accepted proposals → site bumps `@poukai-inc/ui` → content drafter authors v2 copy against the PM v2 spec → engineer implements against this composition + new DS surface. **No code authored until all gating dependencies clear.** The composition documents the recipe; the implementation waits.

### 6.7 Asset specifications for the portrait (engineer + Arian shared lane)

Not a DS-gap — engineer-mechanical asset pipeline specs the composition surfaces for the engineer + Arian's asset-production lane to follow:

- **Aspect ratio**: 3:4 portrait (vertical).
- **Intrinsic resolution**: ≥1800×2400 (so the 1800w `srcset` width has the full pixel density for retina desktop).
- **Color space**: sRGB (web standard). Color-graded so the backdrop reads exactly as the DS-shipped `--bg-warm-accent` value.
- **Format pipeline**: AVIF primary, WebP secondary fallback, JPEG ultimate fallback. Engineer uses `astro:assets` Image component (or equivalent) to generate the responsive set at build time.
- **Weight budget**:
  - AVIF: ≤80KB at 1800w (high-quality, perceptually near-lossless).
  - WebP: ≤120KB at 1800w.
  - JPEG: ≤180KB at 1800w (quality ~78–82).
  - Mobile (480w) variants: AVIF ≤30KB / WebP ≤45KB / JPEG ≤60KB.
- **Preload strategy**: `<link rel="preload" as="image" imagesrcset="..." imagesizes="...">` in `BaseLayout.astro`'s head when `currentRoute === "/about"`. Preload the AVIF variant only (browser falls through to WebP / JPEG on its own if AVIF unsupported). Critical for LCP — the portrait is the page's LCP candidate.
- **`loading` posture**: `loading="eager"` (it's above-the-fold). `decoding="async"`.
- **`fetchpriority`**: `"high"` on the portrait `<img>` element.
- **LCP target**: <2.0s at 3G slow per Lighthouse mobile contract. The portrait's preload + eager loading + AVIF format hits this comfortably for an asset under 80KB.
- **Color-match QA gate (engineer-side)**: visual verification at 1440×900 and 360×800 viewports that the portrait's right-edge backdrop and the band's left-half CSS color are pixel-identical. Mismatch = composition failure, holds ship.

---

## 7. Open questions for Arian (before composition revision lands)

The major decisions are ratified (founder picked Direction A + portrait integration on 2026-05-18). The remaining open items are lower-stakes:

1. **Display statement final wording.** Content-drafter's lane against the PM v2 spec. Composition draft placeholder: `Draft: One operator. AI that ships.` Real wording is Arian-approved; ≤12 words. *Default: content drafter authors; this composition does not lock the string.*
2. **Supporting line: ship or drop?** Composition recommends ship the 12-word supporting line beneath the display statement. *Default: ship if no answer; content drafter writes the supporting line.*
3. **Entrance stagger: ship or static?** Composition recommends ship the `<Hero entrance="stagger">` consumption (600ms staggered reveal of portrait + statement + supporting line). *Default: ship if no answer; the band benefits from arrival animation.*
4. **End-CTA wording.** Content-drafter's lane. Composition placeholder: `Draft: For inbound, hello@pouk.ai.` *Default: content drafter authors against PM v2 spec.*
5. **Pouākai section: verbatim carry-forward, or tighten?** Composition recommends verbatim carry-forward from v1 (the section already lands at the right register). *Default: verbatim if no answer.*
6. **DS-gap routing.** Six proposals (3 from recalibration memo + 3 new with this comp) ready for routing to `@poukai-inc/poukai-ui` maintainers. *Default: Arian routes on his timeline; this composition does not author the routing.*
7. **Portrait asset production owner.** Arian (founder), per the home composition precedent + the founder's 2026-05-18 image-generation. The composition trusts the asset pipeline; final asset selection + color grading are Arian's lane.
8. **Color-match QA gate.** Composition specifies an engineer-side visual-verification gate (portrait backdrop matches band CSS color exactly). *Default: engineer responsibility; this composition documents the gate but does not specify the QA tooling.*

The composition reaches `Approved` once items 1–6 are resolved (or explicitly deferred by Arian) and the PM v2 spec lands.

---

## 8. Out of scope

This composition deliberately does not cover:

- **Cross-page propagation rules.** Per the founder's register-lead framing: `/about` leads, other pages adopt at their own cadence. This composition does **not** mandate `/`, `/why-ai`, `/roles`, `/principles` adopt the band pattern or the warm-accent token. Those routes' future revisions decide independently.
- **Authoring the v2 PM spec.** PM's lane, in flight. This composition is authored against the expected v2 spec outcomes per the founder's 2026-05-18 brief; if PM v2 lands differently the composition revises.
- **Authoring v2 content drafts.** Content-drafter's lane. Composition surfaces draft placeholders only.
- **DS-side proposal authoring.** This composition surfaces six DS-gaps; three are pre-existing, three are newly drafted (under `meta/proposals/ds-side/`) by this composition. **The DS-side proposal authoring at `@poukai-inc/poukai-ui` is `@poukai-inc/poukai-ui` maintainers' lane** — they author the formal DS-side artifacts; this composition's `meta/proposals/ds-side/*.md` files are consumer-side requests framed from composition need.
- **Asset production for the portrait.** Arian's lane.
- **The home composition's engraving Pouākai direction.** §5 references the engraving direction is now **explicitly retired** (the brand's figural vocabulary going forward is photographic-register portraits, not engraving illustrations). The home composition's 2026-05-17 deferral clause remains; it now retires permanently rather than waiting for a future iteration.
- **Per-page illustration variants for `/`, `/roles`, `/why-ai`, `/principles`.** Out — the home composition's "single shared SVG asset" recipe retires; future per-page imagery is decided per-page when each route revises.
- **A `/values` or `/manifesto` page.** Out — out of masterplan-route scope.
- **The illustration v2 PM proposal at `meta/proposals/about-illustration-v2.md`.** PM's lane to flip from `Draft (parked)` to `Draft (active)`. This composition surfaces the dependency; PM updates the proposal.
- **Dark-mode behavior.** Out until dark mode ships. The DS-gap §6.4 proposal notes the warm tokens will need dark-mode-equivalent values; that's part of the DS team's dark-mode work, not this composition's.
- **OG card / share image generation from the portrait.** Flagged for future-availability; v2 ships with the existing `public/og.png` per v1 spec §6 (preserved verbatim in v2 spec assumed).
- **Engineer-side responsive `srcset` width tuning.** Composition recommends 480w/768w/1200w/1800w; engineer fine-tunes at build time against Lighthouse measurements.
- **Performance / Lighthouse re-baseline.** v2's HTML payload is comparable to v1 (similar token count, slightly more compositional CSS for the band, plus the portrait `<picture>` element with `srcset`). Lighthouse 100/100/100/100 contract holds; LCP target <2.0s mobile per the asset budget in §6.7.
