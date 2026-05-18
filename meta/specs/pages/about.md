# Spec: About

**Route**: `/about`
**Status**: Approved
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-18
**Approved by**: Arian (founder), 2026-05-18. Founder approval ratifies the spec for downstream execution; §9 dependencies (designer composition, content draft, engineer DS confirms) move from blocking-Approved to blocking-ship and execute in parallel.
**Masterplan reference**: Sections 2A (decision authority — routes are site-owned), 4.1 (site layout), 7.3 (illustration vs. photography deferral), §5 of the agent instructions (brand context)
**Interview record**: A1–A18 in this thread on 2026-05-17/18. The interview is the rationale-of-record for every load-bearing decision in this spec.
**Coupled deliverables (atomic with this spec landing)**:
- `meta/content/drafts/pages/home.md` — revision to remove R14 sentence 2 + R27 origin one-liner.
- `meta/specs/flows/visitor-to-conversation.md` — revision to admit `/about` as a parallel trust-loop page.
- `meta/proposals/about-illustration-v2.md` — parked illustration proposal.
- `meta/specs/backlog.md` — new entry for `pages/about.md` plus sequence note for P1 `/404`, P2 `/contact`.

---

## 1. Purpose

`/about` introduces the operator behind pouk.ai. By the time a prospect reaches this page, they have agreed there's a deployment gap (`/why-ai`), recognized their shape of help (`/roles`), or read the operating disciplines (`/principles`). What remains is the human question: *who exactly will reply to my email?* `/about` answers that — in first person, in the operator's own voice — and closes two recorded content debts on the homepage by absorbing the Pouākai origin sentence into a single founder-introduction surface. R14 (home-lede 4-sentence over-cap) and R27 (Pouākai origin treatment) both close on the same migration: the single Pouākai origin sentence migrates from `/` to `/about` §3, dropping the home lede from 4 sentences to a DS-compliant 3 (closing R14) and giving the origin its proper home (closing R27). The page is the trust-loop sibling to `/principles`: `/principles` says how pouk.ai works; `/about` says who pouk.ai is.

## 2. Audience

- **Primary**: A prospect who has read at least one other page on the site and is triangulating whether Arian is the kind of operator they want in the room. They want first-person voice, autobiographical specificity, and an absence of agency-page tropes ("we believe…", "our mission…", named-but-uncited clients).
- **Secondary**: A referrer about to make an intro who wants a single canonical URL to attach to a DM or email ("read his about, then ping me back"). Per the visitor-to-conversation flow revision (A13), `/about` is documented as the recommended primary URL for referrer-intro, founder-DM, and email-signature contexts.

## 3. Success criteria

- **Behavior**: The visitor reads `/about` (under three minutes at ~450 words), recognizes Arian as a peer/operator rather than a vendor, and either (a) emails `hello@pouk.ai` with higher conviction than they had pre-`/about`, (b) sends the URL to a colleague as part of a referral, or (c) closes the tab with a quiet trust-up that converts on a later email.
- **Signal**: Qualitatively — inbound emails reference Arian by name and engage with specific autobiographical detail ("saw you came up from frontend; we have a similar shape"). Referrers cite `/about` rather than `/principles` when intro'ing ("read his about — operator background, you'll like the voice"). When analytics arrive, time-on-page approaching the read-target (~2 minutes) and `mailto:` clicks from `/about` are the primary read-outs.
- **Failure mode**: The page reads as a résumé, a LinkedIn export, or an "about us" agency page written by a marketing team. If a competitor's about page could swap copy and not be visibly different, this page failed. The page also fails if the first-person voice slips into either (a) personal-blog over-share or (b) brand-voice puffery that contradicts the autobiographical premise.

## 4. Information architecture

The page is prose-led. No figure, no photograph, no illustration in v1 (A3 — deferred to v2 per `meta/proposals/about-illustration-v2.md`). Three sections under quiet `<h2>` headings set in Instrument Serif italic (A12), bookended by a hero region with no `<h1>` (A9) and a minimal end-CTA line (A11).

