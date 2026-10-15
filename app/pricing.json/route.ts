import { NextResponse } from "next/server"

/** Public file stays up so the URL does not 404. No prices, currency, or plan catalog. */
export function GET() {
  return NextResponse.json(
    {
      paymentsLive: false,
      note: "Coming soon. Written lessons are free.",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  )
}
