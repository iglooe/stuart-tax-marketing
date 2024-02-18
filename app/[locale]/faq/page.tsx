import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { FAQSection } from "./_components/section"

type Props = {
  params: { locale: string }
}

export default function Contact({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return <FAQSection />
}
