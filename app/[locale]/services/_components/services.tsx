import { useTranslations } from "next-intl"

import { toSentenceCase, toTitleCase } from "@/lib/utils"

export function ServicesSection() {
  const t = useTranslations("ServicesPage")

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-1">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {toTitleCase(t("title"))}
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                  {toSentenceCase(t("subtitle"))}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-6 lg:grid-cols-2 lg:gap-12 lg:py-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    {t("services.service1.title")}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                    {t("services.service1.description")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    {t("services.service2.title")}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                    {t("services.service2.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 pb-6 lg:grid-cols-2 lg:gap-12 lg:pb-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    {t("services.service3.title")}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                    {t("services.service3.description")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    {t("services.service4.title")}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                    {t("services.service4.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    {t("services.service5.title")}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                    {t("services.service5.description")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    {t("services.service6.title")}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                    {t("services.service6.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
