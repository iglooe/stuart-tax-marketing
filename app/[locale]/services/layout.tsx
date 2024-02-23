import { Metadata } from "next"

import { RootLayoutProps } from "@/types/types"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: "Services",
    template: `Services - %s`,
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

/** 
  Since we have a shared layout on all pages, located at `app/[locale]/layout.tsx`,
  This is required, to keep the layout consistent and not add additional layouts
*/
export default function RootLayout({ children }: RootLayoutProps) {
  return children
}
