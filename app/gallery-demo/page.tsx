export const dynamic = "force-static"

export default function GalleryDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Intelligence Analysis Gallery</h1>
      <p className="text-gray-600 mb-8">
        This page has been moved to a new location. Please visit our updated gallery page.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">Why was this page moved?</h2>
        <p className="text-gray-700 mb-4">
          We&apos;ve created a new and improved gallery experience with better performance and more features.
        </p>
        <a
          href="/gallery"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Visit New Gallery
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-100 h-48 flex items-center justify-center">
              <span className="text-gray-400">Image placeholder</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">Intelligence Visual {i}</h3>
              <p className="text-gray-600 text-sm">This is a static placeholder for gallery content.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
