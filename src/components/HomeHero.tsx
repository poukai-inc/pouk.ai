/**
 * HomeHero.tsx
 *
 * React wrapper assembling the homepage Hero. All copy passes in via scalar
 * props (sourced from src/content/home.json, validated by
 * src/content/_schemas/home.ts). R-076 HARD: no hardcoded copy in component
 * templates.
 *
 * Decisions honoured:
 *   D-11 — integrated lede-extension link sentence at end of lede, href="/why-ai".
 *   D-12 — status-line text from public/index.html ("Currently taking conversations for Q3.").
 *
 * Hero posture: editorial-doorway → size="intimate" + entrance="stagger" per
 * meta/decisions/2026-05-19-hero-stagger-scope.md.
 *
 * Rendered as static HTML at build time — no hydration directive (R-079).
 */

import { Hero, StatusBadge, Button } from "@poukai-inc/ui";

interface HomeHeroProps {
  status: string;
  titleBefore: string;
  titleEm: string;
  titleAfter: string;
  ledeSentence1: string;
  ledeSentence2: string;
  ledeAnchorText: string;
  ledeAnchorHref: string;
  ctaLabel: string;
  ctaHref: string;
}

export function HomeHero({
  status,
  titleBefore,
  titleEm,
  titleAfter,
  ledeSentence1,
  ledeSentence2,
  ledeAnchorText,
  ledeAnchorHref,
  ctaLabel,
  ctaHref,
}: HomeHeroProps) {
  return (
    <Hero
      size="intimate"
      entrance="stagger"
      status={
        <StatusBadge status="available">{status}</StatusBadge>
      }
      title={
        <>
          {titleBefore}
          <em>{titleEm}</em>
          {titleAfter}
        </>
      }
      lede={
        <>
          {ledeSentence1}{" "}
          {ledeSentence2}{" "}
          <a href={ledeAnchorHref}>{ledeAnchorText}</a>
        </>
      }
      cta={
        <Button asChild size="compact">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      }
    />
  );
}
