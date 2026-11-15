import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description: "What The Intel Analyst Academy collects, including lesson views, read time, and downloads.",
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
          <p className="text-lg mb-6">Last updated: 15 November 2026</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            The Intel Analyst Academy is operated by TTPN Pty Ltd. This policy says what the site stores when you create a free account
            and what is recorded about how you use the lessons and PDFs. It also covers messages you send through the existing contact,
            feedback, and topic-request forms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. The data we collect</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Account.</strong> Email address, codename, a hash of your PIN, the date the account was created, and your role.</li>
            <li><strong>Entitlement.</strong> A field that is free, path pack, written library, or video. New accounts start on free. It is not a payment record. Checkout is not live.</li>
            <li><strong>Lesson views.</strong> Which lesson you opened, and when, tied to your account.</li>
            <li><strong>Read time.</strong> An approximate count of seconds the lesson tab was visible. Time while the tab is hidden is not added.</li>
            <li><strong>Downloads.</strong> Which PDF or spreadsheet you downloaded, and when, tied to your account.</li>
            <li><strong>Messages you send.</strong> Feedback, topic requests, and contact-form text, including an email if you type one. Those forms are unchanged.</li>
            <li><strong>Technical data.</strong> IP address on feedback submissions, and the usual server logs needed to keep the site working.</li>
          </ul>
          <p>
            The site does not ask for a street address, and this page does not publish a company number. We do not sell this data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How we use it</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>To create your free account and let you sign in.</li>
            <li>To show you the lessons and PDFs your entitlement allows.</li>
            <li>To show the site operator how many accounts exist and what each account opens, reads, and downloads.</li>
            <li>To read a message you send through the contact form, feedback form, or a topic request.</li>
            <li>To keep the site working.</li>
          </ul>
          <p>
            Usage counts are visible to admin accounts only. Other learners cannot see your history.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, email info@theintelanalystacademy.com.
          </p>
        </div>
      </div>
    </div>
  )
}