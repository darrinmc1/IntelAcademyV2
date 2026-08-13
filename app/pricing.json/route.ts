import { NextResponse } from "next/server"
import { getParseablePricing } from "@/lib/pricing"

export function GET() {
  return NextResponse.json(getParseablePricing(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  })
}
