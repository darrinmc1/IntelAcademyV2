import fs from "fs"
import path from "path"
import { listRequiredCategoryImages } from "../utils/create-category-images"

// Function to copy placeholder images to the category-images folder
async function copyPlaceholderImages() {
  const publicDir = path.join(process.cwd(), "public")
  const categoryImagesDir = path.join(publicDir, "category-images")
  const placeholderPath = path.join(publicDir, "placeholder-f8jwf.png")

  // Create the directory if it doesn't exist
  if (!fs.existsSync(categoryImagesDir)) {
    fs.mkdirSync(categoryImagesDir, { recursive: true })
    console.log("Created category-images directory")
  }

  // Check if the placeholder exists
  if (!fs.existsSync(placeholderPath)) {
    console.error("Placeholder image not found:", placeholderPath)
    return
  }

  // Get the list of required images
  const requiredImages = listRequiredCategoryImages()

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

  console.log("Placeholder images copied successfully")
}

// Run the function
copyPlaceholderImages().catch(console.error)
