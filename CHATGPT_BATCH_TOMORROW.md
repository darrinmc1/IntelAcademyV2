# ChatGPT Image Batch — 16 Default Category Cards

**Generated:** 2026-04-21 (for 2026-04-22 session)
**Target folder:** `public/` (root — not a subfolder)
**All images:** 800×600 landscape PNG
**Style mix:** humor where the gag lands, clean editorial where humor would feel forced

---

## How to use

1. Open a fresh ChatGPT conversation with image generation enabled.
2. Paste the **Master Style** block below as your first message.
3. Then paste each numbered prompt one at a time, letting ChatGPT generate before sending the next.
4. Save each result with the exact filename shown, into `public/` root.
5. When all 16 are done, run `node 05-image-audit.mjs` — missing count should drop from 104 to ~88.

---

## Master Style (paste FIRST)

```
I'm going to give you 16 image generation prompts for a website called Intel Academy —
a training platform for intelligence analysts. Generate them one at a time, following
the shared master style below. Output each as a PNG I can download.

MASTER STYLE (apply to all 16):
- Style: Clean, modern editorial illustration. Mix of humorous/whimsical (for gags
  where they fit the topic) and straight educational (where humor would feel forced).
  I'll flag each prompt as [HUMOR] or [EDITORIAL].
- Aesthetic: light detective-noir motifs where they fit the joke (magnifying glass,
  fedora, trench coat, evidence board, case file) but never forced onto every image.
- Base palette: Muted navy/slate (#1e293b, #334155) with warm off-white background
  (#f8fafc). Each image uses a single topic-specific accent colour (I'll specify).
- Composition: 800×600 landscape, central subject ~60% of frame, balanced negative
  space, soft drop shadows, no hard outlines.
- Lighting: soft directional from top-left.
- Mood: intelligent, authoritative, approachable. Never dark/militaristic clichés —
  no weapons, no classified stamps, no real people.
- Text in image: ZERO. No labels, captions, words of any kind.
- Output: PNG, 800×600.

Ready for prompt 1?
```

---

## The 16 prompts

### 1. `strategic.png` — [HUMOR] — accent: **blue (#2563eb)**

```
Humorous illustration of strategic intelligence. A stylised detective figure
(trench coat, generic featureless face) peering intently into a large glowing
crystal ball on a desk. Inside the crystal ball: a tiny abstract landscape with
trend arrows and long-horizon timeline bars suggesting multi-year futures.
Fortune-teller meets intel analyst. Warm humor, not mystical/occult. Blue accent.
800×600 landscape, no text.
```

---

### 2. `tactical.png` — [HUMOR] — accent: **red (#dc2626)**

```
Humorous illustration of tactical intelligence. A small stylised mouse wearing
a tiny tactical vest and night-vision goggles, crouched low, carefully reaching
for a wedge of cheese sitting on a classic spring mousetrap. Real-time, high-
stakes, close-quarters decision making. Tense comedic beat — the moment before
action. Red accent. 800×600 landscape, no text.
```

---

### 3. `operational.png` — [HUMOR] — accent: **burnt orange (#ea580c)**

```
Humorous illustration of operational intelligence. A stylised octopus wearing
a tiny detective fedora, holding a different small object in each of its 6
visible tentacles: a rolled-up map, a file folder, a coffee mug, a briefing
document, a phone/radio, and a small alarm clock. Calm expression despite the
chaos — mid-level coordination under pressure. Burnt orange accent. 800×600
landscape, no text.
```

---

### 4. `report.png` — [EDITORIAL] — accent: **amber (#f59e0b)**

```
Clean editorial illustration of an intelligence report. A stylised multi-page
document shown at a slight angle, with abstract content blocks suggesting
structured sections: a heading bar, body paragraphs, a small inline chart, and
a bullet list. A soft highlight suggests finishing/polishing. Professional,
not decorative. Amber accent. 800×600 landscape, no text.
```

---

### 5. `threat.png` — [EDITORIAL] — accent: **burgundy (#9f1239)**

```
Clean editorial illustration of threat assessment. A stylised radar or scope
view with several abstract warning-triangle markers clustered in one quadrant,
and a calmer zone opposite. A subtle ring indicator suggests severity gradation.
Analytical, not alarmist. Burgundy accent. 800×600 landscape, no text.
```

---

### 6. `crimeseries.png` — [HUMOR] — accent: **purple (#7c3aed)**

```
Humorous illustration of crime series analysis. A classic detective-movie
corkboard pinned with abstract incident cards, connected by bright red string
creating a web pattern between them. One card at the centre is highlighted
suggesting the linking insight. The corkboard is slightly askew to hint at
obsessive analyst work. Purple accent. 800×600 landscape, no text.
```

---

