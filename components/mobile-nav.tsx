// import { HamburgerMenuIcon } from "@radix-ui/react-icons"

// import { Button } from "./ui/button"

// export const MobileNav = () => {
//   return (
//     <>
//       <div className="sticky top-0 z-50 flex h-14 w-full items-center bg-background pl-4">
//         <Button variant="ghost" size="icon">
//           <HamburgerMenuIcon className="size-8" />
//         </Button>
//       </div>
//     </>
//   )
// }

"use client"

import { ElementRef, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronsLeft, MenuIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "usehooks-ts"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import NavigationLink from "./nav-link"
import { Separator } from "./ui/separator"

export const MobileNav = () => {
  const isMobile = useMediaQuery("(max-width: 800px)")

  const isResizingRef = useRef(false)
  const sidebarRef = useRef<ElementRef<"aside">>(null)
  const navbarRef = useRef<ElementRef<"div">>(null)
  const [isResetting, setIsResetting] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(isMobile)

  const t = useTranslations("Navigation")

  useEffect(() => {
    if (isMobile) {
      collapse()
    } else {
      resetWidth()
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) {
      collapse()
    }
  }, [isMobile])

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false)
      setIsResetting(true)

      sidebarRef.current.style.width = "100%"
      navbarRef.current.style.setProperty("width", "0")
      navbarRef.current.style.setProperty("left", "100%")
      setTimeout(() => setIsResetting(false), 300)
    }
  }

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true)
      setIsResetting(true)

      sidebarRef.current.style.width = "0"
      navbarRef.current.style.setProperty("width", "100%")
      navbarRef.current.style.setProperty("left", "0")
      setTimeout(() => setIsResetting(false), 300)
    }
  }

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative z-[99999] flex w-60 flex-col overflow-y-auto bg-secondary",
          isResetting && "transition-all duration-300 ease-in-out"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "absolute right-2 top-3 size-6 rounded-sm text-muted-foreground opacity-0 transition hover:bg-zinc-300 group-hover/sidebar:opacity-100 dark:hover:bg-zinc-600",
            isMobile && "opacity-100",
            isCollapsed && "size-0"
          )}
        >
          <ChevronsLeft className="size-6" />
        </div>
        <div className="overflow-y-hidden bg-background pt-4">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="size-6" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <Separator className="my-4" />
          <div className="flex h-8 items-center space-x-4 pb-4 pl-6 text-sm">
            <NavigationLink href="/">{t("home")}</NavigationLink>
            <Separator orientation="vertical" />
            <NavigationLink href="/about">{t("about")}</NavigationLink>
            <Separator orientation="vertical" />
            <NavigationLink href="/services">{t("services")}</NavigationLink>
            <Separator orientation="vertical" />
            <NavigationLink href="/contact">{t("contact")}</NavigationLink>
          </div>
        </div>
        <div
          onClick={resetWidth}
          className="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary/10 opacity-0 transition group-hover/sidebar:opacity-100"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute left-60 top-0 z-[99999] w-[calc(100%-240px)]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="w-full bg-transparent px-3 py-2">
          {isCollapsed && (
            <MenuIcon
              onClick={resetWidth}
              role="button"
              className="size-6 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  )
}
