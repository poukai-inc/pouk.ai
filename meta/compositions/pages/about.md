# Composition: About

**Route**: `/about`
**Status**: Approved
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-18
**Approved by**: Arian (founder), 2026-05-18. Founder approval ratifies verdict (ii) — `/about` skips `<Hero>` entirely; eyebrow + lede composed site-side; single `<h1>` at the top of Section 1 ("The arc"); sections 2 and 3 are `<h2>`. The five §7 open items remain as content-drafter / engineer-mechanical calls and do not block ship. DS-gap proposal `meta/proposals/ds-side/hero-no-title-variant.md` is being filed as a GitHub issue against `@poukai-inc/poukai-ui` on a separate track; the proposal frontmatter will be updated with the issue link once filed.
**Governing spec**: [`meta/specs/pages/about.md`](../../specs/pages/about.md) (Approved 2026-05-18; interview record A1–A18)
**DS version targeted**: `@poukai-inc/ui@0.9.0`
**Companion docs**:
- [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md) — parked visual-treatment proposal (v2)
- [`meta/proposals/ds-side/hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md) — DS-gap proposal filed by this composition (see §6.1)
- [`meta/compositions/pages/home.md`](home.md) — register baseline; composition pattern this file mirrors

---

> **Verdict on §9 designer-review gate (no-`<h1>`-in-hero, A9).** Path **(ii)** — **`/about` skips `<Hero>` entirely.** Eyebrow + lede are composed site-side outside the DS molecule. A forward-looking **(iii)** is also filed as a DS-gap proposal ([`hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md)) so future editorial pages can adopt the molecule once the DS supports a no-title surface — but `/about` v1 does **not** wait on DS, and ships on existing primitives.
>
> **Evidence:** `@poukai-inc/ui@0.9.0` documents `<Hero>` in `dist/llms-full.txt` lines 119–125 as a molecule whose `title` slot uses `--fs-tagline` (or `--fs-tagline-intimate` at `size="intimate"`) and the anti-pattern block (line 156) confirms the molecule renders an `<h1>` (the "Do not nest Hero inside another Hero. … **duplicate h1** …" rule names the `<h1>` as the slot's structural output). The snapshot does **not** document a `title?: ReactNode` optional signature or a no-title variant. Path (i) — "empty / unused title slot" — has **no supported prop signature at 0.9.0**: passing `title={undefined}` would either render an empty `<h1>` (WCAG 1.3.1 + 2.4.6 violation), throw, or fall into an unspecified state. The DS molecule's `<h1>` is the load-bearing structural contract, and `/about` explicitly moves the `<h1>` out of the hero region (spec §4 item 2, A9). Therefore: don't try to bend the molecule. Skip it.
>
> **What this means in practice for engineering:** `/about` does not invoke `<Hero>` at all. The eyebrow + lede are composed inside `<SiteShell>`'s `<slot />` with a small site-side section element — three site-side elements (an `<aside>` eyebrow, a `<p>` lede, and a separating margin) on the shared `.site-page` content surface. No new DS primitive is introduced site-side. The DS-gap proposal at §6.1 is a forward-looking artifact for `@poukai-inc/poukai-ui` maintainers; it is **not** a blocker for `/about` v1.

---

## 1. Intent

`/about` is a quiet, prose-led trust page. The reader should land, register the eyebrow ("About") as a label rather than a banner, read a one-to-two-sentence lede in muted tone, and then meet the page's `<h1>` — Arian's first-person voice opening section 1, *"The arc"*. Three Instrument-Serif-italic section heads (≤3 words each) carry the reader through *the arc → why pouk.ai → Pouākai*, ending on a single muted CTA line. The page is denser-feeling than `/` because it's longer (~450 words), but quieter in its top-of-page register because no `<Hero>` doorway is present: the eyebrow + lede do that job at lower volume. The composition's only visible "moment" is the voice — the prose is the asset.

This is a *deliberate divergence* from `/`, `/why-ai`, `/roles`, `/principles`, all of which carry a `<Hero>` `<h1>`. The divergence is the composition's argument: an about page reads as autobiographical, not promotional, when the page does not greet the reader with a display-scale tagline. The page enters in eyebrow + lede register and lets section 1's first-person heading be the first display-weight type the reader sees. The DS doesn't model this surface yet; §6.1 proposes it should.

The page deliberately ships **no illustration, no figure, no signature, no photograph, no decorative imagery** (A3, spec §4, §10). Type-only is the register. The absence is felt; it is composed-in, not omitted-by-default. (See §5 for how the absence is documented; see [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md) for the parked v2 question.)

---

## 2. Section-by-section composition

The spec's §4 IA lists seven items: SiteShell chrome, hero region (eyebrow + lede, no `<h1>`), section 1, section 2, section 3, end CTA, SiteShell footer. The composition mirrors this exactly.

### Section 1 — `SiteShell` (page chrome) **[Revised — four-item nav]**

- **DS primitive(s)**: `<SiteShell>` (organism) from `@poukai-inc/ui@0.9.0`. Wrapped site-side by `ShellWrapper.tsx` (the existing React-boundary carrier) — no new wrapper, no new component.
- **Props (substantive)**:
  ```
  <SiteShell
    currentRoute="/about"
    routes={[
      { href: "/why-ai",     label: "Why AI"     },
      { href: "/roles",      label: "Roles"      },
      { href: "/principles", label: "Principles" },
      { href: "/about",      label: "About"      },     // NEW — A4 four-item nav
    ]}
    footer={
      <p>
        © <year> pouk.ai ·
        <a href="/why-ai">Why AI</a> ·
        <a href="/roles">Roles</a> ·
        <a href="/principles">Principles</a> ·
        <a href="/about">About</a> ·
        <a href="mailto:hello@pouk.ai">hello@pouk.ai</a>
      </p>
    }
  >
    {/* eyebrow + lede + sections 1–3 + CTA — see Section 2 below */}
  </SiteShell>
  ```
  *Note: the exact footer markup is the engineer's lane. The composition's load-bearing claims are (a) nav passes four items in the order above, (b) footer link list matches that order verbatim, (c) `hello@pouk.ai` retains its standing footer position after the four nav links. Closes spec §8 nav/cross-surface ACs.*

- **Layout / spacing**: `<SiteShell>` owns its own header/footer chrome internally via `--page-pad`. Wordmark height 56px (ADR-0008). `.site-page` between header and footer applies `max-width: var(--content-max)` (64rem) and `padding-block: var(--space-12)` (48px top + bottom — same value as the revised `/` composition, §3 of `home.md`). The site repo does not override any `<SiteShell>` token.

- **Motion**: None at the SiteShell level. Wordmark and nav links static. Link hover uses the DS's `--easing-link` internally; no site-side override.

- **Content slot**: The four-item `navRoutes` const is in `BaseLayout.astro` (currently three items per the existing implementation at line 69–73). The engineer extends the array to four items. Footer link list is hardcoded in `ShellWrapper.tsx` (engineer-mechanical change to add the fourth `<a>`). Neither is JSON-driven; both are site substance the spec authorizes.

- **Brand notes**:
  - Wordmark is always rendered by `<SiteShell>` via `<Wordmark>`. Never a string literal. Never a second `<Wordmark>` inside `<SiteShell>`'s children. (DS rule, llms-full.txt line 98.)
  - The `mailto:hello@pouk.ai` link in the footer is the **second** appearance of the email on the page (the first is the §2 end-CTA line). This duplication is deliberate and matches the precedent set on `/` (home composition §2 brand notes). The footer line is chrome-level site reach; the end-CTA line is the page's conversion path. Removing either changes documented behavior.
  - `<SiteShell>` renders as static HTML at build time. No `client:*` directive.
  - **Four-item nav verification (§9 engineer dep)**: the DS snapshot (`llms-full.txt` line 140–143) documents `<SiteShell>`'s `routes` prop as an array without a documented cap, max-entries enum, or layout-collapse beyond CSS-flex defaults. **Four items is supported on the current API.** No DS-gap needed for this. Closes the spec §9 engineer-dep bullet on `SiteShell` four-item nav. (Engineer: visual-verify at `360px / 768px / 1440px` widths that the four-item nav doesn't overflow `<SiteShell>`'s header. If it does, that's an engineer-side discovery, not a composition-layer block — `<SiteShell>`'s internal layout is DS-owned.)

### Section 2 — **Hero region (eyebrow + lede, no `<Hero>` molecule)** **[Per (ii) verdict]**

This is the load-bearing structural divergence. The page does **not** invoke `<Hero>`. Eyebrow + lede are composed site-side as two prose elements, not as DS primitive slots.

- **DS primitive(s)**: **None.** This section uses raw HTML elements styled via DS tokens — `<p class="eyebrow">` for the eyebrow (or equivalent semantic carrier), and `<p class="lede">` for the lede. The styling resolves to DS tokens (no raw values introduced).
  - **No `<Hero>`** — see verdict at the top of this document.
  - **No `<StatusBadge>`** — `/about` is not a doorway; the badge's canonical placement is `/` (DS rule: max 1 instance per page; spec §4 implies the badge stays on `/` for `/about`'s context).
  - **No `<Button>`** — there is no CTA in this region. The CTA lives at the page's end (see Section 6 below).
