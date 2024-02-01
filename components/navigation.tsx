import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import NavigationLink from "@/components/nav-link"

import { Icons } from "./icons"

export default function Navigation() {
  const t = useTranslations("Navigation")

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <div className="flex gap-6">
        <NavigationLink href="/">{t("home")}</NavigationLink>
        <NavigationLink href="/about">{t("about")}</NavigationLink>
        <NavigationLink href="/services">{t("services")}</NavigationLink>
        <NavigationLink href="/contact">{t("contact")}</NavigationLink>
      </div>
    </div>
  )
}
