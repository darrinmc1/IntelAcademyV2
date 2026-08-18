# Intel Academy — Canonical Topic Inventory (deduplicated)

> Generated 2026-08-18 after a full audit of `data/topics-catalog.ts`, `app/topics/*` (112 pages),
> git history (last week's publisher commits), and content-similarity analysis of every page body.

## How the audit worked

- Compared every topic page's **body text** (not just titles) with token-overlap similarity.
- Confirmed duplicates by reading actual page content (identical section structures rephrased).
- Cross-referenced catalog ↔ disk ↔ learning paths ↔ search index ↔ "where next" maps.

## Problem 1 — Strange / off-topic pages published as topics

| Slug | Why it's wrong | Action |
|---|---|---|
| `intelligence-decision-making-header-fix` (added 08-16) | A web-admin how-to ("fix repeated content headers on your site") — not an intelligence lesson | Remove from catalog + delete page |
| `user-content-request-feedback-loop` | Meta lesson about the site's own feedback system, not an intelligence topic | Delete page |
| `learning-paths` (added 08-11) | Site-navigation guide, not a lesson | Remove from catalog grid; keep page (admin/other pages link to it) |
| `forum` — "Understanding and Participating in Online Forums" (added 08-18) | Generic internet-etiquette guide (netiquette, "avoid me-too posts") — no intelligence framing, category "online communities" | Removed from catalog + page deleted |
| `tactical-intelligence-concept` | In catalog but **no page exists** → grid 404; learning-path page still links to it | Remove catalog entry; flagged: needs a real lesson page later |

## Problem 2 — Duplicate clusters (same lesson rephrased)

| Cluster | Keep (canonical) | Removed |
|---|---|---|
| Risk factor indicators (5 pages) | `risk-factor-indicators-for-intelligence-analysis` | `risk-factor-indicators-for-analysts`, `risk-factor-indicators-for-intel-analysts`, `risk-factor-indicators-for-intel-analysis`, `identifying-and-analyzing-risk-factors-and-indicators` |
| Intelligence cycle (2) | `intelligence-cycle` (original, completed) | `the-intelligence-cycle-from-raw-data-to-actionable-insights` |
| Intelligence processing (2) | `intelligence-processing-transforming-raw-data-into-actionable-insights` | `intelligence-processing-fundamentals` |
| Analysis fundamentals (1) | — (covers cycle+ACH+cognitive biases = 3 other lessons) | `intelligence-analysis-fundamentals` |
| Strategic intelligence concept (3) | `strategic-intelligence-concept` (original) | `strategic-intelligence-concept-revisited`, `what-is-strategic-intelligence` |
| Strategic intelligence products (3) | `strategic-intelligence-products-bridging-the-gap-between-information-and-action` | `strategic-intelligence-products`, `strategic-intelligence-products-overview` |
| PESTLE (2, both added 08-17) | `strategic-intelligence-expanding-pestle-analysis-dynamic-world` | `pestle-analysis-technological-element` (subset) |
| Advanced crime series (3) | `advanced-crime-series-analysis-predictive-modeling-resource-allocation` | `advanced-crime-series-analysis-techniques`, `advanced-techniques-in-crime-series-analysis` |
| Link analysis (2) | `introduction-to-link-analysis` | `link-analysis-uncovering-hidden-connections` |
| Information vs intelligence (2) | `intelligence-vs-information` (referenced by learning paths) | `information-vs-intelligence` |
| Executive summaries (3) | `executive-summaries-mastery` (referenced by learning paths) | `executive-summaries`, `writing-executive-summaries` |
| Crime series intro (2) | `what-is-crime-series-analysis` | `crime-series-analysis` (MO/signature/linkage content duplicated elsewhere) |

## Problem 3 — Overlapping families (flagged, NOT deleted — review later)

These are "expanded" topics where some merge is possible, but each retains a distinct angle.
Keep for now; revisit when writing new lessons:

- **Threat assessment**: `threat-assessment-methodologies` (catalog) + `threat-assessment-models` (frameworks: NTAS/CARVER/OCTAVE) + `what-is-threat-assessment` (fundamentals) — mostly a progression; `what-is-threat-assessment` overlaps `methodologies` most.
- **Intelligence reporting**: `intelligence-report-fundamentals`, `-components`, `-types`, `-examples`, `good-intelligence-report`, plus `report-writing-pitfalls` — heavy family overlap; candidates for consolidation to 2–3 pages.

## Canonical topic list (the grid after cleanup — 26 topics)

Foundations: `what-is-intelligence`, `intelligence-cycle`, `intelligence-types`, `strategic-intelligence-concept`, `intelligence-vs-information`, `intelligence-processing-transforming-raw-data-into-actionable-insights` *(+ `osint-techniques` in Collection)*
Collection: `osint-techniques`, `collection-planning-process-for-intel-analysts`, `deep-web-research-for-intel-analysts`, `ai-prompt-injection-defense`
Analysis: `analytical-techniques-for-intel-analysts`, `cognitive-biases`, `analysis-competing-hypotheses`, `risk-factor-indicators-for-intelligence-analysis`, `threat-assessment-methodologies`, `target-profiling-developing-profiles-of-high-value-targets`, `link-analysis` → `introduction-to-link-analysis`
Crime series: `what-is-crime-series-analysis`, `series-pattern-detection-statistical-analytical-methods-crime-series`, `predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac`, `advanced-crime-series-analysis-predictive-modeling-resource-allocation`, `repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders`, `crime-linkage-techniques`, `modus-operandi-analysis-techniques`
Strategic: `strategic-intelligence-expanding-pestle-analysis-dynamic-world`, `strategic-intelligence-products-bridging-the-gap-between-information-and-action`
Reporting: `intelligence-report-fundamentals`

## Root cause (why this keeps happening)

The n8n Lesson Publisher (`EBwuLh3qffH3v0JC`) prepends new catalog topics with **no dedup gate** —
the generator is rephrasing topics already in the catalog (and older batch pages that aren't in the catalog
at all, e.g. `what-is-strategic-intelligence`, `executive-summaries*`). Recommended fix:
add a title/keyword similarity check against `topics-catalog.ts` **+** the full `app/topics/*` slug list
before generating/publishing, or the next prompt run will start re-adding duplicates.

## Cleanup applied

- `data/topics-catalog.ts`: 26 canonical entries (removed 18: 17 duplicates/junk + the publisher's generic "Online Forums" lesson).
- Deleted 22 duplicate/junk page dirs under `app/topics/`.
- `app/api/search/route.ts`: removed dead search entries for deleted slugs.
- `data/topic-where-next.ts` / `data/whats-next-recommendations.ts`: removed/repointed dead references.
- `next.config.mjs`: permanent redirects from deleted slugs → canonical pages (old URLs stay indexed).
- Orphan images in `/public` left in place (harmless; can be swept later).
