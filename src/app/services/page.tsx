import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { services, servicesIntro, siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: servicesIntro.subheading,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        heading={servicesIntro.heading}
        subheading={servicesIntro.subheading}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} variant="full" />
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
            Want to talk through your property specifically?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-charcoal/75">
            Get in touch directly — no pricing games, just a straightforward
            conversation about what your property needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Request a quote
            </Button>
            <a
              href={siteMeta.phoneHref}
              className="text-sm font-medium text-navy-900 hover:text-accent-500"
            >
              or call {siteMeta.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
