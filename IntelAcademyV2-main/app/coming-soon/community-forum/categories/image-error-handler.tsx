"use client"

import { useEffect } from "react"

export function ImageErrorHandler() {
  useEffect(() => {
    // Find all images on the page
    const images = document.querySelectorAll("img")

    // Add error handler to each image
    images.forEach((img) => {
      img.addEventListener("error", () => {
        // Get the alt text to use in the placeholder
        const altText = img.alt || "Image"

        // Replace with placeholder
        img.src = `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(altText)}`
      })
    })
  }, [])

  // This component doesn't render anything
  return null
}
