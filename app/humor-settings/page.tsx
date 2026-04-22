import type { Metadata } from "next"
import { HumorPreferences } from "@/components/humor/humor-preferences"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Humor Settings | The Intel Analyst Academy",
  description: "Customize your learning experience with humor preferences",
}

export default function HumorSettingsPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Humor Settings</h1>
      <p className="text-gray-600 mb-8">Customize how much humor appears in your learning experience</p>

      <div className="grid gap-8">
        <HumorPreferences />

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">About Humor in Learning</h3>
          <p className="mb-4">Research shows that appropriate humor can enhance learning by:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Increasing engagement and attention</li>
            <li>Improving retention of information</li>
            <li>Reducing stress and anxiety</li>
            <li>Creating a positive learning environment</li>
            <li>Making complex topics more approachable</li>
          </ul>
          <p>
            Our humor is designed to be professional while making intelligence concepts more memorable. You can adjust
            the settings above to match your personal learning style.
          </p>
        </Card>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold mb-2">Did You Know?</h3>
          <p className="italic">
            "The CIA&apos;s internal training materials often include humor to make complex tradecraft more memorable. Even
            intelligence agencies know that a good laugh helps information stick!"
          </p>
        </div>
      </div>
    </div>
  )
}
