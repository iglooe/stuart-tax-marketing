import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Shell } from "@/components/ui/shell"

import { ThemeToggle } from "./theme-toggle"

export const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <div className="border border-border/50 bg-background">
      <Shell>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className={cn(
            "flex items-center space-x-4 font-sans",
            fontSans.variable
          )}
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            &copy;{currYear} {siteConfig.name} All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <ThemeToggle />
          </div>
        </section>
      </Shell>
    </div>
  )
}
