import { useTranslations } from "next-intl"

import { PDFLink } from "./pdf-link"

export function ResourcesHero() {
  const t = useTranslations("ResourcesPage")

  return (
    <>
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
    </>
  )
}
