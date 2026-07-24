import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timeline Visualization - The Intel Analyst Academy",
  description: "Create temporal analysis charts to visualize events over time and identify patterns.",
}

const topicContent = `import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
title: "Timeline Visualization | The Intel Analyst Academy",
description: "Create temporal analysis charts to visualize events over time and identify patterns.",

← Back to Analyst's Notebook Learning Path

# Timeline Visualization

Create temporal analysis charts to visualize events over time and identify patterns.

## Understanding Timeline Analysis

Timeline visualization is a powerful feature in Analyst's Notebook that allows you to analyze events and
activities over time. By visualizing temporal data, you can identify patterns, sequences, and anomalies
that might not be apparent in traditional link charts.

## Key Skills Covered

- Creating timeline charts
- Adding date and time information to entities
- Working with theme lines
- Visualizing event sequences
- Identifying temporal patterns
- Switching between network and timeline views
- Using the time bar for navigation

## Applications of Timeline Analysis
Timeline analysis is particularly valuable in various intelligence contexts:

- Crime series analysis to identify patterns in criminal activity
- Investigating communication patterns between individuals
- Tracking movement of persons of interest
- Analyzing financial transactions over time
- Reconstructing sequences of events in investigations

## Best Practices
When creating timeline visualizations, consider these best practices:

- Use consistent time formats for all entities
- Group related events on theme lines
- Include sufficient detail in event descriptions
- Use color coding to distinguish different types of events
- Consider using both absolute and relative time views for analysis

### Additional Resources

-

Timeline Analysis Templates

-

Temporal Analysis Guide

### Next Topics

-

Social Network Analysis

-

Importing and Managing Data

)
`

export default function TimelinevisualizationPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Timeline Visualization"
        subtitle="Create temporal analysis charts to visualize events over time and identify patterns."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="timeline-visualization" />
      </MicroLesson>
    </LessonContainer>
  )
}
