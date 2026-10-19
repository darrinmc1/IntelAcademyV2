import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/video-library", "Video library", "Training videos that have been published. Most lessons are still written text.")

import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
