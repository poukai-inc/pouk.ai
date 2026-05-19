# pouk.ai

Marketing site for pouk.ai. Astro + `@poukai-inc/ui` design system, deployed on Vercel.

## Stack

- **Framework**: [Astro](https://astro.build) 5.x (static output, `directory` URLs)
- **DS**: `@poukai-inc/ui` (private GitHub Packages registry, see `.npmrc`)
- **React**: 18 (used by DS components; rendered server-side, zero hydration)
- **Package manager**: pnpm 10 (frozen lockfile in CI)
- **Node**: `>=20 <21` (see `engines` in `package.json`)
- **Analytics**: Matomo (cookieless, env-var-gated) + Bugsink (error reporting) + Vercel Web Analytics (Vercel deploys only)
- **Sitemap**: `@astrojs/sitemap` (generates `sitemap-index.xml` at build; `/404` excluded via filter)

## Local development

```bash
pnpm install   # requires NPM_TOKEN in env for @poukai-inc/ui from npm.pkg.github.com
pnpm dev       # http://localhost:4321
pnpm build     # astro check && astro build → dist/
pnpm preview   # serve dist/ locally
```

`NPM_TOKEN` lives in the repo's `.env` at the workspace root (see `meta/standards/` for the auth contract).

## Quality gates (CI — `.github/workflows/ci.yml`)

| Gate | Tool | Standard |
|---|---|---|
| Build | `astro check && astro build` | R-054 |
| Audit | `pnpm audit --prod --audit-level=high` | R-049 |
| Secret scan | `gitleaks` | R-048 |
| License allow-list | `pnpm licenses list --prod --json` → `.github/scripts/license-check.mjs` | R-064 |
| Lighthouse | `@lhci/cli` against `pnpm preview` (5 routes; Perf ≥ 95, A11y/BP/SEO = 100) | R-013, R-056 |
| Axe a11y | `@axe-core/cli` against `pnpm preview` (5 routes; 0 violations) | R-029, R-057 |
| Vitest + coverage | `pnpm test:coverage` (80% per-file threshold on tracked components) | R-058 |
| Argos visual regression | `pnpm test:visual` (non-blocking until baseline) | — |

Five canonical routes: `/`, `/why-ai`, `/roles`, `/principles`, `/about`. Plus `/404` (excluded from sitemap, indexing, and Argos baselines).

## Deploy (Vercel)

Continuous via Git: pushes to `main` deploy to production; PRs get preview URLs.

`vercel.json` at repo root pins:

- `buildCommand`: `pnpm build`
- `outputDirectory`: `dist`
- `installCommand`: `pnpm install --frozen-lockfile`
- Security headers: HSTS (2y, preload), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (deny geolocation/microphone/camera/FLoC)

Required Vercel project env:

- `NPM_TOKEN` — read access to `@poukai-inc/ui` on GitHub Packages
- `PUBLIC_MATOMO_URL`, `PUBLIC_MATOMO_SITE_ID` — Matomo tracker endpoint (gated; omit to disable)
- `PUBLIC_BUGSINK_DSN` — Bugsink DSN (gated; omit to disable)
- `VERCEL=1` is set by Vercel at build time; toggles Vercel Web Analytics emit

DNS lives at Porkbun; Vercel issues certs. See `meta/standards/` for the full DNS + email auth contract.

## Repo layout

```
src/
  pages/         Astro routes (one .astro file per canonical route + 404.astro)
  layouts/       BaseLayout.astro (head, meta, JSON-LD, SiteShell wrapping)
  components/    React wrappers around DS molecules (esbuild .astro→React JSX boundary)
  content/       JSON copy + _schemas/ Zod validators (R-074, R-076)
  styles/        site.css — page-composition overrides only; tokens live in DS
public/          Static assets (og.png, favicons, portrait, robots.txt, security.txt)
meta/            Specs, compositions, content drafts, decisions, standards, reviews
tests/           Playwright visual + tab-order tests
.github/         CI workflows + ds-bump automation
```

## Editing copy

All page copy lives in `src/content/*.json` and is validated at build time against `src/content/_schemas/*.ts` (R-074, R-076). The build fails if a content file fails its schema.

Approved content drafts in `meta/content/drafts/pages/<route>.md` are the source of truth before strings land in JSON. Founder approves every word.

## More

- `meta/masterplan.md` — overall plan
- `meta/standards/technical-requirements.md` — quality bar (R-001…R-082)
- `meta/specs/pages/` — PM specs per page
- `meta/compositions/pages/` — designer recipes per page
- `meta/decisions/` — locked product/design decisions
