export default function MainNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-6 text-gray-600">The page you are looking for doesn&apos;t exist or has been moved.</p>

        <div className="mt-8">
          <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
