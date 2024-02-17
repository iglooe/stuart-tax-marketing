import React from "react"
import { unstable_setRequestLocale } from "next-intl/server"

import { Shell } from "@/components/ui/shell"

import { ResourcesHero } from "./_components/resources"

type Props = {
  params: { locale: string }
}

export default function Resources({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <>
      <Shell variant="default">
        <ResourcesHero />
      </Shell>
    </>
  )
}
