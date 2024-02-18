import { Pathnames } from "next-intl/navigation"

export const locales = ["en", "es"] as const

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    es: "/acerda-de-nosotros",
  },
  "/services": {
    en: "/services",
    es: "/servicios",
  },
  "/resources": {
    en: "/resources",
    es: "/recursos",
  },
  "/faq": {
    en: "/faq",
    es: "/el-faq",
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
