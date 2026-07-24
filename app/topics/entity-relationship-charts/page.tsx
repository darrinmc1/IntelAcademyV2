import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entity Relationship Charts - The Intel Analyst Academy",
  description: "Master techniques for building clear and effective link charts showing entities and connections.",
}

const topicContent = `import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
title: "Creating Entity Relationship Charts | The Intel Analyst Academy",
description: "Master techniques for building clear and effective link charts showing entities and connections.",

← Back to Analyst's Notebook Learning Path

# Creating Entity Relationship Charts

Master the art of making boxes and lines tell stories that would make detective shows jealous.

## Building Effective Entity Relationship Charts (Or: How to Make Your Boss Think You're a Genius)

Entity relationship charts are the foundation of visual analysis in Analyst's Notebook. These charts allow
you to represent people, organizations, events, locations, and other entities as icons and the
relationships between them as links—essentially turning your investigation into something that looks like
it belongs on a conspiracy theorist's wall, but with better graphics.

### Entity Chart Truth #1

The moment you present your chart is the exact moment someone will ask, "But what about this connection
you missed?" Be prepared to smile through the pain.

## Key Skills Covered (That Will Make You Look Like a TV Detective)

- **Creating different types of entities** - From "Definitely Suspicious Person" to "Probably
Innocent Bystander"

- **Adding properties and attributes** - Because knowing someone's favorite ice cream flavor
might be crucial to the case (but probably isn't)

- **Creating links between entities** - Drawing lines that say "these two people definitely
know each other" based on one phone call three years ago

- **Defining relationship types** - Going beyond "knows" to the more specific "owes money to"
or "pretends not to recognize at parties"

- **Organizing and arranging your chart** - The art of making your tangled web of connections
look intentional and insightful

- **Using the palette** - Finding that one specific icon type that's hiding in a submenu of a
submenu

- **Customizing entity appearances** - Making your chart colorful enough to be interesting
but not so colorful it induces seizures

## Best Practices (That Everyone Agrees With But Few Actually Follow)

When creating entity relationship charts, consistency is key. Use standard entity types and link types to
ensure your charts are easily understood by others—or at least as easily understood as a complex network
of criminal relationships can be.

- **Use appropriate entity types** - A person is a person, not a building. This seems obvious
until you're 14 hours into chart creation.

- **Label links clearly** - "Associated with" is the analytical equivalent of shrugging your
shoulders. Be specific!

- **Include relevant attributes** - But remember, not everything needs to be on the chart. No
one needs to see a suspect's entire Netflix viewing history.

- **Arrange entities logically** - Your chart should not resemble a Jackson Pollock painting
unless the case involves abstract expressionists.

- **Use consistent styling** - Pick a color scheme and stick with it. This isn't the time to
express your artistic side.

### The Entity Chart Paradox

A chart with too few entities looks incomplete. A chart with too many entities looks incomprehensible.
The perfect chart exists in a quantum state between these two extremes that can never actually be
achieved.

## Common Entity Chart Disasters (And How to Recover)

- **The "Everything Is Connected to Everything" Syndrome** - When your chart has so many
crossing lines it resembles a ball of yarn after a cat attack

- **The "Mystery Icon" Problem** - When you use a custom icon that made sense at 2 AM but is
completely baffling in the morning

- **The "What Does This Link Mean Again?" Dilemma** - When you forgot to label a critical
connection and now have to pretend you remember what it represents

- **The "My Chart Is Too Big for the Projector" Crisis** - When you have to zoom out so far
that all your careful labeling becomes microscopic

### Additional Resources

-

Entity Relationship Templates (For the Creatively Challenged)

-

Chart Style Guide (Making Your Analysis Pretty AND Functional)

### Next Topics

-

Timeline Visualization (Time Is A Flat Circle, But Your Chart Shouldn't Be)

-

Social Network Analysis (Finding the Popular Kids in Criminal Networks)

)
`

export default function EntityrelationshipchartsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Creating Entity Relationship Charts"
        subtitle="Master techniques for building clear and effective link charts showing entities and connections."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="entity-relationship-charts" />
      </MicroLesson>
    </LessonContainer>
  )
}
