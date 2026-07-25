import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hot Spot Analysis - The Intel Analyst Academy",
  description: "Learn how to identify, classify, and analyze crime hot spots using spatial statistics, temporal patterns, and repeat victimization theory.",
}

const topicContent = `"Learn how to identify, classify, and analyze crime hot spots using spatial statistics, temporal patterns, and repeat victimization theory.",

Crime is not random. It clusters in space and time, and understanding where and when
these clusters form is one of the most powerful tools in a crime analyst's arsenal.
Hot spot analysis moves beyond simple pin-mapping into statistical methods that
separate signal from noise. In this lesson, you will learn to identify the three
fundamental types of hot spots, choose between KDE and Gi* statistics for different
analytical problems, factor temporal patterns into your spatial analysis, and recognize
when the same victims keep appearing — because that is where the next crime is most
likely to occur.

{/* ---- Section 1: Hot Spot Types ---- */}

Before you run a single statistical test, you need to understand what you are looking
for. Crime hot spots fall into three broad categories, each requiring a different
analytical approach and implying different operational responses.

### Diffuse Hot Spots

A diffuse hot spot is a broad area where crime rates are consistently elevated compared
to surrounding regions, but the crimes themselves are not tightly clustered. Think of a
neighborhood with chronic property crime: incidents are spread across many blocks and
addresses, but the overall rate is significantly higher than the city average. Diffuse
hot spots suggest environmental or structural drivers — poverty, poor lighting, limited
policing presence — rather than a single offender or location.

**Analytical approach:** Use larger grid cells or kernel density
estimation with a wide bandwidth. The question is not "where exactly" but
"within which general area."

### Clustered Hot Spots

Clustered hot spots are the classic crime pattern: a tight grouping of incidents at a
specific location or small set of locations. A bar that generates three assaults every
weekend. A parking garage where vehicles are stolen weekly. A street corner where drug
transactions occur with predictable regularity. Clustered hot spots demand a targeted,
location-specific intervention.

**Analytical approach:** Use Gi* (Getis-Ord Gi*) statistics or nearest
neighbor analysis with a tight distance threshold. These methods identify statistically
significant local clusters rather than broad areas.

### Dispersed (or Displaced) Hot Spots

Dispersed hot spots occur when crime is elevated across a broader area without a clear
single cluster. This can happen naturally — for example, a series of residential
burglaries spread across a neighborhood by a mobile offender — or as a result of
displacement after an intervention. You close the drug market on one corner and it
pops up two blocks away. The hot spot did not disappear; it moved.

**Analytical approach:** Compare temporal slices of the same area before
and after an intervention. Use difference maps and repeat-density analysis to detect
displacement. If the total crime count has not changed but the spatial distribution
has shifted, you have displacement.

If you stare at a crime map long enough, you will start seeing hot spots in your
breakfast cereal. That does not mean your Cheerios are statistically significant.
Let the numbers do the talking.

Always classify your hot spot type before choosing a method. Applying Gi* to a
diffuse hot spot produces dozens of "non-significant" local results and zero
actionable intelligence. Applying KDE to a tight cluster produces a blob that is
too broad to patrol. Match the method to the pattern.

{/* ---- Section 2: KDE vs. Gi* ---- */}

Two statistical methods dominate modern hot spot analysis: Kernel Density Estimation
(KDE) and the Getis-Ord Gi* statistic (pronounced "G-I-star"). They answer different
questions, and choosing the wrong one for your analytical problem is a common rookie
mistake — one that produces clean-looking maps with zero operational value.

### Kernel Density Estimation (KDE)

KDE creates a smooth, continuous surface that shows the intensity of crime across an
area. It answers the question: **Where is crime most concentrated?** KDE
works by placing a "kernel" — a curved mathematical function — over each incident
location, summing the overlapping kernels, and producing a density raster. The result
is a beautiful heat map with smooth gradients from cool blue to hot red.

- **Best for:** Visualizing broad patterns, communicating to non-analytical audiences, diffuse hot spots, and exploratory analysis.
- **Weakness:** Does not provide statistical significance. A red blob on a KDE map may be visually compelling, but you cannot tell the reader "this is statistically significant with 95 percent confidence."
- **關鍵 parameter:** Bandwidth — the radius of the kernel. Too small produces a spiky, noisy map. Too large produces a meaningless blur. Use cross-validation or the rule of thumb to set it.

### Getis-Ord Gi*

Gi* is a local spatial autocorrelation statistic. It answers the question:
** Is there a statistically significant cluster of high (or low) values at this
location?** Gi* compares each location's value to the global average and tests
whether the local pattern is more extreme than expected by chance. The output is a z-score
and p-value for every location — cold, hard statistical evidence.

- **Best for:** Confirming hot spots with statistical rigor, academic research, operational resource allocation decisions that need justification, and clustered hot spots.
- **Weakness:** Less visually intuitive than KDE. Requires count data aggregated into polygons or grid cells — you cannot feed it point data directly.
- **關鍵 parameter:** Distance band — the spatial relationship threshold. Incorrect distances produce meaningless results. Use incremental spatial autocorrelation to find the optimal distance.

Common Mistake

"We ran Gi* on all the city's crime data and nothing was significant. I
guess there are no hot spots."

Likely cause: wrong distance band, wrong aggregation scale, or applying Gi* to a diffuse pattern that KDE would have visualized perfectly.

Correct Approach

"We used KDE to explore the spatial pattern of residential burglaries, which
identified three candidate areas. We then applied Gi* to each area with
optimized distance bands and confirmed two statistically significant
clusters."

KDE for exploration, Gi* for confirmation. Use both in sequence.

Presenting a KDE map without a Gi* confirmation is an analytical flex that will not
survive a peer review. Presenting Gi* results without a KDE map is a presentation
that will put an entire command staff to sleep. Always bring both.

{/* ---- Section 3: Temporal Blindness ---- */}

One of the most common mistakes in hot spot analysis is spatial narcissism: treating
crime patterns as if time does not matter. A hot spot that blazes at 2 a.m. on a
Saturday night may be completely cold by 2 p.m. on a Tuesday afternoon. If you are
analyzing all incidents as a single spatial layer, you are averaging across different
temporal regimes — and losing critical intelligence in the process.

### Temporal Segmentation

The solution is temporal segmentation: splitting your data into meaningful time windows
before running spatial analysis. Standard temporal slices include:

- **Time of day:** Day (0600-1800) vs. night (1800-0600) — or finer slices like rush hour, late night, and early morning.
- **Day of week:** Weekday vs. weekend — or individual day-of-week layers if data volume supports it.
- **Season:** Summer patterns differ from winter patterns, especially for outdoor crimes like robbery and assault.
- **Special events:** Game days, festivals, holidays — these produce temporary hot spots that vanish when the event ends.

### The Temporal Threshold Problem

There is a trade-off: finer temporal slices produce more accurate hot spots, but also
reduce sample sizes to the point where statistical tests lose power. A neighborhood
that has 200 incidents over a year — enough for robust spatial analysis — may have
only 15 incidents in the 2 a.m. to 4 a.m. Saturday window. Those 15 incidents may
be an important pattern, but they may not survive a Gi* test.

**The rule of thumb:** Do not run spatial statistics on temporal slices
smaller than 30 incidents. Use KDE for exploratory analysis on smaller samples and
reserve Gi* for slices with adequate statistical power. When sample sizes are too
small, flag the pattern as an "emerging hot spot" rather than a confirmed one.

### Day vs. Night: A Case Study

Consider an analysis of street robberies in a mid-sized city. The overall KDE map shows
a single large hot spot in the downtown core. But when you segment by time of day:

- **Daytime robberies (0800-1800):** Concentrated around the transit hub and financial district — opportunistic theft from commuters.
- **Evening robberies (1800-0200):** Concentrated around the entertainment district and bar corridor — likely alcohol-fueled confrontations.
- **Late-night robberies (0200-0600):** Concentrated in the warehouse district — commercial robbery targeting late-night businesses.

Three completely different problems, three different intervention strategies, all
hidden inside a single "downtown hot spot." Temporal blindness would have led to a
one-size-fits-all response that addressed none of them effectively.

Build temporal heat maps as a routine screening step before spatial analysis. A
simple bar chart of incident counts by hour of day and day of week tells you where
to set your temporal slices. If the bar chart is flat across all hours, skip
temporal segmentation — but that almost never happens.

{/* ---- Section 4: Repeat Victimization Trap ---- */}

One of the most robust findings in criminology is the near-repeat victimization
pattern: once a location or person has been victimized, the risk of future
victimization spikes dramatically — and then decays over time. This pattern has
profound implications for hot spot analysis.

### The 2 Percent Rule

Research consistently shows that a tiny fraction of victims and locations accounts for
a disproportionately large share of crime. In many jurisdictions, roughly 2 percent of
addresses generate 25 to 30 percent of all crime calls for service. These are
"repeat locations" — and they are the most predictable crime hot spot of all.

If your hot spot analysis does not account for repeat victimization, you risk
mistaking a single location that was victimized ten times for a cluster of ten unique
locations that each experienced one incident. The spatial pattern looks similar, but
the analytical interpretation — and the operational response — is completely different.

### The Near-Repeat Effect

Even more important than repeat victimization of the same address is the near-repeat
pattern: after a burglary at one home, the homes within 200 to 400 meters face an
elevated risk of burglary for the next one to two weeks. This is because the same
offender often works a neighborhood systematically, hitting multiple nearby targets
in a short time window.

Near-repeat analysis has become a cornerstone of predictive policing. The intelligence
question shifts from "where are hot spots?" to "where will the next near-repeat
occur?" This requires combining spatial clustering with temporal decay modeling.

The Trap

"We identified a hot spot of car thefts in the north-west sector. Twice
the city average."

Sounds actionable. But is it a true cluster of many offenders, or one prolific offender hitting the same parking lot repeatedly?

The Deeper Analysis

"Of the 43 car thefts in the north-west sector, 31 occurred at a single
unsecured parking garage. The remaining 12 were at nearby addresses
within three days of each garage theft. This is a near-repeat pattern
driven by one location."

Different interpretation, different intervention: secure the garage, not the entire sector.

### How to Avoid the Trap

- **Always deduplicate addresses before running spatial tests.** Create two layers: one with all incidents (including repeats) and one with unique locations only. Compare the hot spots.
- **Flag repeat locations that exceed three incidents in 30 days.** These are not merely hot — they are chronic. They deserve dedicated analysis.
- **Build a near-repeat matrix.** For each incident, identify all subsequent incidents within 400 meters and 14 days. If the near-repeat ratio exceeds 1.5, you have a contagious pattern.
- **Present repeat and non-repeat hot spots separately.** A map that shows "unique incidents per grid cell" and "total incidents per grid cell" side by side tells a much richer story than either alone.

A hot spot driven entirely by repeat victimization is not a hot spot — it is a single
problem that you have failed to solve multiple times. The map is not telling you about
crime concentration; it is telling you about your own inaction.

You are given the following summary of a six-month crime analysis for a mid-size police
district. Your task: identify which analytical missteps were made and propose a
corrected approach.

"We ran Gi* on all reported burglaries for District 7 using a 500-meter fixed
distance band. Nothing was statistically significant, so we concluded there
are no burglary hot spots. We also created a KDE map of all crimes combined
(burglaries, robberies, assaults, vehicle thefts) and found a large red area
in the downtown core. That must be where all the crime is. Finally, we noted
that one apartment complex had been burglarized 14 times over the period,
but since Gi* showed no significance at the district level, we did not flag
it."

**Identify at least four analytical errors in this summary.** For each
error, explain what should have been done differently. Consider: spatial method
selection, temporal segmentation, aggregation, repeat victimization, and the
relationship between exploratory and confirmatory analysis.

)
`

export default function HotspotanalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Hot Spot Analysis"
        subtitle="Learn how to identify, classify, and analyze crime hot spots using spatial statistics, temporal patterns, and repeat vic"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="hot-spot-analysis" />
      </MicroLesson>
    </LessonContainer>
  )
}
