"use client"

import { CategoryThumbnailsShowcase } from "@/components/category-thumbnails-showcase"

export default function CategoryThumbnailsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Intelligence Category Thumbnails</h1>
      <p className="text-gray-600 mb-8">
        This page showcases the custom thumbnails for each intelligence category. These thumbnails are designed to
        provide visual consistency across the platform.
      </p>

      <CategoryThumbnailsShowcase />

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Implementation Guide</h2>
        <p className="mb-4">To use these thumbnails in your components, import the CategoryThumbnail component:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          {`import { CategoryThumbnail } from "@/components/category-thumbnail"

// Basic usage
<CategoryThumbnail category="osint" />

// With custom size
<CategoryThumbnail category="strategic-intelligence" size="lg" />

// With label
<CategoryThumbnail category="tactical-intelligence" showLabel={true} />

// With custom class and click handler
<CategoryThumbnail 
  category="operational-intelligence" 
  className="my-custom-class" 
  onClick={() => console.log("Clicked!")} 
/>`}
        </pre>
      </div>
    </div>
  )
}