- **Props (substantive)**: Not applicable — no DS primitive. The two prose elements carry their substance directly as text children. Engineer mechanics: a small site-side section element with a top margin of `--space-12` (48px) below the `<SiteShell>` header padding, an eyebrow on the first line, a lede block below it, and a margin of `--space-16` (64px) before section 1's `<h1>`.
- **Layout / spacing**:
  - Eyebrow renders the page label "About" at `--fs-micro` (12px), uppercase, letter-spacing 0.04em, color `--fg-muted` (`#6E6E73`). **This is the existing DS micro-label register** — same scale and tracking as `<RoleCard>`'s `Role 01` eyebrow per DS llms-full.txt line 37 and line 128.
  - Eyebrow-to-lede gap: `--space-2` (8px) — DS-documented as "inline gap: eyebrow-to-title" (line 45). Used here because the lede sits where a title would in the standard pattern; the spacing semantic carries.
  - Lede at `--fs-body` (17–19px clamp), color `--fg-muted`, max-width `--hero-max` (38rem / 608px) — matches the DS's documented Hero lede contract so the visual rhythm of `/about`'s top-of-page mirrors what a reader expects from the other four routes' Hero ledes, *even though the molecule isn't invoked*. The composition borrows the molecule's text-column-width convention without borrowing its title slot.
  - Lede-to-section-1-`<h1>` gap: `--space-16` (64px) — DS-documented as "Large section gaps" (line 51). This is the visual break between the page's quiet eyebrow-lede entry and the page's first display-weight type (the section 1 `<h1>`). Using `--space-16` here (rather than `--space-12` which `.site-page` already provides) marks the eyebrow-lede band as *structurally distinct* from the body — it reads as a doorway-equivalent, just at lower volume.
