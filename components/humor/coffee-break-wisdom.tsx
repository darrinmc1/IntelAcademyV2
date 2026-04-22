"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Coffee, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const coffeeWisdom = [
  "Coffee is the fuel that powers intelligence analysis. Without it, we'd just be people staring at spreadsheets.",
  "The quality of intelligence analysis is directly proportional to the quality of coffee consumed.",
  "Decaf coffee is like intelligence without analysis - technically coffee, but missing the point.",
  "An analyst without coffee is like a car without gas - it might look functional, but it's not going anywhere.",
  "Coffee breaks aren't breaks from work; they're strategic pauses for enhanced cognitive processing.",
  "The best intelligence insights come during the third cup of coffee. The fourth cup is where conspiracy theories begin.",
  "Coffee is proof that intelligence analysts have always been ahead of their time in chemical enhancement.",
  "A good analyst can work without sleep, but never without coffee. Priorities, people.",
]

export function CoffeeBreakWisdom() {
  const [wisdom, setWisdom] = useState(coffeeWisdom[0])

  const getNewWisdom = () => {
    const newWisdom = coffeeWisdom[Math.floor(Math.random() * coffeeWisdom.length)]
    setWisdom(newWisdom)
  }

  return (
    <Card className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-l-amber-500">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-amber-600" />
          <h3 className="font-semibold text-amber-900">Coffee Break Wisdom</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={getNewWisdom} className="h-8 w-8 p-0 hover:bg-amber-100">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-sm text-amber-800 italic">"{wisdom}"</p>

      <p className="text-xs text-amber-600 mt-2">☕ Analyst wisdom dispensed with every cup</p>
    </Card>
  )
}
