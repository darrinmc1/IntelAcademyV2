"use client"

import { useState } from "react"
import { getTopicsNeedingComingSoonPages, type TopicStatus } from "@/utils/topic-status"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ComingSoonPagesAdmin() {
  const [topics] = useState<TopicStatus[]>(getTopicsNeedingComingSoonPages())

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Topics Needing "Coming Soon" Pages</CardTitle>
          <CardDescription>These topics don't have content yet and should display a "Coming Soon" page</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topics.map((topic) => (
                <TableRow key={topic.slug}>
                  <TableCell className="font-medium">{topic.title}</TableCell>
                  <TableCell>{topic.slug}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {topic.category.replace("-", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" asChild>
                      <a href={`/topics/${topic.slug}`} target="_blank" rel="noopener noreferrer">
                        View Page
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
