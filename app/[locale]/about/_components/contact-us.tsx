import Image from "next/image"
import Link from "next/link"
import PlaceholderSVG from "@/public/placeholder.svg"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function ContactUs() {
  const t = useTranslations("AboutPage")
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t("contact")}
      </h2>
      <Card className="mx-auto w-[350px] sm:w-[400px]">
        <CardContent className="p-0">
          <div className="flex items-center space-x-4 p-6">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="48"
              src={PlaceholderSVG}
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width="48"
            />
            <div className="space-y-1">
              <h3 className="text-lg font-medium leading-none">
                {siteConfig.employees.name}
              </h3>
              <p className="text-sm leading-none dark:text-muted-foreground">
                {siteConfig.employees.title}
              </p>
            </div>
          </div>
          <div className="border" />
          <div className="grid gap-2 p-6">
            <div className="flex items-center space-x-2">
              <Icons.mailOpen className="size-4 shrink-0" />
              <span className="text-sm font-medium">Email</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                <Link
                  className="underline-offset-4 hover:underline"
                  href="mailto:contact@stuarttaxgroup.com"
                >
                  {siteConfig.contact.email}
                </Link>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.phone className="size-4 shrink-0" />
              <span className="text-sm font-medium">Phone</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {siteConfig.contact.phone}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <Icons.pin className="size-4 shrink-0" />
              <span className="text-sm font-medium">Address</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {siteConfig.contact.address}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
