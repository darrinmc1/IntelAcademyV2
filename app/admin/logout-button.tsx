"use client"

import { LogOut } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { logout } from "@/app/actions/auth"

export function LogoutButton(props: ButtonProps) {
  return (
    <Button {...props} onClick={() => logout()}>
      <LogOut className="mr-2 h-4 w-4" />
      Log out
    </Button>
  )
}
