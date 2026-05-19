#!/usr/bin/env node
/**
 * client-js-budget.mjs — R-010 gate
 *
 * Verifies that the total third-party JS payload on every page is ≤ 75 kB
 * gzipped after a `pnpm build`.
 *
 * What counts as third-party JS:
 *   - Any <script src="..."> tag whose path does NOT start with "/_astro/"
 *     (first-party hydration islands — R-009(c) exemption).
 *   - Vercel Analytics script (/_vercel/insights/script.js) is NOT present
 *     in dist/ — it is served at runtime by Vercel's edge. We count its
 *     known gzipped size (~1.5 kB) statically against the budget as a
 *     conservative measure, only when /_vercel/insights is detected in HTML.
 *   - Matomo and Bugsink scripts are only emitted when the relevant env vars
 *     are set at build time. A default `pnpm build` (no env vars) produces
 *     no third-party script tags → budget check passes trivially. CI and
 *     production builds with those vars set will have ~66.5 kB baseline.
 *
 * Budget: 75 kB gzipped per page (R-010 HARD).
 *
 * Usage:
 *   node .github/scripts/client-js-budget.mjs
 *
 * Expects: dist/ directory at repo root (produced by `pnpm build`).
 * Exits non-zero if any page exceeds the budget.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");
const DIST_DIR = join(REPO_ROOT, "dist");

// R-010 budget: 75 kB gzipped per page.
const BUDGET_BYTES = 75 * 1024;

// Vercel Analytics known gzipped size (~1.5 kB).
// Not present in dist/ — served at Vercel edge runtime. We count it statically
// when the script URL pattern /_vercel/insights appears in the HTML.
const VERCEL_ANALYTICS_GZIP_SIZE = 1536; // bytes (~1.5 kB)

/**
 * Gzip a Buffer and return the compressed byte length.
 * @param {Buffer} buf
 * @returns {Promise<number>}
 */
async function gzipSize(buf) {
  return new Promise((resolve, reject) => {
    zlib.gzip(buf, { level: 9 }, (err, result) => {
      if (err) reject(err);
      else resolve(result.byteLength);
    });
  });
}

/**
 * Find all HTML files in dist/.
 * @returns {Promise<string[]>}
 */
async function findHtmlFiles() {
  const files = [];
  // Node 22+ has fs/promises glob; for Node 20 we walk manually.
  const walkDir = async (dir) => {
    const { readdirSync, statSync } = await import("node:fs");
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        await walkDir(full);
      } else if (entry.endsWith(".html")) {
        files.push(full);
      }
    }
  };
  await walkDir(DIST_DIR);
  return files;
}

/**
 * Parse <script src="..."> tags from HTML content.
 * Returns an array of src attribute values.
 * @param {string} html
 * @returns {string[]}
 */
function parseScriptSrcs(html) {
  const srcs = [];
  // Match <script ... src="..." ...> (handles single/double quotes, various attr order).
  const scriptTagRe = /<script\b[^>]*>/gi;
  const srcRe = /\bsrc=["']([^"']+)["']/i;
  let match;
  while ((match = scriptTagRe.exec(html)) !== null) {
    const tag = match[0];
    const srcMatch = srcRe.exec(tag);
    if (srcMatch) {
      srcs.push(srcMatch[1]);
    }
  }
  return srcs;
}

/**
 * Determine if a script src is first-party (hydration island) and exempt.
 * First-party Astro islands: /_astro/...js
 * @param {string} src
 * @returns {boolean}
 */
function isFirstPartyAstroIsland(src) {
  return src.startsWith("/_astro/");
}

/**
 * Determine if a script src is the Vercel Analytics runtime script.
 * This file is not in dist/ — served by Vercel edge. We count its known size.
 * @param {string} src
 * @returns {boolean}
 */
function isVercelAnalytics(src) {
  return src.includes("/_vercel/insights") || src.includes("/_vercel/speed-insights");
}

