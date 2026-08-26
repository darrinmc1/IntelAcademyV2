"use client"

import { useState } from "react"
import { Loader2, BadgeCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { setUserPlanAction } from "@/app/actions/admin-users"

const PLANS = [
  { value: "free", label: "free — locked intros" },
  { value: "early", label: "early — Early Adopter $5" },
  { value: "pro", label: "pro — Pro $10" },
]

export function PlanManager() {
  const [email, setEmail] = useState("")
  const [plan, setPlan] = useState("early")
  const [busy, setBusy] = useState(false)
  const { toast } = useToast()

  async function submit() {
    if (!email.trim()) {
      toast({ title: "Email required", variant: "destructive" })
      return
    }
    setBusy(true)
    try {
      const result = await setUserPlanAction(email, plan)
      toast({
        title: result.ok ? "Plan updated" : "Error",
        description: result.message,
        variant: result.ok ? undefined : "destructive",
      })
      if (result.ok) setEmail("")
    } finally {
      setBusy(false)
    }
  }

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <BadgeCheck className="h-5 w-5" /> Set User Plan
        </CardTitle>
        <CardDescription>
          Hand-set free / early / pro until Stripe writes this same field. Early and Pro can play
          path intros. No checkout on the site yet.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <div className="flex-1 space-y-2">
            <Label htmlFor="plan-email">User email</Label>
            <Input
              id="plan-email"
              type="email"
              placeholder="agent@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Plan</Label>
            <Select value={plan} onValueChange={setPlan}>
              <SelectTrigger className="w-full md:w-56">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PLANS.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={submit} disabled={busy}>
            {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Set plan
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
