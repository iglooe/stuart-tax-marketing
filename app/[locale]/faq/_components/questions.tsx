import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Questions() {
  const t = useTranslations("FAQPage")

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="question-1">
        <AccordionTrigger>{t("faq1.question")}</AccordionTrigger>
        <AccordionContent>{t("faq1.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-2">
        <AccordionTrigger>{t("faq2.question")}</AccordionTrigger>
        <AccordionContent>{t("faq2.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-3">
        <AccordionTrigger>{t("faq3.question")}</AccordionTrigger>
        <AccordionContent>{t("faq3.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-4">
        <AccordionTrigger>{t("faq4.question")}</AccordionTrigger>
        <AccordionContent>{t("faq4.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-5">
        <AccordionTrigger>{t("faq5.question")}</AccordionTrigger>
        <AccordionContent>{t("faq5.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-6">
        <AccordionTrigger>{t("faq6.question")}</AccordionTrigger>
        <AccordionContent>{t("faq6.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-7">
        <AccordionTrigger>{t("faq7.question")}</AccordionTrigger>
        <AccordionContent>{t("faq7.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-8">
        <AccordionTrigger>{t("faq8.question")}</AccordionTrigger>
        <AccordionContent>{t("faq8.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-9">
        <AccordionTrigger>{t("faq9.question")}</AccordionTrigger>
        <AccordionContent>{t("faq9.answer")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="question-10">
        <AccordionTrigger>{t("faq10.question")}</AccordionTrigger>
        <AccordionContent>{t("faq10.answer")}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
