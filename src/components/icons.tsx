import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FounderIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20c1-3.5 3.8-5.5 6.5-5.5s5.5 2 6.5 5.5" />
    </svg>
  );
}

export function CoverageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function ResponseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function AccountableIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l7 2.6v5.3c0 4.5-2.9 7.7-7 9.1-4.1-1.4-7-4.6-7-9.1V6.1L12 3.5Z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </svg>
  );
}

export const trustIcons = {
  founder: FounderIcon,
  coverage: CoverageIcon,
  response: ResponseIcon,
  accountable: AccountableIcon,
};
