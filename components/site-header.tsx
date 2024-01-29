"use client"

import { cn } from "@/lib/utils"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { ThemeToggle } from "@/components/theme-toggle"

import LocaleSwitcher from "./locale-switcher"
import Navigation from "./navigation"

export function SiteHeader() {
  const scrolled = useScrollTop()
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 w-full items-center bg-gray-100 px-4 dark:bg-[#090d1a] lg:px-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Navigation />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <LocaleSwitcher />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
