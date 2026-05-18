# Proposal: Next-pages priorities

**Status**: Resolved (P0 locked → `/about` spec in review; P1 / P2 sequence locked; Skip / re-evaluate calls recorded)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-18
**Masterplan reference**: Section 6 (cutover scope), Section 7.3 (Customer Story deferral)
**Prior art**: `meta/specs/pages/{home,why-ai,roles,principles}.md`, `meta/specs/flows/visitor-to-conversation.md`, `meta/backlog.md`
**Resolution record**: PM interview on 2026-05-17/18 (A1–A18). Memo originally landed 2026-05-17 as `Draft`; resolution pass 2026-05-18 locks the sequence.

---

## 0. Resolution at a glance (added 2026-05-18)

Outcome of the A1–A18 PM interview with Arian. Full rationale per candidate lives in §2 below.

| Page | Status | Notes |
|---|---|---|
| `/about` | **P0 — locked, spec authored** | `meta/specs/pages/about.md` lives at `In review`. Atomic with home content draft revision (R14 + R27 close on the same migration: removing the single Pouākai origin sentence from `/`). Type-only at v1; illustration deferred to v2 via parked proposal at `meta/proposals/about-illustration-v2.md`. |
| `/404` | **P1 — locked** | Hold at P1 (S-effort, on-brand salvage page). No overrides; scoping deferred to spec-time interview. |
| `/contact` | **P2 — locked** | Hold at P2. `mailto:` is working at current inbound volume. Re-evaluate when analytics show `mailto:` click-throughs falling vs. page views. Scoping (form vs. links-only) deferred to spec-time interview. |
| `/case-studies` | **Skip until customer permission** | No named customer ready in the next 30 days (A1). Re-promote to P0 the day at least one paying engagement closes with a customer willing to be cited with a quantified outcome. |
| `/engagements` (or `/services`) | **Skip** | Contradicts the stated `/roles` brand position (§10 of `pages/roles.md` rejects per-role pricing / packaging tiers). Reconsider only if Arian re-decides the `/roles` brand position. |
| `/writing` (or `/notes`) | **Skip until cadence** | Strong long-term lever, wrong move now. Re-evaluate when Arian has three drafts in flight and confirmed cadence. |
| `/uses` / `/stack` | **Skip permanently** | Speaks to peers, not prospects. Off-brand for the operator-first register. |
| Per-role sub-routes (`/roles/builder` etc.) | **Skip until depth exists** | `roles.md` §10 reserves as future call. Trigger: one role grows 600+ words of unique substance. |

Decisions recorded per-question:

- **A1**: P0 = `/about`. No `/case-studies` override (no named customer ready).
- **A2**: Atomic migration. `/about` ships in the same PR as the `/` trim.
- **A3**: No founder visual asset in v1. Illustration deferred to v2 via `meta/proposals/about-illustration-v2.md` (status `Draft (parked)`). Trigger conditions: first paying engagement closes, OR quarterly site review, OR explicit prospect feedback "who am I emailing?". No mood-board pass in parallel.
- **A4**: Top nav order `Why AI → Roles → Principles → About`.
- **A5**: Explicit first-person ("I") for `/about` body prose.
- **A6**: Medium-length `/about` prose (~400–600 words) in three sections (arc / why pouk.ai / Pouākai origin).
- **A7**: Migrate R27 one-liner verbatim as the opening sentence of section 3; expand to ~80 words max across three sentences.
- **A8**: Originally locked R14 sentence verbatim migration as the section 1 opener; correction recorded 2026-05-18 — R14 sentence 2 IS the Pouākai origin sentence (same as R27), not a separate "arc" sentence. R14 closes by sentence-count migration (4 → 3), not by an "arc" sentence move. Section 1 of `/about` opens fresh in first-person. Three deliberate voice-shifts total (Pouākai section, CTA, meta description), not four.
- **A9**: No `<h1>` in `/about` hero region. The `<h1>` moves into section 1 (the arc). Spec flags as deliberate divergence from the other four pages; designer review of the structural call is captured in `/about` spec §9.
- **A10**: Pure post-frontend autobiographical framing for section 2. No "ship vs. deck" slogan, no competitive jab.
- **A11**: `/principles`-style brand-voice / second-person end-CTA, single muted line, differentiated wording from `/principles`.
- **A12**: Instrument Serif italic `<h2>` section headings, ≤3 words each.
- **A13**: `/about` as parallel trust-loop page to `/principles` (OR semantics, not sequential). Documented as the recommended primary URL for referrer-intro, founder-DM, and email-signature contexts.
- **A14**: `<title>` is `About — pouk.ai` (function-named); meta description is brand-voice. "Arian Zargaran" name-query SEO ceded to LinkedIn / X / other indexed surfaces by design.
- **A15**: Footer order matches nav; standalone `schema.org/Person` JSON-LD on `/about` only; no `worksFor`, no `sameAs`.
- **A16**: Post-`/about` sequence is P1 `/404`, P2 `/contact`. No overrides.
- **A17**: `/about` spec lands at `In review`; illustration v2 proposal lands at `Draft (parked)`.
- **A18**: Interview wrap. No more clarifying questions.

