"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container max-w-4xl py-12">
      <Card className="border-2 border-red-400">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-2xl flex items-center">
            <div className="bg-red-400 p-2 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-800"
              >
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            We encountered an error while trying to load this page. Please try again or return to the learning paths.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
          <Button asChild>
            <Link href="/learning-paths">Return to Learning Paths</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
