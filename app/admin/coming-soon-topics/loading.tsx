import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-8 w-[250px]" />
          </CardTitle>
          <Skeleton className="h-4 w-[350px] mt-2" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-[180px]" />
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <Skeleton className="h-10 w-full mb-4" />
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full mb-2" />
                ))}
            </div>
          </div>

          <Skeleton className="h-16 w-full mt-6" />
        </CardContent>
      </Card>
    </div>
  )
}
