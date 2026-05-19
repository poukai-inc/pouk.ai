# Spec: About

**Route**: `/about`
**Version**: v2.1 (supersedes v1; v2.0 → v2.1 amendment 2026-05-18 evening retires sole-operator framing from the page surface)
**Status**: Approved (v2.1 — 2026-05-18 evening). Founder ratification: 2026-05-18 evening — positioning amendment ratified in the same breath as authorised. Designer composition v2 also Approved. Content draft v2.1 (rewrite from v2.0 to apply the brand-positioning amendment) + portrait asset + DS-side acceptances are the remaining ship-gates.
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-18 evening
**Masterplan reference**: Sections 2A (decision authority — routes are site-owned), 4.1 (site layout), 7.3 (illustration vs. photography deferral — *re-opened by v2 per founder decision*), §5 of the agent instructions (brand context)
**Interview record**: A1–A18 in the original `/about` PM interview thread on 2026-05-17/18 (v1 rationale); plus `meta/proposals/about-v2-recalibration.md` revision 2 (v2.0 rationale); plus founder decision message on 2026-05-18 evening locking Direction A + Direction Y portrait + green-light to author v2.0; plus founder positioning amendment in the same evening retiring sole-operator framing (v2.0 → v2.1). Founder verbatim on the amendment: *"I am not aligned with the claim and constant proudness of the sole operator. I believe in a company that shows maturity, that's happy to sit by the same table of companies bigger than itself, that's happy to chase growth."*
**Coupled deliverables (atomic with this spec landing)**:
- `meta/compositions/pages/about.md` — designer revision (parallel track; v2 composition recipe replaces v1 verdict (ii)).
- `meta/content/drafts/pages/about.md` — content draft v2.0 (brand-voice rewrite; v1.0 is superseded).
- `meta/proposals/about-illustration-v2.md` — status moves from `Draft (parked)` to `Draft (active)` and gets a real spec revision per `meta/compositions/proposals/about-v2-explorations.md` §4 trigger.
- Six DS-side proposals in `meta/proposals/ds-side/` may land alongside this spec:
  - Three pre-existing v1 forward-looking proposals (`hero-no-title-variant.md`, plus any other DS-side files already on disk).
  - Three new proposals filed by designer parallel track: `section-surface-rhythm.md`, `statement-molecule.md`, `type-display-scale.md`.
  - All six are forward-looking — engineer builds against whichever shape lands when each proposal is accepted by `@poukai-inc/poukai-ui` maintainers. See §9 dependencies.

---

## 0. v1 → v2 status

**v1 status**: `Approved` (2026-05-18 morning) → `Superseded` on this spec's ratification (status change pending). The v1 page is still live in production at `/about` until v2 ships atomically. v1's interview record (A1–A18) is preserved in §10 for historical reference; v1's resolved decisions that **survive v2** are inventoried in §11.

**Why v2 supersedes v1**: founder reviewed v1 on 2026-05-18 morning and flagged two structural failures — wall-of-text density and personal-not-company voice. The recalibration proposal at `meta/proposals/about-v2-recalibration.md` evolved through two revisions and a founder decision on 2026-05-18 evening that locks four things:
1. **Direction A** (single-statement display lead) from the designer's composition explorations memo.
2. **Direction Y (computational portraiture)** — *founder-revised definition*: AI-generated editorial portrait of Arian, saturated orange backdrop, navy blazer over black turtleneck, cinematic side-lighting, single subject head-and-shoulders, contemplative off-frame gaze, Gemini sparkle glyph visible in source artifact. **First saturated color on the brand.** This redefines "Direction Y" away from the designer memo's original ASCII-portraiture sketch.
3. **Green light** to author this spec.
4. **DS-gap routing approved** — three new designer DS-side proposals filing as GH issues.

## 1. Purpose

`/about` is pouk.ai's stance, rendered. It says what pouk.ai *is* as a company — a technical consultancy that builds and ships AI work in production — in the brand's own voice, anchored by a single editorial portrait. The page closes the company-introduction question for prospects who have read at least one other page and want company-grade clarity before writing. Its trust-loop sibling is `/principles`: `/principles` says how pouk.ai works; `/about` says who pouk.ai is.

The register the page reaches for is **mature company**: confident without claim-stretching, peer-grade with larger competitors, growth-chasing without performative ambition. **Apple-mode register, not "small company that could" register.** Per the v2.1 positioning amendment (2026-05-18 evening, founder), the page does not claim sole-operator framing, scrappy framing, boutique framing, or any proudness-of-smallness register. It also does not fake plurality — there is no "we"-as-team unless and until the company has a team. The voice is subject-led (`pouk.ai builds…`, `pouk.ai works with…`) and brand-voice declarative throughout. See §5 voice contract for the locked language ban.

`/about` is also the **register-lead surface for the site**. Per the founder's decision recorded in `meta/proposals/about-v2-recalibration.md` revision 2, `/about` is the first page of its class — the rest of the four pages (`/`, `/why-ai`, `/roles`, `/principles`) iterate *toward* `/about`'s register over time. v2 is class-defining, not class-conforming.

## 2. Audience

- **Primary**: A prospect who has read at least one other page on the site and is asking "what kind of company is this?" — what pouk.ai stands for, what it does, what it does not do. They want company-grade clarity, not personal-blog warmth. They make the conversion decision (write the email or not) shortly after `/about`.
- **Secondary**: A referrer about to make an intro who wants a single canonical URL to attach to a DM, email signature, or LinkedIn reply. Per the visitor-to-conversation flow (A13 v1, holds in v2), `/about` is the recommended primary URL for referrer-intro, founder-DM, and email-signature contexts.
- **Tertiary** (new in v2): A prospect deciding whether to write *at all*. v1 spent its prose proving Arian is real; v2 spends its composition + portrait proving pouk.ai is *considered* — a company that has thought about itself, with a clear stance and a face.

## 3. Success criteria

