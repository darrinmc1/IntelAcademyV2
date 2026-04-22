import { createCanvas } from "canvas"
import fs from "fs"
import path from "path"

// Define category colors
const categoryColors = {
  foundations: "#3b82f6", // blue-500
  "strategic-intelligence": "#4f46e5", // indigo-600
  "tactical-intelligence": "#16a34a", // green-600
  "operational-intelligence": "#0891b2", // cyan-600
  osint: "#d97706", // amber-600
  "report-writing": "#334155", // slate-700
  "threat-assessment": "#dc2626", // red-600
  "crime-series-analysis": "#9333ea", // purple-600
  "hot-spot-analysis": "#ea580c", // orange-600
  "network-analysis": "#2563eb", // blue-600
  "target-profiling": "#b91c1c", // red-700
  "crime-trend-analysis": "#059669", // emerald-600
  "intelligence-tools": "#374151", // gray-700
  "source-evaluation": "#ca8a04", // yellow-600
  "digital-intelligence": "#0284c7", // sky-600
  "geospatial-intelligence": "#65a30d", // lime-600
  "intelligence-ethics": "#0d9488", // teal-600
  "cognitive-bias": "#e11d48", // rose-600
  "financial-intelligence": "#047857", // emerald-700
  "intelligence-communication": "#1d4ed8", // blue-700
  "analytical-techniques": "#7c3aed", // violet-600
  "excel-for-analysts": "#15803d", // green-700
}

// Function to generate a thumbnail for a category
export async function generateCategoryThumbnail(
  category: string,
  size = 128,
  outputDir = "./generated-thumbnails",
): Promise<string> {
  // Create canvas
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext("2d")

  // Get color for category or use default
  const color = categoryColors[category as keyof typeof categoryColors] || "#6b7280"

  // Fill background
  ctx.fillStyle = color
  ctx.fillRect(0, 0, size, size)

  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, size, size)
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)")
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.3)")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  // Add category initial or icon placeholder
  const initial = category.charAt(0).toUpperCase()
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
  ctx.font = `bold ${size / 2}px Arial`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(initial, size / 2, size / 2)

  // Add subtle pattern
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
  ctx.lineWidth = 1
  for (let i = 0; i < size; i += 10) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(i, 0)
    ctx.stroke()
  }

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Save the image
  const outputPath = path.join(outputDir, `${category}-thumbnail.png`)
  const buffer = canvas.toBuffer("image/png")
  fs.writeFileSync(outputPath, buffer)

  return outputPath
}

// Generate thumbnails for all categories
export async function generateAllCategoryThumbnails(
  size = 128,
  outputDir = "./generated-thumbnails",
): Promise<Record<string, string>> {
  const paths: Record<string, string> = {}

  for (const category of Object.keys(categoryColors)) {
    paths[category] = await generateCategoryThumbnail(category, size, outputDir)
  }

  return paths
}
