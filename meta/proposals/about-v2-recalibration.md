# Proposal: `/about` v2 recalibration

**Status**: Draft (revision 2 — 2026-05-18 evening)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-18
**Trigger (revision 1)**: Founder review of `/about` v1 live on 2026-05-18 morning. Three-line verbatim feedback:
> 1. I feel there's a lot of copy, forming a wall of text. That's 0 engaging.
> 2. We need to tweak the PM's reasoning and the designer's taste to adjust accordingly.
> 3. I was expecting a dynamic Apple INC-inspired proposal, more brand-tone and less personal. This is a company, it's not Arian's story. Iterate.
**Trigger (revision 2)**: Founder review of the rev-1 recalibration proposal on 2026-05-18 afternoon. Two-line verbatim feedback:
> Don't compare /about to the rest of the pages in the site because /about is the first one of its class and would work as an inspiration for the rest of the site.
>
> Additionally, to the PM and the designer, both, feel free to explore other formats, sections, visuals and compositions for the page. I want you to still be minimalistic but creative to introduce great experiences. You have a whole Design System team to generate components for you.

**Predecessors**:
- `meta/specs/pages/about.md` (status `In review` — v1 spec)
- `meta/content/drafts/pages/about.md` (Approved 2026-05-18 — v1 content draft)
- `meta/compositions/pages/about.md` (designer composition for v1 — verdict ii: skip `<Hero>`)
- `meta/proposals/next-pages-priorities.md` (resolution memo — A1–A18 interview record)
- This proposal **does not retire** those artifacts; it proposes a v2 against the same `/about` route. v1 stays as the build-of-record until v2 is approved and lands.

**Parallel track**: `pouk-ai-designer` is being briefed on the same revision-2 feedback. This proposal owns product reasoning; designer owns composition / visual rhythm. Both proposals land before any spec or composition revisions.

**What changed in revision 2 of this proposal** (most load-bearing reframes):
- `/about` is now treated as **register-lead, not register-conforming** — it is the *first page of its class* in the site, not a sibling that has to fit the existing four pages' contract. Cross-page-conformity arguments retire. See §1.5 (new) and §2.4 (new).
- **DS-side capacity is unlocked.** New `@poukai-inc/ui` molecules / tokens / primitives may be commissioned on demand via `meta/proposals/ds-side/` (six such proposals already exist in the corpus — the pattern is precedented). The constraint "compose inside existing primitives" retires. See §4.3 (revised) and §4.4 (new).
- **Format exploration is in scope.** "Apple-inspired moments-and-sections" is one direction among several. Other formats — scrolly-telling, full-bleed type sequences, asymmetric grid moments, motion-led reveals (within Lighthouse + a11y contract), generative typographic compositions, multi-frame narrative sequences, sectionless single-statement long-scrolls — are admitted. See §4.5 (new).
- **Bar for "great experience" rises.** Wall-of-text is failure mode; "boring, but technically restrained" is *also* failure mode. Minimalism is the *register*, not the *ceiling*. See §1.5 and §2.4.
- **A3 (illustration deferral) re-opened as a discussion item.** Not reversed yet — but if visual energy beyond pure type is in scope, the parked illustration proposal may need to be promoted, not just re-scoped. See §3 A3 row (revised) and §5 Q5 (revised).

---

## 1. What's wrong with v1 — diagnosis from the live page

I read the rendered `/about` (source `src/pages/about.astro`, built `dist/about/index.html`) before drafting this. Three concrete gaps line up with the founder feedback.

### 1.1 Wall of text — measured, not hand-waved

The page renders five prose blocks below the eyebrow + lede:

| Block | Element | Word count (approx) | Paragraph shape |
|---|---|---|---|
| Hero lede | one sentence | 12 | 1 sentence |
| Section 1 ("The arc") | 3 paragraphs | ~165 | 78 + 75 + 12 words |
| Section 2 ("Why pouk.ai") | 2 paragraphs | ~175 | 95 + 80 words |
| Section 3 ("Pouākai") | 1 paragraph | ~75 | 75 words (3 sentences) |
| End CTA | 1 sentence | 8 | 1 sentence |
| **Body total** | **6 paragraphs** | **~435 words** | typography-only |

The dominant visual rhythm between the eyebrow and the end CTA is **six justified prose paragraphs**, three of them in the 75–95-word range. There are three `<h2>`-class headings (one styled as `<h1>` per A9) breaking the paragraphs, but the headings sit *inside* the prose column at the same horizontal indent — they read as paragraph-leads, not as composition anchors. Nothing else interrupts the column: no pulled stat, no margin numeral, no callout block, no visual atom from `@poukai-inc/ui` doing display work. The "wall of text, 0 engaging" read is grounded in the measurement, not in any cross-page comparison.

*Cross-page rhythm comparisons retired (revision 2)*: rev-1 of this proposal benchmarked `/about` v1 against `/why-ai`, `/principles`, and `/roles` to show that v1 was the only long-form page on the site without structural rhythm. Founder feedback retired that framing — `/about` is the first page of its class, not a sibling that has to match the existing four. The measurement above stands on its own; the comparative paragraphs that previously followed it are removed.

