import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contactContent, siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactContent.subheading,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading={contactContent.heading}
        subheading={contactContent.subheading}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="rounded-sm border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
                Call directly
              </p>
              <a
                href={siteMeta.phoneHref}
                className="mt-2 block font-serif text-3xl font-semibold text-navy-900 hover:text-accent-500"
              >
                {siteMeta.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-charcoal/60">
                Speak directly with the founder — no call centre.
              </p>
            </div>

            <div className="relative mt-8 h-64 w-full overflow-hidden rounded-sm sm:h-80">
              <Image
                src={contactContent.image.src}
                alt={contactContent.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-sm border border-neutral-200 bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
