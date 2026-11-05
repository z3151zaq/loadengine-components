import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"
import { cn } from "../../lib/utils"

export interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  /** Shows a visual required marker. Set `required` on the associated form control too. */
  required?: boolean
  /** Shows optional guidance beside the label. */
  optional?: boolean
}

function Label({ className, children, required, optional, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "inline-flex items-center gap-1 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      {required && <span aria-hidden="true" className="text-destructive">*</span>}
      {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
    </LabelPrimitive.Root>
  )
}

export { Label }