- **Motion**: **None.** No entrance animation. No stagger. No fade-in. Zero-motion page (spec §8 AC: "no animation on `/about`"). This is the deliberate divergence from `/`'s revised composition (which now consumes `<Hero entrance="stagger">` via DS 0.8.0): `/about` does not animate. The eyebrow + lede appear at first paint.
- **Content slot**:
  - Eyebrow text: literal `"About"`. Hardcoded in the page template (no JSON file — spec §6).
  - Lede text: drafted by `pouk-ai-content` against spec §5 outcomes. **One to two sentences** (spec §4 item 2). Does not repeat the migrated R14 opener of section 1. The content drafter authors; Arian approves. Composition does not author placeholder copy — the content drafter sets the lede tone and the composition trusts that lane.
- **Brand notes**:
  - **No `<h1>` in this region.** This is the load-bearing AC (spec §8 first AC, A9). The eyebrow is `<p>` (not `<h1>`, not `<h2>`); the lede is `<p>` (not a heading). The page's single `<h1>` is in section 1 below.
  - **`/about` is the only route in the site that does not invoke `<Hero>`.** A future maintainer reading this composition may be tempted to "normalize" `/about` to the four-route Hero pattern — that change is a spec-level reversal of A9 and must be authored as a spec amendment, not a composition revision.
  - The lede's color (`--fg-muted`) is the same token the DS uses for Hero ledes (DS llms-full.txt line 19: "Secondary text: captions, footer copy, eyebrow labels, lede paragraphs…"). The composition is using documented token roles, not inventing.
  - **No `<title>`, no `<aside>`, no `<header>` semantic wrapper around the eyebrow + lede** — the section is just two prose elements directly inside `<SiteShell>`'s slot. Adding a `<header>` would suggest a banner role (ARIA `role="banner"` implicit), which competes semantically with `<SiteShell>`'s own header. Keep it flat. Engineer's call if a non-banner `<section>` wrapper is needed for styling purposes — that's mechanical.

### Section 3 — Section 1: "The arc"

- **DS primitive(s)**: **None.** Section heading is a site-styled `<h1>` element; body prose is `<p>` elements. The composition does not introduce a DS primitive here — the page is editorial prose, and the DS does not ship a "prose section" molecule.
- **Props (substantive)**: Not applicable. Engineer mechanics: an `<h1>` with an anchor `id` (derived from the heading slug per spec §5, e.g., `id="arc"`), followed by 150–200 words of body prose in `<p>` elements at `--fs-body`.
- **Layout / spacing**:
  - `<h1>` font: **`--font-serif` (Instrument Serif), italic** (A12, spec §5). The italic carries from `home.md`'s Hero `<em>AI</em>` precedent and from `/principles`'s Instrument Serif italic accents.
  - `<h1>` size: **`--fs-tagline-intimate` (clamp `2rem, 1.25rem + 2.5vw, 3.25rem` — 32–52px)**. This is the DS-defined token for low-density doorways (llms-full.txt line 34) — the same token `<Hero size="intimate">` uses. Reusing it here keeps the page's display register *consistent with `/`'s intimate Hero* even though the molecule isn't invoked. The composition borrows the token, not the slot.
  - `<h1>` is ≤3 words per A12 (e.g., "The arc"; "An arc"; "The shape of the work").
  - Heading-to-body gap: `--space-6` (24px) — DS-documented as "Hero status-to-title, nav gap, card padding tier" (line 48). The token's intent of "label-to-content" maps cleanly here.
  - Body prose at `--fs-body`, color `--fg` (`#1D1D1F`, the only color permitted for body paragraph text per llms-full.txt line 18). Max-width `--content-max` (64rem); for prose readability, the **engineer may apply a measure-cap on body `<p>`** (DS does not ship a measure-cap token; site-side measure tightening to ~36rem / 576px is acceptable as long as it resolves to a token-aware computed value). If a tighter measure is the right call, that's a small site-side CSS decision the engineer makes against the shipped lede width — composition does not lock it.
  - Paragraph-to-paragraph gap inside the section body: `--space-4` (16px) — DS-documented as "Body paragraph margin, card internal rhythm" (line 47).
  - Section-1-end to Section-2-start: `--space-16` (64px) — large section gap.
