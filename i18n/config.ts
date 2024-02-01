import { Pathnames } from "next-intl/navigation"

export const locales = ["en", "es"] as const

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    es: "/acerda-de",
  },
  "/services": {
    en: "/services",
    es: "/servicios",
  },
  "/contact": {
    en: "/contact",
    es: "/contacto",
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
