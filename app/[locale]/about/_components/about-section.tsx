import Image from "next/image"
import PlaceholderSVG from "@/public/placeholder.svg"
import { useTranslations } from "next-intl"

import { BackdropBlur } from "@/components/ui/backdrop"
import { Shell } from "@/components/ui/shell"

export function AboutSection() {
  const t = useTranslations("AboutPage")

  return (
    <BackdropBlur>
      <Shell>
        <main className="flex-1 py-6 lg:py-12">
          <div className="container flex flex-col items-center gap-6 px-4 text-lg lg:gap-10 lg:px-6 xl:text-xl">
            <div className="flex flex-col items-center gap-2 text-center lg:gap-4">
              <Image
                alt="Avatar"
                className="rounded-full object-cover"
                height="160"
                src={PlaceholderSVG}
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("title")}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  {t("subtitle")}
                </p>
              </div>
            </div>
            <div className="prose w-full max-w-none gap-4">
              <p>{t("description")}</p>
            </div>
          </div>
        </main>
      </Shell>
    </BackdropBlur>
  )
}
