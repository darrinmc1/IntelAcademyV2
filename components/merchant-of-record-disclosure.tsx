import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"
import { cn } from "@/lib/utils"

type MerchantOfRecordDisclosureProps = {
  className?: string
}

/** Quiet secondary MoR line for footer and buy/checkout/pricing surfaces. */
export function MerchantOfRecordDisclosure({ className }: MerchantOfRecordDisclosureProps) {
  return (
    <p className={cn("text-xs text-slate-500 font-light leading-relaxed", className)}>
      {MERCHANT_OF_RECORD_DISCLOSURE}
    </p>
  )
}
