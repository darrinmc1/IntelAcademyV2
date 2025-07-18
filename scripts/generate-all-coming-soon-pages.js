// This is a compiled version of the TypeScript file that can be run directly with Node.js
const fs = require("fs")
const path = require("path")
const { getTopicsNeedingComingSoonPages } = require("../utils/topic-status")

// Function to generate a single coming soon page
function generateComingSoonPage(topicTitle, topicSlug, category) {
  const description = `Learn about ${topicTitle.toLowerCase()} in intelligence analysis.`

  // Create a valid component name (remove spaces, special chars)
  const componentName =
    topicTitle
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/\s+/g, "")
      .replace(/^[a-z]/, (match) => match.toUpperCase()) + "Page"

  const content = `import { ContentComingSoon } from "@/components/content-coming-soon"

export const metadata = {
  title: "${topicTitle} | The Intel Analyst Academy",
  description: "${description}",
}

export default function ${componentName}() {
  return (
    <ContentComingSoon topicTitle="${topicTitle}" />
  )
}
`

  const dir = path.join(process.cwd(), "app", "topics", topicSlug)

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // Write the file
  const filePath = path.join(dir, "page.tsx")
  fs.writeFileSync(filePath, content)

  return filePath
}

// Main function to generate all coming soon pages
async function generateAllComingSoonPages() {
  console.log("Starting generation of all coming soon pages...")

  // Get all topics that need coming soon pages
  const topicsNeedingPages = getTopicsNeedingComingSoonPages()

  console.log(`Found ${topicsNeedingPages.length} topics that need coming soon pages.`)

  // Generate pages for each topic
  const generatedFiles = topicsNeedingPages.map((topic) => {
    const filePath = generateComingSoonPage(topic.title, topic.slug, topic.category)
    console.log(`Generated: ${filePath} for "${topic.title}"`)
    return filePath
  })

  console.log("\nSummary:")
  console.log(`Total pages generated: ${generatedFiles.length}`)
  console.log("All coming soon pages have been generated successfully!")
}

// Execute the main function
generateAllComingSoonPages().catch((error) => {
  console.error("Error generating coming soon pages:", error)
  process.exit(1)
})
