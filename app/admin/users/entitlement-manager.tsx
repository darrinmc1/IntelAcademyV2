"use client"

import { useState } from "react"
import { Loader2, BadgeCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { setUserEntitlementAction } from "@/app/actions/admin-users"
import { ENTITLEMENT_LABELS, ENTITLEMENTS } from "@/lib/entitlement"

export function EntitlementManager() {
  const [email, setEmail] = useState("")
  const [entitlement, setEntitlement] = useState("free")
  const [pathId, setPathId] = useState("")
  const [busy, setBusy] = useState(false)
  const { toast } = useToast()

  async function submit() {
    if (!email.trim()) {
      toast({ title: "Email required", variant: "destructive" })
      return
    }
    setBusy(true)
    try {
      const result = await setUserEntitlementAction(email, entitlement, pathId)
      toast({
        title: result.ok ? "Entitlement updated" : "Error",
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
          <BadgeCheck className="h-5 w-5" /> Set entitlement
        </CardTitle>
        <CardDescription>
          free, path_pack, written_library, or video. New accounts stay on free. Path pack needs the learning-path id
          (for example osint). There is no checkout on the site.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <div className="flex-1 space-y-2">
            <Label htmlFor="entitlement-email">User email</Label>
            <Input
              id="entitlement-email"
              type="email"
              placeholder="agent@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Entitlement</Label>
            <Select value={entitlement} onValueChange={setEntitlement}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ENTITLEMENTS.map((value) => (
                  <SelectItem key={value} value={value}>
                    {ENTITLEMENT_LABELS[value]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="entitlement-path">Path id</Label>
            <Input
              id="entitlement-path"
              placeholder="osint"
              value={pathId}
              onChange={(e) => setPathId(e.target.value)}
            />
          </div>
          <Button onClick={submit} disabled={busy}>
            {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Set entitlement
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