1. `SiteShell` — top nav with About marked current. Nav order per A4: `Why AI → Roles → Principles → About`. Footer link order matches nav (A15a). Wordmark links back to `/`.
2. **Hero region — eyebrow + lede, no `<h1>`** (A9). Eyebrow renders the page label ("About"). Lede is one to two sentences setting up the page; it does *not* repeat the migrated R14 opener of section 1. The page's `<h1>` is moved into section 1 (see §4 IA item 3) per the structural call in A9; the hero region carries the eyebrow and a short lede only.
3. **Section 1 — "The arc"** (or similar ≤3-word Instrument Serif italic heading per A12). The page's primary `<h1>` lives at the top of this section to satisfy the WCAG single-`<h1>` contract (A9 implication). The section is **first-person ("I") throughout** (A5). *Correction recorded 2026-05-18*: A8 originally framed R14 sentence 2 as a "frontend-engineer-to-consultant arc" sentence eligible for verbatim migration into section 1; on re-reading the home content draft, R14 sentence 2 is the **Pouākai origin** sentence (same sentence as R27 — see §5 below). R14 closes by sentence-count migration (4 → 3 sentences), not by an "arc" sentence migrating to section 1. Section 1 therefore opens fresh in first-person voice — no third-person verbatim opener, no opener voice-shift. The deliberate voice-shifts the spec locks are now three (section 3 brand-voice, CTA, meta description), not four. Approximate length: 150–200 words.
4. **Section 2 — "Why pouk.ai"** (or similar ≤3-word Instrument Serif italic heading per A12). Founding-posture section. **Pure post-frontend autobiographical framing** (A10): Arian's frontend engineering background put him at the seam where modern AI tools collapse what used to take a dev team six months into days. pouk.ai exists to help teams cross that gap. Echoes the `/roles#builder` body language ("Modern tools collapsed what used to take a dev team six months into days or weeks") without copying it verbatim. No "ship vs. deck" slogan, no competitive jab, no stance language — differentiation comes from autobiographical specificity, not positioning copy. Voice continuous with section 1 (first person). Approximate length: 150–200 words.
5. **Section 3 — "Pouākai"** (or similar ≤3-word Instrument Serif italic heading per A12). Origin section. **Opens with the R27 one-liner migrated verbatim** from the current homepage lede sentence 2 (A7). Expands to **~80 words maximum in three sentences**: (a) the migrated origin one-liner, (b) one sentence acknowledging the name's Māori source, (c) one sentence stating the respect posture — no Māori visual motifs, no claim to the culture. The brand earns the name by not over-explaining it. Voice: returns to brand-voice declarative for this section (the origin is not Arian's first-person story; it's pouk.ai's). Voice-shift from section 2 (first-person) to section 3 (brand-voice declarative) is deliberate; see §5.
6. **End CTA** — minimal, single muted line, `<a href="mailto:hello@pouk.ai">`. Brand-voice / second-person register matching `/principles`'s precedent (A11). Content drafter differentiates the exact wording from `/principles`'s line so the two pages don't read as templated. Voice-shift from section 3 (brand-voice declarative) to CTA (brand-voice invitational) is the same family of voice; the larger shift to flag is body-first-person → CTA-not-first-person.
7. **`SiteShell` footer** — global chrome, no `/about`-specific content.

**Three deliberate voice-shifts the spec locks in**:

- **Pouākai section voice-shift** (A7 implication): sections 1 + 2 are first-person; section 3 is brand-voice declarative. The Pouākai origin is not an autobiographical beat.
- **CTA voice-shift** (A11): body first-person → CTA brand-voice / second-person. Matches `/principles` precedent.
- **Meta description voice-shift** (A14): body first-person → metadata brand-voice. Lives outside the rendered page — see §6.

*Correction recorded 2026-05-18*: A8 originally locked a fourth voice-shift — a "verbatim R14 third-person opener" on section 1. On re-reading the home content draft, R14 sentence 2 is the Pouākai origin sentence (not a separate arc sentence), so the opener-voice-shift collapses. Section 1 is first-person from sentence one. Three voice-shifts, not four.

## 5. Content requirements

The substance is drafted by `pouk-ai-content` after this spec lands. No verbatim copy exists yet beyond the two migrated sentences. Content drafter authors against the outcomes below; final copy is Arian-approved.

