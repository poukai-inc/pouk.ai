# Home illustration + density — decisions D-17 → D-21

**Status**: Closed (resolved 2026-05-17)
**Owner**: Arian (founder, sole approver)
**Compiled**: 2026-05-17
**Closed**: 2026-05-17
**Compiler**: Claude (orchestrator), synthesizing Arian's direction picks from the home-redesign turn.

---

## Closing summary

Five decisions resolved in a single sitting on 2026-05-17. Propagated changes:

- **Spec lane** — D-17/D-18/D-19/D-20/D-21 applied to `meta/specs/pages/home-amendment-illustration-and-density.md`. Status flipped `Draft` → `Approved (2026-05-17)`.
- **Composition lane** — D-17/D-18/D-19/D-20 applied to `meta/compositions/pages/home.md` (revision 2026-05-17, supersedes 2026-05-16 ratified version).
- **DS-side proposals lane** — D-17/D-18 filed as GitHub issues against `poukai-inc/poukai-ui`: [poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39) (`<Hero size>` prop), [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) (`<Hero illustration>` slot). Both labeled `proposal:from-consumer`, `consumer:pouk.ai`. Authoring sources preserved in `meta/proposals/ds-side/`.
- **Engineering lane** — partial-ship bundle authorized: `.site-page` padding reduction (D-19) + `<Button size="sm">` (D-20) ship now without waiting on DS acceptance. Title density (D-18) + illustration (D-17) ship after DS lands.

---

## D-17 — Pouākai illustration direction

**Status (2026-05-17 end-of-day)**: **DEFERRED** — Arian deferred consumption after Gemini A/B candidates (rev-3 + rev-4) did not converge on the brand register. The direction, register, posture, production tool, and curation rubric below remain the spec for a future iteration. DS-gap [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) stays open; maintainers may still accept independent of this consumer's timing. Asset-production prompt pack at [`meta/asset-production/pouakai-engraving-prompt.md`](../asset-production/pouakai-engraving-prompt.md) preserved unedited as future-iteration reference state (carries rev-3 + rev-4 long-form + rev-5 short-form in §2.2a/§2.2b).

**Decision (when resumed)**: Engraving register, in-flight posture, AI-generated and Arian-curated.

**Rationale**: Engraving fits the "Old-World editorial" inspiration anchor (NYT The Daily, Stripe Press, FT Weekend, Cabinet, Audubon plates, Haeckel, Te Papa Pouākai reconstructions). In-flight posture (soaring; right-facing recommended) carries weight-per-pixel and matches the brand's namesake. AI-generated curation keeps cost/timeline tractable at brand stage; commissioning a hand engraving is deferred.

**Trade-offs accepted**: AI-generated engravings may read as cheap if curation is shallow; designer's §7 open question stands. Failure mode "the illustration performs" (PM amendment §5) applies.

**Rejected alternatives**: Watermark (lowest payoff). Small mark above status (smaller asset surface but lower weight). Hand-commissioned engraving (cost/timeline).

**Propagation**: composition §2 illustration asset notes; PM amendment §4.1 + §6 asset-production line. The asset itself is **not yet produced** — see D-17 owner gap below.

