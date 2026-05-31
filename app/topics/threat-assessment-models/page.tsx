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
  title: "Threat Assessment Models | The Intel Analyst Academy",
  description:
    "Explore structured threat assessment models including DHS NTAS, CARVER, and OCTAVE, and learn how qualitative and quantitative approaches differ for security analysis.",
}

export default function ThreatAssessmentModelsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Threat Assessment Models"
        subtitle="Because 'seems dangerous' Is Not a Methodology"
        humorSubtitle="There's more than one way to measure danger. Pick the right ruler."
        category="Threat Assessments"
        difficulty="Intermediate"
        mascot="threat-assessment"
        mascotMessage="Ah, models. I have opinions. Some models are like Swiss Army knives -- versatile, but you will cut yourself if you use the wrong tool. Pick wisely, and stop trying to use OCTAVE when all you need is CARVER."
        readTime={15}
      >
        <MissionBriefing humorText="The human brain is excellent at spotting patterns. It is also excellent at spotting patterns that do not exist. Models help with that.">
          <p className="mb-4">
            In the previous lesson, you learned what threat assessment is. Now it is time to get
            specific. A threat assessment model is a structured framework that ensures consistency,
            rigour, and reproducibility in your analysis. Without a model, every assessment is a
            snowflake -- unique, drifting, and likely to melt under scrutiny.
          </p>
          <p>
            This lesson covers why structured models matter, surveys three widely used frameworks,
            examines the qualitative-versus-quantitative debate, and introduces the 4 Ds mitigation
            framework. By the end, you will know which tool to reach for and when.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Why Structured Models ---- */}
        <DeepDive title="Why We Don't Wing It: The Case for Structured Models">
          <p className="mb-4">
            Here is an uncomfortable fact: the human brain is terrible at estimating risk. We
            overestimate vivid, dramatic threats (sharks, terrorism, your neighbour&apos;s new drone)
            and underestimate boring, statistically probable ones (heart disease, car accidents,
            unpatched servers). This is called the <strong>availability heuristic</strong>, and it
            is one of many cognitive biases that corrupt unstructured threat assessment.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Common Biases in Unstructured Assessment</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Availability heuristic:</strong> You rate a threat as more likely because you
              can recall recent examples easily. A terrorist attack last week makes every suitcase
              look suspicious.
            </li>
            <li>
              <strong>Anchoring:</strong> The first piece of information you hear (the &quot;anchor&quot;)
              disproportionately influences your final assessment. If someone says &quot;this is high
              risk&quot; first, you will spend the rest of the assessment justifying that label.
            </li>
            <li>
              <strong>Confirmation bias:</strong> You seek evidence that supports your existing
              belief about a threat and ignore evidence that contradicts it. It is comfortable. It
              is also wrong.
            </li>
            <li>
              <strong>Overconfidence:</strong> The more you know about a topic, the more likely you
              are to overestimate the accuracy of your predictions. Expertise breeds certainty, not
              accuracy.
            </li>
          </ul>

          <p className="mb-4">
            Structured models force you to slow down, consider factors systematically, and document
            your reasoning. They do not guarantee the right answer, but they dramatically reduce the
            odds of a wrong one caused by your own brain working against you.
          </p>

          <JokeAside>
            Your brain is a remarkable pattern-recognition machine. It is also the reason people
            see faces in clouds and threats in everything after watching one episode of a spy drama.
            Models are the calibration.
          </JokeAside>

          <ProTip>
            <p>
              Before you apply any model, write down your raw, unstructured assessment first. Then
              run the model and compare. The gap between your gut feeling and the model output is
              where your biases live. Pay attention to that gap.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: A Toolbox of Models ---- */}
        <DeepDive title="A Toolbox of Models: DHS NTAS, CARVER, OCTAVE">
          <p className="mb-4">
            There are dozens of threat assessment models. Most of them are variations on the same
            themes. Here are three that cover the spectrum from tactical to strategic, physical to
            cyber. Know them, use them, do not confuse them.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">DHS NTAS -- National Terrorism Advisory System</h3>
          <p className="mb-4">
            Developed by the U.S. Department of Homeland Security, NTAS communicates terrorism risk
            to the public and government agencies. It uses two levels: <strong>Elevated</strong>
            (credible threat with no specific target) and <strong>Imminent</strong> (credible,
            specific, and impending). It replaced the famously mocked colour-coded system (remember
            code orange?). NTAS is public-facing, broad, and intentionally simple. Use it when you
            need to communicate threat levels to a non-specialist audience quickly.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">CARVER -- Criticality, Accessibility, Recuperability, Vulnerability, Effect, Recognisability</h3>
          <p className="mb-4">
            Originally developed by the U.S. military for target selection, CARVER is now widely used
            for critical infrastructure protection and vulnerability assessment. Each factor is scored
            on a 1-to-5 scale:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-300 text-sm">
            <li><strong>Criticality:</strong> How essential is the target to operations?</li>
            <li><strong>Accessibility:</strong> How easy is it to reach?</li>
            <li><strong>Recuperability:</strong> How long to recover after an attack?</li>
            <li><strong>Vulnerability:</strong> How susceptible is it to attack?</li>
            <li><strong>Effect:</strong> What is the cascading impact?</li>
            <li><strong>Recognisability:</strong> Is the target easily identifiable?</li>
          </ul>
          <p className="mb-4">
            CARVER is excellent for prioritising which assets to protect. It is quantitative enough
            to rank options, qualitative enough to stay useful when data is sparse. Best for physical
            infrastructure and node-based systems.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">OCTAVE -- Operationally Critical Threat, Asset, and Vulnerability Evaluation</h3>
          <p className="mb-4">
            Developed by Carnegie Mellon University, OCTAVE is a risk-based strategic assessment
            framework for cybersecurity. Unlike CARVER, which centres on the target, OCTAVE centres
            on the organisation: what assets matter most, what threats face them, and what
            vulnerabilities exist in the current security posture. OCTAVE is self-directed -- the
            organisation runs it internally using a structured workshop format. It is thorough,
            documentation-heavy, and best for medium-to-large enterprises conducting annual risk
            reviews. It is not useful for quick tactical decisions.
          </p>

          <JokeAside>
            OCTAVE is the model you use when you have time, a budget, and someone willing to read a
            200-page risk report. CARVER is what you use when you need an answer before lunch.
          </JokeAside>

          <ProTip>
            <p>
              The best analysts maintain a mental (or literal) checklist of models and choose based
              on three variables: time available, audience sophistication, and the nature of the
              threat (physical, cyber, or hybrid). If you only know one model, you will misapply it.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 3: Qualitative vs. Quantitative ---- */}
        <DeepDive title="Qualitative vs. Quantitative: Words vs. Numbers">
          <p className="mb-4">
            Every threat assessment model eventually confronts the same question: do you express
            your findings in words or numbers? The answer, as with most things in intelligence, is
            &quot;it depends.&quot;
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Qualitative Assessment</h3>
          <p className="mb-4">
            Qualitative models use descriptive labels: Low, Medium, High, Critical. They rely on
            expert judgment, scenario analysis, and structured brainstorming. The advantage is
            flexibility -- when data is scarce or the situation is novel, qualitative methods adapt.
            The disadvantage is inconsistency: one analyst&apos;s &quot;High&quot; is another analyst&apos;s
            &quot;Medium,&quot; and neither can prove the other wrong.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Quantitative Assessment</h3>
          <p className="mb-4">
            Quantitative models assign numerical values to threat factors: probabilities, expected
            losses, frequency rates. The advantage is precision and reproducibility -- you can audit
            the numbers, test assumptions, and generate statistical confidence intervals. The
            disadvantage is false precision: plugging bad data into a formula produces a precise
            wrong answer. Quant models also struggle with rare events where historical data does
            not exist.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Qualitative</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The likelihood of an insider threat is assessed as Moderate, with High impact
                on mission-critical systems.&quot;
              </p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-2">Quantitative</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Probability: 0.34 (95% CI: 0.21 - 0.47). Expected annual loss: $2.4 million.&quot;
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">The Practical Compromise</h3>
          <p className="mb-4">
            Most effective organisations use a hybrid approach. They score factors numerically
            (CARVER&apos;s 1-to-5 scale, for example) but express the final judgment in qualitative
            terms. This gives you the rigour of numbers during the analysis and the clarity of
            words in the briefing. The numbers discipline the thinking; the words communicate the
            meaning.
          </p>

          <JokeAside>
            A quantitative model with bad data is like a GPS that does not know where the roads are.
            It will give you precise turn-by-turn directions to a cliff, and you will arrive exactly
            on time.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 4: The 4 Ds ---- */}
        <DeepDive title="The 4 Ds: Deter, Detect, Delay, Defend">
          <p className="mb-4">
            Once you have assessed the threat, you need to do something about it. The 4 Ds framework
            provides a structured approach to mitigation. It originated in physical security but
            applies equally to cyber, operational, and strategic contexts.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Deter</h3>
          <p className="mb-4">
            Make the adversary decide the target is not worth the effort. Deterrence works by
            increasing the perceived cost of an attack. Visible security measures, publicised
            incident response capabilities, and strong legal frameworks all contribute. Deterrence
            is psychological -- it works on the adversary&apos;s perception, not the physical
            environment. It is the cheapest D if you can pull it off, and the hardest to measure.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Detect</h3>
          <p className="mb-4">
            If deterrence fails, you need to know an attack is happening. Detection covers
            surveillance systems, intrusion detection sensors, log monitoring, human intelligence,
            and any other mechanism that tells you something is wrong. The faster you detect, the
            more options you have for the next two Ds.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Delay</h3>
          <p className="mb-4">
            Once detected, you need to slow the adversary down. Locks, access controls,
            authentication layers, hardened networks, physical barriers -- anything that buys time.
            Delay is useless without detection because you do not know you are in a race. But with
            detection, delay creates the window for response.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Defend</h3>
          <p className="mb-4">
            The final layer. When an adversary has penetrated your deterrence, evaded or passed
            your detection, and crossed your delay barriers, you must be able to stop them.
            Defend covers active response: security team intervention, network containment
            measures, lockdown procedures, and neutralisation of the threat. It is the most
            resource-intensive D and the one you hope never to use.
          </p>

          <ProTip>
            <p>
              Do not invest equally in all 4 Ds. Your threat assessment should tell you where the
              gaps are. If you have strong detection and weak delay, put resources into access
              control. If you have strong deterrence but poor detection, you are flying blind. Let
              the assessment drive the allocation.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Field Exercise ---- */}
        <FieldExercise>
          <p className="mb-4 font-semibold text-amber-300">Scenario: The Regional Data Centre</p>
          <p className="mb-4">
            You are the threat assessment lead for a regional bank with a data centre that processes
            all transactions for 14 branches across three states. The security team has reported
            unusual network reconnaissance traffic originating from an IP address linked to a known
            cybercrime forum. The data centre has physical access controls, standard antivirus, and
            a perimeter fence. There is no dedicated security operations centre. Incident response
            is handled by the IT team during business hours.
          </p>
          <p className="mb-2">
            <strong>Your task:</strong> Apply two models to this scenario.
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-300">
            <li>
              <strong>Using CARVER:</strong> Score the data centre on all six factors (1-5 scale)
              and identify the top priority vulnerability.
            </li>
            <li>
              <strong>Using the 4 Ds:</strong> Evaluate the bank&apos;s current posture across deter,
              detect, delay, and defend. Which D needs the most attention?
            </li>
          </ul>
          <p className="text-xs text-amber-400/60 italic">
            Hint: The lack of a SOC and after-hours incident response means one of the Ds is
            essentially missing. Which one, and what would you recommend as the first fix?
          </p>
        </FieldExercise>

        {/* ---- Debrief ---- */}
        <Debrief
          takeaways={[
            "Unstructured threat assessment is vulnerable to cognitive biases like availability, anchoring, confirmation bias, and overconfidence.",
            "NTAS is for public communication; CARVER is for asset prioritisation; OCTAVE is for organisational cybersecurity risk reviews.",
            "Qualitative methods are flexible but inconsistent; quantitative methods are precise but prone to false precision. Use a hybrid approach.",
            "CARVER scores six factors (Criticality, Accessibility, Recuperability, Vulnerability, Effect, Recognisability) to rank targets or assets.",
            "The 4 Ds framework (Deter, Detect, Delay, Defend) provides a layered mitigation strategy. Let your threat assessment guide resource allocation.",
            "No single model fits every situation. Build a toolkit of models and choose based on time, audience, and threat type.",
          ]}
          humorSummary="Models are training wheels for your brain. Eventually you ride without them. But keep them nearby for steep hills."
        />

        <NextLessonLink
          href="/topics/intelligence-failures"
          title="Intelligence Failures"
          description="Learn from past intelligence failures and how structured analysis could have prevented them."
        />
      </MicroLesson>
    </LessonContainer>
  )
}
