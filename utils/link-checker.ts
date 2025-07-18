import fs from "fs"
import path from "path"

// Types
export interface LinkData {
  url: string
  title: string
  category: string
  status: "valid" | "minimal" | "missing" | "checking"
  contentScore?: number
  lastChecked?: string
}

// Function to scan the app directory and find all page routes
export async function scanAppDirectory(appDir = "app"): Promise<string[]> {
  const routes: string[] = []
  const fullPath = path.join(process.cwd(), appDir)

  if (!fs.existsSync(fullPath)) {
    return routes
  }

  const scanDirectory = (dirPath: string, routePath = "") => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullEntryPath = path.join(dirPath, entry.name)

      // Skip hidden files and directories
      if (entry.name.startsWith(".")) continue

      // Handle directories
      if (entry.isDirectory()) {
        // Special handling for route groups (directories in parentheses)
        const isRouteGroup = entry.name.startsWith("(") && entry.name.endsWith(")")

        // Skip certain directories
        if (["api", "components", "lib", "utils", "hooks", "public"].includes(entry.name)) {
          continue
        }

        // For route groups, don't add to the path
        const newRoutePath = isRouteGroup ? routePath : path.join(routePath, entry.name)

        // Check if this is a page directory (contains page.tsx)
        const hasPage =
          fs.existsSync(path.join(fullEntryPath, "page.tsx")) ||
          fs.existsSync(path.join(fullEntryPath, "page.jsx")) ||
          fs.existsSync(path.join(fullEntryPath, "page.ts")) ||
          fs.existsSync(path.join(fullEntryPath, "page.js"))

        if (hasPage) {
          routes.push("/" + newRoutePath.replace(/\\/g, "/"))
        }

        // Recursively scan subdirectories
        scanDirectory(fullEntryPath, newRoutePath)
      }
    }
  }

  scanDirectory(fullPath)

  // Add the root route if it exists
  if (
    fs.existsSync(path.join(fullPath, "page.tsx")) ||
    fs.existsSync(path.join(fullPath, "page.jsx")) ||
    fs.existsSync(path.join(fullPath, "page.ts")) ||
    fs.existsSync(path.join(fullPath, "page.js"))
  ) {
    routes.push("/")
  }

  return routes
}

// Function to check if a page exists
export async function checkPageExists(url: string): Promise<boolean> {
  // Remove leading slash and convert to file path
  const relativePath = url === "/" ? "app/page.tsx" : `app${url}/page.tsx`

  const fullPath = path.join(process.cwd(), relativePath)

  return fs.existsSync(fullPath)
}

// Function to estimate content volume
export async function estimateContentVolume(url: string): Promise<number> {
  try {
    // Remove leading slash and convert to file path
    const relativePath = url === "/" ? "app/page.tsx" : `app${url}/page.tsx`

    const fullPath = path.join(process.cwd(), relativePath)

    if (!fs.existsSync(fullPath)) {
      return 0
    }

    const content = fs.readFileSync(fullPath, "utf8")

    // Simple heuristic: count lines of code and JSX elements
    const lines = content.split("\n").length
    const jsxElements = (content.match(/<[a-zA-Z]/g) || []).length

    // Calculate a score based on content volume
    // This is a simple heuristic and can be improved
    const score = Math.min(100, Math.round((lines * 0.5 + jsxElements * 2) / 3))

    return score
  } catch (error) {
    console.error("Error estimating content volume:", error)
    return 0
  }
}

// Function to get link data for a URL
export async function getLinkData(url: string): Promise<LinkData> {
  // Default data
  const data: LinkData = {
    url,
    title: url.split("/").pop() || "Home",
    category: getCategoryFromUrl(url),
    status: "checking",
  }

  try {
    // Check if page exists
    const exists = await checkPageExists(url)

    if (!exists) {
      data.status = "missing"
      data.contentScore = 0
      return data
    }

    // Estimate content volume
    const contentScore = await estimateContentVolume(url)
    data.contentScore = contentScore

    // Determine status based on content score
    if (contentScore > 40) {
      data.status = "valid"
    } else {
      data.status = "minimal"
    }

    // Try to extract a better title
    data.title = (await extractPageTitle(url)) || data.title

    return data
  } catch (error) {
    console.error(`Error checking link ${url}:`, error)
    data.status = "missing"
    return data
  }
}

// Helper function to categorize URLs
function getCategoryFromUrl(url: string): string {
  if (url === "/") return "core"

  const segments = url.split("/").filter(Boolean)

  if (segments.length === 0) return "core"

  const firstSegment = segments[0]

  switch (firstSegment) {
    case "admin":
      return "admin"
    case "topics":
      return "topic"
    case "learning-paths":
      return "learning-path"
    case "search":
    case "about":
    case "learn-more":
    case "request-topic":
    case "video-library":
    case "downloads":
    case "forum":
      return "core"
    case "coming-soon":
    case "lesson-in-development":
    case "not-found":
      return "utility"
    default:
      return "other"
  }
}

// Helper function to extract page title
async function extractPageTitle(url: string): Promise<string | null> {
  try {
    // Remove leading slash and convert to file path
    const relativePath = url === "/" ? "app/page.tsx" : `app${url}/page.tsx`

    const fullPath = path.join(process.cwd(), relativePath)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const content = fs.readFileSync(fullPath, "utf8")

    // Try to extract title from h1 or title component
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s)
    if (h1Match && h1Match[1]) {
      // Clean up any JSX
      return h1Match[1].replace(/<[^>]*>/g, "").trim()
    }

    // Try to find a title prop
    const titleMatch = content.match(/title="([^"]+)"/s)
    if (titleMatch && titleMatch[1]) {
      return titleMatch[1]
    }

    // Try to find a variable that might contain the title
    const pageNameMatch = url.split("/").pop() || ""
    const formattedName = pageNameMatch
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return formattedName
  } catch (error) {
    console.error("Error extracting page title:", error)
    return null
  }
}
