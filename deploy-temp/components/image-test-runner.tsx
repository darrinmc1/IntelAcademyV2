"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ImageTestRunner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Automated Image Component Tests
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 text-gray-500">
          This component is deprecated as individual image components have been consolidated into a single `Image` component.
          Automated tests for the `Image` component are now integrated into the main test suite.
        </div>
      </CardContent>
    </Card>
  )
}