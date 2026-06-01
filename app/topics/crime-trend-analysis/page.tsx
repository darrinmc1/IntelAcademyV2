import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  ProTip,
  JokeAside,
  Debrief,
  FieldExercise,
} from "@/components/micro-lesson"
import WhatsNext from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Crime Trend Analysis | The Intel Analyst Academy",
  description:
    "Master the analysis of crime trends over time — seasonal patterns, detection methods, displacement effects, and the traps that deceive even experienced analysts.",
}

export default function CrimeTrendAnalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Crime Trend Analysis — Hot or Not Through Time"
        subtitle="Separate signal from noise when the crime map keeps moving"
        category="Crime Analysis"
        difficulty="Advanced"
        mascot="crime-trend-analysis"
        readTime={15}
        humorSubtitle="Is crime going up, going down, or just moving to a neighbourhood with better statistics?"
        mascotMessage="Numbers don't lie, but they do stretch the truth. Let's find out where the real story is hiding."
      >
        <MissionBriefing humorText="If you stare at a crime map long enough, even random dots start looking like patterns. That's the problem, not the solution.">
          <p className="mb-4">
            A single snapshot of crime data tells you where trouble is today. A trend tells you where
            trouble is going tomorrow — and where it came from last week, last month, and last year.
            This lesson unpacks the difference between reacting to a spike and understanding a trend.
            You will learn the methods that separate the ephemeral blip from the structural shift, and
            you will learn why your favourite crime statistics are probably lying to you.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Why Trends Matter More Than Snapshots ---- */}
        <DeepDive title="Why Trends Matter More Than Snapshots">
          <p className="mb-4">
            Imagine you arrive at a crime briefing in January. The analyst points at a map and declares
            that burglaries are up 40% this week compared to the weekly average. The room buzzes with
            concern. Resources are shuffled. A task force is formed. Then someone thinks to ask: what
            happened during this week last year? What about the week after Christmas, when everyone was
            still on holiday and houses sat empty? The question reveals the uncomfortable truth: the
            40% spike was seasonal noise, not a genuine surge.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Temporal Patterns and the Calendar Trap</h3>
          <p className="mb-4">
            Crime does not occur uniformly across time. It clusters by hour, day, month, and season.
            Assaults peak on summer weekends when alcohol flows and temperatures rise. Domestic
            violence calls spike on Christmas Day and New Year&apos;s Eve. Burglaries follow school
            holidays and long weekends. Property crime often dips during extreme weather — criminals,
            like the rest of us, prefer not to work in a blizzard.
          </p>
          <p className="mb-4">
            A snapshot that does not account for these temporal patterns is worse than useless: it is
            actively misleading. The analyst who reports a &quot;surge&quot; in domestic violence every
            December has not discovered a trend; they have simply discovered that the calendar has
            twenty-eight, twenty-nine, or thirty-one days.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Short-Term vs. Long-Term Trends</h3>
          <p className="mb-4">
            Trends operate on multiple timescales, and confusing one for another is a classic analytical
            error. A short-term trend might last days or weeks — a gang conflict that spikes retaliatory
            shootings, or a holiday weekend that sees a predictable rise in DUI arrests. A medium-term
            trend spans months to a year or two — the displacement effect after a new police patrol
            strategy is implemented, or the lagged impact of an economic downturn. A long-term trend
            spans years or decades — the decades-long decline in U.S. violent crime since the 1990s, or
            the gradual shift from street-level drug markets to online narcotics distribution.
          </p>

          <ProTip>
            <p>
              Always establish your baseline before declaring a trend. A minimum of 12 to 24 months of
              historical data is the floor for meaningful comparison. Anything less and you are looking
              at noise, not signal. Plot the data before you pontificate.
            </p>
          </ProTip>

          <JokeAside>
            Reporting a crime trend based on two weeks of data is like declaring the start of summer
            because you had one warm Tuesday in March. Statistically ambitious; analytically bankrupt.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 2: Methods for Detecting Trends ---- */}
        <DeepDive title="Methods for Detecting Trends">
          <p className="mb-4">
            The analytical toolbox for trend detection is deep, but most analysts only reach for the
            simplest tools. Here we cover the essential methods that turn raw incident data into
            actionable trend intelligence.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Moving Averages: Smoothing the Noise</h3>
          <p className="mb-4">
            A simple line chart of daily crime counts looks like the EEG of a patient having a seizure.
            Daily volatility obscures the underlying direction. Moving averages solve this by averaging
            data points over a fixed window — typically 7, 14, or 28 days — and plotting the smoothed
            result. A 7-day moving average eliminates day-of-week effects (because Mondays are always
            different from Saturdays). A 28-day moving average reveals monthly trends. When the moving
            average crosses a historical threshold, you have something worth briefing.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Time Series Analysis</h3>
          <p className="mb-4">
            For analysts with statistical training, time series methods like ARIMA (AutoRegressive
            Integrated Moving Average) decompose crime data into three components: trend (the long-term
            direction), seasonality (the predictable cycles), and residuals (the genuinely unusual
            events). This decomposition is powerful because it isolates the signal you care about — the
            trend — from the seasonal noise that can masquerade as meaningful change. Most modern crime
            analysis platforms, including those integrated with COMPSTAT processes, use some form of
            time series decomposition under the hood.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Regression and Causal Inference</h3>
          <p className="mb-4">
            Regression methods go beyond description to ask why a trend exists. Did the introduction
            of a new policing strategy cause the decline in street robberies, or was it the concurrent
            change in unemployment rates? Multiple regression can control for confounding variables,
            but it requires careful model specification and a healthy respect for the difference between
            correlation and causation. The analyst who mistakes one for the other will produce confident,
            wrong assessments.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">COMPSTAT: The Original Trend Machine</h3>
          <p className="mb-4">
            COMPSTAT (Computer Statistics) revolutionised American policing in the 1990s by
            institutionalising trend analysis at the command level. Weekly COMPSTAT meetings force
            precinct commanders to explain crime spikes in their sectors using data, not anecdotes.
            The method combines statistical analysis with geographic mapping and accountability
            pressure. When it works, it drives rapid, targeted responses. When it fails — and it often
            fails — it incentivises data manipulation, under-reporting, and the classic &quot;crime of
            the week&quot; myopia that treats every blip as a crisis.
          </p>

          <ProTip>
            <p>
              When using COMPSTAT-style analysis, apply the &quot;three-week rule&quot;: do not treat a
              crime change as a trend until it has persisted for at least three consecutive reporting
              periods. This simple heuristic eliminates 80% of false alarms caused by random weekly
              variation.
            </p>
          </ProTip>

          <JokeAside>
            COMPSTAT meetings are where data meets its match: a precinct commander with a creative
            definition of the word &quot;declining.&quot; Always audit the numbers. Always.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 3: The Usual Patterns ---- */}
        <DeepDive title="The Usual Patterns">
          <p className="mb-4">
            Crime trends are not random. They follow repeatable patterns driven by human behaviour,
            environmental factors, and the adaptive responses of both criminals and law enforcement.
            Learning to recognise these patterns is what separates the trend-spotter from the
            trend-analyst.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Seasonal Crime Patterns</h3>
          <p className="mb-4">
            The seasons write the first draft of any crime trend analysis. In temperate climates,
            warm weather brings people outdoors, increases social interaction, and raises the
            incidence of assault, robbery, and theft from vehicles. Cold weather pushes activity
            indoors and shifts crime toward burglary and domestic incidents. Holiday periods —
            Christmas, New Year, summer breaks — produce their own distinctive crime signatures.
            An analyst who does not seasonally adjust their data will repeatedly rediscover the same
            annual cycle and call it a finding.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Displacement: The Hydra Effect</h3>
          <p className="mb-4">
            When police crack down on crime in one area, the criminal activity does not simply
            disappear — it moves. Displacement is the tendency for crime to shift geographically,
            temporally, tactically, or target-wise in response to enforcement pressure. A successful
            drug bust at a street corner does not eliminate drug dealing; it moves it three blocks
            over, shifts it to a different time of day, or pushes it indoors. Trend analysts must
            account for displacement, or they will falsely attribute a decline in Sector A to good
            policing when the reality is simply that crime relocated to Sector B.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Diffusion of Benefits: The Good Kind of Spread</h3>
          <p className="mb-4">
            The flip side of displacement is diffusion of benefits — the phenomenon where crime
            reduction effects spread beyond the targeted area or crime type. A focused patrol
            initiative in a known hot spot may also reduce crime in adjacent areas, because the
            perception of increased enforcement deters potential offenders across a wider zone. This
            halo effect is real, measurable, and frequently underrepresented in trend assessments.
            When you see crime dropping in a comparison sector that received no additional resources,
            diffusion — not a coincidental parallel trend — may be the explanation.
          </p>

          <JokeAside>
            Criminals are not consultants. When you squeeze one side of their operating environment,
            they do not submit a restructuring plan — they just move to the other side of town and
            keep working. Displacement is the oldest pattern in the book, yet analysts forget it with
            alarming regularity.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 4: When Trends Deceive ---- */}
        <DeepDive title="When Trends Deceive">
          <p className="mb-4">
            The hardest lesson in trend analysis is that the data itself can lie. Not maliciously —
            data has no intent — but because the mechanisms that produce crime data are shaped by
            human decisions, institutional policies, and structural conditions that have nothing to
            do with actual criminal behaviour.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Reporting Changes: The Paperwork Mirage</h3>
          <p className="mb-4">
            A crime trend that appears in the data may reflect nothing more than a change in how
            crime is recorded. When a police department adopts a new records management system,
            implements mandatory reporting for certain offences, or changes its classification
            guidelines, reported crime rates can shift dramatically overnight — with zero change in
            actual victimisation. The most infamous example is the &quot;crime decline&quot; that
            followed the adoption of electronic field reporting in some departments. The decline was
            real in the data; in the real world, officers were simply spending less time filling out
            forms and incidents were being recorded inconsistently during the transition.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Policy Shifts: When the Rules Change</h3>
          <p className="mb-4">
            Policy decisions at the department, city, or state level can create apparent crime trends
            that have nothing to do with underlying criminality. A decision to decriminalise minor
            drug possession will produce a dramatic drop in drug arrests — which will appear in the
            data as a crime trend. A change in domestic violence reporting protocols will produce a
            spike, as previously uncounted incidents enter the official record. The analyst who
            interprets these policy-driven data shifts as changes in criminal behaviour will provide
            confident, policy-relevant advice that is completely wrong.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Demographic Shifts: Population as the Hidden Variable</h3>
          <p className="mb-4">
            Crime rates are almost always expressed per capita, but the denominator — population —
            moves slowly and often invisibly. A city that experiences rapid population growth will
            see its crime counts rise even if the per-capita rate is stable or declining. Conversely,
            a shrinking city may see falling crime counts that mask a rising victimisation rate. The
            analyst who does not check the census data is not analysing trends; they are analysing
            arithmetic artefacts.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Base Rate Fallacy</h3>
          <p className="mb-4">
            The base rate fallacy is the tendency to ignore general statistical probabilities in
            favour of specific, vivid information. In crime trend analysis, this manifests as the
            belief that a 50% increase in a rare crime type is more meaningful than a 5% increase in
            a common one. A neighbourhood that goes from zero homicides to one has experienced a
            mathematically infinite increase. A neighbourhood that goes from 200 auto thefts to 210
            has experienced a 5% increase. Which trend actually matters more? The base rate fallacy
            tempts us to obsess over the first while ignoring the second. Good trend analysis defeats
            this instinct by always contextualising change against the base prevalence of the crime.
          </p>

          <ProTip>
            <p>
              When you see a dramatic percentage change, your first question should be: what was the
              starting number? A 100% increase from 2 to 4 incidents is a mathematical curiosity, not
              a crime wave. Always report both the absolute and relative change, and let your consumer
              decide which matters.
            </p>
          </ProTip>

          <JokeAside>
            The base rate fallacy is why local news hyperventilates about a single kidnapping in a
            town of 50,000 but says nothing about the 300 car break-ins that happened the same week.
            Don't let your analysis imitate local news.
          </JokeAside>
        </DeepDive>

        <FieldExercise title="Field Exercise: Spot the Phantom Trend">
          <p className="mb-4">
            You are assigned to analyse crime data for Midtown District. The dataset shows a 37%
            increase in reported aggravated assaults between Q1 and Q2. Before you brief your
            supervisor, your task is to investigate three alternative explanations:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Seasonality:</strong> Check whether the Q2 spike matches the spring-summer pattern from previous years. Calculate the average Q1-to-Q2 change over the last five years.</li>
            <li><strong>Reporting change:</strong> Interview the records unit. Did the department adopt a new crime classification policy or switch reporting systems at the start of Q2?</li>
            <li><strong>Displacement check:</strong> Map the incidents. Are the &quot;new&quot; assaults concentrated in areas adjacent to a hot spot that was heavily targeted by patrols in Q1?</li>
          </ol>
          <p className="text-slate-300">
            Write a one-paragraph assessment that either confirms the trend as genuine or explains
            which of these distorting factors is at play. Include your level of confidence and what
            additional data you would need to be more certain.
          </p>
        </FieldExercise>

        <Debrief
          takeaways={[
            "Crime snapshots without temporal context are worse than useless — they actively mislead decision-makers.",
            "Moving averages and time series decomposition filter seasonal noise from genuine trends.",
            "COMPSTAT institutionalises trend analysis but creates perverse incentives for data manipulation.",
            "Displacement and diffusion of benefits are two sides of the same coin — enforcement pressure always produces a response.",
            "Reporting changes, policy shifts, and demographic trends can create phantom crime trends that have nothing to do with criminal behaviour.",
            "The base rate fallacy causes analysts to overreact to percentage changes in rare crimes while ignoring meaningful shifts in common ones.",
            "Always audit the denominator, the reporting mechanism, and the seasonal baseline before declaring a trend.",
          ]}
          humorSummary="Is crime up? Down? Sideways? Trick question — you didn't check the denominator."
        />

        {/* ---- WhatsNext Links ---- */}
        <WhatsNext
          anotherTopic={{
            title: "Hot Spot Analysis",
            description: "Learn how to identify and analyse geographic crime clusters using spatial statistics and mapping techniques.",
            path: "/topics/hot-spot-analysis",
          }}
          moreLearning={{
            title: "Crime Series Analysis",
            description: "Connect the dots between individual crime incidents to identify serial offending patterns.",
            path: "/topics/crime-series-analysis",
          }}
        />
      </MicroLesson>
    </LessonContainer>
  )
}
