"use client"

import { NextIntlClientProvider } from "next-intl"

import { NextIntlProviderProps } from "@/types/types"

export default function NextIntlProvider({
  messages,
  locale,
  children,
  now,
  timeZone,
}: NextIntlProviderProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>,
      }}
      now={now}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  )
}
