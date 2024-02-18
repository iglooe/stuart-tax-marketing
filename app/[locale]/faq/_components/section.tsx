"use client"

import { useTranslations } from "next-intl"

import { Shell } from "@/components/ui/shell"

import { Questions } from "./questions"

export function FAQSection() {
  const t = useTranslations("FAQPage")

  return (
    <Shell>
      <div className="w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-2 pb-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t("title")}
              </h1>
              <div className="mx-auto max-w-2xl text-muted-foreground dark:text-muted-foreground md:text-xl/relaxed">
                {t("subtitle")}
              </div>
            </div>
          </div>
          <section className="backdrop-blur-[2px]md:py-24 flex w-full flex-1 flex-col gap-4 rounded-lg border border-border/50 bg-background/50 md:gap-8 md:p-6">
            <Questions />
          </section>
        </div>
      </div>
    </Shell>
  )
}
