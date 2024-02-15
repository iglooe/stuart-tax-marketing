"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { cn, toTitleCase } from "@/lib/utils"
import { useScrollTop } from "@/hooks/use-scroll-top"

import { Icons } from "./icons"
import { ListItem } from "./list-item"
import LocaleSwitcher from "./locale-switcher"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

export const DesktopNav: React.FC = () => {
  const scrolled = useScrollTop()

  const t = useTranslations("Navigation")
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 w-full items-center bg-background px-2 dark:bg-background lg:px-4",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="size-6" />
            <span className="inline-block font-bold">
              {toTitleCase(siteConfig.name)}
            </span>
          </Link>
          <div className="flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("home")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("about")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("services")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("contact")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t("resources.title")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/resources"
                          >
                            <Icons.file className="size-10" />
                            <div className="mb-2 mt-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                              {t("resources.action")}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {t("resources.action-subtitle")}.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/files/Form_USCIS_I9_2021_Employees.pdf"
                        title="Form I-9"
                      >
                        {t("resources.form-description.I-9")}
                      </ListItem>
                      <ListItem
                        href="/files/Form_W-9_2021_Contractors.pdf"
                        title="Contractors W-9"
                      >
                        {t("resources.form-description.W-9")}
                      </ListItem>
                      <ListItem
                        href="/files/Form_W4_2021_Employees.pdf"
                        title="W-4"
                      >
                        {t("resources.form-description.W-4")}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
