# Composition: Home

**Route**: `/`
**Status**: Approved (revision 2026-05-17)
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-17
**Governing spec**: `meta/specs/pages/home.md` (Approved) + `meta/specs/pages/home-amendment-illustration-and-density.md` (in flight; this revision implements the design side of its §4 criteria)
**DS version targeted (original)**: `@poukai-inc/ui@0.6.1` (with three pending DS-gap proposals — see §6).
**DS version shipped (current, 2026-05-19)**: `@poukai-inc/ui@0.15.0`. The three §6 proposals shipped between 0.7.0 and 0.9.0: `<Hero size="intimate">` (0.7.0), `<Button size="compact">` (0.9.0), `<Hero entrance="stagger">` (0.8.0; consumed on `/` per D-17 + this composition's §2). The illustration-slot proposal stays open via [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40); deferral note above remains in force.
**Ratifies**: shipped implementation in `src/pages/index.astro`, `src/components/HomeHero.tsx`, `src/components/ShellWrapper.tsx`, `src/layouts/BaseLayout.astro` as of 2026-05-16, **plus** the four deltas introduced by Arian's 2026-05-17 direction-pick (engraving Pouākai in-flight, `<Hero size="intimate">`, `<Button size="sm">` on the Hero CTA, `.site-page` padding-block reduced to `--space-12`).
**Supersedes**: the ratified 2026-05-16 revision of this file. Every ratified clause that is not delta'd below remains binding.

---

> **Cross-page note.** This revision introduces three DS-gaps to `<Hero>` (illustration slot, size prop, and — see §6.3 — a no-op for `<Button>` which already supports `size`). These are **universal contract changes to `<Hero>`**, not home-only overrides. `/roles`, `/principles`, `/why-ai` will compose the same DS gaps once their own spec amendments land. PM-side amendments for those three pages are out of scope here, but the gap proposals filed against `@poukai-inc/ui` must be authored as universal Hero contract changes, not home-specific surfaces. The illustration asset itself is also designed to be reusable — pose direction (right-facing recommended), single SVG/raster file shared across pages, with per-page placement decisions deferred to each page's successor composition.

> **[Deferred 2026-05-17] Illustration consumption deferred to future iteration.** Arian deferred Pouākai SVG production after the rev-4 Gemini A/B did not converge on the brand register. The illustration-slot DS-gap ([poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40)) stays open; maintainers may accept on their own timeline. The asset-production prompt pack at [`meta/asset-production/pouakai-engraving-prompt.md`](../../asset-production/pouakai-engraving-prompt.md) is preserved as the reference state for a future iteration. **For this iteration's bundle ship**: skip the `illustration` prop on `<Hero>` (or pass `undefined`). All other deltas — `size="intimate"`, `<Button size="compact">`, `.site-page` padding `--space-12` — proceed as specified. The §2 illustration content, §6.2 DS-gap entry, and D-17 in the decisions log remain the canonical spec for the future iteration that picks the work back up.

---

## 0. Preamble — why this composition exists after-the-fact

**[Ratified — original 2026-05-16 clause carries forward.]**

`/` was built directly from `meta/specs/pages/home.md` and the D-11 / D-12 launch-readiness decisions without passing through the Designer stage. The `/review-page home` audit on 2026-05-15 flagged the missing recipe (backlog R03, R04) and a cluster of related ratification gaps (R12, R13, R15, R21, R28, R29, R30). This document is the canonical recipe; it does not propose a redesign. Every choice below ratifies what currently ships, and is the gate any future change to the homepage Hero's internal rhythm, status-line wording, lede-extension treatment, or motion behavior must land against.

**[Added 2026-05-17.]** This revision supersedes the prior version. It carries forward every ratified clause and lays four deltas on top, all sequenced into a single PR per Arian's direction:

1. The Hero gains a Pouākai illustration in the engraving register, in-flight, sourced by Arian via AI-image-generation + curation (PM amendment §6 asset-production owner = Arian via AI tooling).
2. The Hero title slot is reduced via DS-gap **A** (`<Hero size="intimate">`), not via a content-layer rewrite. Title text is **unchanged** (D-12-adjacent: copy stays, only scale changes).
3. The Hero CTA `<Button>` is reduced from default `size="md"` (44px min) to `size="sm"` (32px min). This is a **composition-level** change — no DS-gap needed; `size` is in the public API at `@poukai-inc/ui@0.6.1`.
4. `.site-page` `padding-block` is reduced from `--space-16` (64px) to `--space-12` (48px), bringing the SiteShell hairline footer within the PM amendment §4.3 fold-position targets.

**Assumptions** (carried over from the shipped implementation and the closed decisions, with revision-specific additions):

- The page is a doorway, not a destination. Restraint is the credential.
- D-11 and D-12 (closed 2026-05-13) are binding. The status-line text and the integrated lede-extension hand-off shape are not up for re-negotiation here; only their composition-layer expression is.
- The `<Hero>` molecule from `@poukai-inc/ui@0.6.1` owns the internal vertical rhythm between its `status`, `title`, `lede`, and `cta` slots. The site does not re-tune that rhythm; if a future audit shows a problem, it is a DS proposal, not a site-side override.
- The page ships with zero hydration directives — static HTML only (R-079, masterplan §4.3). Matomo and Bugsink are first-party deferred scripts owned by `BaseLayout.astro`, not by this page composition.
- **[New 2026-05-17]** The Pouākai illustration is sourced by Arian via AI tooling and curated to the brand bar. It is **decorative** (`aria-hidden="true"`) and **static** (no motion of any kind). It does not carry informational weight that would require alt text or `<title>`.
- **[New 2026-05-17]** The `<Hero size="intimate">` and `<Hero illustration>` DS-gaps are filed against `@poukai-inc/ui` and accepted by `@poukai-inc/poukai-ui` maintainers **before** this revision moves to `Built`. The composition is `Approved` on the design side; the engineer waits on DS until both proposals land.

---

## 1. Intent

**[Revised — see additions below.]**

`/` should feel like opening a well-set table before the meal. The reader's eye lands on one tagline rendered in Instrument Serif at the page's display scale, registers the available-status dot pulsing quietly above it, scans a three-sentence lede whose last clause is a hand-off, and either follows the hand-off or starts a conversation — both paths converge on `pouk.ai` being a present, available operator. Density is deliberately low: a single Hero block, generous breathing room above and below, a hairline footer line. The brand earns trust by *not* doing more. If the visitor scrolls past the Hero, they hit the SiteShell footer — that's the page's full length. Any urge to add a section is a brand violation, not a feature.

**[Added 2026-05-17.]** The page now carries a Pouākai engraving — wings spread, mid-flight — as a quiet figurative companion to the Hero text. The title sits at an *intimate* density (smaller than the DS display scale, still primary in the visual hierarchy), and the page-vertical padding is reduced so the SiteShell footer settles within 120px of the fold at 1440×900. Restraint is still the credential; the bird is present, not performing. The reader registers the bird as "this brand chose to draw this" — a single editorial moment per page — rather than as imagery. A returning visitor who saw the wireframe-feeling launch version should now read the page as finished. A first-time visitor who clicks through from a LinkedIn post should not pattern-match the page to "another Astro starter with good typography."

---

## 2. Section-by-section composition

The spec's §4 IA lists three blocks: `SiteShell` chrome (header + hairline footer), the `Hero` block, and the explicit "end — no further sections" terminator. The composition mirrors this exactly.

### Section 1 — `SiteShell` (page chrome)

**[Ratified — no delta. Carries forward verbatim from 2026-05-16.]**

- **DS primitive(s)**: `<SiteShell>` (organism) from `@poukai-inc/ui`. Wrapped in the site repo by `ShellWrapper.tsx` *only* because passing JSX as a prop from an `.astro` file across the React boundary breaks esbuild's TypeScript parse of the `.astro` template (see `ShellWrapper.tsx` header comment). `ShellWrapper.tsx` adds zero visual structure — it is a substance carrier, not a composition layer. The DS contract still flows directly: `currentRoute`, `routes[]`, `footer` slot.
- **Props (substantive)**:
  ```
  <SiteShell
    currentRoute="/"
    routes={[
      { href: "/why-ai",     label: "Why AI" },
      { href: "/roles",      label: "Roles" },
      { href: "/principles", label: "Principles" },
    ]}                                        // funnel order per D-13
    footer={<p>© <year> pouk.ai · <a href="mailto:hello@pouk.ai">hello@pouk.ai</a></p>}
  >
    {/* Hero block — Section 2 below */}
  </SiteShell>
  ```
- **Layout / spacing**: `<SiteShell>` owns its own header/footer chrome internally. The DS handles `--page-pad` on the outer edge, the wordmark height (`56` per ADR-0008), and the nav gap (`--space-6` per DS internal). The site repo does not override any `<SiteShell>` token. The page-content wrapper between header and footer is `.site-page` in `site.css`, which applies `max-width: var(--content-max)` (64rem) and `padding-block: var(--space-12)` (48px top and bottom — **revised — see §3**).
- **Motion**: None at the SiteShell level. Wordmark and nav links are static. Link hover uses the DS's `--easing-link` internally; no site-side override.
- **Content slot**: Nav route list is hardcoded in `BaseLayout.astro` (`navRoutes` const). The footer line is hardcoded in `ShellWrapper.tsx`. Neither is JSON-driven; both are site substance that the spec authorizes.
- **Brand notes**:
  - The wordmark in the nav is **always rendered by `<SiteShell>` via `<Wordmark>`**, never a string literal. The site does not author or import a replica `<Wordmark>` anywhere. Closes R29.
  - The footer carries the email link verbatim (`mailto:hello@pouk.ai`). This is the **second** appearance of the email on the page (the first is the Hero CTA — see Section 2). This duplication is deliberate. See §3 for the rationale. Closes R13.
  - `<SiteShell>` is rendered as static HTML at build time. No `client:*` directive. Closes R30 (partial — see Section 2).

### Section 2 — `Hero` (the doorway) **[Revised — most of the work]**

- **DS primitive(s)**: `<Hero>` (molecule), with three DS atoms and one decorative SVG slotted into it:
  - `<StatusBadge>` in the `status` slot.
  - A `<Button asChild size="sm"><a>…</a></Button>` (DS atom `<Button>` with the **`size="sm"` prop revised in**) in the `cta` slot.
  - An inline `<a>` (not a DS primitive — plain HTML anchor) embedded in the `lede` prose as the D-11 hand-off. See "Brand notes" for why this is correct.
  - **[New 2026-05-17]** An inline decorative `<svg aria-hidden="true">` (or `<img aria-hidden="true">` if raster) in the new DS-gap **`illustration`** slot. The asset is the Pouākai engraving — see "Illustration asset" below.
  - **[New 2026-05-17]** `<Hero>` is invoked with `size="intimate"` (DS-gap prop — see §6.1). This swaps the title clamp from `--fs-tagline` (36–68px) to the new `--fs-tagline-intimate` token (DS-defined; recommended range `clamp(2rem, 1.25rem + 2.5vw, 3.25rem)` — 32–52px). Site does not author the token; DS owns it.
  Wrapped in the site repo by `HomeHero.tsx` for the same React-boundary reason as `ShellWrapper.tsx`. `HomeHero.tsx` adds zero shape — it assembles substance into DS slots.
- **Props (substantive)**:
  ```
  <Hero
    size="intimate"                            // DS-gap §6.1 — new prop, default "display"
    illustration={<PouakaiEngraving />}        // DS-gap §6.2 — new slot, ReactNode, decorative
    status={
      <StatusBadge status="available">
        Currently taking conversations for Q3.
      </StatusBadge>
    }
    title={<>Technical consulting for teams shipping with <em>AI</em>.</>}
    lede={
      <>
        pouk.ai builds custom AI systems, automations, and advisory
        engagements for operators who'd rather ship than speculate.
        Named for Pouākai — the largest eagle that ever flew, hunting
        by stooping from height. Most AI projects fail to deliver.{" "}
        <a href="/why-ai">Here's why →</a>
      </>
    }
    cta={
      <Button asChild size="sm">                {/* revised — was default size="md" */}
        <a href="mailto:hello@pouk.ai">hello@pouk.ai</a>
      </Button>
    }
    // align prop: NOT set — DS default. Spec §4 implies a centered-doorway
    // posture, but the shipped page leaves alignment to the DS default and
    // visual-parity passed against pre-cutover index.html. Do not add align="center"
    // unless re-validating against the parity matrix.
  />
  ```

- **Illustration asset (new 2026-05-17)**:
  - **Subject**: Pouākai (Haast's eagle), single bird, **in-flight**. Wings spread — soaring or stooping, designer-side recommendation **soaring** (wings extended horizontally rather than drawn back into a stoop) on the home page. Rationale: the lede already says *"hunting by stooping from height"* — so the text describes the stoop. Having the illustration also stoop is doubly-stating. A soaring posture lets the prose carry the kinetic story while the illustration carries the *presence*. The bird looks across the page, not down at the reader. *(If Arian prefers stooping, a single-asset swap; no other clause changes.)*
  - **Register**: **Engraving / woodcut.** Old-World ornithological-plate adjacent — Audubon, Haeckel, Te Papa Pouākai reconstructions. Single color, black-line on transparent, fine cross-hatching for shading, no decorative flourishes, no ground/sky scenery. The bird and nothing else.
  - **Posture / facing direction**: **Right-facing** by default — head and beak point right, wings extended into the page's right-hand whitespace. **Reasoning for cross-page reusability**: a right-facing bird sits cleanly to the right of left-aligned Hero text and reads as "the bird looking *into* the page's content flow," which works on `/`, `/roles`, `/principles`, and `/why-ai`. A future per-page composition may flip the asset (`transform: scaleX(-1)` is a site-side prerogative; no DS work) if a particular page's layout calls for left-facing.
  - **File format**: **Static SVG, single file**. Justification: (a) inline SVG inherits `currentColor` from `--fg` and inverts cleanly when/if dark mode ships; (b) compresses small (target ≤8KB gzip, ≤6KB brotli) — comfortably within PM amendment §4.1's "+25% HTML weight" envelope; (c) re-usable verbatim across `/roles`, `/principles`, `/why-ai` without per-page raster variants; (d) raster (PNG/WebP) would render engraving line-work more *visually faithfully* but blocks `currentColor` inheritance and is harder to optimize cross-page. **Trade-off acknowledged**: AI-generated engraving output is most natively raster (image-gen models produce pixels). The curation step Arian owns includes vectorizing the curated raster (autotrace or hand-vectorize) into clean SVG. If vectorization quality is poor (engraving lines lose their character), fall back to raster — PNG 2x for retina, AVIF/WebP for delivery. **Recommendation: ship SVG.** Re-open as an open question (§7) if vectorization fights the engraving register.
  - **Color**: Single color, resolves to `--fg` (`#1D1D1F`) via inline `currentColor`. **Never** `--accent`. Never multi-color. The engraving is monochrome by register, not by a styling choice.
  - **Size**: Long-axis target **~280–360px** on desktop. Vertically centered with the Hero text column. On viewports below `--hero-max` (608px), the illustration **hides** (`display: none` via a CSS media query in site CSS, not via JS). Mobile fallback is the text-only Hero that ships today.
  - **Placement**: **Right-side companion to the Hero text** (two-column split inside the Hero container). Hero text occupies the left column (~60% of available width, capped at `--hero-max`); the illustration occupies the right column (~40%). This is exactly what the DS-gap §6.2 `illustration` slot is being proposed to deliver. **Alternative considered and rejected**: a background watermark (Option B from the round-1 proposal) would have lower DS dependency, but a watermark cannot carry an engraving register — the register requires the line-work to be legible at near-full opacity, which a watermark by definition isn't. **A second alternative considered and rejected**: tucking a small sigil above the status badge (Option C from round-1) would have shipped without a layout-level DS-gap, but it does not satisfy PM amendment §5's "felt finish" criterion — too small to register as "this brand has imagery now."
  - **Aria**: `aria-hidden="true"`. The illustration is decorative — it duplicates information the prose already carries (the name Pouākai, the kinetic story). It does not convey state. No `<title>`, no `alt`. Closes PM amendment §4.1 accessibility checkbox.
  - **Motion**: **Static.** No CSS animation, no SVG `<animate>` element, no hover state, no scroll trigger. The bird does not flap. The bird does not fade in. The `prefers-reduced-motion: reduce` gate is trivially satisfied (no animation to disable). R-079 zero-JS contract is preserved.
  - **Asset production owner**: Arian, via AI image-generation + manual curation (PM amendment §6 amended owner). The composition does not specify the prompt, the model, the curation passes, or the vectorization tooling — those are Arian's call. The composition does specify the *output shape*: single SVG, right-facing, soaring, engraving register, monochrome `--fg`, ≤8KB gzip.
  - **Cross-page reusability**: The same SVG file lands at `/roles`, `/principles`, `/why-ai` when those pages' amendments arrive. Each page's successor composition decides placement and whether to flip via CSS `transform`. No per-page raster variants. One asset, one source of truth, ratified here.

- **Layout / spacing**:
  - Internal Hero rhythm — `status → title → lede → cta` — is **owned by `<Hero>` in the DS**. The DS uses `--space-6` (24px, "Hero status-to-title") between status and title, and `--space-8` (32px, "Hero title-to-lede") between title and lede. CTA spacing is DS-internal. The site does not introduce, override, or compensate for any of these. Closes R21.
  - **[Revised 2026-05-17]** Hero text column width is capped at `--hero-max` (38rem / 608px) by the DS. The illustration column sits adjacent at remaining width (up to a DS-owned cap defined as part of the `illustration` slot — see §6.2). The site does not widen the text column.
  - **[Revised 2026-05-17]** The vertical space between the Hero block and the SiteShell footer is governed by `.site-page { padding-block: var(--space-12); }` in `site.css` — **48px top and bottom** of the content area (was 64px). This is a page-level composition decision (not a DS internal). It is consistent with the other three routes once each route's amendment lands; PM-side, the change is a universal site-shell rhythm shift. See §3 for math.
  - **[New 2026-05-17]** Below 720px viewport width, the two-column Hero collapses to a single-column text-only layout (illustration hidden via `display: none` in site CSS). This is a site-side responsive behavior, not a DS prop. Worth being explicit here so a future engineer reading this composition knows the mobile parity target is "today's shipped Hero, unchanged."

- **Motion**:
  - `<StatusBadge status="available">` triggers an automatic CSS keyframe pulse. **No JS, no `client:*` directive, no inline animation override.** The DS's `:root !important` block in `tokens.css` disables the pulse under `prefers-reduced-motion: reduce`. This composition forbids any site-side animation on top of the badge or on the Hero block. Confirms spec §8 AC.
  - **[Revised 2026-05-17 — was: "no entrance animation, would be a JS hydration cost"; faulty premise corrected after recall of holding-page motion]** Hero entrance animation is now consumed on `/` via `<Hero entrance="stagger">` from DS 0.8.0 ([poukai-ui#47](https://github.com/poukai-inc/poukai-ui/issues/47) → [PR #48](https://github.com/poukai-inc/poukai-ui/pull/48)). Staggered reveal of status / title / lede / CTA over ~1.05s, CSS-only, R-079 honored. The lockout's old rationale ("would force `client:visible`, breaking R-079") was wrong — the holding page proved the effect is achievable with pure CSS keyframes + `animation-delay` + `animation-fill-mode: both`, zero JS. Intersection-triggered reveal remains locked out (would require IntersectionObserver = JS).
  - **[New 2026-05-17]** The illustration is **static**. No hover state. No scroll trigger. No CSS animation of any kind. CSS-only positioning. R-079 zero-JS still binds. `prefers-reduced-motion: reduce` is trivially satisfied.
  - Link hover (the lede-extension `<a>` and the email anchor inside the `<Button>`) uses the DS's `--easing-link` and `--dur-fast` via `<Hero>`-internal and `<Button>`-internal styling. No site-side override.

- **Content slot**: Homepage prose is **hardcoded in `HomeHero.tsx`**, not driven by a JSON file. Per spec §6 ("The homepage is hardcoded prose in the page template — no JSON file"). The tagline, lede, status-line text, and CTA target are all source-of-truth in `HomeHero.tsx`. Treat that file as the home-content surface for any future copy edit. **[Added 2026-05-17]** The illustration asset path (e.g., `src/assets/pouakai-engraving.svg` or equivalent) is imported by `HomeHero.tsx` and passed to the `illustration` prop. The asset file itself is the source of truth for the engraving.

- **Brand notes**:
  - **Status-line text is locked at `"Currently taking conversations for Q3."`** — verbatim from the pre-cutover `public/index.html` per D-12 (parity AC, byte-identical at cutover). The DS's `llms-full.txt` voice example reads `"Taking conversations for Q3."` (without "Currently"); **the engineer's rendered string is the authoritative one on this page**. A future engineer reading the DS docs MUST NOT normalize toward the DS example. D-12 supersedes the DS voice example for this specific surface. Closes R15.
  - **Lede-extension hand-off renders as `Here's why →` with the literal `→` HTML entity (`&rarr;`)**, not a Lucide `ArrowRight` icon. Ratified as the editorial choice. Rationale: the entity arrow inherits body-font metrics (Geist, `--fs-body` clamp 17–19px) and reads as part of the prose — which is exactly what D-11 demanded ("a single integrated link sentence at the end of the lede, not a tertiary line under the CTA"). A Lucide `ArrowRight` would import as an SVG with a fixed pixel size, introduce a vertical-align fiddle, and visually separate the glyph from the anchor text — re-introducing the "tertiary affordance" feel D-11 explicitly rejected. The trade-off: the entity does not auto-color-invert if we ever ship dark mode, and it cannot animate on hover. Neither trade-off matters at this brand stage; both are revisitable. Closes R12.
  - **Email link appears twice on the page**: once as the Hero CTA `<Button asChild size="sm"><a href="mailto:hello@pouk.ai">hello@pouk.ai</a></Button>`, and once as the SiteShell footer line `<a href="mailto:hello@pouk.ai">hello@pouk.ai</a>`. The DS rules do not forbid this. It is **deliberate**: the Hero CTA is the conversion path (a button-shaped affordance below the lede); the footer line is the chrome-level signal that the site is reachable on every route. Removing either would change behavior the spec authorizes — the Hero CTA serves spec §5 outcome ("email link must remain the primary conversion path"); the footer line is part of `<SiteShell>`'s standing chrome and appears identically on `/why-ai`, `/roles`, `/principles`. **A future deduplication refactor MUST NOT collapse these two surfaces.** Closes R13.
  - **[New 2026-05-17] CTA scale**: the Hero CTA `<Button>` now uses `size="sm"` (32px min height per DS contract) rather than the DS default `size="md"` (44px). Rationale: at `<Hero size="intimate">` the title's reduced visual weight makes the default `md` button feel disproportionately heavy in the Hero composition (Arian's observation). Stepping down to `sm` returns the CTA to *proportional* prominence — still the only Button on the page, still the conversion path, still sentence-case verbatim, still default variant. **Spec §5 conversion-path criterion is preserved**: "email link must remain the primary conversion path" is about *presence and accessibility*, not visual weight. The `sm` button is the same affordance; it is just sized to the new Hero density. **Trade-off acknowledged**: at `sm`, the Button's tap target is 32px minimum, comfortably above the WCAG 2.5.5 AAA 44px guidance and meets the 24px AA floor. On mobile where the Hero collapses to single-column, the `sm` button remains usable (Geist label text is `--fs-meta` 14px, which reads cleanly at this size). **No DS-gap needed** — `size` is in the public API at `@poukai-inc/ui@0.6.1`.
  - **[New 2026-05-17] Title text is unchanged**: `<>Technical consulting for teams shipping with <em>AI</em>.</>` — same 8 words, same italic accent. The softening comes from **scale**, not from a content rewrite. PM amendment §4.2 Lever C (content rewrite) is rejected; Lever A (DS-gap `size`) is chosen.
  - The `<em>AI</em>` inside the title is preserved verbatim from the pre-cutover `index.html`. Instrument Serif italic on the word "AI" is a tactile editorial accent the DS's `<Hero>` title slot renders correctly because `title` accepts `ReactNode`. Do not strip the `<em>`.
  - The Hero is **the only `<Hero>` on the page** (DS rule: "One per page. Do NOT nest Hero inside another Hero.") and the `<StatusBadge>` is **the only StatusBadge on the page** (DS rule: max 1 per page). Both confirmed.
  - The Hero CTA is **the only Button on the page**. Default variant (no `variant="primary"` set). `size="sm"`. One CTA, one conversion path. (DS rule "Maximum one variant='primary' per visual section" — trivially satisfied; the page ships with zero `primary` Buttons.)
  - **No hydration**: `<HomeHero>` and `<ShellWrapper>` both render as static HTML at build time. No `client:load`, `client:idle`, `client:visible`, or `client:only` directive. The page ships zero React runtime. Closes R30.

### Section 3 — End (no further sections)

**[Ratified — no delta. Carries forward verbatim from 2026-05-16, with the one footnote that `.site-page` padding-block is now `--space-12` per §3 of this revision.]**

- **DS primitive(s)**: None. The page ends. The `<SiteShell>` hairline footer (already specified in Section 1) closes the page.
- **Props (substantive)**: None.
- **Layout / spacing**: `.site-page` provides `--space-12` of padding below the Hero before the `<SiteShell>` footer's own internal padding takes over. No additional spacer element.
- **Motion**: None.
- **Content slot**: None.
- **Brand notes**:
  - **No additional sections.** No "About," no "Services," no "Customers," no testimonial block, no logo bar, no newsletter signup, no scheduling embed, no featured-content carousel. Spec §10 explicitly enumerates these as out of scope and frames adding them as "a brand violation, not a feature improvement." This composition ratifies that and locks it: any future PR adding a section to `/` is a spec-level conversation, not a composition revision. Closes R28 (IA order matches spec; no drift).

---

## 3. Cross-section rhythm **[Revised — `.site-page` padding-block reduction]**

The vertical rhythm of `/` as a whole, top to bottom:

1. `<SiteShell>` header — DS-owned internal padding via `--page-pad` (clamp 1.5rem–3rem horizontal), Wordmark height 56px (ADR-0008), nav inline.
2. `.site-page` content area — **`padding-block: var(--space-12)` (48px top, 48px bottom — revised from `--space-16` / 64px)**. Single child: `<HomeHero />`.
3. `<Hero>` internal rhythm — DS-owned: status → `--space-6` → title → `--space-8` → lede → DS-internal → CTA. **At `size="intimate"` the title clamp is smaller (32–52px), but the inter-slot gaps remain DS-default per the DS-gap proposal §6.1 design choice.**
4. `.site-page` bottom padding — `--space-12` (48px).
5. `<SiteShell>` hairline footer — DS-owned internal padding, single `<p>` line.

### Math at the two target viewports (PM amendment §4.3 targets)

| Viewport | Header | Top-pad | Hero (`size="intimate"`) | Bottom-pad | Footer | **Total** | Footer position vs fold |
|---|---|---|---|---|---|---|---|
| **1440×900** (~800px usable below header) | ~104 | 48 | ~340 *(reduced from ~420 by smaller title)* | 48 | ~70 | **~610** | Footer **above** the fold or within ~10–30px below. **Hits §4.3 ≤120px target with margin.** |
| **1440×768** (~672px usable below header) | ~104 | 48 | ~340 | 48 | ~70 | **~610** | Footer ~60–70px below the fold. **Hits §4.3 ≤180px target with margin.** |

Hero height estimate ~340px assumes `size="intimate"` title clamp 32–52px renders the 8-word tagline on 2 lines at desktop widths (was 1–2 lines at `--fs-tagline` clamp 36–68px, but more often pushed to 2 lines with the larger type). Lede 3 sentences ~88px. Status badge ~32px. CTA `size="sm"` ~32px. DS gaps `--space-6 + --space-8 + --space-internal-cta` ~80px. Total ~340px ± 20px depending on actual rendered title wrap.

There is exactly one section break (Hero → footer), and it is handled by the page-content padding, not by any decorative rule, divider, or section element. The page reads as one continuous block, which is the intent. No alternating surfaces. No accent strips. The `--surface` / `--bg` / `--bg-elevated` rhythm is irrelevant on `/` — the entire page sits on `--bg` (`#FBFBFD`), and no recessed or elevated surfaces are introduced.

Token compliance: every spacing value above resolves to a DS `--space-N` token. No raw pixels. No `--space-5` / `--space-7` / `--space-10` / etc. (those gaps do not exist per the DS tokens.css). The page would fail an audit if a future change introduced one. **The chosen value `--space-12` is one stop down from the prior `--space-16` and is the only token-compliant value smaller than `--space-16` without going all the way to `--space-8` (32px) — which would compress the page below the brand's restraint floor.**

---

## 4. Motion choreography (page-level) **[Mostly ratified; one addition on illustration]**

The page ships zero JavaScript and one CSS-only animation:

- **`<StatusBadge status="available">` pulse** — DS-owned, runs on initial render, indefinite. Disabled under `prefers-reduced-motion: reduce` via the DS's `:root !important` block in `tokens.css`. No site-side override. No JS trigger. No way for a hydration directive to influence it.
- **Link hover transitions** — DS-owned, run on `:hover` / `:focus-visible`. Uses `--dur-fast` (180ms) and `--easing-link`. Applies to (a) nav links in `<SiteShell>`, (b) the lede-extension `<a href="/why-ai">`, (c) the Hero CTA's `<Button asChild><a>` underline, (d) the footer email link. All four are DS-internal styles; the site does not author transitions. Disabled under `prefers-reduced-motion: reduce`.
- **[New 2026-05-17] Illustration motion**: **none**. The Pouākai engraving is fully static. No CSS keyframes, no SVG `<animate>` elements, no `transform` on hover, no scroll-driven transform, no opacity transition on intersection, no parallax. The CSS is positional only (Flexbox or Grid for the two-column layout, `display: none` below 720px). **`prefers-reduced-motion: reduce` is trivially satisfied** — no motion to gate. Any future urge to animate the bird (a wing-flap, a slow drift, a fade-in on load) is a separate composition revision and must clear the R-079 zero-JS contract and the DS's `:root !important` motion gate. The default for this revision is locked at **static**.

**Fires on scroll**: nothing. There is no scroll-triggered reveal, no intersection observer, no parallax, no scroll-spy. The page is short enough that all content is above the fold on a typical desktop (and at the new `.site-page` padding, the footer also sits at-or-near the fold) — a scroll-triggered animation has no payoff and would force `client:visible`, breaking R-079.

**Fires on initial render**: the StatusBadge pulse (CSS keyframes, JS-free).

**Fires never (locked out by this composition)**: scroll-triggered reveal, parallax, scroll-spy, marquee on the status line, illustration animation of any kind, any animation tied to `IntersectionObserver`. All of these would require a `client:*` directive and would violate the spec's "zero client-side JS shipped on `/`" AC (spec §8) and masterplan §4.3.

**Now consumed via DS-gap §6.6 ([poukai-ui#47](https://github.com/poukai-inc/poukai-ui/issues/47) → [PR #48](https://github.com/poukai-inc/poukai-ui/pull/48))**: Hero staggered entrance animation runs on `/` via `<Hero entrance="stagger">` from `@poukai-inc/ui@0.8.0`. Status / title / lede / CTA reveal in top-down order, ~1.05s, CSS keyframes + `animation-delay`, gated by `prefers-reduced-motion: reduce` via the DS `:root !important` block. The pre-cutover holding page (`public/index.html`, deleted in commit `9e56cdb`) shipped this exact motion with pure CSS — zero JS, R-079 honored. The original "locked out" rationale for entrance animation was faulty (claimed it required `client:*`); corrected on 2026-05-17 after recall of the holding-page implementation. SiteShell wordmark + footer fade-in are NOT in scope for #47 — separate DS-gap if Arian wants full-page parity.

**`prefers-reduced-motion: reduce` behavior**: every animation on the page (the badge pulse and every link transition) is disabled by the DS's `:root !important` block in `tokens.css`. There is no exception. The composition does not need to instruct the engineer to add a `@media (prefers-reduced-motion)` rule — the DS handles it at the token layer. Closes the R21 motion-choreography concern.

---

## 5. Icon picks (if applicable)

**[Ratified — no delta.]**

None. The homepage uses no Lucide glyphs. The only glyph on the page is the literal `→` HTML entity inside the lede-extension hand-off, which is a typographic character (rendered by the body font), not a Lucide icon. See Section 2 brand notes for why this is the right choice. The Pouākai engraving in Section 2 is not an icon — it is an editorial illustration (DS-gap §6.2 slot), separate vocabulary.

---

## 6. DS gaps surfaced **[Revised — was None; now three gaps + one no-op]**

This revision introduces three DS-gap proposals against `@poukai-inc/ui@0.6.1`. Each is named and scoped here. Authoring the DS-side proposal markdown is **out of this composition's scope** per the designer agent definition — Arian decides whether to route each to `@poukai-inc/poukai-ui` maintainers.

**Critical framing: all three gaps are universal `<Hero>` contract changes, not home-only overrides.** They land in the DS once and are composed by `/`, `/roles`, `/principles`, `/why-ai` independently. Each gap's *triggering* page is `/`; the *consuming* pages will follow once their own amendments arrive.

### 6.1 `<Hero size>` prop — universal title-density contract

- **Proposed file path in DS repo**: `proposals/hero-size-prop.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`.
- **Scope**: Add `size?: "display" | "intimate"` prop on `<Hero>` (default `"display"`, preserves current behavior on every existing consumer). At `"intimate"`, the Hero swaps its title font-size token from `--fs-tagline` (36–68px) to a new DS-defined token `--fs-tagline-intimate` (recommended range `clamp(2rem, 1.25rem + 2.5vw, 3.25rem)` — 32–52px). The Hero's internal rhythm tokens (`--space-6` status→title, `--space-8` title→lede) remain unchanged at `"intimate"`. Token addition is a DS-side **minor** version bump per ADR-0003.
- **Where it appears**: `/` Hero (this composition). Future: `/principles` Hero is the most likely next consumer (the lower-density register suits a list page); `/roles` and `/why-ai` are open per their own amendments.
- **Blocking dependency**: ~~`@poukai-inc/poukai-ui` maintainers accepts and ships the prop + token before this composition moves from `Approved` to `Built`. The engineer waits.~~ **RESOLVED 2026-05-17**: DS shipped via [poukai-ui#41](https://github.com/poukai-inc/poukai-ui/pull/41) in `@poukai-inc/ui@0.7.0`. Site consumed at commit `38ee1e0` (`size="intimate"` on `<Hero>` in `src/components/HomeHero.tsx`).
- **Workaround if rejected**: Not applicable — proposal accepted and shipped.
- **Live-audit follow-up (2026-05-17)**: at `size="intimate"`, the Hero rhythm tokens (`--space-6` status→title, `--space-8` title→lede) initially read disproportionately generous against the smaller title. The 0.7.0 ship locked rhythm unchanged across size variants per the original proposal — that lock was reversed via follow-up DS-gap §6.5 ([poukai-ui#44](https://github.com/poukai-inc/poukai-ui/issues/44)). **RESOLVED 2026-05-17**: DS shipped via [poukai-ui#45](https://github.com/poukai-inc/poukai-ui/pull/45) in `@poukai-inc/ui@0.7.1`. Site consumed via bot PR [#20](https://github.com/poukai-inc/pouk.ai/pull/20). Live audit confirmed: status→title 12px, title→lede 24px desktop / 16px mobile.
- **Density-signal guardrail (designer audit, 2026-05-17)**: `<Hero size="intimate">` is an **intentional density signal**, not a default downgrade. Future page specs adopting it (`/principles`, `/roles`, `/why-ai`) must justify the choice (e.g., editorial-dense page where smaller hero lets body content breathe earlier) rather than inherit from `/`. `display` remains the brand-canonical pattern for landing-class pages.

### 6.2 `<Hero illustration>` slot — universal editorial illustration contract

- **Proposed file path in DS repo**: `proposals/hero-illustration-slot.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`.
- **Scope**: Add an optional `illustration?: ReactNode` slot on `<Hero>`. Renders to the right of the Hero text column above a DS-owned breakpoint (recommended: `--content-max` 1024px or similar — DS picks). Below the breakpoint, the slot's content is hidden by DS CSS (`display: none`) and the Hero collapses to its existing single-column text layout — i.e., today's behavior is preserved on narrow viewports. The illustration column receives remaining width up to a DS-owned cap; the text column remains capped at `--hero-max` (38rem). Slot consumers pass an inline `<svg>`, `<img>`, or any other ReactNode; the DS does not opinionate on the asset type, only on positioning, breakpoint, and (recommended) a default `aria-hidden` if the consumer doesn't override.
- **Where it appears**: `/` Hero (this composition). Future: any of `/why-ai`, `/roles`, `/principles` that adopts a per-page Pouākai illustration via its own amendment.
- **Motion contract** (must be in the DS proposal): the slot is static by default. The DS does not animate the slot. Any animation a consumer adds inside the slot gates on the DS's `:root !important` `prefers-reduced-motion` block per existing rules.
- **Blocking dependency**: `@poukai-inc/poukai-ui` maintainers accepts and ships the slot before this composition moves from `Approved` to `Built`. The engineer waits.
- **Workaround if rejected**: Compose the illustration site-side as a sibling absolutely-positioned element next to the Hero, with the Hero wrapped in a positioning container. This is a soft violation of "no site-side override of Hero internals" (composition §2 lock) — but it would also work without the DS-gap. **Strongly prefer the DS-gap**; this workaround is here only to document the fallback if `@poukai-inc/poukai-ui` maintainers rejects.

### 6.3 `<Button size>` prop — existing API used interim; new `compact` size proposed

- **Status (revised after live audit 2026-05-17)**: `<Button>` `size` prop is in the public DS API at `@poukai-inc/ui@0.6.1` (`sm` 32px, `md` 44px, `lg` 52px). Partial-ship commit `9076cc4` shipped `<Button size="sm">` on `/`. **Live-page audit revealed the `sm/md` gap (12px) is too coarse**: `md` reads visually too heavy against brand restraint; `sm` reads visually too small against the (currently-default) `<Hero size="display">` title. New DS-gap filed for an intermediate `compact` size — see §6.4 below.
- **Recommendation (composition-level, interim)**: `<Button asChild size="sm">` remains in `src/components/HomeHero.tsx` as a **transitional state** until [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42) ships `size="compact"`. Engineer then flips `size="sm"` → `size="compact"` in the same PR that consumes `<Hero size="intimate">` (poukai-ui#39).
- **Pairing convention (revised)**: When `<Hero size="intimate">` lands, `size="sm"` Button is the proportional default. When `<Hero size="display">` (current default), the new `size="compact"` (~38px) is the proportional default once it ships; `size="md"` remains the DS-default fallback. This is a composition-layer convention, not a DS rule.

### 6.6 `<Hero entrance>` prop — staggered CSS-only reveal on load

- **Proposed file path in DS repo**: `proposals/hero-entrance-stagger.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#47](https://github.com/poukai-inc/poukai-ui/issues/47) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`. **CLOSED 2026-05-18** via [PR #48](https://github.com/poukai-inc/poukai-ui/pull/48).
- **Scope**: Add `entrance?: "stagger"` prop on `<Hero>`. Default `undefined` (no animation, zero regression). When `"stagger"`, animates status (0ms) / title (150ms, +12px rise) / lede (300ms) / cta (450ms), each rising 8–12px with fade-in over 600–700ms. Total ~1.05s. CSS keyframes only; no JS, no IntersectionObserver. `animation-fill-mode: both` required. Gated by `prefers-reduced-motion: reduce`. **Minor** version bump per ADR-0003.
- **Where it appears**: `/` Hero (this composition). Future: any consumer wanting an editorial-restrained entrance.
- **Source-of-truth precedent**: pre-cutover `public/index.html` (deleted commit `9e56cdb`) shipped exactly this motion. The current composition's old §4 lockout was authored on the faulty premise that entrance animation requires JS; this gap corrects the premise + restores the capability.
- **Blocking dependency**: ~~`@poukai-inc/poukai-ui` maintainers accept and ship the prop. Engineer flips `<Hero entrance="stagger">` on consumption.~~ **RESOLVED 2026-05-18**: shipped in `@poukai-inc/ui@0.8.0` via [poukai-ui#48](https://github.com/poukai-inc/poukai-ui/pull/48). Site consumed at commit `882b8b3` (`entrance="stagger"` on `<Hero>` in `src/components/HomeHero.tsx`).

### 6.5 `<Hero size="intimate">` rhythm scaling — follow-up to §6.1

- **Proposed file path in DS repo**: `proposals/hero-intimate-rhythm.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#44](https://github.com/poukai-inc/poukai-ui/issues/44) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`. **Rev 2 (2026-05-17)** after designer audit: status→title tightened from `--space-4` to `--space-3` (label-relationship register).
- **Scope**: At `<Hero size="intimate">`, scale internal rhythm tighter — status→title `--space-6` → `--space-3` (12px), title→lede `--space-8` → `--space-6` (24px desktop) / `--space-6` → `--space-4` (16px mobile). CTA-gap (`--space-8`) untouched. No new public API; internal Hero CSS change only. **Patch** version bump per ADR-0003.
- **Where it appears**: `/` Hero. Future: any consumer of `<Hero size="intimate">`.
- **Blocking dependency**: ~~`@poukai-inc/poukai-ui` maintainers accept and ship the rhythm tweak. Engineer flips zero code on adoption — `pnpm install` after the patch publishes is sufficient.~~ **RESOLVED 2026-05-17**: shipped in `@poukai-inc/ui@0.7.1` via [poukai-ui#45](https://github.com/poukai-inc/poukai-ui/pull/45). Site consumed via bot PR [#20](https://github.com/poukai-inc/pouk.ai/pull/20). Live audit confirms tight rhythm renders correctly.
- **Why this is a follow-up, not a #39 amendment**: the original proposal we authored explicitly locked rhythm unchanged at `intimate`. Live audit on 2026-05-17 reversed that call. Audit trail preserved in the §6.5 issue body.

### 6.4 `<Button size="compact">` — universal intermediate-size contract

- **Proposed file path in DS repo**: `proposals/button-size-compact.md` in `poukai-inc/poukai-ui`.
- **Tracked**: [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42) — filed 2026-05-17, labels `proposal:from-consumer`, `consumer:pouk.ai`.
- **Scope**: Add `compact` to the `<Button size>` enum (~38px min-height, between `sm` 32px and `md` 44px). Padding, typography, icon size scaled proportionally. WCAG 2.5.8 AA passes; WCAG 2.5.5 AAA fails (same trade-off as `sm`). Token addition is a DS-side **minor** version bump per ADR-0003.
- **Where it appears**: `/` Hero CTA (this composition, after acceptance). Future: any pouk.ai route or external DS consumer needing editorial-restrained CTA register without dropping to AA-only `sm`.
- **Blocking dependency**: `@poukai-inc/poukai-ui` maintainers accept and ship the size variant before the home Hero CTA flips to `compact`. Engineer waits.
- **Workaround if rejected**: keep `size="sm"` interim (current state). Re-open the editorial-restraint vs proportional-read trade-off in a future composition revision. The composition has a documented fallback path.

### Summary of DS-gap state

| # | Gap | Universal or home-only? | DS-side action needed? | Blocks `Built`? |
|---|---|---|---|---|
| 6.1 | `<Hero size="intimate">` | Universal | Yes — file proposal, ship prop + token, minor version bump | Yes |
| 6.2 | `<Hero illustration>` slot | Universal | Yes — file proposal, ship slot, minor version bump | Yes |
| 6.3 | `<Button size="sm">` on Hero CTA | Composition-level, no DS change | **No** — already in API | No |

---

## 7. Open questions for Arian

**[Revised — carry forward unresolved items from round-1 §6; add new questions from round-2 CTA-scale and cross-page-reusability turns.]**

Of the round-1 proposal's six open questions, three are now resolved by Arian's direction-pick:

- ~~Q1 (engraving vs. modern-line)~~ — **engraving**.
- ~~Q2 (in-flight vs. at-rest)~~ — **in-flight** (designer-side sub-recommendation: soaring, not stooping; see §2 illustration asset notes — confirm or override).
- ~~Q3 (commission vs. AI-generated vs. archive)~~ — **AI-generated, curated by Arian**.
- ~~Q4 (title softening — same-day vs. wait for DS)~~ — **wait for DS-gap A (`<Hero size="intimate">`)**.
- ~~Q5 (padding change — bundle or separate)~~ — **bundle into one PR**.

Carried forward / new for round 2:

1. **Does the engraving register *land* at the brand stage, given AI-generated execution?** Engraving line-work is fragile — AI image-gen models can produce engraving-adjacent output, but the line discipline (consistent stroke weight, controlled cross-hatching, no painterly bleeding) is exactly what models struggle with most. The curation step Arian owns is doing the heavy lifting. **If the first round of curated output reads as "cheap AI engraving" rather than "considered ornithological plate," the brand fails on the §5 PM amendment failure-mode test ("the illustration performs"; "softening reads as weakness").** Sub-question: does Arian want a sanity-check pass from the designer agent on the curated asset before it ships, or is this purely Arian's call? (Default if no answer: purely Arian's call. The designer agent's lane is the recipe, not the asset.)

2. **Soaring vs. stooping — confirm the designer's sub-recommendation.** §2 illustration asset notes default to **soaring** (wings extended horizontally) on the rationale that the lede already describes the stoop. If Arian prefers stooping, swap the asset; no other clause changes.

3. **Vectorization quality vs. raster fallback.** §2 illustration asset notes default to **SVG output**. If AI-generated engraving output does not vectorize cleanly (engraving cross-hatch loses character under autotrace), fall back to raster (PNG 2x retina, served as AVIF/WebP). Sub-question: how aggressively does Arian want to insist on SVG vs. accept raster if vectorization is poor? (Default if no answer: prefer SVG, accept raster as fallback. Engineer's call after seeing both.)

4. **Cross-page facing direction — right-facing default.** §2 illustration asset notes default to a **right-facing** bird, on the rationale that right-facing reads as "looking into the page" on left-aligned text layouts. Sub-question: does Arian want the default flipped to left-facing? (Default if no answer: right-facing.)

5. **CTA `size="sm"` on the Hero — confirm the proportional-density framing.** This composition recommends `size="sm"` (32px min) on the Hero CTA because the Hero is now at `size="intimate"`. Sub-question: does Arian want the CTA at `sm` (this composition's recommendation) or at the DS default `md` (preserving today's CTA prominence even after the title shrinks)? (Default if no answer: `sm`. The Hero composition reads as proportionally balanced.) **This is the round-2 new open question on the CTA axis.**

6. **Does any of this affect `/why-ai`, `/roles`, `/principles`?** (Carried forward from round-1 Q6.) The illustration is asset-level reusable — same SVG file lands on all four pages. The DS-gaps (`<Hero size>`, `<Hero illustration>`) are universal contract changes. **Sub-question**: does Arian want the same engraving on all four pages (one asset, four placements), or does he want per-page variations (different birds, different postures, different sizes per page)? **Designer-side recommendation: one asset, four placements.** Per-page variations would multiply asset-production work and dilute the "single chosen mark" brand framing. Confirm or override.

Section 7 has **6 open items**. This composition reaches `Approved` once items 1–5 have Arian's calls captured (item 6 can be deferred to per-page amendments). Item 1 has no hard answer until the asset is in hand; "deferred pending curated asset" is an acceptable resolution.

---

## 8. Out of scope **[Revised — additions for round 2.]**

This composition deliberately does not cover:

- **Future homepage evolution.** If `/` ever needs a featured stat, a customer story, or a sub-page hand-off beyond `/why-ai`, that is a new spec, new content, new composition — not an amendment here.
- **Dark-mode behavior.** The DS palette inverts cleanly per its "never pure edges" principle, but dark mode is not shipped. If/when it ships, the lede-extension `→` glyph's color-inversion behavior is a known trade-off (see Section 2 brand notes) that may need revisiting. **[Added 2026-05-17]** Same applies to the engraving asset: inline SVG with `currentColor` inverts cleanly; a raster fallback would need a dark-mode variant. Out of scope until dark mode is.
- **OG image, favicon, apple-touch-icon, robots.txt, sitemap.xml.** These are launch-infrastructure surfaces owned by `BaseLayout.astro` and the site's `public/` directory. Not composition concerns. **[Added 2026-05-17]** The Pouākai engraving might one day be adapted into an OG image or favicon — those are separate surfaces and are decided in their own ratification, not here.
- **Matomo and Bugsink script tags.** Owned by `BaseLayout.astro` and gated on env vars. They are first-party analytics/error-reporting per D-15/D-16 and are *not* page-level composition decisions — they apply uniformly to every route.
- **Visual parity diff against pre-cutover `index.html`.** That is the engineer's cutover-checklist gate (masterplan §6.1), not a composition output. This composition assumes parity already passed.
- **`/why-ai`, `/roles`, `/principles` compositions.** Each is its own document. The funnel-order nav decision (D-13) is referenced here only because `<SiteShell>` carries it on every page; the per-page recipes belong in their own files.
- **[Added 2026-05-17] Per-page illustration variations.** This composition specifies a single shared SVG asset (engraving Pouākai, in-flight, right-facing, soaring). Pose variations per page (e.g., a stooping Pouākai for `/why-ai` because the page is about "why AI projects fail"; a perched Pouākai for `/roles` because the page is about engagement modes) are **explicitly deferred** to each page's future composition. If Arian wants per-page variants, that is a separate decision and a separate set of asset-production rounds.
- **[Added 2026-05-17] Mobile-specific illustration variants.** The composition specifies a single SVG that hides below 720px. Tablet-specific, mobile-portrait-specific, or mobile-landscape-specific variants (smaller crops, simplified line-work, sigil-sized fallbacks) are explicitly **out** — single asset, responsive sizing (or hide), no per-breakpoint variants.
- **[Added 2026-05-17] Asset production specifics.** The composition specifies the *output shape* of the illustration (engraving register, single SVG, monochrome `--fg`, right-facing soaring Pouākai, ≤8KB gzip). It does **not** specify the AI image-generation prompt, the model, the curation passes, the vectorization tool, or the asset's exact pixel-level content. Those are Arian's domain per the round-2 direction (AI-generated, curated). The designer agent does not produce or describe the illustration's pixel-level content.
- **[Added 2026-05-17] DS-side proposal authoring.** Sections 6.1 and 6.2 name and scope two DS-gap proposals. **Authoring the DS-side markdown** (the actual `proposals/hero-size-prop.md` and `proposals/hero-illustration-slot.md` files in the `@poukai-inc/ui` repo) is **not in this composition's scope** per the designer agent definition. Arian decides whether to route each to `@poukai-inc/poukai-ui` maintainers; `@poukai-inc/poukai-ui` maintainers authors the DS-side artifact.
- **[Added 2026-05-17] PM-side amendments for `/why-ai`, `/roles`, `/principles`.** Once this composition is `Approved` and the DS-gaps are in flight, PM-side amendments for the other three routes will need to land before each page's successor composition can consume the new `<Hero>` contract. Sequencing those amendments is `pouk-ai-pm`'s job, not this composition's. Flagged here so a future reader knows the sequence: this composition first, then DS-gaps, then PM-amendments for the other three routes, then each route's composition revision.