**Producer (resolved 2026-05-17)**: Arian sources the SVG via [Kittl](https://www.kittl.com/) (text-to-image + built-in vectorizer + SVG export). Prompt pack, curation rubric, and vectorize/export spec at [`meta/asset-production/pouakai-engraving-prompt.md`](../asset-production/pouakai-engraving-prompt.md). Asset lands at `public/illustrations/pouakai.min.svg` and is inline-imported into `<Hero illustration>` once [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) lands.

---

## D-18 — Hero title density

**Decision**: DS-gap Lever A — `<Hero size="intimate">` prop on `<Hero>`, default `"display"` preserves current behavior, `"intimate"` lowers the title clamp to `clamp(2rem, 1.25rem + 2.5vw, 3.25rem)` (32–52px). New DS token `--fs-tagline-intimate`. Hero internal rhythm tokens unchanged at `"intimate"`.

**Rationale**: Arian: "copy is fine, font-size is just too big." The brutalism complaint is scale, not wording — content-layer rewrite (Lever C) does not address the actual concern. Site-side override of internal Hero scale is forbidden by composition §2 lock; the only path is a DS contract change. Universal (not home-only) so `/principles`, `/roles`, `/why-ai` can consume.

**Rejected alternatives**: Lever B (`titleScale` token override slot) — wrong shape, exposes DS internals. Lever C (content-layer rewrite) — does not address scale. Lever C.4 (line-break at caesura, designer's round-1 interim) — addresses perceived density, not actual scale.

**Propagation**: composition §6.1 + PM amendment §4.2 lever choice + §6 dependency tracking. **Tracked**: [poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39) → closed via [poukai-ui#41](https://github.com/poukai-inc/poukai-ui/pull/41).

**Blocking dependency**: ~~`@poukai-inc/poukai-ui` maintainers accept #39, ship minor version bump, site bumps DS dep. Engineer waits before consuming `size="intimate"` on `/`.~~ **RESOLVED 2026-05-17**: DS shipped `<Hero size>` prop via [poukai-ui#41](https://github.com/poukai-inc/poukai-ui/pull/41) in `@poukai-inc/ui@0.7.0`. Site bumped dep + consumed `size="intimate"` at commit `38ee1e0` (third partial ship in the home-redesign sequence).

**Follow-up gap discovered on live audit (2026-05-17)**: at `size="intimate"`, the Hero rhythm tokens (`--space-6` status→title, `--space-8` title→lede) read disproportionately generous against the smaller title. The original #39 proposal we authored explicitly locked rhythm unchanged across variants — that lock was reversed via [poukai-ui#44](https://github.com/poukai-inc/poukai-ui/issues/44). Rev 2 after designer audit (same day): status→title 24px → **12px (`--space-3`)** for label-relationship register; title→lede 32px → 24px desktop, 24px → 16px mobile; CTA gap untouched. **RESOLVED 2026-05-17**: shipped in `@poukai-inc/ui@0.7.1` via [poukai-ui#45](https://github.com/poukai-inc/poukai-ui/pull/45); site consumed via bot PR [poukai-inc/pouk.ai#20](https://github.com/poukai-inc/pouk.ai/pull/20). Live audit confirms Arian's "looking too big" reaction resolved. Audit trail: original proposal said "rhythm unchanged"; live audit reversed; consumer-side rev 1 proposed `--space-4`; designer audit tightened to `--space-3` (rev 2); DS shipped rev 2 exactly.

---

## D-19 — `.site-page` padding-block reduction

**Decision**: `.site-page` `padding-block` reduced from `--space-16` (64px) to `--space-12` (48px). Token-compliant.

**Rationale**: Footer-fold position on 13–14" laptops moves closer to the fold per Arian's directional preference. Designer §5 math at 1440×900 and 1440×768 confirms PM amendment §4.3 targets hit with margin (≤120px below fold at 900, ≤180px at 768). `--space-10` (40px) does not exist in the DS spacing scale; `--space-12` is the next valid token below `--space-16`. `--space-8` (32px) rejected as below the brand restraint floor (page would read cramped).

**Rejected alternatives**: `--space-10` — not a valid DS token. `--space-8` — too cramped. Raw px override — token-compliance violation.

**Propagation**: composition §3 (Cross-section rhythm) + PM amendment §4.3 token-value AC. **Site-side change only — no DS dependency.** Ships now as part of the partial-ship bundle.

---

## D-20 — Hero CTA scale

**Decision (initial 2026-05-17)**: Existing API path — `<Button asChild size="sm">` (32px min-height) on the Hero CTA. No DS-gap filed. Shipped via partial-ship commit `9076cc4`.

**Decision (revised 2026-05-17 post-audit)**: `sm` is **transitional**. Live-page audit revealed the DS `sm`/`md` gap (12px) is too coarse for the brand-restrained register against the (currently-default) `<Hero size="display">` title — `sm` reads visually too small. DS-gap filed for new intermediate `compact` (~38px) at [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42). When #42 lands, engineer flips `size="sm"` → `size="compact"` in the same PR that consumes `<Hero size="intimate">` ([poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39)).

**Rationale**: `<Button size>` existed at `@poukai-inc/ui@0.6.1` with three rungs (`sm` 32 / `md` 44 / `lg` 52). The 12px gap between `sm` and `md` matters at brand surfaces where the CTA is a single editorial affordance. Round-2 designer investigation closed too early on the existing API; the live audit was the verifier the rubric couldn't substitute for. WCAG 2.5.8 AA tap target (24×24px) still met at any chosen rung; WCAG 2.5.5 AAA (44×44px) still waived per brand-stage acceptance.

**Trade-offs accepted**: AAA tap-target waiver continues. AAA still fails at `compact` (~38px) as at `sm`. The partial-ship state ships an interim wrong-pairing per composition §6.3 (`sm` is proportional with `intimate`, not with current `display`) — accepted because:
  1. The branch is not yet pushed; public never sees the disproportion.
  2. Reverting to `md` re-opens the original "too big" complaint Arian flagged before the amendment.
  3. The final state (`compact` + `intimate`) is on the way; the interim is bounded.

**Rejected alternatives**: revert to `md` (original "too big" feel returns); hold push entirely until #39 + #42 both land (delays the padding-reduction half of the partial ship for no public benefit); site-side override of Button (composition lock violation).

**Propagation**: composition §6.3 (revised) + new §6.4 (`compact` DS-gap) + PM amendment §4.4 (mechanism rev-2) + §6 (CTA dep REOPENED) + this entry (revised). New blocking dependency: [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42).

---

## D-21 — Cross-page reusability + rollout sequencing

**Decision**: The DS-gaps from D-17/D-18 are **universal `<Hero>` contract changes**, not home-only overrides. The Pouākai engraving asset is **a single shared SVG/raster file** designed for reuse across `/`, `/roles`, `/principles`, `/why-ai` (per-page pose variation deferred to per-page composition recipes). Rollout to the three other pages is **sequenced after `/` ships and validates** — one PM amendment per route, one composition recipe per route, in series.

**Rationale**: Arian: "the artifacts will land on other pages." Universal contracts avoid forking the DS for one page. Sequencing after `/` validates the engraving + intimate density + sm CTA combination in production before propagating risk to three more surfaces.

**Rejected alternatives**: Parallel amendments for all four pages now — drafts built on un-shipped composition; rework if `/` reveals issues. Hybrid (draft amendments now, hold approval) — captures cross-page thinking but adds maintenance burden on the four-document set during the `/` validation window.

**Propagation**: composition §0 cross-page note banner + composition §6.1/§6.2 "Where it appears" sections + PM amendment §9. **No immediate action on `/roles`, `/principles`, `/why-ai` — out of scope for this decision cycle.**

---

## Bundle ship strategy (cross-cutting)

Arian flipped from "bundle all four (D-17/D-18/D-19/D-20) into one PR" to **partial ship**:

- **Ships now (no DS dependency)**: D-19 (`.site-page` `--space-12`) + D-20 (`<Button size="sm">`). One PR; small site-side change. Validates ~half the brutalism complaint (page density + CTA mass) in production.
- **Ships when DS lands + asset ready**: D-18 (`<Hero size="intimate">`) + D-17 (`<Hero illustration>` + Pouākai SVG). Second PR; composition re-ratifies fully on landing.

This breaks the earlier bundle-lock decision deliberately. The partial bundle is the largest unit shippable today; the full bundle re-bundles once dependencies clear.

---

## Open items after this decision cycle

1. **Asset producer for D-17** — **deferred 2026-05-17 end-of-day**: Pouākai SVG production paused; Gemini A/B rev-3 + rev-4 did not converge on register. Prompt pack carries rev-3 + rev-4 long-form + rev-5 short-form as reference for future iteration. Whoever picks this back up: start with §2.2b short-form, fall back to §2.2a long-form if adherence misses.
2. **DS-side review of [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) + [poukai-ui#42](https://github.com/poukai-inc/poukai-ui/issues/42) + [poukai-ui#44](https://github.com/poukai-inc/poukai-ui/issues/44).** External lane; tracked via GH. [poukai-ui#39](https://github.com/poukai-inc/poukai-ui/issues/39) closed and shipped in 0.7.0; #44 is the live-audit follow-up tightening rhythm at intimate.
3. **`/why-ai`, `/roles`, `/principles` amendments.** Sequenced post-`/`-ship.
4. **D-22 candidate** — `<Button size="compact">` DS-gap. Decision was made implicitly when the proposal was filed; formal entry deferred until DS maintainers' response (accept / counter / reject). If accepted: log as D-22 with the chosen min-height and pairing-convention text. If countered or rejected: log as D-22 with the maintainers' framing and the chosen workaround.
