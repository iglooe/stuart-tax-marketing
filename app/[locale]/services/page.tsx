import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { LocaleProps } from "@/types/types"

export default function Services({ params: { locale } }: LocaleProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  const t = useTranslations("ServicesPage")

  return <div>{t("title")}</div>
}
