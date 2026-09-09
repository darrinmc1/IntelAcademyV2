import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Waitlist",
  description: "Checkout is not live. Join the Intel Analyst Academy waitlist. No payment method.",
}

export default function BuyPage() {
  redirect("/waitlist")
}
