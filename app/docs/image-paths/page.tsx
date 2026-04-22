import { ImagePathDocumentation } from "@/components/image-path-documentation"

export default function ImagePathsDocPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Image Path Documentation</h1>
      <p className="mb-8">
        This page documents the correct path structure for images in the The Intel Analyst Academy project. Use this as a
        reference when adding or updating images.
      </p>

      <ImagePathDocumentation />
    </div>
  )
}
