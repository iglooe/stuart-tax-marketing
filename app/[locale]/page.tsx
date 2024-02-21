import { unstable_setRequestLocale } from "next-intl/server"

import { LocaleProps } from "@/types/types"
import { Shell } from "@/components/ui/shell"

import { Cards } from "./_components/cards"
import { Hero } from "./_components/hero"

export default function HomePage({ params: { locale } }: LocaleProps) {
  // enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <Shell>
      <Hero />
      <Cards />
    </Shell>
  )
}
