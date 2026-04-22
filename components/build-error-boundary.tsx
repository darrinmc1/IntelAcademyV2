"use client"

import React from "react"

interface BuildErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface BuildErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class BuildErrorBoundary extends React.Component<BuildErrorBoundaryProps, BuildErrorBoundaryState> {
  constructor(props: BuildErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): BuildErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Build Error Boundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
              <p className="text-gray-600 mb-4">We're working to fix this issue. Please try refreshing the page.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
