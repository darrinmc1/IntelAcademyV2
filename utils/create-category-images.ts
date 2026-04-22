import fs from "fs"
import path from "path"

// Function to ensure the category-images directory exists
export function ensureCategoryImagesDirectory() {
  const publicDir = path.join(process.cwd(), "public")
  const categoryImagesDir = path.join(publicDir, "category-images")

  // Create the directory if it doesn't exist
  if (!fs.existsSync(categoryImagesDir)) {
    fs.mkdirSync(categoryImagesDir, { recursive: true })
    console.log("Created category-images directory")
  }

  return categoryImagesDir
}

// This function would be used in a script to generate placeholder images
// but for now we'll just use it to document the expected images
export function listRequiredCategoryImages() {
  return [
    "foundations.png",
    "osint.png",
    "analytical-techniques.png",
    "strategic-intelligence.png",
    "tactical-intelligence.png",
    "operational-intelligence.png",
    "report-writing.png",
    "threat-assessment.png",
    "crime-series-analysis.png",
    "hot-spot-analysis.png",
    "network-analysis.png",
    "target-profiling.png",
    "crime-trend-analysis.png",
    "intelligence-tools.png",
    "source-evaluation.png",
    "digital-intelligence.png",
    "geospatial-intelligence.png",
    "intelligence-ethics.png",
    "cognitive-bias.png",
    "financial-intelligence.png",
    "intelligence-communication.png",
  ]
}