### 1.2 Personal-not-company — voice register mismatch with the page's job

A5 locked first-person "I" for sections 1 and 2. v1 ships that faithfully — the rendered prose carries the phrase `I` or `I'm` / `I am` **eleven times** across sections 1 and 2 (counted in the built HTML). The first-person register reads like a personal-blog about page or a freelance-consultant landing page; it does not read like the about page of a company called pouk.ai. The founder's "this is a company, not Arian's story" reads correctly against this.

*Cross-page voice contrast retired (revision 2)*: rev-1 of this proposal listed the voice register of every other page (`/why-ai` second-person, `/roles` third-person, `/principles` implicit-we, `/` brand-voice-declarative) to argue v1 was a register outlier. Founder feedback retired that framing — `/about` is class-defining, not class-conforming. The register fix is judged against the page's own job (introduce the *company* pouk.ai), not against rhythm matching with adjacent surfaces.

### 1.3 Wall-of-text + personal-not-company combine into one failure shape

v1's prose-column-only composition and v1's first-person voice are not two independent issues — they compound. A page that is *both* dense prose *and* first-person reads as a personal essay, which is precisely the register the founder feedback rejected. Either failure mode alone is recoverable inside the v1 spec's frame; together they require the v2 register shift.

### 1.4 What v1 *got right* that v2 should preserve

The recalibration is not "scrap v1 and start over." Five v1 decisions are still load-bearing and should carry forward:

- **A2 atomic migration** — Pouākai sentence already migrated from `/` to `/about`. v2 keeps this; R14 + R27 stay closed.
- **A4 nav order** — `Why AI → Roles → Principles → About` is correct.
- **A12 Instrument Serif italic headings** — typography call is fine; what changes is composition density around them.
- **A13 trust-loop OR semantics with `/principles`** — `/about` as parallel trust-loop page is correct regardless of voice register. The visitor-to-conversation flow revision stays.
- **A15 standalone `Person` JSON-LD, no `sameAs`, no `worksFor`** — restraint posture at structured-data surface holds.

### 1.5 (new) `/about` is the new register, not the deviant register

Founder feedback in revision 2 reframes the entire diagnosis. v1 is not "the page that broke the site's existing register." v1 is "the first attempt at a class of page the site does not yet have." The site's other four pages (`/`, `/why-ai`, `/roles`, `/principles`) are best understood as **legacy register pages** — they were authored before `/about` and under tighter DS constraints. `/about` v2's job is to set the bar that those four pages later iterate toward, not to fit between them.

What that means for the diagnosis:

- The "wall of text" gap is real, but the fix is *not* "match the structural variety of `/why-ai` or `/principles`." The fix is to author the kind of compositional rhythm `/about` v2 needs as a class-leading surface, even if no existing page on the site has it.
- The "personal-not-company" gap is real, but the fix is *not* "match the brand-voice of `/why-ai` or `/principles`." The fix is to set the company voice for pouk.ai at the level the founder wants, and accept that the other pages may later need a voice pass to match.
- The "Apple-INC-inspired" reference is real, but Apple-INC is *one* reference for what class-leading composition can look like. The format is not pre-committed to Apple-mode moments-and-sections — see §4.5 for the broader format space the v2 spec admits.

The implication for the spec: **v2 succeeds when `/about` reads as a class-defining surface**, not when it reads as "the fifth page that fits in." If a v2 decision conflicts with an existing four-page convention, the four-page convention loses (and is recorded as a candidate for later iteration), not v2.

---

## 2. Revised positioning — what `/about` is *for*, in company-mode

### 2.1 New purpose statement

`/about` v1 purpose (from the spec): *"introduces the operator behind pouk.ai … answers the human question: who exactly will reply to my email?"*

`/about` v2 purpose (proposed): **`/about` is pouk.ai's stance, rendered.** It says what pouk.ai *is* — a small technical consulting firm with a specific operating philosophy and a specific kind of work — in the brand's own voice. Arian is named once, as the operator, not as the page's grammatical subject. The page closes the company-introduction question, not the founder-introduction question.

### 2.2 New audience model

v1 audience (paraphrased): prospect mid-funnel asking "who exactly will reply to my email?" Plus referrer needing a single canonical URL to attach.

v2 audience:
- **Primary**: prospect mid-funnel asking **"what kind of company is this?"** — what they stand for, what they do, what they don't do. They want company-grade clarity, not personal-blog warmth.
- **Secondary**: referrer needing a canonical URL — same as v1, but the URL now reads as "here's pouk.ai's stance, sized for two minutes" rather than "here's Arian's bio."
- **Tertiary** (new): prospect deciding whether to write *at all*. v1 spent its prose proving Arian is real; v2 should spend its composition proving pouk.ai is *real and considered* — a company that has thought about itself.

### 2.3 What `/about` is *not* in company-mode

