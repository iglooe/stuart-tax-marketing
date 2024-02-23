import Link from "next/link"
import { useTranslations } from "next-intl"

import { Icons } from "@/components/icons"

export function Cards() {
  const t = useTranslations("IndexPage.cards")

  const features = [
    {
      title: t("card1.title"),
      description: t("card1.description"),
      icon: <Icons.page className="size-12" />,
    },
    {
      title: t("card2.title"),
      description: t("card2.description"),
      icon: <Icons.banknote className="size-12" />,
    },
    {
      title: t("card3.title"),
      description: t("card3.description"),
      icon: <Icons.shield className="size-12" />,
    },
    {
      title: t("card4.title"),
      description: t("card4.description"),
      icon: <Icons.globe className="size-12" />,
    },
    {
      title: t("card5.title"),
      description: t("card5.description"),
      icon: <Icons.pen className="size-12" />,
    },
    {
      title: t("card6.title"),
      description: t("card6.description"),
      icon: <Icons.translate className="size-12" />,
    },
  ]

  return (
    <section
      id="features"
      className="container space-y-6 bg-transparent py-8 dark:bg-transparent md:py-10"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t("subtitle")}
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6 sm:h-[220px]">
                {feature.icon}
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          This list isn&apos;t complete, feel free to{" "}
          <Link
            href="/about"
            className="font-medium underline underline-offset-4"
          >
            Contact us
          </Link>
          , if you have any questions.
        </p>
      </div>
    </section>
  )
}
