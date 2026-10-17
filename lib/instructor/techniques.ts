/**
 * The Chief's built-in notes. Used when no AI key is configured (or the model
 * call fails) so the instructor still teaches something true instead of
 * shrugging. Each entry links to lessons that exist (see lessons.test.ts).
 */
export type Technique = {
  id: string
  name: string
  /** How a student would ask about it — used for follow-up chips. */
  ask: string
  keywords: string[]
  explanation: string
  lessons: string[]
}

export const TECHNIQUES: Technique[] = [
  {
    id: "admiralty",
    name: "The Admiralty system",
    ask: "Explain the Admiralty system",
    keywords: ["admiralty", "nato", "grade", "grading", "reliability", "credibility", "source evaluation", "evaluate a source", "a1", "b2", "f6"],
    explanation: `The Admiralty (NATO) system grades two things **separately**:

- **Source reliability, A–F** — how far you trust whoever supplied it, based on track record. F means *cannot be judged*, which is not the same as E (*unreliable*). An anonymous caller is F: you know nothing about them, good or bad.
- **Information credibility, 1–6** — how believable this particular item is. 1 means *confirmed by other, independent sources*; 6 means *truth cannot be judged*.

Keeping them apart is the point. A usually reliable informant repeating pub gossip is a perfectly respectable **B3**. A brand-new source whose report checks out against three others can be **F1**.

The usual mistake is letting one grade drag the other along. Don't.`,
    lessons: ["/topics/evidence-based-conclusions", "/topics/multi-source-integration"],
  },
  {
    id: "circular",
    name: "Circular reporting and corroboration",
    ask: "What's circular reporting?",
    keywords: ["circular", "corroborat", "independent", "same source", "echo", "double count", "confirm"],
    explanation: `Corroboration only counts when the sources are **independent**. If two reports trace back to the same original — one rumour, one press release, one analyst's blog — you have one report wearing two hats.

Tell-tale signs:
- Near-identical wording or the same oddly specific detail.
- Second-hand language: "word around town is…", "officials say…".
- A media report citing "private sector analysis and partner reporting" when you're already holding both.

Before you upgrade anything to credibility 1, ask of each source: *how could this person know?* If the answer is "they heard it from the other one", you haven't corroborated anything. You've counted twice.`,
    lessons: ["/topics/multi-source-integration", "/topics/evidence-based-conclusions"],
  },
  {
    id: "ach",
    name: "Analysis of Competing Hypotheses",
    ask: "Explain ACH with an example",
    keywords: ["ach", "competing hypotheses", "hypothes", "matrix", "heuer", "alternative explanation"],
    explanation: `ACH is a structured way of proving yourself wrong before someone else does.

1. List **every reasonable hypothesis** — including the boring one ("these events are unrelated").
2. List the evidence, then work **across the rows**: take one item and ask whether it's consistent (C), inconsistent (I) or neutral (N) with *each* hypothesis.
3. Look for **diagnostic** evidence — items that are consistent with some hypotheses and inconsistent with others. Evidence that fits everything tells you nothing, however reassuring it feels.
4. The hypothesis with the **fewest inconsistencies** survives, not the one with the most support.
5. Ask how sensitive that is: if one weak report is doing all the work, say so.

If your favourite hypothesis wins without a scratch, check you actually ran the matrix.`,
    lessons: ["/topics/analysis-competing-hypotheses", "/topics/cognitive-biases"],
  },
  {
    id: "diagnosticity",
    name: "Diagnostic evidence",
    ask: "What makes evidence diagnostic?",
    keywords: ["diagnostic", "diagnosticity", "non-diagnostic", "fits everything", "useful evidence"],
    explanation: `Evidence is **diagnostic** when it helps you choose between hypotheses — consistent with some, inconsistent with others.

A suspect's accountant explaining that everything is fine is usually **non-diagnostic**: an honest business and a laundering front would both send that letter. It feels like information. It isn't.

The single detail that one hypothesis can't explain — a junction box found locked and undamaged, a shipment that weighs a third of what it should — is often worth more than five reports that agree with each other. Hunt for it.`,
    lessons: ["/topics/analysis-competing-hypotheses", "/topics/evidence-based-conclusions"],
  },
  {
    id: "gaps",
    name: "Intelligence gaps",
    ask: "What makes a good intelligence gap?",
    keywords: ["gap", "gaps", "unknown", "missing information", "what we don't know", "collection requirement"],
    explanation: `An intelligence gap is a specific unknown that would **change your answer** if you filled it. "More information needed" is not a gap; it's a shrug.

Good gaps are:
- **Specific** — "Who owns the van with the partial plate ZQ-4?" not "vehicle details".
- **Decision-relevant** — if the answer couldn't move your judgment, drop it.
- **Collectable** — pair each one with a realistic way to fill it (a records check, an interview, a forensic test).

Rank them. The gap that would swing your lead judgment goes first.`,
    lessons: ["/topics/intelligence-gap-analysis", "/topics/collection-planning-process-for-intel-analysts", "/topics/writing-collection-tasks"],
  },
  {
    id: "estimative",
    name: "Estimative language and confidence",
    ask: "Probability vs confidence — what's the difference?",
    keywords: ["estimative", "likely", "probability", "kent", "confidence", "how sure", "words of estimative", "certain"],
    explanation: `Two separate questions, two separate answers:

- **How likely?** Use the academy scale: almost certain (95–99%), very likely (80–93%), likely (60–75%), roughly even chance (45–55%), unlikely (20–40%), very unlikely (5–15%), remote (1–5%). Pick one and mean it.
- **How confident?** High, moderate or low describes your **evidence base** — sourcing, corroboration, gaps — not the probability.

You can be highly confident something is unlikely. You can think something is likely while holding low confidence because it rests on one report.

Avoid "may", "might" and "could": they're technically never wrong, which is exactly why they're useless.`,
    lessons: ["/topics/estimative-language", "/topics/conclusion-development"],
  },
  {
    id: "bluf",
    name: "BLUF and key judgments",
    ask: "How do I write a good BLUF?",
    keywords: ["bluf", "bottom line", "key judgment", "key judgement", "executive summary", "first paragraph", "write the assessment", "assessment structure"],
    explanation: `**BLUF — bottom line up front.** Your first sentence answers the question you were asked, with a probability and a confidence level. Backstory goes later or nowhere.

Weak: *"This report examines five incidents at Pier 9 between 2 and 20 August."*
Better: *"We assess the five Pier 9 break-ins are likely the work of one group (moderate confidence)."*

Then **key judgments**: two to four assessments, each with estimative language, a confidence level and the evidence it rests on. A judgment is something you *assess*; if it's just a fact from a report, it belongs in the evidence, not the judgments.

Test: if your reader stops after the first paragraph — and they will — do they have what they need?`,
    lessons: ["/topics/executive-summaries-mastery", "/topics/intelligence-report-components", "/topics/intelligence-briefings"],
  },
  {
    id: "indicators",
    name: "Indicators and warnings",
    ask: "How do I write good indicators?",
    keywords: ["indicator", "warning", "i&w", "change my mind", "what would change", "signpost", "outlook", "forecast"],
    explanation: `Indicators are **observable things** that would raise or lower your judgment if they happened. They turn a one-off assessment into something your reader can monitor.

Write them as events, not vibes:
- Weak: *"Further developments should be watched."*
- Better: *"A ransom demand to any of the three utilities would point to a profit-motivated actor."*

Aim for indicators on **both sides** of your judgment — what you'd see if you're right, and what you'd see if you're wrong. If you can't name anything that would change your mind, that's not confidence; that's a closed mind.`,
    lessons: ["/topics/indicators-warnings", "/topics/strategic-forecasting"],
  },
  {
    id: "bias",
    name: "Cognitive biases",
    ask: "Which biases trip analysts up most?",
    keywords: ["bias", "anchoring", "confirmation", "mirror imaging", "groupthink", "satisficing"],
    explanation: `The usual suspects in analysis:

- **Anchoring** — the first plausible story (often the first report you read) becomes the frame for everything after it.
- **Confirmation bias** — you collect evidence that fits and explain away what doesn't.
- **Satisficing** — you stop at the first answer that seems good enough.
- **Mirror imaging** — assuming the other side thinks like you.

Biases don't go away because you know about them. Structure beats willpower: run ACH, write down what would prove you wrong *before* you look, and get someone to argue the other side.`,
    lessons: ["/topics/cognitive-biases", "/topics/analysis-competing-hypotheses"],
  },
  {
    id: "link",
    name: "Link analysis",
    ask: "How do I do link analysis well?",
    keywords: ["link analysis", "network", "association", "chart", "entity", "relationship", "connection"],
    explanation: `Link analysis maps **entities** (people, companies, vehicles, accounts, phones) and the **relationships** between them, so you can see structure a list hides.

Two habits make it trustworthy:
- **Label every link with its basis and strength** — "paid $95,000 on 12 Jun (bank record)" beats an unlabelled line.
- **Keep confirmed and suspected links visually distinct.** A chart where a rumour and a bank transfer look identical will mislead everyone who reads it, including you.

Watch for name collisions: two entities sharing a name is a lead to check, not a link to draw.`,
    lessons: ["/topics/introduction-to-link-analysis", "/topics/financial-network-mapping"],
  },
  {
    id: "collection",
    name: "Collection planning",
    ask: "How do I turn gaps into collection tasks?",
    keywords: ["collection plan", "collection", "tasking", "requirement", "collect", "task a collector"],
    explanation: `Collection planning turns your gaps into **tasks**. For each gap: what exactly do you need, who or what can get it, how long will it take, and what will you do with the answer?

Prioritise by impact — the gap that would swing your lead judgment first — then by time pressure. CCTV that's deleted after 30 days outranks a records check that will still be there next month.

Write tasks a collector can act on without ringing you: specific, bounded, and clear about why it matters.`,
    lessons: ["/topics/collection-planning-process-for-intel-analysts", "/topics/writing-collection-tasks", "/topics/intelligence-requirements"],
  },
]
