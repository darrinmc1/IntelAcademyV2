import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Creating Chart - The Intel Analyst Academy",
  description: "Learn how to create a new chart, add entities and links, and begin building a basic network in Analyst&#x27;s Notebook.",
}

const topicContent = `"Learn how to create a new chart, add entities and links, and begin building a basic network in Analyst's Notebook.",

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

## Creating Your First Chart

Starting a new chart in Analyst's Notebook requires planning beyond simply placing entities on the canvas. A well-structured chart begins with a clear analytical question and a defined scope.

- **Define the Question:** Every Intelligence chart should answer a specific analytical question. Before creating the chart, write down the question in one sentence. This focus prevents the chart from becoming an undirected collection of data.
- **Set Boundaries:** Determine what data will be included and what will be left out. An investigation into a fraud ring may include financial records and communications data but exclude unrelated personal relationships.
- **Choose the Chart Type:** Analyst's Notebook offers different chart types for different analytical needs - link charts for relationship analysis, timeline charts for temporal analysis, and combination charts for multi-dimensional problems.

## Entity Creation Best Practices

Entities are the building blocks of any chart. Consistent entity creation practices prevent confusion as the chart grows:

- **Single Instance Rule:** Each real-world person, organisation, or location should appear exactly once in the chart. Duplicate entities are the most common error in Analyst's Notebook charts and can lead to incorrect analytical conclusions.
- **Attribute Completeness:** Fill in all available attributes for each entity. An entity with only a name provides limited analytical value - one with phone numbers, addresses, associations, and notes provides a rich analytical target.
- **Entity Naming:** Use a consistent naming convention from the start. A recommended approach: SURNAME, Given Name for individuals; full legal name for organisations; City, Country for locations.
- **Icon Selection:** Choose entity icons that communicate meaning at a glance. Use standard icons for common entity types and reserve custom icons for specific categories that appear frequently in your investigation.

## Building Links Between Entities

Links define the structure of the chart and require as much care as entity creation:

- **Link Direction:** Understand when links should be directed (A calls B) versus undirected (A and B are siblings). Directed links enable analysis of flow and hierarchy.
- **Link Semantics:** Use precise link types rather than generic "associated with" links. A "subscriber of" link between a person and a phone number carries more analytical weight than a generic "related to" link.
- **Temporal Links:** Where possible, include temporal attributes on links - when a call was made, when a transaction occurred. Temporal links enable timeline analysis and can reveal patterns and rhythms.
- **Strength and Frequency:** Where data supports it, encode the strength or frequency of a relationship as a link attribute. A phone number that appears 200 times in call records is more significant than one that appears twice.

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
