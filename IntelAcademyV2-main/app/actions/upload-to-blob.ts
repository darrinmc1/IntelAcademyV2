"use server"

import { revalidatePath } from "next/cache"
import type { ImageMetadata } from "@/utils/blob-storage"
import { safeRevalidatePath } from "@/utils/revalidation"

// Function to handle image uploads without using Blob
export async function uploadImageFromUrlToBlob(
  imageUrl: string,
  category: string,
  filename: string,
): Promise<ImageMetadata | null> {
  try {
    // Create a local path for the image
    const localPath = `/images/${category}/${filename}`

    // Create metadata for the local image
    const metadata: ImageMetadata = {
      url: localPath,
      path: localPath,
      category,
      size: 0,
      format: filename.split(".").pop() || "",
      createdAt: new Date(),
    }

    // Revalidate paths that might display this image
    revalidatePath(`/learning-paths/${category}`)
    revalidatePath("/")

    return metadata
  } catch (error) {
    console.error("Error handling image:", error)
    return null
  }
}

// Function to get content type based on filename
function getContentTypeFromFilename(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase() || ""
  const contentTypes: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
  }

  return contentTypes[extension] || "application/octet-stream"
}

// Function to handle local image uploads
export async function uploadLocalImageToBlob(localPath: string, category: string): Promise<ImageMetadata | null> {
  try {
    // Get the filename from the path
    const filename = localPath.split("/").pop() || ""

    // Create a path for the image
    const imagePath = `/images/${category}/${filename}`

    // Create metadata for the image
    const metadata: ImageMetadata = {
      url: imagePath,
      path: imagePath,
      category,
      size: 0,
      format: filename.split(".").pop() || "",
      createdAt: new Date(),
    }

    return metadata
  } catch (error) {
    console.error("Error handling local image:", error)
    return null
  }
}

// Function to handle multiple image paths
export async function migratePublicImagesToBlob(
  imagePaths: string[],
  baseUrl = "http://localhost:3000",
): Promise<Record<string, string>> {
  const results: Record<string, string> = {}

  for (const path of imagePaths) {
    try {
      // Skip if not an image
      if (!path.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        continue
      }

      // Extract category and filename
      const pathParts = path.split("/")
      const filename = pathParts.pop() || ""
      const category = pathParts.length > 1 ? pathParts[pathParts.length - 1] : "uncategorized"

      // Create a local path for the image
      const localPath = `/images/${category}/${filename}`

      results[path] = localPath
      console.log(`✅ Using local path for ${path}: ${localPath}`)
    } catch (error) {
      console.error(`❌ Error processing image ${path}:`, error)
    }
  }

  return results
}

export async function uploadToBlobAction(formData: FormData) {
  try {
    const file = formData.get("file") as File
    if (!file) {
      return { success: false, error: "No file provided" }
    }

    const category = (formData.get("category") as string) || "general"
    const filename = file.name

    const localPath = `/images/${category}/${filename}`

    // Use the safe revalidation utility
    await safeRevalidatePath(`/learning-paths/${category}`)
    await safeRevalidatePath("/")

    return {
      success: true,
      url: localPath,
      path: localPath,
    }
  } catch (error) {
    console.error("Error handling upload:", error)
    return { success: false, error: String(error) }
  }
}
