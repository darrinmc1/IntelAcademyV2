import { createHmac, timingSafeEqual } from "node:crypto"
import { NextResponse } from "next/server"
import { isPaymentsLive } from "@/lib/payments-gate"
import { getStripeWebhookSecret, userPlanForStripePriceId } from "@/lib/stripe-config"
import { isUserPlan, type UserPlan } from "@/lib/user-plan"

export const dynamic = "force-dynamic"

function verifyStripeSignature(payload: string, header: string, secret: string): boolean {
  const parts = header.split(",").map((part) => part.trim())
  const timestamp = parts.find((part) => part.startsWith("t="))?.slice(2)
  const signature = parts.find((part) => part.startsWith("v1="))?.slice(3)
  if (!timestamp || !signature) return false

  const expected = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex")
  const a = Buffer.from(expected)
  const b = Buffer.from(signature)
  return a.length === b.length && timingSafeEqual(a, b)
}

function planFromSession(session: {
  metadata?: { userPlan?: string }
  client_reference_id?: string
  line_items?: { data?: { price?: { id?: string } }[] }
}): UserPlan | null {
  const fromMeta = session.metadata?.userPlan
  if (isUserPlan(fromMeta)) return fromMeta
  if (isUserPlan(session.client_reference_id)) return session.client_reference_id
  const priceId = session.line_items?.data?.[0]?.price?.id
  if (priceId) return userPlanForStripePriceId(priceId)
  return null
}

export async function POST(req: Request) {
  if (!isPaymentsLive()) {
    return NextResponse.json(
      { ok: false, gated: true, checkout: "waitlist" },
      { status: 503 }
    )
  }

  const secret = getStripeWebhookSecret()
  const signature = req.headers.get("stripe-signature")
  const payload = await req.text()
  if (!secret || !signature || !verifyStripeSignature(payload, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  const event = JSON.parse(payload) as {
    type?: string
    data?: {
      object?: {
        customer_details?: { email?: string }
        customer_email?: string
        metadata?: { userPlan?: string }
        client_reference_id?: string
      }
    }
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ ok: true, ignored: event.type ?? "unknown" })
  }

  const session = event.data?.object
  const email = session?.customer_details?.email || session?.customer_email
  const plan = session ? planFromSession(session) : null
  if (!email || !plan) {
    return NextResponse.json({ ok: true, skipped: "missing email or plan" })
  }

  const { setUserPlan } = await import("@/lib/db")
  await setUserPlan(email, plan)
  return NextResponse.json({ ok: true, plan })
}
