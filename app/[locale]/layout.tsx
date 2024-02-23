import "@/styles/globals.css"
import { Metadata } from "next"
import { locales } from "@/i18n/config"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

import { MainLayoutProps } from "@/types/types"
import { siteConfig } from "@/config/site"
import { BGGrid } from "@/components/bg-grid"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// export async function generateMetadata({
//   params: { locale },
// }: Omit<MainLayoutProps, "children">) {
//   const t = await getTranslations({ locale, namespace: "LocaleLayout" })

//   return {
//     title: t("title"),
//   }
// }
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function LocaleLayout({
  children,
  params: { locale },
}: MainLayoutProps) {
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
                  <BGGrid>
                    {children}
                    <Analytics />
                  </BGGrid>
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