/**
 * Resolve a same-origin script src to a file path in dist/.
 * Returns null if the file doesn't exist.
 * @param {string} src
 * @returns {string|null}
 */
function resolveDistPath(src) {
  // Strip query string / fragment.
  const cleanSrc = src.split("?")[0].split("#")[0];
  // Same-origin paths start with /.
  if (!cleanSrc.startsWith("/")) return null;
  const candidate = join(DIST_DIR, cleanSrc);
  return existsSync(candidate) ? candidate : null;
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error(`::error::dist/ not found at ${DIST_DIR}. Run \`pnpm build\` first.`);
    process.exit(1);
  }

  const htmlFiles = await findHtmlFiles();
  if (htmlFiles.length === 0) {
    console.error("::error::No HTML files found in dist/. Build may have failed.");
    process.exit(1);
  }

  let anyFailed = false;
  const rows = [];

  for (const htmlFile of htmlFiles.sort()) {
    const route = htmlFile.replace(DIST_DIR, "").replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    const displayRoute = route || "/";
    const html = readFileSync(htmlFile, "utf8");
    const srcs = parseScriptSrcs(html);

    let pageTotal = 0;
    const scriptDetails = [];

    for (const src of srcs) {
      // Skip first-party Astro hydration islands (R-009(c)).
      if (isFirstPartyAstroIsland(src)) continue;

      // Vercel Analytics: not in dist/, count statically.
      if (isVercelAnalytics(src)) {
        pageTotal += VERCEL_ANALYTICS_GZIP_SIZE;
        scriptDetails.push(`  ${src} → ${VERCEL_ANALYTICS_GZIP_SIZE} B (known static size)`);
        continue;
      }

      // Try to resolve and measure from dist/.
      const filePath = resolveDistPath(src);
      if (filePath) {
        const content = readFileSync(filePath);
        const size = await gzipSize(content);
        pageTotal += size;
        scriptDetails.push(`  ${src} → ${size} B gzipped`);
      } else {
        // External URL or unresolvable — warn but don't count (can't measure).
        // If this is a genuinely external script, R-009 already blocks it at
        // code review. We note it here so the budget report surface it.
        console.warn(`  [warn] Cannot resolve script src to dist/ file: ${src} (skipped from budget)`);
      }
    }

    const kb = (pageTotal / 1024).toFixed(1);
    const budgetKb = (BUDGET_BYTES / 1024).toFixed(0);
    const passed = pageTotal <= BUDGET_BYTES;
    const status = passed ? "PASS" : "FAIL";

    rows.push({ route: displayRoute, kb, budgetKb, passed, status });

    if (!passed) {
      anyFailed = true;
      console.error(`::error::${displayRoute} exceeds client-JS budget: ${kb} kB gzipped (limit ${budgetKb} kB)`);
    }

    if (scriptDetails.length > 0) {
      console.log(`${displayRoute}: ${kb} kB gzipped [${status}]`);
      for (const d of scriptDetails) console.log(d);
    }
  }

  // Summary table.
  console.log("\nClient-JS budget summary (R-010, limit 75 kB gzipped per page):");
  console.log("Route".padEnd(30) + "Size (kB gz)".padEnd(16) + "Budget".padEnd(12) + "Result");
  console.log("-".repeat(66));
  for (const row of rows) {
    console.log(
      row.route.padEnd(30) +
        row.kb.padEnd(16) +
        (row.budgetKb + " kB").padEnd(12) +
        row.status
    );
  }

  if (anyFailed) {
    console.error("\nR-010 HARD gate failed. Reduce third-party JS payload before merging.");
    process.exit(1);
  }

  console.log("\nAll pages pass the 75 kB client-JS budget (R-010).");
  process.exit(0);
}

main().catch((err) => {
  console.error("Unexpected error in client-js-budget check:", err);
  process.exit(1);
});
