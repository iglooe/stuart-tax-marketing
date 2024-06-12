"use client"

import React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { siteConfig } from "@/config/site"
import { contactFormSchema } from "@/lib/validations"
import { BackdropBlur } from "@/components/ui/backdrop"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Shell } from "@/components/ui/shell"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

type Inputs = z.infer<typeof contactFormSchema>

export function EmailForm() {
  const form = useForm<Inputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const {
      firstName,
      lastName,
      email: userEmail,
      message: userMessage,
    } = values

    const siteEmail = siteConfig.contact.email

    const mailtoLink = `mailto:${siteEmail}?subject=Message from ${firstName} ${lastName}&body=${userMessage} Contact Email: ${userEmail}`

    window.location.href = encodeURI(mailtoLink)
    console.log(values)
  }

  const t = useTranslations("AboutPage.contactCard")

  return (
    <>
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
                <div className="grid gap-4">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full space-y-4 md:w-3/4"
                    >
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="firstName">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={t("firstName")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder={t("lastName")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="email">{t("email")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("emailDescription")}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("message")}</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                name="message"
                                className="min-h-[100px]"
                                placeholder={t("messageAction")}
                              />
                            </FormControl>
                            <FormDescription>
                              {t("messageDescription")}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">{t("action")}</Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </Shell>
        </BackdropBlur>
      </div>
    </>
  )
}
