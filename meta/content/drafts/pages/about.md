---
route: /about
status: Approved
approvedBy: Arian (founder), 2026-05-18 evening
version: v2.1
lastUpdated: 2026-05-18
owner: Arian (founder)
author: pouk-ai-content
supersedes: v2.0 (Approved 2026-05-18 evening, founder-ratified) — v2.0 is superseded in-place by this v2.1 revision before any ship. v2.0 was approved but did not reach production; v2.1 is the build-of-record.
governingSpec: meta/specs/pages/about.md (v2, Approved 2026-05-18 evening — PM amending in parallel to drop the operator-line surface from §5 + extend the voice-contract ban list per founder's company-maturity positioning shift)
compositionReference: meta/compositions/pages/about.md (v2, Approved 2026-05-18 evening — composition §4 IA item 5 operator-line treatment retires per the v2.1 surface removal; designer in flight on a thin revision)
rationaleChain: meta/proposals/about-v2-recalibration.md (revision 2)
v2_0_to_v2_1_positioningShift:
  trigger: Founder positioning direction on 2026-05-18 evening, verbatim — "I am not aligned with the claim and constant proudness of the sole operator. I believe in a company that shows maturity, that's happy to sit by the same table of companies bigger than itself, that's happy to chase growth."
  reading: The v2.0 register over-indexed on the *fact* of one-operator scale ("Small consultancy. One operator." in the supporting line; "small and direct", "one team at a time" in the story body; "Founded and run by Arian Zargaran" in the operator line). v2.1 retires that framing without faking plurality. The page now reads as a company-grade peer to larger consultancies; the work is what's named, not the staffing.
  whatStays:
    - Display statement (`pouk.ai builds AI that ships.`) — capability-led, subject + verb + object, zero size-claim.
    - Pouākai unit body — verbatim carry-forward from v1; brand-voice declarative; zero operator framing.
    - End CTA (`For inbound work, hello@pouk.ai.`) — already brand-voice neutral; "inbound work" reads mature/peer-grade, not proudness-of-smallness.
    - Portrait caption (`Arian Zargaran, founder.`) — founder is a role, not a size-claim. Mention of the founder ≠ proudness-of-smallness.
    - Portrait alt — founder role naming is on-register; the descriptor names visual register, not scale.
    - Page title (`About — pouk.ai`) — function-named; unchanged.
    - Heading hierarchy — exactly one `<h1>` (display statement); one `<h2>` (Pouākai); unchanged.
  whatRetires:
    - **Supporting line** — v2.0 shipped `Small consultancy. One operator. Custom work in production.` The first two clauses surfaced staffing as a brand claim. v2.1 rewrites to `Custom AI builds. Automations. Advisory engagements.` — names the three deliverable categories; zero staffing reference; zero size-claim.
    - **Story body** — v2.0 paragraph 2 ("Engagements are small and direct. pouk.ai works one team at a time. The output is a system the in-house team can run, not a deck that needs translation.") carried "small and direct" and "one team at a time" — both retire. v2.1 rewrites both paragraphs to land peer-grade with larger consultancies, name the work (not the staffing), and project trajectory.
    - **Operator line** (composition §4 IA item 5 + spec §5) — RETIRED ENTIRELY. v2.0 shipped `Founded and run by Arian Zargaran. Direct contact at hello@pouk.ai.` v2.1 removes the surface. Arian's name surfaces only via the portrait caption + alt text + JSON-LD `Person` schema (Google's lane). PM is amending spec §5 + §8 ACs in parallel; this content draft ships against the retirement.
    - **Meta description** — v2.0 shipped `pouk.ai is a small technical consultancy that builds and ships AI work in production. One operator. Direct contact at hello@pouk.ai.` Both `small` and `One operator` retire. v2.1 rewrites to name capability + deliverable shape; staffing absent.
voiceContract:
  scope: page-wide, format-independent (UPDATED in v2.1)
  rule: Brand-voice declarative throughout. Subject is `pouk.ai` on the display statement, supporting line, story body, and Pouākai unit. The end CTA is brand-voice / second-person invitational. The meta description is brand-voice. **There is no first-person "I" anywhere on the rendered page. There is no fake plurality ("we" / "our team") anywhere on the rendered page. There is no proudness-of-smallness ("small", "tiny", "boutique", "scrappy", "solo", "one operator", "just me", "humble", "small but mighty") anywhere on the rendered page.**
  newBansAddedInV2_1:
    - "small" (as a brand claim about pouk.ai itself; permitted as a generic adjective elsewhere where unavoidable, but not for self-description)
    - "tiny", "boutique", "scrappy", "solo", "humble"
    - "one operator" as a self-descriptor in body copy
    - "just me", "just one person"
    - "small but mighty", "small but serious"
    - implied-we ("our team", "we believe", "we love")
  registerLock: Confident, mature, peer-grade. The page reads as a company-with-trajectory — happy to sit at the same table as larger consultancies, happy to chase growth. The work is named (custom AI builds, automations, advisory engagements, production AI work); the staffing is not.
  collapsedFramework: v1's three-voice-shifts framework dissolved under v2. v2.1 preserves the collapse — body is brand-voice declarative; CTA second-person and meta brand-voice are same-voice-family adjacencies. Zero voice-shifts.
  notNormalisable: A reviewer flagging "voice inconsistency" between the display statement (Instrument Serif italic, declarative) and the body prose (sans, declarative) is reading the spec wrong — they are both brand-voice declarative; only the type register differs. A reviewer suggesting v2.1 re-add a staffing claim ("name the operator", "tell the reader it's one person") for transparency is reading the spec wrong — the founder positioning explicitly retires staffing-as-brand-claim.
companyModeLock:
  rule (UPDATED v2.1): Subject is always `pouk.ai`. Never `we`, never `I`, never `our team`. Arian's name appears on the page only via (a) portrait caption (`Arian Zargaran, founder.`), (b) portrait alt text (`Arian Zargaran, founder of pouk.ai. …`), and (c) the page's standalone `schema.org/Person` JSON-LD (engineer-wired, not body copy). No operator line in body; no third-person `Arian` reference in story body or meta description.
  protection: Spec §5 + §8 ACs (PM amending in parallel). The page ACs bar first-person "I", fake plurality ("we"), proudness-of-smallness ("small", "one operator", etc. — see voiceContract.newBansAddedInV2_1), and the operator-line surface entirely. The portrait caption + alt + JSON-LD carry the founder-naming load.
backlogClosed:
  - About-page v2.1 (positioning recalibration) — closes when this draft moves to Approved.
atomicMigrationNote: R27 (Pouākai origin sentence) migration from / to /about was executed under v1 (atomic, irrevocable). The sentence renders in v2.1 inside the Pouākai unit (composition §2 Unit 4 — verbatim carry-forward continues). Three sentences carry forward verbatim from v1 §3 (per composition §2 Unit 4 content slot lock + spec §10 A7 revision).
v2_0_ratifiedCallsCarriedForward:
  - Q1 (Display statement framing): SHIP `pouk.ai builds AI that ships.` — HOLDS in v2.1.
  - Q3 (Portrait alt AI lineage): DO NOT DISCLOSE — HOLDS in v2.1.
  - Q5 (Pouākai body): VERBATIM CARRY-FORWARD — HOLDS in v2.1.
