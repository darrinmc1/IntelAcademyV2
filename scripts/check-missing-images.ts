import fs from "fs"
import path from "path"

// Define the public directory
const publicDir = path.join(process.cwd(), "public")

// Define the image directories to check
const imageDirectories = ["", "topic-thumbnails", "topic-images", "learning-path-thumbnails", "category-images"]

// Define the image extensions to check
const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]

// Function to check if a file exists
function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath)
}

// Function to check if a file is an image
function isImageFile(filePath: string): boolean {
  const ext = path.extname(filePath).toLowerCase()
  return imageExtensions.includes(ext)
}

// Function to get all image references in a file
function getImageReferences(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, "utf8")

    // Match image paths in various formats
    const patterns = [
      /src=["']([^"']+\.(png|jpg|jpeg|gif|svg|webp))["']/g,
      /image=["']([^"']+\.(png|jpg|jpeg|gif|svg|webp))["']/g,
      /image:\s*["']([^"']+\.(png|jpg|jpeg|gif|svg|webp))["']/g,
      /url$$["']?([^"')]+\.(png|jpg|jpeg|gif|svg|webp))["']?$$/g,
    ]

    const matches: string[] = []

    patterns.forEach((pattern) => {
      let match
      while ((match = pattern.exec(content)) !== null) {
        if (match[1].startsWith("/")) {
          matches.push(match[1])
        } else if (!match[1].startsWith("http")) {
          matches.push("/" + match[1])
        }
      }
    })

    return matches
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return []
  }
}

// Function to scan a directory for files
function scanDirectory(dir: string, fileExtensions: string[]): string[] {
  const results: string[] = []

  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      results.push(...scanDirectory(filePath, fileExtensions))
    } else {
      const ext = path.extname(file).toLowerCase()
      if (fileExtensions.includes(ext)) {
        results.push(filePath)
      }
    }
  }

  return results
}

// Main function
async function main() {
  console.log("Checking for missing images...")

  // Get all code files
  const codeFiles = scanDirectory(path.join(process.cwd(), "app"), [".ts", ".tsx", ".js", ".jsx"])
  codeFiles.push(...scanDirectory(path.join(process.cwd(), "components"), [".ts", ".tsx", ".js", ".jsx"]))

  // Collect all image references
  const imageReferences = new Set<string>()

  for (const file of codeFiles) {
    const references = getImageReferences(file)
    references.forEach((ref) => imageReferences.add(ref))
  }

  console.log(`Found ${imageReferences.size} image references in code.`)

  // Check if each referenced image exists
  const missingImages: string[] = []

  for (const ref of imageReferences) {
    // Skip external URLs and placeholder.svg
    if (ref.startsWith("http") || ref.includes("placeholder.svg")) {
      continue
    }

    const imagePath = path.join(publicDir, ref)

    if (!fileExists(imagePath)) {
      missingImages.push(ref)
    }
  }

  // Print results
  if (missingImages.length === 0) {
    console.log("All referenced images exist!")
  } else {
    console.log(`Found ${missingImages.length} missing images:`)
    missingImages.forEach((img) => console.log(`  - ${img}`))

    // Generate placeholder images for missing images
    console.log("\nTo fix these issues, you can:")
    console.log("1. Create the missing images")
    console.log("2. Update the code to use fallback images")
    console.log("3. Use the ReliableImage component with fallbacks")
  }
}

main().catch(console.error)
