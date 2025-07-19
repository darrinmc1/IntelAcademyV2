"use server"

import { revalidatePath } from "next/cache"

// In a real application, this would connect to a database
// For now, we'll use a simple in-memory store for demonstration
const contentStore: Record<string, Record<string, string>> = {
  topics: {
    "what-is-intelligence": `# What is Intelligence?

Intelligence is processed information that meets the stated or understood needs of policymakers and has been collected, refined, and narrowed to meet those needs.

## Key Characteristics of Intelligence

Intelligence is characterized by:

- **Relevance**: Directly applicable to the decision-maker's needs
- **Timeliness**: Available when needed for decision-making
- **Accuracy**: Factually correct and reliable
- **Actionability**: Provides insights that can inform specific actions

## The Intelligence Transformation Process

Raw information becomes intelligence through a systematic process of:

1. Collection from various sources
2. Processing and exploitation of raw data
3. Analysis and production of finished intelligence
4. Dissemination to decision-makers`,

    "intelligence-cycle": `# The Intelligence Cycle

The intelligence cycle is a process used by analysts to transform raw information into finished intelligence for policymakers to use in decision making.

## Five Phases of the Intelligence Cycle

### 1. Planning and Direction
Setting requirements and priorities based on policymaker needs.

### 2. Collection
Gathering raw information from various sources.

### 3. Processing
Converting raw information into a form usable by analysts.

### 4. Analysis and Production
Transforming processed information into finished intelligence.

### 5. Dissemination
Delivering finished intelligence to policymakers.`,

    "strategic-intelligence-concept": `# Strategic Intelligence Concept

Strategic intelligence provides long-term insights to support high-level decision making.

## Characteristics of Strategic Intelligence

- Focuses on long-term trends and developments
- Supports policy and strategy formulation
- Addresses broad national or organizational interests
- Typically has a time horizon of months to years`,
  },
  "learning-paths": {
    foundations: `# Foundations of Intelligence Analysis

This learning path covers the fundamental concepts, principles, and practices of intelligence analysis.

## Learning Objectives

By completing this learning path, you will:

- Understand what intelligence is and how it differs from information
- Learn the intelligence cycle and its application
- Explore different types of intelligence collection
- Develop basic analytical skills and techniques`,

    "strategic-intelligence": `# Strategic Intelligence

This learning path explores the concepts, methodologies, and applications of strategic intelligence.

## Learning Objectives

By completing this learning path, you will:

- Understand the purpose and scope of strategic intelligence
- Learn how to identify long-term trends and patterns
- Develop skills in strategic forecasting and assessment
- Explore how strategic intelligence informs policy decisions`,
  },
  glossary: {
    humint: `# HUMINT (Human Intelligence)

Intelligence derived from information collected and provided by human sources.`,
    osint: `# OSINT (Open Source Intelligence)

Intelligence produced from publicly available information that is collected, exploited, and disseminated in a timely manner to an appropriate audience.`,
  },
}

export async function fetchPageContent(type: string, id: string): Promise<string> {
  // Simulate database lookup
  if (!contentStore[type] || !contentStore[type][id]) {
    return ""
  }

  return contentStore[type][id]
}

export async function savePageContent(type: string, id: string, content: string): Promise<boolean> {
  try {
    // Ensure the content type exists in our store
    if (!contentStore[type]) {
      contentStore[type] = {}
    }

    // Save the content
    contentStore[type][id] = content

    // Revalidate the path to update the UI
    revalidatePath(`/admin/content-manager/${type}/${id}`)
    revalidatePath(`/admin/content-manager/${type}`)

    return true
  } catch (error) {
    console.error("Error saving content:", error)
    return false
  }
}

export async function getAvailablePages(type: string): Promise<{ id: string; title: string }[]> {
  // Simulate database lookup
  if (!contentStore[type]) {
    return []
  }

  // Extract titles from content (first heading)
  return Object.entries(contentStore[type]).map(([id, content]) => {
    const titleMatch = content.match(/# (.*?)(\n|$)/)
    const title = titleMatch ? titleMatch[1] : id
    return { id, title }
  })
}
