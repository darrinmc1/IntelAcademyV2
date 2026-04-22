import { Skeleton } from "@/components/ui/skeleton"

export default function TopicsLoading() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex items-center mb-6">
        <Skeleton className="h-10 w-32 mr-4" />
        <Skeleton className="h-10 w-64" />
      </div>

      <Skeleton className="h-6 w-full max-w-2xl mb-8" />

      <Skeleton className="h-12 w-full max-w-md mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <Skeleton className="h-7 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <Skeleton className="h-9 w-32" />
            </div>
          ))}
      </div>
    </div>
  )
}
