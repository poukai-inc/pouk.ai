---
route: /about
status: Approved
version: 1.0
lastUpdated: 2026-05-18
owner: Arian (founder)
author: pouk-ai-content
approvedBy: Arian (founder), 2026-05-18
governingSpec: meta/specs/pages/about.md
compositionReference: meta/compositions/pages/about.md (in flight — pouk-ai-designer authoring in parallel)
founderCallsLockedIn:
  date: 2026-05-18
  calls:
    - id: Q1
      surface: §3 sentence 2
      decision: KEEP "extinct for around six hundred years" as drafted.
      effect: Section 3 body remains 77 words across three sentences; macron-preservation discipline + Te Ara-aligned extinction-date detail both ship.
    - id: Q2
      surface: End CTA
      decision: KEEP wry register — "If the inbox sounds right, hello@pouk.ai."
      effect: Inbox-as-noun pivot closes the loop on the hero lede's "Who you'd be writing into." Differentiated from /principles, /why-ai, /roles end-CTAs (no other end-CTA on the site uses "inbox" as its noun).
    - id: Q3
      surface: Hero lede
      decision: KEEP recommended sharpest option — "Who you'd be writing into if you sent the email below."
      effect: Single-sentence, 12-word hero lede. Page <h1> ("The arc") arrives immediately after.
    - id: Q4
      surface: <title> / OG title separator
      decision: KEEP em-dash — "About — pouk.ai".
      effect: Consistency with / title ("pouk.ai — Technical consulting for teams shipping with AI"). Site-wide title-separator discipline holds.
coupledRevision:
  driver: meta/specs/pages/about.md (Approved 2026-05-18)
  sibling: meta/content/drafts/pages/home.md → v1.1 in same PR (Pouākai origin sentence migrates out of / lede into this page §3)
voiceShifts:
  count: 3
  registered:
    - section: §3 Pouākai
      from: first-person ("I") body
      to: brand-voice declarative
      reason: A7 — the origin is pouk.ai's story, not Arian's. Verbatim migration of R27 from / preserves the existing brand-voice line; first-person here would be a category error (Arian did not name the largest eagle).
      protection: spec §5 voice-shift rule (locked). No future revision may normalize §3 to first-person.
    - section: End CTA
      from: first-person ("I") body
      to: brand-voice / second-person invitational
      reason: A11 — matches the /principles precedent. The body is an introduction; the CTA is an invitation. Different jobs, different registers.
      protection: spec §5 voice-shift rule (locked).
    - surface: <meta name="description"> (and OG description)
      from: first-person ("I") body
      to: brand-voice declarative
      reason: A14 — metadata is a third-party surface (search results, share cards) where first-person reads as an excerpt-out-of-context. Brand-voice keeps the page label legible at the SERP level.
      protection: spec §5 voice-shift rule (locked).
  notNormalisable: All three shifts are spec-locked. A reviewer noting "voice inconsistency" between §1/§2 and §3/CTA/meta is reading the spec wrong — point them at spec §5 and §4 IA items 5–6 + §9 A7/A11/A14.
backlogClosed:
  - About-page P0 (no Approved content draft for /about) — closed by this draft going to Approved
atomicMigrationNote: R14 (4-sentence lede over-cap on /) and R27 (Pouākai origin treatment) both close on the single sentence removal from / lede sentence 2. The removed sentence opens §3 of this page verbatim. One operation, two debts closed.
---

# Content: About (`/about`)

**Route**: `/about`
**Status**: Approved
**Owner**: Arian (founder) · Author: pouk-ai-content
**Approved by**: Arian (founder), 2026-05-18. All four open content questions (Q1–Q4 in §7 below) ratified at the founder's call; the draft moves to `Approved` with no copy changes between final-Draft and Approved states (drafter's recommended option was the chosen option on all four).
**Last updated**: 2026-05-18
**Governing spec**: `meta/specs/pages/about.md` (Approved 2026-05-18; §5 content requirements, §9 interview record A1–A18)
**Composition reference**: `meta/compositions/pages/about.md` (in flight — `pouk-ai-designer` authoring in parallel)

---

## 1. Drafting notes