- Not a bio. The operator is named (Arian, founder) but not the subject.
- Not a manifesto. `/principles` already does manifesto work; `/about` does not duplicate that job.
- Not a sales page. The page closes the company-introduction question and points to the email; it does not pitch.
- Not a story arc. Founder-arc material — frontend background, the turn toward consulting, the founding moment — retires from `/about`. If it lives anywhere, it lives in `/writing` (when that exists) or in biographical content elsewhere, not on `/about` v2.
- Not "the page that conforms to the site's existing register." (Per §1.5 — `/about` is the new register.)

### 2.4 (new) `/about` as register-lead — what the page is allowed to *try*

If `/about` is class-leading, the spec is allowed to commission moves the existing four pages have not yet had access to. Several concrete permissions follow:

- **Compositional moves not on the site today** — display type at a scale larger than `--fs-tagline`; full-bleed type bands; asymmetric grid moments; pulled statements set apart from the body column; multi-frame visual sequences; sectionless single-statement long-scrolls. None of these exist on the current four pages; none are disqualified by being absent.
- **DS-side commissions on demand** — the v2 spec is permitted to assume `@poukai-inc/ui` will receive new tokens / atoms / molecules / organisms scoped specifically for `/about`. See §4.4 for the on-demand-DS pattern. Six DS-side proposals already exist under `meta/proposals/ds-side/`; this is precedent, not exception.
- **Motion within the contract** — Lighthouse 100 mobile and `prefers-reduced-motion` honoring stay non-negotiable. Inside those bounds, motion is *permitted* (CSS-driven entrance reveals, scroll-driven type reveals, restrained on-load typographic settles). Motion is not the goal; motion is one tool among several.
- **A visual layer is *allowed***, not pre-committed. v1 was type-only and shipped with the parked illustration proposal deferring the visual question. Founder feedback in revision 2 says "great experiences" — which includes visual energy beyond pure type. The v2 spec may admit a visual element, defer it again, or commission a designer-led visual atom from DS. See §3 A3 row (revised) and §5 Q5 (revised).
- **Length is *allowed* to flex below the rev-1 target** — rev-1 proposed ~150–250 words; revision 2 admits that some formats (single-statement long-scrolls, multi-frame sequences) could land at <100 words and still close the company-introduction job. Word count becomes an output of format, not a constraint on it. See §4.1 (revised).

The boundary: **minimalism is the register, not the ceiling**. The page can be experimental and ambitious; it cannot be loud, busy, or maximalist. "Restrained but creative" is the brief.

Failure modes to call out explicitly:

