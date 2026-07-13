import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { siteMeta } from "@/content/site";

type LogoProps = {
  variant?: "dark" | "light";
  size?: "sm" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: {
    icon: "h-9 w-9",
    name: "text-base",
    tagline: "text-[9px] tracking-[0.28em]",
    dividerGap: "gap-1.5",
    dividerWidth: "w-3",
    nameGap: "mt-1.5",
    taglineGap: "mt-1",
  },
  lg: {
    icon: "h-14 w-14",
    name: "text-2xl",
    tagline: "text-xs tracking-[0.32em]",
    dividerGap: "gap-3",
    dividerWidth: "w-5",
    nameGap: "mt-3",
    taglineGap: "mt-2",
  },
} as const;

export default function Logo({
  variant = "dark",
  size = "sm",
  className = "",
}: LogoProps) {
  const nameColor = variant === "dark" ? "text-navy-900" : "text-white";
  const taglineColor = variant === "dark" ? "text-charcoal/60" : "text-white/60";
  const dividerColor = variant === "dark" ? "bg-navy-900/25" : "bg-white/30";
  const s = sizeClasses[size];

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center text-center leading-none group ${className}`}
    >
      <BrandMark variant={variant} className={s.icon} />
      <span
        className={`${s.nameGap} font-serif font-bold uppercase tracking-[0.18em] ${s.name} ${nameColor}`}
      >
        {siteMeta.name}
      </span>
      <span
        className={`${s.taglineGap} flex items-center ${s.dividerGap} font-sans font-medium uppercase ${s.tagline} ${taglineColor}`}
      >
        <span className={`h-px ${s.dividerWidth} ${dividerColor}`} />
        {siteMeta.tagline}
        <span className={`h-px ${s.dividerWidth} ${dividerColor}`} />
      </span>
    </Link>
  );
}
