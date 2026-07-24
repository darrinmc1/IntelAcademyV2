import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Creating Chart - The Intel Analyst Academy",
  description: "Learn how to create a new chart, add entities and links, and begin building a basic network in Analyst&#x27;s Notebook.",
}

const topicContent = `import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
title: "Creating a Chart in Analyst's Notebook | The Intel Analyst Academy",
description:
"Learn how to create a new chart, add entities and links, and begin building a basic network in Analyst's Notebook.",

← Back to Analyst's Notebook Learning Path

# Creating a Chart in Analyst's Notebook

Learn how to create a new chart, add entities and links, and begin building a basic network

## Creating Your First Chart

Creating a chart in Analyst's Notebook is the first step in visualizing relationships and conducting
analysis. This process involves setting up a new chart, adding entities, creating links between them, and
organizing your visualization effectively.

### Starting a New Chart
To create a new chart in Analyst's Notebook:

- Launch i2 Analyst's Notebook
- Select "File" > "New" or use the keyboard shortcut Ctrl+N
- Choose a chart template if prompted, or start with a blank chart
- Set up your chart properties, including page size and orientation

### Adding Entities to Your Chart

Entities represent the objects of interest in your analysis, such as people, organizations, events, or
locations. To add entities:

- Select the appropriate entity type from the palette on the left side of the screen
- Click on the chart where you want to place the entity
- Enter the entity's identity and label information in the dialog box
- Add any additional attributes or properties as needed
- Click "OK" to create the entity

### Creating Links Between Entities
Links represent relationships between entities. To create links between entities on your chart:

- Select the link tool from the palette
- Click on the first entity (the source)
- Drag to the second entity (the target) and release
- Enter the link's identity and label information in the dialog box
- Select the appropriate link type to represent the relationship
- Add any additional attributes or properties as needed
- Click "OK" to create the link

### Organizing Your Chart
As you add more entities and links, organizing your chart becomes important for clarity and analysis:

- Use the Auto Layout feature to automatically arrange entities
- Manually position entities by dragging them to appropriate locations
- Group related entities together to show clusters or subnetworks
- Use theme lines to organize entities by common characteristics
- Adjust the zoom level to focus on specific areas of interest

## Saving and Managing Your Chart
Once you've created your chart, it's important to save and manage it properly:

- Select "File" {'>'} "Save" or use the keyboard shortcut Ctrl+S
- Choose a location and filename for your chart
- Select the appropriate file format (.anb is the standard format)
- Consider using version numbers in filenames for tracking changes
- Regularly save your work to prevent data loss

### Related Topics

-

Identities and Labels

-

Editing Chart Items

-

Creating Entity Relationship Charts

### Next Steps

-

Example Materials in Analyst's Notebook

-

Importing an Example Dataset

)
`

export default function NotebookcreatingchartPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Creating a Chart in Analyst&#x27;s Notebook"
        subtitle="Learn how to create a new chart, add entities and links, and begin building a basic network in Analyst&#x27;s Notebook."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="notebook-creating-chart" />
      </MicroLesson>
    </LessonContainer>
  )
}
