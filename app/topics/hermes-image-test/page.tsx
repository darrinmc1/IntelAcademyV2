import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Coffee-Powered Analyst: A Caffeinated Approach to Intelligence - The Intel Analyst Academy",
  description: "Why intelligence analysts run on coffee and what the rest of the office pretends not to notice. A lighthearted look at the most important classified substance in the IC: caffeine.",
}

const topicContent = `"Why intelligence analysts run on coffee and what the rest of the office pretends not to notice. A lighthearted look at the most important classified substance in the IC: caffeine.",

Every intelligence analyst has a sacred ritual: arrive early, brew the darkest coffee known to man, and stare at a map until patterns appear. This lesson covers the three-stage caffeine intelligence cycle: ingest, analyze, annotate. Warning: contains no actual tradecraft, only vibes and espresso.

Key insight: the best analysts are not the ones who drink the most coffee, but the ones who remember where they put their mugs. This is called situational awareness.
`

export default function HermesImageTestPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="The Coffee-Powered Analyst: A Caffeinated Approach to Intelligence"
        subtitle="Why intelligence analysts run on coffee and what the rest of the office pretends not to notice. A lighthearted look at t"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={5}
        difficulty="Beginner"
        category="Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="hermes-image-test" />
      </MicroLesson>
    </LessonContainer>
  )
}
