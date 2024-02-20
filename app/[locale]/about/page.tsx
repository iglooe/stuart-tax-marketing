import { unstable_setRequestLocale } from "next-intl/server"

import { Shell } from "@/components/ui/shell"

import { AboutSection } from "./_components/about-section"
import ContactUs from "./_components/contact-us"

type Props = {
  params: { locale: string }
}

export default function About({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <Shell variant="markdown" className="space-y-12">
      <AboutSection />
      <ContactUs />
    </Shell>
  )
}
