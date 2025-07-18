export function ImagePathDocumentation() {
  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Image Path Documentation</h2>
      <p className="mb-4">
        This document outlines the recommended path structure for images in the The Intel Analyst Academy project.
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Folder Structure</h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
          {`public/
├── intelligence-images/
│   ├── strategic-intelligence/
│   │   ├── strategic-intelligence-default.png
│   │   └── strategic-intelligence-main.png
│   ├── tactical-intelligence/
│   │   ├── tactical-intelligence-default.png
│   │   └── tactical-intelligence-main.png
│   └── operational-intelligence/
│       ├── operational-intelligence-default.png
│       └── operational-intelligence-main.png
└── images/
    ├── strategic-intelligence-default.png (alternative location)
    ├── tactical-intelligence-default.png (alternative location)
    └── operational-intelligence-default.png (alternative location)`}
        </pre>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Recommended Image Paths</h3>
        <p className="mb-2">When using the `Image` component, you can provide multiple paths as a fallback:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              /intelligence-images/[type]/[type]-[variant].png
            </code>
          </li>
          <li>
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/[type]/[type]-[variant].png</code>
          </li>
          <li>
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/[type]-[variant].png</code>
          </li>
          <li>
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/images/[type]-[variant].png</code>
          </li>
        </ol>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Example Usage with `Image` Component</h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
          {`import { Image } from "@/components/image";

// Example with multiple fallbacks (recommended)
<Image
  src={[
    "/intelligence-images/strategic-intelligence/strategic-intelligence-default.png",
    "/strategic-intelligence/strategic-intelligence-default.png",
    "/strategic-intelligence-default.png",
    "/images/strategic-intelligence-default.png"
  ]}
  alt="Strategic Intelligence"
  className="w-full h-full object-cover"
  fill
/>

// Example with a single path and default fallback
<Image
  src="/intelligence-images/strategic-intelligence/strategic-intelligence-default.png"
  alt="Strategic Intelligence"
  className="w-full h-full object-cover"
  fill
/>

// Example with a custom fallback image
<Image
  src="/non-existent-image.png"
  alt="Missing Image"
  fallbackSrc="/placeholder.svg?text=Image+Not+Found"
  className="w-full h-full object-cover"
  fill
/>`}
        </pre>
      </div>
    </div>
  )
}