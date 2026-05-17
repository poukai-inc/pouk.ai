# Pouākai engraving — Kittl prompt pack

**Target tool**: [Kittl](https://www.kittl.com/) (AI image gen + built-in vectorizer + SVG export)
**Output**: a single reusable SVG of a Pouākai (Haast's eagle) in vintage-engraving register, in flight, right-facing
**Consumer**: `<Hero illustration>` slot on `/` (and later `/roles`, `/principles`, `/why-ai`) per [meta/compositions/pages/home.md](../compositions/pages/home.md) §2 "Illustration asset"
**Governing decisions**: D-17 (direction) + D-21 (cross-page reusability) in [meta/decisions/2026-05-17-home-illustration-and-density.md](../decisions/2026-05-17-home-illustration-and-density.md)
**Status**: Ready for Arian to execute in Kittl

---

## 1. Asset spec recap (from composition §2)

Hard requirements the final SVG must satisfy:

| Constraint | Value |
|---|---|
| Subject | Pouākai (Haast's eagle, *Hieraaetus moorei*) |
| Register | Vintage engraving / woodcut / scientific ornithological plate |
| Posture | In-flight, soaring, wings spread (NOT perched, NOT stooping mid-dive) |
| Facing | Right (silhouette looking page-right) |
| Color | Monochrome ink — black lines on transparent background. Final SVG strokes use `currentColor` so the DS palette colors it via `--fg` |
| Background | None — transparent, isolated subject |
| Long-axis size | ~280–360px at render (asset will scale; export larger for quality) |
| Weight | ≤8KB gzip after SVGO |
| Detail level | High enough to read as engraving (visible cross-hatching, line weight variation), low enough to vectorize cleanly without artifacts |
| Cross-page neutrality | Works as the same single file on `/`, `/roles`, `/principles`, `/why-ai` — no scene, no contextual cue |

---

## 2. Generation prompts (A/B test across two registers)

**Two distinct registers are being A/B tested**:

- **Variant A — Scientific**: pure 19th-century ornithological-plate aesthetic. Naturalist neutrality, anatomical accuracy, Haast's eagle as taxonomic specimen.
- **Variant B — Mythic**: same engraving register, but framed as the *legendary* Pouākai of Māori oral tradition. Mythic gravitas, totemic posture, larger-than-life scale.

Generate candidates for **both**. Score per §6 rubric. Pick the variant + winning candidate that best meets "the bird is present, not performing."

### 2.1 Variant A — Scientific (Gemini, paste verbatim)

```
Create a single high-resolution black-and-white image of a Pouākai (Haast's eagle, Hieraaetus moorei) in flight, rendered as a 19th-century scientific engraving in the style of an ornithological plate from Audubon's Birds of America or Ernst Haeckel's Kunstformen der Natur. The eagle is shown in full side profile, silhouette facing strictly to the right, wings fully extended and spread mid-soar, with a calm and dignified posture — gliding on a thermal, not diving, not striking, not aggressive. The bird is anatomically a New Zealand giant eagle: broader and heavier than an American golden eagle, with massive primary feathers, a heavy hooked beak, a fanned squared tail, and powerful talons tucked neatly beneath the body. Render the plumage and feathers using fine engraved cross-hatching and parallel line-work with deliberate line-weight variation — the texture must read as ink-on-paper engraving, with visible burin strokes, not as digital illustration. The composition is an isolated subject: pure white background, no scenery whatsoever, no horizon line, no clouds, no sky gradient, no ground shadow, no perch, no prey, no environment of any kind. The output is monochrome — pure black ink lines on pure white paper, with no color, no gray gradients, no halftone dots, no painterly shading, no airbrush, no soft fill. Image aesthetic is museum scientific plate, naturalist taxonomy illustration, vintage broadside woodcut, suitable for vector tracing with clean sharp edges. The bird should sit quietly and confidently on the page — present, not performing.

Do NOT include any of the following: color of any kind, even subtle tints; photorealism or photographic feathers; watercolor, gouache, or painterly textures; soft gradients, airbrush, or digital painting smoothness; modern flat-design illustration, vector-clipart aesthetic, cartoon, anime, or stylized character art; any background scenery — no mountains, no sky, no clouds, no horizon, no trees, no ground, no shadow beneath the bird, no perch, no nest, no prey in talons; multiple birds, a second eagle, a flock, a mating pair; banners, ribbons, scrolls, text, captions, latin binomial labels, signatures, or watermarks; heraldic framing such as a shield, wreath, crest, coat of arms, or ornamental border; front-facing, three-quarter, or left-facing orientations — the bird must face right and only right; stooping dive posture, wings folded back, talons extended for strike, or any predatory aggression; halftone dot patterns, JPEG-style artifacts, or fuzzy noise that would defeat later vectorization. The image must be a clean, isolated, side-profile, right-facing, soaring Pouākai engraving — single subject, transparent or pure white background, pure black ink linework, ready to be vectorized to SVG.
```

### 2.2a Variant B — Mythic, long-form (Gemini, paste verbatim)

**Recommended starting point: try §2.2b short-form first.** Long-form may dilute model attention; short-form often adheres better. Use long-form if short-form output deviates on a directive that the long-form's redundancy reinforces.

**Cultural caution**: Māori imagery is culturally sensitive. The mythic register comes from **posture, scale, and bestiary-plate framing** — NOT from applied surface ornament. The negative-direction block explicitly excludes koru, kowhaiwhai, tā moko, whakairo, and taniko motifs to prevent AI default to "Māori art style" clipart. If the generated candidate carries surface tribal ornament, reject and regenerate.

**Line-density discipline (rev 4 — freedom-flight register, 2026-05-17)**: rev-3 fixed line-tone (gray → pure black) but Gemini's "mythic raptor / hunted moa" cues still triggered predator-eagle defaults — talons forward-extended, claws open, wings curved into braking posture, head pitched down. Rev-4 reframes from "totemic stillness" to **freedom, flight, mid-air mastery, joy of soaring on a thermal**. The new brief: an eagle that owns the sky, not one descending on quarry. Wings lift actively but do not strike. Body level or ascending. Talons still hidden, beak still closed. No predator vocabulary remains in the prompt.

- Wings: **spread wide and lifted slightly upward**, the lyric of a thermal — NOT swept back into a stoop, NOT curved down into a brake/landing.
- Body: **level or gently ascending**, NEVER pitched downward, NEVER tilted toward ground.
- Head: **axis-aligned or lifted slightly**, gaze forward to horizon — NOT down at prey, NOT tracking.
- Eye: **calm, forward-facing**.
- Beak: **closed and sealed**, silent.
- Talons: **fully retracted, invisible** under body silhouette.
- Density: **significant white space between feather groups within wings**. Wing surface is NOT solid black ink coverage.
- Line tone: **pure black ink, sharp and opaque**. Lockdown carries over from rev-3.
- Proportions: mythic — wingspan dramatically broader than body length.

```
Create a single high-resolution black-and-white image of Pouākai — the legendary giant eagle of Māori oral tradition, a creature of free flight and mountain-air mastery. Render the image as a refined 19th-century wood-engraving in the tradition of Thomas Bewick's A History of British Birds (1797) — disciplined master-engraver craftsmanship at mid-density line work. The visual reference is a Bewick natural-history plate: substantial engraved detail, every line earned and intentional, no line wasted, but never overworked into baroque density. This is the work of a skilled engraver who knows where to apply burin pressure and where to lift — feathers grouped into rendered passages, with restraint reserved for the body mass and outer silhouette, not absence of detail. The eagle is shown in full side profile, silhouette facing strictly to the right. The posture expresses freedom and flight — the bird is catching a rising thermal, wings spread wide and lifted in the lyric of mid-air mastery, the joy of soaring at altitude. Body is level or gently ascending, never pitched downward, never tilted toward the ground. The head is held in line with the body axis or lifted slightly, looking forward toward the horizon — never down at prey, never tracking a target. The eye is calm and open, facing forward. The beak is closed and sealed — the bird is silent, not calling, not screaming. Talons are fully retracted and tucked beneath the body's silhouette, completely invisible — the bird is in free flight, not hunting. Wings are spread broadly outward and slightly upward, the way an eagle's wings lift in a rising thermal current — open, expansive, ascending, but NOT swept back into a strike-angle, NOT curved downward into a landing brace. This is the posture of an eagle that owns the sky, not one that is descending on quarry. Proportions exaggerated toward myth: wingspan dramatically broader than body length, head proportionally smaller than the massive shoulder mass. Reads as larger-than-life Pouākai of legend — a free creature of altitude — not as a North American golden eagle on the hunt. Plumage is rendered as a skilled engraver would render it — visible engraved feather groups across the wings, distinct primary and secondary feather rendering, breast plumage indicated by purposeful cross-hatching and parallel burin strokes. The discipline is engraver's economy: substantial detail in service of form, restraint applied selectively to keep the silhouette legible. Imagine a Bewick plate viewed at eye-level: clearly a master engraving, neither sparse like a logo nor dense like Audubon — somewhere in the disciplined middle. There is significant white space between feather groups within the wings; the wing surface is not solid black ink coverage. Lines are pure black ink, sharp and opaque, as if cut into wood and printed on white paper — confident, deliberate, never tentative, never soft, never gray. Pure monochrome: black ink on white paper, no color, no gradient, no pencil shading. The bird carries a sense of weight and grace at once — the size of myth, the lightness of free flight. The composition is an isolated subject: pure white background, no scenery whatsoever — no horizon, no clouds, no sky gradient, no ground, no shadow, no perch, no prey, no environment of any kind. Image aesthetic is Bewickian wood-engraving of a free-flying mythic eagle, master-craftsman natural history plate, suitable for vector tracing with clean sharp edges.

Do NOT render any predator behaviors: do NOT show the bird striking, swooping, diving, banking, stooping, hunting, attacking, or in any aggressive posture; do NOT show the head pitched downward or tracking prey below; do NOT show the eye focused down or to the side at a target; do NOT show the beak open, parted, or vocalizing; do NOT show talons extended forward, talons gripping, claws open, or any visible talon ready for strike — talons must be hidden under the body. Do NOT render the wings curved downward into a landing or braking posture; do NOT render the wings swept backward into a stoop. Wings spread upward-and-outward to catch a thermal is correct; wings angled into a strike is wrong. The bird is in free flight, not hunting flight. Do NOT render in graphite, pencil, charcoal, or any gray-toned medium. Lines must be pure black ink, sharp and opaque, as if cut into wood and printed on white paper. No soft strokes, no shaded lines, no pencil rendering. If the output reads as a pencil sketch rather than a printed wood-engraving plate, it has failed. Do NOT render as an American golden eagle, bald eagle, or any normal-scale modern raptor on the hunt. The subject is Pouākai of legend in free flight — exaggerated mythic mass and grace, not field-guide realism. Do NOT include any of the following: childish or naive drawings, children's-book illustration, simplified-outline aesthetic, logo-mark simplification, emblem-style flattening, primitive folk-art reduction; sketchy or doodly linework, uncertain wobbling lines, casual pen-and-ink hatching — the lines must be confident master-engraver strokes; sparse outline-only renderings with empty interiors; coloring-book outlines; cartoon, anime, stylized character art, modern flat-design illustration, vector-clipart aesthetic. Also do NOT include: overworked baroque cross-hatching covering every square millimeter of the bird; solid-black ink fills dominating large wing areas; texture noise filling negative space; rococo ornamental excess. The target is the disciplined middle — Bewick, not Audubon, not a logo. There must be substantial white space visible between feather groups within the wings; the wing surface is NOT solid black coverage. Also do NOT include: color of any kind, even subtle tints; photorealism; watercolor, gouache, painterly textures; soft gradients, airbrush, digital painting smoothness; surface-applied Māori art motifs — no koru spirals, no kowhaiwhai patterns, no whakairo carving, no tā moko-derived linework, no taniko weaving. The mythic register comes from posture, scale, and bestiary-plate framing, not from applied tribal-art ornament. Do NOT include any background scenery — no mountains, no sky, no clouds, no horizon, no trees, no ground, no shadow beneath the bird, no perch, no nest, no prey, no human figures, no whare, no waka, no marae imagery; multiple birds, a second eagle, a flock; banners, ribbons, scrolls, text, captions, Māori or Latin labels, signatures, watermarks; heraldic framing such as a shield, wreath, crest, coat of arms, or ornamental border; front-facing, three-quarter, or left-facing orientations — the bird must face right and only right; halftone dot patterns, JPEG artifacts, or fuzzy noise that would defeat later vectorization. The image must be a clean, isolated, side-profile, right-facing, free-flying Pouākai wood-engraving in the Bewick tradition — single subject, pure white background, pure black ink only (no gray), master-engraver mid-density craftsmanship (significant white space between feather groups within wings), mythic gravitas conveyed through scale and grace, free-flight expression through lifted wings and forward gaze, NOT predatory action, beak closed, talons hidden, ready to be vectorized to SVG.
```

### 2.2b Variant B — Mythic, short-form rev-5 (Gemini, paste verbatim) — **recommended starting point**

Compressed from §2.2a long-form. Same critical directives, no philosophical filler, no repeated lockdowns. ~200 words vs ~700. Counter-intuitively often adheres better — fewer competing directives for model attention.

```
Black-and-white wood-engraving of Pouākai, the legendary giant eagle of Māori tradition, rendered as a Thomas Bewick natural-history plate (A History of British Birds, 1797). Full right-facing side profile. Free-flight posture: wings spread wide and lifted upward as if catching a thermal; body level or gently ascending; head axis-aligned, looking forward to the horizon; eye calm and forward; beak closed and silent; talons fully retracted and hidden under the body. Mythic proportions: wingspan dramatically broader than body length, head smaller than shoulder mass. Engraving register: confident burin lines, mid-density craftsmanship, visible feather groups with significant white space between them. Pure black ink on pure white background. Isolated subject, no scenery, suitable for vector tracing.

Do NOT include: predator behavior — striking, diving, hunting, gripping, claws-open; wings swept back or curved down into landing or brake; head pitched down or tracking prey; open or parted beak; talons visible or extended; gray, pencil, graphite, or charcoal tones; solid-black ink fills dominating wings; baroque overworked density; childish, naive, sketchy, or doodly linework; logo or coloring-book aesthetic; surface Māori art motifs (koru, kowhaiwhai, whakairo, tā moko, taniko); background scenery — horizon, clouds, shadow, perch, prey, multiple birds; banners, text, labels, heraldic framing; color of any kind; front-facing, three-quarter, or left-facing orientation. The bird must face right.
```

### 2.3 Variant A — Scientific (Kittl short-form, paste verbatim)

Kittl's prompt input is shorter. Use the condensed form below; pair with §3 style modifiers and §4 negative-prompt field. Variant B has no Kittl short-form — if Variant B wins the Gemini A/B, generate it in Gemini and bring the raster to Kittl only for the vectorize step (§7).

```
A vintage scientific engraving of a Haast's eagle (Pouākai) in flight, soaring with wings fully spread, viewed from the side facing right. Style of 19th-century ornithological plates — Audubon's Birds of America, Ernst Haeckel's Kunstformen der Natur, vintage broadside woodcut. Fine cross-hatching, line-weight variation, visible engraving texture. Monochrome black ink on white. Isolated subject, no background, no scenery, no horizon, no perch. Anatomically accurate New Zealand giant eagle — broad wings, heavy hooked beak, powerful talons tucked, fanned tail. Confident, calm posture — not dramatic, not predatory. Print-illustration aesthetic, museum-plate quality. Sharp clean lines suitable for vector tracing.
```

---

## 3. Style modifiers (if Kittl exposes them)

Apply where the UI allows:

- **Medium**: engraving / woodcut / line etching
- **Era**: 1800s scientific illustration
- **Color**: pure black, no shading gradient, no halftone
- **Background**: transparent / pure white
- **Composition**: centered single subject, profile/side view
- **Detail**: high line density, fine cross-hatch
- **Inspiration sliders** (if Kittl has them): naturalist, taxonomic plate, vintage print

---

## 4. Negative prompts / "do NOT include"

- Photorealism, photo-realistic feathers, photographic shading
- Color (any color other than black)
- Watercolor, gouache, painterly textures
- Soft gradients, airbrush, digital painting smoothness
- Modern flat-design illustration, vector-art-look, clipart
- Cartoon, anime, stylized character
- Background scenery: mountains, sky, clouds, trees, ground, prey, perch
- Multiple birds, flock, pair
- Banners, ribbons, text, labels, latin name
- Heraldic / coat-of-arms framing (no shield, no wreath)
- Front-on / three-quarter / facing-left views
- Stooping dive posture, wings folded, talons extended for strike

---

## 5. Reference moodboard (look these up + show Kittl if it supports image refs)

If Kittl accepts reference uploads, drop in 2–4 of these:

1. **Audubon — Bald Eagle Plate 11** (*The Birds of America*, 1827) — searchable on Wikimedia Commons. Engraving register + naturalist accuracy.
2. **Ernst Haeckel — Falconiformes plate** (*Kunstformen der Natur*, 1904) — vintage taxonomic illustration.
3. **Te Papa Museum reconstructions of Pouākai (Haast's eagle)** — gives the anatomy correctly (broader wings, heavier build than a modern eagle). [tepapa.govt.nz](https://www.tepapa.govt.nz/) search "Haast's eagle".
4. **John James Audubon — Golden Eagle Plate 181** — flight posture reference.

Avoid pulling in references that have backgrounds, color washes, or text — Kittl will replicate those.

---

## 6. Curation rubric — pick the winner

Generate 4–8 candidates. Score each on:

- [ ] **Register check**: visible cross-hatching or line work? If it looks smooth/digital, reject.
- [ ] **Posture check**: wings spread, mid-soar, calm? Reject perched, stooping, or dramatic strike poses.
- [ ] **Facing check**: head + body silhouette looks to the right? Reject left-facing, front-facing, three-quarter.
- [ ] **Isolation check**: no background, no shadow under bird, no incidental scenery?
- [ ] **Anatomical plausibility**: broad wings, heavy build, hooked beak, visible talons (tucked is fine)? Reject anything that reads as small hawk / falcon / generic raptor.
- [ ] **Monochrome check**: pure black on white, no color, no halftone dots, no gray gradient?
- [ ] **Vectorizable check**: clean edges, no fuzzy noise, no JPEG artifacts? If lines bleed or there's haze, reject — the vectorizer will compound it.
- [ ] **Cross-page test**: imagine this beside the `/why-ai` prose, the `/principles` list, the `/roles` grid — does it sit quietly, or does it dominate? Reject anything dramatic enough to overwhelm a small role card.
- [ ] **Variant-register check (A/B-specific)**:
  - **Variant A — Scientific**: does the bird read as a naturalist specimen on a taxonomic plate (calm, anatomical, field-guide-neutral)? Reject if it tips into mythic-imposing or dramatic — that's Variant B's lane.
  - **Variant B — Mythic**: does the bird carry mythic gravitas via *posture and scale* (totemic stillness, watchful eye, larger-than-life proportions)? Reject if it reads as a normal eagle (mythic register failed). Reject **harder** if any surface Māori ornament appears — koru spirals, kowhaiwhai patterns, tā moko-style linework, whakairo carving overlays — the mythic register must come from framing, not applied motif. A Variant B candidate with tribal-clipart drift is a hard fail regardless of how good the rest is.
- [ ] **Final A/B pick**: after both variants have produced winning candidates, compare the two finalists side-by-side at expected render size (~280–360px long-axis). Which one *belongs* on `/`? Which one survives the cross-page test on `/roles`/`/principles`/`/why-ai` without re-shooting? Pick one; archive the loser to `meta/asset-production/pouakai-candidates/rejected/`.

**Tie-breaker**: pick the one with the **most restraint**. The brief says "the bird is present, not performing." If two candidates pass everything else, the quieter one wins. This applies *within* a variant and *between* the A/B finalists.

---

## 7. Vectorize in Kittl

Kittl has a built-in raster → vector converter. After picking a winner:

1. Open the candidate image in Kittl's canvas.
2. Run **Vectorize** (Image → Vectorize, or right-click → Vectorize).
3. In the vectorizer options:
   - **Color mode**: Monochrome / 1-color.
   - **Detail**: high (preserves cross-hatching).
   - **Smoothing**: medium (balance line fidelity vs path count).
   - **Threshold**: tune so the lines stay crisp but the page count doesn't explode.
4. Inspect the result: zoom in to wing-feather detail. If cross-hatching collapsed into solid black blobs, lower detail/threshold and retry.
5. If artifacts remain (stray dots, broken lines), use Kittl's path editor to clean manually.

---

## 8. Export spec

- **Format**: SVG (Kittl → Export → SVG).
- **Dimensions**: 720px wide × auto height (engineer will set CSS `width` on consume).
- **Path color**: set fill/stroke to `currentColor` if Kittl supports it; otherwise solid `#000` and the engineer swaps to `currentColor` in a post-export pass.
- **Viewbox**: tight to the subject — no extra whitespace.
- **No inline styles or fonts** (Kittl sometimes embeds these — strip on post-export).

---

## 9. Post-export optimization

Once the raw SVG is in hand, run it through **SVGO** with these flags (engineer step, but document the target):

```bash
svgo --multipass --pretty=false pouakai.svg -o pouakai.min.svg
```

Target: ≤8KB gzip. If above 8KB after `svgo --multipass`, simplify paths in Kittl (lower detail in vectorizer) and re-export — do not hand-strip nodes in the final SVG.

---

## 10. Where the asset lands in the repo

When done:

- **Source SVG** (post-Kittl-export, pre-optimization): `public/illustrations/pouakai.svg`
- **Optimized SVG** (post-SVGO): `public/illustrations/pouakai.min.svg`
- **Raw winner candidate** (the raster Kittl generated, for re-export later if needed): `meta/asset-production/pouakai-candidates/winner.png`
- **Rejected candidates** (optional, for audit trail): `meta/asset-production/pouakai-candidates/rejected/`

The engineer will inline-import the optimized SVG into `<Hero illustration>` once [poukai-ui#40](https://github.com/poukai-inc/poukai-ui/issues/40) lands. Inline `<svg>` (not `<img>`) so `currentColor` inherits the DS `--fg` palette token.

---

## 11. Open questions for Arian on first generation pass

These will only matter once you've seen what Kittl actually produces:

- Does the engraving register survive Kittl's AI gen, or does it default to flatter line-art that loses the "Old-World plate" register? If the latter, we may need to layer a "scientific engraving plate" reference image + explicit "cross-hatching" prompt term.
- Is right-facing reliable, or does Kittl mirror? If it mirrors, generate with explicit "looking to the right" + check candidates manually.
- Does the bird read as a Haast's eagle (Pouākai-specific) or a generic golden eagle? Kittl's training set may not have Haast's eagle specifically — if so, "giant New Zealand eagle, broader wings, heavier build than American golden eagle" added to the prompt may help.

If any of these fail at first pass, iterate the prompt and re-run. Two or three iterations is normal for editorial-quality AI gen — that's the curation cost.
