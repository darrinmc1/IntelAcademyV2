import { plans } from "@/lib/pricing"

export function SignupOrWaitlistPlanLabels({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {plans.map((plan) => (
        <li key={plan.id}>
          {plan.priceLabel} {plan.name} — {plan.blurb}
          {plan.available ? "" : " (waitlist)"}
        </li>
      ))}
    </ul>
  )
}
