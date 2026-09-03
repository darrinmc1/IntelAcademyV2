export interface ImageMetadata {
  url: string
  path: string
  category: string
  size: number
  format: string
  createdAt: Date
}

export async function uploadToBlob(file: File, category: string): Promise<ImageMetadata> {
  // Image stub only. Private path-intro / lesson video storage lives in
  // lib/path-intro-blob.ts and lib/lesson-video-blob.ts.
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
