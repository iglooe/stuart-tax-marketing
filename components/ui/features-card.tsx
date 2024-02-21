import React from "react"

import { FeaturesCardProps } from "@/types/types"

export function FeaturesCard({
  title,
  description,
  children,
}: FeaturesCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6 sm:h-[220px]">
        {children}
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
