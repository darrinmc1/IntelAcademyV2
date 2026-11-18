import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import {
  GOVERNING_LAW,
  INTRO_TERMS,
  NO_LIFETIME,
  REFUND_POLICY,
  SELLER_NAME,
  SUPPORT_EMAIL,
} from "@/lib/pricing"

export const metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service",
  description: "Terms of service for The Intel Analyst Academy. Seller: TTPN Pty Ltd. Queensland and Australian law.",
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/terms" isCurrentPage>
              Terms of Service
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last updated: 18 November 2026</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Seller</h2>
          <p>
            The seller of The Intel Analyst Academy is {SELLER_NAME}. Questions go to{" "}
            <a className="text-cyan-400 underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>{" "}
            or the{" "}
            <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
              contact form
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. The site</h2>
          <p>
            These terms cover use of the website. By using it, you accept them. If you do not, stop using the site.
            The site does not take payment. There is no checkout.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Price</h2>
          <p>
            The normal plan is A$9/month inc GST. Limited time: A$5 for the first month if you create a free account
            with your email. {INTRO_TERMS} Collection and download packs are A$9, A$14, or A$19 one-off, inc GST.
            {" "}{NO_LIFETIME}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refunds</h2>
          <p className="my-4">{REFUND_POLICY}</p>
          <p>
            The full note is on the{" "}
            <Link href="/refunds" className="text-cyan-400 underline underline-offset-2">
              refunds page
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Licence to use</h2>
          <p>
            Unless otherwise stated, {SELLER_NAME} and its licensors own the intellectual property in the material on
            this website. You may view pages for your own study. You must not republish, sell, or redistribute the
            material unless a page says it is meant to be shared.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. User content</h2>
          <p>
            &quot;User content&quot; means text you send through the contact form, the feedback form, or a topic request.
            The site does not host a public forum. By sending it, you grant a non-exclusive licence to use it to run
            the site and to answer you. It must be yours to send.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Training tools, not operational intelligence</h2>
          <p>
            Academy Brief and the other analyst tools are training products. They are not operational intelligence,
            they are not finished intelligence, and they are not a substitute for authorised analysis.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. No warranties</h2>
          <p>
            The website is provided as it stands. {SELLER_NAME} makes no promise that a lesson, tool, or download is
            fit for a particular operational job.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Liability</h2>
          <p>
            To the extent Australian law allows, {SELLER_NAME} is not liable for loss arising from your use of the
            website. Nothing in these terms excludes a right that the Australian Consumer Law does not let us exclude.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing law</h2>
          <p>{GOVERNING_LAW}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes</h2>
          <p>
            These terms can change. The new version is posted on this page. If you keep using the site after that, you
            accept the new terms.
          </p>
        </div>
      </div>
    </div>
  )
}
