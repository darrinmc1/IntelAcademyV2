"use client"

import { useState } from "react"
import { ComponentTransition } from "@/components/transition/component-transition"
import { StaggeredList } from "@/components/transition/staggered-list"
import { ScrollReveal } from "@/components/transition/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Image } from "@/components/image"

export default function TransitionDemo() {
  const [showCard, setShowCard] = useState(true)
  const [activeTab, setActiveTab] = useState("component")

  const demoItems = [
    { title: "Strategic Intelligence", image: "/strategic-intelligence-concept-thumb.png" },
    { title: "Tactical Intelligence", image: "/tactical-intelligence-concept-thumb.png" },
    { title: "OSINT Techniques", image: "/what-is-osint-thumb.png" },
    { title: "Report Writing", image: "/intelligence-report-fundamentals-thumb.png" },
  ]

  return (
    <div className="container mx-auto py-12 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Transition Demonstrations</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the various transition effects available in the The Intel Analyst Academy platform
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="component">Component</TabsTrigger>
          <TabsTrigger value="staggered">Staggered</TabsTrigger>
          <TabsTrigger value="scroll">Scroll</TabsTrigger>
        </TabsList>

        <TabsContent value="component" className="mt-8">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Button onClick={() => setShowCard(!showCard)} className="mb-6">
                {showCard ? "Hide" : "Show"} Card
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Fade Transition</h3>
                <ComponentTransition type="fade" show={showCard}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Fade Effect</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card smoothly fades in and out when toggled.</p>
                    </CardContent>
                  </Card>
                </ComponentTransition>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Slide Up Transition</h3>
                <ComponentTransition type="slide-up" show={showCard}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Slide Up Effect</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card slides up when appearing and down when disappearing.</p>
                    </CardContent>
                  </Card>
                </ComponentTransition>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Slide Left Transition</h3>
                <ComponentTransition type="slide-left" show={showCard}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Slide Left Effect</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card slides in from the right and out to the right.</p>
                    </CardContent>
                  </Card>
                </ComponentTransition>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Zoom Transition</h3>
                <ComponentTransition type="zoom" show={showCard}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Zoom Effect</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card zooms in when appearing and out when disappearing.</p>
                    </CardContent>
                  </Card>
                </ComponentTransition>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="staggered" className="mt-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Staggered List Animation</h2>
            <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {demoItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </StaggeredList>

            <div className="text-center mt-8">
              <Button onClick={() => setActiveTab("staggered")}>Replay Animation</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="scroll" className="mt-8">
          <div className="space-y-32 py-12">
            <ScrollReveal type="fade" className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Fade In On Scroll</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This element fades in when scrolled into view.</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal type="slide-up" className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Slide Up On Scroll</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This element slides up when scrolled into view.</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal type="slide-left" className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Slide Left On Scroll</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This element slides in from the right when scrolled into view.</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal type="zoom" className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Zoom In On Scroll</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This element zooms in when scrolled into view.</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
