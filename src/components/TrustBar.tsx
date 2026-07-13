import { trustPoints } from "@/content/site";
import { trustIcons } from "@/components/icons";

export default function TrustBar() {
  return (
    <section className="bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 sm:divide-x">
          {trustPoints.map((point) => {
            const Icon = trustIcons[point.icon];
            return (
              <div
                key={point.label}
                className="flex items-start gap-4 px-0 sm:px-6 py-6 sm:py-0 first:pl-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-400">
                  <Icon />
                </span>
                <div>
                  <p className="text-base font-semibold tracking-wide">
                    {point.label}
                  </p>
                  <p className="mt-0.5 text-sm text-white/65">
                    {point.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
