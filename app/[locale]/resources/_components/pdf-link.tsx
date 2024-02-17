import React from "react"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export const PDFLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  const t = useTranslations("ResourcesPage")
  return (
    <a
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/90 dark:hover:bg-primary/60",
        className
      )}
      {...props}
    >
      <Icons.fileIcon className="size-6" />
      <span className="font-semibold">{title}</span>
      <span className="ml-auto flex flex-row gap-3 text-gray-500 hover:underline dark:text-primary">
        {t("content.action")}
        <Icons.file className="size-6" />
      </span>
    </a>
  )
})
PDFLink.displayName = "PDFLink"
