import createMiddleware from "next-intl/middleware"

import { localePrefix, locales, pathnames } from "./i18n/config"

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(es|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
}
