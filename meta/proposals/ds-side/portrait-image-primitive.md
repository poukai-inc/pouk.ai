# DS Proposal: `<Portrait>` molecule — responsive image primitive at editorial register

**Target**: `@poukai-inc/ui` molecules (new)
**Status**: Filed (consumer-side proposal routed to DS team)
**Tracked**: [`poukai-inc/poukai-ui#58`](https://github.com/poukai-inc/poukai-ui/issues/58), filed 2026-05-18 by Arian (founder)
**Proposing consumer**: pouk.ai site (`pouk-ai-designer`)
**Proposing date**: 2026-05-18
**Authorized by**: Arian (founder, pouk.ai)
**Site composition that drives this**: [`meta/compositions/pages/about.md`](../../compositions/pages/about.md) v2 §6.6
**DS version observed**: `@poukai-inc/ui@0.9.0`

---

## 0. Framing

One of three DS proposals filed concurrently with `/about` v2 composition. This is the **image primitive** pouk.ai doesn't have yet.

The brand has shipped four routes without any figural imagery. `/about` v2 introduces the first: an AI-generated cinematic editorial portrait of the founder, used as the page's load-bearing visual moment inside the `<Hero illustration>` slot. This is a one-off use today; it is **almost certainly** the first of several over the brand's lifetime (a future `/team` page, customer-story testimonial portraits, press photos, founder photography for partner co-marketing, etc.).

Pouk.ai needs a consistent way to ship responsive images at-register. This proposal codifies the pattern as a molecule.

---

## 1. The composition gap

The DS today exposes zero image primitives. Consumers who want to ship an image must hand-roll:

- The `<picture>` element with `<source>` for AVIF + WebP + JPEG fallback.
- The `srcset` widths for responsive serving (mobile / tablet / desktop / retina).
- The `sizes` attribute matching the layout's column width at each breakpoint.
- The `loading` posture (`eager` for above-fold, `lazy` for below).
- The `decoding` posture (`async` standard).
- The `fetchpriority` posture (`high` for LCP candidates).
- The aspect-ratio CSS to prevent layout shift before image decodes.
- The `alt` text contract.
- The object-fit / object-position behavior for cropping.

Every consumer re-authors this. Mistakes are easy: missing `<source>` fallbacks cause AVIF-unsupported browsers to drop to image fallback (or skip the image entirely on edge cases), mismatched `sizes` cause wasted bandwidth, missing aspect ratios cause CLS hits to Lighthouse, missing `alt` causes axe failures.

A molecule codifies the pattern once. Consumers pass the asset + alt + aspect; the molecule handles the rest.

### Where this need appears

1. **`/about` v2 portrait band** (active driver). The molecule's first consumer.
2. **Future imagery surfaces**:
   - A future `/team` or `/leadership` page with multiple portraits.
   - Customer-story testimonial portraits (whenever case-study pages ship).
   - Founder photography for partner co-marketing pages.
   - Press / "as featured in" portraits.
   - Event photography for conference talks or workshop pages.
3. **Cross-consumer (speculative)** — any other `@poukai-inc/ui` consumer shipping editorial-register imagery.

---

## 2. Proposed API

```tsx
<Portrait
  src={portraitArianAsset}              // imported asset (engineer's astro:assets or equivalent)
  alt="Arian Zargaran, founder of pouk.ai. Cinematic editorial portrait on saturated orange backdrop."
  aspect="3:4"                          // intrinsic aspect ratio: "3:4" | "4:3" | "1:1" | "16:9" | string
  width={1800}                          // intrinsic max-render width (px) — drives srcset
  loading="eager"                       // "eager" | "lazy" — default "lazy"
  fetchPriority="high"                  // "high" | "auto" | "low" — default "auto"
  sizes="(max-width: 720px) 100vw, 45vw" // CSS sizes string — consumer-authored per layout
  objectPosition="center top"           // CSS object-position — default "center"
/>
```

### Props

- **`src: ImageMetadata | string` (required)** — the imported asset. Type matches Astro's `astro:assets` ImageMetadata for static builds; alternatively a plain string URL for external assets.
- **`alt: string` (required, **non-empty**)** — substantive alt text. The molecule **rejects empty alt at runtime in dev mode** (throws or warns) — portraits are never decorative. WCAG 1.1.1 contract.
- **`aspect: AspectRatio` (required)** — intrinsic aspect ratio. Drives the molecule's CSS `aspect-ratio` for CLS prevention.
- **`width: number` (required)** — intrinsic max-render width in pixels. Drives `srcset` generation: the molecule renders sources at `width`, `width/1.5`, `width/2.4`, `width/3.75` (≈ 1800, 1200, 768, 480 for a 1800px max).
- **`loading: "eager" | "lazy"` (optional, default `"lazy"`)** — `eager` for above-fold images; `lazy` for everything else.
- **`fetchPriority: "high" | "auto" | "low"` (optional, default `"auto"`)** — `"high"` for LCP candidates only.
- **`sizes: string` (optional, default `"100vw"`)** — consumer-authored CSS sizes string matching the layout's column width at each breakpoint. The default is conservative (assumes full-width); consumers with two-column layouts pass `"(max-width: 720px) 100vw, 45vw"` or similar.
- **`objectPosition: string` (optional, default `"center"`)** — CSS object-position for crop control. Common values: `"center"`, `"center top"`, `"50% 25%"` (custom crops).
- **`className?: string`** — for consumer-side styling (rare; the molecule's defaults should cover most cases).

### Rendered structure

```html
<picture>
  <source
    type="image/avif"
    srcset="portrait-480.avif 480w, portrait-768.avif 768w, portrait-1200.avif 1200w, portrait-1800.avif 1800w"
    sizes="(max-width: 720px) 100vw, 45vw"
  />
  <source
    type="image/webp"
    srcset="portrait-480.webp 480w, portrait-768.webp 768w, portrait-1200.webp 1200w, portrait-1800.webp 1800w"
    sizes="(max-width: 720px) 100vw, 45vw"
  />
  <img
    src="portrait-1200.jpeg"
    srcset="portrait-480.jpeg 480w, portrait-768.jpeg 768w, portrait-1200.jpeg 1200w, portrait-1800.jpeg 1800w"
    sizes="(max-width: 720px) 100vw, 45vw"
    alt="Arian Zargaran, founder of pouk.ai. …"
    loading="eager"
    fetchpriority="high"
    decoding="async"
    width="1800"
    height="2400"
    style="aspect-ratio: 3 / 4; object-fit: cover; object-position: center top;"
  />
</picture>
```

### Semver impact

Minor version bump per ADR-0003 (additive new molecule).

---

## 3. Accessibility contract

- **`alt` is required and non-empty.** The molecule's TypeScript signature marks `alt` as required `string`; the molecule's runtime (in dev mode) warns or throws on empty alt. WCAG 1.1.1.
- **Substantive alt text only.** `llms-full.txt` documents the contract: portrait alt text names the subject, the framing, and the asset's role on the page. Example for `/about`: *"Arian Zargaran, founder of pouk.ai. Cinematic editorial portrait on saturated orange backdrop."*
- **Decorative portraits don't exist.** A portrait is, by definition, identifying a person. If a consumer wants a *decorative figure* (e.g., a silhouette pattern, a non-identifying graphic), they should use the existing `<Hero illustration>` slot with an SVG (which supports `aria-hidden="true"`) — not `<Portrait>`.
- **Multi-portrait pages** (a future `/team`) — each `<Portrait>` carries its own alt naming the subject. Composition guidance documents that batch-alt patterns are wrong (alt text is per-subject, not per-template).
- **WCAG 1.4.11 (Non-text Contrast)**: portrait images don't typically convey state; the contrast contract applies to UI components, not editorial photography. The portrait's backdrop contrast with adjacent CSS surface is the editorial pairing (handled by `color-warm-accent.md` for `/about` v2's case).
- **WCAG 1.4.10 (Reflow)**: the molecule's `width` + `aspect-ratio` CSS prevents horizontal overflow at 320px viewport. The image reflows inside its column.
- **WCAG 1.3.1 (Info and Relationships)**: figure semantics — designer-side stance is the molecule renders as `<picture><img></picture>` (no `<figure>` wrapper). A consumer wanting `<figure>` + `<figcaption>` wraps the molecule themselves.

---

## 4. Composition rules (proposed for `llms-full.txt`)

- **`<Portrait>` is for figural imagery only.** Portraits, headshots, single-subject editorial photographs. NOT for product shots (use `<ProductImage>` if/when that ships), illustrations (use `<Hero illustration>` slot with SVG), icons (use Lucide), or decorative backgrounds (use CSS).
- **Alt text is required.** The molecule rejects empty alt.
- **One `<Portrait>` per page recommended; multiple allowed.** A future `/team` page may carry 5–20 `<Portrait>` instances. The molecule does not cap the count, but composition guidance recommends single-portrait pages for editorial focus.
- **LCP candidate handling**: when a `<Portrait>` is above-the-fold and represents the page's primary visual element, set `loading="eager"` and `fetchPriority="high"`. Additionally, the page's `BaseLayout` should `<link rel="preload" as="image">` the AVIF variant. The molecule itself does not emit the preload (engineer-mechanical at page level).
- **Aspect ratio is per-asset, not enforced.** The molecule passes `aspect` through to CSS; if the source asset has a different intrinsic ratio, the image is cropped via `object-fit: cover`. Consumers ensure asset and aspect prop match.

---

## 5. Performance budget guidance (proposed for `llms-full.txt`)

The molecule itself doesn't enforce file sizes (impossible at the type level). `llms-full.txt` documents the budget guidance:

- **AVIF**: aim for ≤80KB at the largest srcset width (e.g., 1800w for desktop portraits at `width={1800}`).
- **WebP**: aim for ≤120KB at the largest srcset width.
- **JPEG fallback**: aim for ≤180KB at the largest srcset width.
- **Mobile (smallest srcset)**: aim for ≤30KB AVIF / ≤45KB WebP / ≤60KB JPEG.

These are *guidance, not enforcement*. Consumers manage their own image pipeline.

---

## 6. Trade-offs

1. **Adds an image primitive to the DS surface.** One more molecule for consumers to learn, one more set of tests to maintain. **Mitigation**: the molecule is small (a `<picture>` wrapper); the value is in the codified contract.
2. **Depends on Astro's `astro:assets` (or equivalent) for static-build asset processing.** The molecule itself is framework-agnostic in API; the pipeline that generates the `srcset` variants is consumer-side. **Mitigation**: the molecule documents the expected pipeline shape; consumers using a non-Astro pipeline pass pre-generated URLs.
3. **`alt` requirement may surprise consumers used to optional alt.** Decorative `alt=""` is a valid HTML pattern for genuinely decorative images. The molecule's stance is that portraits aren't decorative, so the requirement is correct for the molecule's scope. **Mitigation**: clear error message ("portraits require alt text; use `<Hero illustration>` slot for decorative figures"); composition guidance explains the scope.
4. **`width` + `aspect` separation is redundant in some cases.** A consumer passing `width={1800}` and `aspect="3:4"` is implying a height of 2400, which the molecule computes; the consumer didn't need to compute it. **Mitigation**: the molecule accepts both for explicit consumer control; explicit is better than implicit when CLS prevention is at stake.
5. **The molecule doesn't compose with `<Hero illustration>` slot semantically.** A consumer passing `<Hero illustration={<Portrait ... />}>` works at the DOM level but stacks two contracts (Hero's illustration slot expects ReactNode, Portrait provides ReactNode). **Mitigation**: this is correct behavior; the slot's flexibility is the point.

---

## 7. Adoption plan

1. **DS-side accept / revise / reject** the proposal.
2. **DS-side ship**: implement `src/molecules/Portrait/`. Add `Portrait.test.tsx` covering required-alt rejection, aspect-ratio CSS application, srcset generation. Add `Portrait.stories.tsx` with at least four stories: above-fold eager portrait, below-fold lazy portrait, multi-aspect (3:4, 4:3, 1:1), and a multi-portrait grid for the `/team` case. Add changeset for minor.
3. **DS-side documentation**: update `dist/llms-full.txt` with the molecule's API, composition rules (§4), accessibility contract (§3), performance budget guidance (§5).
4. **Site bumps DS dep**: pouk.ai bumps `@poukai-inc/ui` to the new minor.
5. **`/about` v2 composition revision** consumes `<Portrait>` inside `<Hero illustration>` slot.
6. **Subsequent consumers adopt**: per page-by-page basis.

---

## 8. Open questions for `@poukai-inc/poukai-ui` maintainers

1. **Molecule name.** `<Portrait>` is the designer-side recommendation — narrow, specific, scope-clear. Alternatives: `<Image>` (too generic — encourages misuse for non-portrait imagery), `<Photo>` (excludes AI-generated portraits / illustrations rendered as photographs — wrong shape since v2's first consumer is AI-generated), `<Figure>` (couples to `<figure>` semantic which the molecule doesn't render by default), `<EditorialImage>` (descriptive but verbose). DS picks.
2. **Pipeline coupling.** Should the molecule integrate with Astro's `astro:assets` directly (importing the Image component), or stay framework-agnostic? Designer-side stance: framework-agnostic. The molecule accepts a `src` (URL or ImageMetadata); the pipeline that generates the URLs is consumer-side. DS may decide differently if framework-coupling enables better defaults.
3. **Default `width`?** No reasonable default; designer-side recommends required prop.
4. **Default `sizes`?** `"100vw"` (full viewport) is the conservative default. Bandwidth-conscious consumers will override.
5. **`alt` enforcement: type-level only, runtime, or both?** Designer-side recommends both: TypeScript signature marks required; runtime warns/throws in dev for empty string. Production runtime stays silent (no penalty for shipped pages).
6. **Should the molecule emit `<link rel="preload">` for itself?** Designer-side stance: no — preload is page-level concern, set in `<BaseLayout>` or equivalent. The molecule doesn't have visibility into whether it's the LCP candidate.
7. **Should `<Portrait>` accept a `caption` slot?** Designer-side stance: no — captions are layout-level (`<figure><Portrait /><figcaption>...</figcaption></figure>`). Consumers wrap as needed.
8. **Multiple aspect ratios at different breakpoints (art direction)?** A consumer might want a 3:4 portrait on desktop and a 1:1 crop on mobile. Designer-side stance: not for v1. The `<picture>` element supports it via multiple `<source>` with `media` queries, but the molecule's API would balloon. Defer to a future proposal.

---

## 9. Out of scope

- Server-side image processing pipeline (consumer-side; not part of this molecule).
- Animation / motion on portraits (out — portraits stay static per `/about` v2 composition).
- A `<ProductImage>`, `<ScreenShot>`, `<Diagram>`, or `<Illustration>` sibling molecule. Each is a separate proposal if/when a real consumer surfaces.
- Print-resolution variants. Out — pouk.ai is web-only.
- DRM / watermarking. Out — pouk.ai assets are owned by Arian, no licensing constraints.
- Lazy-loading polyfill for old browsers. Out — `loading="lazy"` is well-supported in 2026.
- The companion `color-warm-accent.md` and `content-max-bleed.md` proposals — orthogonal; land on their own merits.
- The `/about` v2 composition revision (in review).
- Asset production / sourcing for the `/about` portrait. Arian's lane.
