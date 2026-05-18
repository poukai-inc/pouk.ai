# Composition proposal: `/about` — Option F (ink-wash sketchbook portrait with subtle lofi motion)

**Route**: `/about` (P0 next-page; spec in flight by `pouk-ai-pm`)
**Status**: Draft
**Owner**: Arian (founder) · Author: pouk-ai-designer
**Last updated**: 2026-05-17
**Governing spec**: not yet ratified — PM is mid-treatment-pick. This memo is **a design read on Option F only**, not a page composition. It pre-positions the recipe so that, if Arian picks Option F, the formal composition at `meta/compositions/pages/about.md` can be written quickly inside the constraints sketched below.
**DS version targeted**: `@poukai-inc/ui@0.9.0`

---

## 0. Framing

This memo answers the seven questions Arian posed against Option F (sketchbook-register portrait + subtle infinite lofi loop). It does **not** prescribe a final layout — that's the job of the eventual `/about` composition once the PM treatment-pick lands. It speaks in DS-vocabulary, names the primitives the recipe would touch, and flags the gaps before they become surprises.

**Assumptions**:

- The pouk.ai brand register is the one that ships today on `/`, `/why-ai`, `/roles`, `/principles`: typography-led, Instrument Serif italic accents, off-white canvas (`--bg` `#FBFBFD`), hairlines, no decorative imagery on any of the four shipped routes. The only illustration anywhere in the system is the engraving Pouākai — currently *deferred* on `/` per the home composition's 2026-05-17 deferral clause (rev-4 Gemini A/B did not converge; DS-gap [poukai-ui#40](https://github.com/poukai-inc/ui/issues/40) for the `<Hero illustration>` slot remains open but unconsumed).
- The masterplan §2A ratifies illustrations as the visual direction *for the SaaS stage*; real photography is reserved for future Customer Story pages, founder-approved per case. The masterplan §7.3 / §4.3 carry the ≤75 KB-gz-per-page JS budget and the zero-JS-unless-justified posture (only Matomo + Bugsink hydrate; nothing else without an inline justification comment).
- The kavyasart reference (loose ink-and-watercolor figurative urban-sketch, observational figure drawing, handwritten margin annotations on cream notebook paper, contemplative tone) reads as the *aspiration*. The question is whether a generated/commissioned asset can land in that register at the brand bar.
- Option F is being evaluated **against** Option C (PM-recommended workspace photo with AI work-product visible) and Option E (process diagram in Arian's hand). The verdict in §7 picks one.

---

## 1. Brand-register fit

Short version: **the ink-wash sketchbook register opens a vocabulary the site has so far avoided, and that is both the appeal and the structural risk.** The appeal is real — a hand-drawn portrait at observational-figure-drawing register signals *"a person made this site for you, by hand"* in a way no other treatment can, and it satisfies the operator-first / refined / no-marketing-speak brand voice without leaning on stock language. The risk is that the existing register is not just *restrained* — it is **typography-led to the point of asceticism**. Every shipped page renders zero decorative imagery; the engraving Pouākai we *did* draw is currently sitting on the bench because rev-4 didn't clear the bar. Dropping an ink-wash human figure onto `/about` when the rest of the site renders only Instrument Serif tagline + Geist body + 1px hairlines is a register-shift large enough that it has to be intentional, namable, and felt as *deliberate* — not as the site finally giving in to "we should have an image somewhere."

**In DS-vocabulary terms**, the sketch:

- Touches **no tokens**. It does not propose a new color, font, spacing value, or radius. It would render as a single asset on `--bg`, monochrome (or limited-palette ink-wash) resolving via inline `currentColor` to `--fg` — same color contract the engraving Pouākai was specified to use on `/`. If multi-tone wash is used, it lives in the asset's own pixels, not in a new token. **No tokens added; the brand contract is untouched.**
- Sits beside **`<Hero>`, body prose, and (potentially) a future `<AboutHeader>` molecule if one is ever proposed.** It does not sit *inside* a DS primitive — it sits *next to* one. This is precisely the same surface the `<Hero illustration>` DS-gap proposal targets (poukai-ui#40), and the same surface the home composition specifies for the deferred engraving. The architectural pattern already exists; only the asset register would change.
- Does not touch **`<StatusBadge>`, `<Button>`, `<RoleCard>`, `<Principle>`, `<FailureMode>`, `<SiteShell>`, `<Stat>`** — none of those primitives change. The sketch is an editorial-illustration surface, not a UI surface.

**The "feature or problem" question**: it is a *feature* if the sketch register is named and used as a single, contained editorial moment on `/about` — the way an essayist drops one hand-drawn diagram into a long-form piece. It is a *problem* if it leaks: a sketch portrait on `/about` that lives next to an engraving Pouākai on `/` next to a different illustration register on a future Customer Story page is **three registers and a brand**, not one brand. The discipline the rest of the site exercises (one register, applied with restraint) has to extend to illustration too. So: feature **iff** Arian commits to *one* illustration register across the whole site (sketchbook is one valid register; engraving was another). Pick one. Don't compose both.

This is the structural recommendation buried in the brand-register answer: **Option F implicitly retires the engraving Pouākai direction.** If you pick sketchbook for `/about`, the Pouākai on `/` should either be re-rendered in the same sketchbook register or stay deferred indefinitely. The site cannot carry two illustration registers.

---

## 2. Composition on `/about`

If Option F ships, **the sketch is a mid-page figure inside the prose column at content-max width**, not a hero slot, not a full-bleed band, not a replacement for `<Hero>`. The recipe:

1. **`<Hero>` runs first**, as on the other four routes. Same `<SiteShell>` chrome above, same DS-owned internal rhythm. `<Hero size="intimate">` is the right default for `/about` (lower-density doorway suits the editorial-personal register of an about page) and matches the `/` precedent. `<StatusBadge>` may or may not appear in the hero status slot — that's a PM call, but for `/about` I'd lean *no* (the badge is page-scope; the canonical placement is `/`, and the DS rule is max 1 instance per page across the page).
2. **Prose column at `--content-max` (64rem / 1024px)** carries the body of `/about` — Arian's framing, what pouk.ai does, the personal-credential thread that an about page exists to hold. This is the substance the page is built around; the sketch is a *companion* to it, not the headline.
3. **The sketch sits as a mid-page figure**, typically after the first 2–3 paragraphs of prose, at `--hero-max` width (608px) or slightly wider — vertically centered within its own block, with `--space-16` (64px) above and `--space-16` below. It is captioned with a single italic Instrument Serif line at `--fs-meta` (14px) in `--fg-muted` (`#6E6E73`) — date + medium + a one-clause description. *("May 2026, ink on cream paper. Arian, working.")*
4. **No hero-slot illustration.** Putting the sketch in the `<Hero illustration>` slot competes with the title and the lede for the first impression; that is the wrong job for a figurative portrait. The hero should remain typography-led — the sketch arrives as a *reveal* a beat later, after the reader has registered the page's voice.
5. **No full-bleed band.** A full-bleed image breaks the editorial discipline of the site (every other page is content-max-capped) and visually shouts. The sketch's whole register is *quiet*; bleeding it is register-incoherent.
6. **Pair with `<Hero>`**: sketch comes **after** the hero, not before, not in place of it. The hero is the contract surface (title, lede, optional status). The sketch is the editorial moment. Pre-empting the hero with the sketch reframes the page as *image-led*, which is a different brand than typography-led.

**One asset, one placement, one caption.** Not a gallery. Not a sequence. One drawing, mid-page, captioned, surrounded by prose.

---

## 3. Motion budget

**Recommendation: ship the sketch fully static.** No CSS-only loop, no SVG `<animate>`, no breath, no steam. The 8KB SVG overlay is technically achievable inside the masterplan §2A budget, but it is the wrong call against the *brand* budget.

Reasoning:

- The shipped site has **zero motion that isn't either DS-owned (StatusBadge pulse, link hover via `--easing-link`/`--dur-fast`) or hero entrance (the `<Hero entrance="stagger">` consumed on `/` via DS 0.8.0)**. Every other surface is fully static. Introducing a perpetual ambient loop on one page breaks the rhythm — the reader's eye is trained, page by page, to expect *no movement*. A breathing portrait on `/about` will register as *the moving image on the otherwise-still site*, which over-weights it.
- The kavyasart reference is calm and contemplative **precisely because the page is paper, not screen, and the only motion is the reader's eye crossing it**. A perpetual loop, however subtle, simulates breathing where the reference doesn't have any. It is a screen-design instinct projected onto a paper register. The translation is wrong; the reference's calmness comes from stillness, not from a slow loop.
- The `prefers-reduced-motion` story is fine either way — CSS-only animations gate cleanly on the DS's `:root !important` block — so the technical contract is satisfiable. But the gate means the experience splits in two: visitors with reduced motion see a still drawing; visitors without see a breathing drawing. That split is *itself* a register-incoherence on a page meant to feel like one quiet object.
- The 8KB SVG overlay is fine on the JS-budget side (it's CSS+SVG, zero JS), but it adds a second asset to manage, a second source of register drift (the overlay has to *match* the underlying raster's line-work, or it will float), and a second thing to QA at every redeploy.

**If the lofi-motion idea is non-negotiable**, the cheapest token-budget execution is:

- A single CSS `transform: translateY()` keyframe on a sub-element of the SVG (a wisp, an eyelid, a finger), `animation-duration: 4–8s`, `animation-iteration-count: infinite`, `animation-direction: alternate`, `animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1)` (sine-like). Total CSS cost: ~80 bytes. Total JS cost: zero. Gated automatically by the DS's `:root !important` `prefers-reduced-motion` block (the gate uses `animation-duration: 0.01ms !important` to halt without removing the rule — confirm against the DS file before relying on this; the home composition's motion clauses cite the same gate).
- **No new DS primitive needed.** This is a site-side composition decision: the SVG file ships with the animation embedded in its own `<style>`, or the page's site CSS (`src/styles/site.css`) carries the keyframe. The DS does not opinionate. The `<Hero illustration>` slot proposal is silent on motion inside the slot, which means consumer-supplied motion is allowed *as long as it gates on `prefers-reduced-motion`*. The DS rule "Do not force-animate StatusBadge under prefers-reduced-motion" is the binding precedent — the same discipline applies here. A consumer animation that does not gate is a brand-level error.

**Reaching-for**: there is no existing DS-token-driven motion primitive that targets "ambient infinite loop." The DS motion vocabulary is built around *transitions* (entrance, hover) — `--dur-fast`/`--dur-mid`/`--dur-slow` are durations meant for one-shot animations, not for `animation-duration` on infinite loops. Reusing `--dur-slow` (600ms) as the loop period would be both off-register (too fast — breath is 3–5s, not 0.6s) and a misuse of the token (durations are one-shot in the brand contract). **A new token would be required** if motion ships, and the right token name is not "duration" — it is something like `--ambient-period` or `--breath-period` (3–5s range). This is a DS-gap, not a composition-level fix.

**Bottom line on motion**: static is the right call. If forced to ship motion, it is a DS-gap (new ambient-period token) and it must gate `prefers-reduced-motion`. Don't proceed without the gap.

---

## 4. AI-as-discipline signal

The sketch alone does **not** carry the AI signal — and that's fine, because the AI signal does not have to come from the image. It comes from the *prose* on `/about` and from the page's existence next to `/why-ai`, `/roles`, `/principles`, all of which are explicitly about AI work. The image's job is to carry the *operator* signal — "a person, observed, drawn" — which is the *exact axis* the PM rejected glowing-blue-tech and neural-mesh cliché on. The sketch's silence on AI is a feature, not a gap.

**The handwritten marginalia question** (date + model name + tool reference, as in your draft prompt) is the place I'd push back. Marginalia in the kavyasart reference reads as *the artist's own working notes* — they exist because she was sketching live, in a notebook, and the notes are observational fragments. **Marginalia that says `"Claude Sonnet 4.5 · ChatGPT · Cursor · May 2026"` is not observational — it is a stack listing**, and it lands as a tooling brag, which is the *opposite* of the operator-first / restrained register. The reference works because the marginalia is *incidental*; a stack listing is *deliberate*. The brand voice is "precise, direct, technically confident — never inflates" (DS `llms-full.txt` voice section). A tools-and-models marginalia is borderline-inflationary by the time the reader has counted three brand names.

**Recommendation on signal**:

- The sketch is signal-free. It carries operator, not AI.
- The AI signal lives in the prose. The prose names the work pouk.ai does (AI builds, automations, advisory) directly. The reader does not need the image to repeat that.
- **If** marginalia is added, restrict it to **one** annotation in the artist's voice — a date, a place, an observation. Not a stack listing. *("May 2026, Lisbon, 4:18pm.")* That register stays inside the reference. *("Made with Claude.")* breaks it.

---

## 5. Replaceability and durability

Three paths, ranked by how slowly each dates:

1. **Commissioned real sketch from an urban sketcher** — dates *slowest*. A real ink-and-wash drawing has no AI-of-its-era tell, no UI-chrome timestamp, no editing-software signature. It dates the way a 1995 Saul Steinberg drawing dates: barely. The cost is real (you commission an artist; you pay for one session; you live with the asset for years). The benefit is that the asset is *a permanent piece of brand IP* — it can move from `/about` to a print piece to a customer letterhead to a slide deck without re-shooting.
2. **Arian's own hand** — dates *slowly, but only if Arian can actually draw at the kavyasart register*. If you can, this is the strongest possible operator signal: the founder drew themselves. If you can't (and 95% of operators can't, which is fine), the asset will read as "founder tried to draw and posted it anyway," which is a worse signal than no image at all. **No middle ground here**: either Arian draws at-register and ships it, or this path is off the table.
3. **AI-generated sketch** — dates *fastest*. AI-image-gen of the 2026 era has a tell: a particular smoothness in ink-line variation, a particular failure mode in cross-hatching, a particular fingerprint in facial proportions. In 18–24 months that fingerprint will be as visible as 2008-era HDR photography is today. The Cowork-mock-promoted-to-final path is the cheapest to ship and the most fragile to live with — and given the engraving Pouākai is *currently deferred because rev-4 didn't clear the bar*, the same risk applies here in compounded form: ink-wash sketchbook register is harder for current image-gen models than engraving is, not easier.

**Recommendation for production-ship**: **commissioned real sketch** if the budget exists (a single piece from a competent urban sketcher is in the low-hundreds-of-dollars range, not the thousands; a Lisbon-based illustrator in the kavyasart adjacent register is findable in a week of looking). **Arian's own hand** if Arian can draw at-register and wants to. **AI-generated, last** — and if AI-generated, the failure-mode bar is the same one rev-4 didn't clear on the engraving: the curated asset must read as "considered drawing," not as "competent AI sketch."

---

## 6. Failure modes specific to this treatment

Six tripwires, in declining likelihood:

1. **"Behance project, not consulting site."** An ink-wash portrait + handwritten marginalia + ambient breath-loop reads as a *portfolio piece for the illustrator who made it*, not as a credentialing surface for a consulting practice. The tell: the page is more memorable for *its design* than for *what it says pouk.ai does*. Mitigation: prose must be heavier than the image in attention-weight; one image, not a gallery; caption restrained; no marginalia stack-listing.
2. **Two-register brand.** Sketchbook on `/about` + engraving on `/` (or any other illustration register elsewhere) = the site has decided it cannot pick one register and is letting each page wander. The fix is the §1 recommendation: Option F implicitly retires engraving Pouākai, or engraving comes back and Option F doesn't.
3. **AI tell in the asset.** Generated ink-wash has a current-era fingerprint (line-variation smoothness, cross-hatch failure, face proportions); rev-4 engraving didn't clear the bar for the same reason. Mitigation: commission real, or accept that the asset is a 12–18-month surface.
4. **Ambient motion reads as "the site is doing something."** Even subtle perpetual loops, on an otherwise-still site, draw the eye. Visitors read it as a UI element ("is this loading? am I supposed to interact?"), not as ambient atmosphere. Mitigation: ship static. If motion ships, it is a DS-gap and a deliberate brand-level decision, not a designer-side flourish.
5. **The prose can't carry the operator-first signal alone.** If the `/about` prose is thin (3 short paragraphs of bio), the image starts doing the page's work, and the image was never supposed to be load-bearing. Mitigation: the spec must require ~400–700 words of substantive prose. If the prose isn't there yet, the page isn't ready to ship, regardless of which treatment wins.
6. **Marginalia inflation.** "Made with Claude Sonnet 4.5 + Cursor + Linear + Vercel + Bugsink + Matomo" is the failure mode in caption form. One annotation, in the artist's voice, or none.

---

## 7. Verdict

**Ship Option E (process diagram in Arian's hand)** — if Arian can produce a single hand-drawn diagram that reads as observational and considered, that is the strongest single-asset signal of the three options. It carries operator-first (a hand drew this), it carries AI-as-discipline (the diagram is *about* the work pouk.ai does — a build flow, a decision tree, a failure-mode taxonomy), it dates slowly (a hand-drawn diagram has no AI-of-its-era tell), and it is *signal-dense* in a way a portrait isn't (a portrait says "this is a person"; a diagram says "this is how this person thinks"). It sits inside the same `<Hero illustration>` / mid-page figure architectural pattern Option F would use, with the same zero-motion default and the same single-register discipline. **If Arian cannot draw at-register, fall back to Option F with a *commissioned* sketch (not AI-generated) and ship it static.** Option C (workspace photo) is the safest of the three but the weakest signal: a photo of a desk is a photo of a desk, and the AI-work-product-visible angle is exactly the *kind* of signal that dates fastest (the visible Cursor pane will look as anachronistic as a 2012 Sublime Text screenshot does today). Between Option F-AI-generated and Option C, Option C wins on durability; between Option F-commissioned and Option C, Option F wins on signal. The discriminating axis is whether the founder can draw. That's the question worth answering before the PM treatment-pick locks.

---

## 8. Concrete recommendation (one paragraph for the spec)

If `/about` adopts Option F, the formal composition should specify: (a) one ink-wash figurative asset, **commissioned real** (not AI-generated), placed mid-page inside the `--content-max` prose column at `--hero-max` width, with `--space-16` above and below; (b) `<Hero size="intimate">` as the page's hero default, no illustration slot, no status badge; (c) a single italic Instrument Serif caption at `--fs-meta` in `--fg-muted` — date + medium + one-clause description, no model names, no tooling references; (d) **static asset, zero motion** — the ambient-loop idea is parked as a future DS-gap (ambient-period token) and is not part of the v1 ship; (e) the engraving Pouākai direction on `/` is explicitly retired or re-rendered in the sketchbook register so the site carries **one illustration vocabulary**; (f) the prose on `/about` is ~400–700 words of substantive operator framing — the image is companion, not load-bearing. If Option E ships instead, the same recipe applies with a hand-drawn diagram in place of the portrait, and the diagram carries process signal rather than person signal.

---

## 9. Out of scope for this memo

- The PM spec for `/about`. Treatment-pick is `pouk-ai-pm`'s call; this memo informs it but does not replace it.
- The formal page composition at `meta/compositions/pages/about.md`. That gets written once Arian's treatment-pick is in.
- Asset production specifics — commissioning an illustrator, the prompt-pack for an AI fallback, the vectorization pipeline. Those are Arian's domain, the same way the engraving asset production sat with Arian on the home composition.
- Whether the engraving Pouākai on `/` is retired or re-rendered. Flagged in §1 as a forcing function of picking Option F; the actual decision is a separate amendment to the home composition.
- Dark-mode behavior for an ink-wash sketch. The DS palette inverts cleanly but a tonal raster asset would need a dark-mode variant. Same trade-off the home composition's engraving carries; out of scope until dark mode is.
- A DS-gap proposal for an `--ambient-period` token. Flagged in §3 as a prerequisite *if* motion ever ships. Not authored here.
