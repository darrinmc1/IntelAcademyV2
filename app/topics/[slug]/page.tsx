import { notFound } from "next/navigation"

// Lessons live at app/topics/<slug>/page.tsx. This dynamic route only matches
// slugs with no lesson file. Those addresses are not published pages.
export const dynamicParams = false

export function generateStaticParams() {
  return []
}

export default function UnpublishedTopicPage() {
  notFound()
}
