import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Example Materials - The Intel Analyst Academy",
  description: "Explore the example charts and import specifications provided with i2 Analyst&amp;apos;s Notebook for practice and learning.",
}

const topicContent = `"Explore the example charts and import specifications provided with i2 Analyst's Notebook for practice and learning.",

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

## Selecting Examples for Analysis

The examples and materials you include in an Analyst's Notebook chart are not neutral — they shape how others interpret the data. Careful selection and annotation of example materials ensures that the analysis is transparent, reproducible, and defensible.

- **Representative Examples:** Choose examples that fairly represent the broader dataset. Cherry-picking examples that support a preferred conclusion undermines analytical integrity.
- **Anomalous Examples:** Include examples that contradict the prevailing pattern. These are often where the most valuable intelligence insights emerge — the data point that doesn't fit reveals the limits of your understanding.
- **Temporal Spread:** Ensure examples span the full timeframe of the investigation. Including only recent examples may miss early indicators; including only old examples may miss current developments.

## Annotating Example Materials

Raw data is rarely meaningful without context. Effective annotation of example materials adds analytical value:

- **Source Attribution:** Every example must be traceable to its source. Include the source identifier, collection method, date of collection, and assessed reliability.
- **Relevance Statement:** Briefly explain why this particular example was included. What analytical question does it illuminate? What hypothesis does it support or challenge?
- **Confidence Indicators:** Where the example involves interpretation or inference (rather than direct observation), indicate the analyst's confidence level. This allows consumers to weigh the evidence appropriately.
- **Cross-References:** Link example materials to related entities, events, or reports in the chart. A well-annotated chart allows consumers to follow the analytical trail from raw data to finished assessment.

## Using Templates Effectively

Analyst's Notebook templates standardise the presentation of common entity and link types, saving time and ensuring consistency:

- **Entity Templates:** Pre-configure standard entity types (Person, Organisation, Location, Event) with the attributes most relevant to your investigation. For example, a Person template might include fields for Name, Alias, DOB, Phone, Email, and Status.
- **Link Templates:** Standardise how different relationship types are displayed. A phone call link might show duration and frequency; a financial link might show amount and currency.
- **Chart Templates:** For recurring investigation types (fraud networks, terrorist cells, organised crime groups), create chart templates that pre-populate the analytical framework, saving setup time on each new case.

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
