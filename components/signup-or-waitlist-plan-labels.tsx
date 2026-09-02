import { USER_PLANS, USER_PLAN_LABELS } from "@/lib/user-plan"

export function SignupOrWaitlistPlanLabels({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {USER_PLANS.map((plan) => (
        <li key={plan}>{USER_PLAN_LABELS[plan]}</li>
      ))}
    </ul>
  )
}
