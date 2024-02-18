import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const backdropVariants = cva(
  "backdrop-blur-[2px]md:py-24 flex w-full flex-1 flex-col gap-4 rounded-lg border border-border/50 bg-background/50 md:gap-8 md:p-6",
  {
    variants: {
      variant: {
        default: "",
        hero: "p-4 py-16 lg:py-32",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BackdropProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backdropVariants> {
  as?: React.ElementType
}

function BackdropBlur({
  className,
  as: Comp = "section",
  variant,
  ...props
}: BackdropProps) {
  return (
    <Comp className={cn(backdropVariants({ variant }), className)} {...props} />
  )
}

export { BackdropBlur, backdropVariants }
