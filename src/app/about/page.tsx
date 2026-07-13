import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { aboutContent } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About NIMI" heading={aboutContent.heading} subheading={aboutContent.intro} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative order-first h-72 w-full overflow-hidden rounded-sm sm:h-96 lg:order-last lg:h-full">
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            {aboutContent.story.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-charcoal/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
            {aboutContent.approach.heading}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {aboutContent.approach.points.map((point) => (
              <div key={point.title}>
                <h3 className="font-serif text-lg font-semibold text-navy-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-sm border border-neutral-200 bg-white p-8 sm:p-10">
          <h2 className="font-serif text-xl font-semibold text-navy-900">
            {aboutContent.credentials.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70">
            {aboutContent.credentials.note}
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
            Want to speak with the founder directly?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-charcoal/75">
            Get in touch and you&apos;ll hear back from the person actually
            running NIMI — not an account handler.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Request a quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
