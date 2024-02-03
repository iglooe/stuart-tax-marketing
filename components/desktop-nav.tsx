"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useScrollTop } from "@/hooks/use-scroll-top"

import { Icons } from "./icons"
import LocaleSwitcher from "./locale-switcher"
import NavigationLink from "./nav-link"

export const DesktopNav: React.FC = () => {
  const scrolled = useScrollTop()

  const t = useTranslations("Navigation")
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 w-full items-center bg-gray-200 px-4 dark:bg-[#090d1a] lg:px-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <LocaleSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}
