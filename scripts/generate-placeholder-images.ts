import fs from "fs"
import path from "path"
import { topicImageBaseNames } from "../utils/image-naming"

// Function to generate placeholder image metadata
function generatePlaceholderImage(topic: string, index: number, type: string, description: string) {
  const baseName = topicImageBaseNames[topic] || topic.replace(/-/g, "")
  let fileName = ""

  if (type === "thumb") {
    fileName = `${baseName}${index}-thumb.png`
  } else if (type === "banner") {
    fileName = `${baseName}${index}-banner.png`
  } else if (type === "banner-large") {
    fileName = `${baseName}${index}-banner-large.png`
  } else if (type === "header") {
    fileName = `${baseName}${index}-header.png`
  } else {
    fileName = `${baseName}${index}.png`
  }

  return {
    fileName,
    path: `/${fileName}`,
    description,
  }
}

// Function to generate placeholder images for all topics
function generateAllPlaceholderImages() {
  const placeholders = []

  // Generate placeholders for each topic
  for (const [topic, baseName] of Object.entries(topicImageBaseNames)) {
    // Main images
    placeholders.push(generatePlaceholderImage(topic, 1, "main", `Main image for ${topic}`))
    placeholders.push(generatePlaceholderImage(topic, 2, "main", `Secondary image for ${topic}`))

    // Thumbnails
    placeholders.push(generatePlaceholderImage(topic, 1, "thumb", `Thumbnail for ${topic}`))
    placeholders.push(generatePlaceholderImage(topic, 2, "thumb", `Secondary thumbnail for ${topic}`))

    // Banners
    placeholders.push(generatePlaceholderImage(topic, 1, "banner", `Banner for ${topic}`))
    placeholders.push(generatePlaceholderImage(topic, 1, "banner-large", `Large banner for ${topic}`))

    // Headers
    placeholders.push(generatePlaceholderImage(topic, 1, "header", `Header for ${topic}`))
  }

  return placeholders
}

// Function to write placeholder data to a file
function writePlaceholderData(placeholders: any[]) {
  const outputPath = path.join(process.cwd(), "utils", "placeholder-images.ts")

  const fileContent = `// Auto-generated placeholder image data
export const placeholderImages = ${JSON.stringify(placeholders, null, 2)};

// Function to get placeholder image path
export function getPlaceholderImagePath(topic: string, index: number = 1, type: string = 'main'): string {
  const baseName = topic.replace(/-/g, '');
  
  if (type === 'thumb') {
    return \`/\${baseName}\${index}-thumb.png\`;
  } else if (type === 'banner') {
    return \`/\${baseName}\${index}-banner.png\`;
  } else if (type === 'banner-large') {
    return \`/\${baseName}\${index}-banner-large.png\`;
  } else if (type === 'header') {
    return \`/\${baseName}\${index}-header.png\`;
  } else {
    return \`/\${baseName}\${index}.png\`;
  }
}
`

  fs.writeFileSync(outputPath, fileContent)
  console.log(`Placeholder data written to ${outputPath}`)
}

// Main function
function main() {
  const placeholders = generateAllPlaceholderImages()
  writePlaceholderData(placeholders)
  console.log(`Generated ${placeholders.length} placeholder image definitions`)
}

// Run the script
main()
