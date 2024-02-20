import React from "react"

type Props = {
  children: React.ReactNode
  title: string
  description: string
}

export function Card({ title, description, children }: Props) {
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
