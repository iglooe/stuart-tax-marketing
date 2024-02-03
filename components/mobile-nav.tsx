"use client"

import Link from "next/link"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useScrollTop } from "@/hooks/use-scroll-top"

import { Icons } from "./icons"
import LocaleSwitcher from "./locale-switcher"
import NavigationLink from "./nav-link"
import { Button } from "./ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Separator } from "./ui/separator"

export const MobileNav = () => {
  const t = useTranslations("Navigation")

  const scrolled = useScrollTop()

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-40 flex h-16 w-full items-center bg-gray-200 px-4 dark:bg-[#090d1a] lg:px-6",
          scrolled && "border-b shadow-sm"
        )}
      >
        <Drawer direction="right">
          <DrawerTrigger>
            <div className="flex h-14 w-full items-center">
              <Button variant="ghost" size="icon">
                <HamburgerMenuIcon className="size-8" />
              </Button>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="bg-background pl-4 pt-4">
              <Link href="/" className="flex items-center space-x-2">
                <Icons.logo className="size-6" />
                <span className="inline-block font-bold">
                  {siteConfig.name}
                </span>
              </Link>
              <Separator className="my-4" />
              <div className="flex flex-col">
                <NavigationLink href="/">{t("home")}</NavigationLink>
                <NavigationLink href="/about">{t("about")}</NavigationLink>
                <NavigationLink href="/services">
                  {t("services")}
                </NavigationLink>
                <NavigationLink href="/contact">{t("contact")}</NavigationLink>
              </div>
              <div className="inset-x-0 bottom-0 mt-24 flex justify-center">
                <LocaleSwitcher />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
