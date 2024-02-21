import { unstable_setRequestLocale } from "next-intl/server"

import { LocaleProps } from "@/types/types"
import { Shell } from "@/components/ui/shell"

import { AboutSection } from "./_components/about-section"
import ContactUs from "./_components/contact-us"
import { GoogleMapsWidget } from "./_components/google-map"

export default function About({ params: { locale } }: LocaleProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <Shell variant="markdown" className="space-y-12">
      <AboutSection />
      <ContactUs />
      <GoogleMapsWidget />
    </Shell>
  )
}
