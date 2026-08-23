import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function About() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners exploring intelligence analysis fundamentals.",
      features: [
        "Access to 10 foundational courses",
        "Community discussion forums",
        "Basic learning path guidance",
        "No certification included",
        "Self-paced study",
      ],
      cta: "Get Started Free",
      href: "/register",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "For analysts who need structured training and recognized credentials.",
      features: [
        "Access to 50+ courses",
        "3 professional certifications",
        "Structured learning paths",
        "Priority email support",
        "Downloadable course materials",
        "Progress tracking dashboard",
      ],
      cta: "Start Professional",
      href: "/register?plan=professional",
      highlighted: true,
    },
    {
      name: "Advanced",
      price: "$99",
      period: "/month",
      description: "For teams and serious professionals requiring full platform access.",
      features: [
        "Unlimited course access",
        "All certifications included",
        "Advanced learning paths",
        "Dedicated account manager",
        "Team management tools",
        "Custom reporting & analytics",
        "API access",
      ],
      cta: "Go Advanced",
      href: "/register?plan=advanced",
      highlighted: false,
    },
  ]

  const comparisonRows = [
    { feature: "Course Access", starter: "10 courses", professional: "50+ courses", advanced: "Unlimited" },
    { feature: "Certifications", starter: "None", professional: "3 certs", advanced: "All certs" },
    { feature: "Learning Paths", starter: "Basic", professional: "Structured", advanced: "Advanced + Custom" },
    { feature: "Support", starter: "Community", professional: "Email priority", advanced: "Dedicated manager" },
    { feature: "Team Tools", starter: "—", professional: "—", advanced: "Included" },
    { feature: "Downloadable Materials", starter: "—", professional: "Included", advanced: "Included" },
    { feature: "Progress Tracking", starter: "Basic", professional: "Full dashboard", advanced: "Full + reporting" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about" isCurrentPage>
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About the Intelligence Analyst Academy</h1>
          <p className="text-xl text-muted-foreground">
            Empowering intelligence professionals through accessible, high-quality education
          </p>
        </div>

        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              The Intelligence Analyst Academy was founded with a simple mission: to make high-quality intelligence
              analysis training accessible to everyone who needs it. We believe that proper training and education
              should not be limited by organizational resources or geographic location.
            </p>
            <p>
              Our platform serves complete beginners, students, law enforcement officers, and private sector analysts
              who need both foundational training and refresher modules. By providing open access to professional-grade
              educational resources, we aim to improve the standard of intelligence analysis across all sectors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Self-Paced Learning</h3>
                <p>
                  We understand that professionals have varying schedules and learning preferences. Our platform is
                  designed to allow you to learn at your own pace, on your own schedule.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert-Led Content</h3>
                <p>
                  All courses are developed by experienced intelligence professionals with real-world operational
                  backgrounds, ensuring practical, applicable knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recognized Certifications</h3>
                <p>
                  Our certifications are designed to demonstrate verifiable competency and are recognized by
                  organizations across law enforcement, government, and the private sector.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Updates</h3>
                <p>
                  The intelligence landscape evolves rapidly. We continuously update our curriculum to reflect
                  the latest methodologies, tools, and best practices.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Pricing Section */}
          <section id="pricing">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg">
                Choose the plan that fits your learning goals. Upgrade or cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl border p-6 flex flex-col gap-4 ${
                    tier.highlighted
                      ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 rounded-full px-3 py-1 w-fit">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{tier.description}</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground mb-1">{tier.period}</span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-primary font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={tier.highlighted ? "default" : "outline"}
                    className="w-full mt-2"
                  >
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-center">Plan Comparison</h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left px-4 py-3 font-semibold">Feature</th>
                      <th className="text-center px-4 py-3 font-semibold">Starter</th>
                      <th className="text-center px-4 py-3 font-semibold text-primary">Professional</th>
                      <th className="text-center px-4 py-3 font-semibold">Advanced</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                        <td className="px-4 py-3 font-medium">{row.feature}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">{row.starter}</td>
                        <td className="px-4 py-3 text-center font-medium text-primary">{row.professional}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">{row.advanced}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Money-back guarantee */}
            <div className="rounded-xl border border-border bg-muted/40 p-6 text-center">
              <h3 className="text-lg font-bold mb-2">30-Day Money-Back Guarantee</h3>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Not satisfied? We offer a full refund within 30 days of your first paid subscription — no questions
                asked. We're confident in the quality of our training, and we want you to be too.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Law Enforcement</h3>
                <p className="text-sm text-muted-foreground">
                  Officers and detectives seeking to build or refresh analytical skills for criminal intelligence work.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Government Analysts</h3>
                <p className="text-sm text-muted-foreground">
                  Public sector professionals requiring structured training aligned with national intelligence standards.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Private Sector</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate security, risk, and competitive intelligence teams building analytical capability.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of intelligence professionals already learning on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/register">Create Free Account</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/learning-paths">Browse Courses</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
