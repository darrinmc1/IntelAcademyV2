import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/video-library", "Video library", "Cards on this page open the written lesson. The page does not play video.")

import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
