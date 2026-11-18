import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { GOVERNING_LAW, SELLER_NAME, SUPPORT_EMAIL } from "@/lib/pricing"

export const metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description: "Privacy policy for The Intel Analyst Academy. Seller: TTPN Pty Ltd.",
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/privacy" isCurrentPage>
              Privacy Policy
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last updated: 18 November 2026</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who holds the data</h2>
          <p>
            {SELLER_NAME} runs The Intel Analyst Academy. Privacy questions go to{" "}
            <a className="text-cyan-400 underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>{" "}
            or the <a href="/contact" className="underline">contact form</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. What we collect</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Account data</strong> includes the email address and codename you use to create a free account, and a hash of your PIN. We do not store the PIN itself.</li>
            <li><strong>Usage data</strong> includes the pages and lessons a signed-in account opens, so we can see basic use of the site.</li>
            <li><strong>Message data</strong> includes what you type into the contact form, the feedback form, or a topic request.</li>
            <li><strong>Technical data</strong> includes the usual server logs: IP address, browser, and the time of a request.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Why</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>To create the account you asked for.</li>
            <li>To see how many accounts exist and which lessons they open.</li>
            <li>To read a message you sent and reply.</li>
            <li>To keep the site working.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Security and retention</h2>
          <p>
            Access to account records is limited to people who need it to run the site. We keep the data while the
            account exists, or while we need it for a legal or accounting duty, and then delete it or de-identify it.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your rights</h2>
          <p>
            Australian privacy law gives you a right to ask for access to the personal information we hold, and to ask
            for a correction. You can also ask us to delete the account. Use the contact email above.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Law</h2>
          <p>{GOVERNING_LAW}</p>
        </div>
      </div>
    </div>
  )
}
