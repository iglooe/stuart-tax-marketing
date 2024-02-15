export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "stuart tax group",
  description:
    "neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  contact: {
    address: "7100 Circle S Rd, Austin, TX 78745",
    areaCode: "512",
    phone: "445- 3379",
    cell: "293-7130",
    email: "contact@stuarttaxgroup.com",
  },
}
