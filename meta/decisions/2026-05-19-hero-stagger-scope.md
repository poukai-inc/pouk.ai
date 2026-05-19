# Decision: `<Hero entrance="stagger">` scope — editorial doorways only

**Status**: Locked
**Owner**: Arian (founder) · Author: pouk-ai-engineer (via OMC review)
**Date**: 2026-05-19
**Closes**: OMC-C3 from `meta/backlog.md` §OMC deep-review
**DS context**: `@poukai-inc/ui@0.15.0` ships `<Hero entrance="stagger">` (CSS-only staggered reveal, ~1.05s top-down rise + fade; opt-in via the `entrance` prop; gated by `prefers-reduced-motion: reduce` via DS tokens)

---

## 0. The audit finding

OMC review (2026-05-18) flagged that `<Hero entrance="stagger">` ships only on two pages:

- `/` (HomeHero.tsx) — editorial doorway, top-of-funnel
- `/about` (AboutBand.tsx) — editorial moment, founder portrait band

It does **not** ship on:

- `/why-ai` — thesis page, functional content
- `/roles` — self-identification page, functional content
- `/principles` — trust-closer page, functional content
- `/404` — salvage surface, composition v1.1 §2 brand notes explicitly retire entrance animation

Three resolutions surfaced in review: (a) propagate `stagger` to all inner pages for sitewide consistency; (b) retire `stagger` from `/` + `/about` for restraint-first consistency; (c) document the current per-page rationale and keep current state.

Founder ratified (c) on 2026-05-19. This document is the canonical rationale.

---

## 1. The rule

**`<Hero entrance="stagger">` ships only on editorial-doorway pages.**

The site has two classes of Hero:

- **Editorial doorway** (`/`, `/about`) — the Hero is the page's load-bearing register-defining moment. The page exists primarily for the Hero to land. The stagger reveal pays off because the reader's attention is earned by the page's brand statement before they read any body content. The stagger is part of the brand's editorial vocabulary on these surfaces.
- **Functional content** (`/why-ai`, `/roles`, `/principles`, `/404`) — the Hero is a navigation cue + page-function declaration; the substance lives in body content (failure modes, role cards, principle list, salvage routing). The reader's intent is to scan body content, not to be impressed by a doorway moment. A stagger reveal here delays the reader from reaching the substance — reads as performance, not editorial pacing.

The classification is deliberate, not historical. It is the same split the brand voice contract assumes: editorial register on doorway pages, declarative register on functional pages.

---

## 2. Per-page status

| Page | Hero entrance | Reasoning |
|---|---|---|
| `/` | `entrance="stagger"` | Editorial doorway. Brand-tagline + lede + status + CTA. Stagger lands the brand moment. Composition: [`meta/compositions/pages/home.md`](../compositions/pages/home.md) §2 Section 2. |
| `/about` | `entrance="stagger"` | Editorial moment. Display-scale tagline + portrait. Stagger reveals the portrait band as a single editorial gesture. Composition: [`meta/compositions/pages/about.md`](../compositions/pages/about.md) §2 Unit 2. |
| `/why-ai` | none (static first-paint) | Thesis page. Reader's intent is to scan failure modes + stats. Stagger would delay the substance. Composition: [`meta/compositions/pages/why-ai.md`](../compositions/pages/why-ai.md) (if/when authored — current shipped state matches this rule). |
| `/roles` | none (static first-paint) | Self-identification page. Reader's intent is to scan four role cards. Stagger would delay the diagnosis. |
| `/principles` | none (static first-paint) | Trust-closer page. Reader's intent is to scan principles in order. Stagger would delay the manifesto. |
| `/404` | none (static first-paint) | Salvage page. Reader's intent is to leave for a real route within ~10 seconds. Composition `meta/compositions/pages/404.md` §2 Section 2 explicitly retires `stagger` — "salvage surfaces want instant resolution, not editorial pacing". |

---

## 3. Future-pages contract

When a new page ships, the engineer + designer pick the Hero entrance based on which class the page is:

- **If the page is an editorial doorway** (e.g., a future essay landing page, a launch announcement, a flagship product surface) — adopt `entrance="stagger"`.
- **If the page is functional content** (e.g., a future pricing page, FAQ page, contact form, dashboard) — ship without `entrance` (static first-paint).
- **If the page is a hybrid (editorial moment leading to functional content)** — composition decides per the page's lede shape. Default to no stagger; require composition rationale for adopting it.

This rule does **not** mean stagger is reserved for "important" pages and absent on "secondary" pages. Importance is not the discriminator. The discriminator is: **what does the reader come here to do?** If they come for the Hero, stagger lands. If they come for the body, stagger interrupts.

---

## 4. What this rule is NOT

- Not a ban on motion elsewhere. Other motion surfaces (link hover transitions, StatusBadge pulse, future scroll-triggered reveals) are governed by their own composition decisions, not by this rule. This rule only governs `<Hero entrance>`.
- Not a permanent decision against `stagger` on inner pages. A future revision that turns `/why-ai` into a flagship editorial essay would qualify for `stagger`. Reclassification requires a composition-side decision + this document update.
- Not a brand contract change. `prefers-reduced-motion: reduce` gating is preserved on the pages that do consume stagger; accessibility contract unchanged.
- Not enforced by CI. The rule is reviewer-enforced via the composition docs. If a future page ships with an off-class stagger, the reviewer flags it against this document.

---

## 5. Revision protocol

Reclassifying a page from "editorial doorway" to "functional content" (or vice versa) requires:

1. A composition-side decision in the page's `meta/compositions/pages/<route>.md`.
2. An amendment to §2 of this document recording the reclassification + date.
3. An engineer-side change to the page's Hero invocation atomically with the composition update.

If the brand's editorial register evolves (e.g., a future direction picks a different doorway motion treatment that supersedes `stagger`), this document is superseded by a new decision file at `meta/decisions/<date>-hero-doorway-motion-vN.md`.

---

## 6. References

- DS contract: `@poukai-inc/ui@0.15.0` `HeroEntrance` type (`"stagger"` only; default undefined → static).
- DS proposal of origin: [`meta/proposals/ds-side/hero-entrance-stagger.md`](../proposals/ds-side/hero-entrance-stagger.md) (shipped in DS 0.8.0).
- Companion decision: [`meta/decisions/2026-05-17-home-illustration-and-density.md`](2026-05-17-home-illustration-and-density.md) (locked `/` Hero size + Button compact + density at the same revision that shipped `entrance="stagger"` on `/`).
- /404 composition's anti-stagger note: [`meta/compositions/pages/404.md`](../compositions/pages/404.md) §2 Section 2 + §4 Motion.
- OMC review finding: [`meta/backlog.md`](../backlog.md) OMC-C3 (closed 2026-05-19 by this decision).