v2_0_ratifiedCallsRetired:
  - Q2 (Supporting line `Small consultancy. One operator. Custom work in production.`): RETIRED v2.1 — supporting line rewrites to `Custom AI builds. Automations. Advisory engagements.` per founder positioning shift.
  - Q4 (Operator line `Founded and run by Arian Zargaran. Direct contact at hello@pouk.ai.`): RETIRED v2.1 — operator-line surface removed entirely per founder positioning shift. PM amending spec §5 + §8 ACs.
---

# Content: About (`/about`) — v2.1

**Route**: `/about`
**Status**: Approved
**Approved by**: Arian (founder), 2026-05-18 evening
**Version**: v2.1 (supersedes v2.0 — v2.0 Approved 2026-05-18 evening but never shipped to production; v2.1 is the build-of-record)
**Owner**: Arian (founder) · Author: pouk-ai-content
**Last updated**: 2026-05-18
**Governing spec**: `meta/specs/pages/about.md` v2 (PM amending in parallel — drop operator-line surface from §5; extend voice-contract bans to ban proudness-of-smallness and staffing-as-brand-claim)
**Composition reference**: `meta/compositions/pages/about.md` v2 (designer in flight on a thin revision — composition §4 IA item 5 operator-line treatment retires per the v2.1 surface removal)
**Rationale chain**: `meta/proposals/about-v2-recalibration.md` revision 2 + founder positioning direction 2026-05-18 evening (verbatim quote preserved in frontmatter `v2_0_to_v2_1_positioningShift.trigger`)

---

## 1. Drafting notes

- **Founder positioning shift** (the load-bearing reason this draft exists): on 2026-05-18 evening, founder direction retired v2.0's proudness-of-sole-operator framing. Verbatim — *"I am not aligned with the claim and constant proudness of the sole operator. I believe in a company that shows maturity, that's happy to sit by the same table of companies bigger than itself, that's happy to chase growth."* v2.1 reads as a company-with-trajectory: confident, mature, peer-grade with larger consultancies. The work is named (custom AI builds, automations, advisory, production); the staffing is not.

- **Audience read** (unchanged from v2.0, from spec §2): A prospect mid-funnel asking *what kind of company is this?* — what pouk.ai stands for, what it does, what it does not do. They want company-grade clarity, not personal-blog warmth. They make the conversion decision shortly after `/about`. The v2.1 register shift means the prospect now reads pouk.ai as peer-grade with the larger consultancies they might be comparing it against, not as the smaller-and-prouder-of-it alternative.

- **Outcome read** (v2.1, from spec §5 + composition §2):
  - **Display statement** — unchanged from v2.0. Capability-led, ≤12 words, page `<h1>`.
  - **Supporting line** — REWRITTEN. Names the three deliverable categories (custom AI builds / automations / advisory engagements) without staffing reference. ≤12 words.
  - **Story body** (composition Unit 3) — REWRITTEN both paragraphs. 2-3 short paragraphs on `--bg`, ~60-120 words. Brand-voice declarative. Names what pouk.ai is, what it does, who it does it for — peer-grade, no proudness-of-smallness.
  - **Operator line** — RETIRED ENTIRELY. The composition §4 IA item 5 surface removes. Arian's name surfaces only via portrait caption + alt + JSON-LD.
  - **Pouākai unit** — unchanged from v2.0; verbatim carry-forward from v1. Three sentences, ~75 words.
  - **End CTA** — unchanged from v2.0. `For inbound work, hello@pouk.ai.` Brand-voice / second-person invitational.
  - **Meta description** — REWRITTEN. Drops `small` and `one operator`. Names capability + deliverable shape. ≤155 chars.
  - **Portrait alt + caption** — unchanged from v2.0. Founder role-naming is on-register (role, not size-claim).

- **Voice anchor** (UPDATED v2.1): agent §4.1 (direct — one idea per sentence), §4.2 (operator-first), §4.6 (specific verbs, concrete artifacts, implied confidence). Company-mode throughout: subject is `pouk.ai`. **Peer-grade register**: the page reads as a serious consultancy doing serious work — happy to be compared to larger firms on the merit of the work itself. **No proudness-of-smallness**: `small`, `boutique`, `scrappy`, `solo`, `one operator`, `humble`, `just me` are all banned in body copy. **No fake plurality**: `we`, `our team`, `we believe` are all banned. The work is named; the staffing is not.

- **Composition-aware writing**: copy continues to size to the v2.0 composition primitives (display statement at `--fs-display-lg`; supporting line at body scale with `--fg-on-warm-muted`; story body at `--fs-body` in `--hero-max` column; Pouākai unit unchanged). The composition revision in flight under `pouk-ai-designer` resolves the operator-line retirement only — the band, the portrait, the story body unit, and the Pouākai unit retain their composition spec.

- **What's deliberately gone from v2.0 → v2.1**:
  - No `Small consultancy. One operator.` (supporting line — retired).
  - No `Engagements are small and direct. pouk.ai works one team at a time.` (story body paragraph 2 — retired).
  - No `Founded and run by Arian Zargaran. Direct contact at hello@pouk.ai.` (operator-line surface — retired entirely).
  - No `small technical consultancy` / `One operator.` (meta description — rewritten).

- **What survives from v2.0**:
  - Display statement (`pouk.ai builds AI that ships.`) — unchanged.
  - Pouākai unit body — unchanged (verbatim carry-forward continues).
  - End CTA (`For inbound work, hello@pouk.ai.`) — unchanged.
  - Portrait alt (`Arian Zargaran, founder of pouk.ai. Cinematic editorial portrait, head-and-shoulders, saturated orange backdrop.`) — unchanged.
  - Portrait caption (`Arian Zargaran, founder.`) — unchanged.
  - Page title (`About — pouk.ai`) — unchanged.
  - Heading hierarchy — unchanged (one `<h1>`, one `<h2>`).

- **Assumptions** (flag in §7 if Arian wants to override):
  - Supporting line ships the deliverable-triple version (`Custom AI builds. Automations. Advisory engagements.`) — three short declaratives, same staccato rhythm as v2.0, zero staffing reference. Alternatives recorded in §5.
  - Operator line retires entirely (no body surface). Arian's name surfaces only via portrait caption, portrait alt, and JSON-LD `Person` schema. If founder prefers a thinner-than-v2.0 operator line as a compromise (e.g., a single 4-word caption-band like `Arian Zargaran, founder.` mirroring the portrait caption), drafter can rewrite — but the §7 question asks whether full retirement is correct.
  - Story body ships 2 short paragraphs (~95 words) — peer-grade, work-named, no staffing.
  - Meta description ships the deliverable-triple version mirroring the supporting line.

---

## 2. Copy

