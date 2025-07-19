import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "OSINT Types and Categories | The Intel Analyst Academy",
  description: "Learn about the different types and categories of Open Source Intelligence (OSINT).",
}

export default function OSINTTypesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">OSINT Types and Categories</h1>
        <p className="text-lg italic text-gray-600 mb-8">
          "Like organizing your browser bookmarks, but for the entire internet"
        </p>

        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/osint-types-categories.png"
            alt="OSINT Types and Categories"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Understanding OSINT Categories</h2>
          <p className="text-lg mb-6">
            Open Source Intelligence (OSINT) can be categorized in various ways based on the source, medium, or type of
            information. Understanding these categories helps analysts choose the right sources and methods for their
            intelligence needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Media OSINT</CardTitle>
                <p className="text-sm italic text-gray-600">&quot;Traditional media, but with more fact-checking&quot;</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Information from mass media sources including newspapers, magazines, radio, and television.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Internet OSINT</CardTitle>
                <p className="text-sm italic text-gray-600">&quot;The entire internet is your research library&quot;</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Information collected from online sources including websites, blogs, social media, forums, and other
                  online platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Public Government Data</CardTitle>
                <p className="text-sm italic text-gray-600">&quot;When bureaucracy becomes your best friend&quot;</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Information released by government agencies, including reports, budgets, hearings, telephone
                  directories, press conferences, websites, and speeches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Academic Publications</CardTitle>
                <p className="text-sm italic text-gray-600">&quot;Where peer review meets intelligence gathering&quot;</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Information from journals, conferences, symposia, academic papers, dissertations, and theses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Commercial Data</CardTitle>
                <p className="text-sm italic text-gray-600">&quot;Following the money trail, legally&quot;</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Commercial imagery, financial and industrial assessments, and databases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Grey Literature</CardTitle>
                <p className="text-sm italic text-gray-600">&quot;The stuff that&apos;s published but not quite published&quot;</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Technical reports, preprints, patents, working papers, business documents, unpublished works, and
                  newsletters.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tip</h3>
            <p className="text-blue-700">
              The key to effective OSINT is knowing which category to search first. Start broad with media and internet
              sources, then narrow down to specific academic or government publications for detailed information.
            </p>
          </div>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Related Topics</CardTitle>
            <CardDescription>Explore more OSINT-related topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image src="/google-dorking-thumb.png" alt="Google Dorking" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">Google Dorking Techniques</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/google-dorking" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image src="/socmint-techniques-thumb.png" alt="SOCMINT Techniques" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">Social Media Intelligence (SOCMINT) Techniques</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/socmint-techniques" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
