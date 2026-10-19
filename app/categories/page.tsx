import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/categories", "Categories", "Core disciplines, collection, analysis techniques, and tools.")

import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
