type PageHeaderProps = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
};

export default function PageHeader({
  eyebrow,
  heading,
  subheading,
}: PageHeaderProps) {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
