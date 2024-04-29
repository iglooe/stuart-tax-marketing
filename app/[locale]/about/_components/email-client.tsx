"use client"

import React, { FormEvent, useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { BackdropBlur } from "@/components/ui/backdrop"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shell } from "@/components/ui/shell"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

export function EmailForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const userEmail = formData.get("email") as string
    const userMessage = formData.get("message") as string

    const siteEmail = siteConfig.contact.email

    const mailtoLink = `mailto:${siteEmail}?subject=Message from ${firstName} ${lastName}&body=${userMessage}Contact Email: ${userEmail}`

    window.location.href = encodeURI(mailtoLink)
  }

  const t = useTranslations("AboutPage.contactCard")

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full">
        <BackdropBlur>
          <Shell>
            <div className="space-y-4">
              <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {t("header1")}
              </h4>
              <div className="grid gap-3">
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
              <div className="space-y-4 pt-4">
                <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {t("header2")}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">{t("firstName")}</Label>
                    <Input name="firstName" placeholder={t("firstName")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">{t("lastName")}</Label>
                    <Input name="lastName" placeholder={t("lastName")} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    name="email"
                    placeholder={t("emailPlaceholder")}
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea
                    name="message"
                    className="min-h-[100px]"
                    placeholder={t("messagePlaceholder")}
                  />
                </div>
                <Button type="submit">{t("action")}</Button>
              </div>
            </div>
          </Shell>
        </BackdropBlur>
      </div>
    </form>
  )
}
