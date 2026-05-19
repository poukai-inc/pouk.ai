/**
 * HomeHero smoke test — R-058 (first test, sets the testing baseline).
 *
 * What this test does:
 *   - Verifies the structural contract HomeHero hands to the DS Hero molecule.
 *   - Asserts the four locked strings from D-11/D-12 render exactly as the
 *     decisions log requires (status line, tagline, lede-extension link, CTA).
 *
 * What this test does NOT do:
 *   - Render the real @poukai-inc/ui components. The DS is stubbed below so this
 *     test fails only on site-repo regressions, not on DS-internal changes.
 *     The DS has its own test suite in its repo.
 *   - Verify visual styles, accessibility, or motion — those live in axe/lhci
 *     against `pnpm preview` (R-029, R-013).
 *
 * Post-R-076 (2026-05-19): HomeHero now takes copy via scalar props sourced
 * from src/content/home.json. mockProps fixture mirrors the production JSON
 * verbatim — D-11/D-12 lock holds at the JSON layer + the prop-passing layer.
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomeHero } from "./HomeHero";

/* Stub @poukai-inc/ui so this remains a true unit test on HomeHero — no DS
   wiring, no CSS side-effect imports, no font preloads. Each stub renders
   the slots passed in so the assertions below can find them in the DOM. */
vi.mock("@poukai-inc/ui", () => ({
	Hero: ({
		status,
		title,
		lede,
		cta,
	}: {
		status?: React.ReactNode;
		title?: React.ReactNode;
		lede?: React.ReactNode;
		cta?: React.ReactNode;
	}) => (
		<section data-testid="hero">
			<div data-testid="hero-status">{status}</div>
			<h1 data-testid="hero-title">{title}</h1>
			<p data-testid="hero-lede">{lede}</p>
			<div data-testid="hero-cta">{cta}</div>
		</section>
	),
	StatusBadge: ({ children, status }: { children: React.ReactNode; status: string }) => (
		<span data-testid="status-badge" data-status={status}>
			{children}
		</span>
	),
	Button: ({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) =>
		asChild ? <>{children}</> : <button>{children}</button>,
}));

/**
 * mockProps — fixture mirroring src/content/home.json. If home.json changes,
 * update this fixture atomically. The locked strings (D-11 / D-12) are
 * preserved verbatim so the assertions below test the right contract.
 */
const mockProps = {
	status: "Currently taking conversations for Q3.",
	titleBefore: "Technical consulting for teams shipping with ",
	titleEm: "AI",
	titleAfter: ".",
	ledeSentence1:
		"pouk.ai builds custom AI systems, automations, and advisory engagements for operators who'd rather ship than speculate.",
	ledeSentence2: "Most AI projects fail to deliver.",
	ledeAnchorText: "Here's why →",
	ledeAnchorHref: "/why-ai",
	ctaLabel: "hello@pouk.ai",
	ctaHref: "mailto:hello@pouk.ai",
};

describe("HomeHero", () => {
	it("renders without crashing", () => {
		render(<HomeHero {...mockProps} />);
		expect(screen.getByTestId("hero")).toBeTruthy();
	});

	it("renders the D-12 status-line copy verbatim", () => {
		render(<HomeHero {...mockProps} />);
		const badge = screen.getByTestId("status-badge");
		// D-12 locks this string byte-identical to the pre-cutover holding page.
		expect(badge.textContent).toBe("Currently taking conversations for Q3.");
		// StatusBadge must declare its semantic status so the DS pulse-dot CSS hooks
		// can target it without the consumer having to style anything.
		expect(badge.getAttribute("data-status")).toBe("available");
	});

	it("renders the brand tagline with <em>AI</em> preserved", () => {
		render(<HomeHero {...mockProps} />);
		const title = screen.getByTestId("hero-title");
		// The tagline is the brand's typographic credential; <em> on AI is part of it.
		expect(title.textContent).toBe("Technical consulting for teams shipping with AI.");
		const em = title.querySelector("em");
		expect(em).not.toBeNull();
		expect(em?.textContent).toBe("AI");
	});

	it("ends the lede with a single integrated link to /why-ai (D-11 structural lock)", () => {
		render(<HomeHero {...mockProps} />);
		const lede = screen.getByTestId("hero-lede");
		// v1.1 atomic migration: Pouākai origin sentence removed from / lede and
		// migrated verbatim to /about §3 (closes R14 + R27). Lede is now 3 sentences.
		// See meta/content/drafts/pages/home.md §6 Flag 1 + Flag 2 for closure record.
		expect(lede.textContent).not.toContain("Pouākai");
		expect(lede.textContent).toContain("Most AI projects fail to deliver.");
		// D-11 lock: a single anchor at the end of the lede, target /why-ai.
		// Not a separate tertiary line under the CTA (rejected alternative).
		const anchors = lede.querySelectorAll("a");
		expect(anchors.length).toBe(1);
		expect(anchors[0].getAttribute("href")).toBe("/why-ai");
		// The anchor's text is intentionally the hand-off phrase; exact wording
		// is Arian-approved per D-11.
		expect(anchors[0].textContent).toMatch(/Here.{1,3}s why/);
	});

	it("renders the email CTA as a mailto: anchor (no form, no scheduler)", () => {
		render(<HomeHero {...mockProps} />);
		const cta = screen.getByTestId("hero-cta");
		const anchors = cta.querySelectorAll("a");
		expect(anchors.length).toBe(1);
		expect(anchors[0].getAttribute("href")).toBe("mailto:hello@pouk.ai");
		expect(anchors[0].textContent).toBe("hello@pouk.ai");
	});
});
