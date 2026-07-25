import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clear Writing Principles - The Intel Analyst Academy",
  description: "Master the principles of clear, effective writing for intelligence reports including active voice, plain language, and sentence surgery techniques.",
}

const topicContent = `"Master the principles of clear, effective writing for intelligence reports including active voice, plain language, and sentence surgery techniques.",

Clear writing is the difference between intelligence that drives action and intelligence
that drives your reader to a nap. In this lesson, you will learn how to strip the fog
from your prose, wield active voice like a scalpel, and apply the "grandmother
test" to every sentence you write. Your analysis deserves to be understood -- let's
make sure it is.

{/* ---- Section 1: Active vs Passive Voice ---- */}

If there is a single change that will improve your intelligence writing overnight, it is
switching from passive to active voice. Passive voice hides the actor, buries the action,
and adds unnecessary words. Active voice is direct, concise, and tells the reader exactly
who did what.

### What Is Active Voice?

In active voice, the **subject performs the action**. In passive voice, the
subject receives the action -- or worse, the actor disappears entirely. Compare:

Passive (Avoid)

"The facility was assessed to have been used for weapons storage by the militia."

Active (Better)

"The militia used the facility for weapons storage."

Notice how the active version is **eight words shorter** and immediately tells
the reader who did what. In intelligence writing, this matters enormously: your reader
needs to know the actor, the action, and the target as quickly as possible.

Passive voice is the literary equivalent of a suspect saying "mistakes were made."
Analysts should not sound like politicians at a press conference.

### When Passive Voice Is Acceptable

There are rare cases where passive voice is the right call:

- **The actor is unknown:** "The embassy was attacked at 0300 hours."
- **The actor is less important than the action:** "The intelligence was declassified in 2019."
- **Deliberate source protection:** When naming the actor would compromise a source.

Try the "by zombies" test: if you can add "by zombies" after the verb and the
sentence still makes grammatical sense, it is passive voice.
"The report was written [by zombies]" -- passive.
"The analyst wrote the report" -- active. No zombies possible.

{/* ---- Section 2: The Grandmother Test & Plain Language ---- */}

Intelligence analysts love jargon. Acronyms multiply like rabbits, and polysyllabic
words make us feel smart. But here is the uncomfortable truth: if your grandmother
cannot understand the gist of your report, neither can most policymakers.

### The Grandmother Test

Before you finalize any paragraph, imagine reading it to a sharp but non-specialist
relative. Could they follow the logic? Could they tell you the main point? If not, you
have a clarity problem -- not an audience problem.

Fails the Test

"The SIGINT-derived TECHINT indicators corroborate multi-INT fusion
assessments regarding the adversary's C4ISR modernization trajectory."

Passes the Test

"Intercepted communications confirm that the adversary is upgrading its
military command-and-control systems."

### The Jargon Trap

Jargon is a shortcut between specialists. It becomes a trap when you forget that your
primary audience -- the decision-maker -- may not share your specialty. Common offenders:

- **"Utilize"** instead of "use"
- **"Operationalize"** instead of "put into practice"
- **"Facilitate"** instead of "help" or "enable"
- **"Commence"** instead of "begin" or "start"
- **"Approximately"** instead of "about"
- **"In the vicinity of"** instead of "near"

If your report sounds like it was written by a thesaurus that swallowed a government
manual, it is time to simplify.

Create a personal "banned words" list. Every time you catch yourself writing a
bloated word, add it to the list and note its simpler replacement. Over time, plain
language becomes your default setting.

{/* ---- Section 3: Sentence Surgery ---- */}

Good intelligence writing is lean. Every word must earn its place. Sentence surgery is
the practice of systematically trimming fat from your prose without losing substance.

### Technique 1: Kill the Throat-Clearers

Phrases like "It is important to note that," "It should be emphasized that," and
"It is worth mentioning that" add zero information. They are verbal throat-clearing.
Cut them and start with the actual point.

Before Surgery

"It is important to note that the threat actor has demonstrated an increasing
capability to conduct sophisticated cyber operations against critical
infrastructure targets in the region."

31 words

After Surgery

"The threat actor's cyber capability against regional critical infrastructure
is growing."

13 words -- 58% shorter

### Technique 2: One Idea Per Sentence

If a sentence contains the word "and" more than once, or uses a semicolon to glue two
independent thoughts together, consider splitting it. Short sentences are easier to
parse, especially under time pressure.

### Technique 3: Front-Load the Key Information

Place the most important information at the beginning of each sentence and paragraph.
Intelligence readers scan -- they do not read every word. If your key judgment is buried
in the middle of a 40-word sentence, it will be missed.

Buried Lead

"Based on our comprehensive review of multiple intelligence streams over the
past quarter, we assess that the regime will likely test a ballistic missile
within 30 days."

Lead First

"The regime will likely test a ballistic missile within 30 days, based on
multiple intelligence streams reviewed over the past quarter."

Read your draft aloud. If you run out of breath before reaching the period, the
sentence is too long. If you stumble over a word, it is probably the wrong word.
Your ear catches what your eyes miss.

{/* ---- Section 4: Writing for Your Audience ---- */}

The same intelligence can be presented in vastly different ways depending on the
audience. A tactical military briefing reads nothing like a presidential daily brief,
and neither reads like a Congressional notification. Tailoring your writing to your
reader is not optional -- it is a core analytical skill.

### Audience Tiers

- **Senior Executives / Policymakers:** Want the bottom line, key
judgments, and implications. Little patience for methodology or sourcing details.
Keep it to one page when possible.

- **Mid-Level Managers / Operational Planners:** Need enough detail to
act. Include the "so what" and the "now what." Two to five pages is typical.

- **Peer Analysts / Subject Matter Experts:** Want the full evidence
trail, methodology, and confidence levels. Longer-form is acceptable here.

### The Specificity Imperative

Vague language is the enemy of good intelligence. Every time you write "some,"
"many," "recently," or "significant," ask yourself: can I be more precise?

Vague

"Several incidents were recently reported in the area."

Specific

"Local police reported four IED detonations in Helmand Province between
1 and 7 March 2025."

Writing "a significant number of troops" is the analytical equivalent of telling
your boss "I did some work today." How many troops? Where? When? Your reader
should not have to play 20 questions with your report.

)
`

export default function ClearwritingprinciplesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Clear Writing Principles"
        subtitle="Master the principles of clear, effective writing for intelligence reports including active voice, plain language, and s"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="clear-writing-principles" />
      </MicroLesson>
    </LessonContainer>
  )
}
