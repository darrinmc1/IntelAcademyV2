import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/topics/key-assumptions-check-testing-what-your-judgment-rests-on" },
  title: "Key Assumptions Check: Testing What Your Judgment Rests On",
  description: "Learn to list, test and rate the assumptions behind an assessment so your key judgments and confidence levels hold up when someone pushes on them.",
}

// Added by the Empire weekly lesson workflow on 2026-10-26. Read time is computed from the word count (1496 words at 230 wpm).
const topicContent = `By the end of this lesson you will be able to run a Key Assumptions Check on a draft assessment. You will list what you are taking for granted, test each item, and change your wording, confidence level or collection requests where the test fails. One analyst, one colleague and a whiteboard are enough.

This matters because assessments rarely fail on the facts. They fail on the unstated bridge between the facts and the judgment. A customer will not challenge a bridge nobody told them was there, and by the time they find it, it is usually in a meeting you are not invited to.

## What counts as a key assumption

An assumption is something you believe about the world, an actor, a source or a method that you have not verified, and that your reasoning depends on. It differs from three neighbours:

- A fact is sourced and checked.
- A judgment is your conclusion.
- An intelligence gap is something you know you do not know. An assumption is something you have stopped noticing you do not know.

An assumption is "key" if, when it turns out false, your key judgment would change materially or your confidence in it would drop. "The suspect uses a phone" is an assumption. It is rarely key. "The suspect will keep using the same supplier" may hold up an entire forecast.

Key assumptions tend to fall into five groups:

- Actors: intentions, capability, consistency, rational behaviour. "The group will keep to its past targets."
- Environment: stable conditions, enforcement levels, regulation, market behaviour.
- Sources and data: that they are complete, representative, honest and current.
- Method: that past patterns predict the future, or that two things that appear together are linked.
- The task itself: that the customer's question is the right question.

## When to run the check

The best time is before you finalise a key judgment, while changing the wording still costs nothing. It is also worth running in these situations:

- Your forecast depends on continuity, meaning next month will look like this month.
- A view has been the house position for a long time and nobody remembers the evidence for it.
- New reporting arrives that does not fit, and you notice the urge to explain it away.
- You inherit someone else's assessment. These come with assumptions the way old houses come with wiring: nobody knows who installed it, and it is behind a wall.

The check pairs well with other techniques. It tests the premises that sit under every hypothesis, while Analysis of Competing Hypotheses tests the hypotheses against the evidence. The Cognitive Biases in Intelligence lesson explains why you skip this step when you are busy and confident, which is exactly when you should do it.

## The method

**Step 1: Write the draft judgment in one sentence.** Include the confidence level you currently intend to use. If you cannot state it in one sentence, you are not ready for this exercise yet.

**Step 2: Ask what must be true for this to be right.** Work backwards through your reasoning and list everything. Include the dull items. Aim for eight to fifteen candidates. Do this with someone who has not worked on the project, because they will ask about things you stopped seeing weeks ago.

**Step 3: Select the key ones.** For each candidate, ask whether the judgment would change if it were false. Keep those that pass. Discard the rest without guilt.

**Step 4: Challenge each key assumption.** Ask:

- Why do I believe this?
- What evidence supports it, from which sources, and how old is that evidence?
- Under what conditions would it fail?
- Has it held before, and were the circumstances comparable?

**Step 5: Rate each one.**

- Supported: backed by evidence, ideally from more than one independent source.
- Caveated: plausible, but only under conditions you can name.
- Unsupported: held through habit, convenience or repetition, with no evidence you can point to.

**Step 6: Act on the rating.** Supported assumptions get stated in the product. Caveated ones get their conditions written into the text. Unsupported ones need a decision: collect evidence, reduce confidence, reword the judgment, or remove the dependency.

**Step 7: Record it.** Keep the list, the ratings and the reasons. Add indicators that would tell you an assumption has failed, and review them on a schedule. The Indicators and Warnings lesson covers how to build those.

## Worked example: a suspected mule network

This is an illustration. Maya is a financial crime analyst at a bank. Her draft reads: "We assess with high confidence that the accounts opened last month are a single money mule network run by one organiser." Her evidence is a shared device identifier across the accounts, onboarding times that cluster closely, and funds that arrive and leave within hours.

Maya and her colleague Tom list what must be true:

1. A shared device identifier means one person controls the accounts.
2. Clustered onboarding means coordination.
3. Fast in-and-out movement means laundering.
4. The cluster in our data is the whole network.
5. The device data is reliable.

They test the key items, which are the first, second and fifth.

On the first, a device identifier can be shared by a household, a shared workplace terminal or a public computer. The assumption is caveated. Maya can check whether the same identifier also appears on unrelated, long-standing accounts. If it does, the link is weaker.

On the second, nobody has checked whether the bank ran a sign-up promotion that month. Tom asks the marketing team. One did run. This explains the timing for part of the cluster, so onboarding time stops counting as evidence of coordination. The assumption was unsupported.

On the fifth, the device data comes from one channel only, so Maya states that limitation in the product and files a collection request for the other channels.

The revised judgment: "We assess with moderate confidence that a subset of the accounts is linked through shared device use and rapid fund movement. Timing alone does not indicate coordination." The product lists the three key assumptions with their ratings, and it names an indicator that would raise confidence: repeated identical transfer patterns across accounts that share no promotion.

The customer here may freeze accounts or file reports. A wrongly labelled customer is a real cost, which is why the check sits comfortably inside proportionality as well as tradecraft.

## Checklist before you sign off

- The draft judgment is one sentence with a confidence level.
- Assumptions were listed with at least one person who did not write the draft.
- Each key assumption passes the "if false, does the judgment change?" test.
- Each key assumption has a rating and a reason for that rating.
- Unsupported assumptions have an action: collect, caveat, downgrade or remove.
- Conditions for caveated assumptions appear in the text.
- Indicators that an assumption is failing are recorded, with a review date.
- The product tells the reader which assumptions matter most.

## Common mistakes

- Listing facts as assumptions. If you checked it and have the source, it is a fact. The list should be uncomfortable.
- Writing assumptions that cannot fail. "The situation remains stable" survives anything. Make it specific enough that evidence could disprove it, such as "the supplier continues to operate from the same location."
- Treating age as evidence. A belief held for years may only have been unchallenged for years. Ask what the original evidence was.
- Running it alone. Your own blind spots are structural, so you cannot reliably find them by looking harder.
- Running it and changing nothing. If every assumption comes out supported and the wording stays identical, either the judgment is solid or the challenge was gentle. Check which.
- Confusing it with a source check. Source reliability is one input. The check also covers actor behaviour, environment and method.
- Keeping the results in a drawer. Readers need the key assumptions in the product so they can judge for themselves. The Intelligence Report Fundamentals lesson covers where they fit, and Estimative Language covers how to express confidence once you have changed it.

## Exercise for this week

Pick an assessment you wrote or inherited, ideally one with a forecast in it. Old products are fine, and checking one that has since been overtaken by events is instructive.

1. Write its main judgment in one sentence.
2. List at least ten things that must be true for it to hold.
3. Pick the three most important by the "if false" test.
4. For each, write down the evidence you have, its source and its age. Rate it supported, caveated or unsupported.
5. Ask a colleague to add two assumptions you missed. Note how long they take to find them.
6. Decide what each unsupported item needs: a collection task, a caveat or a lower confidence level.
7. Rewrite the judgment, and add one indicator per key assumption that would show it failing.

Keep the one-page record. Next time you are asked how sure you are, you will have an answer that includes what you checked.
`

export default function KeyAssumptionsCheckTestingWhatYourJudgmentRestsOnPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title={"Key Assumptions Check: Testing What Your Judgment Rests On"}
        subtitle={"Learn to list, test and rate the assumptions behind an assessment so your key judgments and confidence levels hold up when someone pushes on them."}
        humorSubtitle={"Your assessment is only as sound as the thing you forgot you were assuming."}
        readTime={7}
        difficulty={"Intermediate"}
        category={"Analytical Tradecraft"}
        mascot="foundations"
        mascotMessage={"Assumptions are like office wiring. Nobody remembers installing them, and everything stops when one fails."}
      >
        <EnhancedLessonContentLoader content={topicContent} topic="key-assumptions-check-testing-what-your-judgment-rests-on" />
      </MicroLesson>
    </LessonContainer>
  )
}
