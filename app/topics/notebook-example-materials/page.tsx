import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Example Materials - The Intel Analyst Academy",
  description: "Explore the example charts and import specifications provided with i2 Analyst&amp;apos;s Notebook for practice and learning.",
}

const topicContent = `import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
title: "Example Materials in Analyst's Notebook | The Intel Analyst Academy",
description:
"Explore the example charts and import specifications provided with i2 Analyst's Notebook for practice and learning.",

← Back to Analyst's Notebook Learning Path

# Example Materials in Analyst's Notebook

Explore the example charts and import specifications provided with i2 Analyst's Notebook

## Exploring Example Materials

i2 Analyst's Notebook comes with a variety of example materials that can help you learn the software and
understand its capabilities. These materials include sample charts, import specifications, and data files
that demonstrate different analytical techniques and chart types.

### Accessing Example Materials
To access the example materials in Analyst's Notebook:

- Launch i2 Analyst's Notebook
- Select "Help" > "Example Materials" from the menu
- Browse through the available folders to explore different types of examples
- Open example charts by double-clicking on .anb files

### Types of Example Materials
The example materials typically include:

- **Sample Charts**: Pre-built charts demonstrating various analytical techniques and
visualization approaches

- **Import Specifications**: Templates for importing data from external sources like Excel or
CSV files

- **Data Files**: Sample data sets that can be used with the import specifications

- **Analytical Templates**: Specialized charts for specific types of analysis, such as
timeline analysis or social network analysis

### Learning from Example Charts
Example charts are valuable learning resources. When exploring them, pay attention to these aspects:

- The overall structure and organization of the chart
- How entities and links are labeled and formatted
- The use of different entity and link types to represent different objects and relationships
- How complex information is visualized clearly
- The use of attributes and properties to store additional information
- Any analytical techniques demonstrated, such as social network analysis or timeline analysis

### Using Example Import Specifications

Import specifications in the example materials show you how to bring external data into Analyst's
Notebook:

- Open an example import specification to see how it's configured
- Examine how data fields are mapped to entity and link properties
- Look at how the specification handles the creation of different entity types based on the data
- Note how relationships are established between entities during import
- Use these specifications as templates for your own data imports

### Related Topics

-

Creating a Chart

-

Importing an Example Dataset

-

Creating Entity Relationship Charts

### Next Steps

-

Importing an Example Dataset

-

Editing Chart Items

)
`

export default function NotebookexamplematerialsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Example Materials in Analyst&#x27;s Notebook"
        subtitle="Explore the example charts and import specifications provided with i2 Analyst&amp;apos;s Notebook for practice and learning."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="notebook-example-materials" />
      </MicroLesson>
    </LessonContainer>
  )
}
