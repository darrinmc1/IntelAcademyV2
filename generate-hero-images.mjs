#!/usr/bin/env node

/**
 * Generate hero images for all missing topics
 * Uses canvas to create themed images
 * Run: node generate-hero-images.mjs
 */

import { createCanvas } from "canvas"
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Intel Academy color scheme
const COLORS = {
  darkBg: "#0a1628",
  accentTeal: "#00d4ff",
  accentDark: "#00a8cc",
  textLight: "#ffffff",
  textMuted: "#a0aac1",
}

// List of topics that need hero images
const topics = [
  "all-topics",
  "analysis-competing-hypotheses",
  "analysts-notebook-fundamentals",
  "clear-writing-principles",
  "conclusion-development",
  "data-presentation",
  "data-visualization-intelligence",
  "digital-evidence-documentation",
  "enhanced-3d",
  "entity-relationship-charts",
  "estimative-language",
  "ethical-decision-making",
  "evidence-based-conclusions",
  "excel-fundamentals-for-analysts",
  "executive-summaries-mastery",
  "finint-basics",
  "geoint-fundamentals",
  "good-intelligence-report",
  "humint-fundamentals",
  "information-vs-intelligence",
  "intelligence-briefings",
  "intelligence-direction",
  "intelligence-failures",
  "intelligence-oversight",
  "intelligence-report-components",
  "intelligence-report-examples",
  "intelligence-report-fundamentals",
  "intelligence-report-types",
  "intelligence-requirements",
  "legal-frameworks",
  "main-body-organization",
  "masint-explained",
  "multi-source-integration",
  "notebook-creating-chart",
  "notebook-example-materials",
  "notebook-identities-labels",
  "notebook-importing-data",
  "notebook-social-network-analysis",
  "operational-reports",
  "osint-techniques",
  "privacy-civil-liberties",
  "recommendation-framework",
  "report-writing-pitfalls",
  "sample-topic",
  "sigint-basics",
  "socmint-techniques",
  "specialized-intelligence-products",
  "strategic-reports",
  "tactical-reports",
  "threat-monitoring",
  "timeline-visualization",
  "visual-intelligence-reporting",
  "what-is-strategic-intelligence",
  "writing-executive-summaries",
]

function formatTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function generateImage(title) {
  const width = 1200
  const height = 630
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext("2d")

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, COLORS.darkBg)
  gradient.addColorStop(1, "#0f2340")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  // Accent bar
  ctx.fillStyle = COLORS.accentTeal
  ctx.fillRect(0, 0, width, 8)

  // Icon placeholder (simple shield shape)
  const iconSize = 120
  const iconX = width / 2 - iconSize / 2
  const iconY = 120

  // Shield outline
  ctx.strokeStyle = COLORS.accentTeal
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(iconX, iconY)
  ctx.lineTo(iconX + iconSize, iconY)
  ctx.lineTo(iconX + iconSize, iconY + iconSize * 0.6)
  ctx.quadraticCurveTo(
    iconX + iconSize / 2,
    iconY + iconSize * 1.1,
    iconX,
    iconY + iconSize * 0.6,
  )
  ctx.closePath()
  ctx.stroke()

  // Checkmark inside shield
  ctx.strokeStyle = COLORS.accentTeal
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(iconX + iconSize * 0.3, iconY + iconSize * 0.5)
  ctx.lineTo(iconX + iconSize * 0.45, iconY + iconSize * 0.65)
  ctx.lineTo(iconX + iconSize * 0.7, iconY + iconSize * 0.35)
  ctx.stroke()

  // Title
  ctx.font = 'bold 56px "Arial", sans-serif'
  ctx.fillStyle = COLORS.textLight
  ctx.textAlign = "center"
  ctx.textBaseline = "top"

  // Wrap text if needed
  const maxWidth = width - 100
  const lineHeight = 70
  let y = iconY + iconSize + 80

  const words = title.split(" ")
  let line = ""
  const lines = []

  for (const word of words) {
    const testLine = line + (line ? " " : "") + word
    const metrics = ctx.measureText(testLine)

    if (metrics.width > maxWidth && line) {
      lines.push(line)
      line = word
    } else {
      line = testLine
    }
  }
  if (line) lines.push(line)

  lines.forEach((textLine, index) => {
    ctx.fillText(textLine, width / 2, y + index * lineHeight)
  })

  return canvas.toBuffer("image/png")
}

async function generateAllImages() {
  const publicDir = path.join(__dirname, "public")
  let created = 0
  let skipped = 0
  const errors = []

  console.log(`\n🎨 Generating ${topics.length} hero images...\n`)

  for (const topic of topics) {
    const imagePath = path.join(publicDir, `${topic}.png`)
    const title = formatTitle(topic)

    try {
      // Check if already exists
      await fs.access(imagePath)
      console.log(`⏭️  Skipped (exists): ${topic}`)
      skipped++
    } catch {
      // Generate new image
      try {
        const imageBuffer = generateImage(title)
        await fs.writeFile(imagePath, imageBuffer)
        console.log(`✅ Created: ${topic}`)
        created++
      } catch (error) {
        console.log(`❌ Error: ${topic} - ${error.message}`)
        errors.push({ topic, error: error.message })
      }
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`   ✅ Created: ${created}`)
  console.log(`   ⏭️  Skipped: ${skipped}`)
  console.log(`   ❌ Errors: ${errors.length}`)

  if (errors.length > 0) {
    console.log(`\n⚠️  Failed topics:`)
    errors.forEach(({ topic, error }) => {
      console.log(`   • ${topic}: ${error}`)
    })
  }

  console.log(
    `\n✨ Done! All images generated in /public/\nNow run: npm run build\n`,
  )
}

generateAllImages().catch((error) => {
  console.error("Fatal error:", error)
  process.exit(1)
})