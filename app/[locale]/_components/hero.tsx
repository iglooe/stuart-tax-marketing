import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { fontHeading } from "@/lib/fonts"
import { BackdropBlur } from "@/components/ui/backdrop"
import { Button } from "@/components/ui/button"

export function Hero() {
  const t = useTranslations("IndexPage")

  return (
    <BackdropBlur variant="hero">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 text-wrap">
              <h1
                className={`${fontHeading.className} text-3xl font-bold tracking-tight text-primary dark:text-primary sm:text-5xl xl:text-6xl/none`}
              >
                {t("hero")}
              </h1>
              <p className="max-w-[600px] text-muted-foreground dark:text-muted-foreground md:text-xl">
                {t("description")}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/about">
                <Button size="lg">
                  {t("cta")}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="link" size="lg">
                  {t("cta2")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <Image
              alt="Hero Image"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center dark:hidden sm:w-full lg:order-last"
              height="400"
              src="/hero.png"
              width="600"
            />
            <Image
              alt="Hero Image"
              className="mx-auto hidden aspect-[3/2] overflow-hidden rounded-xl object-cover object-center dark:block sm:w-full lg:order-last"
              height="400"
              src="/hero-dark.png"
              width="600"
            />
          </div>
        </div>
      </div>
    </BackdropBlur>
  )
}
