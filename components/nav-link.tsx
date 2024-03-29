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
        "inline-block transition-colors",
        isActive
          ? "text-gray-900 dark:text-white"
          : "text-primary hover:text-primary/75 dark:text-primary dark:hover:text-primary/75"
      )}
      href={href}
      {...rest}
    />
  )
}
