import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

describe("payment-method gate (no live checkout)", () => {
  it("redirects /buy to the waitlist and does not advertise a payment method", () => {
    const config = readFileSync("next.config.mjs", "utf8")
    expect(config).toMatch(/source:\s*"\/buy"/)
    expect(config).toMatch(/destination:\s*"\/waitlist"/)

    const buy = readFileSync("app/buy/page.tsx", "utf8")
    expect(buy).toContain('redirect("/waitlist")')
    expect(buy).not.toMatch(/Stripe|Payment Link|Buy button/i)
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
