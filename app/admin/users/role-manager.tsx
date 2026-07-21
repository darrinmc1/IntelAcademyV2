"use client"

import { useState } from "react"
import { Loader2, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { setUserRoleAction } from "@/app/actions/admin-users"

const ROLES = ["admin", "moderator", "editor", "viewer", "user"]

export function RoleManager() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("editor")
  const [busy, setBusy] = useState(false)
  const { toast } = useToast()

  async function submit() {
    if (!email.trim()) {
      toast({ title: "Email required", variant: "destructive" })
      return
    }
    setBusy(true)
    try {
      const result = await setUserRoleAction(email, role)
      toast({
        title: result.ok ? "Role updated" : "Error",
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
          <Shield className="h-5 w-5" /> Set User Role
        </CardTitle>
        <CardDescription>
          Grant admin, moderator, or editor access by email. Reviewers are admin and moderator;
          editors submit content for review.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <div className="flex-1 space-y-2">
            <Label htmlFor="role-email">User email</Label>
            <Input
              id="role-email"
              type="email"
              placeholder="agent@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full md:w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={submit} disabled={busy}>
            {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Set role
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
