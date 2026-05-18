# DS Proposal: `--bg-warm-accent` + on-warm foreground tokens

**Target**: `@poukai-inc/ui` tokens + composition guidance
**Status**: Filed (consumer-side proposal routed to DS team)
**Tracked**: [`poukai-inc/poukai-ui#56`](https://github.com/poukai-inc/poukai-ui/issues/56), filed 2026-05-18 by Arian (founder)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-18
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/about.md`](../../compositions/pages/about.md) v2 §6.4
**Related**: [`section-surface-rhythm.md`](./section-surface-rhythm.md) — sibling surface-rhythm proposal; the warm accent is one of the surface tiers a band-pattern page can use.
**DS version observed**: `@poukai-inc/ui@0.9.0`

---

## 0. Framing

One of three DS proposals filed concurrently with `/about` v2 composition. The recalibration brief retired containment ("`/about` leads, doesn't follow") and made DS-side proposals an *expected* path, not a fallback. This proposal introduces the brand's **first non-neutral surface color** — a saturated orange-red used as a full-bleed band background — and the paired foreground tokens that render text legibly on it.

This is the most brand-contract-load-bearing of the three concurrent proposals because it touches the palette itself. The brand's existing palette is **neutral + one blue accent**: `--bg` `#FBFBFD`, `--fg` `#1D1D1F`, `--fg-muted` `#6E6E73`, `--hairline` `#D2D2D7`, `--surface` `#F5F5F7`, `--bg-elevated` `#FFFFFF`, `--accent` `#0071E3` (and `--accent-glow`). Every color is either a neutral tier or a blue signal token. No warm color exists at any tier.

The proposal adds three tokens. They are restraint-bounded (one band per page, one page per site initially, scoped to band backgrounds only) and they preserve every existing brand-contract rule about color use ("never pure edges", "do not use `--accent` as surface fill", elevation rhythm).

---

## 1. The composition gap

`/about` v2 introduces a saturated-orange editorial band: a full-bleed section carrying a founder portrait (AI-generated, founder-curated, cinematic editorial register) on the right and a display-scale statement on the left. The orange is part of the page's identity — it carries roughly half the page's communicative weight alongside the portrait and the statement.

The orange has two surfaces:

1. **The portrait asset itself** — the portrait is delivered as a full-color image (AVIF/WebP/JPEG) with the orange backdrop **baked into the asset**. The DS doesn't own this surface; it's a photographic asset.
2. **The band's left half** — where the display statement composes — must be a flat CSS color that **matches the portrait's right-edge backdrop exactly**. This is the surface the DS owns. Without a token, the engineer hand-picks the hex value, the portrait asset's color grading drifts from it on the next iteration, and the band reads as two adjacent objects on different surfaces instead of one continuous band.

The token is the **anchor that lets the asset and the page match**.

### Where this need appears

1. **`/about` v2 portrait band** (active driver). Without `--bg-warm-accent`, the band ships with a site-side hex; brand vocabulary doesn't expand; future band-pattern pages each hand-pick their own orange.
2. **Future editorial pages** that adopt the band pattern (per the register-lead framing in `/about` v2 §1). A future `/manifesto`, `/values`, or `/leadership`-class page may want the same band register.
3. **Cross-surface reuse** — OG card images, deck templates, future print pieces. The token gives the brand a single source of truth for the warm surface color.

### What consumers currently do (in the DS contract's absence)

- **Workaround A**: ship orange as a site-side CSS variable in `site.css` (`--about-warm-accent: #D9523A`). Works for one page; brand vocabulary stays implicit; second consumer re-picks.
- **Workaround B**: hardcode the hex inline. Violates ADR-0002 (every CSS value resolves to a `var(--token)`).
- **Workaround C**: repurpose `--accent` to warm. Reverses the brand's standing blue accent and contaminates every existing consumer of `--accent` (link underlines, status dot, focus rings).

None are clean. The DS-gap is real.

---

## 2. Proposed tokens

### `--bg-warm-accent` — saturated orange-red surface

```css
:root {
  --bg-warm-accent: <DS picks>; /* designer-side recommends ~#D9523A or ~#C84B30 */
}
```

**Role**: full-bleed editorial band background. The page's *one* warm surface, used once per page on a single editorial moment.

**Recommended value range**: saturated, dominant, in the orange-red family.
- `#D9523A` — a Vermillion-adjacent value, slightly red-shifted, reads as energetic.
- `#C84B30` — a Persian-orange-adjacent value, slightly deeper, reads as more grounded.
- `#D55A2E` — a halfway value.

DS picks. The actual value is grading-dependent — the portrait asset will be color-graded to match whatever the DS ships. **The token's value matters less than the portrait asset matching it.** Once shipped, the value is locked (the portrait asset depends on it; re-tuning the token requires re-grading the asset).

**Composition rules** (proposed for `llms-full.txt`):

- `--bg-warm-accent` is a **band background only**. Used at most once per page on a single full-bleed editorial section.
- NEVER use as a button fill, body background, hairline, or text color.
- NEVER stack two `--bg-warm-accent` bands on one page.
- NEVER pair with `--accent` on the same surface (blue accent on orange surface is a chromatic clash).
- At most **one page per site** initially uses the token (i.e., `/about`). As more editorial pages adopt the band pattern, the per-site cap may relax — but the per-page cap stays at one.

### `--fg-on-warm` — high-contrast foreground for text on the warm surface

```css
:root {
  --fg-on-warm: <DS picks>; /* designer-side recommends ~#FBFBF7 (warm-tinted near-white) */
}
```

**Role**: paired exclusively with `--bg-warm-accent`. Used for display statements, headings, and body text rendered on the warm band. Equivalent to `--fg` (#1D1D1F) but on the warm surface.

**Recommended value**: a warm-tinted near-white. Pure `#FFFFFF` violates the "never pure edges" principle (`llms-full.txt` line 26); a slightly warm-tinted near-white (e.g., `#FBFBF7`, with a hint of yellow) reads as belonging to the warm surface rather than punched in from a different palette.

**Contrast contract**: must meet WCAG 1.4.3 AA against `--bg-warm-accent` (4.5:1 minimum for body text, 3:1 for large text). Designer-side recommended values land at 8:1+ against the recommended `--bg-warm-accent` values, comfortably above the floor.

### `--fg-on-warm-muted` — muted foreground for supporting text on the warm surface

```css
:root {
  --fg-on-warm-muted: <DS picks>; /* designer-side recommends ~#F0EBE3 */
}
```

**Role**: paired exclusively with `--bg-warm-accent`. Used for supporting lines, eyebrows, secondary text on the warm band. Equivalent to `--fg-muted` (#6E6E73) but on the warm surface.

**Recommended value**: a softer warm-tinted off-white. Maintains 4.5:1 against `--bg-warm-accent` at minimum.

### Optional fourth token (DS picks): `--bg-warm-accent-shadow`

If the warm-band design needs a CSS-paintable shadow color (e.g., the tessellated geometric shadow play visible in the founder-supplied reference portrait, *if* that shadow is composed in CSS rather than baked into the image), an additional `--bg-warm-accent-shadow` token may be useful. Designer-side stance: **not required for v2** — the shadow in the reference image is baked into the portrait asset. If a future band consumes CSS-painted shadow effects, file an additive proposal.

### Semver impact

Minor version bump per ADR-0003 (token additions).

---

## 3. How the tokens compose with the existing palette

The brand's color rhythm after the additions:

| Token | Role | Tier |
|---|---|---|
| `--bg-elevated` (`#FFFFFF`) | Overlays (popovers, sheets, modals) — front-most | Neutral, top |
| `--bg` (`#FBFBFD`) | Page canvas | Neutral, page |
| `--surface` (`#F5F5F7`) | Inline-recessed (code, quotes, card fills) | Neutral, recessed |
| `--accent` (`#0071E3`) | Signal token: links, status, focus rings | Cool accent |
| `--accent-glow` (`rgba(0,113,227,0.18)`) | Status dot halo, `::selection` | Cool accent halo |
| **`--bg-warm-accent`** (NEW) | **Band background — editorial moment only** | **Warm surface** |
| **`--fg-on-warm`** (NEW) | **Foreground on warm surface — display, headings, body** | **Warm-paired foreground** |
| **`--fg-on-warm-muted`** (NEW) | **Muted foreground on warm surface — supporting** | **Warm-paired foreground** |

The warm tier is **isolated from the neutral tier**. `--fg-on-warm` does not appear on `--bg` or `--surface`; `--fg` does not appear on `--bg-warm-accent`. The two color systems are pair-bound: each surface has its paired foreground vocabulary.

This isolation is **the discipline that makes the expansion safe**. A future consumer cannot accidentally use `--fg-on-warm` on the page canvas (it would read tinted against `--bg`); a future consumer cannot accidentally use `--bg-warm-accent` as a body background (it's documented as band-only).

---

## 4. Accessibility considerations

- **WCAG 1.4.3 (Contrast minimum)**: `--fg-on-warm` must meet 4.5:1 against `--bg-warm-accent` for body text, 3:1 for large text (`≥18pt` / `≥24px` per the criterion). Designer-side recommended values land at 8:1+, comfortably above both floors. `--fg-on-warm-muted` must meet 4.5:1 minimum; designer-side recommended values land at 5.5–6.5:1.
- **WCAG 1.4.11 (Non-text contrast)**: not directly applicable — the warm tokens are decorative surface + paired text, not UI components or informational graphical objects.
- **WCAG 1.4.6 (Contrast Enhanced, AAA)**: designer-side recommended values target AAA-equivalent for the display statement (7:1+ for normal text, 4.5:1+ for large text). Display statements at `--fs-display-lg` qualify as large text under 1.4.6; the proposed values exceed the AAA floor with margin.
- **Color blindness**: the warm-orange is a deuteranopia/protanopia challenge color, but the design does not encode information *in* the orange — the band is decorative surface, the information is in the statement + portrait. A color-blind reader perceives the band as a different hue (probably yellow-brown or grey) but reads the page identically.
- **Dark-mode invertibility**: when dark mode ships (separate DS work), the warm tokens need dark-mode-equivalent values. Designer-side recommendation for dark mode: a deeper, more saturated orange-red (e.g., `#9C3823` or equivalent) with `--fg-on-warm` shifting to a slightly cooler off-white. The DS team picks the dark-mode values whenever they ship dark mode.
- **Reduced-motion considerations**: not directly applicable (color tokens don't carry motion). The band's optional entrance stagger gates on `prefers-reduced-motion: reduce` via the DS's `:root !important` block.

---

## 5. Trade-offs

1. **Brand-vocabulary expansion is one-way.** Once orange enters the brand, the brand carries warm color. Future revisions can't easily walk it back (the portrait asset will be color-graded to match the token; reverting the token requires re-grading the asset). **Mitigation**: the proposal is per-founder-decision; this is the founder's call, not a designer-side reach.
2. **Sets precedent for additional warm tokens.** If `--bg-warm-accent` lands, future proposals may want `--bg-warm-accent-soft` (a quieter band), `--accent-warm` (a warm signal token), `--surface-warm` (a recessed warm tier). **Mitigation**: each is a separate proposal; the DS evaluates on universal merit, not slippery-slope.
3. **The token's actual value matters less than the asset matching it.** Once shipped, the value is locked. **Mitigation**: the DS team picks the value with full knowledge that the portrait asset will be color-graded to match; the value is a one-time decision.
4. **Per-page cap is convention, not enforcement.** TS can't enforce "one band per page." Composition guidance documents the cap; trust consumers. **Mitigation**: anti-pattern in `llms-full.txt`; the cap holds by discipline.
5. **OG card / share-image consideration.** The brand's existing `public/og.png` is neutral-palette. If the warm tokens land and `/about` ships a custom OG card with the warm band, the brand's share-image consistency forks. **Mitigation**: out of scope for this proposal; flagged for future OG-card work.
6. **The portrait asset's grading is downstream of token shipping.** The portrait can't be color-graded until the token's value is locked. **Mitigation**: ship the token in a DS minor; pouk.ai bumps; engineer-mechanical color-grading happens after; engineer-side QA gate verifies match before deploy.

---

## 6. Adoption plan

1. **DS-side accept / revise / reject** the proposal. If accepted, pick final values for all three tokens.
2. **DS-side ship**: add the three tokens to `src/tokens/tokens.css`. Update `dist/llms-full.txt` with composition rules. Add Ladle stories demonstrating `--bg-warm-accent` as a band background with `--fg-on-warm` and `--fg-on-warm-muted` text overlaid (a sample band with display statement + supporting line). Add Playwright CT + axe-core tests for contrast (the molecule's tests, when consumed). Author changeset for minor version bump.
3. **Site bumps DS dep**: pouk.ai bumps `@poukai-inc/ui` to the new minor.
4. **Portrait asset color-grading**: Arian's lane. Color-grade the portrait so the right-edge backdrop matches the shipped `--bg-warm-accent` value exactly. Iterate against the shipped token value, not a guess.
5. **`/about` v2 composition revision** lands with the warm tokens consumed (provided the founder picked Direction A + portrait integration, which has happened).
6. **Engineer-side color-match QA**: verify at deploy that the portrait's backdrop and the band's CSS background are pixel-identical. Visual seam between the two surfaces is a composition failure that holds ship.

---

## 7. Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Final token values.** Designer-side recommends `--bg-warm-accent: #D9523A` (or `#C84B30`), `--fg-on-warm: #FBFBF7`, `--fg-on-warm-muted: #F0EBE3`. DS picks final.
2. **Naming.** `--bg-warm-accent` is the designer-side recommendation, paired with `--fg-on-warm` and `--fg-on-warm-muted`. Alternatives: `--brand-orange` (specific but narrow — the brand may want a warm-yellow or warm-pink later), `--accent-warm` (couples to the `--accent` semantics — wrong since `--accent` is signal-only and `--bg-warm-accent` is surface-only), `--surface-warm-accent` (couples to `--surface` semantics — wrong since `--surface` is inline-recessed and `--bg-warm-accent` is full-bleed). DS picks.
3. **One token or family?** Designer-side recommends shipping three together (the surface + two foreground variants). DS may prefer to ship `--bg-warm-accent` alone and let consumers compose foreground site-side. Designer-side argument for shipping the family: pairs the tokens at the DS level so contrast contract is part of the package, not consumer-rolled.
4. **Optional `--bg-warm-accent-shadow`?** Designer-side stance: not for v2. Defer to a future proposal if a real consumer surfaces the need.
5. **Dark-mode pairing.** Out of scope for this proposal (light-mode only); flagged for future dark-mode work.
6. **Should the orange be authored as an HSL value rather than hex?** HSL exposes saturation/lightness for easier downstream variant generation. Designer-side stance: hex for v1 (matches existing token style); the DS team can refactor to HSL during the dark-mode work if useful.
7. **Per-page cap enforcement.** TS can't enforce; composition guidance only. Acceptable trade-off?

---

## 8. Out of scope

- Dark-mode-equivalent values for the warm tokens. Flagged; deferred to DS dark-mode work.
- A `<Band>` or `<EditorialBand>` molecule that composes `--bg-warm-accent` automatically. The `/about` v2 composition uses `<Hero>` with new props (`surface="warm-accent"`, `bleed="full"`) — see `content-max-bleed.md` proposal. A dedicated molecule may emerge if `<Hero>` becomes overloaded.
- Site-side OG card / share image generation using the warm band. Future work.
- A warm `--accent-warm` signal token (warm equivalent of `--accent` for links / focus rings). Out — `--accent` stays blue; the warm tokens are surface-only.
- Companion warm `--hairline-warm` for hairlines on the warm surface. Out — hairlines on the warm surface would read as decoration; the band's edge is the page's only hairline-class signal at the warm tier.
- Print-color-profile considerations. Out — pouk.ai is web-only.
- The `/about` v2 composition revision itself (lives at `meta/compositions/pages/about.md`, in review).
- The portrait asset production. Arian's lane.