- **Motion**: **None.** Static.
- **Content slot**:
  - Section heading: drafted by `pouk-ai-content` (≤3 words, Instrument Serif italic). Composition does not author the wording; "The arc" is one viable wording but the content drafter picks the final string.
  - Body prose: ~150–200 words, **first person ("I") throughout** (A5, spec §5). Spec §5 ACs lock the tone and the no-résumé rule. Composition does not author.
  - Anchor ID: derived from heading slug (engineer mechanical; e.g., `#arc`).
- **Brand notes**:
  - **This is the page's single `<h1>`.** Exactly one per page (WCAG 1.3.1 + spec §8 AC). All other section heads in this page are `<h2>`. No `<h3>` or deeper.
  - **First-person voice is the section's structural lock** (A5, spec §5). The composition surfaces the voice expectation but does not write the copy. A future content revision that "normalizes" section 1 to brand-voice declarative is a spec-level violation, not a composition concern.
  - **No résumé bullets, no list-of-employers, no years-of-experience claim, no skills enumeration.** These are spec §5 / §10 lockouts; they don't shape composition density but they shape what the body reads as. If the content drafter delivers a bullet-list body, the composition fails (the prose register doesn't carry; bullets break the autobiographical voice).

### Section 4 — Section 2: "Why pouk.ai"

- **DS primitive(s)**: **None.** Same pattern as Section 3 — site-styled heading + body prose.
- **Props (substantive)**: Not applicable. Engineer mechanics: an `<h2>` (not `<h1>`) with an anchor `id` (e.g., `id="why-poukai"`), followed by 150–200 words of body prose in `<p>` elements at `--fs-body`.
- **Layout / spacing**:
  - `<h2>` font: **`--font-serif` (Instrument Serif), italic** (A12).
  - `<h2>` size: same `--fs-tagline-intimate` token as Section 3's `<h1>`. **The heading-level distinction (h1 vs. h2) is semantic, not visual** — sections 1, 2, 3 all read at the same display weight. This is a deliberate composition choice: the prose-led page reads as three peer essays, not as one essay with two sub-essays. WCAG is satisfied by the semantic hierarchy (one `<h1>`, two `<h2>`s); visual hierarchy is intentionally flat.
  - `<h2>` is ≤3 words per A12.
  - Heading-to-body gap: `--space-6` (24px).
  - Body prose at `--fs-body`, color `--fg`. Same measure constraints as Section 3.
  - Paragraph-to-paragraph gap: `--space-4` (16px).
  - Section-2-end to Section-3-start: `--space-16` (64px).
- **Motion**: **None.** Static.
- **Content slot**:
  - Section heading: drafted by `pouk-ai-content` (≤3 words). "Why pouk.ai" is one viable wording.
  - Body prose: ~150–200 words, **first person ("I") throughout** (A5 + A10, spec §5). **Pure post-frontend autobiographical framing** (A10) — Arian's frontend background put him at the seam where modern AI tools collapsed dev-team-months into days. **No competitive language, no stance slogans, no comparative claims.** The differentiator is autobiography, not assertion. Spec §5 third bullet locks this.
  - Anchor ID: derived from heading slug (e.g., `#why-poukai`).
- **Brand notes**:
  - The section echoes `/roles#builder`'s body language ("Modern tools collapsed what used to take a dev team six months into days or weeks") **without copying it verbatim** (spec §5). Composition does not police the echo; the content drafter calibrates.
  - **Voice continuous with Section 1** (first-person). The voice-shift to brand-voice declarative happens in Section 5 below, not here. If a future revision shifts Section 4 to brand-voice declarative, that's a spec violation and a documented voice-shift change.

### Section 5 — Section 3: "Pouākai"

- **DS primitive(s)**: **None.** Same pattern as Sections 3 and 4.
- **Props (substantive)**: Not applicable. Engineer mechanics: an `<h2>` with an anchor `id` (e.g., `id="poukai-origin"`), followed by ~80 words in three sentences.
- **Layout / spacing**: Same token rhythm as Section 4 (h2 size `--fs-tagline-intimate`, Instrument Serif italic, `--space-6` to body, `--space-4` paragraph gap, `--space-16` to next section).
- **Motion**: **None.** Static.
- **Content slot**:
  - Section heading: drafted by `pouk-ai-content` (≤3 words). "Pouākai" is the leading wording (preserves macron `&#257;` per spec §5).
  - Body prose: **~80 words total, three sentences** (A7, spec §4 item 5, spec §5). Sentence 1 opens with the **R27 one-liner migrated verbatim**: *"Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height."* Sentence 2 acknowledges the name's Māori source. Sentence 3 states the respect posture (no Māori visual motifs, no claim to the culture).
  - **Voice-shift here is structural and locked**: this section is **brand-voice declarative**, not first-person (A7 implication, spec §4 "three deliberate voice-shifts"). The Pouākai origin is not Arian's autobiographical beat; it is pouk.ai's origin. The composition surfaces the shift; the content drafter executes.
  - Anchor ID: e.g., `#poukai-origin`.
- **Brand notes**:
  - **Macron preserved on Pouākai** (`&#257;` HTML entity, spec §5). The composition does not specify whether the engineer uses the literal Unicode character or the entity; either is acceptable as long as the output renders the macron.
  - **No metaphor, no Māori visual motif suggestions, no claim to cultural ownership.** Spec §5 / §10 lockouts. The brand earns the name by not over-explaining it.
  - **The voice-shift is one of three deliberate voice-shifts the spec locks** (spec §4 "three deliberate voice-shifts"). Composition documents the shift; future revisions cannot normalize it away.

