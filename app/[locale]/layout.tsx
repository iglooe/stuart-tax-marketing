import "@/styles/globals.css"
import { ReactNode } from "react"
import { locales } from "@/i18n/config"
import { GeistSans } from "geist/font/sans"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

import { BGGrid } from "@/components/bg-grid"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

type Props = {
  children: ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" })

  return {
    title: t("title"),
  }
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  const messages = useMessages()

  return (
    <>
      <html lang="en" suppressHydrationWarning className={GeistSans.className}>
        <head />
        <body className="min-h-screen bg-background font-sans antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <NextIntlClientProvider locale={locale} messages={messages}>
                <SiteHeader />
                <div className="flex-1">
                  <BGGrid>{children}</BGGrid>
                </div>
              </NextIntlClientProvider>
            </div>
            <Footer />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
