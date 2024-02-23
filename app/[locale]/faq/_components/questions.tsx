import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Questions() {
  const t = useTranslations("FAQPage")

  const faqs = [
    {
      question: t("faq1.question"),
      answer: t("faq1.answer"),
    },
    {
      question: t("faq2.question"),
      answer: t("faq2.answer"),
    },
    {
      question: t("faq3.question"),
      answer: t("faq3.answer"),
    },
    {
      question: t("faq4.question"),
      answer: t("faq4.answer"),
    },
    {
      question: t("faq5.question"),
      answer: t("faq5.answer"),
    },
    {
      question: t("faq6.question"),
      answer: t("faq6.answer"),
    },
    {
      question: t("faq7.question"),
      answer: t("faq7.answer"),
    },
    {
      question: t("faq8.question"),
      answer: t("faq8.answer"),
    },
    {
      question: t("faq9.question"),
      answer: t("faq9.answer"),
    },
    {
      question: t("faq10.question"),
      answer: t("faq10.answer"),
    },
  ]

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value="question-1">
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  )
}
