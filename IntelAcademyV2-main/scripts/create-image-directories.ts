import fs from "fs"
import path from "path"

// Function to create the necessary image directories
function createImageDirectories() {
  const publicDir = path.join(process.cwd(), "public")

  // Define the directories we need
  const directories = [
    "images",
    "images/categories",
    "images/topics",
    "images/banners",
    "images/placeholders",
    "category-images", // Also create the old path for backward compatibility
  ]

  // Create each directory
  for (const dir of directories) {
    const dirPath = path.join(publicDir, dir)

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
      console.log(`Created directory: ${dir}`)
    } else {
      console.log(`Directory already exists: ${dir}`)
    }
  }

  console.log("Image directories created successfully")
}

// Run the function
createImageDirectories()
