import { unstable_setRequestLocale } from "next-intl/server"

import { Shell } from "@/components/ui/shell"

import { Hero } from "./_components/hero"

type Props = {
  params: { locale: string }
}
export default function HomePage({ params: { locale } }: Props) {
  // enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <Shell>
      <Hero />
    </Shell>
  )
}