Coupled deliverables from the resolution pass (all landed 2026-05-18):

1. `meta/specs/pages/about.md` — `In review` (the full `/about` spec).
2. `meta/proposals/about-illustration-v2.md` — `Draft (parked)` (the illustration v2 question carried forward).
3. `meta/content/drafts/pages/home.md` — frontmatter + preamble + Flag 1 updated to flag the v1.1 pending revision (atomic with `/about` ship).
4. `meta/specs/flows/visitor-to-conversation.md` — v1.1, admits `/about` as parallel trust-loop page + documents referrer-intro primary URL role.
5. This memo — resolution annotations added.

---

## 1. Why this memo exists

The four-route site (`/`, `/why-ai`, `/roles`, `/principles`) is live, Lighthouse-100 on production, and the funnel runs. The current funnel ends at one of two places:

1. `mailto:hello@pouk.ai` — the conversion event.
2. The visitor closing the tab having "trusted up" without writing yet.

Both are valid, but the funnel has three structural gaps that the next page(s) should close:

- **No proof.** A prospect who agrees with `/why-ai`, recognizes themselves in `/roles`, and likes the voice of `/principles` still has no evidence that pouk.ai *does* the work it claims. Trust-by-typography only gets one so far.
- **No founder.** The site speaks in the brand voice "pouk.ai" but never introduces Arian — the actual operator the prospect will email. Two backlog items (R14 lede sentence 2, R27 Pouākai origin) are already parked as "migrate when `/about` ships."
- **`mailto:` is the only exit.** Acceptable today, but every page funnels to the same surface — there is no contact page that lets a referrer link a prospect to "the place where you start a conversation" without committing them to opening their mail client mid-LinkedIn scroll.

This memo evaluates six candidate pages against those gaps and ranks them. It is not a spec; it is the prioritization step before specs.

---

## 2. The candidates

Each entry follows the requested template — one sentence on purpose, funnel position, effort, dependencies, recommendation.

### 2.1 `/contact` (or `/work-with-us`)

1. **Purpose**: Give a referrer (and a mobile-first visitor who hates `mailto:`) a single canonical landing page that frames how to start a conversation with Arian, surfaces the email and LinkedIn DM paths plainly, and sets expectations on response time.
2. **Funnel position**: New terminal node after `/roles`, `/why-ai`, and `/principles` — replaces *some* of the work `mailto:` does today. Funnel becomes `/` → `/why-ai` → `/roles` → `/contact` → email/DM. `/principles` still feeds `mailto:` directly because trust pages should not feel like sales steps.
3. **Effort**: **S**. No DS primitives needed beyond `SiteShell` + `Hero`. Content is short. Engineering is one Astro page with no JSON. If we *add* a contact form (Resend / Formspree / Vercel function), that bumps to **M** because of the JS island, server endpoint, anti-spam, and accessibility-of-error-states surface.
4. **Dependencies / blockers**: No external blockers if we ship `mailto:`-plus-LinkedIn-only. If a contact form lands, depends on (a) Arian picking a form backend, (b) anti-spam strategy (honeypot vs. Turnstile), (c) accepting a hydration island on the page — counts against the per-page JS budget. None of those exist today.
5. **Recommendation**: **P2 (later).** `mailto:` is working. A contact page without a form is a thin reorganization of links that already exist; with a form it adds a hydration island and a backend dependency for marginal gain at the current inbound volume. Re-evaluate once analytics show `mailto:` click-throughs falling vs. page views (mobile-Safari `mailto:` UX is the most likely trigger).

