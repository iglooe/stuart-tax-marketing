import { useTranslations } from "next-intl"

import { toSentenceCase, toTitleCase } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function ServicesSection() {
  const t = useTranslations("ServicesPage")

  const features = [
    {
      name: t("services.service1.title"),
      description: t("services.service1.description"),
      icon: <Icons.penLine className="dark:text-primary" />,
    },
    {
      name: t("services.service2.title"),
      description: t("services.service2.description"),
      icon: <Icons.helpBadge className="dark:text-primary" />,
    },
    {
      name: t("services.service3.title"),
      description: t("services.service3.description"),
      icon: <Icons.penLine className="dark:text-primary" />,
    },
    {
      name: t("services.service4.title"),
      description: t("services.service4.description"),
      icon: <Icons.building className="dark:text-primary" />,
    },
    {
      name: t("services.service5.title"),
      description: t("services.service5.description"),
      icon: <Icons.house className="dark:text-primary" />,
    },
    {
      name: t("services.service6.title"),
      description: t("services.service6.description"),
      icon: <Icons.handshake className="dark:text-primary" />,
    },
  ]

  return (
    <div className="bg-transparent py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-companyLight sm:text-5xl">
            {toTitleCase(t("title"))}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground/75">
            {toSentenceCase(t("subtitle"))}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primary">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-secondary">
                    {feature.icon}
                  </div>
                  <div className="text-xl sm:text-2xl">{feature.name}</div>
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
