import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border-2 border-border bg-card/50 backdrop-blur-sm px-4 py-3 text-base shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-border/80 hover:bg-card/70 hover:shadow-md focus-visible:outline-none focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:bg-card focus-visible:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none leading-relaxed",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
