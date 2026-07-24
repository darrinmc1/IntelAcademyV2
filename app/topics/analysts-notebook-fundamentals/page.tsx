import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analysts Notebook Fundamentals - The Intel Analyst Academy",
  description: "Learn the core interface, features, and capabilities of IBM i2 Analyst&amp;apos;s Notebook.",
}

const topicContent = `import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsNextCompact } from "@/components/whats-next-compact"

export const metadata: Metadata = {
title: "Analyst's Notebook Fundamentals | The Intel Analyst Academy",
description:"Learn the core interface, features, and capabilities of IBM i2 Analyst's Notebook.",

← Back to Analyst's Notebook Learning Path

# Analyst's Notebook Fundamentals

Where intelligence analysts pretend to be CSI detectives with fancy software instead of sunglasses.

## Overview: The Software That Makes You Look Like You Know What You're Doing

IBM i2 Analyst's Notebook is the intelligence community's answer to "how can we make connecting dots look
really impressive?" It's a powerful visual intelligence analysis tool that helps analysts discover
patterns, connections, and insights in complex data—and makes your investigation board look way more
professional than red string and thumbtacks.

### Analyst's Notebook Truth #1

The more complex your chart looks, the less likely anyone will question your conclusions. This is both a
feature and a danger.

## Key Concepts (Or: How to Speak Notebook Without Sounding Like a Newbie)

Analyst's Notebook uses a visual approach to intelligence analysis, allowing you to represent entities
(people, places, events, etc.) as icons and the relationships between them as links. This visual
representation helps identify patterns and connections that might be missed in textual or tabular data—or
as we like to call it, "finding needles in haystacks without getting hay fever."

## The Analyst's Notebook Interface: Where Buttons Go to Hide

Upon opening Analyst's Notebook for the first time, you'll be greeted by approximately 17,000 buttons,
menus, and options. Don't panic—this is normal. By the end of your career, you might understand what 60%
of them do.

- **The Ribbon** - Like Microsoft Office, but with more ways to visualize criminal networks

- **The Chart Surface** - Your digital canvas where you'll create intelligence masterpieces
(or, more likely, a tangled web that somehow makes sense to only you)

- **The Palette** - Home to all the entity types you'll need, from "Suspicious Person" to
"Vehicle That Was Definitely There But No One Got The License Plate"

- **The Analyst's Notebook Graveyard** - The bottom right corner where features go to die,
never to be clicked on by anyone

## Things You'll Learn to Create (Besides Eye Strain)

- **Link Charts** - Visual representations of relationships that will make you feel like a
detective in a TV show

- **Timeline Charts** - For when you need to prove that Suspect A couldn't have been in two
places at once (unless they have a twin, which always complicates things)

- **Transaction Patterns** - Follow the money, because criminals are bad at many things, but
especially accounting

- **Social Network Analysis** - Discover who's the Kevin Bacon of your criminal network
(everyone is six degrees or fewer from Kevin Bacon, even criminals)

### Pro Tip

Save your work every 10 minutes. Analyst's Notebook crashes are like tax audits—not a matter of if, but
when.

## Common Rookie Mistakes (That You'll Make Anyway)

- **The "My Chart Looks Like a Plate of Spaghetti"** - When you've added so many entities and
links that your analysis resembles an Italian dinner

- **The "Where Did That Icon Go?"** - The frustrating game of hide-and-seek with entities
that somehow migrated off-screen

- **The "I Forgot to Save" Tragedy** - Followed by the five stages of grief, ending with
reluctant acceptance as you start over

- **The "Accidental Delete" Panic** - That moment of horror when you realize you just deleted
three hours of work with one misclick

### Analyst's Notebook Fundamentals

-

IBM i2 Analyst's Notebook Documentation (Insomnia Cure)

-

Analyst's Notebook Templates (So You Don't Start From Scratch)

-

Chart Style Guide (Making Your Analysis Pretty AND Functional)

### Next Topics

-

Creating Entity Relationship Charts (Connect ALL the Dots!)

-

Timeline Visualization (Time Is A Flat Circle, But Your Chart Shouldn't Be)

{/* What's Next Section */}

)
`

export default function AnalystsnotebookfundamentalsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Analyst&#x27;s Notebook Fundamentals"
        subtitle="Learn the core interface, features, and capabilities of IBM i2 Analyst&amp;apos;s Notebook."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="analysts-notebook-fundamentals" />
      </MicroLesson>
    </LessonContainer>
  )
}
