export interface ImageMetadata {
  url: string
  path: string
  category: string
  size: number
  format: string
  createdAt: Date
}

export async function uploadToBlob(file: File, category: string): Promise<ImageMetadata> {
  // Placeholder for actual blob storage upload
  const filename = file.name
  const url = `/images/${category}/${filename}`

  return {
    url,
    path: url,
    category,
    size: file.size,
    format: filename.split(".").pop() || "",
    createdAt: new Date(),
  }
}
