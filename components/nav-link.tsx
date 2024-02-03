"use client"

import { ComponentProps } from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import type { AppPathnames } from "@/i18n/config"
import { Link } from "@/i18n/navigations"

import { cn } from "@/lib/utils"

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-block px-2 py-3 transition-colors",
        isActive
          ? "font-bold text-gray-900 dark:text-white"
          : "text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
      )}
      href={href}
      {...rest}
    />
  )
}
