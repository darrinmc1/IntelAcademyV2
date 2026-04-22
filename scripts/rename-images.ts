import fs from "fs"
import path from "path"
import { topicImageBaseNames } from "../utils/image-naming"

// Function to rename images in a directory
function renameImagesInDirectory(directory: string, dryRun = true) {
  // Check if directory exists
  if (!fs.existsSync(directory)) {
    console.error(`Directory does not exist: ${directory}`)
    return
  }

  // Get all files in the directory
  const files = fs.readdirSync(directory)

  // Process each file
  for (const file of files) {
    const filePath = path.join(directory, file)
    const stats = fs.statSync(filePath)

    // If it's a directory, recursively process it
    if (stats.isDirectory()) {
      renameImagesInDirectory(filePath, dryRun)
      continue
    }

    // Check if it's an image file
    if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      continue
    }

    // Try to match the file to a topic
    let matchedTopic = ""
    const matchIndex = 1

    // Check if the file matches any topic
    for (const [topicSlug, baseName] of Object.entries(topicImageBaseNames)) {
      if (file.includes(topicSlug) || file.includes(baseName)) {
        matchedTopic = baseName
        break
      }
    }

    // If no match found, try to extract from the filename
    if (!matchedTopic) {
      // Remove file extension and common suffixes
      const baseName = file
        .replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")
        .replace(/-banner(-large)?$/, "")
        .replace(/-thumb$/, "")
        .replace(/-header$/, "")
        .replace(/-main$/, "")
        .replace(/-default$/, "")

      // Check if it's a known topic
      for (const [topicSlug, baseImageName] of Object.entries(topicImageBaseNames)) {
        if (baseName.includes(topicSlug.replace(/-/g, ""))) {
          matchedTopic = baseImageName
          break
        }
      }

      // If still no match, use the base name
      if (!matchedTopic) {
        matchedTopic = baseName
      }
    }

    // Determine the new file name
    let newFileName = ""
    const fileExt = path.extname(file)
    const fileNameWithoutExt = path.basename(file, fileExt)

    // Check for special suffixes
    if (fileNameWithoutExt.includes("thumb")) {
      newFileName = `${matchedTopic}${matchIndex}-thumb${fileExt}`
    } else if (fileNameWithoutExt.includes("banner-large")) {
      newFileName = `${matchedTopic}${matchIndex}-banner-large${fileExt}`
    } else if (fileNameWithoutExt.includes("banner")) {
      newFileName = `${matchedTopic}${matchIndex}-banner${fileExt}`
    } else if (fileNameWithoutExt.includes("header")) {
      newFileName = `${matchedTopic}${matchIndex}-header${fileExt}`
    } else if (fileNameWithoutExt.includes("main")) {
      newFileName = `${matchedTopic}${matchIndex}${fileExt}`
    } else if (fileNameWithoutExt.includes("default")) {
      newFileName = `${matchedTopic}${matchIndex}${fileExt}`
    } else {
      newFileName = `${matchedTopic}${matchIndex}${fileExt}`
    }

    // Log the rename operation
    console.log(`Renaming: ${file} -> ${newFileName}`)

    // Perform the rename if not a dry run
    if (!dryRun) {
      const newFilePath = path.join(directory, newFileName)
      fs.renameSync(filePath, newFilePath)
    }
  }
}

// Main function
function main() {
  const args = process.argv.slice(2)
  const dryRun = !args.includes("--execute")

  if (dryRun) {
    console.log("Running in dry-run mode. No files will be renamed.")
    console.log("To execute the rename, run with --execute flag.")
  }

  // Rename images in the public directory
  renameImagesInDirectory(path.join(process.cwd(), "public"), dryRun)

  // Rename images in the topic-images directory
  const topicImagesDir = path.join(process.cwd(), "public", "topic-images")
  if (fs.existsSync(topicImagesDir)) {
    renameImagesInDirectory(topicImagesDir, dryRun)
  }

  // Rename images in the category-images directory
  const categoryImagesDir = path.join(process.cwd(), "public", "category-images")
  if (fs.existsSync(categoryImagesDir)) {
    renameImagesInDirectory(categoryImagesDir, dryRun)
  }

  console.log("Image renaming process completed.")
}

// Run the script
main()
