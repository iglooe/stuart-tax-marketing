import Link from "next/link"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage")

  return (
    <>
      <Shell>
        <section className="backdrop-blur-[2px]md:py-24 w-full rounded-lg border border-border/50 bg-background/50 p-4 py-16 lg:py-32">
          <h2 className="flex scroll-m-20 justify-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("title")}
          </h2>
          <p className="flex justify-center leading-7 [&:not(:first-child)]:mt-6">
            {t("description")}
          </p>
          <div className="mt-20 flex items-center justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/">{t("action")}</Link>
            </Button>
          </div>
        </section>
      </Shell>
    </>
  )
}
