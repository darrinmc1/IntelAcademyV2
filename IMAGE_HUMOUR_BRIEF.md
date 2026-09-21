# Intel Academy — Dry-Humour Image Brief

**Created:** 2026-09-21 · Bob
**Tone:** dry, deadpan wit — matches the shipped `dry-humor heroes batch 1` ("crystal-ball / tomato-sauce energy")
**Scope:** the flat/template images that make dry topics forgettable

---

## The principle

Humour should **aid recall, not cheapen the material.** The audience is
intelligence analysts — people who value precision and detect bullshit instantly.
So the humour must be:

- **Deadpan, not zany.** The joke is played completely straight.
- **Subject-appropriate.** It illuminates the concept; it doesn't decorate it.
- **Wordless.** Per `BRAND_DECISIONS.md`: **zero text in image.**
- **One idea per image.** If you need to explain the joke, it's the wrong joke.

### The test

> Would an actual intelligence analyst smirk and then remember the point?
> If yes: ship it. If the joke is just "random thing in a suit": redo it.

### What to avoid

| Don't | Why |
|---|---|
| Clowns, whoopee cushions, obvious comedy props | Reads as unserious; breaks authority |
| Espionage clichés (fedoras, trench coats, silhouetted spies) | Explicitly banned in `BRAND_DECISIONS.md` |
| Text/labels/captions in the image | Banned in `BRAND_DECISIONS.md` |
| Real people or real logos | Legal + dated instantly |
| Anything that mocks the *analyst* | Punch at the problem, never the reader |

---

## The metaphor bank

Each dry topic gets one deadpan visual metaphor. These are the *idea*; the
generator renders them in the existing house style (flat/semi-flat editorial,
navy/slate + topic accent, soft top-left light, subject ~60% of frame).

### Financial intelligence family (accent: gold `#d97706`)

| Subject | Dry metaphor |
|---|---|
| `finint-basics` | Accountant's ledger where one column is a literal river flowing away |
| `financial-intelligence-fundamentals` | Magnifying glass over a bank statement; the only readable line is "misc" |
| `illicit-finance-indicators` | A perfectly ordinary receipt — except the total is a question mark |
| `sanctions-compliance` | A velvet rope in front of a bank vault |
| `financial-network-analysis` | A spiderweb made of paperclips and bank cards |

### Report-writing family (accent: amber `#f59e0b`)

| Subject | Dry metaphor |
|---|---|
| `report-writing-pitfalls` | A report so long it reaches the floor — open on a single sentence, with a bookmark at page 40 |
| `intelligence-report-types` | A filing cabinet where each drawer is a different *shape* |
| `strategic-reports` | A telescope pointing at next year's calendar |
| `operational-reports` | A clipboard mid-swing, running |
| `tactical-reports` | A sticky note that has clearly been through something |
| `operational-reports` | Snowshoes resting on a spreadsheet |
| `visual-intelligence-reporting` | A pie chart nervously eyeing a bar chart |
| `specialized-intelligence-products` | A toolbox where every tool is a different document |

### INT-family / collection (accent: TBD per brand doc)

| Subject | Dry metaphor |
|---|---|
| `masint-explained` | A spectroscope pointing at a cup of tea |
| `socmint-techniques` | A pigeon wearing a tiny lanyard |
| `google-dorking` | An archaeology brush sweeping a search bar |
| `multi-source-integration` | Jigsaw pieces that all have the same photo on them |
| `indicators-warnings` | A canary in a coal mine, wearing a hi-vis vest |

### Cognitive / analysis (accent: teal `#0d9488`)

| Subject | Dry metaphor |
|---|---|
| `confirmation-bias-butterfly` | A butterfly pinned inside a frame that's shaped like a conclusion |
| `analysis-competing-hypotheses` | Three fortune tellers, all disagreeing politely |

---

## Consistency rules for the generator

Per `BRAND_DECISIONS.md`, unchanged:

- **Style:** clean modern editorial illustration, flat or semi-flat, subtle gradients
- **Palette:** navy/slate base (`#1e293b`, `#334155`) on off-white (`#f8fafc`), topic accent
- **Composition:** central object/scene, balanced negative space, subject ~60%
- **Lighting:** soft directional top-left, subtle ambient glow
- **Text:** none. Ever.

**New for humour:** the *situation* can be absurd; the *rendering* stays straight.
That contrast **is** the joke. A poker-faced illustration of an absurd premise.

---

## Dimensions (from BRAND_DECISIONS.md)

| Suffix | Size | Use |
|---|---|---|
| `-banner-large` / `-hero` | 1600×500 | full-width heroes |
| `-banner` | 1200×400 | section heroes |
| `-concept` / `-default` / `-main` | 800×600 | cards, topic defaults |
| `-thumb` | 400×300 | thumbnails |

**Note:** every subject needs **both** a `-banner` (or `-banner-large`) **and** a
`-thumb`. The thumbs are the ones most likely to be seen, so they matter.

---

## Priority order

1. **Paired subjects** (14 found — banner + thumb both flat): highest impact,
   these are full-width surfaces users actually see.
   - `finint-basics`, `financial-intelligence-fundamentals`, `google-dorking`,
     `indicators-warnings`, `intelligence-report-types`, `masint-explained`,
     `multi-source-integration`, `operational-reports`,
     `report-writing-pitfalls`, `socmint-techniques`,
     `specialized-intelligence-products`, `strategic-reports`,
     `tactical-reports`, `visual-intelligence-reporting`
2. **Topic default images** (`-concept` / `-default` / `-main`) still flat.
3. **Remaining thumbs** — lowest priority, smallest surface.

---

## Workflow (existing scripts)

1. Render new assets into `public/`
2. `node 05-image-audit.mjs` — confirm coverage stays at 99.5%+
3. Commit each batch separately so there's a rollback point
4. Update `BRAND_DECISIONS.md` if the "not cartoony" line needs an amendment to
   formally allow dry-humour illustration

---

## ⚠️ Open decision for Darrin

`BRAND_DECISIONS.md` line 11 currently says the style is **"not cartoony."**
The dry-humour direction is *close to* but not identical with cartoony —
it's "straight rendering of an absurd premise."

**Recommendation:** amend that line to:

> not photorealistic, not cartoony, not clipart. **Dry-humour illustration is
> permitted where it aids recall: the premise may be absurd, the rendering stays
> deadpan and consistent with the house style.**

That keeps the guardrail (no slapstick, no clipart) while formally allowing the
direction already shipped.
