import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Identities Labels - The Intel Analyst Academy",
  description: "Learn how to use identity and label item properties in i2 Analyst&amp;apos;s Notebook for effective chart creation.",
}

const topicContent = `import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
title: "Identities and Labels in Analyst's Notebook | The Intel Analyst Academy",
description:
"Learn how to use identity and label item properties in i2 Analyst's Notebook for effective chart creation.",

← Back to Analyst's Notebook Learning Path

# Identities and Labels in Analyst's Notebook

Master the fundamental concepts of identities and labels for effective chart creation and analysis

## Understanding Identities and Labels

Identities and labels are fundamental components in i2 Analyst's Notebook. They provide the foundation for
creating meaningful visualizations and conducting effective analysis.

### Identities in Analyst's Notebook

An identity in Analyst's Notebook is a unique identifier for an entity or link. Identities serve several
important purposes:

- They uniquely identify each item on your chart
- They allow the software to recognize when two items represent the same real-world entity
- They enable merging of duplicate entities during data import
- They support matching operations across different charts

When creating entities manually, you'll assign identities through the entity properties. When importing
data, identities are typically mapped from a unique field in your dataset.

### Labels in Analyst's Notebook

Labels are the visible text that appears on your chart items. Effective labeling is crucial for chart
readability and analysis:

- Labels provide context and meaning to the visual elements
- They can display key attributes of an entity or relationship
- They can be formatted to highlight important information
- They support search operations within your chart

Analyst's Notebook provides flexible options for configuring labels, including multi-line labels, custom
formatting, and conditional display based on attributes.

## Best Practices for Identities and Labels
Consider these best practices when working with identities and labels in your charts:

- Use consistent naming conventions for identities
- Include sufficient detail in labels to make entities distinguishable
- Keep labels concise to avoid visual clutter
- Use formatting (bold, color, etc.) sparingly to highlight key information
- Consider using multi-line labels to organize information logically
- Ensure that identity fields are properly mapped during data imports

### Related Topics

-

Creating a Chart

-

Editing Chart Items

-

Creating Entity Relationship Charts

### Next Steps

-

Creating a Chart

-

Example Materials in Analyst's Notebook

)
`

export default function NotebookidentitieslabelsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Identities and Labels in Analyst&#x27;s Notebook"
        subtitle="Learn how to use identity and label item properties in i2 Analyst&amp;apos;s Notebook for effective chart creation."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="notebook-identities-labels" />
      </MicroLesson>
    </LessonContainer>
  )
}
