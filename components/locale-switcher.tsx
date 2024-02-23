import { useTransition } from "react"
import { locales } from "@/i18n/config"
import { usePathname, useRouter } from "@/i18n/navigations"
import { useLocale, useTranslations } from "next-intl"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  function onSelectChange(selectedLocale: string) {
    const nextLocale = selectedLocale
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
    router.refresh()
  }

  const t = useTranslations("LocaleSwitcher")

  return (
    <Select onValueChange={onSelectChange} value={locale}>
      <SelectTrigger className="w-[120px]" disabled={isPending}>
        <SelectValue placeholder={t("label")} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((cur: string) => (
          <SelectGroup key={cur}>
            <SelectItem value={cur}>{t("locale", { locale: cur })}</SelectItem>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}
