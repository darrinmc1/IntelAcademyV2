import { ImageTestRunner } from "@/components/image-test-runner"

export default function AutomatedImageTestsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Automated Image Component Tests</h1>
        <p className="text-lg text-gray-600">Automated testing suite for image components with real network requests</p>
      </div>

      <ImageTestRunner />

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Test Information</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Tests check if image URLs are accessible via HTTP HEAD requests</li>
          <li>• "Pass" means the image loaded successfully</li>
          <li>• "Warning" means the image failed to load but fallback should work</li>
          <li>• "Fail" indicates a component error that needs fixing</li>
          <li>• Duration shows how long each test took to complete</li>
        </ul>
      </div>
    </div>
  )
}
