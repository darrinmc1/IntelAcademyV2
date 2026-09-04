import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What is Crime Series Analysis? - The Intel Analyst Academy",
  description:
    "Learn crime series analysis as a method for testing whether incidents share an offender or a method — without turning every resemblance into a serial.",
}

const topicContent = `Crime series analysis is the work of deciding whether two or more crimes are usefully treated as one problem: same offender, same crew, or same method worth a single response. It is not a TV profile. It is a linkage argument with evidence, doubt, and a next action for investigators.

If you cannot say why the third burglary belongs with the first two, you do not have a series. You have a pile and a hope.

## What a Series Is

A series is a set of incidents you assess as linked, with a stated basis and a confidence. The basis is usually a mix of the following. One similar lock pick is not a series. A pattern that survives a skeptic might be.

- **Modus operandi.** The practical method: entry, timing, tools, victim selection, getaway. MO can change when it stops working. Do not marry it.
- **Signature.** Behavior that is not required to complete the crime and may reflect a need or a ritual. Signature is rarer than briefings imply. Do not invent one to feel complete.
- **Place and time.** A hunting ground and a clock. Proximity helps. It also describes opportunistic weather.
- **Victimology.** Shared victim traits that are not explained by the location alone.
- **Forensic or digital links.** Physical evidence, a repeated account, a repeated device. These are the adults in the room when MO stories get literary.

> Linkage is a hypothesis. Treat it like one. The cost of a false series is wasted patrols and a real offender you stopped looking for.

## Why Shops Bother

- **One problem, one owner.** Ten files become a single investigative theory with a name and a lead.
- **Prediction with humility.** If the pattern is real, you can say where and when the next attempt is more likely — and list what would falsify that.
- **Cold cases.** A new incident can re-open an old one if the link is more than a vibe.
- **Prevention that is not a poster.** Lighting, patrol timing, and victim warnings aimed at a real method beat a generic "be aware."

None of this requires you to "get inside their head." It requires you to get inside the file.

## A Process That Can Lose

- **Intake.** Normalize the fields: time, place, entry, property, victim, evidence. Garbage fields make garbage clusters.
- **Compare in pairs, then grow.** Do not start with twelve incidents and a highlighter. Start with the two that look most alike and try to break the link.
- **Write the hypothesis.** "Same two-person crew, commercial rear-entry after 0100, van, no signature established." If you cannot write it, you cannot test it.
- **Seek disconfirmers.** A series that cannot die is a brand. Look for the incident that shares the neighborhood and nothing else.
- **Produce the action.** Surveillance window, forensic request, victim canvass, or a decision that these two are not a series. Analysis that ends at "interesting" is a stall.

Worked caution. Five shed break-ins on a hot week, all unlocked, all bikes. That may be a series. It may also be a weather-and-opportunity cluster. Your product should say which facts would tell them apart (tool marks, a repeated path, a camera still) instead of leaping to a nameable offender.

## Failure Modes

- **Over-linking.** You want a serial because it is a better story than five opportunists.
- **Under-linking.** You refuse a link because the sixth job used a different window. Offenders adapt. So do locksmiths.
- **MO as identity.** Methods spread. Copycats exist. So do training videos.
- **Data quality.** If time of offense is "sometime Tuesday," your temporal pattern is a novel.
- **Bias.** Availability (the last ugly case) and confirmation (the pin board you already photographed) will try to write this for you.

Stay on the legal side of the street. This lesson does not teach you how to commit crimes, how to avoid cameras, or how to build a better MO. It teaches you how to read a file without becoming the file's novelist.

## Practice

Three incidents: rear-door commercial burglaries, 0130–0300, two adjacent blocks, one shared tool mark, one incident with a smashed front window and a different property type. Write a series hypothesis that includes two incidents and excludes one, with the reason. Then write the collection that would make you change your mind.

If you included all three to be "complete," you prioritized neatness over truth. Completeness is for the appendix.

## Next Lessons

Crime linkage, MO analysis, repeat-offender profiling, and hot-spot work sit nearby. Use series analysis when the question is "same problem?" Use hot spots when the question is "same place, maybe different people." Mixing the two is how a neighborhood gets a nickname it did not earn.
`

export default function WhatIsCrimeSeriesAnalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="What is Crime Series Analysis?"
        subtitle="A series is a tested link between incidents — not a mood board of similar nights."
        humorSubtitle="If every burglary is 'probably the same guy,' you have a branding problem, not a series."
        readTime={22}
        difficulty="Beginner"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Write the hypothesis so it can lose. A series that cannot die is a story."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="what-is-crime-series-analysis" />
      </MicroLesson>
    </LessonContainer>
  )
}
