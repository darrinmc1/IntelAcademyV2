/**
 * Test script to verify the search API is working correctly
 *
 * This script makes a request to the search API with a test query
 * and logs the response to verify that it's working correctly.
 */

export async function testSearchApi(baseUrl = "") {
  const testQueries = ["intelligence cycle", "osint techniques", "strategic analysis"]

  const results = []

  console.log("🔍 Testing Search API...")

  for (const query of testQueries) {
    try {
      console.log(`\nTesting query: "${query}"`)

      const url = baseUrl ? `${baseUrl}/api/search` : "/api/search"
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error(`API returned ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()

      console.log(`✅ API Response received`)
      console.log(`Found ${data.results?.length || 0} results`)

      if (data.enhancedQuery) {
        console.log(`Enhanced query: "${data.enhancedQuery}"`)
      }

      results.push({
        query,
        success: true,
        resultsCount: data.results?.length || 0,
        enhancedQuery: data.enhancedQuery,
        firstResult: data.results?.[0]?.title || "No results",
      })
    } catch (error) {
      console.error(`❌ Error testing query "${query}":`, error)
      results.push({
        query,
        success: false,
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }

  console.log("\n📊 Test Summary:")
  console.table(results)

  const allSuccessful = results.every((result) => result.success)
  console.log(
    allSuccessful
      ? "✅ All tests passed! The search API is working correctly."
      : "❌ Some tests failed. Please check the errors above.",
  )

  return {
    success: allSuccessful,
    results,
  }
}
