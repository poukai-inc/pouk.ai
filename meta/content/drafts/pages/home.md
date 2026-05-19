---
route: /
status: Approved
version: 1.1
lastUpdated: 2026-05-18
owner: Arian (founder)
author: pouk-ai-content
governingSpec: meta/specs/pages/home.md
revisionHistory:
  - version: 1.0
    date: 2026-05-16
    summary: Ratification-after-the-fact of shipped /. R05 closed. R14 + R27 closed-by-ratification (deliberate, time-bounded over-cap pending /about).
  - version: 1.1
    date: 2026-05-18
    executed: true
    driver: meta/specs/pages/about.md (Approved 2026-05-18) + meta/content/drafts/pages/about.md (Draft, 2026-05-18 — same PR)
    summary: Atomic migration with /about ship. Single string removed from / lede — sentence 2 (Pouākai origin). The removed sentence migrates verbatim to /about §3 as that section's opening sentence. R14 and R27 close on the same operation.
    changes:
      - Lede sentence 2 ("Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height.") REMOVED from /. Migrates to /about §3 sentence 1.
      - Lede goes from 4 sentences to 3: positioning → problem → D-11 hand-off.
      - All other strings on / unchanged (title, description, status badge, hero title, CTA, footer).
    closures:
      - R14 (P1 — 4-sentence lede vs DS 1–3-sentence rule): closed-by-migration. Flag 1 in §6 below switches from "deliberate, time-bounded exception" to closed.
      - R27 (P2 — Pouākai origin treatment): closed-by-migration. The origin lives only on /about §3 from v1.1 forward. Flag 2 in §6 below switches from "ratified exception" to closed.
    atomicityNote: R14 and R27 close on the same single-sentence removal. One operation, two debts closed. Not two separate edits — one edit, two flags retired.
decisionsHonoured:
  - D-11 (integrated lede-extension link sentence to /why-ai) — still in force; the D-11 sentence is now lede sentence 3 instead of sentence 4.
  - D-12 (status-line byte-identical to pre-cutover index.html) — still in force; status badge unchanged.
backlogClosed:
  - R05 (P0 — no Approved canonical content draft for /) — closed v1.0.
  - R14 (P1 — 4-sentence lede vs DS 1–3-sentence rule) — closed-by-ratification v1.0, then closed-by-migration v1.1. Now closed for good.
  - R27 (P2 — Pouākai origin treatment) — closed-by-ratification v1.0, then closed-by-migration v1.1. Origin now lives at /about §3 only.
  - R32 (P2 — H1-only homepage by design) — closed v1.0.
---

# Content: Home (`/`)

**Route**: `/`
**Status**: Approved
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-05-18 (v1.1)
**Governing spec**: `meta/specs/pages/home.md` (section 5 content requirements)
**Composition reference**: implicit — `HomeHero.tsx` composes `Hero` + `StatusBadge` + `Button` directly; no `meta/compositions/pages/home.md` exists.

This draft was originally a **ratification-after-the-fact** of the copy rendered on `/` (v1.0, 2026-05-16). The homepage was built by the engineer directly from the PM spec, skipping the content-stage approval gate; v1.0 closed that gate so future revisions have a canonical record to diverge from.

**v1.1 (2026-05-18) — atomic migration with `/about` ship**. Per `meta/specs/pages/about.md` (Approved 2026-05-18) and `meta/content/drafts/pages/about.md` (Draft, same date, same PR), one string is removed from `/` lede:

- Sentence 2 of the v1.0 lede (Pouākai origin: *"Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height."*) is **removed from `/`** and **migrates verbatim to `/about` §3** as that section's opening sentence.
- The remaining three lede sentences stay verbatim. Their numbering shifts because sentence 2 leaves:
  - v1.0 sentence 1 (positioning) → v1.1 sentence 1 (unchanged).
  - v1.0 sentence 3 (problem, *"Most AI projects fail to deliver."*) → v1.1 sentence 2 (unchanged).
  - v1.0 sentence 4 (D-11 integrated link, *"Here's why →"*) → v1.1 sentence 3 (unchanged).
