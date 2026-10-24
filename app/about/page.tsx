import Link from "next/link"
import { PRICE_MAP_DETAIL, PRICE_MAP_LABEL } from "@/lib/pricing"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("/about", "About", "Who the academy is for, and what the lessons are trying to do.")
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">About The Intel Analyst Academy</h1>
          <p className="text-xl text-muted-foreground">
            Written lessons on intelligence analysis, from first definitions to specialist methods.
          </p>
        </div>

        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              The academy publishes written intelligence analysis lessons. Beginners, students, and working analysts
              can read them. Written lessons stay free. Video is not available yet.
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
                  Most lessons take a few minutes. One runs a little longer. You can stop in the middle and the page
                  will still be there.
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
                <h3 className="text-xl font-semibold mb-2">No forum yet</h3>
                <p>
                  There is no discussion board. If a lesson is wrong, use Feedback. If a subject is missing, request a
                  topic. Those two forms are the whole community for now.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuously Evolving</h3>
                <p>
                  New lessons are added when they are written, including from topic requests. There is no monthly quota.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Access</h2>
            <p className="mb-3">
              {PRICE_MAP_LABEL} {PRICE_MAP_DETAIL}
            </p>
            <p>
              <Link href="/pricing" className="text-cyan-400 underline underline-offset-2">
                Coming soon — join the list
              </Link>
              . Written lessons:{" "}
              <Link href="/register" className="text-cyan-400 underline underline-offset-2">
                register free
              </Link>
              .
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">Have questions, feedback, or suggestions? We&apos;d love to hear from you.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">General inquiries</h3>
                <p className="mb-2">
                  <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
                    Contact form
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">New lesson topics</h3>
                <p className="mb-4">Want a subject that is not on the academy yet? Request a new lesson topic — not a bug report.</p>
                <Button asChild>
                  <Link href="/request-topic">Request a new topic</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
