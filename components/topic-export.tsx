"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MainTopic } from "@/utils/topic-export-import"

interface TopicExportProps {
  topics: MainTopic[]
}

export function TopicExport({ topics }: TopicExportProps) {
  const [exportDialogOpen, setExportDialogOpen] = useState(false)

  // Handle export to CSV
  // const handleExportCSV = () => {
  //   try {
  //     const csvData = exportTopicsToCSV(topics)
  //     const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" })
  //     const url = URL.createObjectURL(blob)
  //     const link = document.createElement("a")
  //     link.href = url
  //     link.setAttribute("download", `intel-analyst-academy-topics-${new Date().toISOString().split("T")[0]}.csv`)
  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //     setExportDialogOpen(false)
  //   } catch (error) {
  //     console.error("Error exporting CSV:", error)
  //     alert("Failed to export CSV. Please try again.")
  //   }
  // }

  // Handle export to JSON
  // const handleExportJSON = () => {
  //   try {
  //     const jsonData = exportTopicsToJSON(topics)
  //     const blob = new Blob([jsonData], { type: "application/json;charset=utf-8;" })
  //     const url = URL.createObjectURL(blob)
  //     const link = document.createElement("a")
  //     link.href = url
  //     link.setAttribute("download", `intel-analyst-academy-topics-${new Date().toISOString().split("T")[0]}.json`)
  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //     setExportDialogOpen(false)
  //   } catch (error) {
  //     console.error("Error exporting JSON:", error)
  //     alert("Failed to export JSON. Please try again.")
  //   }
  // }

  const handleExport = () => {
    try {
      // Convert topics to CSV
      const headers = ["id", "title", "slug", "category", "description", "status", "lastUpdated", "views"]
      const rows = topics.map((topic) => [
        topic.id,
        topic.title,
        topic.slug,
        topic.category,
        topic.description,
        topic.status,
        topic.lastUpdated,
        topic.views,
      ])

      // Add subtopics with parent reference
      topics.forEach((topic) => {
        topic.subtopics.forEach((subtopic) => {
          rows.push([
            subtopic.id,
            subtopic.title,
            subtopic.slug,
            "subtopic",
            subtopic.description,
            subtopic.status,
            subtopic.lastUpdated,
            subtopic.views,
            topic.id, // Parent ID
          ])
        })
      })

      // Create CSV content
      const csvContent = [
        headers.join(","),
        ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
      ].join("\n")

      // Create and download file
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", `topics-export-${new Date().toISOString().split("T")[0]}.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error exporting topics:", error)
      alert("There was an error exporting topics. Please try again.")
    }
  }

  return (
    <>
      <Button variant="outline" className="flex items-center gap-2" onClick={handleExport}>
        <Download className="h-4 w-4" />
        Export
      </Button>

      {/* Export Dialog */}
      {/* <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
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
      </Dialog> */}
    </>
  )
}