### 2.2 `/case-studies` (or `/work`)

1. **Purpose**: Close the "no proof" gap — show that pouk.ai has shipped real work for real clients, with named outcomes, so the prospect's lizard brain can stop asking "but do they actually do this?"
2. **Funnel position**: New surface that sits **between `/why-ai` and `/roles`** in the prospect's mental model (problem → proof → which-flavor-of-help), and **after `/roles`** as a deep-dive (a reader who picked Automator clicks through to "see Automator engagements"). Likely deep-linkable from `/roles` per role.
3. **Effort**: **L**. Composition + engineering are M at most (the DS already has `RoleCard` and `Stat`; a `CaseStudyCard` recipe could be a `RoleCard`-shaped composition that fits within existing primitives). **The content effort is the load-bearing one**: each case study needs (a) a customer who agrees to be named or anonymized at a specific level, (b) a quantified outcome (the page lives or dies on numbers, mirroring `/why-ai`), (c) before/after framing that doesn't compromise the customer's IP, (d) a one-line testimonial or pull-quote if obtainable.
4. **Dependencies / blockers**: **Real customers must agree to be cited.** Without at least two named engagements (or two cleanly-anonymized ones with permission), this page reads as vapor and is worse than not shipping it. Also masterplan §7.3 reserves customer-story *photography* for "founder-approved per case" — same gate applies to text. No DS blocker. No tooling blocker. Pure content/permission blocker.
5. **Recommendation**: **P1 (next-next), conditional.** Worth it the day the second engagement closes with a customer willing to be cited. Before then, P2. Note: see §3 below for an interim move that gets ~70% of the value at S effort.

### 2.3 `/about`

1. **Purpose**: Introduce Arian as the operator behind pouk.ai — close the "no founder" gap, carry the Pouākai origin and the Frontend-Engineer-to-technical-consultant arc, give referrers a single URL to send when intro'ing ("read his about, then DM me back").
2. **Funnel position**: Trust-loop adjacent to `/principles`. A reader who has agreed with the thesis (`/why-ai`), matched a role (`/roles`), and liked the voice (`/principles`) wants to know *who* writes in this voice. Often the page right before `mailto:` for the careful prospect.
3. **Effort**: **S**. No new DS primitives. `SiteShell` + `Hero` + body prose + optional `Stat`/`Wordmark` on credentials. One Astro page, no JSON file required — single-page hardcoded prose is fine at one author.
4. **Dependencies / blockers**: None external. The one open question is whether `/about` carries a photograph of Arian. The brand's "trust-by-typography" posture has held through four pages — a face would be the first time the site shows a person, and that is either a credibility unlock or a brand violation depending on execution. Solvable inside the spec.
5. **Recommendation**: **P0 (next spec).** See §3 for the full argument. The short version: it closes two already-recorded migration triggers (R14 lede sentence 2, R27 Pouākai origin) in `home.md` and unblocks the homepage's one acknowledged content debt. It's the cheapest, highest-confidence page on this list.

### 2.4 `/writing` (or `/notes`)

