import { AbstractIntlMessages } from "next-intl"

export type RootLayoutProps = {
  children: React.ReactNode
}

export type LocaleLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export type LocaleProps = {
  params: { locale: string }
}

export type FeaturesCardProps = {
  children: React.ReactNode
  title: string
  description: string
}

export type LocaleSwitcherSelectProps = {
  children: React.ReactNode
  defaultValue: string
  label: string
}

export type MainLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export type NextIntlProviderProps = {
  messages: AbstractIntlMessages
  locale: string
  children: React.ReactNode
  now: Date
  timeZone: string
}
