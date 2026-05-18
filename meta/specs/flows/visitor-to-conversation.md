# Spec: Visitor-to-conversation flow

**Surfaces affected**: `/`, `/why-ai`, `/roles`, `/principles`, `/about`, `mailto:hello@pouk.ai`
**Status**: Approved (v1.1 — admits `/about` as parallel trust-loop page; pending atomic deploy with `meta/specs/pages/about.md`)
**Owner**: Arian (founder) · Author: pouk-ai-pm
**Last updated**: 2026-05-18 (v1.1 — `/about` admitted as parallel trust-loop page per A13 in the `/about` PM interview)
**Masterplan reference**: Sections 4.1 (site layout), 2A (decision authority), 6 (cutover)
**Decisions log**: D-13 (nav order baseline) — resolved via `meta/decisions/launch-readiness.md` on 2026-05-13. A13 (`/about` flow placement) — resolved via the `/about` PM interview on 2026-05-17. A4 (nav order extension to four items) — resolved same interview. A15a (footer order matches nav) — resolved same interview.

---

## v1.1 revision — what changed

v1.0 (2026-05-13) defined the flow across four surfaces (`/`, `/why-ai`, `/roles`, `/principles`). v1.1 admits `/about` as a fifth surface and revises the trust-loop stage from a single page to **parallel pages with OR semantics**. Per A13 in the `/about` PM interview:

- `/about` joins the trust-loop stage alongside `/principles`. Prospects pick one or the other — not forced through both.
- `/about` is documented as **the recommended primary URL for referrer-intro, founder-DM, and email-signature contexts** (a documented entry-source role distinct from the in-funnel trust-loop role).
- The canonical funnel stays at five stages (first touch → diagnosis → self-identification → trust loop → conversion); only the trust-loop stage gets the OR semantics.
- Top nav adds `/about` as the fourth item — order becomes `Why AI → Roles → Principles → About` (A4).
- Footer link order matches nav (A15a).
- Sitemap adds `/about` as a fifth route.

All other v1.0 content stands. v1.1 deltas land in §3, §4 (new sub-stage 4b), §5 (new hand-off rows), §6 (nav order update), §7 (new entry-source row), §8 (new ACs). v1.0 paragraphs that don't change are left unedited so the diff is reviewable.

---

## 1. Purpose

This spec defines the prospect journey across the four-route site, from first touch to a conversation with Arian. It's the connective tissue that the four page specs (`pages/home.md`, `pages/why-ai.md`, `pages/roles.md`, `pages/principles.md`) hang from — it answers "what order do these pages read in, what hand-offs exist between them, and what counts as a conversion?" The flow is opinionated: every page is funnel-aware, every link between pages is deliberate, and every dead-end is a defect.

## 2. Audience

- **Primary**: `pouk-ai-engineer`, who reads this spec to wire inter-page links, the `SiteShell` route order, and the homepage hand-off correctly.
- **Secondary**: Arian, who uses this flow as the brief for how to talk about the site to prospects ("read why-ai first, then roles, then principles").

## 3. Success criteria

- **Behavior**: A first-time visitor follows the canonical path **`/` → `/why-ai` → `/roles` → `mailto:`** in the majority of cases, with **`/principles` or `/about` (one or the other, not both)** reached as a trust-loop closer either pre- or post-email. A returning visitor follows the shorter path **`/roles` (or `/principles` or `/about`) → `mailto:`**.
- **Signal**: Qualitatively — inbound emails arrive with funnel-aware context ("I read your why-ai page and we're in failure mode 3 — Builder seems right"); referrer DMs cite specific anchors; referrer DMs introducing a prospect to Arian-the-operator cite `/about` rather than `/principles`. When analytics arrive, the cross-page click-through pattern matches the canonical path above on at least the majority of multi-page sessions, and the OR semantics of the trust-loop stage holds (most multi-page sessions touch *one* of `/principles` / `/about`, not both).
- **Failure mode**: A visitor lands on `/why-ai`, `/roles`, or `/about` directly (deep link from a share, referrer DM) and **cannot find the next step**. Or, opposite failure: the funnel is so prescriptive that a reader who just wanted to read `/principles` or `/about` and leave feels pushed into a sales path. A new v1.1 failure mode: prospects forced to read *both* `/principles` and `/about` to complete the funnel — the OR semantics is part of the design, not a defect.

## 4. The canonical journey

Five stages, mapped to entry source, page sequence, and conversion event.

### Stage 1 — First touch (`/`)

- **Entry sources**: Direct (`pouk.ai` typed), LinkedIn / X profile bio link, email signature on a sent message, search ("pouk ai", "pouk ai consulting").
- **What happens**: Visitor reads the tagline + lede + status + email link. Two acceptable exits — click into `/why-ai` from the lede hand-off link, or email immediately. A third valid outcome is the visitor leaving with the brand registered, intent to return.
- **Spec reference**: `meta/specs/pages/home.md`.