- **Audience read**: A prospect who already read `/why-ai`, `/roles`, or `/principles` and now wants to know whose inbox they'd be writing into. They are not curious about pouk.ai's "mission" — they want to verify the operator on the other end of the email is a peer, not a salesperson.
- **Outcome read** (from spec §5):
  - §1 — Trace the arc from frontend engineer to operator who runs technical consulting through AI tooling. First-person. No résumé bullets, no employer names, no year counts.
  - §2 — Make the founding posture autobiographical, not slogan-shaped. A frontend background put me at the seam where modern AI tools collapse months of dev-team work into days. pouk.ai exists at that seam. Echo `/roles#builder` body ("collapsed what used to take a dev team six months into days or weeks") without lifting it verbatim.
  - §3 — Open with the R27 origin sentence migrated verbatim from `/` lede sentence 2. Three sentences total, ~80 words max. Acknowledge Māori source. State the respect posture. Stop.
  - End CTA — Single muted line, `/principles`-shape but worded differently. `<a href="mailto:hello@pouk.ai">`.
  - Meta — Brand-voice. `<title>` and `<meta name="description">` under SEO caps.
- **Voice anchor**: agent §4.1 (direct — one idea per sentence), §4.2 (operator-first — assume the reader has shipped), §4.6 (specific verbs, concrete artifacts, implied confidence). For sections 1 and 2: the voice should read like the first email Arian would send a prospect who replied — measured, specific, no posture. For section 3: the brand-voice declarative used in the R27 line currently shipping on `/`. For the CTA: invitational, brand-voice, one line.
- **Composition assumption**: composition is in flight under `pouk-ai-designer`. The copy here is written to work whether the page opens with a DS `<Hero>` molecule (eyebrow + lede in `<Hero>`, no `<h1>`) OR skips `<Hero>` and renders eyebrow + lede as standalone elements before §1. Either way, the `<h1>` is `The arc` at the top of section 1. If the Designer ships a no-title `<Hero>` variant, this copy slots in unchanged; if the page skips `<Hero>`, this copy slots in unchanged. The drafter does not pick.
- **Assumptions** (flag in §7 if Arian wants to override):
  - The eyebrow renders the literal page label `About` (lowercase, no punctuation), matching the eyebrow pattern used on other pages.
  - "About" in the page label is title-case-as-page-label (a noun, not a sentence), so it caps. The `<title>` and OG title use the same form.
  - The macron on `Pouākai` is preserved as `Pouākai` (rendered via HTML entity `&#257;` at the engineer's discretion; in this draft the literal character is used so the migration string is searchable).
  - Section anchor slugs default to: §1 `#arc`, §2 `#why`, §3 `#poukai`. Engineer may adjust.
  - End CTA "an inbox, not a funnel" framing is the deliberate differentiator from `/principles`. If Arian prefers a less wry register, alternatives are listed in §5.

---

## 2. Copy

The page is prose-led — no figures, no badges in the hero, no inline links inside the body prose other than the end-CTA mailto. All copy below is the final string the engineer should wire in.

### Block: pageTitle (spec §6 — `<title>` AC)

- **Copy**: `About — pouk.ai`
- **Character count**: 16.
- **Separator pick**: em-dash (`—`) matching the existing `/` title pattern (`pouk.ai — Technical consulting for teams shipping with AI`). Consistency with the home title beats individual-page optimization here.
- **Locked by**: spec §6, A14 — function-named ("About"), brand-suffixed, restraint-consistent.
- **Voice rationale**: A14 cedes the "Arian Zargaran" name-query SEO to LinkedIn / other indexed surfaces. `About — pouk.ai` is the page label, nothing more. No headline-shaped title here ("Meet the founder", "The operator behind pouk.ai") — those would compete with the body's first-person register the moment the page loads.

### Block: pageDescription (spec §6 — `<meta description>` AC)

> **Voice-shift annotation**: brand-voice declarative. See voiceShifts.meta in frontmatter and §4 below. This is one of the three locked shifts; do not normalize on revision.

- **Copy**: `pouk.ai is one operator. Frontend engineering background, now running technical consulting through the AI tools that collapse months into days.`
- **Character count**: 143 (under 155 SEO cap per agent §5.2).
- **Locked by**: A14 brand-voice rule for metadata; agent §5.2 declarative, no CTA verbs.
- **Voice rationale**: First sentence states the substantive fact (one operator, not a team) — the single most important thing a referrer or prospect needs to know before clicking. Second sentence carries the autobiographical seam in compressed form so a SERP snippet does the same work the body does. "Collapse months into days" rhymes with `/roles#builder` body language without quoting it.

### Block: ogTitle (spec §6)

- **Copy**: `About — pouk.ai`
- **Locked by**: spec §6 — OG title matches `<title>`. No share-context-specific punch-up; the page is restraint-posture.

### Block: ogDescription (spec §6)

- **Copy**: `pouk.ai is one operator. Frontend engineering background, now running technical consulting through the AI tools that collapse months into days.`
- **Character count**: 143 (well under 200 OG cap).
- **Locked by**: spec §6 — OG description matches meta description or a brand-voice-equivalent ≤200 chars. Matches the meta description verbatim; the same line carries the same job on both surfaces.

### Block: heroEyebrow (spec §4 IA item 2 — eyebrow on hero region)

- **Copy**: `About`
- **Render note**: Eyebrow case follows the existing page eyebrow pattern. Renders above the hero lede; no link, no decoration.
- **Locked by**: spec §4 IA item 2 — "Eyebrow renders the page label ('About')."

### Block: heroLede (spec §4 IA item 2 — hero lede, no `<h1>`)

- **Copy**: `Who you'd be writing into if you sent the email below.`
- **Sentence count**: 1.
- **Render note**: This sentence sits in the hero region above the first section heading. No `<h1>` renders in the hero region (spec §4 IA item 2, A9). The page `<h1>` lives at the top of section 1 ("The arc").
- **Voice rationale**: The lede answers, in one sentence, the question that brought the reader to `/about`. "Who you'd be writing into" addresses the prospect's actual mental motion (they are on this page because they are weighing the email). It avoids "Get to know me" / "Meet the founder" / "Hi, I'm Arian" registers — the first two are agency tropes (agent §4.4-adjacent), the third forces the page into a personal-blog frame before §1 establishes its own voice. The line is consciously a *second-person*-led pivot before §1 switches to first-person — the reader is named first, the operator second. This mirrors the read-order: the prospect is the agent, the operator is the destination.

### Block: section1 (spec §4 IA item 3 — "The arc" — first-person throughout, carries the page `<h1>`)

- **Heading**: `The arc` (3 words)
- **Heading render**: `<h1>` (the page's single `<h1>` per spec §6 heading-hierarchy AC), set in Instrument Serif italic per A12.
- **Anchor slug suggestion**: `#arc`
- **Body** (first-person; ~170 words):

> I came up writing frontend code — building interfaces, shipping product, sitting close enough to engineering decisions to learn which ones held up and which ones rotted in six months. The conversations on those teams kept turning toward AI, first as a curiosity, then as a tool people were quietly using to do parts of their job, then as a question the engineering org couldn't answer on its own: where does this actually go in production?
>
> I stopped writing frontend full-time to answer that question for the teams asking it. pouk.ai is what I do now — technical consulting for operators who'd rather ship something they can measure than commission a report on what they might build. I take a small number of engagements at a time. I write the code I recommend. I leave behind systems an in-house team can run, not slide decks that need translation.
>
> When you email `hello@pouk.ai`, I am the person who replies.

- **Word count**: ~165 words.
- **Voice rationale**: First-person throughout, opens with a specific verb and a specific surface ("writing frontend code") rather than a role title ("Frontend Engineer"). No company names, no year counts, no "X years of experience" register (banned by spec §10 / A5 implication). The arc has three beats — origin, turn, present — each in its own paragraph. The final standalone sentence ("When you email `hello@pouk.ai`, I am the person who replies.") is the section's load-bearing line: it tells the reader the page is not a team-of-twenty pretending to be a founder, and it sets up the §2 founding posture without flagging the transition. The phrase "rather ship something they can measure than commission a report on what they might build" tunes the operator-audience handle from `/` ("operators who'd rather ship than speculate") so the two pages don't repeat themselves but stay recognizable as the same voice.

### Block: section2 (spec §4 IA item 4 — "Why pouk.ai" — first-person, founding-posture, autobiographical only)

- **Heading**: `Why pouk.ai` (2 words)
- **Heading render**: `<h2>`, Instrument Serif italic.
- **Anchor slug suggestion**: `#why`
- **Body** (first-person; ~170 words):

> The reason I started pouk.ai instead of going back to a staff engineering role is that the tools changed underneath me. The same modern AI tools that show up in every founder's Twitter feed — the ones the press keeps calling transformative — actually do the boring thing they claim to do, when an engineer holds them correctly. They collapse what used to take a dev team six months into days, sometimes weeks for the harder parts. I watched this happen on projects I was on and projects I wasn't.
>
> The work that follows from that is specific. Most teams don't need a strategy retreat about AI; they need someone who has already wired these tools into a production codebase and can do it again on theirs. That is the seam pouk.ai operates in. I take on the build, the automation, or the advisory engagement that gets a team across the gap between "we should be doing something with AI" and "we are running this in production this quarter."

- **Word count**: ~175 words.
- **Voice rationale**: Pure autobiographical framing (A10). No "ship vs. deck" slogan, no competitive jab at consultancies that build decks, no "we believe" register. The differentiator surfaces by specificity: "the tools changed underneath me", "watched this happen on projects I was on and projects I wasn't", "wired these tools into a production codebase." The `/roles#builder` body language is echoed ("collapse what used to take a dev team six months into days") without verbatim copy — the original line is "Modern tools (Lovable, Claude, Supabase) collapsed what used to take a dev team six months into days or weeks"; this draft drops the tool names (they don't belong in autobiography) and reframes the verb in the active continuous ("collapse … into days, sometimes weeks for the harder parts") so the rhythm rhymes without echoing. "The seam pouk.ai operates in" is the founding-posture line; it is a statement of where the work lives, not a claim of superiority.
- **Banned-word defense note**: §2 contains the string "the ones the press keeps calling transformative." The word *transformative* is on agent §4.4's banned-marketing-speak list. Its use here is **diegetic** — the line is quoting the press's framing in order to undercut it ("the press keeps calling [it] transformative … actually do the boring thing they claim to do, when an engineer holds them correctly"). This is the inverse of marketing-speak: the section names inflated press language and refuses it. A future reviewer running a banned-word scan should NOT strike *transformative* here — it would invert the line's meaning. Flagged so the lint discipline does not over-correct.

### Block: section3 (spec §4 IA item 5 — "Pouākai" — brand-voice declarative, ~80 words, opens with R27 verbatim)

> **Voice-shift annotation**: brand-voice declarative. See voiceShifts.§3 in frontmatter and §4 below. This is one of the three locked shifts; do not normalize on revision. The verbatim opener migrates from `/` lede sentence 2 per spec §4 IA item 5 and atomic-migration AC.

- **Heading**: `Pouākai` (1 word)
- **Heading render**: `<h2>`, Instrument Serif italic. Macron preserved.
- **Anchor slug suggestion**: `#poukai`
- **Body** (brand-voice declarative; three sentences; ~75 words):

> Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height. The name comes from Māori tradition; the bird is real, extinct for around six hundred years, and the spelling carries the macron it was given. pouk.ai borrows the name as a reference point — a hunter that worked by altitude and timing — and stops there: no Māori visual motifs in the brand, no claim to the culture, no metaphor stretched past the one-line origin.

- **Word count**: 75 words. Three sentences.
- **Locked opener**: Sentence 1 is the verbatim R27 string migrated from `/` lede sentence 2 (per spec atomic-migration AC and A7). Engineer should treat this string as a structural lock — do not paraphrase on copy-edit.
- **Voice rationale**: Brand-voice declarative throughout (A7). Sentence 1 is the migrated origin one-liner — fact-led, behavior-led, no metaphor. Sentence 2 acknowledges the Māori source ("comes from Māori tradition"), names the bird's reality ("extinct for around six hundred years"), and surfaces the macron-preservation discipline ("the spelling carries the macron it was given") without lecturing the reader. Sentence 3 is the respect posture, stated as a discipline list: no visual motifs, no cultural claim, no metaphor extension. The "altitude and timing" gloss is the *only* gloss this section gives the name — it is the brand's reading of why the eagle is a fitting reference point, and it does its work in seven words. The section does not pivot to "we soar above…" or any forbidden metaphor pattern (agent §4.5). The "six hundred years" is a recorded fact about Haast's eagle / Hieraaetus moorei extinction; if the engineer wants to source-cite, the standard reference is Te Ara — the Encyclopedia of New Zealand. **Flag for Arian in §7**: confirm the "six hundred years" detail or strike it.

### Block: endCta (spec §4 IA item 6 — single muted line, brand-voice / second-person, mailto)

> **Voice-shift annotation**: body first-person → brand-voice / second-person invitational. See voiceShifts.endCta in frontmatter and §4 below. This is one of the three locked shifts; do not normalize on revision.

- **Copy**: `If the inbox sounds right, ` `<a href="mailto:hello@pouk.ai">hello@pouk.ai</a>` `.`
- **Rendered line**: `If the inbox sounds right, hello@pouk.ai.`
- **Render note**: Single `<p>` element, muted color treatment matching the precedent set by `/principles` end-CTA (`src/pages/principles.astro:78–81`). Period after the address is intentional — the line ends.
- **Word count**: 8 words including the address.
- **Differentiation from sibling end-CTAs** (drafter checked existing pages):
  - `/why-ai`: `Want to start that conversation? hello@pouk.ai` — question + answer shape.
  - `/roles`: `Not sure which fits? Describe your situation and we'll work it out together. hello@pouk.ai →` — diagnostic + co-investigation shape.
  - `/principles`: `If this is the kind of partner you want, hello@pouk.ai` — conditional-acceptance shape.
  - `/about`: `If the inbox sounds right, hello@pouk.ai.` — conditional-fit shape, *but* with "the inbox" as the noun the reader is evaluating, which is unique to this page (the page's job was to characterize the inbox). No other end-CTA on the site uses "inbox" as its noun.
- **Voice rationale**: A11 brand-voice / second-person register. The `/principles` shape is "If <condition>, <address>" — a deliberate template the prospect now recognizes from page to page. `/about` inherits the conditional shape but swaps `kind of partner` (`/principles`'s noun phrase, evaluating posture) for `the inbox` (this page's noun phrase, evaluating the operator-on-the-other-end). The wry mid-register pivot ("the inbox sounds right") is intentional: the body just spent ~340 words characterizing who you'd be writing into; the CTA closes the loop on that exact noun. If Arian prefers a less wry register, the alternatives in §5 trade the wryness for tighter restraint.

### Block: footerLines (rendered by `SiteShell` via `ShellWrapper.tsx`)

- **Copy**: `© 2026 pouk.ai · hello@pouk.ai`
- **Render note**: Global `SiteShell` footer, identical to other pages. Not authored on `/about` specifically. Included here only to document that no `/about`-specific footer copy exists (per spec §10).
- **Locked by**: spec §10 — no footer changes on `/about`. Per A15a, footer link order matches nav (`Why AI → Roles → Principles → About`), which is a `SiteShell` consumer concern, not a content concern.

---

## 3. Page-level SEO copy

- **`<title>`**: `About — pouk.ai` (16 chars)
- **`<meta name="description">`**: `pouk.ai is one operator. Frontend engineering background, now running technical consulting through the AI tools that collapse months into days.` (143 chars)
- **OG title**: matches `<title>` — `About — pouk.ai`.
- **OG description**: matches meta description — 143 chars, well under 200 OG cap.
- **OG image**: reuses `public/og.png` (spec §6 — `/about`-specific OG card deferred to a future visual pass).
- **Canonical**: `https://pouk.ai/about` (trailing-slash policy matches existing pages; confirm with engineer at build time).
- **JSON-LD**: standalone `schema.org/Person` schema only. Fields: `name`, `jobTitle`, `url`. No `worksFor`, no `sameAs` (A15b, A15c). Field values are engineering-mechanical and not authored here, except where copy fields surface verbatim strings — none on `/about` per spec §6.
- **Heading hierarchy**: exactly one `<h1>` (the §1 heading `The arc`). Sections 2 and 3 render as `<h2>`. No `<h3>` or deeper. Hero region carries no `<h1>` (A9). Standards R-026 (HARD) — no level skipped, all `<h2>`s descend cleanly from the single `<h1>`.

---

## 4. Voice rationale

Anchored per significant line so future revisions argue against reasons, not vibes.

- **Hero lede — `Who you'd be writing into if you sent the email below.`** Second-person, mid-register. Names the reader's actual question (who is on the other end) and the artifact that brought them here (the email link). Avoids "Hi, I'm Arian" (personal-blog frame), "Meet the founder" (agency trope), "About me" (redundant with the eyebrow). Sets up the §1 first-person without prefiguring its voice.
- **§1 opening — `I came up writing frontend code…`** Operator-grade specificity. "Came up" implies origin, "writing frontend code" names the verb and the surface. Skips role-title cliché ("As a Frontend Engineer at…"). The next clause ("building interfaces, shipping product, sitting close enough to engineering decisions to learn which ones held up") triples the artifact density before the reader can disengage.
- **§1 closing — `When you email hello@pouk.ai, I am the person who replies.`** Single load-bearing sentence. Tells the prospect there is no team-of-twenty pretending. The verb *am* is the operator-grade move; "the person who replies" is the noun phrase the prospect actually cares about. The mailto inside the body is intentional once (only once on the page outside the end-CTA) because the sentence's meaning requires it.
- **§2 opening — `The reason I started pouk.ai instead of going back to a staff engineering role is that the tools changed underneath me.`** Founder-posture without slogan. Names the counterfactual ("instead of going back to a staff engineering role") and the cause ("the tools changed underneath me"). Avoids "I founded pouk.ai because I believe…" (banned register per spec §10 / agent §4.4).
- **§2 middle — `the same modern AI tools that show up in every founder's Twitter feed … actually do the boring thing they claim to do, when an engineer holds them correctly.`** This is the section's claim. "Actually do the boring thing they claim to do" is a precise piece of restraint: it neither dismisses nor inflates the tools. "When an engineer holds them correctly" names the operator's role without claiming heroism.
- **§2 closing — `the seam pouk.ai operates in`** Names the founding-posture noun ("seam") rather than asserting a stance ("we ship not deck"). The seam framing came from the spec (§4 IA item 4); this draft makes it the section's terminal phrase rather than its opener.
- **§3 sentence 1** — migrated R27 verbatim. No rationale needed beyond the migration discipline.
- **§3 sentence 2 — `The name comes from Māori tradition; the bird is real, extinct for around six hundred years, and the spelling carries the macron it was given.`** Names the source culture, the bird's reality, and the macron-preservation discipline in one breath. The semicolon-then-comma rhythm is deliberate — three short clauses, no comma-spliced run-on. The detail "the spelling carries the macron it was given" doubles as an acknowledgment to a Māori reader that the brand did its homework. "Around six hundred years" is approximate (Haast's eagle is dated to ~1400 CE for extinction; round-numbers register reads as respect rather than precision).
- **§3 sentence 3 — `no Māori visual motifs in the brand, no claim to the culture, no metaphor stretched past the one-line origin.`** Stated as a discipline list, not as virtue-signaling. The phrase "metaphor stretched past the one-line origin" surfaces the *exact* boundary that the prior site lede already honored — the brand earns the name by not over-explaining it.
- **End CTA — `If the inbox sounds right, hello@pouk.ai.`** Conditional-fit shape (inherited from `/principles`), inbox-as-noun pivot (unique to this page). The wry register is intentional — the body just spent ~340 words characterizing who you'd be writing into; the CTA closes the loop on that exact noun. If the wryness reads off-brand on revision, swap for `If this sounds like the inbox you want, hello@pouk.ai.` (Option 2 in §5).

---

## 5. Headline alternatives (high-stakes lines)

Per agent §6, high-stakes lines ship with three labelled options. Recommended option is the one wired in §2 above.

### Hero lede

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `One operator. Frontend engineering background. Currently taking conversations for Q3.` | Three short declaratives. Mirrors the `/` meta description rhythm. | Reads as metadata. The page already does this on the `<meta description>`; the hero lede doing it again is double-spending the same line. |
| Sharpest (recommended) | `Who you'd be writing into if you sent the email below.` | Second-person, names the reader's actual question, points to the conversion target (the mailto). | Slightly wry; relies on the reader actually being on the page for the email below. Mitigated because the mailto IS rendered below on every variant of the page. |
| Weirdest | `An introduction. The page that goes with the inbox.` | Two ultra-short sentences. Operates as a structural label for the page. | Cute. "Goes with" reads vaguely literary. Rejected on grounds of restraint slippage. |

### §1 heading (`<h1>`)

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Background` | One word, accurate, neutral. | Generic. Could be the heading on any consultant's about page. |
| Sharpest (recommended) | `The arc` | Two words. Names the section's shape (origin → turn → present). The definite article makes it specific without naming what the arc is — the body does that work. | "The arc" is mildly literary; depends on §1's body delivering on the structural promise. The body does. |
| Weirdest | `How I got here` | Five words; over-cap (spec A12 limits to ≤3 words). Personal-blog register. | Over-cap. Rejected. |

### §2 heading

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `The founding` | Two words; names the section's job neutrally. | Doesn't surface *pouk.ai* — the section is about the founding posture *of pouk.ai*, and saying so in the heading reinforces brand presence. |
| Sharpest (recommended) | `Why pouk.ai` | Two words. Names the section's question. Pulls the brand into the heading rhythm. | None material. Possibly reads as a section in a deck; mitigated by the fact that the body is anti-deck. |
| Weirdest | `The seam` | Two words. The §2 body terminates on "the seam pouk.ai operates in," so heading and closing line bracket the section. | Risks opacity — a reader skimming headings doesn't know what "the seam" refers to until they read the body. The Sharpest option is more navigable; the seam idea is still the section's terminal phrase. Rejected. |

### §3 heading

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `The name` | Two words; quietly accurate. | Buries the actual word "Pouākai" from the table-of-contents / anchor rhythm. A reader scanning section headings doesn't see the brand origin word at all. |
| Sharpest (recommended) | `Pouākai` | One word. The actual name, with macron preserved. Doubles as the §3 anchor (`#poukai`). | None — this is the heading that does its own job. |
| Weirdest | `The eagle` | Two words. Foregrounds the bird, not the name. | Risks reading as metaphor-flagging ("the eagle" implies we'll metaphor on it). The section explicitly does not metaphor. Rejected. |

### End CTA

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `If you'd like to talk, hello@pouk.ai.` | Maximally muted. Five words. No noun-pivot. | Reads as generic. Doesn't earn the page's closing position. |
| Sharpest (recommended) | `If the inbox sounds right, hello@pouk.ai.` | Inbox-as-noun pivot closes the loop on the hero lede's "Who you'd be writing into." Wry but disciplined. | "Inbox sounds right" is a mild compression that depends on the reader having read the body. If they jumped to the bottom, it reads slightly opaque. Mitigated — `/about` is short enough that bottom-jumpers are rare. |
| Weirdest | `An inbox, not a funnel — hello@pouk.ai.` | Explicit anti-funnel framing. | Reads as competitive-jab register (banned by A10 implication, agent §4.4). Also too close to the `/why-ai` "Most AI projects fail" register, which belongs on `/why-ai`. Rejected. |

### Meta description

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `About pouk.ai — technical consulting for teams shipping with AI. Founded by a frontend engineer.` | 95 chars; reuses the `/` description register verbatim. | Doesn't differentiate the `/about` SERP snippet from the `/` SERP snippet. A reader seeing both would learn nothing new about `/about` from the description. |
| Sharpest (recommended) | `pouk.ai is one operator. Frontend engineering background, now running technical consulting through the AI tools that collapse months into days.` | 143 chars. Front-loads the substantive fact (one operator). Carries the autobiographical seam framing in compressed form. | "AI tools that collapse months into days" is a claim that needs the body to back it. The body does. |
| Weirdest | `One operator. One inbox. Technical consulting for teams shipping with AI.` | 73 chars; staccato. | Mirrors the hero lede's inbox noun, which is right; but "One operator. One inbox." reads slogan-y, which is wrong for restraint posture. Rejected. |

---

## 6. Composition-fit flags

Flags for `pouk-ai-designer` (in flight on `meta/compositions/pages/about.md`).

### Flag 1 — Hero region carries no `<h1>` (A9)

- **The constraint**: DS `<Hero>` molecule presumably composes a `<h1>` slot. The spec calls for the page `<h1>` to live in §1 (`The arc`), not in the hero region.
- **The copy implication**: hero region renders eyebrow (`About`) + lede only. The Designer decides whether `<Hero>` ships with an empty title slot, whether the page skips `<Hero>` entirely, or whether a new DS variant is needed (spec §9 dependency).
- **Drafter's copy works either way**: the eyebrow and lede are written as standalone strings. If `<Hero>` ships with a usable title slot left empty, the strings slot into the molecule. If the page skips `<Hero>`, the strings render as standalone elements before §1. Composition picks the path; copy does not change.

### Flag 2 — Lede length is 1 sentence, 12 words

- **The constraint**: DS `<Hero>` lede cap is 1–3 sentences.
- **The current copy**: 1 sentence, 12 words.
- **The flag**: This is the *shortest* hero lede on the site (`/` is 4 sentences; `/why-ai`, `/roles`, `/principles` are 2–3 each). If the composition expects a denser block to balance the absent `<h1>`, the Designer may push back asking for a second sentence. Drafter would resist — the lede is consciously short because §1's `<h1>` should arrive immediately after; adding a second hero-lede sentence delays it.

### Flag 3 — Section heading face

- **The constraint**: A12 — section headings set in Instrument Serif italic, distinct from sans body type, ≤3 words each.
- **All three headings are within the cap**: `The arc` (2), `Why pouk.ai` (2), `Pouākai` (1). No copy-length pressure on the type rule.
- **The flag**: macron on `Pouākai` must render correctly in Instrument Serif italic. If the type face does not carry the macron glyph, the Designer needs to address (font fallback or alternative weight) before composition lands. This is the only typography risk on the page.

### Flag 4 — `<h1>` at the top of §1 is a structural divergence from the other four pages

- **The constraint**: every other route (`/`, `/why-ai`, `/roles`, `/principles`) ships its `<h1>` inside `<Hero>`. `/about` ships its `<h1>` as the §1 heading.
- **The copy implication**: the §1 heading `The arc` must render at `<h1>` size or with the visual weight a page-`<h1>` deserves, even though sections 2 and 3 render at `<h2>` weight. The Designer decides whether this means the §1 heading carries a different type scale than §2 / §3, or whether all three headings render at the same scale and `<h1>` vs `<h2>` is semantic-only.
- **The drafter's bias**: keep all three section headings at the same visual scale (Instrument Serif italic, same size). The semantic `<h1>` vs `<h2>` distinction is for screen readers and the document outline; the visual hierarchy is "three sections, equally weighted." If the Designer disagrees, the spec's A11y AC (exactly one `<h1>`) still holds; only the type scale shifts.

### Flag 5 — Section 1 paragraph break

- **The constraint**: agent §4.3 — one blank line between paragraphs.
- **The current copy**: §1 body is three paragraphs (~165 words). The third paragraph is a single sentence ("When you email `hello@pouk.ai`, I am the person who replies.").
- **The flag**: the single-sentence third paragraph is intentional. If the composition recipe collapses paragraphs into a denser block (no blank-line breaks), the single-sentence paragraph loses its load-bearing emphasis. Drafter would resist collapse — the line is the section's terminal punch.

### Flag 6 — `mailto:hello@pouk.ai` appears twice on the page (once in §1, once in end-CTA)

- **The constraint**: no DS rule against multiple mailtos. But composition-wise, the §1 mailto inside body prose may want different treatment (inline, no button) vs the end-CTA mailto (line CTA, link).
- **The copy implication**: §1's mailto must render as an inline `<a href="mailto:hello@pouk.ai">hello@pouk.ai</a>` inside paragraph prose, NOT as a Button. End-CTA renders as an inline link inside its own muted `<p>`, matching `/principles` precedent. Neither uses the DS `Button` molecule; the `/` Hero CTA is the only `Button`-wrapped mailto on the site.
- **The flag**: if the Designer's composition standardizes "all mailtos are Buttons", §1's inline mailto becomes a Button mid-paragraph, which would visually break the reading rhythm. Resist this — the §1 mailto is a *referent* (the address being characterized), not a CTA.

---

## 7. Open questions for Arian

**All four ratified by the founder on 2026-05-18.** Status moves to `Approved`. No copy changes between final-Draft and Approved — the drafter's recommended option was the chosen option on every question.

- **Q1 — `Pouākai` extinction date** — **RATIFIED (a): KEEP** "extinct for around six hundred years" as drafted in §3 sentence 2. The round number ships. Date-specificity discipline: 2026 - ~1400 CE ≈ 626 years; "around six hundred years" rounds in the respectful direction and avoids false precision. If a future revision wants source-citation, the standard reference is Te Ara — the Encyclopedia of New Zealand (Haast's eagle / *Hieraaetus moorei*).
- **Q2 — End-CTA register** — **RATIFIED: KEEP wry register**, `If the inbox sounds right, hello@pouk.ai.` Inbox-as-noun pivot closes the loop on the hero lede's "Who you'd be writing into." Differentiated from sibling end-CTAs on /why-ai, /roles, /principles by the noun choice ("inbox"). Future revision lock: do not flatten to "If you'd like to talk…" without re-spec — the wry register is part of the page's signature.
- **Q3 — Hero lede** — **RATIFIED: KEEP** `Who you'd be writing into if you sent the email below.` Single sentence, 12 words, second-person. The §5 Safest option (triple-declarative metadata-style lede) is rejected on grounds of double-spending the meta description. The §5 Weirdest is rejected on restraint slippage.
- **Q4 — Title separator** — **RATIFIED: KEEP em-dash**, `About — pouk.ai`. Matches the / title (`pouk.ai — Technical consulting for teams shipping with AI`). Site-wide title-separator consistency.

No remaining open questions. The draft is `Approved`. Designer composes against this copy; engineer wires it into `src/pages/about.astro` (or equivalent surface per engineer's mechanical call per spec §6).

---

## 8. Out of scope

- **Photograph, illustration, signature, or handwritten asset on `/about` v1.** Per spec §10 and A3. Illustration is parked at `meta/proposals/about-illustration-v2.md`.
- **Named clients, employers, projects, or press references.** Per spec §10. The arc in §1 deliberately uses surfaces ("frontend code", "interfaces", "product") rather than employer names.
- **A "Selected Work" list, skills list, or CV download.** Per spec §10.
- **A LinkedIn / X / GitHub link in body, footer, or structured data.** Per spec §10 and A15b/c.
- **A contact form, scheduling widget, or non-`mailto:` conversion path.** Per spec §10. End-CTA is `mailto:` only.
- **A reading-time indicator, author byline, table of contents.** Per spec §10.
- **Translation into other languages.** English-only at v1 per spec §10.
- **A `/about`-specific OG image.** v1 reuses `public/og.png` per spec §6.
- **Cross-references to `/about` from other pages' bodies.** Per spec §10. Nav + footer + flow position cover discoverability.
- **Footer copy specific to `/about`.** `SiteShell` footer is global; no per-page override.
- **JSON-LD field values beyond confirming they are standalone `Person` with no `worksFor` / `sameAs`.** Engineering-mechanical, not content.
