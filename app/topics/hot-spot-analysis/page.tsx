import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  FieldExercise,
  ProTip,
  JokeAside,
  Debrief,
  NextLessonLink,
} from "@/components/micro-lesson"

export const metadata: Metadata = {
  title: "Hot Spot Analysis | The Intel Analyst Academy",
  description:
    "Learn how to identify, classify, and analyze crime hot spots using spatial statistics, temporal patterns, and repeat victimization theory.",
}

export default function HotSpotAnalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Hot Spot Analysis"
        subtitle="Crime Doesn't Happen Everywhere Equally. Find the Heat or Get Burned."
        humorSubtitle="The only time it's socially acceptable to stare at a map for three hours."
        category="Crime Analysis"
        difficulty="Intermediate"
        mascot="hot-spot-analysis"
        mascotMessage="Crime doesn't happen everywhere equally. Find the heat or get burned."
        readTime={15}
      >
        <MissionBriefing
          humorText="Translation: if you are not looking at the map, the map is looking at you — and judging your quadrant-based approach."
        >
          <p className="mb-4">
            Crime is not random. It clusters in space and time, and understanding where and when
            these clusters form is one of the most powerful tools in a crime analyst's arsenal.
            Hot spot analysis moves beyond simple pin-mapping into statistical methods that
            separate signal from noise. In this lesson, you will learn to identify the three
            fundamental types of hot spots, choose between KDE and Gi* statistics for different
            analytical problems, factor temporal patterns into your spatial analysis, and recognize
            when the same victims keep appearing — because that is where the next crime is most
            likely to occur.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Hot Spot Types ---- */}
        <DeepDive title="Not All Maps Are Created Equal — Hot Spot Types">
          <p className="mb-4">
            Before you run a single statistical test, you need to understand what you are looking
            for. Crime hot spots fall into three broad categories, each requiring a different
            analytical approach and implying different operational responses.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Diffuse Hot Spots</h3>
          <p className="mb-4">
            A diffuse hot spot is a broad area where crime rates are consistently elevated compared
            to surrounding regions, but the crimes themselves are not tightly clustered. Think of a
            neighborhood with chronic property crime: incidents are spread across many blocks and
            addresses, but the overall rate is significantly higher than the city average. Diffuse
            hot spots suggest environmental or structural drivers — poverty, poor lighting, limited
            policing presence — rather than a single offender or location.
          </p>
          <div className="bg-slate-950 border-l-4 border-cyan-400 pl-4 py-3 my-4">
            <p className="text-slate-300 text-sm italic">
              <strong>Analytical approach:</strong> Use larger grid cells or kernel density
              estimation with a wide bandwidth. The question is not &quot;where exactly&quot; but
              &quot;within which general area.&quot;
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Clustered Hot Spots</h3>
          <p className="mb-4">
            Clustered hot spots are the classic crime pattern: a tight grouping of incidents at a
            specific location or small set of locations. A bar that generates three assaults every
            weekend. A parking garage where vehicles are stolen weekly. A street corner where drug
            transactions occur with predictable regularity. Clustered hot spots demand a targeted,
            location-specific intervention.
          </p>
          <div className="bg-slate-950 border-l-4 border-amber-400 pl-4 py-3 my-4">
            <p className="text-slate-300 text-sm italic">
              <strong>Analytical approach:</strong> Use Gi* (Getis-Ord Gi*) statistics or nearest
              neighbor analysis with a tight distance threshold. These methods identify statistically
              significant local clusters rather than broad areas.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Dispersed (or Displaced) Hot Spots</h3>
          <p className="mb-4">
            Dispersed hot spots occur when crime is elevated across a broader area without a clear
            single cluster. This can happen naturally — for example, a series of residential
            burglaries spread across a neighborhood by a mobile offender — or as a result of
            displacement after an intervention. You close the drug market on one corner and it
            pops up two blocks away. The hot spot did not disappear; it moved.
          </p>
          <div className="bg-slate-950 border-l-4 border-red-400 pl-4 py-3 my-4">
            <p className="text-slate-300 text-sm italic">
              <strong>Analytical approach:</strong> Compare temporal slices of the same area before
              and after an intervention. Use difference maps and repeat-density analysis to detect
              displacement. If the total crime count has not changed but the spatial distribution
              has shifted, you have displacement.
            </p>
          </div>

          <JokeAside>
            If you stare at a crime map long enough, you will start seeing hot spots in your
            breakfast cereal. That does not mean your Cheerios are statistically significant.
            Let the numbers do the talking.
          </JokeAside>

          <ProTip>
            <p>
              Always classify your hot spot type before choosing a method. Applying Gi* to a
              diffuse hot spot produces dozens of &quot;non-significant&quot; local results and zero
              actionable intelligence. Applying KDE to a tight cluster produces a blob that is
              too broad to patrol. Match the method to the pattern.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: KDE vs. Gi* ---- */}
        <DeepDive title="KDE vs. Gi*: A Cage Match of Statistics">
          <p className="mb-4">
            Two statistical methods dominate modern hot spot analysis: Kernel Density Estimation
            (KDE) and the Getis-Ord Gi* statistic (pronounced &quot;G-I-star&quot;). They answer different
            questions, and choosing the wrong one for your analytical problem is a common rookie
            mistake — one that produces clean-looking maps with zero operational value.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Kernel Density Estimation (KDE)</h3>
          <p className="mb-4">
            KDE creates a smooth, continuous surface that shows the intensity of crime across an
            area. It answers the question: <strong>Where is crime most concentrated?</strong> KDE
            works by placing a &quot;kernel&quot; — a curved mathematical function — over each incident
            location, summing the overlapping kernels, and producing a density raster. The result
            is a beautiful heat map with smooth gradients from cool blue to hot red.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Best for:</strong> Visualizing broad patterns, communicating to non-analytical audiences, diffuse hot spots, and exploratory analysis.</li>
            <li><strong>Weakness:</strong> Does not provide statistical significance. A red blob on a KDE map may be visually compelling, but you cannot tell the reader &quot;this is statistically significant with 95 percent confidence.&quot;</li>
            <li><strong>關鍵 parameter:</strong> Bandwidth — the radius of the kernel. Too small produces a spiky, noisy map. Too large produces a meaningless blur. Use cross-validation or the rule of thumb to set it.</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Getis-Ord Gi*</h3>
          <p className="mb-4">
            Gi* is a local spatial autocorrelation statistic. It answers the question:
            <strong> Is there a statistically significant cluster of high (or low) values at this
            location?</strong> Gi* compares each location's value to the global average and tests
            whether the local pattern is more extreme than expected by chance. The output is a z-score
            and p-value for every location — cold, hard statistical evidence.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Best for:</strong> Confirming hot spots with statistical rigor, academic research, operational resource allocation decisions that need justification, and clustered hot spots.</li>
            <li><strong>Weakness:</strong> Less visually intuitive than KDE. Requires count data aggregated into polygons or grid cells — you cannot feed it point data directly.</li>
            <li><strong>關鍵 parameter:</strong> Distance band — the spatial relationship threshold. Incorrect distances produce meaningless results. Use incremental spatial autocorrelation to find the optimal distance.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Common Mistake</p>
              <p className="text-slate-300 text-sm italic">
                &quot;We ran Gi* on all the city's crime data and nothing was significant. I
                guess there are no hot spots.&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">Likely cause: wrong distance band, wrong aggregation scale, or applying Gi* to a diffuse pattern that KDE would have visualized perfectly.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Correct Approach</p>
              <p className="text-slate-300 text-sm italic">
                &quot;We used KDE to explore the spatial pattern of residential burglaries, which
                identified three candidate areas. We then applied Gi* to each area with
                optimized distance bands and confirmed two statistically significant
                clusters.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">KDE for exploration, Gi* for confirmation. Use both in sequence.</p>
            </div>
          </div>

          <JokeAside>
            Presenting a KDE map without a Gi* confirmation is an analytical flex that will not
            survive a peer review. Presenting Gi* results without a KDE map is a presentation
            that will put an entire command staff to sleep. Always bring both.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 3: Temporal Blindness ---- */}
        <DeepDive title="Temporal Blindness — Why 2am Hot Spots Are Different from 2pm">
          <p className="mb-4">
            One of the most common mistakes in hot spot analysis is spatial narcissism: treating
            crime patterns as if time does not matter. A hot spot that blazes at 2 a.m. on a
            Saturday night may be completely cold by 2 p.m. on a Tuesday afternoon. If you are
            analyzing all incidents as a single spatial layer, you are averaging across different
            temporal regimes — and losing critical intelligence in the process.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Temporal Segmentation</h3>
          <p className="mb-4">
            The solution is temporal segmentation: splitting your data into meaningful time windows
            before running spatial analysis. Standard temporal slices include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Time of day:</strong> Day (0600-1800) vs. night (1800-0600) — or finer slices like rush hour, late night, and early morning.</li>
            <li><strong>Day of week:</strong> Weekday vs. weekend — or individual day-of-week layers if data volume supports it.</li>
            <li><strong>Season:</strong> Summer patterns differ from winter patterns, especially for outdoor crimes like robbery and assault.</li>
            <li><strong>Special events:</strong> Game days, festivals, holidays — these produce temporary hot spots that vanish when the event ends.</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">The Temporal Threshold Problem</h3>
          <p className="mb-4">
            There is a trade-off: finer temporal slices produce more accurate hot spots, but also
            reduce sample sizes to the point where statistical tests lose power. A neighborhood
            that has 200 incidents over a year — enough for robust spatial analysis — may have
            only 15 incidents in the 2 a.m. to 4 a.m. Saturday window. Those 15 incidents may
            be an important pattern, but they may not survive a Gi* test.
          </p>
          <p className="mb-4">
            <strong>The rule of thumb:</strong> Do not run spatial statistics on temporal slices
            smaller than 30 incidents. Use KDE for exploratory analysis on smaller samples and
            reserve Gi* for slices with adequate statistical power. When sample sizes are too
            small, flag the pattern as an &quot;emerging hot spot&quot; rather than a confirmed one.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Day vs. Night: A Case Study</h3>
          <p className="mb-4">
            Consider an analysis of street robberies in a mid-sized city. The overall KDE map shows
            a single large hot spot in the downtown core. But when you segment by time of day:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Daytime robberies (0800-1800):</strong> Concentrated around the transit hub and financial district — opportunistic theft from commuters.</li>
            <li><strong>Evening robberies (1800-0200):</strong> Concentrated around the entertainment district and bar corridor — likely alcohol-fueled confrontations.</li>
            <li><strong>Late-night robberies (0200-0600):</strong> Concentrated in the warehouse district — commercial robbery targeting late-night businesses.</li>
          </ul>
          <p className="mb-4">
            Three completely different problems, three different intervention strategies, all
            hidden inside a single &quot;downtown hot spot.&quot; Temporal blindness would have led to a
            one-size-fits-all response that addressed none of them effectively.
          </p>

          <ProTip>
            <p>
              Build temporal heat maps as a routine screening step before spatial analysis. A
              simple bar chart of incident counts by hour of day and day of week tells you where
              to set your temporal slices. If the bar chart is flat across all hours, skip
              temporal segmentation — but that almost never happens.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 4: Repeat Victimization Trap ---- */}
        <DeepDive title="The Repeat Victimization Trap">
          <p className="mb-4">
            One of the most robust findings in criminology is the near-repeat victimization
            pattern: once a location or person has been victimized, the risk of future
            victimization spikes dramatically — and then decays over time. This pattern has
            profound implications for hot spot analysis.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The 2 Percent Rule</h3>
          <p className="mb-4">
            Research consistently shows that a tiny fraction of victims and locations accounts for
            a disproportionately large share of crime. In many jurisdictions, roughly 2 percent of
            addresses generate 25 to 30 percent of all crime calls for service. These are
            &quot;repeat locations&quot; — and they are the most predictable crime hot spot of all.
          </p>
          <p className="mb-4">
            If your hot spot analysis does not account for repeat victimization, you risk
            mistaking a single location that was victimized ten times for a cluster of ten unique
            locations that each experienced one incident. The spatial pattern looks similar, but
            the analytical interpretation — and the operational response — is completely different.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Near-Repeat Effect</h3>
          <p className="mb-4">
            Even more important than repeat victimization of the same address is the near-repeat
            pattern: after a burglary at one home, the homes within 200 to 400 meters face an
            elevated risk of burglary for the next one to two weeks. This is because the same
            offender often works a neighborhood systematically, hitting multiple nearby targets
            in a short time window.
          </p>
          <p className="mb-4">
            Near-repeat analysis has become a cornerstone of predictive policing. The intelligence
            question shifts from &quot;where are hot spots?&quot; to &quot;where will the next near-repeat
            occur?&quot; This requires combining spatial clustering with temporal decay modeling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">The Trap</p>
              <p className="text-slate-300 text-sm italic">
                &quot;We identified a hot spot of car thefts in the north-west sector. Twice
                the city average.&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">Sounds actionable. But is it a true cluster of many offenders, or one prolific offender hitting the same parking lot repeatedly?</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">The Deeper Analysis</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Of the 43 car thefts in the north-west sector, 31 occurred at a single
                unsecured parking garage. The remaining 12 were at nearby addresses
                within three days of each garage theft. This is a near-repeat pattern
                driven by one location.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">Different interpretation, different intervention: secure the garage, not the entire sector.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">How to Avoid the Trap</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Always deduplicate addresses before running spatial tests.</strong> Create two layers: one with all incidents (including repeats) and one with unique locations only. Compare the hot spots.</li>
            <li><strong>Flag repeat locations that exceed three incidents in 30 days.</strong> These are not merely hot — they are chronic. They deserve dedicated analysis.</li>
            <li><strong>Build a near-repeat matrix.</strong> For each incident, identify all subsequent incidents within 400 meters and 14 days. If the near-repeat ratio exceeds 1.5, you have a contagious pattern.</li>
            <li><strong>Present repeat and non-repeat hot spots separately.</strong> A map that shows &quot;unique incidents per grid cell&quot; and &quot;total incidents per grid cell&quot; side by side tells a much richer story than either alone.</li>
          </ul>

          <JokeAside>
            A hot spot driven entirely by repeat victimization is not a hot spot — it is a single
            problem that you have failed to solve multiple times. The map is not telling you about
            crime concentration; it is telling you about your own inaction.
          </JokeAside>
        </DeepDive>

        <FieldExercise title="Hot Spot Diagnosis">
          <p className="mb-4">
            You are given the following summary of a six-month crime analysis for a mid-size police
            district. Your task: identify which analytical missteps were made and propose a
            corrected approach.
          </p>
          <div className="bg-slate-950 border border-white/10 rounded-lg p-4 mb-4">
            <p className="text-sm text-slate-300 italic leading-relaxed">
              &quot;We ran Gi* on all reported burglaries for District 7 using a 500-meter fixed
              distance band. Nothing was statistically significant, so we concluded there
              are no burglary hot spots. We also created a KDE map of all crimes combined
              (burglaries, robberies, assaults, vehicle thefts) and found a large red area
              in the downtown core. That must be where all the crime is. Finally, we noted
              that one apartment complex had been burglarized 14 times over the period,
              but since Gi* showed no significance at the district level, we did not flag
              it.&quot;
            </p>
          </div>
          <p className="text-slate-300 text-sm">
            <strong>Identify at least four analytical errors in this summary.</strong> For each
            error, explain what should have been done differently. Consider: spatial method
            selection, temporal segmentation, aggregation, repeat victimization, and the
            relationship between exploratory and confirmatory analysis.
          </p>
        </FieldExercise>

        <Debrief
          takeaways={[
            "Classify hot spots as diffuse, clustered, or dispersed before choosing an analytical method — the wrong method produces clean maps with zero value.",
            "Use KDE for exploratory visualization and Gi* for statistical confirmation — the two methods are complementary, not alternatives.",
            "Segment your data by time of day, day of week, and season before running spatial analysis — temporal blindness hides critical patterns.",
            "Account for repeat and near-repeat victimization separately from unique-incident hot spots to avoid mistaking a chronic location for a cluster.",
            "Optimize analytical parameters (bandwidth, distance band) using data-driven methods rather than defaults — the wrong parameter makes the right method fail.",
            "Present findings with appropriate confidence levels: exploratory KDE patterns are hypotheses, Gi* clusters are conclusions.",
          ]}
          humorSummary="A map of all crimes at all times averaged together is not an analysis — it is a screensaver. Get temporal or get lost."
        />

        <NextLessonLink
          href="/topics/crime-trend-analysis"
          title="Crime Trend Analysis"
          description="Learn how to analyze crime patterns over time and identify emerging trends before they become hot spots."
        />
      </MicroLesson>
    </LessonContainer>
  )
}
