"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useScrollTop } from "@/hooks/use-scroll-top"

import { Icons } from "./icons"
import LocaleSwitcher from "./locale-switcher"
import NavigationLink from "./nav-link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Button } from "./ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Separator } from "./ui/separator"

export const MobileNav = () => {
  const t = useTranslations("Navigation")

  const scrolled = useScrollTop()

  const segment = useSelectedLayoutSegment()

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-40 flex h-16 w-full items-center bg-background px-4 dark:bg-background lg:px-6",
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
                <NavigationLink className="px-2 py-3" href="/">
                  {t("home")}
                </NavigationLink>
                <NavigationLink className="px-2 py-3" href="/about">
                  {t("about")}
                </NavigationLink>
                <NavigationLink className="px-2 py-3" href="/services">
                  {t("services")}
                </NavigationLink>
                <NavigationLink className="px-2 pt-3" href="/contact">
                  {t("contact")}
                </NavigationLink>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full px-2 py-3"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <NavigationLink href="/resources">
                        {t("resources.title")}
                      </NavigationLink>
                    </AccordionTrigger>
                    <AccordionContent>
                      <MobileLink
                        title="I-9"
                        href="/files/Form_USCIS_I9_2021_Employees.pdf"
                      >
                        {t("resources.form-description.I-9")}
                      </MobileLink>
                      <MobileLink
                        href="/files/Form_W-9_2021_Contractors.pdf"
                        title="Contractors W-9"
                      >
                        {t("resources.form-description.W-9")}
                      </MobileLink>
                      <MobileLink
                        href="/files/Form_W4_2021_Employees.pdf"
                        title="W-4"
                      >
                        {t("resources.form-description.W-4")}
                      </MobileLink>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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

export const MobileLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block select-none space-y-2 rounded-md px-2 py-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <div className="font-semibold leading-none tracking-tight">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </a>
  )
})
MobileLink.displayName = "ListItem"
