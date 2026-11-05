import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"
import { cn } from "../../lib/utils"

export interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  size?: "default" | "sm"
}

function Switch({ className, size = "default", ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        "h-5 w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-[size=sm]:[--switch-thumb-size:0.75rem] data-[size=sm]:[--switch-thumb-shift:0.75rem]",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-[var(--switch-thumb-size,1rem)] rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[var(--switch-thumb-shift,1rem)] data-[state=unchecked]:translate-x-0"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