1. **Purpose**: Build a thought-leadership corpus over time — index of essays/posts that demonstrate pouk.ai's POV beyond the one thesis page (`/why-ai`). Doubles as SEO surface for long-tail queries ("AI deployment gap data readiness audit", "vertical AI agent ROI").
2. **Funnel position**: Top of funnel and re-engagement loop — a reader who finished `/why-ai` and wants more, or a returning visitor who already converted and is now reading because they like the operator's mind. Not directly on the conversion path.
3. **Effort**: **L** structurally, **M** for v1. Engineering needs (a) a real content collection (`src/content/writing/*.md` or MDX), (b) routing per post (`/writing/[slug]`), (c) index page, (d) RSS feed if we want subscribers, (e) OG image generation per post or a sensible fallback, (f) sitemap entries per post, (g) reading-time/date components. None of this is in `@poukai-inc/ui` today. Content effort is the killer: a `/writing` page with two posts is worse than no `/writing` page (looks abandoned).
4. **Dependencies / blockers**: **Cadence commitment.** A writing surface without a sustained cadence (≥1 post/month for 6 months) signals decay. Also Astro content-collections vs. MDX vs. JSON is a stack call Arian has deferred (see backlog "long-form content as data" framing). RSS is optional but a one-time engineering item.
5. **Recommendation**: **P2 (later).** Strong long-term lever, wrong move now. Pouk.ai is six months from being able to credibly run a writing surface — Arian's bandwidth is converting inbound, not authoring. A single sharp essay landing as `/why-ai-data-readiness-audit` (sub-page of `/why-ai`) gets ~80% of the SEO benefit at zero engineering cost. Re-evaluate when Arian has three drafts in flight.

### 2.5 Custom `/404`

1. **Purpose**: Replace Vercel's generic 404 with a pouk.ai-shaped one — keeps the brand contract on the one page guaranteed to be the worst surface a visitor experiences.
2. **Funnel position**: Off the canonical funnel. A salvage page — converts an accidental visit into a re-routed read.
3. **Effort**: **S**. No DS work. One Astro page (`src/pages/404.astro`), reuses `SiteShell` + `Hero`. Content is two lines plus three links back into the canonical funnel.
4. **Dependencies / blockers**: None.
5. **Recommendation**: **P1 (next-next).** Cheap and on-brand. The only reason it's not P0 is that pouk.ai's URL space is four pages — the surface area for 404s is tiny right now. Promote to P0 the day we add any page that creates new sub-routes (`/case-studies/[slug]`, `/writing/[slug]`).

### 2.6 `/engagements` (or `/services`) — packaging + pricing

1. **Purpose**: Make the unit-of-work explicit — what an engagement looks like, what it costs, how long it runs, what the deliverables are. Compress the discovery email volume by letting a prospect self-qualify on scope and price before writing.
2. **Funnel position**: Adjacent to `/roles`. A reader who has matched themselves to "Builder" but doesn't know whether they can afford pouk.ai is currently a silent drop-off. `/engagements` answers "how does pouk.ai sell?"
3. **Effort**: **M as its own page; S as a section appended to `/roles`.** The DS work is identical to `/roles` (cards or list molecules). The dominant question is structural: a separate page or a `/roles` extension?
4. **Dependencies / blockers**: **Pricing is the load-bearing decision Arian hasn't published.** The current spec posture (`/roles` §10: "no per-role pricing, packaging tiers, or 'starts at $X' displays. The brand is 'let me understand your problem first,' not 'pick a tier.'") is an explicit anti-recommendation against this page. A pricing surface conflicts with the consultative positioning. If pricing is *categorical* (e.g., engagement shapes: discovery / pilot / build / retainer) without dollar figures, that conflict softens but doesn't disappear.
5. **Recommendation**: **Skip as a separate page; reconsider as a section on `/roles` only if Arian decides to publish engagement-shape framing without dollar figures.** The current `/roles` spec actively rejects this. Don't ship against a stated brand position without re-deciding the brand position first. If Arian wants to revisit, that's a re-spec of `/roles`, not a new page.

### 2.7 Added by PM — `/uses` or `/stack` (rejected)

Considered: a "what tools pouk.ai uses" page. Trendy in the indie-hacker space, plays well on Hacker News. Rejected because (a) it speaks to peers, not prospects; (b) it ages fast and signals tinkering; (c) the existing brand voice ("Direct. Operator-first. Refined.") punishes lists-of-stuff content. Not on the priority list.

### 2.8 Added by PM — Per-role sub-routes (`/roles/builder`, etc.) (rejected for now)

