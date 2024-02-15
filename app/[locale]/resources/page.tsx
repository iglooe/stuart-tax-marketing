import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

type Props = {
  params: { locale: string }
}

export default function Resources({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  const t = useTranslations("ResourcesPage")

  return <div>{t("title")}</div>
}