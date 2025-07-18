// Utility functions for testing search functionality

export interface SearchTestCase {
  query: string
  expectedResults: number
  expectedCategories: string[]
  description: string
}

export const searchTestCases: SearchTestCase[] = [
  {
    query: "intelligence",
    expectedResults: 5,
    expectedCategories: ["Foundations"],
    description: "Basic search for 'intelligence' should return foundation topics",
  },
  {
    query: "osint",
    expectedResults: 2,
    expectedCategories: ["OSINT"],
    description: "Search for 'osint' should return OSINT-related topics",
  },
  {
    query: "strategic",
    expectedResults: 2,
    expectedCategories: ["Strategic Intelligence"],
    description: "Search for 'strategic' should return strategic intelligence topics",
  },
  {
    query: "analysis",
    expectedResults: 3,
    expectedCategories: ["Crime Analysis", "Analytical Techniques"],
    description: "Search for 'analysis' should return analysis-related topics",
  },
  {
    query: "report writing",
    expectedResults: 2,
    expectedCategories: ["Report Writing"],
    description: "Search for 'report writing' should return report writing topics",
  },
]

export async function runSearchTest(query: string): Promise<{
  success: boolean
  results: any[]
  error?: string
  timeTaken: number
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

    if (!response.ok) {
      throw new Error(`Search failed with status: ${response.status}`)
    }

    const data = await response.json()
    const endTime = performance.now()

    return {
      success: true,
      results: data.results || [],
      timeTaken: Math.round(endTime - startTime),
    }
  } catch (err) {
    const endTime = performance.now()
    return {
      success: false,
      results: [],
      error: err instanceof Error ? err.message : "Unknown error",
      timeTaken: Math.round(endTime - startTime),
    }
  }
}

export async function testSearchFunctionality(): Promise<{
  overallSuccess: boolean
  testResults: Array<{
    query: string
    success: boolean
    resultCount: number
    timeTaken: number
    error?: string
  }>
}> {
  const testResults = []
  let overallSuccess = true

  for (const testCase of searchTestCases) {
    const result = await runSearchTest(testCase.query)

    const testResult = {
      query: testCase.query,
      success: result.success && result.results.length > 0,
      resultCount: result.results.length,
      timeTaken: result.timeTaken,
      error: result.error,
    }

    if (!testResult.success) {
      overallSuccess = false
    }

    testResults.push(testResult)
  }

  return {
    overallSuccess,
    testResults,
  }
}
