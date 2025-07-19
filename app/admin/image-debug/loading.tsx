import { Skeleton } from "@/components/ui/skeleton"

export default function ImageDebugLoading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-64 mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-2 gap-4">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
