import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Threat Assessment Models - The Intel Analyst Academy",
  description: "Explore structured threat assessment models including DHS NTAS, CARVER, and OCTAVE, and learn how qualitative and quantitative approaches differ for security analysis.",
}

const topicContent = `import type { Metadata } from "next"
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

In the previous lesson, you learned what threat assessment is. Now it is time to get
specific. A threat assessment model is a structured framework that ensures consistency,
rigour, and reproducibility in your analysis. Without a model, every assessment is a
snowflake -- unique, drifting, and likely to melt under scrutiny.

This lesson covers why structured models matter, surveys three widely used frameworks,
examines the qualitative-versus-quantitative debate, and introduces the 4 Ds mitigation
framework. By the end, you will know which tool to reach for and when.

{/* ---- Section 1: Why Structured Models ---- */}

Here is an uncomfortable fact: the human brain is terrible at estimating risk. We
overestimate vivid, dramatic threats (sharks, terrorism, your neighbour's new drone)
and underestimate boring, statistically probable ones (heart disease, car accidents,
unpatched servers). This is called the **availability heuristic**, and it
is one of many cognitive biases that corrupt unstructured threat assessment.

### Common Biases in Unstructured Assessment

- **Availability heuristic:** You rate a threat as more likely because you
can recall recent examples easily. A terrorist attack last week makes every suitcase
look suspicious.

- **Anchoring:** The first piece of information you hear (the "anchor")
disproportionately influences your final assessment. If someone says "this is high
risk" first, you will spend the rest of the assessment justifying that label.

- **Confirmation bias:** You seek evidence that supports your existing
belief about a threat and ignore evidence that contradicts it. It is comfortable. It
is also wrong.

- **Overconfidence:** The more you know about a topic, the more likely you
are to overestimate the accuracy of your predictions. Expertise breeds certainty, not
accuracy.

Structured models force you to slow down, consider factors systematically, and document
your reasoning. They do not guarantee the right answer, but they dramatically reduce the
odds of a wrong one caused by your own brain working against you.

Your brain is a remarkable pattern-recognition machine. It is also the reason people
see faces in clouds and threats in everything after watching one episode of a spy drama.
Models are the calibration.

Before you apply any model, write down your raw, unstructured assessment first. Then
run the model and compare. The gap between your gut feeling and the model output is
where your biases live. Pay attention to that gap.

{/* ---- Section 2: A Toolbox of Models ---- */}

There are dozens of threat assessment models. Most of them are variations on the same
themes. Here are three that cover the spectrum from tactical to strategic, physical to
cyber. Know them, use them, do not confuse them.

### DHS NTAS -- National Terrorism Advisory System

Developed by the U.S. Department of Homeland Security, NTAS communicates terrorism risk
to the public and government agencies. It uses two levels: **Elevated**
(credible threat with no specific target) and **Imminent** (credible,
specific, and impending). It replaced the famously mocked colour-coded system (remember
code orange?). NTAS is public-facing, broad, and intentionally simple. Use it when you
need to communicate threat levels to a non-specialist audience quickly.

### CARVER -- Criticality, Accessibility, Recuperability, Vulnerability, Effect, Recognisability

Originally developed by the U.S. military for target selection, CARVER is now widely used
for critical infrastructure protection and vulnerability assessment. Each factor is scored
on a 1-to-5 scale:

- **Criticality:** How essential is the target to operations?
- **Accessibility:** How easy is it to reach?
- **Recuperability:** How long to recover after an attack?
- **Vulnerability:** How susceptible is it to attack?
- **Effect:** What is the cascading impact?
- **Recognisability:** Is the target easily identifiable?

CARVER is excellent for prioritising which assets to protect. It is quantitative enough
to rank options, qualitative enough to stay useful when data is sparse. Best for physical
infrastructure and node-based systems.

### OCTAVE -- Operationally Critical Threat, Asset, and Vulnerability Evaluation

Developed by Carnegie Mellon University, OCTAVE is a risk-based strategic assessment
framework for cybersecurity. Unlike CARVER, which centres on the target, OCTAVE centres
on the organisation: what assets matter most, what threats face them, and what
vulnerabilities exist in the current security posture. OCTAVE is self-directed -- the
organisation runs it internally using a structured workshop format. It is thorough,
documentation-heavy, and best for medium-to-large enterprises conducting annual risk
reviews. It is not useful for quick tactical decisions.

OCTAVE is the model you use when you have time, a budget, and someone willing to read a
200-page risk report. CARVER is what you use when you need an answer before lunch.

The best analysts maintain a mental (or literal) checklist of models and choose based
on three variables: time available, audience sophistication, and the nature of the
threat (physical, cyber, or hybrid). If you only know one model, you will misapply it.

{/* ---- Section 3: Qualitative vs. Quantitative ---- */}

Every threat assessment model eventually confronts the same question: do you express
your findings in words or numbers? The answer, as with most things in intelligence, is
"it depends."

### Qualitative Assessment

Qualitative models use descriptive labels: Low, Medium, High, Critical. They rely on
expert judgment, scenario analysis, and structured brainstorming. The advantage is
flexibility -- when data is scarce or the situation is novel, qualitative methods adapt.
The disadvantage is inconsistency: one analyst's "High" is another analyst's
"Medium," and neither can prove the other wrong.

### Quantitative Assessment

Quantitative models assign numerical values to threat factors: probabilities, expected
losses, frequency rates. The advantage is precision and reproducibility -- you can audit
the numbers, test assumptions, and generate statistical confidence intervals. The
disadvantage is false precision: plugging bad data into a formula produces a precise
wrong answer. Quant models also struggle with rare events where historical data does
not exist.

Qualitative

"The likelihood of an insider threat is assessed as Moderate, with High impact
on mission-critical systems."

Quantitative

"Probability: 0.34 (95% CI: 0.21 - 0.47). Expected annual loss: $2.4 million."

### The Practical Compromise

Most effective organisations use a hybrid approach. They score factors numerically
(CARVER's 1-to-5 scale, for example) but express the final judgment in qualitative
terms. This gives you the rigour of numbers during the analysis and the clarity of
words in the briefing. The numbers discipline the thinking; the words communicate the
meaning.

A quantitative model with bad data is like a GPS that does not know where the roads are.
It will give you precise turn-by-turn directions to a cliff, and you will arrive exactly
on time.

{/* ---- Section 4: The 4 Ds ---- */}

Once you have assessed the threat, you need to do something about it. The 4 Ds framework
provides a structured approach to mitigation. It originated in physical security but
applies equally to cyber, operational, and strategic contexts.

### Deter

Make the adversary decide the target is not worth the effort. Deterrence works by
increasing the perceived cost of an attack. Visible security measures, publicised
incident response capabilities, and strong legal frameworks all contribute. Deterrence
is psychological -- it works on the adversary's perception, not the physical
environment. It is the cheapest D if you can pull it off, and the hardest to measure.

### Detect

If deterrence fails, you need to know an attack is happening. Detection covers
surveillance systems, intrusion detection sensors, log monitoring, human intelligence,
and any other mechanism that tells you something is wrong. The faster you detect, the
more options you have for the next two Ds.

### Delay

Once detected, you need to slow the adversary down. Locks, access controls,
authentication layers, hardened networks, physical barriers -- anything that buys time.
Delay is useless without detection because you do not know you are in a race. But with
detection, delay creates the window for response.

### Defend

The final layer. When an adversary has penetrated your deterrence, evaded or passed
your detection, and crossed your delay barriers, you must be able to stop them.
Defend covers active response: security team intervention, network containment
measures, lockdown procedures, and neutralisation of the threat. It is the most
resource-intensive D and the one you hope never to use.

Do not invest equally in all 4 Ds. Your threat assessment should tell you where the
gaps are. If you have strong detection and weak delay, put resources into access
control. If you have strong deterrence but poor detection, you are flying blind. Let
the assessment drive the allocation.

{/* ---- Field Exercise ---- */}

Scenario: The Regional Data Centre

You are the threat assessment lead for a regional bank with a data centre that processes
all transactions for 14 branches across three states. The security team has reported
unusual network reconnaissance traffic originating from an IP address linked to a known
cybercrime forum. The data centre has physical access controls, standard antivirus, and
a perimeter fence. There is no dedicated security operations centre. Incident response
is handled by the IT team during business hours.

**Your task:** Apply two models to this scenario.

- **Using CARVER:** Score the data centre on all six factors (1-5 scale)
and identify the top priority vulnerability.

- **Using the 4 Ds:** Evaluate the bank's current posture across deter,
detect, delay, and defend. Which D needs the most attention?

Hint: The lack of a SOC and after-hours incident response means one of the Ds is
essentially missing. Which one, and what would you recommend as the first fix?

{/* ---- Debrief ---- */}

)
`

export default function ThreatassessmentmodelsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Threat Assessment Models"
        subtitle="Explore structured threat assessment models including DHS NTAS, CARVER, and OCTAVE, and learn how qualitative and quanti"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="threat-assessment-models" />
      </MicroLesson>
    </LessonContainer>
  )
}
