import { toSentenceCase, toTitleCase } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: toTitleCase("stuart tax group inc."),
  description: toSentenceCase(
    "The official website for Stuart Tax Group Inc. Offering tax services for individuals and businesses. Located in Austin Texas we specialize in bilingual assistance."
  ),
  employees: {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
  },
  contact: {
    address: "7100 Circle S Rd, Austin, TX 78745",
    phone: "+1-512-445-3379",
    cell: "+1-512-293-7130",
    email: "contact@stuarttaxgroup.com",
    test: "dereknohomo@gmail.com",
  },
  githubRepo: "https://github.com/iglooe/stuart-tax-marketing",
}
