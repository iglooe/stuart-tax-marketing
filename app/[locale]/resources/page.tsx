import React from "react"
import { unstable_setRequestLocale } from "next-intl/server"

import { LocaleProps } from "@/types/types"
import { Shell } from "@/components/ui/shell"

import { ResourcesHero } from "./_components/resources"

export default function Resources({ params: { locale } }: LocaleProps) {
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
