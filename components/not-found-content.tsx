"use client"

import { useSearchParams } from "next/navigation"

export function NotFoundContent() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from")

  return (
    <div className="mt-4">
      {from && <p className="text-sm text-gray-500">You were redirected from: {from}</p>}
      <p className="mt-4 text-gray-600">
        Try using the navigation menu to find what you're looking for or check our learning paths.
      </p>
    </div>
  )
}
