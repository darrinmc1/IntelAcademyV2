import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { REFUND_POLICY, SUPPORT_EMAIL } from "@/lib/pricing"

export const metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service",
  description: "Terms of service for The Intel Analyst Academy, operated by TTPN Pty Ltd.",
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
          <p className="text-lg mb-6">Last updated: 15 November 2026</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who operates the site</h2>
          <p>
            The Intel Analyst Academy is operated by TTPN Pty Ltd. These terms are the shared TTPN Pty Ltd terms for this site:
            Australian law, a 3-day refund once billing is open, and cancel anytime if a subscription is offered later.
            By using the site you agree to these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Licence to use</h2>
          <p>
            Unless otherwise stated, TTPN Pty Ltd and its licensors own the intellectual property in the lessons, PDFs, and other material on this website.
            You may view pages for your own personal learning, subject to the account and entitlement rules on the pricing page.
          </p>
          <p className="mt-4">You must not:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Republish material from this website</li>
            <li>Sell, rent, or sub-license material from this website</li>
            <li>Reproduce or copy material from this website for redistribution</li>
            <li>Share a paid pack, when billing opens, with people who have not bought it</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Accounts</h2>
          <p>
            A free account is required to open the free sample lessons and the two free PDFs.
            Other written lessons and PDFs stay locked until a paid entitlement exists. Checkout is not live, so those packs cannot be bought yet.
            You are responsible for the email address and PIN on your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User content</h2>
          <p>
            In these terms, &quot;your content&quot; means text you send through the contact form, the feedback form, or a topic request.
            The site does not host a public forum. By sending that text you grant TTPN Pty Ltd a non-exclusive licence to use it to run the site and to answer you.
            It must be your own and must not infringe anyone else&apos;s rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Training tools, not operational intelligence</h2>
          <p>
            Academy Brief and the other analyst tools on this site are training and education products.
            They are not operational intelligence products, do not constitute finished intelligence,
            and must not be used as a substitute for authorized analysis.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Payments and refunds</h2>
          <div className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 mb-4">
            <p className="font-semibold">Refund wording — pending legal review</p>
            <p className="mt-2">{REFUND_POLICY}</p>
          </div>
          <p>
            There is no monthly plan on this site. Lessons are published when they are written, not as a paid drip.
            When billing opens, one-off purchases are charged by TTPN Pty Ltd. A statement may show as TTPN or TTPN* plus the product name.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. No warranties</h2>
          <p>
            This website is provided as is. TTPN Pty Ltd makes no express or implied warranties about the site or the materials on it.
            Nothing here is legal, financial, or operational advice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Liability</h2>
          <p>
            To the extent the Australian Consumer Law allows, TTPN Pty Ltd is not liable for loss arising out of your use of this website.
            Nothing in these terms excludes rights that cannot legally be excluded.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing law</h2>
          <p>
            These terms are governed by the laws of Australia, including the law of Queensland.
            You submit to the non-exclusive jurisdiction of the courts of Queensland, Australia.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes</h2>
          <p>
            TTPN Pty Ltd may update these terms by posting the new version on this page. Continued use of the site after that change is acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact</h2>
          <p>Questions about these terms: email {SUPPORT_EMAIL}. That is the only contact detail published here.</p>
        </div>
      </div>
    </div>
  )
}
