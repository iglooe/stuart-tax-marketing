"use client"

import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

import { Icons } from "./icons"

export function Github() {
  return (
    <Button variant="ghost" size="icon">
      <Link
        href={siteConfig.githubRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.gitHub className="size-5" />
        <span className="sr-only">Link to github repository</span>
      </Link>
    </Button>
  )
}
