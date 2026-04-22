// Simplified search utility to avoid build issues

interface SearchResult {
  title: string
  description: string
  category: string
  path: string
  imagePath?: string
}

// Sample data for demonstration
const searchableContent = [
  {
    title: "What is Intelligence?",
    description: "Understanding the fundamental nature and purpose of intelligence",
    category: "Foundations",
    path: "/topics/what-is-intelligence",
    imagePath: "/what-is-intelligence.png",
  },
  {
    title: "The Intelligence Cycle",
    description: "Understanding the process that drives intelligence operations",
    category: "Foundations",
    path: "/topics/intelligence-cycle",
    imagePath: "/intelligence-cycle.png",
  },
  {
    title: "Strategic Intelligence Concept",
    description: "Understanding the core concepts of strategic intelligence",
    category: "Strategic Intelligence",
    path: "/topics/strategic-intelligence-concept",
    imagePath: "/strategic-intelligence-concept.png",
  },
  // Add more items as needed
]

export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query) return []

  const normalizedQuery = query.toLowerCase()

  return searchableContent.filter(
    (item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery),
  )
}

export async function searchTopics(query: string): Promise<SearchResult[]> {
  return searchContent(query)
}
