import { NextResponse } from "next/server"
import { getParseablePricing } from "@/lib/pricing"

/** Machine-readable AUD offer. paymentsLive stays false. No checkout URLs. */
export function GET() {
  return NextResponse.json(getParseablePricing(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  })
}