Considered: promoting each of the four roles to its own route. `roles.md` §10 reserves this as "a future call" once a single role grows substantially deeper content. The right trigger is a real engagement-shape elaboration *or* a case-study cluster anchored on a role — neither exists yet. Skip until at least one role has 600+ words of unique substance.

---

## 3. Why `/about` is P0 — the recommendation

**Three converging reasons.**

**First, it closes documented content debt.** The home content draft (`meta/content/drafts/pages/home.md`) carries two flagged exceptions pending `/about`:
- R14 — the home lede currently runs 4 sentences, exceeding the DS `<Hero>` "1–3 sentences" cap.
- R27 — the Pouākai origin one-liner currently lives on `/` and is flagged as a deliberate-but-time-bounded exception to the agent §4.5 "respectful, sparing" rule (which permits the origin on `/about` or in long-form, not on the homepage).

*Correction recorded 2026-05-18*: R14 and R27 close on the **same migration**. The 4-sentence over-cap (R14) is over-cap by exactly one sentence — and that one sentence is the Pouākai origin sentence (R27). Removing the single origin sentence from `/` drops the lede to 3 sentences (closes R14 by sentence-count compliance) and migrates the origin to `/about` (closes R27). One removal, two flags closed. The earlier framing in this memo (which read R14 and R27 as twin debts) was imprecise; the corrected framing lives in `meta/specs/pages/about.md` and the home content draft's pending-revision frontmatter. The shipping consequence is unchanged: `/about` ships in the same PR as the trimmed `/` lede.

No other candidate page closes a recorded debt of any kind.

**Second, it's the lowest-risk addition to a working site.** `/about` is S-effort, S-content-effort, zero new DS primitives, no external dependencies, no permissions required, no cadence commitment. The other candidates carry asymmetric downside: `/case-studies` without customer permission is brand damage; `/writing` without cadence is decay theatre; `/engagements` contradicts a stated `/roles` brand position. `/about` carries none of those risks.

**Third, it unlocks the next moves.** A founder page does three downstream things:
- Names Arian, which makes `/case-studies` (when it lands) read as "Arian shipped this for Customer X" instead of "the abstract pouk.ai entity claims it shipped something."
- Gives the founder a stable URL to use in cold outreach, LinkedIn replies, and email signatures — currently `pouk.ai/` is doing that work and getting overloaded.
- Establishes a precedent for first-person voice on the site (a softer register than the brand-voice manifesto on `/principles`), which is the surface every later page benefits from.

**One concession against this recommendation.** `/case-studies` is the *highest-impact* page on this list if Arian can land permission from one named customer in the next 30 days. If a real customer (current or recent) is willing to be cited with a quantified outcome, `/case-studies` jumps to P0 and `/about` becomes P1. That's the only realistic re-ordering. Flag it back to me and I'll re-prioritize.

---

## 4. Draft outline of the `/about` spec — what it will need to cover

Hand-off bullets so Arian can approve P0 and I can author the full spec next.

