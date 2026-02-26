import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// List of paths that should redirect to the lesson-in-development page
const inDevelopmentPaths = [
  "/topics/strategic-vs-tactical",
  "/topics/strategic-forecasting",
  "/topics/long-term-threats",
  "/topics/strategic-reports",
  "/topics/intelligence-estimates",
  "/topics/indicators-warnings",
  "/topics/strategic-risk-assessment",
  "/topics/strategic-threat-modeling",
  "/topics/briefing-executives",
  // Add more paths as needed
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the requested path is in the list of in-development paths
  if (inDevelopmentPaths.some((path) => pathname.startsWith(path))) {
    // Create a URL for the lesson-in-development page and preserve the original path as a query parameter
    const url = new URL("/lesson-in-development", request.url)
    url.searchParams.set("topic", pathname.split("/").pop() || "")

    return NextResponse.redirect(url)
  }

  // Check if the request is for the not-found page
  if (request.nextUrl.pathname === "/_not-found") {
    // Redirect to our static 404 page in the route group
    return NextResponse.redirect(new URL("/404-static", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths that start with /topics/ or /learning-paths/
    "/topics/:path*",
    "/learning-paths/:path*",
    "/_not-found",
  ],
}
