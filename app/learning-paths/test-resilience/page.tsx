"use client"

import { EnhancedLearningPathCard } from "@/components/enhanced-learning-path-card"

// Extreme test cases for data resilience
const extremeTestCases = [
  // Completely empty object
  {},

  // Null values
  {
    title: null,
    description: null,
    image: null,
    href: null,
    difficulty: null,
    topics: null,
    estimatedTime: null,
  },

  // Undefined values
  {
    title: undefined,
    description: undefined,
    image: undefined,
    href: undefined,
    difficulty: undefined,
    topics: undefined,
    estimatedTime: undefined,
  },

  // Invalid types
  {
    title: 123,
    description: [],
    image: {},
    href: true,
    difficulty: "Invalid",
    topics: "not a number",
    estimatedTime: false,
  },

  // Edge cases
  {
    title: "",
    description: "   ",
    image: "invalid-url",
    href: "javascript:alert('xss')",
    difficulty: "Expert" as any,
    topics: -5,
    estimatedTime: "",
  },
]

export default function TestResiliencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Data Resilience Testing</h1>
      <p className="text-gray-600 mb-8">
        Testing how learning path cards handle extreme edge cases and corrupted data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extremeTestCases.map((testCase, index) => (
          <div key={index} className="space-y-2">
            <div className="text-sm font-medium text-gray-700">
              Test Case {index + 1}:{" "}
              {Object.keys(testCase).length === 0
                ? "Empty Object"
                : Object.values(testCase).every((v) => v === null)
                  ? "All Null"
                  : Object.values(testCase).every((v) => v === undefined)
                    ? "All Undefined"
                    : "Mixed Invalid Data"}
            </div>
            <EnhancedLearningPathCard {...(testCase as any)} />
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-2">✅ Resilience Test Results</h2>
        <p className="text-green-700">
          If you can see this message and all cards above are displaying properly with fallback content, then the data
          validation and error handling is working correctly!
        </p>
      </div>
    </div>
  )
}
