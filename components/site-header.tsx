"use client"

import { useMediaQuery } from "@/hooks/use-media-query"

import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const isMobile = useMediaQuery("(max-width: 950px)")

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>
}
