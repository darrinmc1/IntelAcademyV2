import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
  title: "Terms of Service | The Intel Analyst Academy",
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
            In these terms and conditions, "User Content" shall mean any audio, video, text, images or other material you choose to display on this website.
            By displaying your User Content, you grant The Intel Analyst Academy a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license
            to use, reproduce, adapt, publish, translate and distribute it in any and all media.
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
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall The Intel Analyst Academy, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any
            way connected with your use of this website, whether such liability is under contract, tort or otherwise.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent The Intel Analyst Academy from and against any and all liabilities, costs, demands, causes of action,
            damages and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and construed in accordance with the laws of Australia, and you submit to the non-exclusive jurisdiction of the
            state and federal courts located in Australia for the resolution of any disputes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p>
            The Intel Analyst Academy reserves the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on our website.
            Your continued use of the website after any such changes constitutes your acceptance of the new terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> info@TheIntelAnalystAcademy.com
          </p>
        </div>
      </div>
    </div>
  )
}