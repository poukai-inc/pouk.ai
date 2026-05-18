# DS Proposal: `--surface-section` token + page-section surface rhythm pattern

**Target**: `@poukai-inc/ui` tokens + composition guidance
**Status**: Filed (consumer-side proposal routed to DS team)
**Tracked**: [`poukai-inc/poukai-ui#53`](https://github.com/poukai-inc/poukai-ui/issues/53), filed 2026-05-18 by Arian (founder)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-18
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/proposals/about-v2-explorations.md`](../../compositions/proposals/about-v2-explorations.md) §2.1, §3 Direction B
**DS version observed**: `@poukai-inc/ui@0.9.0`

---

## 0. Framing

This is one of three DS proposals filed concurrently against the `/about` v2 recalibration. The recalibration brief retired `/about` v1's "contained" framing — `/about` is now register-lead, and DS-gap proposals are filed optimistically as universal `@poukai-inc/ui` contract additions, not page-specific carve-outs.

This proposal is the most contract-load-bearing of the three because it touches the **elevation rhythm**, which the DS treats as one of its most protected brand-contract rules (`llms-full.txt` lines 16, 18, 164–165 and the *"never pure edges"* / *"never collapse the elevation rhythm"* anti-patterns).

The DS team is asked to evaluate whether the *current* elevation rhythm — `--surface (recessed inline) < --bg (page canvas) < --bg-elevated (overlays only)` — can absorb a new tier for *recessed page-section* backgrounds, or whether the consumer-side need can be satisfied differently (e.g., a hairline-bounded composition pattern that signals section change without a color change).

The proposal includes both the additive token sketch and an honest fallback (Pattern A vs. Pattern B in §3 below), and explicitly defers to DS judgment on which preserves the brand contract better.

---

## 1. The composition gap

`<RoleCard>` cards, `<Principle>` molecules, `<FailureMode>` molecules, and `<Stat>` are all *content-bearing molecules* that compose inside a single page surface (`--bg`). The DS does not currently expose any vocabulary for **sectional rhythm via surface change** — i.e., the pattern Apple, Stripe, A24, MoMA, Patagonia and most editorial-quality marketing sites use to mark "this is a new section" by giving it its own background.

The current DS contract:

- `--bg: #FBFBFD` — page canvas (line 15).
- `--surface: #F5F5F7` — *"Recessed elevation (one step below `--bg`). Used for code blocks, quote backgrounds, card fills (RoleCard). NEVER use as body text. NEVER use as a section divider."* (line 17, emphasis added)
- `--bg-elevated: #FFFFFF` — *"Reserved exclusively for popovers, sheets, modals, and dialogs. … NEVER use `--bg-elevated` for page background or content sections."* (lines 16, 164)
- Anti-pattern: *"Do not collapse the elevation rhythm."* (line 165)

The result: every page sits on `--bg`. Sections are visually marked only by spacing, hairlines, or headings — never by surface change.

### Where this need appears

1. **`/about` v2 Direction B** (the active driver) — surface-rhythmed scroll with 4–5 alternating-surface bands. Without `--surface-section` (or equivalent), Direction B collapses to a single-surface page and the surface-led rhythm move evaporates.
2. **Future editorial pages** — any pouk.ai `/values`, `/manifesto`, customer-story page, or `/leadership` analog that wants Apple-class sectional rhythm.
3. **Cross-consumer** — any other DS consumer that wants editorial multi-band layout. The need is universal in the editorial-marketing-site genre.

### What consumers currently do (in the DS contract's absence)

- **Workaround A**: ship every page on a single surface (today's state). Sections are marked by hairlines and spacing only.
- **Workaround B**: use `--surface` (the inline-recessed token) for sections in violation of the documented rule. Visually works; explicitly prohibited by the rule.
- **Workaround C**: introduce site-side color tokens that resolve to hand-picked hex values. Violates ADR-0002 (all values via DS tokens).
- **Workaround D**: ship the section's content inside a card or full-width molecule that has a recessed fill (e.g., a `<RoleCard>` styled as a band). Misuses molecules for a layout job they weren't designed for.

None of these are clean. The DS-gap is real.

---

## 2. Why the existing rule was right (and what changed)

The rule *"NEVER use as a section divider"* on `--surface` is well-reasoned: it preserves the three-step elevation rhythm and prevents consumers from collapsing the rhythm by reusing `--surface` for everything.

What changed since the rule was written:

- The DS has now shipped four routes (`/`, `/why-ai`, `/roles`, `/principles`) and the founder has reviewed the result. The consensus call: the brand's restraint is real, but the absence of *any* compositional rhythm beyond hairlines means the brand reads as **austere** in places where it should read as **composed**.
- The founder explicitly asked for "minimalistic but creative" — restraint with deliberate compositional moves. Surface alternation is the canonical move for this.
- `/about` v2 is positioned as register-lead — the page that establishes the brand's editorial vocabulary going forward. The DS-gap is now actively blocking a brand-significant page.

The rule's *spirit* (don't collapse the three-step elevation rhythm) remains correct. This proposal asks the DS team to preserve the spirit while admitting a new tier that solves the gap.

---

## 3. Two viable DS shapes (DS picks)

### Pattern A — Add a new token: `--surface-section`

A fourth tier in the elevation rhythm, dedicated to recessed page-section backgrounds.

**Proposed addition** to `tokens.css`:

```css
:root {
  /* existing tokens unchanged */
  --bg: #fbfbfd;
  --bg-elevated: #ffffff;
  --surface: #f5f5f7;            /* inline-recessed: code, quotes, cards */
  --surface-section: <DS picks>; /* section-recessed: page-section background */
}
```

**Recommended value range**: subtler than `--surface`. The inline-recessed `--surface` reads as "this element is recessed below the page"; a section-recessed value should read as "this band is a different section." Closer to `--bg` than `--surface` is.

**Possible values** (DS picks):
- `#F8F8FA` — one step below `--bg`, half-way to `--surface`.
- `#FAFAFC` — barely-perceptible band, ultra-subtle.
- `#F7F7F9` — a third-step value distinct from both `--bg` and `--surface`.

**Elevation rhythm after addition** (four tiers, low to high):

```
--surface (#F5F5F7)        ← inline-recessed (code, quote, card fill)
--surface-section (#F8F8FA) ← section-recessed (page-section band)        [NEW]
--bg (#FBFBFD)             ← page canvas
--bg-elevated (#FFFFFF)    ← overlay
```

The rhythm grows from three steps to four. The contract preserves: inline-recessed and section-recessed are *different roles*, not the same role applied differently.

**Composition guidance** (added to `llms-full.txt`):
- `--surface-section`: *Page-section backgrounds only.* Used for marking sectional rhythm via tonal alternation between `--bg` and `--surface-section`. NEVER use for inline-recessed elements (those remain on `--surface`). NEVER use as body text. NEVER use as a section divider — use the surface change itself as the divider.
- Anti-pattern (preserved): *"Do not collapse the elevation rhythm."* — extended to four tiers.
- Anti-pattern (new): *"Do not use `--surface-section` for inline-recessed elements."* — the inline-recessed role stays on `--surface`.

**Semver impact**: minor version bump per ADR-0003 (token addition).

### Pattern B — Composition pattern only, no new token

Document a **layout pattern** that achieves sectional rhythm via existing primitives without adding a token. The pattern uses hairlines + generous vertical spacing + section headings + content-max bleed transitions to *imply* sectional rhythm without changing color.

**Pattern shape** (no DS code change, only `llms-full.txt` guidance):

- Sections are bounded above and below by hairline rules (`border-block: 1px solid var(--hairline)`).
- Section vertical padding is `--space-24` (96px) or larger.
- Section headings use Instrument Serif italic at editorial scale.
- Sections may *bleed* horizontally to the viewport's `--page-pad` edges (a separate proposal — see §6).

**Why this might be the right answer**: it preserves the elevation-rhythm contract entirely. Three tiers stay three tiers. Hairlines do the rhythm job — which is what the four shipped routes already do, just done more deliberately.

**Why it might not be enough**: hairlines mark sections but do not give each section *its own visual identity*. The reader's eye scans hairlines as horizontal punctuation; surface change reads as *room change*. Apple's company pages use surface change because hairlines alone don't carry the rhythm at the scale Apple wants. The consumer-side question is whether pouk.ai's restraint posture wants the *room change* feeling at all, or whether hairlined sectioning is in-register.

### Designer recommendation

**Pattern A**, with the caveat that the DS team's read on the elevation-rhythm contract is decisive.

Reasoning:

- The brand voice is restraint, not asceticism. A barely-perceptible section-tone (#F8F8FA — 2-point difference from `--bg`) is restraint executed with care, not decoration.
- The fourth tier is *narrow*: section-recessed only. It does not invite drift because there is no other role it can take.
- Pattern B works, but reads as the DS rejecting the move on principle. The page-level rhythm move is widely-established at the editorial-marketing-site genre level; the brand should have access to it.

If the DS team disagrees and picks Pattern B, the consumer-side composition adjusts — `/about` v2 Direction B collapses to Direction A (single-statement display lead) or a hairlined-only Direction B variant. The composition still ships; the visual rhythm move just doesn't.

---

## 4. Accessibility considerations

- WCAG 1.4.3 (contrast minimum) for text: body text on `--surface-section` must continue to meet 4.5:1 contrast against `--fg`. The recommended values (#F8F8FA, #FAFAFC, #F7F7F9) all maintain 14:1+ against `--fg` (#1D1D1F), comfortably above the 4.5:1 floor.
- WCAG 1.4.11 (non-text contrast): a 2-point tonal difference between `--bg` (#FBFBFD) and `--surface-section` (#F8F8FA) is below the 3:1 non-text-contrast floor — but that floor applies to *informational* surfaces (UI components, graphical objects conveying state). Sectional background change is *not* informational; it is decorative compositional rhythm. The reader who doesn't perceive the tonal change still reads the page correctly (sections are still bounded by spacing + headings + optionally hairlines). The token is additive-only — it never *replaces* a structural signal with color.
- Dark-mode invertibility: a future dark-mode palette would need a dark-mode `--surface-section` value. The DS palette already commits to inversion via "never pure edges"; adding a fourth tier extends that commitment by one row.

---

## 5. Trade-offs

1. **Token surface area grows.** Four elevation tiers instead of three. Consumers have one more decision to make per page. Mitigation: composition guidance makes the role unambiguous (page-section bands → `--surface-section`; everything else stays on its existing token).
2. **`llms-full.txt` rule extension.** The rule *"NEVER use as a section divider"* on `--surface` (line 18) stays; a new rule says `--surface-section` *is* the section divider tier. This is a documentation churn cost the DS team absorbs.
3. **Possible misuse**: a consumer might apply `--surface-section` to inline-recessed elements, collapsing the inline/section role distinction. Mitigation: anti-pattern documented, axe-class linting (if the DS ever ships consumer-side lint hooks) could catch it.
4. **The token's actual value is a design call.** Designer recommends #F8F8FA; DS picks the final value. If picked too close to `--bg`, the rhythm move evaporates; if picked too close to `--surface`, the inline-recessed and section-recessed roles visually collide.
5. **Cross-page composition will favor adoption.** Once `/about` v2 ships with `--surface-section`, future page revisions on `/`, `/why-ai`, `/roles`, `/principles` may want to consume it too. This is by design — the founder's "first of its class" framing positions `/about` as the register-lead — but the DS team should be aware that adoption may not stay scoped to `/about`.

---

## 6. Adjacent proposals (not part of this proposal but worth flagging)

- **`--content-max-bleed`**: a horizontal-bleed contract for sections that extend beyond `--content-max` to the viewport's `--page-pad` edges. Sectional rhythm reads stronger when bands span the full viewport width. Not filed yet; the pouk.ai composition can ship Pattern A without it (sections bleed inside `--content-max` only). **Designer-side note**: if Pattern A is accepted, `--content-max-bleed` becomes the natural next proposal.

---

## 7. Adoption plan

1. **DS-side accept / revise / reject** the proposal. If accepted, decide between Pattern A and Pattern B and (if A) pick the token value.
2. **DS-side ship**: implement the token (Pattern A) and/or document the pattern (Pattern B). Add Ladle stories demonstrating the rhythm (a two-band, three-band, and four-band sequence). Add Playwright CT + axe-core tests for contrast and structural correctness. Author changeset for minor (Pattern A) or patch (Pattern B documentation-only) version bump.
3. **DS-side documentation**: update `dist/llms-full.txt` to extend the elevation rhythm to four tiers (Pattern A) or document the sectional-rhythm composition pattern (Pattern B).
4. **Site bumps DS dep**: pouk.ai bumps `@poukai-inc/ui` to the new minor.
5. **`/about` v2 composition revision** consumes the new token (or pattern), provided the founder picked Direction B. If the founder picked Direction A or C, the token is available for future page revisions.
6. **Subsequent pages adopt**: per their own revision cadences.

---

## 8. Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Pattern A vs. Pattern B?** Designer-side recommendation: Pattern A. If Pattern B, the brand commits to hairlined-only sectioning indefinitely.
2. **If Pattern A, what value?** Designer-side recommendation: #F8F8FA (a 2-point step below `--bg`). DS picks final.
3. **Naming.** `--surface-section` is the designer-side recommendation. Alternatives: `--bg-section`, `--bg-recessed`, `--section-bg`. DS picks.
4. **Do we extend the `--bg-elevated` rule symmetrically?** I.e., do we admit a `--bg-elevated-section` for *raised* page sections? Designer-side recommendation: **no**. Raised page sections are not an editorial-page need pouk.ai has surfaced; YAGNI. Reopen if a real consumer need surfaces.
5. **Dark-mode value** — left to the DS team's dark-mode palette work whenever it happens. The token is additive at light-mode now; dark-mode adoption is whenever dark mode ships.
6. **Linting / lint-hooks** for misuse — out of scope for this proposal. Document the anti-pattern; trust consumers.

---

## 9. Out of scope

- The `--content-max-bleed` proposal flagged in §6.
- The `<Statement>` molecule proposal filed at [`statement-molecule.md`](./statement-molecule.md) — orthogonal; lands on its own merits.
- The `--fs-display` / `--fs-display-lg` proposal filed at [`type-display-scale.md`](./type-display-scale.md) — orthogonal; lands on its own merits.
- Dark-mode palette work in general.
- The `/about` v2 composition revision (waits on founder picking a Direction).
- A `<Band>` or `<Section>` layout molecule that consumes `--surface-section` automatically. Could be a follow-up if the DS team prefers a molecule-level surface change over a token-level one — but composition-level CSS is the simpler shape and matches how `.site-page` already works.
