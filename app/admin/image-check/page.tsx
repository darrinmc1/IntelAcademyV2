import { ImageChecker } from "@/components/image-checker"

export const metadata = {
  title: "Image Path Verification | Intel Analyst Academy",
  description: "Admin tool to verify image paths",
}

export default function ImageCheckPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Image Path Verification</h1>
      <p className="mb-6 text-muted-foreground">
        This tool checks if all image paths used in the application are accessible.
      </p>

      <ImageChecker />
    </main>
  )
}