1. **Purpose**: One paragraph — `/about` is the operator-introduction page. Closes "who exactly will reply to my email?" and migrates two parked sentences off `/`.
2. **Audience**: Primary — a prospect who has read 2+ other pages and is triangulating whether Arian is the kind of operator they want in the room (overlap with `/principles` audience, but the question is "who" not "how"). Secondary — a referrer about to make an intro who needs a single URL to attach.
3. **Success criteria**: Behavior — visitor reads `/about`, recognizes Arian as a peer/operator (not a vendor), exits via `mailto:` or back to `/roles` with higher conviction. Failure — reads as a résumé or a LinkedIn export.
4. **Information architecture**: `SiteShell` → `Hero` (eyebrow "About", title TBD by founder, lede framing the "Frontend Engineer → technical consultant" arc) → one or two prose sections covering the operator's background and how they engage → a small `Stat`-or-list block of credentials if needed (years shipping, named past employers/projects only if Arian approves) → Pouākai origin block (migrated from `/` per R27) → end CTA (single email line, same restraint as `/principles`).
5. **Content requirements**: First-person voice (decision needed — `/principles` is brand-voice "we" or implicit "I"; `/about` should likely shift to explicit "I" but Arian decides). Migrated copy: the home-lede sentence 2 (per R14) and the Pouākai origin one-liner (per R27) move here verbatim or near-verbatim. No marketing claims that aren't backed by a verifiable past project. No agency-page tropes ("we believe...").
6. **Content data shape**: Likely no JSON file — single-author single-page page, prose lives in the template. If we want a credentials list to be data-driven (`/about` references and `/case-studies` references the same engagement names), promote to JSON then. Pre-decision: hardcoded.
7. **User flow**: Entry — top nav (need to decide: does `/about` enter the `SiteShell` nav? See open question below); from a referrer DM; from a future `/case-studies` byline. Read path: hero → background prose → origin block → end CTA. Exit: `mailto:` or back to `/roles` / `/principles` via nav.
8. **Acceptance criteria** (engineer-checkable, partial): route renders at `/about`; `/` no longer carries R14 lede sentence 2 or R27 Pouākai origin (these migrate atomically with the `/about` launch — both home-content and `/about` ship together); end CTA emits `<a href="mailto:hello@pouk.ai">`; Lighthouse 100/100/100/100 mobile; zero client JS shipped.
9. **Open questions / dependencies**:
   - **Nav placement.** Does `/about` enter the `SiteShell` top nav, or stay an unlinked-from-nav surface accessed only via footer / referrals? My recommendation: add to nav as the fourth item, order becomes `Why AI → Roles → Principles → About` (funnel order still preserved, character pages cluster at the right). Arian's call.
   - **Photograph of Arian, yes/no.** This is the biggest open call. A face shifts the brand register; the four pages have held without one. My recommendation: yes, one, restrained (similar register to the wordmark — no marketing-portrait energy). Reserves the option to migrate it to `/` later if it earns the placement.
   - **Sitemap, footer link order, OG image, JSON-LD `Person` schema** — all engineer-mechanical, no decisions needed.
   - **Backlog cascade**: R14 and R27 close when `/about` lands.
10. **Out of scope**: A team page (pouk.ai is one operator), a press / "as featured in" block (no press yet), a CV download, contact form (still `mailto:` only).

---

## 5. Recommended sequence

If Arian approves this memo:

1. **Next**: I author the full `/about` spec following the template at `meta/specs/pages/about.md`. ETA: one pass.
2. **After `/about` ships**: re-evaluate `/case-studies` permission status. If at least one customer can be named/quantified, that becomes the P0 spec. Otherwise `/404` is the next P0 (S effort, banked progress).
3. **6 months out, if writing cadence is real**: spec `/writing` as the long-term thought-leadership lever.
4. **Always Skip**: `/engagements` as its own page until the `/roles` brand position is re-decided. `/contact` as long as `mailto:` is working at acceptable inbound volume.

---

## 6. What this proposal does *not* cover

- DS primitive proposals. None of the recommended pages require new `@poukai-inc/ui` components — `/about` composes inside existing `SiteShell` + `Hero` + body prose. If the full spec surfaces a need, that's a separate proposal under `meta/proposals/ds-side/`.
- Final copy for any candidate. PM agent doesn't author copy.
- Routing / collection architecture for `/writing` if/when it lands. That's an engineering scoping doc, not a PM call.
- Pricing strategy or engagement-shape framing. Out of PM lane unless Arian re-opens it.

---

## 7. Decision record (resolved 2026-05-17/18)

**Outcome**: Option (A) — `/about` approved as P0. The PM interview (A1–A18) walked the load-bearing decisions in detail; full rationale per question lives in §0 above and the `/about` spec at `meta/specs/pages/about.md`. No override fired (A1: no named customer for `/case-studies` within the next 30 days). No reframe of §1's gap analysis (the "no founder" gap is what `/about` v1 closes; the "no proof" and "`mailto:`-only-exit" gaps stay open and are tracked by P1+ sequence).

Coupled artifacts landed 2026-05-18 are listed in §0 above.

This memo's job is done. Further changes to the sequence (re-promoting `/case-studies`, reordering P1 / P2, surfacing a new candidate page) happen via a new proposal under `meta/proposals/`, not via edits to this resolved one.
