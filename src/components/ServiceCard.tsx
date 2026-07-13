import Image from "next/image";
import type { Service } from "@/content/site";

type ServiceCardProps = {
  service: Service;
  variant?: "compact" | "full";
};

export default function ServiceCard({
  service,
  variant = "full",
}: ServiceCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white">
      <div className="relative h-48 w-full">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-navy-900">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
          {service.summary}
        </p>
        {variant === "full" && (
          <ul className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
            {service.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2 text-sm text-charcoal/75"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
