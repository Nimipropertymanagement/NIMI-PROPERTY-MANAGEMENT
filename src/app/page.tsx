import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import { homeHero, services, siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: homeHero.eyebrow,
  description: homeHero.subheading,
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500">
              {homeHero.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              {homeHero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
              {homeHero.subheading}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={homeHero.primaryCta.href} variant="primary">
                {homeHero.primaryCta.label}
              </Button>
              <Button href={homeHero.secondaryCta.href} variant="ghost">
                {homeHero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-8 text-sm text-charcoal/60">
              Prefer to talk first? Call{" "}
              <a
                href={siteMeta.phoneHref}
                className="font-medium text-navy-900 hover:text-accent-500"
              >
                {siteMeta.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-sm sm:h-96 lg:h-[30rem]">
            <Image
              src={homeHero.image.src}
              alt={homeHero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
            Everything your property needs, managed properly
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            From finding a tenant to keeping the property running day to day,
            NIMI covers the full scope of residential property management.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} variant="compact" />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="text-sm font-medium text-navy-900 underline underline-offset-4 decoration-navy-900/30 hover:text-accent-500 hover:decoration-accent-500"
          >
            View full details of our services →
          </Link>
        </div>
      </section>

      <section className="bg-navy-900">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Ready to hand your property over with confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Get in touch directly for a straightforward quote — no call
            centres, no waiting in a queue.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="secondary">
              Request a quote
            </Button>
            <a
              href={siteMeta.phoneHref}
              className="text-sm font-medium text-white hover:text-accent-400"
            >
              or call {siteMeta.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
