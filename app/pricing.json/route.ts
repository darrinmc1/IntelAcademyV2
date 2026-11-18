import { NextResponse } from "next/server"
import { getParseablePricing } from "@/lib/pricing"

/** Same map as /pricing. No Stripe price ids and no checkout URL. */
export function GET() {
  return NextResponse.json(getParseablePricing(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  })
}
