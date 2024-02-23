import Link from "next/link"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage")

  return (
    <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          {t("description")}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button variant="default">
            <Link className="text-companyDark" href="/">
              {t("action")}
            </Link>
          </Button>
          <Button variant="link">
            <Link
              href="/about"
              className="text-sm font-semibold text-companyDark"
            >
              {t("secondary-action")} <span aria-hidden="true">&rarr;</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
