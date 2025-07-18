"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function IntelligenceTypesComparison() {
  const [activeTab, setActiveTab] = useState("strategic")

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Intelligence Analysis Framework</h2>

      <Tabs defaultValue="strategic" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="strategic">Strategic Intelligence</TabsTrigger>
          <TabsTrigger value="tactical">Tactical Intelligence</TabsTrigger>
          <TabsTrigger value="operational">Operational Intelligence</TabsTrigger>
        </TabsList>

        <TabsContent value="strategic">
          <Card>
            <CardHeader>
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <img
                  src="/strategic-intelligence/strategic-intelligence-default.png"
                  alt="Strategic Intelligence - Planning and coordination diagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle>Strategic Intelligence</CardTitle>
              <CardDescription>Long-term analysis to support high-level decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focuses on long-term trends and patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Supports executive-level decision making</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Identifies emerging threats and opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Typically has a time horizon of months to years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Involves forecasting and scenario planning</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tactical">
          <Card>
            <CardHeader>
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <img
                  src="/tactical-intelligence/tactical-intelligence-default.png"
                  alt="Tactical Intelligence Operations Center with analysts monitoring real-time data"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle>Tactical Intelligence</CardTitle>
              <CardDescription>Immediate, actionable intelligence for operational decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focuses on immediate situations and threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Supports field operations and frontline decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Provides real-time or near-real-time information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Typically has a time horizon of hours to days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Involves rapid assessment and response</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operational">
          <Card>
            <CardHeader>
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <img
                  src="/operational-intelligence/operational-intelligence-default.png"
                  alt="Operational Intelligence - Process implementation and workflow coordination"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle>Operational Intelligence</CardTitle>
              <CardDescription>Mid-level intelligence to support operational planning</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focuses on ongoing operations and processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Supports mid-level management and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Bridges the gap between strategic goals and tactical execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Typically has a time horizon of days to months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Involves process optimization and resource allocation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
