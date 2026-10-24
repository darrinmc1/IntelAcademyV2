import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export const metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service",
  description: "Terms of service for The Intel Analyst Academy website",
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
          <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to The Intel Analyst Academy. These terms and conditions outline the rules and regulations for the use of our website.
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use The Intel Analyst Academy's
            website if you do not accept all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. License to Use</h2>
          <p>
            Unless otherwise stated, The Intel Analyst Academy and/or its licensors own the intellectual property rights for all material on this website.
            All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions
            set in these terms and conditions.
          </p>
          <p className="mt-4">You must not:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from The Intel Analyst Academy (unless content is specifically made for redistribution)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
          <p>
            In these terms, "User Content" means text you send through the contact form, the feedback form, or a topic request.
            The site does not host a public forum. By sending User Content, you grant The Intel Analyst Academy a non-exclusive licence
            to use it to run the site and to answer you.
          </p>
          <p className="mt-4">
            Your User Content must be your own and must not be infringing on any third party's rights. The Intel Analyst Academy reserves the right to remove
            any of your content from this website at any time without notice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. No Warranties</h2>
          <p>
            This website is provided "as is," with all faults, and The Intel Analyst Academy makes no express or implied representations or warranties, of any kind
            related to this website or the materials contained on this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Training tools, not operational intelligence</h2>
          <p>
            Academy Brief and other analyst tools on this site are training and education products.
            They are not operational intelligence products, do not constitute finished intelligence,
            and must not be used as a substitute for authorized analysis. Outputs are practice aids
            for students of the academy method.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. No charges</h2>
          <p>The site does not take a card, so there is nothing to refund.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall The Intel Analyst Academy, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any
            way connected with your use of this website, whether such liability is under contract, tort or otherwise.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent The Intel Analyst Academy from and against any and all liabilities, costs, demands, causes of action,
            damages and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law & Jurisdiction</h2>
          <p>
            These terms are governed by the laws of Queensland, Australia. You submit to the non-exclusive jurisdiction of the courts of Queensland, Australia.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
          <p>
            The Intel Analyst Academy reserves the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on our website.
            Your continued use of the website after any such changes constitutes your acceptance of the new terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            <Link href="/contact" className="text-cyan-400 underline underline-offset-2">
              Contact form
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}