import { Suspense } from "react"
import { SearchBar } from "@/components/search/search-bar"
import { SearchResults } from "@/components/search/search-results"
import { StaticImage } from "@/components/static-image"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface SearchPageProps {
  searchParams: { q?: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Search Intelligence Academy</h1>

      <div className="mb-8">
        <SearchBar initialQuery={query} />
      </div>

      <Suspense fallback={<SearchSkeleton />}>
        {query ? (
          <SearchResults query={query} />
        ) : (
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold mb-4">Popular Intelligence Topics</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <PopularSearchCard
                  title="OSINT Techniques"
                  description="Learn about Open Source Intelligence gathering methods"
                  imageUrl="/osint-banner.png"
                  url="/learning-paths/osint"
                />
                <PopularSearchCard
                  title="Strategic Intelligence"
                  description="Long-term planning and decision making"
                  imageUrl="/strategic-intelligence-banner.png"
                  url="/learning-paths/strategic-intelligence"
                />
                <PopularSearchCard
                  title="Report Writing"
                  description="Effective intelligence reporting techniques"
                  imageUrl="/report-writing-banner.png"
                  url="/learning-paths/report-writing"
                />
                <PopularSearchCard
                  title="Intelligence Cycle"
                  description="Understanding the intelligence process"
                  imageUrl="/intelligence-cycle.png"
                  url="/topics/intelligence-cycle"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Paths</CardTitle>
                  <CardDescription>Structured intelligence learning journeys</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 mb-4 rounded-md overflow-hidden">
                    <StaticImage
                      src="/learning-path.png"
                      alt="Learning Paths"
                      width={400}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    href="/learning-paths"
                    className="text-blue-600 hover:underline flex justify-between items-center"
                  >
                    Browse all learning paths
                    <span>→</span>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>All Topics</CardTitle>
                  <CardDescription>Complete list of intelligence topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 mb-4 rounded-md overflow-hidden">
                    <StaticImage
                      src="/intelligence-analysis-workspace.png"
                      alt="All Topics"
                      width={400}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    href="/topics/all-topics"
                    className="text-blue-600 hover:underline flex justify-between items-center"
                  >
                    View all topics
                    <span>→</span>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Request a Topic</CardTitle>
                  <CardDescription>Can&apos;t find what you&apos;re looking for?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 mb-4 rounded-md overflow-hidden">
                    <StaticImage
                      src="/collaborative-intelligence-hub.png"
                      alt="Request a Topic"
                      width={400}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    href="/request-topic"
                    className="text-blue-600 hover:underline flex justify-between items-center"
                  >
                    Submit a topic request
                    <span>→</span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </Suspense>
    </div>
  )
}

function PopularSearchCard({
  title,
  description,
  imageUrl,
  url,
}: {
  title: string
  description: string
  imageUrl: string
  url: string
}) {
  return (
    <Link href={url} className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-colors">
      <div className="w-12 h-12 rounded overflow-hidden shrink-0">
        <StaticImage src={imageUrl} alt={title} width={48} height={48} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

function SearchSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-6 w-48">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-40 w-full" />
            <div className="p-4">
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
