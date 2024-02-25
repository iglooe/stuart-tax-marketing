import { useTranslations } from "next-intl"

import { EmailForm } from "./email-client"

export default function ContactUs() {
  const t = useTranslations("AboutPage")
  return (
    <>
      <EmailForm />
    </>
  )
}
