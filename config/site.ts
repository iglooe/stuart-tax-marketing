import { toSentenceCase, toTitleCase } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: toTitleCase("stuart tax group"),
  description: toSentenceCase(
    "The homepage of Stuart Tax Group, located in Austin, TX"
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
  },
  githubRepo: "https://github.com/iglooe/stuart-tax-marketing",
}