### Section 6 — End CTA (single muted line)

- **DS primitive(s)**: **None.** This is a single anchor inside a `<p>`, not a `<Button>`. The composition deliberately does not use `<Button>` here.
- **Props (substantive)**: Not applicable. Engineer mechanics:
  ```
  <p class="end-cta">
    <a href="mailto:hello@pouk.ai">…</a>
  </p>
  ```
  where the prose copy is drafted by `pouk-ai-content`.
- **Layout / spacing**:
  - Top margin from Section 5 body: `--space-16` (64px) — large section gap.
  - Bottom margin to `.site-page` padding: `--space-16` (64px) — same. The CTA line breathes; it does not crowd the page foot.
  - Font: `--font-sans` (Geist), `--fs-body` (17–19px clamp). Same color as the lede in Section 2: `--fg-muted` (`#6E6E73`). The muted color is the load-bearing register signal — this is *not* a primary affordance, even though it is the page's conversion path.
  - Anchor color: standard link behavior per DS (color resolves to `--fg` underlined or `--accent` on hover — DS-owned; site does not override).
- **Motion**: **None** for the CTA line itself. The anchor's hover transition uses the DS's `--easing-link` and `--dur-fast` internally — that's DS-owned, not a composition decision, and is gated by `prefers-reduced-motion: reduce` via the DS's `:root !important` block.
- **Content slot**:
  - Drafted by `pouk-ai-content` in **brand-voice / second-person invitational register** (A11, spec §4 item 6, spec §5).
  - **Shape like `/principles`'s end-CTA line** but **differentiated enough in wording** that the two pages don't read as templated. Composition does not author placeholder copy.
- **Brand notes**:
  - **Why not `<Button>`?** Three reasons: (a) `<Button>` (even at `size="sm"` or `size="compact"`) reads as an affordance call, which over-weights the CTA on a page deliberately built without doorway-volume; (b) `/principles`'s precedent (A11) is a single muted line, not a button — the composition matches that precedent; (c) `<Button>` rules cap "one `variant="primary"` per visual section" but place no rule on minimum button presence — the DS does not require a `<Button>` on every page. Skipping it is composition-clean.
  - **Why `--fg-muted`?** The muted register signals "the conversation continues if you want it to" rather than "convert now." On `/about` the prospect's trust-up is the goal; pressing a primary affordance contradicts the page's own restraint.
  - **Second-person voice-shift from body first-person to CTA brand-voice** is one of three deliberate voice-shifts the spec locks (spec §4). Documented here as a composition-level fact: the shift is intentional.

### Section 7 — `SiteShell` footer

- **DS primitive(s)**: `<SiteShell>` footer slot (already provided via the `footer` prop in Section 1 above).
- **Props (substantive)**: Specified in Section 1.
- **Layout / spacing**: DS-owned internal padding. The footer line sits below `.site-page`'s `--space-12` (48px) bottom padding.
- **Motion**: None.
- **Content slot**: Footer line carries (in order): `© <year> pouk.ai`, then the four-item link list matching nav order — `Why AI`, `Roles`, `Principles`, `About` — separated by ` · `, then `hello@pouk.ai`. Engineer-mechanical change in `ShellWrapper.tsx` to extend the existing three-item footer link list to four. Closes spec §8 AC: "Footer link order matches nav (A15a)".
- **Brand notes**:
  - Footer link order is **identical to nav order** (A15a). The composition locks this: if a future revision changes nav order without changing footer order, that's a composition violation.
  - The `mailto:hello@pouk.ai` retains its position at the end of the footer line (after the four-item link list), per the home composition precedent (`home.md` §2 brand notes).

### Section 8 — End (no further sections)

- **DS primitive(s)**: None.
- **Props (substantive)**: None.
- **Layout / spacing**: `.site-page` `--space-12` bottom padding before `<SiteShell>`'s footer chrome.
- **Motion**: None.
- **Brand notes**:
  - **No additional sections.** No team page, no selected work, no press, no testimonial, no scheduling embed, no newsletter, no contact form, no CV download, no reading-time indicator, no signature, no photograph (spec §10). Composition locks this: adding any of the above is a spec-level conversation, not a composition revision.

---

## 3. Cross-section rhythm

The vertical rhythm of `/about`, top to bottom:

