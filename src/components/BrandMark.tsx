type BrandMarkProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Full NIMI mark: three skyscraper silhouettes (accent blue) centered above
 * a residential gable roofline (navy/charcoal) with two window details.
 * Used at logo scale (header, footer) — not small enough to need the
 * simplified favicon mark.
 */
export default function BrandMark({
  variant = "dark",
  className = "",
}: BrandMarkProps) {
  const buildingFill = variant === "dark" ? "#2f7fc1" : "#4f9bd8";
  const roofFill = variant === "dark" ? "#0b2545" : "#f4f7fb";
  const buildingWindowFill = variant === "dark" ? "#ffffff" : "#06132a";
  const roofWindowFill = variant === "dark" ? "#ffffff" : "#06132a";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="NIMI"
    >
      <g fill={buildingFill}>
        <rect x="15" y="16" width="9" height="18" />
        <rect x="26" y="8" width="11" height="26" />
        <rect x="39" y="18" width="10" height="16" />
      </g>
      <g fill={buildingWindowFill}>
        <rect x="17.5" y="19" width="2" height="2" />
        <rect x="21" y="19" width="2" height="2" />
        <rect x="17.5" y="24" width="2" height="2" />
        <rect x="21" y="24" width="2" height="2" />
        <rect x="17.5" y="29" width="2" height="2" />
        <rect x="21" y="29" width="2" height="2" />

        <rect x="29" y="11" width="2" height="2" />
        <rect x="33" y="11" width="2" height="2" />
        <rect x="29" y="16" width="2" height="2" />
        <rect x="33" y="16" width="2" height="2" />
        <rect x="29" y="21" width="2" height="2" />
        <rect x="33" y="21" width="2" height="2" />
        <rect x="29" y="26" width="2" height="2" />
        <rect x="33" y="26" width="2" height="2" />

        <rect x="41.5" y="21" width="2" height="2" />
        <rect x="45" y="21" width="2" height="2" />
        <rect x="41.5" y="26" width="2" height="2" />
        <rect x="45" y="26" width="2" height="2" />
      </g>
      <polygon points="32,26 8,50 56,50" fill={roofFill} />
      <g fill={roofWindowFill}>
        <rect x="21" y="38" width="6" height="6" />
        <rect x="37" y="38" width="6" height="6" />
      </g>
    </svg>
  );
}
