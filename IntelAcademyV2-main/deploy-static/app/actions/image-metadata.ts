"use server"
import { safeRevalidatePath } from "@/utils/revalidation"

// Define types for image metadata
export interface ImageMetadata {
  path: string
  width: number
  height: number
  size: number
  format: string
  category?: string
  tags?: string[]
  createdAt: Date
  updatedAt: Date
}

// Function to get metadata for a specific image
export async function getImageMetadata(imagePath: string): Promise<ImageMetadata | null> {
  try {
    // In a real application, this would fetch from a database
    // For now, we'll return mock data
    return {
      path: imagePath,
      width: 800,
      height: 600,
      size: 102400, // 100KB
      format: imagePath.split(".").pop() || "unknown",
      category: imagePath.includes("/") ? imagePath.split("/")[1] : "uncategorized",
      tags: ["intelligence", "analysis"],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  } catch (error) {
    console.error(`Error getting metadata for ${imagePath}:`, error)
    return null
  }
}

// Function to get metadata for all images in a category
export async function getImagesByCategory(category: string): Promise<ImageMetadata[]> {
  try {
    // In a real application, this would fetch from a database
    // For now, we'll return mock data
    return [
      {
        path: `/category-images/${category}/image1.png`,
        width: 800,
        height: 600,
        size: 102400,
        format: "png",
        category,
        tags: ["intelligence", "analysis"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        path: `/category-images/${category}/image2.png`,
        width: 800,
        height: 600,
        size: 102400,
        format: "png",
        category,
        tags: ["intelligence", "analysis"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  } catch (error) {
    console.error(`Error getting images for category ${category}:`, error)
    return []
  }
}

// Function to update image metadata
export async function updateImageMetadata(id: string, metadata: any) {
  try {
    // Update metadata logic here

    // Use the safe revalidation utility
    await safeRevalidatePath("/admin/images")

    return { success: true }
  } catch (error) {
    console.error("Error updating image metadata:", error)
    return { success: false, error: String(error) }
  }
}
