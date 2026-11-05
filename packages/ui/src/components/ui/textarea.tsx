import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  /** Shows a live character count. When `maxLength` is set, the count includes the limit. */
  showCount?: boolean
}

function Textarea({ className, showCount = false, maxLength, value, defaultValue, onChange, "aria-describedby": ariaDescribedBy, ...props }: TextareaProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(String(defaultValue ?? ""))
  const countId = React.useId()
  const currentValue = value === undefined ? uncontrolledValue : String(value ?? "")
  const describedBy = [ariaDescribedBy, showCount ? countId : undefined].filter(Boolean).join(" ") || undefined

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (value === undefined) setUncontrolledValue(event.currentTarget.value)
    onChange?.(event)
  }

  const textarea = (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-20 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        showCount && "pb-7",
        className,
      )}
      maxLength={maxLength}
      value={value}
      defaultValue={value === undefined ? defaultValue : undefined}
      onChange={handleChange}
      aria-describedby={describedBy}
      {...props}
    />
  )

  if (!showCount) return textarea

  return (
    <div data-slot="textarea-field" className="relative">
      {textarea}
      <span id={countId} role="status" className="absolute right-3 bottom-2 text-xs text-muted-foreground">
        {currentValue.length}{maxLength ? ` / ${maxLength}` : " characters"}
      </span>
    </div>
  )
}

export { Textarea }
