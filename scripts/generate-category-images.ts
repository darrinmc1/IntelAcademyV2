import fs from "fs"
import path from "path"
import { ensureCategoryImagesDirectory, listRequiredCategoryImages } from "../utils/create-category-images"

// Function to copy a placeholder image for each required category
async function generateCategoryImages() {
  // Ensure the directory exists
  const categoryImagesDir = ensureCategoryImagesDirectory()

  // Get the list of required images
  const requiredImages = listRequiredCategoryImages()

  // Path to the placeholder image
  const placeholderPath = path.join(process.cwd(), "public", "placeholder-f8jwf.png")

  // Check if the placeholder exists
  if (!fs.existsSync(placeholderPath)) {
    console.error("Placeholder image not found:", placeholderPath)
    return
  }

  // Copy the placeholder for each required image
  for (const imageName of requiredImages) {
    const imagePath = path.join(categoryImagesDir, imageName)

    // Skip if the image already exists
    if (fs.existsSync(imagePath)) {
      console.log(`Image already exists: ${imageName}`)
      continue
    }

    // Copy the placeholder
    fs.copyFileSync(placeholderPath, imagePath)
    console.log(`Created placeholder for: ${imageName}`)
  }

  console.log("Category images generation complete")
}

// Run the function
generateCategoryImages().catch(console.error)