### Stage 2 — Diagnosis (`/why-ai`)

- **Entry sources**: From `/` via the lede hand-off; direct (LinkedIn share, founder DM, X post linking to `/why-ai`); search ("AI deployment gap", "why AI projects fail").
- **What happens**: Visitor reads the opening argument, scans failure modes, deep-reads two or three, scrolls through the leaders pattern and consulting angle, lands on the discovery questions and end CTA. Two exits — click into `/roles` (the engineer wires a clear "next: which role fits your situation? →" link at the bottom of `/why-ai`), or email directly with reference to a stat or failure mode.
- **Spec reference**: `meta/specs/pages/why-ai.md`.

### Stage 3 — Self-identification (`/roles`)

- **Entry sources**: From `/why-ai` end-of-page next-step link; from a referrer's DM that includes a role anchor (e.g., `pouk.ai/roles#automator`); from the top nav.
- **What happens**: Visitor scans the four roles, matches their situation to a "Hired by" line, reads that role's body, scrolls to the end CTA. Primary exit — `mailto:hello@pouk.ai` with the role name carried as the opening line of the email.
- **Spec reference**: `meta/specs/pages/roles.md`.

### Stage 4 — Trust loop (`/principles` and/or `/about`)

**v1.1**: trust-loop stage carries two parallel pages. Prospects pick one — not forced through both. Each page closes a different trust question: `/principles` answers "how does pouk.ai work?"; `/about` answers "who runs this?" A prospect with the *how* question reads `/principles`; a prospect with the *who* question reads `/about`; some prospects have neither question and skip the stage entirely; few prospects have both.

#### Stage 4a — Trust loop via `/principles` (how does pouk.ai work?)

- **Entry sources**: From the top nav (a prospect mid-conversation closing the trust loop); from a referrer's DM linking to a specific principle anchor; from a social share screenshot; rarely as a first touch.
- **What happens**: Visitor reads the intro, scans the ten principles, close-reads two or three, reaches the conclusion. Exit is often **no immediate click** — a quiet trust-up that converts on a subsequent email (next day, next week). Some readers email immediately citing a principle by number.
- **Position in the funnel**: `/principles` is **either pre- or post-`mailto:`**. Pre-email readers are de-risking the consultant. Post-email readers are reading after a first reply from Arian, validating their choice. Both are valid.
- **Spec reference**: `meta/specs/pages/principles.md`.

#### Stage 4b — Trust loop via `/about` (who runs pouk.ai?)

- **Entry sources**: From the top nav (a prospect mid-conversation closing the trust loop via the founder-introduction route); from a referrer DM that introduces Arian-the-operator ("read his about, then ping me back"); from Arian's email signature, LinkedIn bio, or X bio (per the documented primary-URL role below); rarely as a first touch from cold search.
- **What happens**: Visitor reads the hero eyebrow + lede, then the three sections (the arc, why pouk.ai, Pouākai origin) in first-person voice for the first two sections and brand-voice declarative for the third. Read-target ~2 minutes / ~450 words. Exit is often a `mailto:` click with higher conviction (the prose closed the operator-introduction question), or back to the funnel via the top nav, or close with intent to convert later.
- **Position in the funnel**: `/about` is **either pre- or post-`mailto:`**, same as `/principles`. Pre-email readers are de-risking who-they're-writing-to. Post-email readers are reading after a first reply from Arian, validating the operator. Both are valid.
- **Documented primary-URL role (A13)**: `/about` is the recommended primary URL for **referrer intros, founder DMs, and email-signature contexts**. Arian's outgoing communications (LinkedIn DMs, cold outreach replies, email signatures) point at `/about` rather than `/` when the goal is to introduce the operator. The canonical first-touch URL for cold prospect traffic remains `/`; the referrer-mediated first-touch URL is `/about`.
- **Spec reference**: `meta/specs/pages/about.md`.

#### Trust-loop OR semantics

Most multi-page sessions touch *one* of `/principles` / `/about`, not both. This is by design — both pages do trust work, but they answer different questions; forcing a prospect through both is funnel inflation. A prospect who reads both is fine (no penalty), but the engineer does not wire any link or cue that suggests "now read the other one." Each trust-loop page funnels to `mailto:` or back to the canonical funnel via top nav.

### Stage 5 — Conversion (`mailto:hello@pouk.ai`)

- **What counts as conversion**: A first email to `hello@pouk.ai` from a prospect not previously in conversation, or a LinkedIn DM equivalent. Volume target is qualitative for now — Arian's read of inbound quality and reply rate.
- **What does not count**: A page view, a click to social, a click to a citation URL on `/why-ai`. These are funnel inputs, not conversions.

