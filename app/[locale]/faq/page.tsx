import { unstable_setRequestLocale } from "next-intl/server"

import { LocaleProps } from "@/types/types"

import { FAQSection } from "./_components/section"

export default function Contact({ params: { locale } }: LocaleProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return <FAQSection />
}
