/**
 * AboutBand.tsx
 *
 * Thin React wrapper that assembles the /about page's portrait band — the
 * orange full-bleed Hero moment that is the page's load-bearing composition.
 *
 * Architecture follows the HomeHero.tsx / ShellWrapper.tsx pattern: complex
 * JSX slot assembly lives here so about.astro passes only scalar props across
 * the .astro → React boundary (esbuild parses .astro as TypeScript and chokes
 * on HTML head attributes when JSX props cross the boundary).
 *
 * Composition recipe: meta/compositions/pages/about.md §2 Unit 2.
 * Content: meta/content/drafts/pages/about.md §2 (displayStatement +
 *          supportingLine + portraitAlt + portraitCaption).
 *
 * Key composition decisions honoured:
 *   - <Hero bleed="full"> — full-bleed orange band (DS 0.13.0+).
 *   - <Hero illustration={<Portrait>}> — portrait in right column (DS 0.15.0).
 *   - <Hero entrance="stagger"> — CSS-only staggered reveal (DS 0.8.0+).
 *   - display statement font-size: site-side clamp on .about-band__statement
 *     per DS counter-proposal resolution (§6.3 path b — "site can clamp locally
 *     for one-shot use"). Selector scoped to /about only.
 *   - Orange background via .about-band wrapper (Hero has no surface prop) —
 *     background: var(--bg-warm-accent); text colors set via CSS custom prop
 *     cascade on the wrapper so Hero's internal text slots inherit --fg-on-warm.
 *   - No cta slot inside the band — CTA is the end-CTA line at page bottom.
 *   - No status slot — StatusBadge lives canonically on / (max 1 per page rule).
 *
 * Rendered as static HTML at build time — no hydration directive (R-079).
 * Zero client JS. Motion: <Hero entrance="stagger"> CSS keyframes only,
 * gated by DS prefers-reduced-motion :root !important block.
 */

import { Hero, Portrait } from "@poukai-inc/ui";

interface AboutBandProps {
  /** Resolved portrait URL from Astro asset pipeline (about-portrait.jpg). */
  portraitSrc: string;
}

export function AboutBand({ portraitSrc }: AboutBandProps) {
  return (
    /*
     * .about-band wrapper owns the orange surface color and text-color cascade.
     * Hero has no surface prop; the warm background is applied site-side here,
     * consistent with the DS-gap §6.4 counter-proposal which says the site can
     * consume --bg-warm-accent from tokens.css directly on its wrapper elements.
     * The wrapper also ensures the full-bleed Hero's orange band reads as one
     * continuous surface from edge to edge.
     */
    <div className="about-band">
      <Hero
        bleed="full"
        entrance="stagger"
        illustration={
          /*
           * <Portrait> molecule — DS 0.15.0. Renders AVIF/WebP/JPEG <picture>
           * with srcset, CLS-safe width/height, strict non-empty alt contract.
           *
           * Asset: public/about-portrait.jpg — 1024×1024 square, 78KB JPEG.
           * aspect="1:1" locked per briefing (source asset is square, not 3:4).
           * The composition's 3:4 default is overridden by the actual asset
           * dimensions — asset-authority beats composition default.
           *
           * loading="eager" + fetchPriority="high" because the portrait is
           * above-the-fold (inside the full-bleed band); LCP candidate.
           * BaseLayout.astro emits a <link rel="preload"> for /about to match.
           *
           * sizes: portrait occupies ~45% of --content-max (1024px) at desktop
           * = ~460px. At mobile (<720px) it fills the viewport column (~100vw).
           * Round up: "min(100vw, 480px)" covers mobile; "(max-width: 1024px)
           * 45vw" covers desktop. Conservative — browser picks nearest srcset.
           */
          <Portrait
            src={portraitSrc}
            alt="Arian Zargaran, founder of pouk.ai. Cinematic editorial portrait, head-and-shoulders, saturated orange backdrop."
            aspect="1:1"
            width={1024}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 720px) 100vw, 45vw"
          />
        }
        title={
          /*
           * Display statement — the page's <h1>.
           * Copy: meta/content/drafts/pages/about.md §2 displayStatement (Q1 ratified).
           * 5 words, capability-led, brand-voice declarative.
           * Font-size set by .about-band__statement in site.css (site-side clamp,
           * not a DS token — per DS §6.3 path-b resolution). The selector targets
           * the h1 inside .about-band via the DS's internal title class.
           * Instrument Serif italic is applied globally via <Hero>'s title slot CSS.
           */
          <>pouk.ai builds AI that ships.</>
        }
        lede={
          /*
           * Supporting line — Hero lede slot.
           * Copy: meta/content/drafts/pages/about.md §2 supportingLine (Q2 ratified).
           * 9 words, three short period-separated declaratives.
           * Color inherits --fg-on-warm-muted from .about-band cascade.
           */
          <>Small consultancy. One operator. Custom work in production.</>
        }
      />
      {/*
       * Portrait caption — single line, --fg-muted equivalent on warm surface.
       * Composition §2 Unit 2 + spec §5 cap at ≤12 words.
       * Copy: meta/content/drafts/pages/about.md §2 portraitCaption (Q4 ratified).
       * Rendered below the Hero band, still inside .about-band surface.
       * Note: "no model names, no tooling stack references" per spec §6.1.
       */}
      <p className="about-band__caption">Arian Zargaran, founder.</p>
    </div>
  );
}
