"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Download, Upload, FileJson, FileSpreadsheet, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  type MainTopic,
  exportTopicsToCSV,
  exportTopicsToJSON,
  importTopicsFromCSV,
  importTopicsFromJSON,
  validateImportedTopics,
} from "@/utils/topic-export-import"

interface TopicImportExportProps {
  topics: MainTopic[]
  onImport: (topics: MainTopic[]) => void
}

export function TopicImportExport({ topics, onImport }: TopicImportExportProps) {
  const [importDialogOpen, setImportDialogOpen] = useState(false)
  const [exportDialogOpen, setExportDialogOpen] = useState(false)
  const [importStatus, setImportStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [importErrors, setImportErrors] = useState<string[]>([])
  const [importedTopics, setImportedTopics] = useState<MainTopic[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle file selection for import
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setImportStatus("loading")
    setImportErrors([])

    try {
      const fileContent = await file.text()
      let importedData: MainTopic[] = []

      if (file.name.endsWith(".csv")) {
        importedData = await importTopicsFromCSV(fileContent)
      } else if (file.name.endsWith(".json")) {
        importedData = await importTopicsFromJSON(fileContent)
      } else {
        throw new Error("Unsupported file format. Please upload a CSV or JSON file.")
      }

      // Validate the imported data
      const validation = validateImportedTopics(importedData)
      if (!validation.valid) {
        setImportStatus("error")
        setImportErrors(validation.errors)
        return
      }

      setImportedTopics(importedData)
      setImportStatus("success")
    } catch (error) {
      setImportStatus("error")
      setImportErrors([error instanceof Error ? error.message : "Unknown error occurred"])
    }
  }

  // Handle import confirmation
  const confirmImport = () => {
    onImport(importedTopics)
    setImportDialogOpen(false)
    setImportStatus("idle")
    setImportedTopics([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Handle export to CSV
  const handleExportCSV = () => {
    const csvData = exportTopicsToCSV(topics)
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `intel-analyst-academy-topics-${new Date().toISOString().split("T")[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setExportDialogOpen(false)
  }

  // Handle export to JSON
  const handleExportJSON = () => {
    const jsonData = exportTopicsToJSON(topics)
    const blob = new Blob([jsonData], { type: "application/json;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `intel-analyst-academy-topics-${new Date().toISOString().split("T")[0]}.json`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setExportDialogOpen(false)
  }

  return (
    <>
      <div className="flex gap-2">
        <Button variant="outline" className="flex items-center gap-2" onClick={() => setImportDialogOpen(true)}>
          <Upload className="h-4 w-4" />
          Import
        </Button>
        <Button variant="outline" className="flex items-center gap-2" onClick={() => setExportDialogOpen(true)}>
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Import Dialog */}
      <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Import Topics</DialogTitle>
            <DialogDescription>Upload a CSV or JSON file containing topic data.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.json"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary/90"
            />

            {importStatus === "loading" && (
              <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}

            {importStatus === "error" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Import Failed</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-2">
                    {importErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {importStatus === "success" && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Import Ready</AlertTitle>
                <AlertDescription className="text-green-700">
                  Successfully parsed {importedTopics.length} topics with{" "}
                  {importedTopics.reduce((acc, topic) => acc + topic.subtopics.length, 0)} subtopics.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <DialogFooter className="sm:justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setImportDialogOpen(false)
                setImportStatus("idle")
                if (fileInputRef.current) {
                  fileInputRef.current.value = ""
                }
              }}
            >
              Cancel
            </Button>
            <Button type="button" disabled={importStatus !== "success"} onClick={confirmImport}>
              Import Data
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Export Dialog */}
      <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Export Topics</DialogTitle>
            <DialogDescription>Export your topics data in CSV or JSON format.</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="csv" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="csv">CSV Format</TabsTrigger>
              <TabsTrigger value="json">JSON Format</TabsTrigger>
            </TabsList>
            <TabsContent value="csv" className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-medium">CSV Export</h3>
                    <p className="text-sm text-muted-foreground">
                      Exports a flattened version of your topics data. Ideal for spreadsheet applications.
                    </p>
                  </div>
                </div>
                <Button onClick={handleExportCSV} className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download CSV
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="json" className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileJson className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium">JSON Export</h3>
                    <p className="text-sm text-muted-foreground">
                      Exports the complete hierarchical structure of your topics. Ideal for system backups.
                    </p>
                  </div>
                </div>
                <Button onClick={handleExportJSON} className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download JSON
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}
