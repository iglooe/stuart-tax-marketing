import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import PlaceholderSVG from "public/placeholder.svg"

import { Shell } from "@/components/ui/shell"

type Props = {
  params: { locale: string }
}
export default function HomePage({ params: { locale } }: Props) {
  // enable static rendering
  unstable_setRequestLocale(locale)

  const t = useTranslations("IndexPage")
  return (
    <Shell>
      <section className="backdrop-blur-[2px]md:py-24 w-full rounded-lg border border-border/50 bg-background/50 p-4 py-16 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="test-wrap space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-200 sm:text-5xl xl:text-6xl/none">
                  {t("hero")}
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  {t("description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-companyDark px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500"
                  href="/"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Image
                alt="Accounting"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="400"
                src={PlaceholderSVG}
                width="600"
              />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  )
}