1. `<SiteShell>` header — DS-owned chrome, Wordmark 56px, nav inline (now four items).
2. `.site-page` top padding — `--space-12` (48px).
3. **Eyebrow + lede band** (no Hero) — eyebrow `--fs-micro`, gap `--space-2`, lede `--fs-body` `--fg-muted` max-width `--hero-max`.
4. Gap to Section 1 `<h1>` — `--space-16` (64px). *This is the eyebrow-band-to-body separator; it is large enough to mark the structural transition from "page label + opener" to "first-person essay."*
5. **Section 1** — `<h1>` Instrument Serif italic `--fs-tagline-intimate` → `--space-6` → 150–200 words `--fs-body` `--fg` paragraphs with `--space-4` paragraph gaps.
6. Gap to Section 2 — `--space-16`.
7. **Section 2** — `<h2>` (same visual weight as Section 1's `<h1>`) → body prose.
8. Gap to Section 3 — `--space-16`.
9. **Section 3** — `<h2>` → ~80-word origin in brand-voice declarative.
10. Gap to End CTA — `--space-16`.
11. **End CTA** — single `<p>` `--fs-body` `--fg-muted` with `mailto:` anchor.
12. Bottom gap to footer chrome — `--space-16` (the CTA line breathes both sides) + `.site-page` `--space-12` bottom padding.
13. `<SiteShell>` footer — DS-owned chrome, four-item link list + `mailto:hello@pouk.ai`.

**Token compliance**: every spacing value above resolves to a DS `--space-N` token. No raw pixels. No `--space-5`, `--space-7`, `--space-10`, etc. — those gaps do not exist per llms-full.txt line 55. No `--space-24` or `--space-32` either — `/about` does not need editorial-maximal breathing because the page is denser than `/`.

**Surface rhythm**: the entire page sits on `--bg` (`#FBFBFD`). No `--surface` (recessed inline elements), no `--bg-elevated` (overlays). No accent strips, no dividers, no alternating surfaces. The page reads as one continuous block.

**Visual-vs-semantic hierarchy contract**: sections 1, 2, 3 all render at the same display weight (`--fs-tagline-intimate`, Instrument Serif italic). The semantic distinction (`<h1>` vs. `<h2>` vs. `<h2>`) carries the WCAG hierarchy; the visual flatness carries the editorial premise (three peer essays, not one essay with two sub-essays). This is the composition's load-bearing typographic claim. A future revision that visually demotes the `<h2>`s relative to the `<h1>` is a register change, not a fix.

---

## 4. Motion choreography (page-level)

**The page ships zero motion.** No CSS animation, no entrance stagger, no fade-in, no hover transform, no scroll trigger, no parallax, no intersection observer. The only animation tokens that *could* run on this page belong to the DS's link-hover transitions (which are gated by `prefers-reduced-motion: reduce` via the DS's `:root !important` block — DS llms-full.txt line 71) and are not a composition concern.

**Fires on initial render**: nothing. The page paints, fully styled, in one beat.

**Fires on scroll**: nothing.

**Fires never (locked out by this composition)**: every scroll-triggered reveal, parallax, scroll-spy, marquee, illustration animation, intersection-observer-driven animation, JS-driven micro-interaction. All of these would require a `client:*` directive and would violate the spec's "no client-side JS shipped on `/about`" AC (spec §8) and masterplan §4.3.

**Deliberate divergence from `/`**: `/`'s revised composition consumes `<Hero entrance="stagger">` from DS 0.8.0. `/about` does **not** consume entrance animation. Two reasons: (a) the page does not invoke `<Hero>` at all, so the entrance prop has no slot to attach to; (b) the page's editorial register is *quieter* than `/`'s — a stagger reveal on an autobiographical essay reads as performative, not finished. The composition recommends static.

**`prefers-reduced-motion: reduce` behavior**: trivially satisfied (no motion to disable). Closes spec §8 AC: "`prefers-reduced-motion` honored — no animation on `/about`."

---

## 5. Icon picks (if applicable)

**None.** `/about` uses no Lucide glyphs. The page is type-only.

The absence is composition-load-bearing. If a future maintainer adds a Lucide glyph anywhere on `/about` (a `Mail` icon next to the CTA line, an arrow at the end of the lede, a section-anchor icon next to each `<h2>`), that's a register break and a spec violation. The page composes on prose and tokens alone.

---

## 6. DS gaps surfaced

This composition surfaces **one DS-gap** (filed forward, not blocking v1) and confirms **two engineer-side concerns are not gaps**.

### 6.1 `<Hero variant="no-title">` (or equivalent) — proposed forward-looking variant

