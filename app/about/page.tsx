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
              educational resources, we aim to elevate the standard of intelligence analysis across all sectors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Self-Paced Learning</h3>
                <p>
                  We understand that professionals have varying schedules and learning preferences. Our platform is
                  designed to allow you to learn at your own pace, with content organized into digestible mini-topics
                  that can be completed in 5-15 minutes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
                <p>
                  Our content emphasizes practical, applicable skills that you can immediately implement in your work.
                  From OSINT techniques to analytical methodologies, everything we teach is designed to make you more
                  effective in real-world scenarios.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
                <p>
                  We believe in the power of peer learning and support. Our community forum provides a space for
                  intelligence professionals to connect, share insights, and help each other grow in their careers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Evolving</h3>
                <p>
                  The field of intelligence analysis is constantly changing, and our platform evolves with it. We
                  regularly update our content and add new topics based on community feedback and emerging trends in the
                  field.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">Have questions, feedback, or suggestions? We&apos;d love to hear from you.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
                <p className="mb-2">Email: info@TheIntelAnalystAcademy.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Content Requests</h3>
                <p className="mb-4">Have a specific topic you'd like us to cover?</p>
                <Button asChild>
                  <Link href="/request-topic">Request a Topic</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