- **Behavior**: The visitor lands, registers the display statement in under five seconds, scans the portrait and supporting prose in under sixty seconds, and either (a) emails `hello@pouk.ai` with higher conviction than they had pre-`/about`, (b) sends the URL to a colleague as part of a referral, or (c) closes the tab with company-mode trust banked for a later email. Read-target total: **60–90 seconds**, down from v1's ~2-minute prose target.
- **Signal**: Qualitatively — inbound emails reference the display statement or paraphrase it back, talking *about pouk.ai* (the company) rather than about Arian (the individual). Referrers cite the page as a company-register signal ("you'll like their about page — first real brand on the site"). When analytics arrive, time-on-page in the 30–90-second band (not 2-minute+) plus `mailto:` click-through-rate from `/about` are the primary read-outs.
- **Failure modes**:
  - **Wall of text** (v1's primary failure). Re-occurs if v2 lands a long prose page in any voice. Mitigated by §4's moment-shaped composition + ~120–250 word ceiling.
  - **Personal-not-company** (v1's secondary failure). Re-occurs if first-person voice slips back into the body. Mitigated by §5's brand-voice contract.
  - **Sole-operator framing** (v2.1 amendment failure mode). The page leans on "small", "one operator", "solo", "scrappy", "boutique", "humble", "just me", "small-but-mighty", or any proudness-of-smallness phrasing. Or its inverse — the page fakes plurality with "we"-as-team when there is no team. The page must read as a mature company without claiming team-size in either direction. Mitigated by §5's positioning-amendment language ban.
  - **Boring-but-restrained** (new failure mode admitted in v2). The page is technically Lighthouse 100, on-brand, type-correct, and forgettable. A reader does not remember anything 24 hours later. Mitigated by §4's display-lead + §6's editorial portrait.
  - **Loud / busy** (over-correction failure mode). The page over-commits on the saturated-color portrait, the display type, the composition rhythm, and lands maximalist. Mitigated by §4's restraint rules and §6's "single asset, single placement" portrait contract.
  - **Class-of-one in the wrong direction**. v2 ships compositional moves the rest of the site cannot adopt — a register that works on `/about` but cannot inform `/why-ai`, `/roles`, `/principles` future iterations. Mitigated by §4's DS-token-discipline rule (every v2 move is implementable via DS-vocabulary, even if the DS-vocabulary expansion lands later).

## 4. Information architecture

The page composes **Direction A — single-statement display lead** from `meta/compositions/proposals/about-v2-explorations.md` §3 Direction A, anchored by **a single editorial portrait** per founder Direction Y decision. Designer composition revision at `meta/compositions/pages/about.md` is the load-bearing artifact for exact composition primitives, type scales, surface tiers, and grid choices — this spec defines the *structure and intent*, the composition revision lands the *recipe*.

Direction A's compositional rhythm in spec language:

1. **`SiteShell`** — top nav with About marked current. Nav order per A4: `Why AI → Roles → Principles → About`. Footer link order matches nav. Wordmark links to `/`. (Unchanged from v1.)
2. **Display statement** — one short declarative sentence at editorial-display scale (designer composition picks the exact token — likely `--fs-display-lg` per `meta/proposals/ds-side/type-display-scale.md` if accepted). Brand-voice. Subject is `pouk.ai`. Carries the page's `<h1>`. Standalone — no preceding eyebrow, no following lede in the same band. Generous breathing space (designer call on exact vh ratio; explorations memo suggests ~70vh breathing). **This is the page's load-bearing line.**
3. **Editorial portrait — Direction Y** — single AI-generated portrait of Arian (asset spec in §6). Sits between the display statement and the supporting prose, as the page's only non-typographic moment. Caption: single line, brand-voice, ≤12 words. Placement and composition treatment (full-bleed vs contained, surface-band vs inline) is the designer's call in the composition revision. Per founder decision: **single asset, single placement, single caption.** Does not appear elsewhere on the page; does not repeat at footer; not used as OG image at v2.
4. **Supporting story** — short brand-voice prose: 4–8 lines, ~60–120 words, set at body type. Tells what pouk.ai *does* as a company, what kind of work it takes on, the production-vs-deck-building positioning, and the company's posture toward growth. **Subject is `pouk.ai` throughout — not Arian, not "we", not "the team".** Per the v2.1 positioning amendment, this block does not declare team size, headcount, scale, or seniority structure. The substance is *what the company is for*, not *who staffs it*. No section heading; the display statement (item 2) is the only `<h1>` and there is no `<h2>` above this prose block (it reads as a continuation of the statement, not a separate document section).
5. **Pouākai unit** — standalone pulled-statement treatment for the R27 sentence. Renders the migrated sentence verbatim: "Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height." Type register: Instrument Serif italic at display scale (designer call on exact scale). Optional one-line caption below in `--fg-muted` carrying compressed Pouākai respect-posture content (≤25 words). Per founder decision: keep the respect posture on `/about` as a small caption beneath the pulled statement; do not retire it entirely; compress the v1 ~75-word three-sentence section into one caption-line.
6. **End CTA** — minimal muted line, `<a href="mailto:hello@pouk.ai">` in brand-voice / second-person invitational register. Differentiated wording from `/principles`'s end-CTA. Hairline above (designer call). Final compositional unit before footer.
7. **`SiteShell` footer** — global chrome, unchanged.

**Removed in v2.1**: the v2.0 §4 IA item 5 ("Operator line — one sentence, set apart… 'pouk.ai is one operator. Arian Zargaran, founder. hello@pouk.ai reaches him directly.'") is **removed in its entirety**. The founder's name does not appear in the page body. The operator-naming function moves entirely to structural metadata (`schema.org/Person` JSON-LD, alt text on the portrait) per §6.2. See §11 deltas table for the v2.0 → v2.1 surface change.

**Total compositional units**: 5–7 (counting SiteShell chrome top + bottom as one unit each). v1 had 10 prose-shaped blocks in one column; v2.0 had 6–8 units (including the now-removed operator line); v2.1 has 5–7 units across multiple surface treatments.

**Word count target**: **~100–200 words total body content** (display statement + supporting story + Pouākai unit + caption + end CTA). Lower than v2.0's ~120–250 target because the operator line retires. Word count is an output of the composition, not a constraint on it — if Direction A executed faithfully lands at 100 words, that is correct; if it lands at 200 words, that is also correct.

**Color register — first saturated color on the brand**. The Direction Y portrait introduces a **saturated orange backdrop** as part of the source artifact. This is the first non-neutral, non-brand-palette color anywhere in the pouk.ai surface. Designer composition revision is the authoritative artifact for how the orange interacts with the page's `--bg`, the surrounding white space, and whether the orange is contained inside the portrait asset's bounding box only, or extends into a backdrop band that bleeds into the composition. **PM position**: contain the orange inside the portrait asset's bounding box at v2 — the saturated color is *in* the asset, not *on* the page surface. The page's other surfaces stay `--bg` (warm-paper neutral). Designer overrides if composition calls for a saturation band; that is a composition decision, not a spec decision. Flagged for designer review in §9.

## 5. Content requirements

The substance is drafted by `pouk-ai-content` after this spec lands. The v1 content draft (`meta/content/drafts/pages/about.md` v1.0) is superseded by a v2.0 rewrite — no v1 prose carries forward except the R27 migrated sentence.

Outcomes the copy must hit:

- **Voice contract (locked, v2.1)**: Brand-voice declarative throughout the page. Subject is `pouk.ai` for the display statement, supporting story, and Pouākai unit. The end CTA is brand-voice / second-person invitational. The meta description is brand-voice. **There is no first-person "I" anywhere on the rendered page** (v1's A5 first-person lock is reversed). **There is no first-person plural "we" used to fake plurality** — pouk.ai may eventually have a team and use "we" honestly; in the v2.1 window, "we" is permitted only when it is referentially honest (e.g., "we work with…" where the subject is the company itself, not an implied team). When in doubt, the drafter rewrites to a subject-led `pouk.ai` construction.
- **Positioning amendment language ban (v2.1, locked)**: The following words and phrasings are **banned** from the rendered page body, the portrait caption, the end CTA, and the meta description:
  - **Smallness claims**: "small", "solo", "one operator", "one-person", "scrappy", "boutique", "tiny", "humble", "just me", "small but mighty", "still small", "indie".
  - **Headcount declarations**: any sentence that declares team size in either direction (no "we are X people", no "pouk.ai is one person", no "a small team", no "a one-person shop"). The page does not name how many people work at pouk.ai.
  - **Proudness-of-smallness register**: any phrasing that performs scrappiness or modesty as a brand virtue ("we're nimble because we're small", "no one to delegate to", etc.).
  - **Founder-arc residue**: any reference to Arian's prior employment, frontend background, career transition, or biographical detail. The arc retired with A10; this ban makes the retirement explicit.
  Rationale (founder verbatim, frontmatter): *"I am not aligned with the claim and constant proudness of the sole operator. I believe in a company that shows maturity, that's happy to sit by the same table of companies bigger than itself, that's happy to chase growth."* The page reads as a mature company, not as a solo operator with a laptop.
- **What is on-register**: capability statements (`pouk.ai builds AI that ships`), specificity over abstraction, production-context language (in-engagement details without team-size disclosure), growth-posture statements (`pouk.ai chases work with teams that…`), peer-grade tone (no apology for size, no claim of size). Apple-register, not "small company that could" register.
- **Display statement**: One short declarative sentence at editorial-display scale. Names what pouk.ai *is* as a company — capability, audience, or posture (final framing is content drafter's call). **The page lives or dies on this sentence.** Constraints: brand-voice, ≤15 words, no comma-spliced two-clauses, no exclamation, no hedge ("we believe…"), no smallness-claim per the v2.1 ban above. The display statement also serves as the page's `<h1>` (per A9 revision — the `<h1>` migrates from v1's section 1 prose into the display statement).
- **Supporting story**: 4–8 lines of brand-voice prose at body type. Tells the substantive story of pouk.ai *as a company* — what kind of work it does, who it does it for, the production-vs-deck-building positioning, the growth posture. No founder-arc framing (A10 retired in v2.0). No team-size disclosure (positioning amendment ban). No résumé bullets, no list of past employers, no years-of-experience claim, no client names. **Subject is `pouk.ai` throughout.** ~60–120 words.
- **Operator line — REMOVED in v2.1.** The v2.0 outcome that required a sentence naming Arian once on the page body retires. The founder's name does not appear in the rendered page body. The operator-naming function moves to structural metadata only (see §6.2 — `schema.org/Person` JSON-LD, portrait alt text). This is the most material v2.0 → v2.1 surface change.
- **Pouākai unit**: Opens with the R27 one-liner verbatim ("Named for Pouākai — the largest eagle that ever flew, hunting by stooping from height."). The optional caption below compresses the v1 ~75-word three-sentence respect-posture content into ≤25 words, single line, brand-voice declarative. The macron on Pouākai is preserved (HTML entity `&#257;` or literal `ā`).
- **End CTA**: Brand-voice / second-person invitational. Single muted line. `<a href="mailto:hello@pouk.ai">`. Differentiated in wording from `/principles`'s end-CTA line. Loses v1's "the inbox" referent (which depended on the now-retired hero lede). The CTA must not lean on operator-availability framing ("if you'd like to reach the person who'll reply" is off-register under v2.1) — the address is the brand's address, not an individual's inbox.
- **Portrait caption**: Single line in `--fg-muted` at meta type. Brand-voice. ≤12 words. **The caption does not name Arian** — naming him in the visible body retires under the v2.1 amendment along with the operator line. The caption may carry a register cue toward the editorial / AI lineage of the asset (e.g., shape like "Editorial portrait, 2026" or similar — content drafter's call). Final wording: content drafter. Per founder decision: no model names, no tooling stack references; the Gemini sparkle glyph stays in the source artifact but is not surfaced verbally. Arian's name lives in the alt text and the JSON-LD per §6, not in the visible caption.
- **Meta description**: Brand-voice declarative, ≤155 chars. Subject is `pouk.ai`. Does not name Arian. Does not declare team size. Names what the company is for and how to reach it. See §6.2.

**No `Draft:` example copy is locked in this section.** The v2 page composes a register that has no precedent on the site; offering example copy here risks anchoring the drafter's voice to PM voice. Only the R27 sentence is a verbatim lock.

## 6. Content data shape — asset specs + meta surfaces

### 6.1 Editorial portrait asset (new in v2)

Per founder decision, the portrait is produced by Arian (either the existing inspiration AI-generated image, or a commissioned extension of it). Asset specs the engineer wires against:

- **Format**: AVIF primary, WebP fallback, JPEG legacy fallback. Served via `<picture>` with `<source type="image/avif">` and `<source type="image/webp">` and `<img>` as JPEG. Astro's built-in image pipeline emits all three formats from one source.
- **Aspect ratio**: **1:1 (square)**. Source asset is `public/about-portrait.jpg` at 1024×1024 — head-and-shoulders single subject framed square. **Amendment 2026-05-18 evening (v2.1)**: revised from v2.0's **3:4** default. Asset-authority beats composition default — the shipped JPEG is square, the spec follows. Future asset reshoots may revert to 3:4 (editorial-portrait standard); when they do, this clause + `src/content/about.json` `band.portrait.aspect` + `src/content/_schemas/about.ts` enum + `AboutBand.tsx` consumption all flip together.
- **Source resolution**: 1024px on each axis (square asset). **Amendment 2026-05-18 evening (v2.1)**: revised from v2.0's "≥ 1600px on the long axis". Astro's image pipeline + DS `<Portrait>` molecule downsample for served variants from this 1024 source. If a future reshoot lands a 1600+ asset, this clause re-tightens.
- **Served sizes**: three widths via `srcset` — **480w** (mobile / column), **720w** (desktop column at 1×), **1440w** (desktop column at 2× / Retina). Plus designer's chosen breakpoints if the composition calls for full-bleed treatment.
- **Per-variant weight budget**: ≤ 80 KB for the largest AVIF variant (1440w). ≤ 50 KB for the 720w AVIF. ≤ 25 KB for the 480w AVIF. WebP and JPEG fallbacks ≤ 1.5× the AVIF weight per variant. **Tunable down** by engineer compression pass; **not tunable up** — the page's Lighthouse 100 budget is the contract.
- **Preload strategy**: depends on whether the portrait sits above the fold or below it (designer composition revision decides placement). If above-the-fold: `<link rel="preload" as="image">` for the appropriate served variant matching the viewport. If below-the-fold: `loading="lazy"` on the `<img>`, no preload. Engineer default: lazy + no preload; flip to preload only if the designer locks an above-the-fold placement.
- **LCP impact**: the page's LCP element is the display statement (`<h1>`), not the portrait. The portrait must not regress LCP. If above-the-fold placement forces the portrait to become LCP, the engineer either (a) preloads to keep LCP under 2.5s on mobile, or (b) escalates the placement decision back to designer + PM.
- **CLS impact**: the `<img>` must declare explicit `width` and `height` attributes so the browser reserves space before load. Non-negotiable.
- **`alt` text**: descriptive, ≤120 chars, names the subject and the register. Example shape (not literal — content drafter authors): "Editorial portrait of Arian Zargaran, founder of pouk.ai. AI-generated, head-and-shoulders, saturated orange backdrop." The Gemini sparkle glyph in the source artifact may be referenced in the alt as a register cue but is not required: founder decision is no tooling-stack references in *visible* caption text; alt text is a separate accessibility surface and may carry more disclosure. Content drafter's call. The alt text is load-bearing for both accessibility (screen readers) and the AI-as-discipline signal for search engines.
- **Color register**: the source artifact carries a saturated orange backdrop. Engineer ships the artifact as authored — no recolor, no desaturation, no filter pass. The saturation lives *in* the asset, contained inside its bounding box.
- **License / rights**: Arian owns the asset and the AI-generation provenance. No attribution required on-page. Designer + engineer assume perpetual, transferable, web + print rights.
- **Replaceability cadence**: annual revisit per the parked illustration proposal's cadence (now-active per founder decision). Re-shoot trigger conditions: visual aging of the AI-generation register (saturated-color AI portraits date fast — 18 months is the design-stale window); founder appearance materially changes; or a brand-direction shift retires the orange backdrop.

### 6.2 Page-level meta surfaces

- **`<title>`**: `About — pouk.ai` (separator is content drafter's call between em-dash and pipe). Function-named per A14 v1, holds in v2. Operator name omitted from title; "Arian Zargaran" name-query SEO ceded to LinkedIn / X / other indexed surfaces by design.
- **`<meta name="description">`**: Brand-voice, ≤155 characters per agent §5.2. **Rewrites from v1.** v1's shipped meta description ("pouk.ai is one operator. Frontend engineering background, now running technical consulting through the AI tools that collapse months into days.") carries founder-arc content that retired in v2.0 and sole-operator framing that additionally retires in v2.1. v2.1 meta description names what pouk.ai *is as a company* and points at the contact path. Constraints: subject is `pouk.ai`, brand-voice declarative, no "small" / "solo" / "one operator" / "scrappy" / "boutique" / "humble" claim, no team-size disclosure in either direction, no founder-arc residue, no first-person, ≤155 chars. Final wording is content drafter's call.
- **OG title**: matches `<title>`.
- **OG description**: matches `<meta description>` or a brand-voice-equivalent ≤200 chars.
- **OG image**: **reuses the existing `public/og.png` for v2** (no `/about`-specific OG card in v2). The editorial portrait is *not* used as the OG image at v2 — saturated-color editorial portraits at OG dimensions can render unpredictably across social-share previews, and the page's OG identity stays with the brand mark. A `/about`-specific OG card sourced from the portrait is a candidate v3 enhancement; deferred.
- **Canonical URL**: `https://pouk.ai/about` (trailing-slash policy matches existing pages).
- **JSON-LD**: standalone `schema.org/Person` schema only (A15b v1, holds in v2). Fields: `name` (`"Arian Zargaran"`), `jobTitle` (`"Founder"`), `url` (`"https://pouk.ai/about"`). No `worksFor`. No `sameAs`. No additional fields surfacing the portrait or its provenance — structured data restraint extends to the visual asset. **Amendment 2026-05-18 evening (v2.1)**: `jobTitle` revised from v2.0's `"Founder, pouk.ai"` to `"Founder"` — the `url` field already carries the brand surface (`pouk.ai/about`), so suffixing the title with `, pouk.ai` was redundant + read as marketing rather than schema. Cleaner schema; same Knowledge Graph entity.
- **Heading hierarchy**: exactly one `<h1>` per WCAG. The `<h1>` lives on the **display statement** (§4 IA item 2) — not on a prose section. No `<h2>` ranks above the supporting story (it is continuous body prose, not a separate document section). The Pouākai unit may or may not carry an `<h2>` — designer composition revision decides whether the pulled statement is structurally a heading or a `<blockquote>`/`<aside>`/`<p>` at typographic scale. PM default: `<aside>` or `<blockquote>` (semantically standalone, not heading-ranked), keeping `<h1>` as the sole document heading.
- **Founder-name routing (v2.1, locked)**: Arian's name appears on the `/about` page only in **structural metadata surfaces** — specifically (a) the `schema.org/Person` JSON-LD `name` field (machine-readable; Google's Knowledge Graph reads it), and (b) the portrait `alt` text (assistive-tech accessibility surface). It does **not** appear in the rendered body text, the visible portrait caption, the display statement, the supporting story, the Pouākai unit, the end CTA, the `<title>`, or the `<meta name="description">`. The page surface reads as the company; the metadata surface preserves operator-attribution for Knowledge Graph and accessibility without forcing solo-operator framing onto the visible page.

## 7. User flow

- **Entry**: From the top nav (any page on the site → `/about`); from a referrer DM, email signature, or LinkedIn reply containing the `/about` URL directly (A13 v1 documented role, holds in v2); from a search query like "pouk.ai about"; from `/principles` for the prospect who closed one trust-loop page and wants the other.
- **Read path**: Display statement (5-second register) → editorial portrait (visual anchor; 5–10 seconds of attention) → supporting story (30–60 seconds) → Pouākai unit + caption (10 seconds) → end CTA (5 seconds). Total target: 50–80 seconds (down from v2.0's 60–90 — the operator line retires in v2.1). A first-touch reader (referrer-DM entry) reads top-to-bottom; a returning reader from another page may scan the display statement and skip to the end CTA.
- **Exit / conversion**: Three valid exits — (a) `mailto:hello@pouk.ai` from the end CTA, (b) back into the funnel via top nav (typically `/roles` or `/why-ai`), or (c) close with intent to return / convert later. Per A13 v1 (holds in v2), `/about` is a parallel trust-loop page to `/principles` (OR semantics, not sequential) — the canonical funnel does not force prospects through both.

## 8. Acceptance criteria

Structural ACs:

- [ ] Route renders at `/about`.
- [ ] All compositional units in §4 IA (items 1–8) are present and ordered as specified.
- [ ] **Exactly one `<h1>` renders on the page**, and it is the display statement (§4 item 2 / §5 display statement). The `<h1>` does **not** live in a prose section (v1 placed it on "The arc" — that placement retires in v2).
- [ ] **No `<h2>` ranks above the supporting story** — it renders as continuous body prose, not a separate document section.
- [ ] The Pouākai unit renders as a standalone pulled statement using a semantically appropriate element (`<aside>`, `<blockquote>`, or styled `<p>` — designer composition revision picks). It does **not** carry an `<h2>`.
- [ ] The display statement, supporting story, Pouākai unit, end CTA, and portrait caption are **all in brand-voice declarative** (or brand-voice / second-person for the CTA). **No first-person "I" appears anywhere on the rendered page.**
- [ ] **The v2.0 operator line is removed** — no sentence on the rendered page names Arian, calls out "one operator," or otherwise discloses team size in either direction. (v2.1 amendment.)
- [ ] **Arian Zargaran's name does not appear in the rendered body** (display statement, supporting story, Pouākai unit, CTA, portrait caption, `<title>`, or `<meta name="description">`). The name appears only in (a) the `schema.org/Person` JSON-LD `name` field, and (b) the portrait `<img alt="…">` attribute. (v2.1 amendment.)
- [ ] **None of the banned words/phrases appear on the rendered page** (body, caption, CTA, or meta description): "small", "solo", "one operator", "one-person", "scrappy", "boutique", "tiny", "humble", "just me", "small but mighty", "still small", "indie". (v2.1 positioning amendment language ban — see §5.)
- [ ] **No team-size declaration in either direction** appears on the page — no "we are X people", no "pouk.ai is one person", no "a small team", no "a one-person shop", no implied-plural "we"-as-team without an honest referent. (v2.1 amendment.)
- [ ] **No founder-arc residue** appears on the page — no reference to Arian's prior employment, frontend background, career transition, or biographical detail. The arc retired with A10; the v2.1 amendment makes the retirement enforceable.
- [ ] Section 1 of v1 ("The arc") is removed entirely. No autobiographical prose appears on the page.
- [ ] The Pouākai unit opens with the R27 one-liner migrated verbatim from the prior homepage lede. Macron preserved.
- [ ] Pouākai respect-posture content (compressed to ≤25 words, single caption line) is present below the pulled Pouākai statement.
- [ ] End CTA renders as a single muted line containing `<a href="mailto:hello@pouk.ai">`. Wording is differentiated from `/principles`'s end-CTA line.

Portrait ACs (new in v2):

- [ ] The editorial portrait asset is present on `/about` exactly once.
- [ ] Asset format chain is AVIF / WebP / JPEG via `<picture>` with explicit `<source>` and `<img>` fallback.
- [ ] Three responsive widths are served via `srcset`: 480w, 720w, 1440w (or designer-revised breakpoints).
- [ ] Largest AVIF variant ≤ 80 KB; 720w AVIF ≤ 50 KB; 480w AVIF ≤ 25 KB.
- [ ] `<img>` declares explicit `width` and `height` attributes; CLS from the portrait load is 0.
- [ ] Portrait `alt` text is descriptive, ≤120 chars, and names the subject (Arian Zargaran) and the editorial / AI-generated register.
- [ ] Portrait caption is a single line, ≤12 words, brand-voice, set in `--fg-muted` at meta type. No model names, no tooling stack references.
- [ ] If portrait sits above the fold per designer composition: `<link rel="preload" as="image">` is emitted for the appropriate variant; LCP element is the display statement, not the portrait, and LCP stays < 2.5s mobile.
- [ ] If portrait sits below the fold: `loading="lazy"` is set on the `<img>`; no preload.
- [ ] Saturated orange backdrop is contained within the portrait asset's bounding box. **No saturation band, gradient, or backdrop extends onto the page surface in v2** unless the designer composition revision explicitly authorizes it and PM countersigns.

Nav / cross-surface ACs (carried forward from v1):

- [ ] `SiteShell` top nav exposes four items in order: `Why AI → Roles → Principles → About`. About is marked current on `/about`.
- [ ] `SiteShell` footer link order matches nav.
- [ ] `sitemap.xml` includes `/about`.

Meta / SEO ACs (revised from v1):

- [ ] `<title>` renders as `About — pouk.ai` (or `About | pouk.ai`).
- [ ] `<meta name="description">` is brand-voice, ≤155 characters, **rewrites v1's shipped description** to remove the founder-arc framing.
- [ ] OG image reuses `public/og.png` (no `/about`-specific OG card in v2; the portrait is not surfaced as OG image).
- [ ] Canonical URL is `https://pouk.ai/about`.
- [ ] JSON-LD is a standalone `schema.org/Person` block with `name`, `jobTitle`, `url` fields only. No `worksFor`. No `sameAs`.
- [ ] No LinkedIn, X, GitHub, or other social URL appears on `/about` (body, metadata, footer, or alt text).

Quality ACs (hold from v1):

- [ ] Lighthouse mobile: 100/100/100/100 (Performance ≥ 95 per D-14 is the operating floor; A11y / BP / SEO = 100 is non-negotiable).
- [ ] No new client-side JS shipped on `/about`. Motion, if any, is CSS-only.
- [ ] `prefers-reduced-motion` honored on any composition motion (display-statement entrance reveals, portrait fade-ins, etc. — designer composition decides motion).
- [ ] axe-core passes with 0 violations on `/about`.
- [ ] Color contrast on the portrait caption, end CTA, and any `--fg-muted` text meets WCAG AA against the surrounding surface (`--bg`).
- [ ] The Lighthouse Performance budget absorbs the new portrait asset without dropping below 95.

Atomic-ship ACs (coupled with v2 deploy):

- [ ] `meta/specs/pages/about.md` (this file) is at status `Approved` before engineer build begins.
- [ ] `meta/compositions/pages/about.md` v2 revision is at status `Approved` before engineer build begins. Replaces v1 composition's verdict (ii).
- [ ] `meta/content/drafts/pages/about.md` v2.1 is at status `Approved` before engineer build begins. v1.0 and any v2.0 content draft are marked `Superseded`. (Per the 2026-05-18 evening positioning amendment, the content drafter authors directly against v2.1 outcomes — any in-flight v2.0 draft restarts under the v2.1 voice contract in §5.)
- [ ] `meta/proposals/about-illustration-v2.md` status moves from `Draft (parked)` to `Draft (active)` before engineer build; status moves to `Approved` once the Direction Y portrait commissioning + asset production is complete and the asset lands on disk.
- [ ] At least one of the six DS-side proposals (existing three + three new) lands in `@poukai-inc/ui` before engineer build, OR the engineer ships compatible with the proposals' current Draft shapes and accepts a follow-up DS-bump PR after DS lands the components. Both paths are acceptable.

Content-drafter ACs:

- [ ] `meta/content/drafts/pages/about.md` v2.0 documents the v2 brand-voice contract (no first-person "I" anywhere on the rendered page) so future content revisions don't normalize.
- [ ] The display statement, supporting story, Pouākai caption, end CTA, and meta description all source from the v2.1 content draft (no engineer-side prose drift).
- [ ] R27 sentence migration is preserved verbatim (third-person brand-voice; macron preserved; sentence opens the Pouākai unit).

## 9. Open questions / dependencies

Spec is `Draft` (v2). Dependencies blocking `In review` → `Approved`:

- **Designer composition revision (`meta/compositions/pages/about.md` v2)**. Designer is briefed in parallel with the same founder decisions; composition revision is the authoritative artifact for exact type scales, surface tiers, grid choices, motion calls, and portrait placement / treatment. PM spec defers all composition specifics to it. Composition revision must land before this spec moves to `In review` for downstream agents.
  - PM-side open question for designer: **does the saturated orange backdrop stay contained inside the portrait asset's bounding box, or does it extend into a backdrop band on the page surface?** PM default: contained. Designer overrides if Direction A composition calls for a saturation band.
  - PM-side open question for designer: **does the portrait sit above the fold or below it?** Affects preload strategy, LCP element identification, and the page's first-screen visual identity. Designer call.
  - PM-side open question for designer: **does the Pouākai unit render at `--fs-display`, `--fs-display-lg`, or at the existing `--fs-tagline` / `--fs-tagline-intimate` scale?** Affects DS-gap dependency on `type-display-scale.md`.

- **Content draft (`meta/content/drafts/pages/about.md` v2.0)**. `pouk-ai-content` authors against §5 outcomes after this spec and the composition revision both reach `In review`. The display statement is the load-bearing line; the page is a bet on the copy. Until v2.0 content draft lands and Arian approves the display statement, the spec stays at `Draft`.

- **Direction Y portrait asset**. Arian produces the asset (either existing inspiration image or commissioned extension) — Arian's lane. Engineer cannot wire the page without the asset on disk. Coordination: when asset is ready, Arian delivers it at a known path (e.g., `public/about/portrait.{avif,webp,jpg}` with the three responsive widths) and the engineer references it from the page template.

- **DS-side proposals (six total)**:
  - Pre-existing v1: `meta/proposals/ds-side/hero-no-title-variant.md` (and others on disk from v1 era — `button-size-compact.md`, `hero-entrance-stagger.md`, `hero-illustration-slot.md`, `hero-intimate-rhythm.md`, `hero-size-prop.md`). All forward-looking; v2 ships compatible with each at whatever shape it has when v2 lands.
  - New (v2-driven, filed by designer parallel track): `meta/proposals/ds-side/section-surface-rhythm.md`, `meta/proposals/ds-side/statement-molecule.md`, `meta/proposals/ds-side/type-display-scale.md`. All non-blocking for spec approval; engineer builds against current DS shape and accepts a follow-up DS-bump PR after proposals land.
  - PM does not author DS-side component APIs (per agent §1 "What you don't write"). PM authorship of these proposals is scoped to *site-side need only*; `@poukai-inc/poukai-ui` maintainers translate to DS proposals.

- **Engineer dependencies**:
  - `@poukai-inc/ui` `SiteShell` accepts a four-item nav (confirmed from v1 build).
  - Astro image pipeline produces AVIF/WebP/JPEG variants from a single source. Confirm with engineer.
  - JSON-LD `Person` schema rendering on `/about` is standalone (already confirmed in v1 build).
  - Engineer's scope expands from v1: portrait asset wiring, AVIF/WebP/JPEG pipeline configuration, preload strategy decision (above/below fold), `<picture>` markup, alt-text wiring, caption rendering, color-backdrop composition (none on page surface per PM default).

- **Atomic deploy coordination**: v2 spec, composition v2, content draft v2.0, portrait asset, optional DS bump — all ship in one PR or one PR chain that flips v1 to `Superseded` at the same commit that ships v2 to the canonical domain.

## 10. v1 interview record (preserved for rationale chain)

The v1 A1–A18 decisions are inventoried here so future agents reading v2 understand the rationale chain. Each decision is marked **Holds** (carries forward to v2), **Revised** (modified for v2), or **Retired** (no longer applies).

- **A1 — P0 is `/about` (no `/case-studies` override)**. Holds. v2 is still P0; only its register changes.
- **A2 — Atomic migration: `/about` ships with `/` lede trim. R14 + R27 close via the Pouākai-sentence move**. Holds. Already executed in v1 ship; R14 + R27 stay closed in v2. The Pouākai sentence appears on `/about` in v2 inside the Pouākai unit per §4 IA item 6.
- **A3 — No founder visual asset in v1; illustration deferred to v2 via parked proposal**. **Reversed in v2.** Founder decision in this thread re-opens A3 and locks Direction Y (computational portraiture, editorial AI-generated, saturated orange backdrop). Parked proposal at `meta/proposals/about-illustration-v2.md` moves from `Draft (parked)` to `Draft (active)`.
- **A4 — Top nav order `Why AI → Roles → Principles → About`**. Holds.
- **A5 — Explicit first person "I" throughout sections 1 and 2**. **Retired.** v2 is brand-voice declarative throughout. No first-person on the rendered page.
- **A6 — Medium prose (~400–600 words) in three sections**. **Retired.** v2 target is ~120–250 words across the §4 IA compositional units. Three-section structure (arc / why pouk.ai / Pouākai) collapses — only the Pouākai unit survives as a discrete section.
- **A7 — Migrate R27 verbatim as section 3 opener; ~80 words max; three sentences**. **Revised.** R27 sentence migration stays verbatim, ratified atomic and irrevocable. Section 3 (~80-word, three-sentence prose section) retires; in v2 the R27 sentence renders as a standalone pulled statement at display scale, with optional ≤25-word caption below carrying the compressed respect-posture content.
- **A8 — Originally locked R14 verbatim opener; corrected on re-read to no opener voice-shift**. Moot — section 1 retires in v2.
- **A9 — No `<h1>` in hero region; `<h1>` moves to section 1**. **Revised.** The `<h1>` moves *again* in v2 — from v1's section 1 prose into v2's display statement (§4 IA item 2). The page still has exactly one `<h1>`; its location is different.
- **A10 — Pure post-frontend autobiographical framing for section 2**. **Retired.** Autobiographical framing retires entirely in v2.
- **A11 — `/principles`-style brand-voice end-CTA**. Holds. CTA register survives unchanged; only the wording changes because v1's "the inbox" referent depended on the now-retired hero lede.
- **A12 — Instrument Serif italic section headings, ≤3 words**. **Revised.** No `<h2>` section headings in v2 (section structure retired per A6 retirement). Instrument Serif italic register survives as a typographic option for the Pouākai pulled statement (designer composition revision call).
- **A13 — `/about` as parallel trust-loop page to `/principles` (OR semantics); also recommended primary URL for referrer / DM / signature contexts**. Holds. Flow position is composition-independent. `meta/specs/flows/visitor-to-conversation.md` v1.1 does not need a v1.2 revision for the v2 page substance.
- **A14 — `<title>` "About — pouk.ai" function-named; meta description brand-voice; "Arian Zargaran" name-query SEO ceded**. Holds for title. Meta description rewrites in v2 to drop founder-arc content.
- **A15 — Footer matches nav; standalone `Person` JSON-LD only; no `worksFor`, no `sameAs`**. Holds.
- **A16 — Post-`/about` sequence is P1 `/404`, P2 `/contact`**. Holds.
- **A17 — `/about` spec lands at `In review`; illustration v2 proposal lands at `Draft (parked)`**. **Revised.** v2 spec lands at `Draft` (not `In review`) because composition revision + content draft revision are coupled deliverables. Illustration proposal moves from `Draft (parked)` to `Draft (active)` per A3 reversal.
- **A18 — Wrap; no more clarifying questions**. Moot for v2 — v2 has its own decision record (the recalibration proposal + the founder decision in this thread).

## 11. v1 → v2 decision deltas (summary)

| Surface | v1 | v2 | Source |
|---|---|---|---|
| Body voice | First-person ("I") throughout sections 1 + 2 | Brand-voice declarative throughout | A5 retired |
| Word count | ~400–600 words; landed at ~435 | ~120–250 words target | A6 retired |
| Page structure | Eyebrow + lede + 3 prose sections + CTA | Display statement + portrait + supporting story + Pouākai unit + CTA (operator-line unit removed in v2.1) | A6 retired; A10 retired; new Direction A IA; v2.1 positioning amendment removes operator line |
| `<h1>` location | Top of section 1 ("The arc") | The display statement | A9 revised |
| Section headings | Three Instrument Serif italic `<h2>`s, ≤3 words each | No `<h2>` section headings; Pouākai unit may use Instrument Serif italic at display scale (no heading role) | A12 revised |
| Visual asset | None (type-only) | One editorial AI-generated portrait, Direction Y register | A3 reversed |
| Color palette | `--bg` warm-paper + brand neutrals only | `--bg` warm-paper + saturated orange contained inside portrait asset bounding box | New v2 color register |
| Founder-arc content | Sections 1 + 2 ~340 words of autobiography | Retired entirely | A10 retired |
| Pouākai treatment | ~80-word three-sentence prose section opening with R27 verbatim | R27 verbatim as standalone pulled statement at display scale + ≤25-word caption below | A7 revised |
| Founder named on page surface | Implicit via first-person voice (~11 "I" occurrences in built HTML) | v2.0: once, third-person, in the operator line. **v2.1: not at all on the rendered body.** Name lives only in `schema.org/Person` JSON-LD `name` field + portrait `alt` text. | A5 retired; v2.1 positioning amendment routes founder-attribution to metadata only |
| Voice-shift contract | Three locked shifts (Pouākai section, CTA, meta description) | Voice-shift framework dissolves — body already brand-voice; CTA second-person and meta brand-voice are same voice family | A5 + voice-shift framework retired |
| Meta description | Founder-arc framing | Brand-voice naming what pouk.ai *is* | A14 revised |
| OG image | `public/og.png` | `public/og.png` (portrait deliberately not used as OG; defer `/about`-specific OG card) | Unchanged |
| JSON-LD | Standalone `Person` schema | Standalone `Person` schema (unchanged) | A15 holds |
| Nav order | `Why AI → Roles → Principles → About` | Same | A4 holds |
| Flow position | Parallel trust-loop with `/principles` | Same | A13 holds |
| DS-side relationship | "Use existing primitives only"; one DS-gap (`hero-no-title-variant.md`) filed forward-looking | On-demand DS commissions are the expected path; six DS-side proposals filed across v1 + v2 era | Recalibration proposal §4.4 |
| **Brand positioning (v2.0 → v2.1)** | v2.0 carried "small technical consultancy" / "one operator" framing in §1, §5 voice contract, §5 operator-line outcome, §6.2 example meta description, and §10 out-of-scope. The page leaned on sole-operator proudness as a brand virtue. | **v2.1 retires sole-operator framing entirely.** Page reads as a mature company, peer-grade with larger competitors, growth-chasing. No claim of size in either direction. Founder name retires from rendered body and lives only in `Person` JSON-LD + portrait alt. Language ban on "small / solo / one operator / scrappy / boutique / humble / just me / small but mighty" in §5. New v2.1 ACs in §8 enforce. | Founder positioning amendment, 2026-05-18 evening: *"I am not aligned with the claim and constant proudness of the sole operator. I believe in a company that shows maturity, that's happy to sit by the same table of companies bigger than itself, that's happy to chase growth."* |
| Word-count target | v2.0: ~120–250 words total body | v2.1: ~100–200 words (operator line retires, ~20–50 words come off the total) | v2.1 amendment |
| Compositional unit count | v2.0: 6–8 units (incl. operator line) | v2.1: 5–7 units (operator line removed) | v2.1 amendment |
| Read-target time | v2.0: 60–90 seconds | v2.1: 50–80 seconds | v2.1 amendment (operator-line read time retires) |

## 12. Out of scope

- A team page or team roster on `/about`. pouk.ai may have a team in the future; the page does not pre-empt that by declaring current headcount in either direction.
- **"Company-as-solo-operator" framing on any surface.** (v2.1 positioning amendment.) The page does not declare pouk.ai is one person, one operator, or a one-person shop. It also does not fake plurality by declaring a team. The company's actual headcount is not a page subject.
- **"We're small but mighty" register, "scrappy" framing, "boutique" register, "humble" framing, or any proudness-of-smallness phrasing.** (v2.1 positioning amendment language ban — enforced via §5 + §8 ACs.)
- **Team-size declarations in either direction.** (v2.1 positioning amendment.) No sentence on the page names how many people work at pouk.ai. No "we are X people". No "pouk.ai is one person". No "a small team". No "a one-person shop". No implied-plural "we"-as-team without an honest referent.
- A "Selected Work" or named-clients list. Pouk.ai is too early; gated on customer permission per masterplan §7.3.
- A press / "as featured in" block. No press yet.
- A CV / PDF download. The web page is the artifact.
- A second visual asset on `/about` v2. The Direction Y portrait is the single asset; no signature, no handwritten note, no decorative imagery.
- The saturated orange extending onto the page surface as a backdrop band in v2 (PM default contains it inside the asset bounding box; designer override is possible but PM countersigns).
- LinkedIn / X / GitHub URLs in the body, footer, structured data, or alt text. Contact mediation stays through `hello@pouk.ai`.
- A contact form, scheduling widget, intro questionnaire, or any non-`mailto:` conversion path. `mailto:` only.
- Per-visit personalization, A/B copy variants, dynamic stat insertion. Zero-JS contract.
- A reading-time indicator. None of the other long-form pages have one; consistency holds.
- A "back to home" affordance. `SiteShell` wordmark covers that.
- Author byline ("by Arian Zargaran"). The page *is* the byline; the operator line names him once.
- Translation into other languages. English-only at v2.
- A `/about`-specific OG card sourced from the portrait. Deferred to v3 candidate enhancement; v2 reuses `public/og.png`.
- Motion on the portrait (cycling, parallax, hover-reveal, scroll-driven reveals). Static portrait only; designer composition may add restrained CSS entrance reveals on the display statement and other compositional units, scoped to `prefers-reduced-motion`.
- Surfacing the Gemini sparkle glyph as a visible page element (separate from the source artifact's content). The glyph stays in the source artifact; the visible page does not name the model.
- Cross-page revisions to `/`, `/why-ai`, `/roles`, `/principles` triggered by v2 register-lead framing. Those revisions are separate spec passes, scheduled after v2 lives on the site for ≥2 weeks and the register-lead bet is validated.
- An `/about/v1` archive page or a redirect-from-`/about/v1` path. v1 is replaced in place at the canonical URL; the v1 content is preserved in `meta/content/drafts/pages/about.md` v1.0 (status `Superseded`) and in this spec's §10 record.