### 7. `hotspot.png` — [EDITORIAL] — accent: **purple (#7c3aed)**

```
Clean editorial illustration of hot-spot analysis. A stylised top-down abstract
city grid with heat-map overlay zones (hexagonal or circular clusters) in
varying intensities — deep purple at the cores fading to transparent at the
edges. Generic geography, no real city. Purple accent. 800×600 landscape,
no text.
```

---

### 8. `network.png` — [EDITORIAL] — accent: **cyan (#06b6d4)**

```
Clean editorial illustration of network analysis. A stylised node-and-edge
diagram: roughly 10-12 circular nodes of varying sizes connected by thin lines,
with 2 hub nodes glowing brighter. Simpler and more iconic than a full social
network analysis — this is the default category card. Cyan accent. 800×600
landscape, no text.
```

---

### 9. `target.png` — [EDITORIAL] — accent: **rose (#e11d48)**

```
Clean editorial illustration of target profiling. A stylised open dossier or
manila folder with abstract content inside: a placeholder silhouette icon
(generic, featureless — not a real person), a small timeline bar, and a short
list of characteristic markers. Administrative/analytical feel. NOT surveillance
or targeting imagery. Rose accent. 800×600 landscape, no text.
```

---

### 10. `crimetrend.png` — [EDITORIAL] — accent: **purple (#7c3aed)**

```
Clean editorial illustration of crime trend analysis. A stylised line graph
trending upward across a timeline, with a few abstract icon-style markers
(generic incident dots) plotted along the curve at key points. Subtle grid
background. Analytical, data-forward. Purple accent. 800×600 landscape,
no text.
```

---

### 11. `tools.png` — [HUMOR] — accent: **violet (#8b5cf6)**

```
Humorous illustration of the intelligence analyst's toolkit. A Swiss Army knife
shown exploded/unfolded into an absurd number of implements — not just blades,
but a magnifying glass, tiny bar chart, fingerprint kit, evidence tag, coffee
cup, rubber stamp, a mini telescope, and a sticky note. The analyst's
impossible toolbox. Violet accent. 800×600 landscape, no text.
```

---

### 12. `source.png` — [EDITORIAL] — accent: **warm brown (#92400e)**

```
Clean editorial illustration of source evaluation. A stylised stack of 4-5
source materials (books, documents, scrolls, newspaper) with one in the middle
glowing softly to indicate "verified reliable source". A faint checkmark or
seal element sits on the glowing one. Archival/scholarly feel. Warm brown
accent. 800×600 landscape, no text.
```

---

### 13. `digital.png` — [EDITORIAL] — accent: **sky blue (#0ea5e9)**

```
Clean editorial illustration of digital intelligence. A stylised computer screen
or monitor shown at an angle, displaying abstract data flows (not real code):
cascading characters, a small chart, and connection lines to a secondary device
icon (phone or tablet). Modern technical aesthetic. Sky blue accent. 800×600
landscape, no text.
```

---

### 14. `geospatial.png` — [EDITORIAL] — accent: **green (#16a34a)**

```
Clean editorial illustration of geospatial intelligence. A stylised abstract
map with a subtle lat/long grid overlay, 3-4 location pin markers, a small
compass rose, and gentle topographic contour lines. Generic geography — not
a real place. Green accent. 800×600 landscape, no text.
```

---

### 15. `ethics.png` — [HUMOR] — accent: **slate grey (#64748b)**

```
Humorous illustration of intelligence ethics. A stylised analyst figure seated
at a desk with a report open in front of them. On their left shoulder sits a
tiny angelic version of themselves (halo, gentle glow); on their right shoulder
sits a tiny devilish version (small horns, mischievous grin) — each whispering
toward the report. The analyst looks caught in the middle, thoughtful. Classic
visual-shorthand gag for a moral dilemma. Slate grey accent. 800×600
landscape, no text.
```

---

### 16. `communication.png` — [EDITORIAL] — accent: **indigo (#4f46e5)**

```
Clean editorial illustration of intelligence communication. A stylised scene
of a document being handed from one abstract figure (silhouette analyst) to
another (silhouette decision-maker). A speech-bubble motif or arrow suggests
the information flow. Briefing/handoff composition. Indigo accent. 800×600
landscape, no text.
```

---

## After generating

1. Save all 16 into `public/` root
2. Run `node 05-image-audit.mjs` — should drop 104 → 88
3. Commit the batch to git for a save point
4. Come back to me — we still have ~88 refs left (mostly intelligence-memes page images and learning-path banner images), plus Mailchimp setup for Peel Boss and the Intel Academy outbound-email issue

## If any prompt feels wrong

Tell ChatGPT to regenerate with a tweaked description. Don't fight the tool — a 30-second re-prompt is cheaper than trying to force a bad output into the batch.
