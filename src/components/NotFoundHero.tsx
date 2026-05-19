/**
 * NotFoundHero.tsx
 *
 * Hero assembly for /404. Same JSX-boundary rationale as HomeHero / AboutBand:
 * complex Hero slot composition lives in a React wrapper so the .astro page
 * passes only scalar props across the .astro → React boundary.
 *
 * Composition: meta/compositions/pages/404.md v1.1 (Approved 2026-05-18).
 *   - <Hero size="intimate" align="center" /> (no entrance — salvage surfaces
 *     want instant resolution, not editorial pacing)
 *   - <Button asChild size="compact"> — editorial-restraint rung
 *
 * Eyebrow dropped: DS @poukai-inc/ui@0.15.0 HeroProps is a discriminated union —
 * `eyebrow` is only accepted in variant="no-title", which omits the <h1>. The
 * /404 spec §6+§8 requires exactly one <h1> (the Hero title), so default-variant
 * is the only valid path. Composition §2 (open Q on eyebrow) recommended drop
 * unless it earns its place; DS constraint forces the call.
 *
 * Rendered as static HTML at build time — no hydration directive (R-079).
 */

import { Hero, Button } from "@poukai-inc/ui";

interface NotFoundHeroProps {
  title: string;
  lede: string;
  ctaText: string;
  ctaHref: string;
}

export function NotFoundHero({
  title,
  lede,
  ctaText,
  ctaHref,
}: NotFoundHeroProps) {
  return (
    <Hero
      size="intimate"
      align="center"
      title={<>{title}</>}
      lede={<>{lede}</>}
      cta={
        <Button asChild size="compact">
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      }
    />
  );
}
