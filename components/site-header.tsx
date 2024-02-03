"use client"

import { useMediaQuery } from "@/hooks/use-media-query"

import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const isMobile = useMediaQuery("(max-width: 870px)")

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>
}
