import { NextResponse } from "next/server"
import { isPaymentsLive, WAITLIST_PATH } from "@/lib/payments-gate"
import {
  checkoutUrls,
  getParkedStripePriceId,
  getStripeSecret,
  isPaidPlanId,
  PARKED_STRIPE_PLANS,
  type PaidPlanId,
} from "@/lib/stripe-config"

export const dynamic = "force-dynamic"

function waitlistRedirect(req: Request) {
  return NextResponse.redirect(new URL(WAITLIST_PATH, req.url), 303)
}

function planFrom(req: Request, body: { plan?: unknown } | null): PaidPlanId {
  const url = new URL(req.url)
  const raw = body?.plan ?? url.searchParams.get("plan") ?? "video"
  return isPaidPlanId(raw) ? raw : "video"
}

async function startCheckout(req: Request, body: { plan?: unknown } | null) {
  if (!isPaymentsLive()) {
    return waitlistRedirect(req)
  }

  const secret = getStripeSecret()
  const planId = planFrom(req, body)
  const priceId = getParkedStripePriceId(planId)
  if (!secret || !priceId) {
    return waitlistRedirect(req)
  }

  const urls = checkoutUrls()
  const parked = PARKED_STRIPE_PLANS[planId]
  const params = new URLSearchParams()
  params.set("mode", "payment")
  params.set("success_url", urls.success)
  params.set("cancel_url", urls.cancel)
  params.set("line_items[0][price]", priceId)
  params.set("line_items[0][quantity]", "1")
  params.set("metadata[planId]", parked.planId)
  params.set("metadata[userPlan]", parked.userPlan)
  params.set("client_reference_id", parked.userPlan)

  const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  })
  const session = (await stripeRes.json()) as { url?: string }
  if (!stripeRes.ok || !session.url) {
    return waitlistRedirect(req)
  }
  return NextResponse.redirect(session.url, 303)
}

export async function GET(req: Request) {
  return startCheckout(req, null)
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { plan?: unknown } | null
  return startCheckout(req, body)
}
