import React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { cn } from "@/lib/utils"
import { Shell } from "@/components/ui/shell"
import { Icons } from "@/components/icons"
import { MobileLink } from "@/components/mobile-nav"

type Props = {
  params: { locale: string }
}

export default function Resources({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  const t = useTranslations("ResourcesPage")

  return (
    <>
      <Shell variant="default">
        <section className="backdrop-blur-[2px]md:py-24 flex w-full flex-1 flex-col gap-4 rounded-lg border border-border/50 bg-background/50 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {t("content.title")}
            </h1>
          </div>
          <div className="grid gap-4 md:gap-8">
            <PDFLink
              className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/90 dark:hover:bg-primary/60"
              href="/files/Form_USCIS_I9_2021_Employees.pdf"
              title="I-9"
            />
            <PDFLink
              className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/90 dark:hover:bg-primary/60"
              title="W-9"
              href="/files/Form_W-9_2021_Contractors.pdf"
            />
            <PDFLink
              className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/90 dark:hover:bg-primary/60"
              href="/files/Form_W4_2021_Employees.pdf"
              title="W-4"
            />
          </div>
        </section>
      </Shell>
    </>
  )
}

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
