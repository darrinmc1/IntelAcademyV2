import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/topics", "Topics", "The topic catalog, from foundations through specialist techniques.")

import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
