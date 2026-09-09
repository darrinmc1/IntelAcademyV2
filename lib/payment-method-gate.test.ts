import { readFileSync } from "node:fs"
import { afterEach, describe, expect, it, vi } from "vitest"

describe("payment-method gate (waitlist now, Stripe parked)", () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it("keeps /buy in the tree and gates it to the waitlist", () => {
    const config = readFileSync("next.config.mjs", "utf8")
    expect(config).toMatch(/source:\s*"\/buy"/)
    expect(config).toMatch(/destination:\s*"\/waitlist"/)
    expect(config).toMatch(/PAYMENTS_LIVE/)

    const buy = readFileSync("app/buy/page.tsx", "utf8")
    expect(buy).toContain("isPaymentsLive")
    expect(buy).toContain("redirect(WAITLIST_PATH)")
    expect(buy).toContain("StripePricingTable")
  })

  it("keeps Stripe wiring present but gated", () => {
    const gate = readFileSync("lib/payments-gate.ts", "utf8")
    const stripe = readFileSync("lib/stripe-config.ts", "utf8")
    const checkout = readFileSync("app/api/stripe/checkout/route.ts", "utf8")
    const webhook = readFileSync("app/api/stripe/webhook/route.ts", "utf8")
    const table = readFileSync("components/stripe/pricing-table.tsx", "utf8")

    expect(gate).toContain("PAYMENTS_LIVE")
    expect(stripe).toContain("STRIPE_SECRET_KEY")
    expect(stripe).toContain("STRIPE_PRICE_EARLY")
    expect(stripe).toContain("STRIPE_PRICE_WRITTEN")
    expect(stripe).toContain("STRIPE_PRICE_VIDEO")
    expect(checkout).toContain("isPaymentsLive")
    expect(checkout).toContain("WAITLIST_PATH")
    expect(checkout).toContain("https://api.stripe.com/v1/checkout/sessions")
    expect(webhook).toContain("isPaymentsLive")
    expect(webhook).toContain("setUserPlan")
    expect(table).toContain("STRIPE_CHECKOUT_PATH")
  })

  it("does not treat PAYMENTS_LIVE as live without a Stripe secret", async () => {
    vi.resetModules()
    vi.stubEnv("PAYMENTS_LIVE", "true")
    vi.stubEnv("STRIPE_SECRET_KEY", "")
    delete process.env.STRIPE_SECRET_KEY

    const { isPaymentsLive } = await import("@/lib/payments-gate")
    const { checkoutStartPath } = await import("@/lib/stripe-config")
    expect(isPaymentsLive()).toBe(false)
    expect(checkoutStartPath("video")).toBe("/waitlist")
  })

  it("points checkout at Stripe only when the gate and secret are both set", async () => {
    vi.resetModules()
    vi.stubEnv("PAYMENTS_LIVE", "true")
    vi.stubEnv("STRIPE_SECRET_KEY", "sk_test_parked")

    const { isPaymentsLive } = await import("@/lib/payments-gate")
    const { checkoutStartPath } = await import("@/lib/stripe-config")
    expect(isPaymentsLive()).toBe(true)
    expect(checkoutStartPath("video")).toBe("/api/stripe/checkout?plan=video")
  })

  it("never calls Stripe from checkout or webhook while gated", async () => {
    vi.resetModules()
    delete process.env.PAYMENTS_LIVE
    delete process.env.STRIPE_SECRET_KEY
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}"))

    const { GET } = await import("@/app/api/stripe/checkout/route")
    const checkout = await GET(new Request("http://localhost/api/stripe/checkout?plan=video"))
    expect(checkout.status).toBe(303)
    expect(checkout.headers.get("location")).toBe("http://localhost/waitlist")

    const { POST } = await import("@/app/api/stripe/webhook/route")
    const webhook = await POST(new Request("http://localhost/api/stripe/webhook", { method: "POST" }))
    expect(webhook.status).toBe(503)
    expect(fetchSpy).not.toHaveBeenCalled()
    fetchSpy.mockRestore()
  })

  it("keeps homepage and pricing off refund / buy theatre", () => {
    const home = readFileSync("components/homepage-pricing-summary.tsx", "utf8")
    expect(home).not.toContain("REFUND_POLICY")
    expect(home).not.toMatch(/\$\d/)
    expect(home).toContain("/waitlist")

    const pricing = readFileSync("app/pricing/page.tsx", "utf8")
    expect(pricing).not.toContain("REFUND_POLICY")
    expect(pricing).toContain("/waitlist")
    expect(pricing).not.toMatch(/\$\d/)
  })

  it("does not list /buy in the sitemap", () => {
    const sitemap = readFileSync("app/sitemap.ts", "utf8")
    expect(sitemap).not.toMatch(/\/buy`/)
    expect(sitemap).toContain("/waitlist")
  })
})