The page is **five compositional units in v2.1** (down from six in v2.0 — operator-line unit removed per spec §5 amendment in flight). Composition order: SiteShell top → portrait band (Hero with display statement + portrait + supporting line) → story body → Pouākai unit → end CTA → SiteShell footer. Copy below is the final string per unit, in the order the engineer wires.

### Block: pageTitle (spec §6.2)

- **Copy**: `About — pouk.ai`
- **Character count**: 16.
- **Carry-forward from v2.0**: unchanged. v1.0 Q4 em-dash separator holds; v2.0 carried forward; v2.1 carries forward.
- **Locked by**: spec §6.2, A14 (function-named, brand-suffixed).
- **Voice rationale**: A14 cedes the "Arian Zargaran" name-query SEO to LinkedIn / other indexed surfaces. The title is a page label, not a headline.

### Block: pageDescription (spec §6.2 — `<meta description>`)

- **Copy**: `pouk.ai is a technical consultancy that builds and ships AI work in production. Custom builds, automations, advisory. Direct contact at hello@pouk.ai.`
- **Character count**: 146 (under 155 SEO cap per agent §5.2).
- **Rewrites from v2.0**: v2.0 shipped `pouk.ai is a small technical consultancy that builds and ships AI work in production. One operator. Direct contact at hello@pouk.ai.` Both `small` and `One operator.` retire per founder positioning shift. v2.1 replaces them with the deliverable triple (`Custom builds, automations, advisory.`) — names what pouk.ai *does*, not how many people do it.
- **Locked by**: spec §6.2 — brand-voice rewrite mandated; ≤155 chars; declarative; no CTA verbs. v2.1 voice contract — no proudness-of-smallness; no staffing claim.
- **Voice rationale**: Three short declaratives, same rhythm as v2.0 but with the deliverable triple replacing the staffing claim. **Sentence 1** states the substantive fact — what pouk.ai *is* (a technical consultancy) and *does* (builds and ships AI work in production) — the substantive register a SERP visitor needs to register before the click. The word `technical` carries the credential (engineering-led, not deck-builder); the word `production` carries the criterion (work that ships, not work that gets recommended). **Sentence 2** names the three deliverable categories in compressed form (`Custom builds, automations, advisory.`) — the same triple shipping on `/` lede sentence 1 and now mirrored across the meta description, the supporting line, and the story body. **Sentence 3** carries the address — gives the SERP snippet a conversion path even if the click never lands. Brand-voice declarative throughout; no first-person; no fake plurality; no staffing claim; no proudness-of-smallness.

### Block: ogTitle (spec §6.2)

- **Copy**: `About — pouk.ai`
- **Locked by**: spec §6.2 — OG title matches `<title>`.

### Block: ogDescription (spec §6.2)

- **Copy**: `pouk.ai is a technical consultancy that builds and ships AI work in production. Custom builds, automations, advisory. Direct contact at hello@pouk.ai.`
- **Character count**: 146 (well under 200 OG cap).
- **Locked by**: spec §6.2 — OG description matches meta description.

### Block: displayStatement (composition Unit 2 — Hero title slot, the page's `<h1>`)

- **Copy**: `pouk.ai builds AI that ships.`
- **Word count**: 5 (well under 12-word cap).
- **Carry-forward from v2.0**: unchanged. The display statement was a v2.0 ratified call (Q1) and survives the v2.1 positioning shift because it carries zero size-claim — subject is `pouk.ai`, verb is `builds`, object is `AI that ships`. No `small`, no `one operator`, no staffing reference anywhere in the sentence.
- **Render note**: Set in `<Hero>` title slot at `--fs-display-lg` (clamp 4rem → 12rem). Instrument Serif italic *throughout the statement*. Color resolves to `--fg-on-warm` against the saturated orange backdrop. Sits left of the portrait in the band's two-column layout; vertically centered.
- **Carries**: the page's `<h1>`.
- **Locked by**: spec §5 display statement outcome; composition Unit 2 cap ≤12 words; brand-voice declarative.
- **Voice rationale (preserved from v2.0)**: Capability-led framing. Subject is `pouk.ai`. Verb is `builds` — operator-grade shipping verb. Object is `AI that ships` — names the discipline (AI work) and the criterion (it ships, not it gets recommended). At display scale the brand name + four-word claim is the page's editorial moment. v2.1 confirms: the line carries no size-claim, no staffing reference, no proudness register — it's a capability statement about *what gets done*, peer-grade with any larger consultancy that might make the same claim.

### Block: supportingLine (composition Unit 2 — Hero lede slot) — REWRITTEN v2.1

- **Copy**: `Custom AI builds. Automations. Advisory engagements.`
- **Word count**: 6 (well under 12-word cap).
- **Render note**: Set in `<Hero>` lede slot at `--fs-body` with `--fg-on-warm-muted` color against the orange backdrop. Single sentence (semantically three short declarative clauses separated by periods). Composition §2 Unit 2 brand notes still recommend ship.
- **Rewrites from v2.0**: v2.0 shipped `Small consultancy. One operator. Custom work in production.` (9 words, three declaratives). The first two clauses surfaced staffing as a brand claim — `Small consultancy` and `One operator` both retire per founder positioning shift. v2.1 replaces them with the three deliverable categories (`Custom AI builds. Automations. Advisory engagements.`) — same staccato rhythm, same compression, zero staffing reference. The third v2.0 clause (`Custom work in production.`) folds into the meta description; the supporting line is now purely the deliverable triple.
- **Locked by**: spec §5 supporting line outcome (≤12 words, single sentence, brand-voice); v2.1 voice contract — no staffing claim; no proudness-of-smallness.
- **Voice rationale (v2.1)**: Three short period-separated declaratives. **Each clause is one deliverable category**: *Custom AI builds* names the build engagement (the same noun phrase shipping on `/` lede); *Automations* names the automation engagement (singular plural — one or many); *Advisory engagements* names the advisory engagement (the third category from the home triple). The compressed register (period-separated declaratives, no commas) preserves the v2.0 staccato rhythm that the orange band + display statement context wants, but the substantive content is the work, not the staffing. The reader registers the three deliverable shapes in 3-5 seconds at body scale under the display statement — same scan-time as v2.0, mature register, zero size-claim. **Apple-mode parallel**: Apple's product pages name the work the device does, not the team that built it. The supporting line on `/about` v2.1 follows the same posture.

### Block: storyBody (composition Unit 3 — short brand-voice body block on `--bg`) — REWRITTEN v2.1