## 5. Inter-page hand-offs

Each hand-off below is a specific link the engineer must wire. These are the funnel's mechanics — without them, the flow is theoretical.

| From | To | Trigger | Spec location |
| --- | --- | --- | --- |
| `/` | `/why-ai` | Lede sentence ends in "Most AI projects fail to deliver. Here's why →" | `pages/home.md` section 5 |
| `/why-ai` | `/roles` | End-of-page next-step link below the references section ("Next: which role fits your situation? →") | `pages/why-ai.md` section 4 (footer-of-page next step) |
| `/why-ai` | `mailto:` | End CTA after the discovery questions block | `pages/why-ai.md` section 4 |
| `/roles` | `mailto:` | End CTA after the four `RoleCard`s | `pages/roles.md` section 4 |
| `/principles` | `mailto:` | Minimal end-CTA line below the conclusion | `pages/principles.md` section 4 |
| `/about` | `mailto:` | Minimal end-CTA line below section 3 (Pouākai origin) | `pages/about.md` section 4 item 6 |
| Any | Any | Top nav via `SiteShell`, order: Why AI → Roles → Principles → About | This spec, section 6 (v1.1) |
| Any | `/` | `SiteShell` wordmark click | `pages/home.md` section 8 |

**v1.1 negative hand-offs (deliberately not wired)**:

- `/principles` → `/about` and `/about` → `/principles`: no inline link, no "see also" cue. Per A13 OR semantics, the two trust-loop pages are parallel, not sequential. Top nav is the connecting tissue if a prospect wants both; no in-body affordance.
- `/about` → `/roles` and `/about` → `/why-ai`: no end-of-page next-step link. `/about` is trust-loop, not funnel-forward. Top nav covers re-entry to the funnel.

The masterplan section 2A reserves nav contents as **site repo's** decision. The order below is this spec's recommendation; Arian's call.

## 6. Top-nav order

**v1.0 baseline (D-13)**: nav order is `Why AI`, `Roles`, `Principles` — funnel order, left-to-right. Rationale: a first-time visitor scans the nav left-to-right; placing the diagnosis page first signals where the journey starts. A returning visitor uses the nav as a jump table; the funnel order is still the most defensible default since it matches the canonical path. Alternative orders considered and rejected: alphabetical (`Principles, Roles, Why AI` — meaningless to a prospect); commercial-first (`Roles, Why AI, Principles` — leads with services); reverse-funnel `Principles → Roles → Why AI` — front-loads character at the cost of diagnosis.

**v1.1 extension (A4)**: nav order is `Why AI`, `Roles`, `Principles`, `About` — funnel pages cluster left, trust-loop pages cluster right. `/about` slots fourth (rightmost) for two reasons: (a) it preserves the D-13 funnel-order baseline intact, and (b) the trust-loop pages (`/principles` and `/about`) naturally cluster as the right-end of the nav, separating funnel-forward affordances from trust-loop affordances. A first-time visitor reads the nav left-to-right and sees the funnel; a returning visitor jumps to the right-end for trust pages. Alternative orders considered and rejected: `Why AI · Roles · About · Principles` (interleaves the trust-loop pair — breaks the cluster); `About · Why AI · Roles · Principles` (leads with the operator — over-personalises before the prospect has agreed to the problem).

The homepage `/` is reachable via the `SiteShell` wordmark, not a separate "Home" nav item. This is consistent with the holding page's restraint and with `pages/home.md` section 4.

**Cascade**: the sitemap (`sitemap.xml`) and footer link ordering match the same nav order — Why AI → Roles → Principles → About. Engineer wires sitemap and footer consistent with this nav order. Per A15a in the `/about` PM interview, footer matches nav exactly (no separate footer rationale).

## 7. Entry-source distribution (assumed, pre-analytics)

These are working assumptions, not measured truth — re-baseline once analytics are in place.

- **`/` direct** — highest single share of first-touches for **cold prospect traffic**. Search ("pouk ai", "pouk ai consulting"), typed-URL, and LinkedIn-bio clicks all land here.
- **`/about` direct** — highest single share of first-touches for **referrer-mediated and founder-mediated traffic** (v1.1 documented role, A13). Founder DMs, email signatures, LinkedIn replies, and cold-outreach replies point here. Distinct from `/` in that the inbound has a referrer context; the prospect already knows who Arian is by name before they click.
- **`/why-ai` deep links** — meaningful share once Arian starts sharing the page publicly (LinkedIn posts, X threads). Likely the second-largest source after `/` direct.
- **`/roles` deep links** — moderate share; mostly from referrers ("I think you need their Automator work — `pouk.ai/roles#automator`").
- **`/principles` deep links** — low absolute volume, high quality. Mostly social shares of single-principle screenshots.

