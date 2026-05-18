# Amendment: Home — Illustration Presence + Title/Density Softening

**Route**: `/`
**Status**: Approved (2026-05-17)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-17
**Amends**: [`meta/specs/pages/home.md`](./home.md) (Approved) — remains authoritative for everything not delta'd here.
**Companion composition**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) — becomes `Pending revision` once this amendment is `Approved`; the designer's recipe revision lands separately after Arian picks a direction from `meta/proposals/home-illustration-and-title-softening.md`.
**Designer proposal expected**: `meta/proposals/home-illustration-and-title-softening.md` (in-flight at authorship time; this amendment defines the acceptance criteria that proposal must satisfy).
**Masterplan reference**: Section 4.1 (site layout), 4.3 (zero-JS contract), 6.1 (HTML weight gate — see §4.1 below for the PM-proposed loosening).

> **[Deferred 2026-05-17] Illustration consumption deferred to future iteration.** Arian deferred the Pouākai SVG production after Gemini A/B candidates did not converge on the brand register. §4.1 AC ("Illustration presence") is **paused** — not failed, not rejected — pending future iteration. The other AC blocks (§4.2 title density, §4.3 footer fold, §4.4 CTA density) proceed as Approved. DS-gap [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) stays open; asset-production prompt pack at [`meta/asset-production/pouakai-engraving-prompt.md`](../../asset-production/pouakai-engraving-prompt.md) preserved as future-iteration reference state.

---

## 1. Amendment scope

This amendment delta's two product gaps Arian flagged after live-page review of the post-cutover homepage: (1) the absence of any brand illustration leaves the page reading as a finished wireframe rather than a finished page, and (2) the Hero title at DS default scale reads brutalist on a 13–14" laptop, while `.site-page`'s top + bottom padding pushes the SiteShell hairline footer too far below the fold on ~800px-usable viewports. The amendment adds a Pouākai-derived visual element above the fold, softens the title's visual mass (DS-gap or content-layer route, designer to recommend), and directionally pulls the footer closer to the fold via `.site-page` padding-block reduction. It leaves the base spec's purpose, audience, IA (single Hero, no further sections), content-data shape, user flow, and structural acceptance criteria intact. The base spec [`meta/specs/pages/home.md`](./home.md) and the base composition [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) remain authoritative for everything not delta'd in this document.

---

## 2. What this amendment does NOT touch (off-limits)

The following are **locked** and out of bounds for the designer's proposal, the engineer's implementation, and any subsequent revision that lands against this amendment:

- D-11 (integrated lede-extension hand-off shape) — locked.
- D-12 (status-line text byte-identical) — locked.
- D-13 (funnel nav order) — locked.
- IA: single Hero, no further sections — locked.
- SiteShell nav, badge motion behavior, hydration model (R-079 zero-JS) — locked.
- Email-link duplication (Hero CTA + footer) — locked per composition R13.

If the designer's proposal touches any of the above, it fails this amendment before the rest of the criteria are evaluated.

---

## 3. Updated success criteria (delta against §3 of base spec)

The base spec's success criteria framing (Behavior + Signal + Failure mode) carries over verbatim. This amendment adds a third positive dimension and tightens one failure mode:

- **Felt finish** (new): A returning visitor experiences the page as a finished page, not a finished wireframe. The brand's namesake — Pouākai — is present on the page in a way that feels chosen, not decorative-by-default-template. A first-time visitor who clicks through from a LinkedIn post does not pattern-match the page to "another Astro starter with good typography." Restraint remains the binding constraint: the illustration earns its place by being present quietly, not by performing. The title's visual mass and the CTA's visual weight are both part of this softening read — Arian's reaction to the shipped page was that title scale *and* CTA scale together produce the brutalist feel, so the softening lever set covers both surfaces in the same amendment cycle.

- **Restraint as the binding constraint** (carried over, sharpened): Every lever this amendment unlocks — illustration, title softening, CTA softening, padding reduction — is in service of *more* restraint, not less. If any chosen direction reads as the homepage shouting louder, the lever was applied wrong.

The base spec's behavior signals and conversion paths (mailto, `/why-ai` click, returning-visitor reassurance) are unchanged.

---

## 4. New acceptance criteria

These are additive to the base spec's §8. The designer's proposal `meta/proposals/home-illustration-and-title-softening.md` must satisfy these criteria for the direction Arian picks. The engineer's eventual implementation must verify each item.

