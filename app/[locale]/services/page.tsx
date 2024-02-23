import { unstable_setRequestLocale } from "next-intl/server"

import { LocaleProps } from "@/types/types"
import { Shell } from "@/components/ui/shell"

import { ServicesSection } from "./_components/services"

export default function Services({ params: { locale } }: LocaleProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <Shell>
      <ServicesSection />
    </Shell>
  )
}
