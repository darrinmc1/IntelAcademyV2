import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sample Topic - The Intel Analyst Academy",
  description: "Learn about sample topic in intelligence analysis.",
}

const topicContent = `import { LessonContainer } from "@/components/lesson-container"
import { TopicHeader } from "@/components/topic-header"
import { LessonContent } from "@/components/lesson-content"
import { FullWidthSection } from "@/components/full-width-section"
import Image from "next/image"

## Defining Intelligence

At its core, intelligence is about reducing uncertainty. It provides decision-makers with the knowledge
they need to understand situations, identify threats and opportunities, and make effective choices.
Intelligence is both a product (the information itself) and a process (the methods used to gather and
analyze that information).

Intelligence can be defined in several ways:

- Information that has been collected, processed, and analyzed to meet specific requirements
- Knowledge and foreknowledge of the world around us that allows leaders to make decisions
-
The product resulting from the collection, processing, integration, analysis, and interpretation of
available information

## Key Characteristics of Intelligence

Effective intelligence has several key characteristics that distinguish it from raw information:

### Relevance
Intelligence must be directly applicable to the decision-maker's needs and requirements

### Timeliness
Intelligence must be delivered when it's needed to inform decisions

### Accuracy
Intelligence should be as factually correct as possible given available information

### Actionability
Intelligence should enable and inform specific actions or decisions

## Intelligence vs. Information
A critical distinction exists between intelligence and information:

Information
Intelligence

Raw, unprocessed data
Analyzed and contextualized information

May or may not be relevant
Specifically tailored to requirements

No judgment or interpretation
Includes assessment and meaning

Describes what is known
Provides insight and forecasting

### Continue Learning

Explore related topics to deepen your understanding of intelligence fundamentals.

#### The Intelligence Cycle

Learn the systematic process used to convert information into intelligence

[
Start Learning →
](/topics/intelligence-cycle)

#### Types of Intelligence

Explore the different categories and classifications of intelligence

[
Start Learning →
](/topics/intelligence-types)

)
`

export default function SampletopicPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Sample Topic"
        subtitle="Learn about sample topic in intelligence analysis."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="sample-topic" />
      </MicroLesson>
    </LessonContainer>
  )
}