### 4.1 Illustration presence

- [ ] At least one Pouākai-derived visual element is present on `/` above the fold at 1440×900 desktop. **Verifier**: visual inspection of `/` at 1440×900 in Chrome with DevTools device toolbar set to "Responsive 1440×900"; element must be visible without scroll.
- [ ] Visual element renders as static SVG or static raster — **zero hydration** (R-079). **Verifier**: `grep -E "client:(load|idle|visible|only)" src/pages/index.astro src/components/HomeHero.tsx` returns no new hits; built `dist/_astro/*.js` weight delta on `/` is `0` bytes vs the pre-amendment build.
- [ ] Visual element respects `prefers-reduced-motion: reduce`. **Verifier**: if the element has no animation, this is trivially passed. If it has CSS-only animation, toggling `prefers-reduced-motion: reduce` in Chrome DevTools' Rendering panel disables the animation; element remains visible and static.
- [ ] Visual element does not introduce a second `<Hero>` and does not duplicate the StatusBadge or the email CTA. **Verifier**: DOM inspection — exactly one `<Hero>` descendant, exactly one `<StatusBadge>` descendant, exactly one `<a href="mailto:hello@pouk.ai">` *inside the Hero block* (the SiteShell footer's mailto link is the second per composition R13 and is unaffected).
- [ ] Visual element passes accessibility. **Verifier**: if decorative, the element carries `aria-hidden="true"` and is omitted from the accessibility tree (verify in Chrome DevTools' Accessibility panel). If informative, it carries a `<title>` element (for inline SVG) or `alt` text (for `<img>`). If the element conveys state (e.g., color-coded availability), it meets WCAG 1.4.11 non-text contrast (≥3:1 against adjacent surface).
- [ ] HTML weight delta vs the current shipped `/` (`src/pages/index.astro` rendered output, gzip + brotli) stays within **+25%**. **Verifier**: build the site pre- and post-amendment; compare `dist/index.html` brotli-compressed weight. **Arian accepted +25% on 2026-05-17** (logged in `meta/decisions/2026-05-17-home-illustration-and-density.md`); the masterplan §6.1 +10% gate is scoped to cutover parity (pre-cutover hand-tuned `index.html` vs post-cutover Astro build) and is superseded for this amendment cycle only by the +25% post-cutover-evolution budget.

### 4.2 Title density

- [ ] Hero title visual weight is **reduced** relative to the current shipped output. **Verifier**: side-by-side screenshot comparison at 1440×900 — the title occupies less vertical mass, less horizontal mass, or both. "Reduced" is judged by Arian against the proposal's chosen lever; the verifier is the screenshot diff, not a numeric clamp value.
- [ ] Whichever lever is chosen below, the title remains the page's **primary visual anchor**. **Verifier**: the StatusBadge and the CTA Button do not visually outweigh the title. Squint test: on a 1440×900 capture blurred to ~10px, the title is still the highest-contrast / largest element in the Hero block.
- [ ] **One of three levers** is chosen by the designer and ratified by Arian:
  - **Lever A — DS-gap (`<Hero size="intimate">` or equivalent prop)**: a new size variant on `<Hero>` that scales the title clamp down (e.g., `clamp(28px, 5vw, 52px)` vs the current `36–68px`).
  - **Lever B — DS-gap (`<Hero titleScale>` override)**: an explicit scale override prop, finer-grained than `size`, that lets the site pass a multiplier or token without forking the variant.
  - **Lever C — content-layer rewrite**: the tagline is rewritten so it reads at the same DS scale but with less typographic mass — fewer words, shorter words, or a structural shift (e.g., italic balance, line break) that lightens visual weight without a DS change.
- [ ] **If Lever A or B is chosen**: the DS proposal is filed against `@poukai-inc/ui` and accepted by `@poukai-inc/poukai-ui` maintainers before this amendment ships. PM tracks the DS-side proposal as a blocking dependency in §6 below.
- [ ] **If Lever C is chosen**: `pouk-ai-content` is pulled in to draft the rewritten tagline; the new draft lands in `meta/content/drafts/pages/home.md` and reaches `Approved` before this amendment ships.

### 4.3 Footer fold position

- [ ] On a **1440×900** viewport (~800px usable below the SiteShell header), the SiteShell hairline footer is **within 120px below the fold**. **Verifier**: load `/` at 1440×900 in Chrome with DevTools device toolbar; the footer's top edge is no more than 120px below `window.innerHeight`. Directional target — visible with a single short scroll-flick, not strictly above the fold.
- [ ] On a **1440×768** viewport, the footer is **within 180px below the fold**. **Verifier**: same method, lower tolerance for smaller laptops where one short scroll is acceptable.
- [ ] `.site-page` `padding-block` is **reduced from the current `--space-16` (64px)** per the designer's recommendation in proposal §5. **Verifier**: `grep -E "padding-block:\s*var\(--space-" src/styles/site.css` shows a `--space-N` value smaller than `--space-16`. **Token compliance is mandatory**: the new value MUST resolve to a DS `--space-N` token (e.g., `--space-12`, `--space-14`). Raw pixel values are rejected.
- [ ] **No reduction of Hero internal rhythm** (status → title → lede → CTA). Those gaps are DS-owned per composition lock (Section 2 of `meta/compositions/pages/home.md`). **Verifier**: `<Hero>` does not receive any `style=`, `className=`, or new prop that overrides its internal spacing. The site repo does not introduce a `--space-N` override scoped to `<Hero>`.

### 4.4 CTA density

**Mechanism (rev 2 — 2026-05-17 post-audit)**: `<Button size="sm">` (32px, existing DS API) **shipped interim** via partial-ship commit `9076cc4`. Live-page audit revealed `sm`/`md` gap (12px) is too coarse: `md` reads too heavy, `sm` reads too small against the (currently-default) `<Hero size="display">` title. DS-gap filed for new intermediate `compact` (~38px) — [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42). When accepted, engineer flips `size="sm"` → `size="compact"` in the same PR that consumes `<Hero size="intimate">` ([poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39)). The rev-1 conclusion that no DS-gap was needed for CTA is **superseded**.

- [ ] Hero CTA visual weight is reduced relative to current shipped output. The CTA must remain the primary conversion path (base spec §5) — smaller does not mean less prominent.
- [ ] Mechanism: composition uses `<Button asChild size="sm">` carrying the `mailto:hello@pouk.ai` anchor. 32px min-height tap target.
  - ~~DS-gap landed (`<Button size>` prop or equivalent) and used on `/`.~~ Struck — existing API.
  - ~~DS-gap landed on `<Hero>` itself (e.g. `<Hero ctaSize>`) and used on `/`.~~ Struck — existing API.
- [ ] CTA still uses the existing `<Button asChild>` shape carrying the `mailto:hello@pouk.ai` anchor. No re-styling of the email-link target.
- [ ] CTA visual weight relative to the title and lede: CTA reads as an actionable affordance, not as a peer-weight call-to-arms. Title remains primary anchor.
- [ ] **Accessibility — Arian decision 2026-05-17**: 32px tap target passes WCAG 2.5.8 AA (24×24px min) and fails WCAG 2.5.5 AAA (44×44px target). AA is accepted as the brand-stage bar. Decision logged as D-20 resolution (no DS-gap path).

---

## 5. Failure modes added

These extend the base spec §3 failure-mode framing. Each describes a way the amendment can ship and still be wrong.

- **"The illustration performs."** If the Pouākai mark feels decorative-by-default-template — the kind of generic eagle SVG a freelance designer would deliver for any company with a bird name — the amendment failed. The mark must feel **chosen**: tied to Pouākai specifically (stooping posture, scale silhouette, Aotearoa context if signalled at all), restrained in execution, and integrated into the Hero composition rather than parachuted in as a hero-image-shaped slab. A reader who notices the illustration *first* and the tagline *second* is a failure signal.

- **"Softening reads as weakness."** If reducing the title's visual weight makes the page feel apologetic instead of confident — smaller because pouk.ai is unsure of itself, not because pouk.ai has the taste to whisper — the amendment failed. The brand earns trust by restraint; restraint and apology are different. The title at the new scale must still read as a credential.

- **"Footer chase."** If `.site-page` padding-block is reduced so aggressively that the page feels cramped — Hero pressed against the SiteShell header, footer kissing the lede — solely to make footer-above-fold work on a 13" screen, the amendment failed. The footer-fold target is **directional**, not strict. The page's overall vertical breathing room is part of the brand's restraint; preserving it beats hitting the fold target.

---

## 6. Dependencies blocking `Approved` → `Built`

This amendment cannot move from `Approved` to `Built` until the following are resolved. Some are inputs from other agents/owners; some require Arian's explicit decision.

- **Revised composition recipe**: designer's round-1 proposal (`meta/proposals/home-illustration-and-title-softening.md`) is delivered. The remaining composition-side blocker is the **revised composition** at [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) (revision 2026-05-17), in-flight at amendment authorship time. That revision must land **delivered + Arian-Approved** before this amendment moves from `Approved` to `Built`. The revised recipe carries the engraving-register / in-flight Pouākai illustration slot, the `<Hero size="intimate">` density lever, the chosen CTA-scale mechanism (per §4.4), and the `.site-page` padding-block math.

- **DS-gap proposals filed and accepted**:
  - **Title density**: Arian picked **Lever A** — `<Hero size="intimate">`. Proposal filed 2026-05-17 as [poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39); **RESOLVED 2026-05-17**: DS shipped via [poukai-ui#41](https://github.com/poukai-inc/poukai-ui/pull/41) in `@poukai-inc/ui@0.7.0`. Site consumed at commit `38ee1e0`. (Lever C — content-layer rewrite — is **rejected** by Arian: "copy is fine, font-size is just too big.")
  - **Title density follow-up (rhythm at intimate)**: live audit 2026-05-17 revealed rhythm tokens read too generous against the smaller intimate-scale title. New DS-gap filed at [poukai-ui#44](https://github.com/poukai-inc/poukai-ui/issues/44). Rev 2 after designer audit (same day): status→title 24px → **12px (`--space-3`)** for label-relationship register; title→lede 32px → 24px desktop, 24px → 16px mobile. CTA gap untouched. **RESOLVED 2026-05-17**: shipped in `@poukai-inc/ui@0.7.1` via [poukai-ui#45](https://github.com/poukai-inc/poukai-ui/pull/45); site consumed via bot PR [#20](https://github.com/poukai-inc/pouk.ai/pull/20). Live audit on rebased branch confirms rhythm reads correctly.
  - **CTA density** (per §4.4): **REOPENED 2026-05-17 post-audit.** Initial rev-1 conclusion (existing-API path via `<Button size="sm">`, no DS-gap) was correct API-wise but wrong proportionally — live audit showed the `sm`/`md` gap is too coarse for the brand-restrained register. New DS-gap filed for `<Button size="compact">` (~38px intermediate): [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42). Awaits `@poukai-inc/poukai-ui` maintainers acceptance. Current `<Button asChild size="sm">` in `src/components/HomeHero.tsx` is transitional; flips to `size="compact"` once #42 lands.
  - **Illustration slot**: `<Hero illustration>` slot proposal **filed 2026-05-17** in `@poukai-inc/poukai-ui` as [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40); awaits `@poukai-inc/poukai-ui` maintainers acceptance + minor version bump before this amendment ships.

- **Asset production**: the Pouākai illustration itself — engraving register, in-flight posture, AI-generated and Arian-curated, then SVG export optimized and licensed-clean — is **sourced by Arian via [Kittl](https://www.kittl.com/)** (text-to-image + built-in vectorizer + SVG export). Prompt pack, curation rubric, vectorize/export spec, and post-SVGO optimization target documented at [`meta/asset-production/pouakai-engraving-prompt.md`](../../asset-production/pouakai-engraving-prompt.md). Production is **out of `pouk-ai-designer`'s scope** per that agent's definition (compositions, not asset production). **Critical-path blocker**: until the asset lands at `public/illustrations/pouakai.min.svg`, the `<Hero illustration>` slot (D-17) cannot be consumed even after [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) lands.

- **Base composition re-ratification**: [`meta/compositions/pages/home.md`](../../compositions/pages/home.md) status moves to `Pending revision` the moment this amendment reaches `Approved`. The designer publishes a revised recipe (new revision, same path) after Arian picks the direction; that revised composition is what `pouk-ai-engineer` builds against. The base composition's §3 cross-section rhythm, §4 motion choreography, and §6 DS-gaps surfaced sections will each take edits.

- **Masterplan §6.1 weight gate** (PM-side, Arian-decided): confirm the +25% loosening proposed in §4.1 above, or hold the gate at +10%. This decision constrains the designer's asset budget and is best resolved before the proposal goes deep on a heavy-weight illustration direction.

---

## 7. Out of scope (additions to base spec §10)

The base spec's §10 carries over verbatim. This amendment adds:

- **Dark mode.** Still out. Any illustration delivered must work on the current single-palette site; dark-mode color-inversion behavior of the illustration is not a launch concern.
- **A second illustration anywhere else on the page.** One mark, one place. No supporting illustration in the footer, no inline glyph, no watermark.
- **Replacing the StatusBadge pulse with the illustration as the "alive" signal.** The badge stays. The pulse is what tells a returning visitor the site is live; the illustration is what makes a first-time visitor feel the page is finished. Different jobs.
- **Any scroll-triggered behavior on the illustration.** No parallax, no fade-in on intersection, no transform-on-scroll. R-079 (zero-JS) still binds. If the illustration animates at all, it is CSS-keyframes-only and respects `prefers-reduced-motion`.
- **Illustration variants per audience / per referrer / per time-of-day.** Single static asset. Zero conditional rendering. Zero personalization.
- **A new section on the page to house the illustration** (e.g., a "About the name" block under the Hero). IA lock — single Hero, no further sections — supersedes any composition urge to give the illustration its own block.

---

## 8. Decision-log entries needed

PM-side flag for Arian. These are candidate decisions this amendment will surface; PM does not author the decision-log entries (Arian does).

- **D-17 candidate**: "Pouākai illustration on `/` — direction picked." Captures (a) which of the designer's three illustration concepts ships, (b) static SVG vs static raster, (c) `aria-hidden` vs informative, (d) the asset's provenance / license.
- **D-18 candidate**: "Hero title density — DS-gap path vs content-layer path." Captures (a) which of the three levers (A: `size="intimate"`, B: `titleScale`, C: content rewrite) is chosen and why, (b) the trade-off the unchosen levers were rejected on.
- **D-19 candidate**: "`.site-page` padding-block reduction — chosen token value." Captures (a) the new `--space-N` token chosen, (b) the resulting 1440×900 and 1440×768 footer-fold positions measured against the §4.3 targets, (c) the deliberate decision to accept "within Npx below the fold" as directional rather than strict.
- **D-20 candidate**: "Hero CTA scale — DS API path vs DS-gap path." **RESOLVED 2026-05-17**: existing API path chosen — `<Button size="sm">` (32px min-height) already present in `@poukai-inc/ui@0.6.1`. No DS-gap filed. WCAG 2.5.8 AA accepted (24×24px min met); WCAG 2.5.5 AAA waived at brand stage. DS-gap alternatives (`<Button size>` prop, `<Hero ctaSize>` prop) rejected on grounds of YAGNI — the existing API already covers the need.
- **D-21 candidate**: "Cross-page reusability of new DS slots — confirmation that `/roles`, `/principles`, `/why-ai` will adopt sequentially." Captures (a) Arian's commitment that the engraving + in-flight Pouākai asset and the new DS slots (`<Hero illustration>`, `<Hero size="intimate">`, the CTA-scale mechanism) are intended for reuse across the four-route site, (b) the sequencing plan for per-page amendments (one spec amendment per route, post this one's `Approved`), (c) explicit out-of-scope: pose variation per page is deferred to per-page composition recipes.

If Arian's review of this amendment converges these into a single decision or splits them differently, the candidate list above is rewritten — it is a PM hand-off, not a final taxonomy.

---

## 9. Cross-page reusability

The DS-gaps introduced by §4.1 (`<Hero illustration>`) and §4.2 (`<Hero size>` density) are **universal Hero contract changes**, not home-only overrides. Once accepted by `@poukai-inc/poukai-ui` maintainers and landed in `@poukai-inc/ui`, they are available on `/roles`, `/principles`, `/why-ai`. §4.4 (CTA density) consumes the existing `<Button size="sm">` API and surfaces no new gap — the same existing-API path is available to every page that wants a smaller CTA without coordination.

This amendment does NOT spec the cross-page rollout. Each page receives its own spec amendment (TBD), sequenced after this one is Approved. The composition recipe for each page will decide independently whether to:

- Use the new DS slots (illustration, intimate density, smaller CTA), or
- Continue at current DS defaults.

Arian-side commitment captured here: the engraving + in-flight Pouākai asset and the new DS slots are intended for reuse across the four-route site. Pose variation per page is out of scope for this amendment; the home composition specifies one canonical pose, and per-page variations land in their own composition recipes.
