import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/topics/learning-paths" },
  title: "How the learning paths are organised",
  description:
    "A learning path is a reading order of written lessons. There is no enrolment, no lab, and no certificate.",
}

const topicContent = `A learning path on this site is a reading order. Open it, start at the first lesson, and keep going. There is no enrolment button, no lab, and no certificate at the end. The forum is not open. If you were looking for an ethical-hacking syllabus, that was a different website that sat down in the wrong chair.

## What you actually get

There are 24 paths. Foundations is the short one if the vocabulary is new. Strategic intelligence, OSINT, threat assessment, and report writing are the shelves most people come for. Crime series, hot spots, networks, and financial intelligence are the specialist ones. Each path page lists the lessons that exist. If a lesson is not linked, it is not written.

Most lessons take a few minutes. Read the bottom line, then the method, then the example. The examples are fictional. A round number in a case study is a teaching prop, not a figure you can cite in a real product.

## What to do next

When you want to try the method, use the practical exercises. When you want a structured brief from a pile of notes, use Academy Brief. Both are on the site now. Video lessons are not.

If a path is missing a subject you need, request the topic. Do not file that as a bug on a page that already exists.

The old version of this page talked about penetration-testing paths, dashboards, and a community you could enrol in. None of that was here. This page is the correction.
`

export default function LearningPathsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="How the learning paths are organised"
        subtitle="A reading order of lessons that exist. No enrolment and no certificate."
        humorSubtitle="The ethical-hacking path left. It was never on the roster."
        readTime={2}
        difficulty="Beginner"
        category="Foundations"
        mascot="foundations"
        mascotMessage="Start at the top of the path. The site will not salute you for finishing."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="learning-paths" />
      </MicroLesson>
    </LessonContainer>
  )
}
