import React from "react"

type Props = {
  children: React.ReactNode
}

export function BackdropBlur({ children }: Props) {
  return (
    <section className="backdrop-blur-[2px]md:py-24 w-full rounded-lg border border-border/50 bg-background/50 p-4 py-16 lg:py-32">
      {children}
    </section>
  )
}