- **Render note**: Two short paragraphs, sans body type (`--fs-body`, 17-19px clamp), max-width `--hero-max` (608px), `--space-4` paragraph gap, no `<h2>` heading above. Begins immediately after the orange band (zero gap; the band's own `--space-24` bottom padding handles breathing). Ends with `--space-24` before the Pouākai unit. **v2.1 composition note**: with the operator line retired (composition §4 IA item 5), the story body's bottom margin connects directly to the Pouākai unit — designer composition in flight resolves the spacing.
- **Body** (brand-voice declarative; 95 words across 2 paragraphs):

> pouk.ai builds custom AI systems, automations, and advisory engagements for teams that need the work to run in production, not in a report. Modern AI tools collapse what used to take a dev team six months into days, sometimes weeks for the harder parts. A consultancy that has wired these tools into production codebases can do it again on a new team's stack — quickly, without a strategy retreat first.
>
> The work is engineered, shipped, and supported. Engagements deliver systems an in-house team can run, not decks that need translation. pouk.ai operates at company-grade depth and chases the kind of work that proves the discipline.

- **Word count**: 95 words (within composition §2 Unit 3 target ~60-90 [+5 over composition rec, on spec range] + spec §5 ~60-120; same upper-end positioning as v2.0).
- **Rewrites from v2.0**: v2.0 paragraph 1 sentence 3 said *"A small consultancy that has wired these tools into production codebases…"* — v2.1 drops `small` (`A consultancy that has wired these tools…`). v2.0 paragraph 2 said *"Engagements are small and direct. pouk.ai works one team at a time. The output is a system the in-house team can run, not a deck that needs translation."* — v2.1 rewrites the entire paragraph: drops `small and direct`, drops `one team at a time`, adds peer-grade trajectory language (`engineered, shipped, and supported`; `company-grade depth`; `chases the kind of work that proves the discipline`).
- **Locked by**: spec §5 supporting story outcome ("Tells the substantive story of pouk.ai *without* the founder-arc framing v1 used. Names what pouk.ai *does*, who it does it for, and what an engagement looks like in shape — not in detail"); composition §2 Unit 3 contract (brand-voice declarative, no first-person, no mailto inline, no `<h2>` above). v2.1 voice contract — no proudness-of-smallness; no staffing claim; no fake plurality.
- **Voice rationale (v2.1)**: Two paragraphs, each carrying one job. **Paragraph 1** (substantive what-pouk.ai-does claim) is structurally identical to v2.0 with one word removed — `small` strikes from sentence 3. The three deliverable categories (`custom AI systems, automations, and advisory engagements`), the audience handle (`teams that need the work to run in production, not in a report`), and the AI-tools-collapse claim (`Modern AI tools collapse what used to take a dev team six months into days, sometimes weeks for the harder parts`) all survive — they were never size-claims. The third sentence retains its substantive content (positioning pouk.ai as a re-applicator of the AI-tools-collapse capability) but drops the `small` qualifier; the sentence now reads as a category claim (`A consultancy that has wired these tools…`) rather than a self-description of scale. **Paragraph 2** (engagement-shape claim) is fully rewritten. The v2.0 version surfaced staffing twice (`small and direct`, `one team at a time`); v2.1 replaces both with work-substance — *engineered, shipped, and supported* is the lifecycle posture (the same three verbs that anchor `/principles`'s operating disciplines); *engagements deliver systems an in-house team can run, not decks that need translation* preserves the v2.0 anti-decker framing in declarative third-person; the closing sentence (*pouk.ai operates at company-grade depth and chases the kind of work that proves the discipline*) is the v2.1 load-bearing line — it states the peer-grade trajectory claim the founder positioning shift commissioned. **`company-grade depth`** signals "we hold up at the seriousness larger consultancies operate at"; **`chases the kind of work that proves the discipline`** signals trajectory (the company is in motion, not static) and proof-by-engagement (we earn the credential by doing the work, not by claiming it). **`The work is engineered, shipped, and supported.`** is verb-led, parallel-structured, and reads as a discipline list — peer-grade with any consultancy of any size. **Banned-word defense note (carried from v2.0)**: paragraph 2 uses *deck* in `not decks that need translation`. This is the brand-voice usage that ships on `/` lede and `/roles` body; it is anti-decker register, the precise inverse of marketing-speak. `Deck` is not on agent §4.4's banned list; it is a load-bearing brand term in pouk.ai's vocabulary.

### Block: operatorLine — RETIRED v2.1

- **Status**: RETIRED ENTIRELY. The composition §4 IA item 5 surface (operator-line as continuation, caption band, or dedicated band) removes from `/about` v2.1.
- **Rationale**: Founder positioning shift on 2026-05-18 evening — "I am not aligned with the claim and constant proudness of the sole operator." The v2.0 operator line (`Founded and run by Arian Zargaran. Direct contact at hello@pouk.ai.`) named the operator in body copy as a way to answer the v1-era "who exactly will reply to my email?" question. Under the v2.1 maturity register, that question is no longer the page's job — the page reads as a company, not as an operator-with-a-brand. The operator-identification load transfers to:
  - **Portrait caption** (`Arian Zargaran, founder.`) — surfaces the founder name + role in 3 words, below the portrait.
  - **Portrait alt text** (`Arian Zargaran, founder of pouk.ai. …`) — surfaces the founder name + role + brand for screen readers and as a search-engine signal.
  - **JSON-LD `schema.org/Person` schema** — engineer-wired, structured data only (Google's lane). Fields: `name`, `jobTitle`, `url`. No `worksFor`, no `sameAs` (spec §6.2 A15 carries forward).
- **Spec amendment in flight**: PM is amending spec §5 to remove the operator-line surface from the content requirements and §8 ACs to remove the AC that named the operator-line presence. This content draft ships against the retirement; PM's amendment catches up.
- **Composition amendment in flight**: designer is revising composition §4 IA item 5 (operator-line treatment options) and §2 Unit 3 brand notes (operator-line continuation pattern). The story body now connects directly to the Pouākai unit; designer resolves spacing.
- **Drafter records the absence** so a future engineer reading this draft sees the explicit retirement decision, not just an omission. A future revision that proposes re-adding the operator line is a re-spec, not a copy revision — the retirement is positioning-led, not preference-led.

### Block: poukaiUnit (composition Unit 4 — Pouākai origin section)

- **Carry-forward from v2.0 (and from v1)**: unchanged. Verbatim per composition §2 Unit 4 content slot lock + spec §10 A7 revision. The section is brand-voice declarative throughout, carries zero operator framing, and lands at the right register under the v2.1 positioning shift without revision.

- **Render note**: Standalone section, `--space-24` from the story body. `<h2>` heading at `--fs-tagline-intimate` Instrument Serif italic. Anchor `id="poukai"`. Body in single `<p>`, `--fs-body`, max-width `--hero-max`. Bottom margin `--space-16` before end CTA.
- **Heading**: `Pouākai` (1 word)
- **Heading render**: `<h2>`, Instrument Serif italic at `--fs-tagline-intimate`. Macron preserved (literal `ā` or HTML entity `&#257;` — engineer's call).
- **Anchor slug**: `#poukai`
- **Body** (brand-voice declarative; three sentences; 75 words — verbatim from v1 and v2.0):

> Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height. The name comes from Māori tradition; the bird is real, extinct for around six hundred years, and the spelling carries the macron it was given. pouk.ai borrows the name as a reference point — a hunter that worked by altitude and timing — and stops there: no Māori visual motifs in the brand, no claim to the culture, no metaphor stretched past the one-line origin.

- **Word count**: 75 words. Three sentences.
- **Verbatim lock**: Sentence 1 is the R27 string migrated from `/` lede sentence 2 under v1's atomic migration. Sentences 2 and 3 are v1.0 drafter's composition (founder-approved 2026-05-18 morning). The full three-sentence body carries forward verbatim from v1 → v2.0 → v2.1. Macron preservation discipline: `Pouākai` (with macron), never `Pouakai`.
- **Voice rationale (preserved from v1 / v2.0)**: Brand-voice declarative throughout. Fact-led origin; Māori source acknowledgment; respect posture as a discipline list. The brand earns the name by not over-explaining it. The Pouākai unit reads as voice-continuous with the story body under v2.1's peer-grade register — both are brand-voice declarative; both name substantive content; neither carries a staffing claim.

### Block: endCta (composition Unit 5 — single muted line, brand-voice / second-person)

- **Carry-forward from v2.0**: unchanged. The end CTA was a v2.0 ratified call (Q4 → CTA copy only, the operator line half retires separately) and survives the v2.1 positioning shift because `For inbound work, hello@pouk.ai.` is brand-voice neutral — names the page's job (inbound surface), carries zero staffing reference, zero size-claim, zero proudness register.

- **Render note**: Optional hairline above (`border-block-start: 1px solid var(--hairline)`, designer recommends yes for `/principles` rhythm parity). `<p>` at `--fs-body`, color `--fg-muted`, sans Geist. `--space-12` padding above + `--space-16` below to `.site-page` bottom padding.
- **Copy**: `For inbound work, ` `<a href="mailto:hello@pouk.ai">hello@pouk.ai</a>` `.`
- **Rendered line**: `For inbound work, hello@pouk.ai.`
- **Word count**: 6 words including the address.
- **Differentiation from sibling end-CTAs** (drafter cross-checked; unchanged from v2.0):
  - `/why-ai`: `Want to start that conversation? hello@pouk.ai` — question + answer shape.
  - `/roles`: `Not sure which fits? Describe your situation and we'll work it out together. hello@pouk.ai →` — diagnostic + co-investigation shape.
  - `/principles`: `If this is the kind of partner you want, hello@pouk.ai` — conditional-acceptance shape.
  - `/404` v1.1: `Return to pouk.ai →` — salvage-to-home shape (non-mailto).
  - `/about` v2.1: `For inbound work, hello@pouk.ai.` — context-of-purpose shape.
- **Locked by**: spec §5 end CTA outcome + composition §2 Unit 5 contract.
- **Voice rationale (preserved from v2.0)**: Five words plus the address. Names the purpose ("inbound work" = engagement inquiries arriving at this surface, not vendor pitches or press). Brand-voice / second-person register — no first-person; no staffing reference; no size-claim. v2.1 confirms: `inbound work` is a mature register choice — peer-grade with larger consultancies that also distinguish inbound-engagement from outbound-marketing.

### Block: portraitAlt (composition Unit 2 portrait + spec §6.1 alt-text contract)

- **Carry-forward from v2.0**: unchanged. The portrait alt was a v2.0 ratified call (Q3) and survives the v2.1 positioning shift because *founder* is a role-naming term, not a size-claim — the alt names the named entity (Arian Zargaran), his role (founder of pouk.ai), and the visual register (cinematic editorial portrait, head-and-shoulders, saturated orange backdrop). None of these are proudness-of-smallness claims.

- **Render note**: `alt` attribute on the `<img>` element. Substantive, not decorative.
- **Copy**: `Arian Zargaran, founder of pouk.ai. Cinematic editorial portrait, head-and-shoulders, saturated orange backdrop.`
- **Character count**: 102 (under 120 cap per spec §6.1 alt contract).
- **Locked by**: spec §6.1 alt-text contract.
- **Voice rationale (preserved from v2.0)**: Three substantive parts — subject, register, backdrop. v2.1 note: the alt is now one of the two body-adjacent surfaces (along with the portrait caption) that surface Arian's name, since the operator line in body copy retires. The alt's job widens slightly under v2.1 — it carries the named-individual signal that v2.0 split across alt + operator line. The character count holds well under the 120-char cap with room for the AI-disclosure swap if Arian ever reverses Q3.

### Block: portraitCaption (composition Unit 2 portrait caption + spec §5 caption)

- **Carry-forward from v2.0**: unchanged. The portrait caption was a v2.0 ratified call (implicit — not a numbered Q, but founder-approved as drafter's recommended option) and survives the v2.1 positioning shift. *Founder* is role, not size-claim; *Arian Zargaran* names the named entity. Neither is proudness-of-smallness.

- **Render note**: Single line in `--fg-muted` at meta type, brand-voice. Composition §2 Unit 2 + spec §5 cap at ≤12 words.
- **Copy**: `Arian Zargaran, founder.`
- **Word count**: 3 words.
- **Locked by**: spec §5 portrait caption outcome.
- **Voice rationale (preserved from v2.0)**: Three words. Names the subject (the operator) and the role (founder), nothing more. The portrait does the rest. v2.1 note: the caption + alt now jointly carry the founder-identification load that v2.0 split across three surfaces (caption + alt + operator line). The three-word caption holds — adding "of pouk.ai" or "founder & operator" would push back into proudness-of-staffing register.

### Block: footerLines (rendered by `SiteShell` via `ShellWrapper.tsx`)

- **Copy**: `© 2026 pouk.ai · hello@pouk.ai`
- **Render note**: Global `SiteShell` footer, identical to other pages. Not authored on `/about` specifically.
- **Locked by**: composition §2 Unit 1.

---

## 3. Page-level SEO copy

- **`<title>`**: `About — pouk.ai` (16 chars)
- **`<meta name="description">`**: `pouk.ai is a technical consultancy that builds and ships AI work in production. Custom builds, automations, advisory. Direct contact at hello@pouk.ai.` (146 chars)
- **OG title**: matches `<title>` — `About — pouk.ai`.
- **OG description**: matches meta description (146 chars, well under 200 OG cap).
- **OG image**: reuses `public/og.png` (spec §6.2 — `/about`-specific OG card deferred to v3).
- **Canonical**: `https://pouk.ai/about` (trailing-slash policy matches existing pages).
- **JSON-LD**: standalone `schema.org/Person` schema only (A15 holds in v2.1). Fields: `name`, `jobTitle`, `url`. No `worksFor`, no `sameAs`. The schema is now the **only** structured surface where Arian's name + role appear outside the portrait alt and caption; under v2.1 the JSON-LD carries the load that v2.0 split across JSON-LD + body operator line.
- **Heading hierarchy**: exactly one `<h1>` (the display statement); exactly one `<h2>` (Pouākai). No `<h3>` or deeper. No `<h2>` above the story body. Standards R-026 (HARD) — no level skipped.

---

## 4. Voice rationale

Anchored per significant line so future revisions argue against reasons, not vibes.

- **Display statement — `pouk.ai builds AI that ships.`** Preserved verbatim from v2.0. Capability-led declarative. Subject is `pouk.ai`, verb is `builds`, object is `AI that ships`. Zero size-claim, zero staffing reference. The line is peer-grade with any consultancy of any size that wants to make the same capability claim — the difference is whether the body backs it. v2.1's story body backs it without invoking staffing.

- **Supporting line — `Custom AI builds. Automations. Advisory engagements.`** v2.1 rewrite. Three short period-separated declaratives, one deliverable category per clause. Mirrors `/` lede sentence 1's triple (`custom AI systems, automations, and advisory engagements`). The compressed staccato register survives from v2.0; the substantive content shifts from staffing-claim to work-claim. Each clause is falsifiable on click — the story body names what each engagement looks like in shape.

- **Story body paragraph 1 — `pouk.ai builds custom AI systems, automations, and advisory engagements…`** Preserved from v2.0 with one word struck (`small` removed from sentence 3). The substantive claim survives intact (modern AI tools collapse months into days; a consultancy that has wired these tools into production can do it again). The v2.1 version reads peer-grade — `A consultancy that has wired these tools…` is a category claim about pouk.ai's capability, not a self-description of scale.

- **Story body paragraph 2 — `The work is engineered, shipped, and supported. Engagements deliver systems an in-house team can run, not decks that need translation. pouk.ai operates at company-grade depth and chases the kind of work that proves the discipline.`** v2.1 rewrite. Three sentences, each carrying one job. **Sentence 1** is the lifecycle claim — `engineered, shipped, and supported` is a verb-led triple that names the full engagement arc (build, deliver, sustain) without naming a team. Peer-grade with any consultancy of any size; the verbs do the credentialing. **Sentence 2** preserves the v2.0 anti-decker framing (`systems an in-house team can run, not decks that need translation`) in declarative third-person — pouk.ai names what it delivers and what it doesn't, both without first-person and without staffing reference. **Sentence 3** is the load-bearing v2.1 line — `operates at company-grade depth` signals peer-grade-with-larger-firms; `chases the kind of work that proves the discipline` signals trajectory (the company is happy to chase growth, per founder positioning); `the discipline` references the operating discipline `/principles` documents (cross-page register coherence). The closing sentence carries the founder's company-maturity positioning verbatim in posture (not in literal language).

- **Operator line — RETIRED v2.1.** v2.0 carried `Founded and run by Arian Zargaran. Direct contact at hello@pouk.ai.` as the page's named-individual identification surface. v2.1 retires the body surface entirely; the founder-identification load transfers to portrait caption + portrait alt + JSON-LD `Person` schema. The retirement is positioning-led: the page reads as a company, not as an operator-with-a-brand. PM is amending spec §5 + §8 ACs to reflect.

- **Pouākai unit body** — verbatim from v1 and v2.0. Rationale carried forward.

- **End CTA — `For inbound work, hello@pouk.ai.`** Preserved verbatim from v2.0. `inbound work` is mature register — peer-grade with larger consultancies that distinguish inbound from outbound. No first-person, no staffing reference, no size-claim. Differentiated from `/principles` (conditional acceptance), `/why-ai` (question), `/roles` (diagnostic), `/about` v1 (conditional fit), `/404` (salvage).

- **Portrait alt — `Arian Zargaran, founder of pouk.ai. Cinematic editorial portrait, head-and-shoulders, saturated orange backdrop.`** Preserved verbatim from v2.0. `founder` is role, not size-claim. The alt now carries widened identification load under v2.1 (it's one of two body-adjacent surfaces, along with the caption, that surface the founder's name).

- **Portrait caption — `Arian Zargaran, founder.`** Preserved verbatim from v2.0. Three-word name + role. Joint identification load with the alt.

- **Meta description — `pouk.ai is a technical consultancy that builds and ships AI work in production. Custom builds, automations, advisory. Direct contact at hello@pouk.ai.`** v2.1 rewrite. Three short declaratives. Drops `small` (sentence 1) and `One operator` (sentence 2 in v2.0). Sentence 1 names what pouk.ai *is* (a technical consultancy) and *does* (builds and ships AI work in production); sentence 2 names the three deliverable categories (mirrors the supporting line); sentence 3 carries the address. Peer-grade register; zero staffing claim.

---

## 5. Headline alternatives (high-stakes lines)

Per agent §6, high-stakes lines ship with three labelled options. Recommended option is the one wired in §2 above.

### Display statement (page `<h1>`)

Unchanged from v2.0 alternatives table — `pouk.ai builds AI that ships.` survives v2.1 positioning shift verbatim.

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Technical consulting that uses AI to ship.` (7 words) | Direct echo of `/` page title. | Reads as a tagline already in use on `/`. |
| Sharpest (shipping) | `pouk.ai builds AI that ships.` (5 words) | Capability-led. Subject + verb + object in 5 words. Zero size-claim — peer-grade with any consultancy. | The phrase "AI that ships" risks reading slogan-y at body scale — but at `--fs-display-lg` it reads as a declaration. |
| Weirdest | `One operator. AI work, in production.` (6 words) | Period-separated declaratives at display scale. | **REJECTED IN v2.1**: `One operator` is now a banned staffing claim per founder positioning shift. Was rejected on losing-the-verb grounds in v2.0; rejected harder in v2.1. |

### Supporting line (Hero lede) — v2.1 alternatives

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Production AI work for serious teams.` (6 words) | Comma-free declarative. Names deliverable shape + audience handle in one breath. | The "serious teams" handle reads as a peer-claim (we work with serious teams) which is on-register but slightly less compressed than the three-deliverable triple. |
| Sharpest (recommended, shipping) | `Custom AI builds. Automations. Advisory engagements.` (6 words) | Three short declaratives — one deliverable category per clause. Mirrors `/` lede triple. Compressed register preserves v2.0 staccato rhythm. Zero staffing reference. | The triple register is now familiar across `/` and `/about` v2.1 — risks reading as repetition rather than coherence. Mitigated — the triple is the brand's preferred deliverable handle; cross-page consistency is correct. |
| Weirdest | `Engineered, shipped, supported.` (3 words) | Verb-led triple. The lifecycle posture compressed to its irreducible form. Names what pouk.ai *does* through engagement, not what it delivers as artifact. | Three words at body scale on the orange band reads as a tagline rather than a lede — the band wants the longer lede form. Rejected on grounds of under-supplying the band's first-impression window. |

### Story body paragraph 2 closing sentence — v2.1 alternatives

The load-bearing v2.1 line. Three options for the founder positioning shift's articulation in body copy.

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `pouk.ai operates at the level of a larger consultancy.` (9 words) | Direct peer-claim. Names the comparative posture explicitly. | Reads as a competitive jab — the page reaches out to compare itself to larger firms. Founder positioning says peer-grade, not competitive. |
| Sharpest (recommended, shipping) | `pouk.ai operates at company-grade depth and chases the kind of work that proves the discipline.` (15 words) | Two-clause sentence. Clause 1 (`operates at company-grade depth`) signals peer-grade; clause 2 (`chases the kind of work that proves the discipline`) signals trajectory + proof-by-engagement. Both founder positioning verbs land. | 15 words is the longest sentence in the v2.1 body — risk of over-explanation. Mitigated — the sentence carries the v2.1 load-bearing claim and earns the length. |
| Weirdest | `The work is the credential.` (5 words) | Five-word maxim. The most compressed possible articulation of "we earn it by doing it." | Reads as slogan; on a serious-company page, a slogan-closing line breaks the brand-voice declarative discipline. Rejected. |

### End CTA — preserved from v2.0

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `Inbound at hello@pouk.ai.` (3 words + address) | Maximally muted. | Drops the framing word; reader doesn't know what kind of inbound. |
| Sharpest (shipping) | `For inbound work, hello@pouk.ai.` (5 words + address) | Names the purpose without conditional. Brand-voice neutral; zero staffing reference. | Brevity depends on body doing the qualifying work. The v2.1 body does. |
| Weirdest | `pouk.ai takes inbound at hello@pouk.ai.` (6 words) | Brand-name-as-subject all the way to CTA. | Repeats `pouk.ai` three times. Rejected. |

### Meta description — v2.1 alternatives

| Option | Copy | Rationale | Risk |
|---|---|---|---|
| Safest | `pouk.ai is a technical consultancy. Custom AI builds, automations, advisory. Production work. Direct contact at hello@pouk.ai.` (113 chars) | Compressed; mirrors the supporting line + display statement together. | Slightly choppy at SERP scale; four short sentences instead of three. |
| Sharpest (recommended, shipping) | `pouk.ai is a technical consultancy that builds and ships AI work in production. Custom builds, automations, advisory. Direct contact at hello@pouk.ai.` (146 chars) | Three substantive sentences. Front-loads brand-name + capability. Ends on the address. Peer-grade register; zero staffing. | 146 chars is close to the 155 cap — but well within Google's mobile-truncation window for the substantive first 90 chars. |
| Weirdest | `A technical consultancy. Custom AI builds, automations, advisory. Production work, shipped. hello@pouk.ai.` (95 chars) | Drops the `pouk.ai is` subject; reads as ad-copy fragments. | Subject-less; reads as a marketing card rather than a description. Rejected. |

### Portrait caption — preserved from v2.0

Unchanged. `Arian Zargaran, founder.` survives v2.1 positioning shift.

---

## 6. Composition-fit flags

Flags for `pouk-ai-designer` (composition v2 Approved; v2.1 thin revision in flight) and `pouk-ai-engineer` (revising PR #30 build pass against this content draft).

### Flag 1 — Operator-line surface retirement (NEW v2.1, primary composition impact)

- **The constraint**: composition §4 IA item 5 specified the operator line as a continuation, caption band, or dedicated band treatment between the story body and the Pouākai unit. v2.1 retires the surface entirely.
- **The copy implication**: the story body's bottom margin (`--space-24` per composition §2 Unit 3) now connects directly to the Pouākai unit's top margin. Designer composition resolves whether the existing `--space-24` is the right rhythm or whether the absence of the operator line wants a different breathing value (e.g., `--space-16` for tighter rhythm or `--space-32` for more pronounced section break).
- **PR #30 impact**: if PR #30 already wired the v2.0 operator line as JSX/Astro template, the engineer removes the element entirely on the v2.1 revision pass. Drafter recommends the engineer treat this as a deletion, not a rewrite — the surface goes, the surrounding composition spacing tightens up.
- **Spec amendment in flight**: PM amending spec §5 (drop operator-line outcome) + §8 ACs (drop operator-line presence/uniqueness ACs); content draft ships against the amendment.

### Flag 2 — Story body word count (UPDATED v2.1)

- **The constraint**: composition §2 Unit 3 target ~60-90 words; spec §5 target ~60-120 words.
- **The current copy (v2.1)**: 95 words across 2 paragraphs (was 91 in v2.0; +4 net — paragraph 2 rewrite added 4 words on balance).
- **The flag**: 5 words over composition's upper target, well within spec's range. The paragraph 2 closing sentence (`pouk.ai operates at company-grade depth and chases the kind of work that proves the discipline.`) at 15 words is the load-bearing v2.1 line — trimming would lose the founder positioning's posture. Drafter recommends keep at 95.
- **Resolution**: composition's 60-90 target is a recommendation, not a hard cap; spec's 60-120 range is authoritative. 95 words is on-spec.

### Flag 3 — Operator-line treatment options retire (RETIRED v2.1)

- **The constraint (v2.0)**: composition §4 IA item 5 named three treatment options. Designer's call.
- **v2.1 update**: the surface retires entirely (see Flag 1). The three treatment options no longer apply. Composition §4 IA item 5 retires in the parallel composition revision.

### Flag 4 — Mailto count drops from 2 to 1 on body (UPDATED v2.1)

- **The constraint (v2.0)**: two body mailtos — operator line (`Direct contact at hello@pouk.ai.`) and end CTA (`For inbound work, hello@pouk.ai.`). Footer mailto carried a third instance.
- **The current copy (v2.1)**: one body mailto — end CTA only. Operator-line mailto retires with the surface.
- **The implication**: the end CTA is now the *only* body-level mailto on `/about` v2.1. The footer mailto carries the second instance. v2.1 reduces mailto-redundancy and concentrates the conversion path on a single body line — composition-cleaner, brand-voice-restrained.
- **Resolution**: no copy-side flag; just confirming the count reduction and recording it.

### Flag 5 — Portrait alt-text AI lineage disclosure (preserved from v2.0)

- **The constraint**: spec §6.1 — alt text may carry more disclosure than visible caption.
- **The current copy**: alt text says `Cinematic editorial portrait` — names the visual register without surfacing AI lineage.
- **The flag**: v2.1 holds the v2.0 ratified call (Q3 — DO NOT DISCLOSE). The alt's identification load widens slightly under v2.1 (operator line retires; alt + caption now jointly carry the founder-identification signal) but the AI-disclosure question is independent of that load shift.

### Flag 6 — Banned-word + register clean (UPDATED v2.1 with new bans)

- **The constraint (v2.1)**: agent §4.4 banned marketing-speak + v2.1 voice contract additions — no `small`, `tiny`, `boutique`, `scrappy`, `solo`, `one operator`, `just me`, `small but mighty`, `humble` as self-descriptors. No fake plurality `we`, `our team`, `we believe`.
- **The current copy**: clean on both axes.
  - Agent §4.4 ban: no `leverage`, `synergy`, `ecosystem`, `paradigm`, `cutting-edge`, `next-generation`, `revolutionary`, `transformative`, `seamlessly`, `effortlessly`, `robustly`, `empower`, `unlock`, `supercharge`, `unleash`, `elevate`, `passionate about`, `we love`, `journey`, `solutions` (as a noun) anywhere on `/about` v2.1.
  - v2.1 staffing-ban: no `small`, `tiny`, `boutique`, `scrappy`, `solo`, `one operator`, `just me`, `small but mighty`, `humble`, `our team`, `we believe` in any rendered surface. The word `we` appears zero times in rendered copy. The word `I` appears zero times in rendered copy.
- **The flag**: v2.0 carried `small` once (paragraph 1 sentence 3: "A small consultancy that has wired…") and `Small consultancy. One operator.` in the supporting line and `small and direct` + `one team at a time` in paragraph 2 and `small technical consultancy. One operator.` in the meta description — total 5 size-claim instances. v2.1 has zero. **The page is clean for both bans.**

### Flag 7 — Color-match QA gate (engineer-side, preserved from v2.0)

- Unchanged. Engineer-side QA fix; copy holds either way.

---

## 7. Open questions for Arian

Specific decisions that would close the v2.1 draft to `Approved`. Kept tight per agent §6.

- **Q1 — Supporting line: ship the three-deliverable triple, or one of the alternatives?** Drafter ships `Custom AI builds. Automations. Advisory engagements.` (6 words, three declaratives, mirrors `/` lede triple). Alternatives in §5: `Production AI work for serious teams.` (6 words, comma-free single declarative — names audience + deliverable but slightly less compressed) or `Engineered, shipped, supported.` (3 words, verb-led — too tight for the band's first-impression window). Drafter recommends the deliverable triple as shipped.

- **Q2 — Operator-line full retirement: correct, or compromise to a thin caption-band?** Drafter ships full retirement per founder positioning shift. Spec amendment in flight removes the surface. The founder-identification load transfers to portrait caption + portrait alt + JSON-LD. If founder prefers a thinner-than-v2.0 compromise (e.g., a 4-word caption-band somewhere — `Arian Zargaran, founder.` mirroring the portrait caption, but as a body unit rather than a portrait caption), drafter can rewrite. Drafter recommends full retirement — the portrait caption already carries the founder name + role in 3 words; a body-copy duplicate would re-introduce the operator-as-page-focus framing that v2.1 retires.

- **Q3 — Story body paragraph 2 closing sentence**: drafter ships `pouk.ai operates at company-grade depth and chases the kind of work that proves the discipline.` (15 words). The load-bearing v2.1 line. Alternatives in §5: a direct peer-claim version (`pouk.ai operates at the level of a larger consultancy.` — reads as competitive jab) or a five-word maxim (`The work is the credential.` — reads as slogan). Drafter recommends the shipping version — the 15-word two-clause sentence carries both peer-grade and trajectory in one breath without becoming competitive or sloganeering.

- **Q4 — Meta description**: drafter ships `pouk.ai is a technical consultancy that builds and ships AI work in production. Custom builds, automations, advisory. Direct contact at hello@pouk.ai.` (146 chars). Alternatives in §5: a shorter 113-char version (`pouk.ai is a technical consultancy. Custom AI builds, automations, advisory. Production work. Direct contact at hello@pouk.ai.` — choppier rhythm) or a subject-less 95-char fragment version (rejected on grounds of reading as marketing-card register). Drafter recommends the shipping version.

- **Q5 — Story body paragraph 2 sentence 1 verbs**: drafter ships `The work is engineered, shipped, and supported.` Three-verb lifecycle. Alternative considered: a two-verb compression (`The work is engineered and shipped.` — drops support, loses the sustain claim that distinguishes pouk.ai from build-and-leave consultancies). Drafter recommends the three-verb version — `supported` is the load-bearing differentiator from drop-and-walk shops.

If Arian confirms Q1-Q5 without changes, the draft moves to `Approved` without copy revision. If any swap, drafter revises in place.

Two PM-side / designer-side items remain open and are flagged for the parallel tracks:

- **PM follow-up — Amend spec §5** to drop the operator-line content requirement and **amend spec §8** to drop the operator-line presence/uniqueness ACs. **Amend spec voice-contract bans** to add `small`, `boutique`, `solo`, `one operator`, `we`, `our team`, etc. per the v2.1 voiceContract.newBansAddedInV2_1 frontmatter list.
- **Designer follow-up — Revise composition §4 IA item 5** (operator-line treatment options retire) **and §2 Unit 3 brand notes** (operator-line continuation pattern retires; story body bottom margin connects directly to Pouākai unit; designer picks new spacing value).

---

## 8. Out of scope

- **Proudness-of-smallness in any form.** v2.1 voice contract bans `small`, `tiny`, `boutique`, `scrappy`, `solo`, `one operator`, `humble`, `just me`, `small but mighty`, `small but serious` as self-descriptors. The work is named; the staffing is not.
- **Fake plurality.** No `we`, `our team`, `we believe`, `we love`. Single-operator company writing as `we` is dishonest; v2.1 ships brand-voice declarative (subject = `pouk.ai`) instead.
- **Founder-arc content.** Per spec §10 + A10 retirement (v2). No "I came up writing frontend code," no "I watched this happen," no past-employer references, no years-of-experience claims.
- **First-person "I" anywhere on the rendered page.** Per spec §5 + §8 ACs + A5 retirement (v2).
- **Operator-line body surface.** RETIRED in v2.1 per founder positioning shift. Arian's name surfaces only via portrait caption + portrait alt + JSON-LD `Person` schema. Spec §5 + §8 ACs amended in parallel.
- **Direct peer-claim language** ("we operate at the level of a larger consultancy"). Reads as competitive jab. Founder positioning is peer-grade, not competitive. v2.1 ships `operates at company-grade depth` (state-of-being, not comparative) instead.
- **Aspirational verbs.** No `helps`, `enables`, `empowers`, `unlocks`. v2.1 verbs are flat present-tense declaratives: `is`, `builds`, `collapse`, `delivers`, `operates`, `chases`.
- **A second visual asset.** Per spec §10 + §12. The Direction Y portrait remains the single asset.
- **Saturation extending onto the page surface as a backdrop band.** Per spec §4 PM position — contained inside portrait asset bounding box.
- **LinkedIn / X / GitHub URLs anywhere.** Per spec §10 + A15.
- **A contact form, scheduling widget, or non-`mailto:` conversion path.** Per spec §10.
- **A reading-time indicator, author byline, table of contents.** Per spec §10 + spec §12.
- **Translation into other languages.** English-only at v2.1 per spec §10.
- **A `/about`-specific OG image.** Per spec §6.2 + §12.
- **Cross-page revisions to `/`, `/why-ai`, `/roles`, `/principles` triggered by v2.1 positioning shift.** Per spec §12 (v2 holds). v2.1 of `/about` retires staffing-as-brand-claim on this page only; other pages may need a voice-pass to align (e.g., `/` lede currently has zero staffing claim and is already on-register; `/why-ai` / `/roles` / `/principles` to be audited separately). Not in scope for this draft.
- **The Gemini sparkle glyph as a visible page element.** Per spec §10 + §12.
- **Motion on the portrait.** Per spec §10 + composition §4. Static; only `<Hero entrance="stagger">` on the display statement.
- **An `/about/v2` archive page or redirect.** Per spec §12. v2.0 was Approved but never shipped; v2.1 replaces v2.0 in the content-draft lane in place.
