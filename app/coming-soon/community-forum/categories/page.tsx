import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  alternates: { canonical: "/coming-soon/community-forum/categories" },
  title: "Forum categories",
  description: "Forum categories are not published. The forum is not open.",
}

export default function ForumCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">Forum categories</h1>
      <p className="text-muted-foreground mb-6">
        There are no category boards. The old links on this page pointed at addresses that were never built.
      </p>
      <Button asChild>
        <Link href="/forum">Forum placeholder</Link>
      </Button>
    </div>
  )
}
