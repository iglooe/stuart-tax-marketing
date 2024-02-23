import { useTranslations } from "next-intl"

import { BackdropBlur } from "@/components/ui/backdrop"
import { Icons } from "@/components/icons"

export function ResourcesHero() {
  const t = useTranslations("ResourcesPage")

  const files = [
    {
      title: "I-9",
      href: "/files/Form_USCIS_I9_2021_Employees.pdf",
    },
    {
      title: "W-9",
      href: "/files/Form_W-9_2021_Contractors.pdf",
    },
    {
      title: "W-4",
      href: "/files/Form_W4_2021_Employees.pdf",
    },
  ]

  return (
    <>
      <BackdropBlur className="backdrop-blur-[2px]md:py-24 flex w-full flex-1 flex-col gap-4 rounded-lg border border-border/50 bg-background/50 p-4 md:gap-8 md:p-6">
        <div className="flex flex-col justify-center space-y-2">
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {t("content.title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground/75">
            {t("content.subtitle")}
          </p>
        </div>
        <div className="grid gap-4 md:gap-8">
          {files.map((file, index) => (
            <a
              key={index}
              href={file.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/90 dark:hover:bg-primary/60"
            >
              <Icons.fileIcon className="size-6" />
              <span className="font-semibold">{file.title}</span>
              <span className="ml-auto flex flex-row gap-3 text-gray-500 hover:underline dark:text-primary">
                {t("content.action")}
                <Icons.file className="size-6" />
              </span>
            </a>
          ))}
        </div>
      </BackdropBlur>
    </>
  )
}
