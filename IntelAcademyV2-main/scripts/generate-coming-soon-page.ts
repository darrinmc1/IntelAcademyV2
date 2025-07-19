import fs from "fs"
import path from "path"

// Usage: node scripts/generate-coming-soon-page.js "Topic Title" "topic-slug" "category"
// Example: node scripts/generate-coming-soon-page.js "Strategic Forecasting" "strategic-forecasting" "strategic-intelligence"

function generateComingSoonPage(topicTitle: string, topicSlug: string, category: string) {
  const description = `Learn about ${topicTitle.toLowerCase()} in intelligence analysis.`

  const content = `import { ContentComingSoon } from "@/components/content-coming-soon"

export const metadata = {
  title: "${topicTitle} | The Intel Analyst Academy",
  description: "${description}",
}

export default function ${topicTitle.replace(/\s+/g, "")}Page() {
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
  fs.writeFileSync(path.join(dir, "page.tsx"), content)

  console.log(`Created coming soon page for "${topicTitle}" at app/topics/${topicSlug}/page.tsx`)
}

// Get command line arguments
const args = process.argv.slice(2)
if (args.length < 2) {
  console.error("Please provide topic title and slug")
  process.exit(1)
}

const topicTitle = args[0]
const topicSlug = args[1]
const category = args[2] || "general"

generateComingSoonPage(topicTitle, topicSlug, category)
