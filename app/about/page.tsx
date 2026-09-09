import Link from "next/link"
import { CHECKOUT_STATUS, PRICE_MAP_DETAIL, PRICE_MAP_LABEL, REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckoutButton } from "@/components/checkout-button"
import { StarIcon, QuoteIcon } from "lucide-react"
import Image from "next/image"

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Investment Banking Analyst, Goldman Sachs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen&backgroundColor=b6e3f4",
    quote: "This platform helped me land my IB offer. The DCF and LBO models are exactly what interviewers test on — I felt completely prepared walking into every technical round.",
    stars: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Private Equity Associate, KKR",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusJohnson&backgroundColor=c0aede",
    quote: "I tried three other prep courses before this one. Nothing else comes close for real-world modeling depth. Got my PE offer within 6 weeks of starting.",
    stars: 5,
  },
  {
    name: "Priya Patel",
    role: "Equity Research Analyst, Morgan Stanley",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaPatel&backgroundColor=d1f4d1",
    quote: "The step-by-step walkthroughs made complex concepts click instantly. My modeling speed doubled and my confidence in interviews went through the roof.",
    stars: 5,
  },
]

export default function AboutPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const checkoutStatus = searchParams["checkout"]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {checkoutStatus === CHECKOUT_STATUS.SUCCESS && (
          <div className="mb-8 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
            <p className="font-semibold">Payment successful! Welcome aboard.</p>
            <p className="text-sm mt-1">You now have full access to all course materials.</p>
          </div>
        )}

        {checkoutStatus === CHECKOUT_STATUS.CANCELLED && (
          <div className="mb-8 rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-yellow-800">
            <p className="font-semibold">Checkout cancelled.</p>
            <p className="text-sm mt-1">No worries — your progress is saved. Ready when you are.</p>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Master Financial Modeling
            <span className="block text-primary">Land Your Dream Role</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The most comprehensive financial modeling curriculum trusted by analysts at top-tier banks and PE firms worldwide.
          </p>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.name} className="text-left border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <QuoteIcon className="h-5 w-5 text-muted-foreground/40 mb-2" />
                  <p className="text-sm text-foreground leading-relaxed mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground leading-tight">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CheckoutButton
              priceId={PRICE_MAP_DETAIL.pro}
              label={`Get Started — ${PRICE_MAP_LABEL.pro}`}
              className="text-lg px-8 py-6"
            />
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/courses">Browse Free Content</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">{REFUND_POLICY}</p>
        </section>

        {/* Pricing Section */}
        <section className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-12">
            One price. Full access. No hidden fees.
          </p>
          <div className="max-w-sm mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-8 text-center">
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">Pro Access</p>
                <p className="text-5xl font-bold mb-2">{PRICE_MAP_LABEL.pro}</p>
                <p className="text-muted-foreground mb-8">Lifetime access to all models &amp; updates</p>
                <ul className="text-sm text-left space-y-3 mb-8">
                  {[
                    "DCF, LBO, M&A, and Comps models",
                    "Step-by-step video walkthroughs",
                    "Excel files &amp; templates",
                    "Interview prep guides",
                    "Lifetime updates included",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  priceId={PRICE_MAP_DETAIL.pro}
                  label="Get Instant Access"
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-3">{REFUND_POLICY}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support */}
        <section className="py-12 text-center border-t">
          <p className="text-muted-foreground">
            Questions?{" "}
            <Link href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline underline-offset-4">
              {SUPPORT_EMAIL}
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}
