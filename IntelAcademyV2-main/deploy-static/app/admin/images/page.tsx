"use client"

import type React from "react"

import { useState } from "react"
import { uploadImage } from "@/app/actions/upload-image"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AdminImagesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Image Management</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Image Verification</h2>
          <p className="text-gray-600 mb-4">Check if all referenced images exist and are accessible.</p>
          <Button asChild>
            <Link href="/admin/image-check">Verify Images</Link>
          </Button>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Image Viewer</h2>
          <p className="text-gray-600 mb-4">Browse and view all images in the application.</p>
          <Button asChild>
            <Link href="/admin/images/view">View Images</Link>
          </Button>
        </div>
      </div>

      <hr className="my-8" />

      <ImageUploadSection />
    </div>
  )
}

function ImageUploadSection() {
  const [uploading, setUploading] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<{ url: string; pathname: string }[]>([])
  const [selectedCategory, setSelectedCategory] = useState("intelligence-disciplines")

  const categories = [
    { id: "intelligence-disciplines", name: "Intelligence Disciplines" },
    { id: "intelligence-categories", name: "Intelligence Categories" },
    { id: "operational-intelligence", name: "Operational Intelligence" },
    { id: "tactical-intelligence", name: "Tactical Intelligence" },
    { id: "strategic-intelligence", name: "Strategic Intelligence" },
    { id: "osint", name: "OSINT" },
    { id: "threat-assessments", name: "Threat Assessments" },
    { id: "crime-series-analysis", name: "Crime Series Analysis" },
    { id: "hot-spot-analysis", name: "Hot Spot Analysis" },
    { id: "target-profiling", name: "Target Profiling" },
    { id: "network-analysis", name: "Network Analysis" },
    { id: "crime-trend-analysis", name: "Crime Trend Analysis" },
  ]

  async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setUploading(true)

    const formData = new FormData(event.currentTarget)
    formData.append("category", selectedCategory)

    const result = await uploadImage(formData)

    if (result.success && result.url) {
      setUploadedImages((prev) => [...prev, { url: result.url, pathname: result.pathname }])
    }

    setUploading(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Image Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Upload New Image</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image File</label>
                <input type="file" name="file" accept="image/*" className="w-full p-2 border rounded-md" required />
              </div>

              <Button type="submit" disabled={uploading} className="w-full">
                {uploading ? "Uploading..." : "Upload Image"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Recently Uploaded Images</h2>

          {uploadedImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {uploadedImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={image.url || "/placeholder.svg"} alt="Uploaded image" fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="truncate text-sm">{image.pathname}</div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(image.url)
                          alert("URL copied to clipboard!")
                        }}
                      >
                        Copy URL
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No images uploaded in this session. Upload an image to see it here.</p>
          )}
        </div>
      </div>
    </div>
  )
}
