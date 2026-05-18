# DS Proposal: `--fs-display` and `--fs-display-lg` — editorial type scale beyond `--fs-tagline`

**Target**: `@poukai-inc/ui` tokens + composition guidance
**Status**: Filed (consumer-side proposal routed to DS team)
**Tracked**: [`poukai-inc/poukai-ui#55`](https://github.com/poukai-inc/poukai-ui/issues/55), filed 2026-05-18 by Arian (founder)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-18
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/proposals/about-v2-explorations.md`](../../compositions/proposals/about-v2-explorations.md) §2.3, §3 Direction A
**DS version observed**: `@poukai-inc/ui@0.9.0`

---

## 0. Framing

One of three DS proposals filed concurrently against the `/about` v2 recalibration. This proposal is the *biggest single typographic move* available to the editorial-page surface and the one most likely to define the brand's evolving register if accepted.

The current DS type ramp tops out at `--fs-tagline` (clamp 2.25rem, 1.5rem + 3.5vw, 4.25rem — 36–68px), with `--fs-tagline-intimate` as a lower-density variant (32–52px). Both are scoped to `<Hero>` and *"Used exactly once per page for the Hero title"* (line 33).

The proposal adds two new tokens above the Hero range, for **once-per-page editorial moments that are not Hero titles** — a display-class statement that owns the page's first viewport.

This is the move Apple, Stripe, A24, MoMA, NYT Magazine, and most editorial-class brands lead their company-about-page with. pouk.ai does not have access to it today.

---

## 1. The composition gap

The DS type ramp:

| Token | Clamp | Range (px) | Role |
|---|---|---|---|
| `--fs-micro` | 0.75rem | 12 | Uppercase micro-labels |
| `--fs-meta` | 0.875rem | 14 | Captions, badge text, nav labels |
| `--fs-body` | clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem) | 17–19 | Body |
| (proposed `--fs-statement`) | (clamp(1.5rem, 1rem + 2vw, 2.5rem)) | (24–40) | Editorial body composition |
| `--fs-tagline-intimate` | clamp(2rem, 1.25rem + 2.5vw, 3.25rem) | 32–52 | Hero title at low density |
| `--fs-tagline` | clamp(2.25rem, 1.5rem + 3.5vw, 4.25rem) | 36–68 | Hero title at default density |
| `--fs-stat` | clamp(2.75rem, 2rem + 3vw, 4.5rem) | 44–72 | Stat numeral |
| `--fs-stat-large` | clamp(3.5rem, 2.25rem + 5vw, 6rem) | 56–96 | Stat numeral large |
| **(proposed `--fs-display`)** | **clamp(3rem, 2rem + 5vw, 7.5rem)** | **48–120** | **Editorial display moment** |
| **(proposed `--fs-display-lg`)** | **clamp(4rem, 2rem + 8vw, 12rem)** | **64–192** | **Editorial display moment (large)** |

The current top of the type ramp for *typography* (not numerals) is `--fs-tagline` at 36–68px. Numerals stretch to 96px at `--fs-stat-large`, but those are constrained to Stat instances and read as data, not as editorial type.

There is **no token for typographic display moments larger than `--fs-tagline`**.

### Where this need appears

1. **`/about` v2 Direction A** (the active driver) — the single-statement display lead. Direction A's load-bearing move is one sentence at extreme scale (~80–192px) that owns the page's first viewport. Without `--fs-display-lg` (or equivalent), Direction A collapses to a Hero-title-scale statement, which is the same scale every other page uses for its Hero — the move evaporates.
2. **Future editorial pages** — a `/manifesto`, `/values`, or customer-story opener that wants a single declarative line at scale. Currently impossible inside the DS contract.
3. **Possible home revision** — if `/about` v2 reads as the register-lead the founder wants, the home composition may want to absorb a display moment into its tagline. The token enables this without bespoke per-page CSS.
4. **OG card / social-share derivations** — the same display-scale type used on-page can be reused as the OG card's headline scale, giving the brand a consistent display-class register across web and social.

### Why a token (not a CSS clamp inline on the page)

Three reasons:

- **Codifies the cap.** The token bounds the discipline ("at most once per page"), the same way `--fs-tagline` already codifies "once per page for the Hero title." Without a token, every page that wants a display moment authors a different clamp, and "at most once" decays into "however many clamps the consumer feels like."
- **Codifies the breakpoint behavior.** The clamp interpolation between mobile and desktop is design-load-bearing. `--fs-display-lg` reads correctly only if the upper bound is dramatic (~192px) and the lower bound is restrained (~64px). A site-side clamp risks the wrong shape.
- **Enables cross-surface reuse.** OG card images, deck templates, future print pieces can all reference the same scale by token name.

---

## 2. Proposed tokens

### `--fs-display`

```css
--fs-display: clamp(3rem, 2rem + 5vw, 7.5rem); /* 48-120px */
```

**Role**: editorial display moment, mid-scale. Used at most once per page on a declarative statement that owns the page's identity (not a Hero title — different role). Larger than `--fs-tagline` (the Hero title scale); smaller than `--fs-display-lg` (the extreme variant).

**Designer-side comfortable use-case**: a page-opening statement on a page that wants display weight without overwhelming.

### `--fs-display-lg`

```css
--fs-display-lg: clamp(4rem, 2rem + 8vw, 12rem); /* 64-192px */
```

**Role**: editorial display moment, large-scale. Used at most once per page on a declarative statement that fully owns the page's first viewport. The brand's loudest typographic move.

**Designer-side comfortable use-case**: a page-opening statement on a page where the brand commits to one editorial moment as the page's *entire* identity (the `/about` v2 Direction A case).

### Why two tokens, not one

Two reasons:

- **Different page jobs.** A `/about` page that opens with `--fs-display-lg` and a future `/values` page that opens with `--fs-display` express different page-weights. Both are "display moments"; they aren't the same size. The intermediate `--fs-display` lets the brand have a *softer* display register without forcing every editorial page to either `--fs-tagline` (the Hero scale) or `--fs-display-lg` (the loudest scale).
- **Symmetry with the Stat tokens.** `--fs-stat` and `--fs-stat-large` are two scales for one role (display numerals). The proposed display-type tokens mirror that pattern.

If the DS team prefers one token, designer-side recommendation: ship `--fs-display-lg` only. The intermediate `--fs-display` is the optional second tier; `--fs-display-lg` is the move `/about` v2 Direction A actually needs.

---

## 3. Composition rules (in `llms-full.txt` after ship)

- **`--fs-display` and `--fs-display-lg`: at most one of either per page**, applied to a declarative editorial statement. NEVER use as a Hero title (that role belongs to `--fs-tagline` / `--fs-tagline-intimate`). NEVER use on body text, captions, or labels. NEVER use on listing molecules.
- **Element semantics**: the display-scale statement is the page `<h1>` *if* it owns the page's opening unit. If the page already has an `<h1>` elsewhere (e.g., a Hero with `--fs-tagline`), the display statement is `<p>` and does not enter the heading outline. Consumers pick which element to render based on where the display moment sits.
- **One display register per page**: a page using `--fs-display` does not also use `--fs-display-lg`. A page using `--fs-display-lg` does not also use `--fs-tagline` on a Hero (the two would compete). Practical rule: if the display moment is the page's primary identity, drop the Hero title.
- **No `<em>` accent inside `--fs-display-lg`**: at 192px, the `<em>` italic accent reads as a typographic moment in its own right and risks competing with the statement. Designer-side recommendation: use italic *throughout* the display statement (set the whole statement in Instrument Serif italic) rather than alternating italic-on-keywords.
- **Mobile behavior**: the clamp's lower bound is 48px (`--fs-display`) or 64px (`--fs-display-lg`). On a 360px viewport, both still read as display-class — but the line may wrap. Designer-side recommendation: author the statement copy so it wraps at *meaningful* line breaks (a semantic break between clauses, not mid-word).

---

## 4. Accessibility contract

- **WCAG 1.4.4 (Resize text)**: the clamps use `vw` units, which scale with viewport but not with browser zoom. The clamp's `min` and `max` bounds in `rem` ensure the text resizes correctly when the user zooms to 200% — the `rem` base font-size scales, so the clamp's lower bound (e.g., 3rem at 16px = 48px) scales to 96px at 200% zoom. Verified by the same logic the existing `--fs-tagline` clamp uses.
- **WCAG 2.4.6 (Headings and Labels)**: when the display statement is the page `<h1>`, its content must be a meaningful page label. The composition guidance documents this (the display statement should be a substantive declarative, not decorative).
- **WCAG 1.4.10 (Reflow)**: at 320px viewport width, the clamp's lower bound holds (48px or 64px). The text remains readable; it may take 4–6 lines to lay out the statement. The composition guidance documents that statements at display scale should be short (≤ 12 words) to handle reflow gracefully.
- **`prefers-reduced-motion`**: the tokens themselves don't carry motion. Any entrance animation (e.g., `<Hero entrance="stagger">`-equivalent) gates on the DS's `:root !important` block.

---

## 5. Brand-contract considerations

The DS's brand voice principles (`llms-full.txt` lines 169–177) emphasize restraint, directness, no inflation. The proposal acknowledges that adding a token at 192px is in tension with that voice and addresses the tension explicitly:

- **Restraint is not asceticism.** The brand voice rejects boilerplate ("unlock," "leverage," "empower") and inflated promises. It does not reject deliberate typographic moments. A 192px statement is restraint executed with care if used once, on a substantive sentence; it is inflation if used as decoration or repeated.
- **The "at most once per page" cap is the brand-contract guardrail.** Without the cap, the token invites drift toward "every page has a display moment." With the cap, the token is a *deliberate* choice consumers make per page.
- **The companion `<Statement>` molecule** (filed at [`statement-molecule.md`](./statement-molecule.md)) has its own scale (`--fs-statement` at 24–40px). The two tokens compose orthogonally: a page may use `--fs-display-lg` once on its opener and 2–3 `<Statement>` instances at smaller scale through its body.

If the DS team's read is that the brand voice precludes type larger than `--fs-tagline`, the proposal converts to "rejected; brand voice argues against." The consumer-side fallback is to cap display moments at `--fs-tagline-intimate` or `--fs-tagline` and accept that the brand will not have an Apple-class display register.

---

## 6. Trade-offs

1. **Adds two tokens to the DS surface.** Consumers have two more decisions per page (which display token, when). Mitigation: the composition rules cap usage to one per page; consumers usually default to `--fs-display-lg` for "the move" and `--fs-display` for "the softer move," and never both.
2. **Possible misuse.** Consumers may use the tokens on body text or repeated headings. Mitigation: composition guidance in `llms-full.txt`; no enforcement mechanism beyond convention.
3. **Production complexity at extreme scale.** At 192px, font rendering, line-breaking, hyphenation, and kerning all need attention. Designer-side recommendation: the DS team validates Instrument Serif Regular renders correctly at the upper bound (it does; the font is OpenType, scales without rasterization artifacts).
4. **Print-equivalent reasoning.** A 192px web statement is roughly 144pt print equivalent — large but not abnormally so for an editorial spread headline. The reference points (NYT Magazine, A24, MoMA) all sit at or above this scale.
5. **Cross-page register fork risk.** If the `/about` v2 ship reads as register-defining, future revisions of `/`, `/why-ai`, `/roles`, `/principles` will want display moments too. This is by design — the recalibration brief frames `/about` as register-lead — but the DS team should be aware.

---

## 7. Adoption plan

1. **DS-side accept / revise / reject** the proposal. If accepted, decide whether to ship both tokens or just `--fs-display-lg`. Pick final clamp values.
2. **DS-side ship**: add the token(s) to `src/tokens/tokens.css`. No molecule changes. Add Ladle stories demonstrating the scale at three breakpoints (mobile, tablet, desktop). Update `dist/llms-full.txt` with the composition rules. Add changeset for minor bump.
3. **Site bumps DS dep**: pouk.ai bumps `@poukai-inc/ui` to the new minor.
4. **`/about` v2 composition revision** consumes the token(s) (provided the founder picked Direction A).
5. **Subsequent pages adopt**: per their own revision cadences. The home tagline is the most likely next consumer.

---

## 8. Open questions for `@poukai-inc/poukai-ui` maintainers

1. **One token or two?** Designer-side recommendation: two (`--fs-display`, `--fs-display-lg`). DS picks; ship `--fs-display-lg` minimum if shipping just one.
2. **Final clamp values.** Designer-side recommendations as proposed. DS may pick lower upper bounds if 192px reads as too loud for the brand voice.
3. **Brand-voice fit.** The biggest open question. Does the DS team agree that a 120px or 192px display moment is consistent with restraint-as-credential, given the "at most once per page" cap?
4. **Naming.** `--fs-display` and `--fs-display-lg` are the designer-side recommendation. Alternatives: `--fs-editorial`, `--fs-statement-lg` (would conflict with the `<Statement>` molecule's `--fs-statement` token), `--fs-hero-display` (couples to Hero — wrong since the tokens are not Hero-scoped). DS picks.
5. **Should the tokens be Hero-scoped via guidance?** Designer-side stance: **no**. The point is to enable display moments *outside* `<Hero>`. The composition rules (§3) document that the tokens are not for Hero titles.
6. **Print / OG-card considerations.** Out of scope for token shipping; flagged so the DS team knows there's a downstream reuse case.

---

## 9. Out of scope

- The `--surface-section` proposal filed at [`section-surface-rhythm.md`](./section-surface-rhythm.md) — orthogonal; lands on its own merits.
- The `<Statement>` molecule proposal filed at [`statement-molecule.md`](./statement-molecule.md) — orthogonal; lands on its own merits. The `<Statement>` molecule is *not* a consumer of `--fs-display` — they target different scales.
- The `/about` v2 composition revision (waits on founder picking a Direction).
- A `<DisplayMoment>` or `<Editorial>` molecule that consumes the token automatically. Designer-side stance: the token is sufficient; the markup is simple (a single `<h1>` or `<p>` with `class="display"`); a molecule would over-codify a one-line surface.
- Dark-mode considerations. The token doesn't carry color; color resolves to `--fg` in light mode and (whenever) the dark-mode-equivalent. Out of scope until dark mode ships.
- OG card / deck reuse pipelines. Flagged as future-available; not part of this proposal.
- Per-page enforcement of "at most one per page." Documented in `llms-full.txt`; trust consumers.
