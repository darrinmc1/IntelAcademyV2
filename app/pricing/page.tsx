import Link from "next/link"
import { Check, X, Zap, Shield, Star } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with foundational intelligence analysis concepts at no cost.",
    cta: "Start Learning Free",
    ctaHref: "/register",
    highlight: false,
    icon: Zap,
    features: [
      { text: "Access to all free topics & articles", included: true },
      { text: "3 structured learning paths", included: true },
      { text: "Community discussion access", included: true },
      { text: "Progress tracking", included: true },
      { text: "Downloadable study guides", included: false },
      { text: "Quizzes & knowledge checks", included: false },
      { text: "Certificate of completion", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Professional",
    price: "$19",
    period: "per month",
    description: "Everything you need to sharpen your skills and earn recognized credentials.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/register?plan=professional",
    highlight: true,
    badge: "Most Popular",
    icon: Star,
    features: [
      { text: "Everything in Free", included: true },
      { text: "All learning paths (15+)", included: true },
      { text: "Downloadable study guides & templates", included: true },
      { text: "Quizzes & knowledge checks", included: true },
      { text: "Certificate of completion per path", included: true },
      { text: "Offline reading mode", included: true },
      { text: "Priority email support", included: false },
      { text: "Team management dashboard", included: false },
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "Equip your entire team with professional-grade intelligence training.",
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
    icon: Shield,
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Up to 10 team seats", included: true },
      { text: "Team management dashboard", included: true },
      { text: "Bulk progress reporting", included: true },
      { text: "Custom learning path curation", included: true },
      { text: "Priority email & phone support", included: true },
      { text: "Onboarding call with our team", included: true },
      { text: "Volume discounts for 10+ seats", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. You can cancel your Professional or Team subscription at any time from your account settings. You will retain access until the end of your current billing period.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Professional plans include a 7-day free trial — no credit card required. Team plans can be evaluated via a demo call with our team.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, Amex) via Stripe. Team plans can also be invoiced annually.",
  },
  {
    q: "Do certificates have an expiry date?",
    a: "Certificates of completion do not expire. They reflect the version of the curriculum completed and can be shared on LinkedIn or included in a professional portfolio.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely. You can upgrade from Free to Professional at any time. Downgrades take effect at the next billing cycle.",
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/pricing" isCurrentPage>
              Pricing
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">
          Start free and upgrade when you're ready. No hidden fees, no long-term contracts.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-20">
        {tiers.map((tier) => {
          const Icon = tier.icon
          return (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
                tier.highlight
                  ? "border-primary bg-primary/5 shadow-md ring-2 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold">
                  {tier.badge}
                </Badge>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`h-5 w-5 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  <h2 className="text-xl font-bold">{tier.name}</h2>
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="text-muted-foreground mb-1">/{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <Separator className="mb-6" />

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground/60"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.highlight ? "default" : "outline"}
                className="w-full"
                size="lg"
              >
                <Link href={tier.ctaHref}>{tier.cta}</Link>
              </Button>
            </div>
          )
        })}
      </div>

      {/* Feature Comparison Note */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="text-muted-foreground text-sm">
          All plans include access to our core library of intelligence analysis fundamentals. Paid plans unlock the
          full curriculum, assessments, and credentials recognised by employers in law enforcement, defence, and
          private sector intelligence roles.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-lg border p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 rounded-2xl bg-primary/10 border border-primary/20 p-10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Not sure which plan is right for you?</h2>
        <p className="text-muted-foreground mb-6">
          Start with the Free plan — no credit card required. Upgrade to Professional whenever you're ready to go
          deeper.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/register">Get Started Free</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