Implication for engineer: every page must be **self-sufficient at first touch** — a clear path forward, the email address one click away, brand identity unmistakable. The `SiteShell` is the floor of that contract on every page. v1.1 implication for Arian: outgoing communications (DM, signature, LinkedIn reply) point at `/about` when introducing the operator and at `/` when introducing the brand cold. Both are valid; the split is contextual.

## 8. Acceptance criteria

v1.0 ACs (unchanged):

- [ ] `/` includes a lede-embedded link to `/why-ai` per `pages/home.md` section 5.
- [ ] `/why-ai` includes a next-step link to `/roles` below the references section.
- [ ] `/why-ai` includes a `mailto:hello@pouk.ai` link in the end CTA.
- [ ] `/roles` includes a `mailto:hello@pouk.ai` link in the end CTA.
- [ ] `/principles` includes a `mailto:hello@pouk.ai` link in the end-CTA line.
- [ ] `SiteShell` wordmark links to `/` on every page.
- [ ] Each route, on first touch with no referrer, has at least one visible next-step (a nav link, an inter-page link, or `mailto:`) above the fold on mobile.
- [ ] No page on the site is a dead-end — every page either funnels to `mailto:` or offers a clearly-labeled next page.
- [ ] Deep-link anchors (`/roles#builder`, `/principles#momentum`, `/why-ai#governance`) function and the matching content is above the fold post-scroll.

v1.0 AC superseded (kept for diff reviewability):

- [ ] ~~`SiteShell` top nav exposes `/why-ai`, `/roles`, `/principles` in that order on every page.~~ Superseded by v1.1 AC below.
- [ ] ~~No "back to home" link is required from `/why-ai`, `/roles`, or `/principles` — the `SiteShell` wordmark covers that affordance.~~ Superseded by v1.1 AC below (extends to `/about`).

v1.1 ACs (new, atomic with `/about` deploy):

- [ ] `SiteShell` top nav exposes `/why-ai`, `/roles`, `/principles`, `/about` in that order on every page (A4).
- [ ] `SiteShell` footer link list exposes the same four routes in the same order (A15a).
- [ ] `sitemap.xml` includes all five routes: `/`, `/why-ai`, `/roles`, `/principles`, `/about`.
- [ ] `/about` includes a `mailto:hello@pouk.ai` link in the end-CTA line per `pages/about.md` section 4 item 6.
- [ ] No `<a href>` from `/principles` body to `/about` body and no `<a href>` from `/about` body to `/principles` body — the two trust-loop pages are parallel, not sequential. Top nav is the only inter-trust-loop affordance.
- [ ] No "back to home" link is required from `/why-ai`, `/roles`, `/principles`, or `/about` — the `SiteShell` wordmark covers that affordance on all five routes.
- [ ] On the `/about` route, the `SiteShell` top nav highlights `About` as current (not `Principles`, not `Why AI`).
- [ ] `/about` does *not* include an end-of-page next-step link to `/roles` or `/why-ai`. Trust-loop pages are funnel-rest, not funnel-forward; top nav handles re-entry.

## 9. Open questions / dependencies

The original draft's open question (nav order) was resolved via `meta/decisions/launch-readiness.md` on 2026-05-13. See decision D-13.

Remaining dependencies blocking `Built`:

- **Email address — locked.** `hello@pouk.ai` is the single contact point. LinkedIn DM is a secondary channel handled outside the site (linked from `SiteShell` footer per masterplan section 3.2 if `SiteShell` exposes social links; otherwise not surfaced).
- **DS dependency — `SiteShell`.** Required to enforce the nav order and the wordmark hand-off on every page. In scope for DS Phase 1.3.
- **Analytics — out of scope.** This spec relies on qualitative signals (inbound email content, referrer cite patterns) at launch. Once analytics arrive, this spec's section 3 and 7 should be revisited against measured data.
- **Contact-flow extension — backlog candidate.** If `mailto:` is later replaced or augmented (scheduling link, contact form, intro questionnaire), a separate `features/contact-flow.md` spec governs that change. Not in launch scope.

## 10. Out of scope

- Funnel analytics, A/B testing infrastructure, conversion-rate optimization. Zero-JS contract; qualitative signal only at launch.
- A "next intake" / waitlist flow. The brand competes by being a person; calendared availability is handled in-conversation.
- Lead-magnet downloads, gated content, or email-capture forms.
- Multi-step contact form, intro questionnaire, or scheduling embed.
- Cross-domain funnel tracking (LinkedIn → site, X → site). Out of scope.
- Personalization based on referrer or visit count.
- Internationalization / regional flows. English-only at launch.
