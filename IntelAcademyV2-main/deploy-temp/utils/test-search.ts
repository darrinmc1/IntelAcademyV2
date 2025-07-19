/**
 * Utility to test the search functionality
 * This can be run on the client-side to verify search is working
 */

export async function testSearch(query: string): Promise<{
  success: boolean
  results?: any[]
  enhancedQuery?: string | null
  error?: string
  timing?: number
}> {
  const startTime = performance.now()

  try {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })

    const endTime = performance.now()
    const timing = Math.round(endTime - startTime)

    if (!response.ok) {
      const errorText = await response.text()
      return {
        success: false,
        error: `API error (${response.status}): ${errorText}`,
        timing,
      }
    }

    const data = await response.json()
    return {
      success: true,
      results: data.results,
      enhancedQuery: data.enhancedQuery,
      timing,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