- **Wall of text** (v1's failure). Re-occurs if v2 ships a long prose page in a different voice.
- **Boring-but-restrained**. v2 ships a clean composition that does nothing memorable. A page that is technically Lighthouse 100, on-brand, and prose-light, but does not give a reader anything to remember 24 hours later. This failure mode is *new* in revision 2 — rev-1 treated restraint as the ceiling, and revision 2 explicitly raises the bar.
- **Loud / busy**. v2 over-corrects from v1 and lands a maximalist page that breaks the brand restraint. Multi-color, multi-font, animated chrome, decorative imagery without purpose.
- **Class-of-one in the wrong direction**. v2 ships compositional moves the rest of the site can never adopt — a register that looks great on `/about` but cannot inform `/why-ai` / `/roles` / `/principles` future iterations. The brief is *register-lead*, not *register-orphan*.

---

## 3. A1–A18 re-examination — keep / revise / retire

Every locked decision from the v1 interview re-evaluated against the v2 positioning above.

| ID | Decision (v1) | v2 verdict | Rationale |
|---|---|---|---|
| **A1** | P0 is `/about` (no `/case-studies` override) | **Keep** | Page is still P0; only its register changes. |
| **A2** | Atomic migration: `/about` ships with `/` lede trim. R14 + R27 close via the Pouākai-sentence move. | **Keep — already executed** | Pouākai sentence already on `/about` (built HTML confirms). R14 + R27 stay closed in v2. Sentence content may re-render under a different composition treatment in v2; the migration itself is irrevocable. |
| **A3** | No founder visual asset in v1; illustration deferred to v2 via parked proposal. | **Re-open as discussion item** | `meta/proposals/about-illustration-v2.md` was parked because v1 was prose-only and the founder did not have conviction on a founder-portrait register. Revision 2's "great experiences" + DS-side capacity unlock changes the question. The visual question is no longer "should we add a founder portrait to humanize prose?" — it is now "**should `/about` carry a visual element at all**, and if so, what kind?" Options: (i) keep deferred (status quo); (ii) re-scope to a brand-mark / company-glyph treatment paired with the Pouākai statement; (iii) re-scope to a commissioned composition asset specific to `/about` v2 (e.g., a typographic moment, a visual sequence, a generative atom) that DS authors; (iv) promote to active, commission a founder-portrait-or-equivalent visual now. **Open question for founder — see §5 Q5 (revised).** Default-if-no-answer recommendation: **(iii)**, because it expands the design surface without forcing a founder-portrait commission. |
| **A4** | Top nav order `Why AI → Roles → Principles → About` | **Keep** | Nav order is composition-independent. |
| **A5** | Explicit first-person "I" throughout sections 1 and 2 | **Retire** | This is the central recalibration. v2 retires first-person from the body. Default proposal: **brand-voice declarative throughout** (matches `/`, `/why-ai`, `/roles`). Alternative: **third-person referring to Arian** ("Arian is the operator…"). The brand-voice declarative path is cleaner and more on-register. See §4.3 for the proposed voice contract. |
| **A6** | Medium prose (~400–600 words) in three sections (arc / why pouk.ai / Pouākai) | **Retire** | v1 landed at ~435 words and reads as wall-of-text. v2 target: **~150–250 words total**, distributed across **4–6 short composition units** instead of three prose-paragraph clusters. Apple-mode composition unit ≈ one short statement or one short quote, not one paragraph. See §4.1 for the proposed shape. |
| **A7** | Migrate R27 verbatim as section 3 opener; expand to ~80 words / 3 sentences | **Revise** | Sentence stays (atomic migration locked). Render treatment changes — likely *not* as a numbered prose section. Proposed v2 treatment: the Pouākai sentence renders as **a standalone pulled-quote-shape declaration** at large type, paired with a one-line caption acknowledging the source. The "respect posture" sentence retires from the page surface and migrates to a footer micro-note, or retires entirely if the standalone Pouākai treatment is restrained enough. See §4.2. |
| **A8** | Originally locked R14 verbatim opener; corrected to no opener voice-shift | **Moot** | A8 was already corrected (R14 sentence = R27 sentence; single sentence migration). In v2 the entire voice-shift framework dissolves because A5 retires — there is no body-first-person to shift away from. |
| **A9** | No `<h1>` in hero region; `<h1>` moves to section 1 | **Revise** | A9 was a workaround for the v1 prose-led shape (avoid agency-page register by removing the hero title). In Apple-mode composition, the page may carry **no `<h1>`-bearing prose section at all** — the brand stance line itself could be the `<h1>` at display type, with no preceding eyebrow lede. Alternative: keep the eyebrow band and put the `<h1>` on the first composition unit (whichever stance line that is). See §4 and §5 Q3. |
| **A10** | Pure post-frontend autobiographical framing for section 2 | **Retire** | The entire autobiographical thread retires. v2 section 2 (or its equivalent composition unit) is **a company-stance declaration**, not a founder arc. Candidate stance: "pouk.ai is a small technical consultancy that builds with AI tools in production." Concrete, falsifiable, brand-voice. See §4.2 and §5 Q1. |
| **A11** | `/principles`-style brand-voice end-CTA, single muted line | **Keep, with caveat** | End-CTA brand-voice already matches v2's body voice. The line stays brand-voice / second-person. The wording differentiation from `/principles` ("If the inbox sounds right, hello@pouk.ai.") may need to be re-considered if the page's hero lede ("Who you'd be writing into if you sent the email below.") retires, because the v1 CTA's "the inbox" referent depends on the hero lede. See §4.2. |
| **A12** | Instrument Serif italic section headings, ≤3 words | **Revise** | Heading typography stays Instrument Serif italic (it's the brand register). The ≤3-word constraint stays. What changes is **how the headings render in composition** — they are display-scale and standalone, not inline with prose at body type. Same typography, different size and placement. |
| **A13** | `/about` as parallel trust-loop page to `/principles` (OR semantics) | **Keep** | Flow position is composition-independent. v2 still answers "who runs pouk.ai" (now in company-mode), `/principles` answers "how does pouk.ai work." OR semantics holds. |
| **A14** | `<title>` "About — pouk.ai" function-named; meta description brand-voice | **Keep** | Title and meta were already function-named / brand-voice — they read correctly for v2. **However**, the v1 shipped meta description ("pouk.ai is one operator. Frontend engineering background, now running technical consulting through the AI tools that collapse months into days.") carries founder-arc content that retires in v2. The meta description rewrites alongside the page. |
| **A15** | Footer matches nav; standalone `Person` JSON-LD; no `worksFor`, no `sameAs` | **Keep** | Restraint posture at the structured-data surface is composition-independent. `/about` v2 still describes a `Person` entity (Arian, founder). |
| **A16** | Post-`/about` sequence is P1 `/404`, P2 `/contact` | **Keep** | Sequence is not affected by v2 register change. |
| **A17** | `/about` spec lands at `In review` | **Revise on landing** | v1 spec stays at `In review` for now (build-of-record). When v2 spec lands, v1 spec moves to `Superseded`. v2 spec lands at `Draft` after this proposal is approved, then `In review` after a v2 interview pass. |
| **A18** | Wrap | **Moot** | A18 was the interview-wrap line; v2 will have its own A1–An interview. |

**Summary of changes (revision 2)**: A5, A6, A10 retire. A7, A9, A11, A12, A14 revise. A3 re-opens as discussion item (was "recontextualize" in rev-1). A6's word-count target is removed entirely — word count is now an output of format, not a constraint. Eight of eighteen decisions affected; the rest hold.

**Cross-cutting framing change (revision 2)**: The constraint "compose `/about` inside existing `@poukai-inc/ui` primitives only" — implicit across the rev-1 verdicts — retires. DS-side commissions on demand are the *expected* path, not a last resort. See §4.4 (new) for the on-demand-DS pattern.

---

## 4. Proposed new shape — class-leading, format-open, DS-commission-friendly

Revision 2 expands this section. Rev-1 sketched one structural direction (Apple-mode moments-and-sections); revision 2 admits that as **one direction among several** and explicitly opens format exploration. The voice contract and the operator-line decision still hold across all directions.

### 4.1 Composition shape — sketch direction A (Apple-mode moments-and-sections)

The rev-1 structural direction stays on the table as one option. It is no longer the only option and is no longer the default; it is **direction A** in a multi-direction space (see §4.5 for B–E).

Direction A sketch:

1. **`SiteShell`** (unchanged from v1).
2. **Opening stance** — one short declarative sentence at **display type** (clamp similar to or larger than `--fs-tagline`). Brand-voice. Carries the page's `<h1>`. Standalone — no preceding eyebrow, no following lede in the same band.
3. **Two or three supporting statements** — short brand-voice declarations, each rendered as a standalone composition unit at intermediate type. Each carries one idea: what pouk.ai does, who it does it for, what shape an engagement takes.
4. **The operator line** — one sentence naming Arian once. Rendered as a contained composition unit (caption-shape, smaller type than the supporting statements). The page's *only* surface where the operator-question gets a direct answer.
5. **Pouākai unit** — standalone pulled-statement treatment for the R27 sentence at display type. Instrument Serif italic at display scale (designer's call). Respect-posture content per §5 Q4.
6. **End CTA** — minimal muted line, brand-voice / second-person.
7. **`SiteShell` footer** (unchanged).

**Composition unit count**: 4–6. **Word count target**: removed in revision 2 — word count is an output of the chosen format, not a constraint on it (per §2.4 and §4.5). Direction A would likely land around the rev-1 ~150–250 word range, but direction B (single-statement long-scroll, §4.5) could land at <50 words, and that is acceptable.

**Visual rhythm**: each composition unit reads as a separate beat. The reader's eye moves down the page in steps, not as a continuous scroll through prose.

### 4.2 Content register: brand-voice declarative throughout (applies across all directions A–E)

The voice contract is format-independent. Whichever structural direction the v2 spec lands on, the voice contract holds:

- **Opening stance / primary declarations**: brand-voice declarative. Subject is `pouk.ai`.
- **Supporting statements**: brand-voice declarative. Subject is `pouk.ai` or implied.
- **Operator line**: brand-voice + named-individual reference ("pouk.ai is one operator. Arian Zargaran, founder."). Third-person reference to Arian; no first-person "I".
- **Pouākai statement**: brand-voice declarative.
- **End CTA**: brand-voice / second-person invitational.
- **Meta description**: brand-voice. Rewrites to drop the founder-arc content from v1's shipped meta.

The v1 voice-shift framework (Pouākai section voice-shift, CTA voice-shift, meta description voice-shift) dissolves under v2: the body is already brand-voice, so there's no shift to manage. Three v1 voice-shifts collapse to zero in v2.

### 4.3 What this *doesn't* commit to

The composition is the designer's lane, not mine. This proposal sketches *direction shapes* — not exact typography, exact composition primitives, or exact layout grids. The designer's parallel recalibration proposal lands those decisions.

What the PM proposal explicitly defers to designer:

- Final structural direction pick (A–E from §4.5, or a hybrid, or a sixth direction the designer surfaces).
- Display-type scales, grid choices, column structures.
- Typographic register for the Pouākai unit (Instrument Serif italic at display scale is one option; designer may surface alternatives).
- Motion choices within the Lighthouse + a11y contract.
- Visual-asset decisions if any (per §3 A3 row and §5 Q5).

### 4.4 (new) DS-side relationship: on-demand commissions are the expected path

Revision 2 explicitly reframes the relationship to `@poukai-inc/ui`. v1 was authored under the constraint "use existing DS primitives only" — this surfaced in the v1 spec's §9 dependency on a designer review of the no-`<h1>`-in-hero structural call (A9), which would have surfaced a need for a DS variant proposal *only if forced*.

Revision 2 retires that constraint. The on-demand DS commission pattern is the *expected* path for `/about` v2.

Concretely:

- **Six DS-side proposals already exist** under `meta/proposals/ds-side/`: `button-size-compact.md`, `hero-entrance-stagger.md`, `hero-illustration-slot.md`, `hero-intimate-rhythm.md`, `hero-size-prop.md`, `hero-no-title-variant.md`. The on-demand commission flow is precedented, not exceptional.
- **The v2 spec is permitted to require new DS components.** Whenever a composition need exceeds the current `@poukai-inc/ui` surface, the PM spec files a DS-gap proposal at `meta/proposals/ds-side/<component>.md` and the v2 spec's §9 dependencies list that proposal as a blocker for `Built` (not for `Approved`).
- **DS-gap proposals authored by PM are scoped to the *site-side need*** — what the page needs the component to *do*, not the component's API or implementation. `@poukai-inc/poukai-ui` maintainers translate to a DS proposal. PM does not author DS APIs (per agent §1 "What you don't write").
- **DS commissions do not block the proposal's approval.** The proposal (this file + the v2 spec, when it lands) reaches `Approved` independent of DS readiness. `Built` is the gate that requires DS components to be published.

Candidate DS-gap proposals that may emerge from v2 (illustrative, not exhaustive):

- A display-type atom larger than `--fs-tagline` — for the opening stance or Pouākai statement.
- A pulled-statement molecule — typographic band that breaks out of the body column.
- A full-bleed statement organism — for direction B or C in §4.5.
- A multi-frame sequence molecule — for direction D.
- A motion-aware reveal atom — for direction E, scoped to `prefers-reduced-motion`-friendly defaults.
- A typographic asymmetric-grid molecule — for the asymmetric-grid moment direction.

Which DS-gap proposals actually get filed depends on the structural direction the v2 spec lands on. None are committed by this proposal.

### 4.5 (new) Format exploration — direction space beyond Apple-mode

Revision 2 admits additional structural directions for the v2 spec. The PM proposal does not pick the direction; it surfaces the space the spec is allowed to explore. The designer's parallel recalibration proposal narrows the space.

**Direction A — Apple-mode moments-and-sections** (rev-1's direction, sketched in §4.1 above). Multi-unit composition; each unit is a standalone band; pulled statements; restrained but compositional. Lowest novelty; highest cross-page-iteratable potential (other pages can later adopt the moments-and-sections shape).

**Direction B — Single-statement long-scroll**. The entire page is one sentence (or a very short statement, ≤15 words) set at display scale, with the operator line + Pouākai statement + end CTA appearing on subsequent scroll positions as separate single-statement moments. No supporting paragraphs. The reader scrolls through *declarations*, not prose. Word count: <50 total. Highest restraint; highest risk of "boring-but-restrained" failure mode. Mitigation: the *typography* and *spacing* are the experience — display type, asymmetric whitespace, paced reveals as the reader scrolls.

**Direction C — Full-bleed type bands**. Sequence of 3–5 full-viewport-width type bands. Each band carries one statement at very large scale, edge-to-edge on the page (breaking the content-column constraint the other four pages observe). Between bands, narrower body-type captions. Maximum visual variety per scroll-depth; highest break from the legacy register; requires DS commissions for the full-bleed primitive. Highest cheese-risk if executed maximalist; works only if the typographic restraint holds at full-bleed.

**Direction D — Multi-frame narrative sequence**. Page is a sequence of compositional frames (3–6), each frame carrying one beat of pouk.ai's introduction. Could be a typographic sequence (frame 1: "pouk.ai builds." → frame 2: "with AI tools." → frame 3: "in production." → frame 4: operator line → frame 5: Pouākai → frame 6: CTA). Could read as paced, almost cinematic. Lighthouse-100 friendly only if implemented as static-rendered HTML with no scroll-jacking JS — the "frames" are CSS layout sections, not a slideshow. Requires DS commissions for the frame primitive and potentially for scroll-snap-friendly composition.

**Direction E — Generative typographic composition**. Single hero composition that uses CSS-based generative typography — multiple type sizes, weights, italics combined in one asymmetric typographic moment that *is* the page. Inspired by editorial-design / type-specimen traditions. The composition itself does the introduction job; supporting statements are smaller marginal type around it. Highest novelty; highest design-craft requirement; requires the most DS-side work. Best-case outcome: a page that reads like a typographic statement — pouk.ai introduced as a *visual idea*, not as a list of facts.

**Cross-direction notes**:

- All five directions honor the voice contract in §4.2.
- All five directions retire A5 (first-person), A6 (~400–600 words), A10 (autobiographical framing).
- All five directions preserve A2 (atomic migration already done), A4 (nav order), A13 (trust-loop OR semantics), A15 (`Person` JSON-LD restraint).
- Directions B, C, D, E almost certainly require DS-side commissions; direction A may or may not.
- The visual-asset question (A3 row, §5 Q5) is independent of direction A–E — any of the five could carry or not carry a non-typographic visual.

The PM proposal recommends **the designer lead the direction pick**, because the choice is dominantly compositional (which direction can pouk.ai's brand register actually carry, executed well?). Founder makes the final call after reading both the PM and designer recalibration proposals.

---

## 5. Open questions for founder — six, reshaped for register-lead

Six questions. Re-shaped from rev-1 to match revision 2's framing: `/about` is class-defining (not class-conforming), DS-side capacity is unlocked, format exploration is in scope. Q1 and Q5 are most materially re-shaped; Q2, Q3, Q4 hold their substance but drop cross-page-conformity language; Q6 is new (direction pick); the old Q6 (re-interview cadence) becomes a smaller closing note in §7.

### Q1 — What is pouk.ai's actual stance, in one sentence?

The page's load-bearing line. v1 didn't have one — its prose never quite said "pouk.ai is X." v2 lives or dies on it, regardless of which structural direction (A–E in §4.5) the spec lands on.

Three candidate shapes (illustrative, not literal — final wording is content drafter's):

- **(a) Capability-led**: *"pouk.ai builds with AI tools in production."*
- **(b) Audience-led**: *"pouk.ai works with teams that need to ship AI, not commission decks about it."*
- **(c) Posture-led**: *"pouk.ai is a small technical consultancy. We write the code we recommend."*

Which direction (and what does the actual sentence say)? The page composition pivots on this — direction B (single-statement long-scroll) and direction E (generative typographic composition) in particular cannot be designed without the stance line first.

### Q2 — Is pouk.ai a company, a firm, or an operator-with-a-brand?

The founder feedback says "this is a company, not Arian's story." Three honest readings:

- **(a) Company (plural-implicit "we")**: pouk.ai is positioned as if it has plurality, even if it's currently one operator. Voice uses implicit-first-person-plural ("we"). The operator line names Arian as *founder* of the company.
- **(b) Firm / one-operator-consultancy**: pouk.ai is named as a one-operator consultancy explicitly. Voice is third-person about pouk.ai-as-firm. The operator line names Arian as *the operator*.
- **(c) Operator-with-a-brand**: pouk.ai is named as Arian Zargaran's professional practice / consulting brand. Voice is third-person about pouk.ai. The operator line acknowledges Arian as the *practice owner*.

Most defensible default: **(b)** at current scale, with explicit one-operator framing carried in the operator line. The brand framing applies to the whole site eventually; v2 sets it on `/about` first, and the other four pages iterate toward it later (per §1.5 register-lead framing). Founder picks.

### Q3 — Does the page carry an `<h1>`, and where?

Three valid shapes (rev-1 had two; revision 2 adds a third):

- **(a) Opening stance = `<h1>`**. The stance line is set as `<h1>` at display type. SEO and a11y satisfied; the page has one `<h1>` semantically and visually.
- **(b) No `<h1>` on the page**. The page's primary heading is the company name in the global nav; there's no `<h1>` on the page itself. `<title>` carries "About — pouk.ai." A11y unconventional but defensible.
- **(c) `<h1>` is a typographic atom inside a directional composition** — e.g., direction E (generative typographic composition) may want the `<h1>` to be one element inside a typographic moment, not a standalone band. Still one `<h1>`, but placed for compositional reasons.

Recommendation: **(a)** for directions A, B, C, D; **(c)** for direction E. Founder picks after direction pick (Q6).

### Q4 — What happens to the Pouākai respect-posture content?

v1's section 3 carries three sentences (~75 words):
1. R27 verbatim (the origin sentence).
2. "The name comes from Māori tradition; the bird is real…"
3. "pouk.ai borrows the name as a reference point … and stops there: no Māori visual motifs, no claim to the culture, no metaphor stretched past the one-line origin."

In v2's composition, sentence 1 stands alone as a pulled statement (any direction A–E). Two paths for sentences 2 + 3:

- **(a) Retire from `/about`**. The respect posture moves to either (i) a footer-level micro-note on `/about` set in `--fg-muted` at meta type, (ii) a one-line caption beneath the standalone Pouākai statement, or (iii) off `/about` entirely and into an internal-document at `meta/brand/poukai-origin.md` for reference, not shipped on the site.
- **(b) Keep on `/about` as a small caption beneath the pulled Pouākai statement**. Smaller type, single line, signals respect without making the page about Māori cultural framing.

Recommendation: **(b)** with the two sentences compressed to ~25 words. The respect posture is a brand commitment; ship it on the surface that names Pouākai, just smaller. Founder picks.

### Q5 — Does `/about` v2 carry a visual element, and what kind?

Materially re-shaped from rev-1. Four options now (rev-1 had three):

- **(a) Keep deferred**. `meta/proposals/about-illustration-v2.md` stays at `Draft (parked)`. v2 ships type-only across whichever direction A–E is picked. Trigger conditions in the parked proposal still apply for any future visual question.
- **(b) Re-scope the parked proposal to brand-mark / company-glyph treatment**. The illustration question morphs from "founder portrait" to "brand-mark or company-glyph paired with the Pouākai statement." Same proposal file, different scope.
- **(c) Re-scope and promote — commission a designer-led visual atom from DS**. The visual element is a composition asset specific to `/about` v2 — a typographic moment, a visual sequence, a generative atom — that `@poukai-inc/poukai-ui` maintainers author as a new DS primitive. Not a founder portrait, not a brand mark, but a *designed visual element*. Re-scopes the parked proposal and promotes it to active. Adds a DS-side blocker for `Built` (not for `Approved`).
- **(d) Promote to active and commission a founder-portrait-or-equivalent visual now**. Reverses A3's deferral. The parked proposal moves from `Draft (parked)` to `Draft (active)`; mood-board pass (path (ii) in the parked proposal's §6) runs; illustrator brief drafts; commission proceeds.

Recommendation: **(c)**. The "great experiences" + DS-side-capacity-unlock framing in revision 2 points at a designed visual asset that is *not* a founder portrait — a visual element that does the job a portrait would do (give the reader something to remember 24 hours later) without forcing the founder-portrait commission. (a) is the safe default; (d) is the largest commitment; (c) is the move that takes advantage of revision 2's DS-side unlock most directly. Founder picks.

### Q6 — Which structural direction (A–E) does v2 pursue?

New question in revision 2. Direction space sketched in §4.5: (A) Apple-mode moments-and-sections, (B) single-statement long-scroll, (C) full-bleed type bands, (D) multi-frame narrative sequence, (E) generative typographic composition.

The PM proposal does not pick the direction — direction selection is dominantly compositional and the designer's parallel recalibration proposal lands the recommendation. Two ways for the founder to engage:

- **(a) Founder picks direction now**, before designer proposal lands. Locks the brief tighter, gives the designer a narrower problem to solve.
- **(b) Founder reads both PM and designer recalibration proposals first**, then picks direction. Less locking, more reversibility, but slightly longer turnaround to v2 spec.

Recommendation: **(b)**. The designer's compositional reasoning is the load-bearing input here; founder picks after seeing it.

---

## 6. What this proposal does *not* cover

- The v2 composition (designer's lane). `pouk-ai-designer` is briefed in parallel on the same revision-2 feedback and will land a composition proposal at `meta/compositions/proposals/about-v2.md` or equivalent. Both proposals land before any spec / composition revision.
- The structural-direction pick from §4.5 (A–E). PM surfaces the space; designer narrows it; founder picks (§5 Q6).
- The exact final copy for the v2 page. Content drafter's lane after PM spec lands.
- DS-side component APIs for any commission that emerges from v2. PM files DS-gap proposals at `meta/proposals/ds-side/` scoped to the *site-side need*; `@poukai-inc/poukai-ui` maintainers translate to a DS proposal. PM does not author component APIs (per agent §1 "What you don't write").
- A retroactive critique of the designer's v1 composition verdict (the skip-`<Hero>`, prose-column-only call). That call honored the v1 spec correctly; the spec's shape itself was the failure mode. v2 is a re-specification, not a v1 designer-error.
- A retroactive critique of the founder's v1 approvals (A1–A18). The interview produced an internally consistent spec. The register mismatch and density issue surface only when the page is read live — which is exactly the right moment for v2 iteration.
- Changes to other pages on the site. v2 affects `/about` only. Per §1.5, `/about` is register-lead — other pages may iterate toward `/about`'s register *later*, in their own respec passes. v2 does not trigger those.
- v2 launch sequence. Once the v2 spec lands, the v2 page can ship as a direct overwrite of v1's `src/pages/about.astro` — no migration, no atomic coupling, no flow-spec revision. The flow spec already admits `/about`; v2 changes the page's substance, not its position in the flow.

---

## 7. Decision asked of founder

Once founder reads this proposal (and the designer's parallel recalibration proposal):

1. Confirm the diagnosis in §1 — wall-of-text + personal-not-company are the right reads, or push back on either.
2. Confirm the §1.5 register-lead framing (`/about` is class-defining, not class-conforming) and the §2.4 register-lead permissions.
3. Confirm or revise the v2 positioning in §2 — `/about` as company-mode pouk.ai stance vs. some other framing.
4. For each row in §3's A1–A18 re-examination table, approve the verdict (`keep` / `revise` / `retire` / `re-open`) or override. The A3 row (visual-asset re-open) is the most material change from rev-1.
5. Confirm the §4 framing: direction A is one option among A–E (§4.5); DS-side commissions are the expected path (§4.4); voice contract holds across all directions (§4.2).
6. Answer the six open questions in §5 — Q1 (stance sentence), Q2 (brand framing), Q3 (`<h1>` placement), Q4 (Pouākai respect-posture), Q5 (visual element, four options), Q6 (direction pick — A–E).

**Re-interview cadence** (was rev-1 Q6, now a closing note): most v1 decisions hold or have a clear default in this proposal; the open questions in §5 are six, not eighteen. Recommended cadence is **inline approval** — founder marks each §3 row and writes a one-line answer to each §5 Q in a single response — over a full interview turn. Founder picks.

Once those are answered, PM authors the v2 `/about` spec. Default file convention: **revise `meta/specs/pages/about.md` in place, mark v1 superseded inside the spec, version field bumps to v2**. Keeps the spec history readable in one file. Founder may instead request a new path (`meta/specs/pages/about-v2.md`) — that's a convention call, not a substance call.

Concrete next-step sequence after founder approval:

1. PM updates `meta/specs/pages/about.md` to v2 (or authors `about-v2.md`), at status `Draft` first, then `In review` after a v2 interview pass if any open questions remain.
2. Designer lands `meta/compositions/pages/about.md` v2 (or `about-v2.md`), tied to the same direction pick.
3. PM files any required DS-gap proposals at `meta/proposals/ds-side/` for components emerging from the chosen direction. Each proposal at status `Draft`, scoped to site-side need only.
4. `pouk-ai-content` drafts the v2 copy at `meta/content/drafts/pages/about.md` v2.
5. v1 spec / draft / composition move to `Superseded` once v2 chain reaches `Approved`.
6. `pouk-ai-engineer` builds v2 once DS commissions land in `@poukai-inc/ui` and all four artifacts (spec / composition / content / DS) are `Approved`.