Outcomes the copy must hit:

- **Voice**: Explicit first person ("I") throughout sections 1 and 2 (A5). The voice is Arian writing as himself — not the brand voice, not the editorial voice of `/principles`, not the third-person of an agency about page. The voice should feel like the first email Arian will send a prospect after they reply.
- **Voice-shift rule (locked)**: Section 1 is first-person throughout. Section 2 is first-person throughout. Section 3 is brand-voice declarative (not first-person). End CTA is brand-voice / second-person. Meta description is brand-voice. **No future content revision may "normalize" any of these surfaces to a single voice** — the shifts are part of the spec.
- **Section 1 — "The arc"**: First-person throughout. Tells the arc: where Arian came from (frontend engineering), the turn toward consulting, what he does now. No résumé bullets, no list of past employers, no years-of-experience claim. Specifics over abstractions ("I spent X years shipping Y at companies that did Z" is the wrong register; "I came up writing frontend code at companies where the AI conversation eventually became my conversation" is closer).
- **Section 2 — "Why pouk.ai"**: Pure autobiographical framing for the founding posture (A10). The argument: a frontend background put Arian at the seam where modern AI tools collapsed dev-team-months into days. pouk.ai exists to help teams cross that gap. The phrasing echoes `/roles#builder`'s body language ("Modern tools collapsed what used to take a dev team six months into days or weeks") without copying it. No competitive language ("most AI consultants build decks"), no stance slogans ("we ship"), no comparative claims. The differentiator is the autobiography, not the assertion.
- **Section 3 — "Pouākai"**: Opens with the R27 one-liner verbatim (current homepage sentence: "Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height."). Expands to ~80 words in three sentences total. Acknowledges Māori source, states respect posture, ends. No metaphor ("we soar above competitors"), no Māori visual motif suggestions, no claim to cultural ownership. The macron on Pouākai is preserved (HTML entity `&#257;`).
- **Section headings**: Each ≤3 words. Set in Instrument Serif italic (A12). Anchor IDs derived from heading slugs (e.g., `#arc`, `#why-poukai`, `#poukai-origin` — exact slugs are content drafter's call constrained by the heading wording).
- **End CTA**: Brand-voice / second-person invitational. Single muted line. `<a href="mailto:hello@pouk.ai">`. Shape like `/principles`'s line ("If this is the kind of partner you want, hello@pouk.ai.") but tuned for the `/about` register and differentiated enough that the two pages don't read as templated.
- **What the page deliberately does not include** (per §10): no photograph, no illustration, no signature, no handwritten note in v1; no "Selected Work" or named-clients list; no skills enumeration; no LinkedIn or X link in the body (they're also off the structured-data surface per A15b/c); no contact form, no scheduling embed.

**No `Draft:` example copy in this section.** `/about` is the first page where the entire prose is to be authored by `pouk-ai-content` from outcomes (not lifted verbatim from `meta/backlog.md`); offering example copy here risks anchoring the drafter's voice to PM voice. The R14 and R27 sentences are the only verbatim locks.

## 6. Content data shape

`/about` does not introduce a new `src/content/*.json` file. Single-author single-page prose lives in the page template (`src/pages/about.astro`) or, if the engineer prefers, an MDX file in a new `src/content/` collection — that is an engineer-mechanical call, not a PM call. If the prose later wants to be reused (e.g., a future `/case-studies` page references the same arc), promote to data then.

Page-level meta surfaces:

- **`<title>`**: `About — pouk.ai` (or `About | pouk.ai` — separator is content drafter's call). Function-named per A14. Operator's name deliberately omitted from the title — the "Arian Zargaran" name-query SEO is ceded to LinkedIn / X / other indexed surfaces by design (A14).
- **`<meta name="description">`**: Brand-voice, ≤155 characters per agent §5.2. Drafted by `pouk-ai-content` against this spec's outcomes. The voice-shift from body-first-person to meta-brand-voice is documented and deliberate (A14).
- **OG title**: matches `<title>`.
- **OG description**: matches `<meta description>` or a brand-voice-equivalent ≤200 chars.
- **OG image**: reuses the existing `public/og.png` for v1. A `/about`-specific OG card is out of scope for v1 (deferred to a future visual-design pass).
- **Canonical URL**: `https://pouk.ai/about` (trailing-slash policy matches existing pages — confirm with engineer at build time).
- **JSON-LD**: standalone `schema.org/Person` schema only (A15b). Fields: `name`, `jobTitle`, `url`. **No `worksFor` relation to the existing `/` `Organization` schema** (A15b). **No `sameAs` block** — no LinkedIn / X / GitHub URLs surfaced in structured data (A15c). The restraint posture set by the function-named title (A14) extends to structured data — `/about` stays minimal across nav, footer, title, and JSON-LD.
- **Heading hierarchy**: exactly one `<h1>` per WCAG. The `<h1>` lives at the top of section 1 (the arc), not in the hero region (A9). The hero region carries the eyebrow and lede only; the three section headings are `<h2>` each. No `<h3>` or deeper.

## 7. User flow

- **Entry**: From the top nav (any page on the site → `/about`); from a referrer DM or email signature containing the `/about` URL directly (A13 documented role); from a search query like "pouk.ai about" (the name query "Arian Zargaran" is ceded — A14); from `/principles` for the prospect who closed one trust-loop page and wants the other.
- **Read path**: Eyebrow → hero lede → section 1 (the arc; opens third-person, transitions to first-person) → section 2 (founding posture, first-person) → section 3 (Pouākai origin, brand-voice) → end CTA. Read-target: ~2 minutes (~450 words). A reader landing on `/about` as first-touch (referrer-DM entry source) reads top-to-bottom; a returning reader from another page may scroll to a specific section via heading anchors.
- **Exit / conversion**: Three valid exits — (a) `mailto:hello@pouk.ai` from the end CTA, (b) back into the funnel via top nav (typically to `/roles` or `/principles`), or (c) close with intent to return / convert later. Per A13, `/about` is positioned as a parallel trust-loop page to `/principles` (OR semantics, not sequential) — the canonical funnel does not force prospects through both.

## 8. Acceptance criteria

Page-structure ACs:

- [ ] Route renders at `/about`.
- [ ] All sections in the IA (§4 items 1–7) are present and ordered as specified.
- [ ] **No `<h1>` renders in the hero region** (A9 — deliberate divergence from `/`, `/why-ai`, `/roles`, `/principles`). The hero region carries only the eyebrow ("About") and a short lede.
- [ ] **Exactly one `<h1>` renders on the page**, and it lives at the top of section 1 ("The arc"). Section headings 2 and 3 render as `<h2>`. No `<h3>` or deeper.
- [ ] Section headings (1, 2, 3) render in **Instrument Serif italic** (A12), distinct from the sans body type. Each heading is ≤3 words.
- [ ] Anchor IDs are present on each section heading, derived from heading slugs.
- [ ] Section 1 is in **explicit first person ("I")** throughout (A5). No third-person opener.
- [ ] Section 2 is in **explicit first person ("I")** throughout (A5 + A10).
- [ ] Section 3 opens with the **R27 one-liner migrated verbatim** from the prior homepage lede.
- [ ] Section 3 is ~80 words total, three sentences, in **brand-voice declarative** (not first-person).
- [ ] End CTA renders as a single muted line containing `<a href="mailto:hello@pouk.ai">` in brand-voice / second-person register, differentiated in wording from `/principles`'s end-CTA line.
- [ ] No photograph, illustration, signature, or handwritten visual asset is present in v1 (A3 — deferred to v2 per `meta/proposals/about-illustration-v2.md`).

Nav / cross-surface ACs:

- [ ] `SiteShell` top nav exposes **four** items in order: `Why AI → Roles → Principles → About` (A4). About is marked current on `/about`.
- [ ] `SiteShell` footer link order matches nav: `Why AI → Roles → Principles → About` (A15a).
- [ ] `sitemap.xml` includes `/about` as a fourth route.

Atomic-migration ACs (coupled with `/about` deploy, A2):

- [ ] `/` no longer carries the Pouākai origin sentence. Removing this single sentence drops the home lede from 4 sentences to 3 (closes R14 by sentence-count compliance) and migrates the origin to `/about` (closes R27).
- [ ] The trimmed homepage lede contains exactly 3 sentences in order: positioning, problem ("Most AI projects fail to deliver."), D-11 hand-off ("Here's why →").
- [ ] `meta/content/drafts/pages/home.md` has been revised (v1.0 → v1.1) to reflect the trimmed lede and the closed-by-migration status of R14 + R27.
- [ ] `meta/specs/flows/visitor-to-conversation.md` has been revised to admit `/about` as a parallel trust-loop page to `/principles` and to document `/about` as the recommended primary URL for referrer / DM / signature contexts.

Meta / SEO ACs:

- [ ] `<title>` renders as `About — pouk.ai` (or `About | pouk.ai`) (A14).
- [ ] `<meta name="description">` is brand-voice, ≤155 characters (A14).
- [ ] OG image reuses `public/og.png`.
- [ ] Canonical URL is `https://pouk.ai/about` (trailing-slash policy matches existing pages).
- [ ] JSON-LD is a standalone `schema.org/Person` block (A15b) with `name`, `jobTitle`, `url` fields only. No `worksFor`. No `sameAs` (A15b, A15c).
- [ ] No LinkedIn, X, GitHub, or other social URL appears on `/about` (body, metadata, or footer).

Quality ACs:

- [ ] Lighthouse mobile: 100/100/100/100 (or ≥95 Performance per D-14 if that relaxation is the operating bar at build time; A11y / BP / SEO = 100 is non-negotiable).
- [ ] No client-side JS shipped on `/about` (zero-JS-unless-justified posture; nothing on this page justifies an island).
- [ ] `prefers-reduced-motion` honored — no animation on `/about` (no entrance animation, no hover motion). Default-zero-motion design.
- [ ] axe-core passes with 0 violations on `/about`.
- [ ] Spec §5 content outcomes are met by the shipped copy, evidenced by `meta/content/drafts/pages/about.md` carrying `status: Approved` (the content draft is the tracked-approval artifact).

Voice-shift documentation ACs:

- [ ] The Pouākai section voice-shift (first-person → brand-voice declarative) is documented in `meta/content/drafts/pages/about.md`'s drafting notes or composition-fit flags so future revisions don't normalize.
- [ ] The CTA voice-shift (body first-person → brand-voice / second-person) is documented similarly.
- [ ] The meta-description voice-shift (body first-person → metadata brand-voice) is documented similarly.

## 9. Open questions / dependencies

Spec is `Approved` (founder ratification, 2026-05-18). The dependencies below are **downstream gates for ship**, not for spec approval — they execute in parallel against this ratified spec:

- **Designer review of the no-`<h1>`-in-hero call (A9)**. The structural choice to drop `<h1>` from the hero region and move it into section 1 is a deliberate divergence from the four other pages, all of which carry a hero `<h1>`. `pouk-ai-designer` reviews whether this break in the `SiteShell + <Hero> + content` rhythm is composition-clean or whether the DS `<Hero>` molecule needs a no-title variant. Three sub-questions for the designer:
  - Does `<Hero>` ship with the page at all, with an empty / unused `title` slot (if the DS molecule permits that)?
  - Or does the page skip `<Hero>` entirely and structure the eyebrow + lede outside the DS molecule?
  - Or does this surface a need for a new DS variant (`<Hero variant="no-title">` or equivalent) — in which case the spec depends on a DS proposal landing in `@poukai-inc/poukai-ui`?
  Designer's verdict updates this dependency. The spec is unblocked once the designer's composition recipe lands at `meta/compositions/pages/about.md`.

- **Illustration v2 (A3)**. Open question parked at `meta/proposals/about-illustration-v2.md` (status: `Draft (parked)`). Trigger conditions for revisiting: first paying engagement closes, OR quarterly site review, OR explicit prospect feedback ("who am I emailing?"). Not blocking v1 — `/about` ships type-only — but recorded here so a future revision pass knows the question exists.

- **Content drafter authoring (`pouk-ai-content`)**. `meta/content/drafts/pages/about.md` does not yet exist. The drafter authors against §5 outcomes; Arian approves. The atomic-migration ACs depend on the drafter producing both `/about` v1 prose AND the trimmed `/` lede in the same draft revision pass.

- **Engineer dependencies**:
  - `@poukai-inc/ui` `SiteShell` accepts a four-item nav route list (currently three-item-shaped per the four existing pages). Confirm with `@poukai-inc/poukai-ui` maintainers or the DS API that a four-item nav is supported as-is.
  - Footer link list in `SiteShell` extends to four items in the same order. Confirm same.
  - JSON-LD `Person` schema rendering on `/about` is standalone — must not be merged with the `/` `Organization` schema by accident at build time.

Resolved-via-interview (recorded so future agents can read the rationale chain):

- A1: P0 is `/about`, no `/case-studies` override (no named customer in next 30 days).
- A2: Atomic migration. `/about` + `/` trim ship in the same PR.
- A3: No founder visual asset in v1. Illustration deferred to v2 with parked proposal.
- A4: Top nav order `Why AI → Roles → Principles → About`.
- A5: Explicit first person "I" for body prose.
- A6: Medium prose (~400–600 words) in three sections.
- A7: Migrate R27 verbatim as section 3 opener; ~80 words max; three sentences.
- A8: Originally locked R14 sentence 2 verbatim migration as section 1 opener (third-person → first-person voice-shift). Corrected 2026-05-18 on re-reading `meta/content/drafts/pages/home.md`: R14 sentence 2 IS the Pouākai origin sentence (same sentence as R27), not a separate "arc" sentence. R14 closes by sentence-count migration (4 → 3 sentences); section 1 opens fresh in first-person; the opener voice-shift retires. Three deliberate voice-shifts total (Pouākai section, CTA, meta description), not four.
- A9: No `<h1>` in hero region; `<h1>` moves to section 1.
- A10: Pure post-frontend autobiographical framing for section 2.
- A11: `/principles`-style brand-voice end-CTA.
- A12: Instrument Serif italic section headings, ≤3 words.
- A13: `/about` as parallel trust-loop page to `/principles` (OR semantics); also recommended primary URL for referrer / DM / signature contexts.
- A14: `<title>` is `About — pouk.ai`; meta description is brand-voice; "Arian Zargaran" name-query SEO ceded by design.
- A15: Footer matches nav; standalone `Person` JSON-LD only; no `worksFor`, no `sameAs`.
- A16: Post-`/about` sequence is P1 `/404`, P2 `/contact`.
- A17: This spec lands as `In review`; illustration v2 proposal lands as `Draft (parked)`.
- A18: Wrap; no more clarifying questions.

## 10. Out of scope

- A team page. pouk.ai is one operator.
- A "Selected Work" or named-clients list. Pouk.ai is too early; case-study work is gated on customer permission per masterplan §7.3 and tracked separately as a P1+ spec candidate.
- A press / "as featured in" block. No press yet.
- A CV / PDF download. The web page is the artifact.
- A photograph, illustration, signature, or handwritten visual asset in v1 (deferred to v2 — see §9).
- LinkedIn / X / GitHub URLs in the body, footer, or structured data (A15b, A15c). Contact mediation stays through `hello@pouk.ai`.
- A contact form, scheduling widget, intro questionnaire, or any non-`mailto:` conversion path. `mailto:` only at v1; richer contact flows are deferred to a separate `features/contact-flow.md` spec if ever needed (currently P2 per A16).
- Per-visit personalization, A/B copy variants, dynamic stat insertion. Zero-JS contract.
- A reading-time indicator. None of the other long-form pages have one; consistency holds.
- A "back to home" affordance. `SiteShell` wordmark covers that.
- Author byline ("by Arian Zargaran"). The page *is* the byline; the entire body is in his voice.
- Translation into other languages. English-only at v1.
- A `/about`-specific OG image. v1 reuses `public/og.png`.
- Cross-references to `/about` from other pages' bodies (e.g., adding "see /about" links to `/why-ai` or `/roles`). Nav + footer + flow position cover discoverability.