- The lede returns to **3 sentences total**, restoring DS `<Hero>` 1–3-sentence cap compliance.
- All other strings on `/` are unchanged: title, description, status badge, hero title, hero CTA, footer.
- **R14 (4-sentence over-cap) and R27 (Pouākai origin treatment) close on the same operation**. One sentence leaves; two debts close. Not two edits — one edit, two flags retired. See §6 Flag 1 + Flag 2 below for the closure detail; their statuses switch from "deliberate, time-bounded exception" / "ratified exception" to closed.

Status stays `Approved` post-v1.1: Arian ratified the migration scope when approving `meta/specs/pages/about.md` on 2026-05-18 (the spec's atomic-migration AC names this revision as the in-scope work). The engineer wires the trimmed lede into `src/components/HomeHero.tsx` in the same PR that lands `/about`.

---

## 1. Drafting notes

- **Audience read**: a first-time direct visitor with zero context (typed `pouk.ai`, followed a DM, clicked a signature link) plus a returning prospect re-orienting mid-conversation. The page has under twenty seconds of attention; the words have to do positioning, brand restraint, and hand-off in that window.
- **Outcome read** (from spec §5):
  - Tagline reads as the brand mark itself — serif-led, refined, doing the work of a credential.
  - Lede communicates (a) pouk.ai is technical consulting that ships with AI, (b) the audience is operators who build, (c) the gap pouk.ai exists to close — surfaced as the final integrated link sentence per D-11.
  - Status line is byte-identical to the pre-cutover `index.html` per D-12.
  - Email link is the primary conversion path; no form, no widget.
- **Voice anchor**: agent §4.2 (operator-first), §4.4 (no marketing-speak), §4.5 (pouk.ai naming; Pouākai reference respectful and sparing), plus DS `llms-full.txt` "Brand voice": *precise, direct, technically confident. Never hedges, inflates, or reassures.*
- **Assumptions** (ratified by virtue of the page already shipping):
  - The 4-sentence rendered lede over-spends the DS `Hero` 1–3-sentence cap by one sentence. This is ratified as a *deliberate, time-bounded* over-cap because `/about` does not yet exist and the Pouākai origin needs somewhere to live (see R14/R27 rationale in §4 and §6).
  - The Pouākai origin sentence is a one-time appearance on the doorway page; when `/about` ships, the origin sentence migrates and the homepage lede trims to 3 sentences.
  - The page is H1-only by design (R32). DS Hero owns the sole `<h1>`; no `<h2>` exists because the IA has no second section. Standards R-026 (HARD) forbids skipping heading levels, not having only an H1.

---

## 2. Copy

The page is a single `Hero` block inside `BaseLayout` + `SiteShell`. There are no other sections. All copy below is the exact string shipping in `src/pages/index.astro` and `src/components/HomeHero.tsx` as of 2026-05-16.

### Block: pageTitle (spec §8 — `<title>` AC)

- **Copy**: `pouk.ai — Technical consulting for teams shipping with AI`
- **Character count**: 56 (under 60 SEO cap per agent §5.1).
- **Locked by**: spec §5 — must read as positioning, not marketing; agent §4.2 operator-first ("teams shipping with AI" addresses operators who already build); §5.1 — front-loads the brand, then the positioning noun phrase.

### Block: pageDescription (spec §8 — `<meta description>` AC)

- **Copy (v2.1, 2026-05-18 evening)**: `Custom AI builds, automations, and advisory for teams that need to ship. Currently taking conversations for Q3.`
- **Character count**: 113 (well under 155 SEO cap per agent §5.2).
- **v2.1 amendment**: Drops the middle credential sentence `Founded by a frontend engineer.` — the founder-arc clause retired sitewide alongside the /about v2.1 positioning shift (which banned references to Arian's prior employment, frontend background, or career transition). The home meta description now reads two sentences: what pouk.ai does + current availability. The credential register lives in operator-grade discipline tags inside the body ("custom AI builds, automations, and advisory"), not in a separate founder sentence.
- **Prior copy (v2.0, retired 2026-05-18)**: `Custom AI builds, automations, and advisory for teams that need to ship. Founded by a frontend engineer. Currently taking conversations for Q3.` (145 chars; three sentences).
- **Locked by**: D-12 — final sentence is byte-identical to the rendered status-line copy. Agent §5.2 — declarative, no CTA verbs ("learn more!"), front-loads the substantive nouns ("custom AI builds, automations, and advisory").
- **Voice rationale**: Two sentences, two jobs: what we do, current availability. The deliverable triple ("custom AI builds, automations, and advisory") is the credential, expressed as discipline tags rather than career biography. Matches the /about v2.1 supportingLine register ("Custom AI builds. Automations. Advisory engagements.") at meta-description scale.

### Block: statusBadge (spec §5 + §8 — D-12 parity AC)

- **Copy**: `Currently taking conversations for Q3.`
- **Word count**: 6 (well under the DS StatusBadge ≤10-word cap per `llms-full.txt` and agent §2 source-of-truth 5).
- **Component**: `<StatusBadge status="available">…</StatusBadge>` with pulse animation honoring `prefers-reduced-motion` (CSS-only, no JS).
- **Locked by**: **D-12** — byte-identical to pre-cutover `public/index.html`. The decisions log explicitly forbids re-evaluating this copy at cutover; any future change is a separate, post-launch decision.
- **Voice rationale**: matches DS voice example for `StatusBadge` ("Taking conversations for Q3.") — availability fact, no exclamation, no "we're hiring" / "waitlist" flourish. "Currently" softens to a present-tense window without committing to a future-tense calendar.

### Block: heroTitle (spec §5 — tagline outcome)

- **Copy**: `Technical consulting for teams shipping with AI.`
- **Render note**: the word `AI` is wrapped in `<em>` for italic emphasis on the serif display face — the only inline emphasis in the entire page. Single line at most breakpoints; clamp `--fs-tagline` (36–68px).
- **Locked by**: spec §5 outcome A (tagline must read as the brand mark itself, restrained, serif-led, refined). DS `llms-full.txt` `--fs-tagline` rule: used exactly once per page for the Hero title.
- **Voice rationale**: "Technical consulting that uses AI" framing (agent §4.5) rather than "AI consulting" — the noun is *consulting*, the modifier is *technical*, the tool is *AI*. The phrasing differentiates pouk.ai from deck-builders. "Teams shipping with AI" rather than "AI-curious teams" or "early adopters" — operator-first self-identification (agent §4.2).

### Block: heroLede (spec §5 + §8 — D-11 lede-extension AC)

The lede is a single paragraph composed of three rendered sentences. The third-and-final sentence is the D-11 integrated link sentence. (v1.1: the v1.0 Pouākai origin sentence — formerly sentence 2 — has migrated to `/about` §3 verbatim. The lede now sits within the DS `<Hero>` 1–3-sentence cap.)

- **Sentence 1**: `pouk.ai builds custom AI systems, automations, and advisory engagements for operators who'd rather ship than speculate.`
- **Sentence 2**: `Most AI projects fail to deliver.`
- **Sentence 3** (D-11 integrated link): `[Here's why →](/why-ai)` — anchor text `Here's why →` linked to `/why-ai`.
- **Total sentence count**: 3 (down from 4 in v1.0).
- **Migrated out (v1.0 sentence 2)**: `Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height.` — now lives at `meta/content/drafts/pages/about.md` §3 sentence 1. Engineer treats this string as a structural lock on the `/about` side; on `/` it is simply absent.
- **Locked by**: **D-11** — single integrated link sentence at the end of the lede, *not* a tertiary line under the CTA (rejected alternative per spec §5 and §8). Anchor text and href are structural-lock per the decisions log. D-11 survives the v1.1 migration unchanged: the integrated link sentence is still the lede's final sentence, only its numbering shifts (4 → 3).

### Block: heroCtaLabel + heroCtaHref (spec §8 — email link AC)

- **Label**: `hello@pouk.ai`
- **Href**: `mailto:hello@pouk.ai`
- **Component**: `<Button asChild><a href="mailto:hello@pouk.ai">hello@pouk.ai</a></Button>`
- **Locked by**: spec §8 AC — email link renders as `<a href="mailto:hello@pouk.ai">`; spec §5 — email link is the primary conversion path; no form, no scheduling widget.
- **Voice rationale**: the address *is* the label. Buttons that read "Get in touch" or "Contact us" force the reader to take a second step (click → see address → decide). Showing the address directly removes that step and signals operator-grade directness. DS button-label rule: sentence-case, ≤4 words, specific verb — `hello@pouk.ai` is a noun-as-label, which is the right exception here because the noun *is* the action target.

### Block: footerLines (rendered by `SiteShell` via `ShellWrapper.tsx`)

- **Copy**: `© 2026 pouk.ai · hello@pouk.ai`
- **Render note**: the `hello@pouk.ai` substring is an `<a href="mailto:hello@pouk.ai">`. Year is template-injected via `{year}` to avoid manual updates.
- **Locked by**: agent §4.3 refined (one space after periods, middle-dot separator); agent §4.5 lowercase `pouk.ai`. Owned by `SiteShell` consumer slot — site repo's responsibility, not DS-baked.
- **Voice rationale**: hairline footer carries copyright + contact only. Adding "All rights reserved" or social links would break the doorway restraint. The mailto in the footer is a second conversion path for visitors who scroll past the Hero CTA.

---

## 3. Page-level SEO copy

- **`<title>`**: `pouk.ai — Technical consulting for teams shipping with AI` (56 chars)
- **`<meta name="description">`** (v2.1, 2026-05-18 evening): `Custom AI builds, automations, and advisory for teams that need to ship. Currently taking conversations for Q3.` (113 chars; founder-arc clause retired — see §2 pageDescription block for the amendment audit log)
- **OG title**: matches `<title>` — `pouk.ai — Technical consulting for teams shipping with AI`. The line is already in voice and survives social-share truncation.
- **OG description**: matches `<meta description>` — 113 chars, well under the 200-char OG soft cap.
- **Canonical**: `https://pouk.ai/`
- **JSON-LD**: `Organization` schema with `name`, `url`, `email`, `description`, `sameAs` (LinkedIn, X, Instagram, GitHub). Owned by `index.astro` frontmatter; copy fields are byte-identical to pre-cutover `public/index.html` per D-12 parity matrix.
- **Heading hierarchy**: exactly one H1 (the Hero `<h1>` rendering the tagline). No H2, H3, H4. Standards R-026 (HARD) — "must not skip heading levels" — is honored: there are no skipped levels because there are no sub-sections. See R32 closure in §4 below.

---

## 4. Voice rationale

Anchors per significant line so future revisions have to argue against a reason, not against vibes.

- **Tagline — `Technical consulting for teams shipping with AI.`** Chosen over "AI consulting for…" (which would put pouk.ai in the deck-builder bucket) and over "Engineering consulting that uses AI" (which would understate the AI specialization). "Teams shipping with AI" is the operator self-identifier — engineering-led, post-curiosity, already-building. The italic `<em>AI</em>` on the serif face is a brand cue: the tool is named but not foregrounded; the noun *consulting* is the credential.
- **Lede sentence 1 — `pouk.ai builds custom AI systems, automations, and advisory engagements for operators who'd rather ship than speculate.`** "Operators who'd rather ship than speculate" is the audience handle. It rejects two adjacent personas: the executive looking for a deck and the AI enthusiast looking for a movement. The verb *builds* (not "delivers", not "creates", not "leverages") is a specific shipping verb per agent §4.6.
- **Lede sentence 2 — `Most AI projects fail to deliver.`** (v1.1 numbering; v1.0 sentence 3.) Four-word claim that does the hand-off setup. Declarative, no hedge, no source-citation in the lede — the citation lives on `/why-ai` where the claim is supported. The sentence's job is to earn the click on sentence 3 (the D-11 link).
- **Lede sentence 3 — `[Here's why →](/why-ai)`** (v1.1 numbering; v1.0 sentence 4.) D-11 structural lock. The arrow → is the affordance; the verb *here's* points at the destination; the noun *why* names the question. Anchor text fits inside the lede prose rather than appearing as a tertiary CTA line (rejected alternative per spec §5). The link makes sentence 2 falsifiable by clicking — operator-grade rigor.
- **Migrated-out (v1.0 lede sentence 2)** — `Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height.` This rationale is preserved as a historical record of the v1.0 ratification. In v1.0 the sentence was the brand-origin line, ratified despite agent §4.5's "respectful, sparing" caution because `/about` did not yet exist. The phrasing — fact-led ("the largest eagle that ever flew"), behavior-led ("hunting by stooping from height") — avoided the forbidden metaphor pattern and treated Pouākai as a real animal, not a marketing device. **As of v1.1 this sentence is removed from `/` and lives at `/about` §3 sentence 1 verbatim.** The macron preservation discipline transfers with it; the rationale chain is continued in `meta/content/drafts/pages/about.md` §4.
- **CTA — `hello@pouk.ai`** The address *is* the label per the rationale in §2 above. This breaks the DS Button-label "specific verb" guideline by using a noun, but the noun is the conversion target. Operator audience reads an email address as a direct invitation.

---

## 5. Headline alternatives (preserved for future revisions)

Per agent §6, high-stakes lines ship with three labelled options. These are recorded here for the next revision pass; the *recommended* option is the line currently shipping.

### Hero title

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `AI consulting that ships.` | Punchier, four words. | Drops the "technical" qualifier — reads as deck-builder. Rejected. |
| Sharpest (shipping) | `Technical consulting for teams shipping with AI.` | Names discipline, audience, and tool in nine words. | Slightly longer than the 36–68px clamp's comfort zone at small viewports. Mitigated by the clamp itself. |
| Weirdest | `We're the engineers your AI project should have hired first.` | Direct address, accusatory. | Aggressive; reads as agency-positioning. Rejected. |

### Hero lede first sentence

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `pouk.ai is a technical consultancy for AI builds.` | Two-clause, definitional. | Doesn't name the audience or the discriminator. Reads as boilerplate. Rejected. |
| Sharpest (shipping) | `pouk.ai builds custom AI systems, automations, and advisory engagements for operators who'd rather ship than speculate.` | Names three deliverables and the audience handle in one breath. | 19 words — close to the breath-cap for a Hero lede opener. Justified by the density. |
| Weirdest | `pouk.ai ships AI for people who are tired of slides.` | Slogan-feel; high-attitude. | Reads as agency-snark. Rejected. |

### Hand-off line (D-11 anchor text)

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Read why →` | Three characters shorter. | Verb without object — reads as truncated. |
| Sharpest (shipping) | `Here's why →` | Two-word answer; arrow is the affordance. | None material. |
| Weirdest | `The receipts →` | Punchy; promises evidence. | Cute; breaks the page's restraint. Rejected. |

---

## 6. Composition-fit flags

Three flags. Two are deliberate over-caps documented for future revision; one is a structural ratification.

### Flag 1 — R14: Lede sentence count exceeds DS `Hero` rule

- **The constraint**: DS `llms-full.txt` (Hero component): *"lede: 1-3 sentences at most."*
- **The v1.1 shipping copy**: 3 sentences. Within cap.
- **The v1.0 structure (historical)**: 4 sentences — positioning, brand origin, problem, hand-off. Over-cap by one sentence; the over-cap was ratified as a deliberate, time-bounded exception pending `/about`.
- **The v1.1 structure**:
  1. Positioning ("pouk.ai builds…")
  2. Problem ("Most AI projects fail to deliver.")
  3. Hand-off ("Here's why →")
- **The operation that closed R14**: removing v1.0 sentence 2 (Pouākai origin) and migrating it verbatim to `/about` §3 sentence 1. One string left `/`; the lede dropped from 4 to 3.
- **Why this is the right close (not collapsing the origin into a clause)**: a comma-spliced origin clause inside sentence 1 ("pouk.ai, named for Pouākai…, builds custom AI systems…") would break agent §4.1 ("one idea per sentence; two clauses max") and would bury the audience handle behind a parenthetical. Migration to `/about` preserves the origin where it belongs (a dedicated surface) and keeps sentence 1 of the homepage lede clean.
- **Trade-off recorded historically**: the v1.0 over-cap was tolerated for ~two days (2026-05-16 to 2026-05-18) while `/about` was specced and drafted. The atomic-migration discipline (A2) closed the over-cap in the same PR that introduced `/about`.
- **Status (v1.0, 2026-05-16)**: ratified as deliberate, time-bounded exception. Closed-by-ratification.
- **Status (v1.1, 2026-05-18)**: **closed-by-migration**. Lede is 3 sentences. DS cap compliant. The migration trigger fired and was executed. No further revision pending.
- **Voice-shift note (executed)**: the migrated sentence is third-person brand-voice. It opens `/about` §3 (Pouākai origin section), which is also brand-voice declarative (not first-person — see `meta/content/drafts/pages/about.md` voiceShifts.§3). Verbatim migration was grammatically clean as predicted.

### Flag 2 — R27: Pouākai origin treatment

- **The constraint**: agent §4.5 — *"Pouākai reference: respectful, sparing. Permitted: a one-line origin note on `/about` or in a longer-form post."*
- **The v1.1 shipping copy on `/`**: none. The origin sentence has migrated to `/about` §3.
- **The v1.0 shipping copy (historical)**: 1 sentence, 2 clauses joined by em-dash — `Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height.` Lived on `/` as v1.0 lede sentence 2 because `/about` did not yet exist. Ratified as a one-line, respectful, sparing origin note in v1.0.
- **The migration**: per spec `meta/specs/pages/about.md` (Approved 2026-05-18) §5 + atomic-migration AC, the v1.0 sentence migrates verbatim to `/about` §3 sentence 1. The string itself is unchanged; only its surface moved.
- **Why migration honors agent §4.5 more cleanly than v1.0 ratification**: §4.5 explicitly permits the origin on `/about`. v1.0 carried the origin on `/` as a deliberate, time-bounded exception (R14 + R27 paired). v1.1 puts the origin on the permitted surface and removes it from `/`. The brand now matches the brand contract verbatim — no exception remains.
- **Forbidden patterns NOT triggered (v1.0 or v1.1)**: no "we soar above competitors" metaphor; no compression of the macron (`Pouākai` not `Pouakai`); no Māori visual motif suggestions. `/about` §3 extends the respect posture explicitly with sentences 2 and 3 acknowledging the Māori source and stating the no-motif / no-claim discipline.
- **Status (v1.0, 2026-05-16)**: ratified-by-shipping. Closed-by-ratification.
- **Status (v1.1, 2026-05-18)**: **closed-by-migration**. Origin lives only on `/about` §3 from v1.1 forward. `/` carries no Pouākai reference. R14 and R27 close on the same single-sentence removal; one operation, two debts retired.

### Flag 3 — R32: Homepage is H1-only by design

- **The constraint**: standards R-026 (HARD) — *"must not skip heading levels"*. There is no standard requiring a minimum count of headings.
- **The current shipping copy**: exactly one H1 (the Hero `<h1>` rendering the tagline). No H2, H3, H4.
- **Why this is correct**: the spec IA (§4) defines the page as a single Hero block — *"adding sections is a brand violation, not a feature improvement."* A second section would force an H2; the absence of a second section is by design. The doorway pattern requires nothing more.
- **R-026 check**: no level is skipped because no level exists between H1 and... nothing. There is no H3 without an H2.
- **A11y check**: a single H1 is a valid document outline. Screen readers announce the H1 as the page label; the rest of the page is body prose inside the Hero.
- **Status**: ratified as deliberate. R32 closed. No copy change.

---

## 7. Open questions for Arian

None. All four backlog items (R05, R14, R27, R32) are closed:

- R05 closed v1.0 by the existence of an Approved canonical content draft.
- R14 closed-by-migration v1.1 (lede now 3 sentences; DS cap compliant).
- R27 closed-by-migration v1.1 (origin lives only on `/about` §3).
- R32 closed v1.0 (H1-only by design, R-026 honored).

Future revision triggers (recorded so a future Content pass knows when to reopen):

- The `/about` migration trigger has **fired and executed** (v1.1, 2026-05-18). No further `/about`-related revision pending on this file.
- If the status-line copy needs to change post-Q3 (cycle close, new availability state), a new draft revises §2 `statusBadge`. D-12 only locks the *cutover-day* copy; post-launch evolution is permitted.
- If Arian wants to introduce a second section to the homepage, that decision changes the doorway-pattern thesis and forces a re-spec. The right path is to raise it with PM (`pouk-ai-pm`), not to revise this draft.

---

## 8. Out of scope

- The contents of `/why-ai`, `/roles`, `/principles` — separate page specs and separate content drafts.
- Footer copy beyond the single line `© 2026 pouk.ai · hello@pouk.ai` — the `SiteShell` footer is constrained to this single line for the homepage.
- JSON-LD field values — owned by the engineer per the spec; copy here only confirms the public-facing strings.
- Choice of email host, social-link destinations, sitemap entries — engineering and infrastructure decisions, not content.
- Any treatment of `banner.png` / `og.png` artwork — visual design, not copy.
- Per-visit personalization, A/B variants, dynamic stat insertion — out of scope per spec §10 (zero-JS contract).