- **Proposed file path in DS repo**: `proposals/hero-no-title-variant.md` in `poukai-inc/poukai-ui`.
- **Site-side companion**: [`meta/proposals/ds-side/hero-no-title-variant.md`](../../proposals/ds-side/hero-no-title-variant.md) — drafted by this composition.
- **Need**: A `<Hero>` variant (either a `variant="no-title"` prop, an explicit `title?: ReactNode` optional signature, or a sibling molecule like `<EditorialOpener>`) that supports the **eyebrow + lede, no `<h1>`** surface `/about` ships site-side in v1. Today's `<Hero>` at 0.9.0 requires a `title` slot whose contents render as `<h1>` — there is no documented way to omit the title without an empty-`<h1>` failure mode.
- **Where it appears**: `/about` hero region (this composition's Section 2). A future editorial page with the same shape (e.g., a long-form essay page, a `/manifesto` candidate, a `/customer-story-<slug>` page that opens in essay register) would also consume this variant.
- **Composition need (framed from site, not DS API)**: the consumer wants to compose "page-label eyebrow + 1-2 sentence lede, no display tagline, no `<h1>` in the doorway region" — a surface the DS does not currently model. The DS-side authors decide the prop shape; this composition argues only that the *gap exists* and the *site-side workaround (skipping `<Hero>` entirely) is acceptable for v1 but not durable*.
- **Workaround in v1**: **Skip `<Hero>` entirely.** `/about` composes eyebrow + lede as site-side prose elements (per §2 Section 2 above). This is **acceptable for v1** because (a) the substance is just two prose elements with tokenized styling, (b) no new tokens are introduced, (c) the site-side composition uses documented DS tokens (`--fs-micro`, `--fs-body`, `--fg-muted`, `--space-2`, `--space-16`, `--hero-max`) in their documented roles. The workaround is **not durable** because (a) future editorial pages with the same shape would each re-author the same site-side scaffolding, (b) the DS would not learn from the consumer pattern, (c) the brand contract for "eyebrow + lede band" stays implicit, not codified.
- **Blocking dependency**: **None for v1.** `/about` ships on existing DS primitives + site-side prose. The DS-side proposal is filed forward; `@poukai-inc/poukai-ui` maintainers may accept on their own timeline. If/when the variant ships, this composition revises to consume it (the eyebrow + lede band collapses into a single `<Hero variant="no-title" eyebrow="…" lede="…">` invocation) and the site-side scaffolding retires.

### 6.2 `<SiteShell>` four-item nav — **NOT a gap**

- **Concern (spec §9 engineer-dep bullet)**: "`@poukai-inc/ui` `SiteShell` accepts a four-item nav route list (currently three-item-shaped per the four existing pages). Confirm … that a four-item nav is supported as-is."
- **Confirmation**: The DS snapshot (`llms-full.txt` lines 140–143) documents `<SiteShell>`'s contract in terms of `currentRoute`, `routes[]`, and `navLabel`. The `routes` prop is typed as an array with no documented cap, max-entries enum, or layout-collapse behavior beyond what the underlying CSS flex layout handles. **Four items is supported on the current API.** No DS-side action needed.
- **Engineer-side caveat**: The four-item nav may visually crowd at narrow viewports if the labels are long or if the wordmark + nav don't share the header line elegantly. That's an engineer-side discovery (visual-verify at `360px / 768px / 1440px`), and the response is either (a) live with the crowding (acceptable for short labels — "Why AI / Roles / Principles / About" are all short), (b) collapse to a hamburger menu (a separate composition/DS conversation if it's needed), or (c) reduce the nav-item gap site-side (not advised; `<SiteShell>` owns its internal layout).

### 6.3 `<SiteShell>` footer link list four-item extension — **NOT a gap**

- **Concern (spec §9 engineer-dep bullet)**: "Footer link list in `SiteShell` extends to four items in the same order."
- **Confirmation**: The footer is supplied by the consumer via `<SiteShell>`'s `footer` prop (per the home composition §2 Section 1: `footer={<p>© <year> pouk.ai · <a href="mailto:hello@pouk.ai">hello@pouk.ai</a></p>}`). The footer slot is consumer-authored; the DS does not opinionate on the footer's link list shape. Extending to four items is a `ShellWrapper.tsx` (and/or `BaseLayout.astro`) mechanical change. **No DS-side action needed.**

### 6.4 JSON-LD `Person` schema rendering — **NOT a gap, but a build-time guard**

- **Concern (spec §9 engineer-dep bullet)**: "JSON-LD `Person` schema rendering on `/about` is standalone — must not be merged with the `/` `Organization` schema by accident at build time."
- **Confirmation**: The `jsonLd?: Record<string, unknown>` prop in `BaseLayout.astro` (line 52) serializes whatever object the page passes. The `/about` page passes a `Person`-shaped object; `/` passes an `Organization`-shaped object. Each page emits exactly one `<script type="application/ld+json">` (per `BaseLayout.astro` line 177). **No accidental merging is possible at build time** unless an engineer authors a code path that merges them. The composition's load-bearing claim is just: the engineer passes the `Person` object below to `BaseLayout`'s `jsonLd` prop directly, with no `worksFor` field and no `sameAs` field (per A15b/c, spec §6).
- **`Person` schema shape** (the composition specifies the shape; the engineer wires it to `BaseLayout.jsonLd`):
  ```
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arian Zargaran",
    "jobTitle": "Founder, pouk.ai",
    "url": "https://pouk.ai/about"
  }
  ```
  No `worksFor` relation. No `sameAs` block (no LinkedIn / X / GitHub URLs in structured data). Per A15b, A15c, spec §6. Engineer's `jobTitle` wording is content-drafter-and-Arian-approved; "Founder, pouk.ai" is one viable string but is **not locked** by this composition — the content drafter or Arian sets the final string.

### Summary of DS-gap state

| # | Gap | Universal or about-only? | DS-side action needed? | Blocks v1 ship? |
|---|---|---|---|---|
| 6.1 | `<Hero variant="no-title">` or equivalent | Universal (any future editorial page) | Yes — forward-looking proposal filed | **No** — v1 ships without; consumes if/when DS ships |
| 6.2 | `<SiteShell>` four-item nav | N/A — already supported | No | No |
| 6.3 | `<SiteShell>` footer four-item list | N/A — consumer-authored | No | No |
| 6.4 | JSON-LD `Person` rendering | N/A — already supported | No | No |

**Cross-page implication of §6.1**: when the DS ships the no-title variant, this composition revises. Until then, `/about` is the only route in the site that does not invoke `<Hero>`. This is documented as a deliberate, transitional state. A future `/404` or `/contact` composition that wants the same shape should reuse this composition's site-side scaffolding pattern (eyebrow + lede band, tokenized, no `<Hero>`) verbatim, *not* re-invent it.

---

## 7. Open questions for Arian

This composition resolves the §9 designer-review gate (verdict at the top: path (ii) + forward-looking (iii)). The remaining open questions are minor:

1. **Section heading wordings.** Composition uses placeholder strings ("The arc", "Why pouk.ai", "Pouākai") as illustrative. Final wordings (≤3 words each, Instrument Serif italic) are content-drafter's call, Arian-approved. *Default if no answer: content drafter authors against the spec §5 outcomes; this composition does not lock final wording.*

2. **Section-1 heading slug.** Composition suggests `#arc`; content drafter may prefer `#the-arc`. Engineer-mechanical decision; not composition-load-bearing. *Default: engineer slugifies the final heading wording.*

3. **Section-1 measure-cap on body prose.** Composition leaves the body `<p>` measure-cap open (≤`--content-max` 64rem with optional site-side tightening to ~36rem for prose readability). *Default if no answer: engineer applies the same body measure used on `/principles` body prose; visual-verify against the lede width above.*

4. **End-CTA exact wording.** Drafted by `pouk-ai-content` against the A11 brand-voice / second-person register. *Default if no answer: content drafter authors; differentiated in wording from `/principles`'s line per spec §5.*

5. **JSON-LD `jobTitle` string.** Composition suggests `"Founder, pouk.ai"`. *Default if no answer: Arian + content drafter set the final string; engineer wires whatever string is approved.*

Items 1–5 are content-or-mechanical and do not block the composition's structural verdict. **This composition is `In review` pending Arian's read-through; flipping to `Approved` does not require resolving items 1–5 (they can land with the content draft).** The composition is structurally complete.

---

## 8. Out of scope

This composition deliberately does not cover:

- **Illustration v2.** Parked at [`meta/proposals/about-illustration-v2.md`](../../proposals/about-illustration-v2.md). If/when a trigger fires (first paying engagement closes, quarterly site review, or two-or-more prospect emails citing "who am I emailing?"), the v2 revision lands as a separate composition pass.
- **`/404` composition.** P1 next per A16. Separate composition pass.
- **`/contact` composition.** P2 next per A16. Separate composition pass. (If `mailto:` continues to suffice, `/contact` may never land — that's a future spec decision.)
- **Cross-page nav-order ratification.** This composition extends nav from three items to four for `/about`. The same nav order — `Why AI → Roles → Principles → About` — applies to all four existing routes once the engineer extends `navRoutes` in `BaseLayout.astro`. The other four routes' compositions are not revised by this document; the nav change is `BaseLayout`-mechanical and applies site-wide.
- **`<Hero variant="no-title">` DS-side proposal authoring.** Section 6.1 names the gap and frames the composition need; the proposal markdown is at `meta/proposals/ds-side/hero-no-title-variant.md`. **Authoring the DS-side artifact** (the proposal markdown in the `@poukai-inc/ui` repo) is **not in this composition's scope** per the designer agent definition. Arian decides whether to route to `@poukai-inc/poukai-ui` maintainers; `@poukai-inc/poukai-ui` maintainers authors the DS-side artifact.
- **Engraving Pouākai direction on `/`.** Status remains **deferred** per `home.md` (revision 2026-05-17 deferral clause). `/about` shipping type-only means no cross-page illustration-vocabulary pressure is introduced — the deferred engraving on `/` is **not forced by `/about`'s v1 ship**, and the home composition's deferral remains valid as-is. *This composition's text explicitly notes the implication is handled correctly: type-only `/about` v1 carries no illustration register; no two-register conflict; no forcing function on the `/` engraving decision.*
- **Dark-mode behavior.** Out of scope until dark mode is shipped site-wide. The page composes entirely on documented light-mode tokens that invert cleanly per the DS's "never pure edges" principle.
- **OG image, favicon, apple-touch-icon, robots.txt, sitemap.xml entry for `/about`.** Launch-infrastructure surfaces owned by `BaseLayout.astro` and the site's `public/` directory. The sitemap addition is in the spec §8 ACs ("`sitemap.xml` includes `/about` as a fourth route") and is engineer-mechanical. OG image reuses `public/og.png` (spec §6). Not composition concerns.
- **Asset production for any future visual.** Out of scope — illustration is parked at v2 per A3.
- **Performance optimization specifics** (Lighthouse 100/100/100/100 contract, JS budget, image optimization, font preload behavior). Owned by `pouk-ai-reviewer`'s standards and `BaseLayout.astro`'s existing wiring. The composition respects these constraints; it does not redefine them. Spec §8 Quality ACs document the contract.
- **Engineer-side responsive-layout handling** for narrow viewports. The page is prose-only and the lede + sections naturally collapse to single-column; no two-column layout exists on `/about`. The engineer visual-verifies at standard breakpoints; the composition does not lock specific breakpoint values beyond reusing DS tokens.
