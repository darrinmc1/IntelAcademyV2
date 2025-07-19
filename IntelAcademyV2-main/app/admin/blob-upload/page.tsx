"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Upload } from "lucide-react"

export default function ImageUploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [category, setCategory] = useState<string>("uncategorized")
  const [tags, setTags] = useState<string>("")
  const [uploading, setUploading] = useState<boolean>(false)
  const [result, setResult] = useState<{ success: boolean; message: string; url?: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setResult({
        success: false,
        message: "Please select a file to upload",
      })
      return
    }

    setUploading(true)
    setResult(null)

    try {
      const tagArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)

      // Create a simulated local path for the image
      const localPath = `/images/${category}/${file.name}`

      setResult({
        success: true,
        message: "Image would be uploaded to local storage (simulation)",
        url: localPath,
      })

      // Reset form
      setFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch (error) {
      console.error("Error handling image:", error)
      setResult({
        success: false,
        message: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    } finally {
      setUploading(false)
    }
  }

  const categories = [
    "foundations",
    "strategic-intelligence",
    "tactical-intelligence",
    "operational-intelligence",
    "osint",
    "report-writing",
    "threat-assessment",
    "crime-series-analysis",
    "hot-spot-analysis",
    "network-analysis",
    "target-profiling",
    "crime-trend-analysis",
    "uncategorized",
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Upload Images to Local Storage</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upload New Image</CardTitle>
          <CardDescription>Upload images to local storage for use in the Intel Analyst Academy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="file">Select Image</Label>
              <Input
                ref={fileInputRef}
                id="file"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category" className="mt-1">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Textarea
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="intelligence, analysis, etc."
                className="mt-1"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleUpload} disabled={uploading || !file} className="flex items-center gap-2">
            {uploading ? "Uploading..." : "Upload to Local Storage"}
            <Upload size={16} />
          </Button>
        </CardFooter>
      </Card>

      {result && (
        <Alert variant={result.success ? "default" : "destructive"} className="mb-4">
          {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>
            {result.message}
            {result.url && (
              <div className="mt-2">
                <p className="font-medium">Image Path:</p>
                <code className="block p-2 bg-gray-100 rounded text-sm overflow-x-auto mt-1">{result.url}</code>
              </div>
            )}
          </AlertDescription>
        </Alert>
      )}

      {file && (
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-2">Preview:</h2>
          <div className="border rounded-md p-4 bg-gray-50">
            <img src={URL.createObjectURL(file) || "/placeholder.svg"} alt="Preview" className="max-h-64 mx-auto" />
            <p className="text-sm text-gray-500 mt-2 text-center">
              {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
