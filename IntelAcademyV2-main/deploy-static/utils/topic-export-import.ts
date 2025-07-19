import Papa from "papaparse"

// Define types for topic data
export interface Subtopic {
  id: number
  title: string
  slug: string
  description: string
  status: "draft" | "published" | "review"
  lastUpdated: string
  views: number
}

export interface MainTopic {
  id: number
  title: string
  slug: string
  category: string
  description: string
  status: "draft" | "published" | "review"
  lastUpdated: string
  views: number
  subtopics: Subtopic[]
}

export interface FlattenedTopic {
  id: number
  title: string
  slug: string
  category: string
  description: string
  status: "draft" | "published" | "review"
  lastUpdated: string
  views: number
  parentId?: number
  isSubtopic: boolean
}

/**
 * Imports topics from a CSV file
 */
export async function importTopicsFromCSV(csvData: string): Promise<MainTopic[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        const topics: MainTopic[] = []
        const topicMap: Record<number, MainTopic> = {}

        results.data.forEach((row) => {
          const topicId = Number.parseInt(row.id)
          const isSubtopic = row.isSubtopic === "true"
          const parentId = row.parentId ? Number.parseInt(row.parentId) : undefined

          const topicData = {
            id: topicId,
            title: row.title,
            slug: row.slug,
            category: row.category,
            description: row.description,
            status: row.status,
            lastUpdated: row.lastUpdated,
            views: Number.parseInt(row.views),
            subtopics: [],
          }

          if (parentId) {
            topicMap[parentId].subtopics.push({
              id: topicId,
              title: row.title,
              slug: row.slug,
              description: row.description,
              status: row.status,
              lastUpdated: row.lastUpdated,
              views: Number.parseInt(row.views),
            })
          } else if (!isSubtopic) {
            topics.push(topicData)
            topicMap[topicId] = topicData
          }
        })

        resolve(topics)
      },
      error: (error) => {
        reject(error)
      },
    })
  })
}

/**
 * Imports topics from a JSON file
 */
export async function importTopicsFromJSON(jsonData: string): Promise<MainTopic[]> {
  try {
    const parsedData = JSON.parse(jsonData)
    return parsedData
  } catch (error) {
    throw new Error("Invalid JSON format")
  }
}

/**
 * Exports topics to a CSV file
 */
export function exportTopicsToCSV(topics: MainTopic[]): string {
  const flattenedTopics: FlattenedTopic[] = []

  topics.forEach((topic) => {
    flattenedTopics.push({ ...topic, isSubtopic: false })
    topic.subtopics.forEach((subtopic) => {
      flattenedTopics.push({ ...subtopic, isSubtopic: true, category: topic.category, parentId: topic.id })
    })
  })

  const csv = Papa.unparse(flattenedTopics, {
    header: true,
  })

  return csv
}

/**
 * Exports topics to a JSON file
 */
export function exportTopicsToJSON(topics: MainTopic[]): string {
  return JSON.stringify(topics, null, 2)
}

/**
 * Validates imported topics data
 */
export function validateImportedTopics(topics: MainTopic[]): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  topics.forEach((topic) => {
    if (!topic.title || topic.title.length < 2) {
      errors.push(`Topic ${topic.id} is missing a title or title is less than 2 characters`)
    }
    if (!topic.slug || topic.slug.length < 2) {
      errors.push(`Topic ${topic.id} is missing a slug or slug is less than 2 characters`)
    }
    if (!topic.category) {
      errors.push(`Topic ${topic.id} is missing a category`)
    }
    topic.subtopics.forEach((subtopic) => {
      if (!subtopic.title || subtopic.title.length < 2) {
        errors.push(`Subtopic ${subtopic.id} is missing a title or title is less than 2 characters`)
      }
      if (!subtopic.slug || subtopic.slug.length < 2) {
        errors.push(`Subtopic ${subtopic.id} is missing a slug or slug is less than 2 characters`)
      }
    })
  })

  return { valid: errors.length === 0, errors }
}
