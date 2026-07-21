"use server"

import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/auth"
import { isAdmin, isStaff } from "@/lib/rbac"
import { submitForReview, recordDirectPublish, getPublishedContent } from "@/lib/db"
import { sendReviewSubmitted } from "@/lib/email"

export type SaveResult = {
  ok: boolean
  status?: "published" | "submitted"
  message: string
}

function extractTitle(content: string, fallback: string): string {
  const m = content.match(/#\s+(.*?)(\n|$)/)
  return m ? m[1].trim() : fallback
}

/**
 * Role-aware save used by the content editors.
 *  - admin  => publish immediately + audit ('published_directly')
 *  - editor/moderator => create a submission for review + notify reviewers
 */
export async function submitContent(
  type: string,
  id: string,
  content: string
): Promise<SaveResult> {
  const user = await getCurrentUser()
  if (!user || !isStaff(user.role)) {
    return { ok: false, message: "Insufficient permissions" }
  }

  const title = extractTitle(content, id)

  try {
    if (isAdmin(user)) {
      await savePageContent(type, id, content)
      await recordDirectPublish({ type, contentId: id, title, content, adminId: user.id })
      revalidatePath(`/${type}/${id}`)
      return { ok: true, status: "published", message: "Published." }
    }

    await submitForReview({ type, contentId: id, title, content, submittedBy: user.id })
    await sendReviewSubmitted({
      contentTitle: title,
      editorName: user.codename || user.email,
      submissionId: id,
    })
    return { ok: true, status: "submitted", message: "Submitted for review." }
  } catch (error) {
    console.error("submitContent error:", error)
    return { ok: false, message: "Save failed. Please try again." }
  }
}

// In a real application, this would connect to a database
// For now, we'll use a simple in-memory store for demonstration
const contentStore: Record<string, Record<string, string>> = {
  topics: {
    "what-is-intelligence": `# What is Intelligence?\n\nIntelligence is processed information that meets the stated or understood needs of policymakers and has been collected, refined, and narrowed to meet those needs.\n\n## Key Characteristics of Intelligence\n\nIntelligence is characterized by:\n\n- **Relevance**: Directly applicable to the decision-maker's needs\n- **Timeliness**: Available when needed for decision-making\n- **Accuracy**: Factually correct and reliable\n- **Actionability**: Provides insights that can inform specific actions\n\n## The Intelligence Transformation Process\n\nRaw information becomes intelligence through a systematic process of:\n\n1. Collection from various sources\n2. Processing and exploitation of raw data\n3. Analysis and production of finished intelligence\n4. Dissemination to decision-makers`,

    "intelligence-cycle": `# The Intelligence Cycle\n\nThe intelligence cycle is a process used by analysts to transform raw information into finished intelligence for policymakers to use in decision making.\n\n## Five Phases of the Intelligence Cycle\n\n### 1. Planning and Direction\nSetting requirements and priorities based on policymaker needs.\n\n### 2. Collection\nGathering raw information from various sources.\n\n### 3. Processing\nConverting raw information into a form usable by analysts.\n\n### 4. Analysis and Production\nTransforming processed information into finished intelligence.\n\n### 5. Dissemination\nDelivering finished intelligence to policymakers.`,

    "strategic-intelligence-concept": `# Strategic Intelligence Concept\n\nStrategic intelligence provides long-term insights to support high-level decision making.\n\n## Characteristics of Strategic Intelligence\n\n- Focuses on long-term trends and developments\n- Supports policy and strategy formulation\n- Addresses broad national or organizational interests\n- Typically has a time horizon of months to years`,
  },
  "learning-paths": {
    foundations: `# Foundations of Intelligence Analysis\n\nThis learning path covers the fundamental concepts, principles, and practices of intelligence analysis.\n\n## Learning Objectives\n\nBy completing this learning path, you will:\n\n- Understand what intelligence is and how it differs from information\n- Learn the intelligence cycle and its application\n- Explore different types of intelligence collection\n- Develop basic analytical skills and techniques`,

    "strategic-intelligence": `# Strategic Intelligence\n\nThis learning path explores the concepts, methodologies, and applications of strategic intelligence.\n\n## Learning Objectives\n\nBy completing this learning path, you will:\n\n- Understand the purpose and scope of strategic intelligence\n- Learn how to identify long-term trends and patterns\n- Develop skills in strategic forecasting and assessment\n- Explore how strategic intelligence informs policy decisions`,
  },
  glossary: {
    humint: `# HUMINT (Human Intelligence)\n\nIntelligence derived from information collected and provided by human sources.`,
    osint: `# OSINT (Open Source Intelligence)\n\nIntelligence produced from publicly available information that is collected, exploited, and disseminated in a timely manner to an appropriate audience.`,
  },
}

/**
 * Fetch page content, checking the database first (for published content),
 * then falling back to the in-memory store (for draft/demo content).
 */
export async function fetchPageContent(type: string, id: string): Promise<string> {
  // Try to fetch from database first (published content)
  try {
    const published = await getPublishedContent(type, id)
    if (published?.content) {
      return published.content
    }
  } catch (error) {
    console.error("Error fetching from database:", error)
    // Fall through to in-memory store
  }

  // Fall back to in-memory store (demo/draft content)
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