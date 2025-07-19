"use client"

import { useState } from "react"
import {
  NeumorphicCard,
  NeumorphicCardContent,
  NeumorphicCardHeader,
  NeumorphicCardTitle,
} from "@/components/ui/neumorphic-card"
import { NeumorphicButton } from "@/components/ui/neumorphic-button"
import { NeumorphicInput } from "@/components/ui/neumorphic-input"
import { NeumorphicToggle } from "@/components/ui/neumorphic-toggle"
import { NeumorphicProgress } from "@/components/ui/neumorphic-progress"
import { NeumorphicLearningPathCard } from "@/components/neumorphic-learning-path-card"
import { NeumorphicTopicCard } from "@/components/neumorphic-topic-card"
import { NeumorphicSearchBar } from "@/components/neumorphic-search-bar"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Brain, Target, Settings, Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function NeumorphismDemo() {
  const [progress, setProgress] = useState(65)
  const [isToggled, setIsToggled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(75)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Neumorphism Design System</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Modern soft UI components for the The Intel Analyst Academy
          </p>
        </div>

        {/* Button Showcase */}
        <NeumorphicCard>
          <NeumorphicCardHeader>
            <NeumorphicCardTitle>Button Variants</NeumorphicCardTitle>
          </NeumorphicCardHeader>
          <NeumorphicCardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <NeumorphicButton variant="default">
                <Shield className="mr-2 h-4 w-4" />
                Default
              </NeumorphicButton>
              <NeumorphicButton variant="classified" effect="glow">
                <Eye className="mr-2 h-4 w-4" />
                Classified
              </NeumorphicButton>
              <NeumorphicButton variant="secure" effect="pulse">
                <Brain className="mr-2 h-4 w-4" />
                Secure
              </NeumorphicButton>
              <NeumorphicButton variant="alert">
                <Target className="mr-2 h-4 w-4" />
                Alert
              </NeumorphicButton>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Size Variants</h4>
              <div className="flex items-center gap-4">
                <NeumorphicButton size="sm" variant="classified">
                  Small
                </NeumorphicButton>
                <NeumorphicButton size="default" variant="classified">
                  Default
                </NeumorphicButton>
                <NeumorphicButton size="lg" variant="classified">
                  Large
                </NeumorphicButton>
                <NeumorphicButton size="icon" variant="classified">
                  <Settings className="h-4 w-4" />
                </NeumorphicButton>
              </div>
            </div>
          </NeumorphicCardContent>
        </NeumorphicCard>

        {/* Interactive Controls */}
        <NeumorphicCard>
          <NeumorphicCardHeader>
            <NeumorphicCardTitle>Interactive Controls</NeumorphicCardTitle>
          </NeumorphicCardHeader>
          <NeumorphicCardContent className="space-y-6">
            {/* Search Bar */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Search Bar</h4>
              <NeumorphicSearchBar
                placeholder="Search intelligence topics..."
                onSearch={(query) => console.log("Searching:", query)}
              />
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Text Input</h4>
                <NeumorphicInput placeholder="Enter your name..." />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Secure Input</h4>
                <NeumorphicInput type="password" placeholder="Enter password..." variant="secure" />
              </div>
            </div>

            {/* Toggle and Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Toggle Controls</h4>
                <div className="flex items-center justify-between">
                  <span>Enable notifications</span>
                  <NeumorphicToggle checked={isToggled} onCheckedChange={setIsToggled} />
                </div>
                <div className="flex items-center justify-between">
                  <span>Dark mode</span>
                  <NeumorphicToggle />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress Indicators</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Learning Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <NeumorphicProgress value={progress} />
                </div>
                <div className="flex gap-2">
                  <NeumorphicButton size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    -10%
                  </NeumorphicButton>
                  <NeumorphicButton size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    +10%
                  </NeumorphicButton>
                </div>
              </div>
            </div>
          </NeumorphicCardContent>
        </NeumorphicCard>

        {/* Media Controls */}
        <NeumorphicCard>
          <NeumorphicCardHeader>
            <NeumorphicCardTitle>Media Player Controls</NeumorphicCardTitle>
          </NeumorphicCardHeader>
          <NeumorphicCardContent>
            <div className="flex items-center justify-center space-x-4 p-8">
              <NeumorphicButton size="icon" variant="classified" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </NeumorphicButton>

              <div className="flex items-center space-x-3 flex-1 max-w-xs">
                <VolumeX className="h-4 w-4 text-gray-500" />
                <NeumorphicProgress value={volume} className="flex-1" />
                <Volume2 className="h-4 w-4 text-gray-500" />
              </div>

              <NeumorphicButton size="icon" variant="ghost">
                <Settings className="h-4 w-4" />
              </NeumorphicButton>
            </div>
          </NeumorphicCardContent>
        </NeumorphicCard>

        {/* Card Showcase */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Card Components</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NeumorphicLearningPathCard
              title="Strategic Intelligence"
              description="Master the art of long-term intelligence analysis and strategic forecasting for national security."
              imagePath="/strategic-intelligence-banner.png"
              href="/learning-paths/strategic-intelligence"
              difficulty="Advanced"
              duration="8 weeks"
              topics={24}
              progress={75}
              category="Core Intelligence"
            />

            <NeumorphicTopicCard
              title="OSINT Fundamentals"
              description="Learn the basics of Open Source Intelligence gathering and analysis techniques."
              imagePath="/osint-banner.png"
              href="/topics/osint-fundamentals"
              duration="45 min"
              difficulty="Beginner"
              completed={true}
              views={1250}
              hasVideo={true}
            />

            <NeumorphicCard variant="hover" className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Custom Card</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  This is a custom neumorphic card with hover effects and gradient accents.
                </p>
                <NeumorphicButton variant="classified" effect="glow">
                  Explore
                </NeumorphicButton>
              </div>
            </NeumorphicCard>
          </div>
        </div>

        {/* Badge Showcase */}
        <NeumorphicCard>
          <NeumorphicCardHeader>
            <NeumorphicCardTitle>Status Badges</NeumorphicCardTitle>
          </NeumorphicCardHeader>
          <NeumorphicCardContent>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Beginner</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Intermediate
              </Badge>
              <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Advanced</Badge>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Play className="mr-1 h-3 w-3" />
                Video
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                <Shield className="mr-1 h-3 w-3" />
                Classified
              </Badge>
            </div>
          </NeumorphicCardContent>
        </NeumorphicCard>
      </div>
    </div>
  )
}
