// Central content config for the NIMI marketing site.
// Edit copy here rather than inside components/pages.

export type NavLink = {
  label: string;
  href: string;
};

export const siteMeta = {
  name: "NIMI",
  tagline: "PROPERTY MANAGEMENT",
  legalName: "NIMI Property Management",
  description:
    "Full property management for UK landlords, led directly by the founder. Straightforward, responsive, fully accountable.",
  phoneDisplay: "07886 859822",
  phoneHref: "tel:+447886859822",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const homeHero = {
  eyebrow: "UK-wide residential property management",
  heading: "Full property management for UK landlords, handled properly.",
  subheading:
    "NIMI takes care of tenant finding, rent collection, maintenance and day-to-day management, so you don't have to. Direct access to the person running your properties, not a call queue.",
  primaryCta: { label: "Request a quote", href: "/contact" },
  secondaryCta: { label: "See our services", href: "/services" },
  image: {
    src: "/images/hero-bristol-crescent.jpg",
    alt: "A row of elegant Georgian terraced houses on a residential crescent in Bristol, UK",
  },
};

// Exactly four honest, factual trust points — no ratings, review counts, or quotes.
// Update this array once NIMI has real accreditations, client numbers, or reviews to add.
export type TrustPoint = {
  icon: "founder" | "coverage" | "response" | "accountable";
  label: string;
  subtext: string;
};

export const trustPoints: TrustPoint[] = [
  {
    icon: "founder",
    label: "Founder-led",
    subtext: "Direct, hands-on service",
  },
  {
    icon: "coverage",
    label: "UK-wide coverage",
    subtext: "Landlords across the country",
  },
  {
    icon: "response",
    label: "Fast response times",
    subtext: "No call centres, no wait",
  },
  {
    icon: "accountable",
    label: "Fully accountable",
    subtext: "From day one",
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  image: {
    src: string;
    alt: string;
  };
};

export const services: Service[] = [
  {
    slug: "tenant-finding",
    title: "Tenant finding",
    summary:
      "Marketing your property, screening applicants, and getting the right tenant in place without delay.",
    details: [
      "Listing and marketing your property to attract quality applicants",
      "Accompanied viewings",
      "Referencing and right-to-rent checks",
      "Tenancy agreement preparation",
    ],
    image: {
      src: "/images/service-tenant-finding.jpg",
      alt: "Colourful terraced houses in Notting Hill, London",
    },
  },
  {
    slug: "rent-collection",
    title: "Rent collection",
    summary:
      "Rent collected on schedule, tracked clearly, and paid to you without you having to chase anyone.",
    details: [
      "Scheduled rent collection and payment tracking",
      "Prompt follow-up on late payments",
      "Clear statements of income and any deductions",
      "Direct payment to your nominated account",
    ],
    image: {
      src: "/images/service-rent-collection.jpg",
      alt: "Rooftops and chimneys along a terraced street in London",
    },
  },
  {
    slug: "maintenance-coordination",
    title: "Maintenance coordination",
    summary:
      "Repairs and maintenance issues handled promptly, with trusted contractors and clear communication.",
    details: [
      "Single point of contact for tenants to report issues",
      "Coordination of repairs with vetted contractors",
      "Progress updates through to completion",
      "Routine property checks",
    ],
    image: {
      src: "/images/service-maintenance.jpg",
      alt: "A tidy, modern living room in a London apartment",
    },
  },
  {
    slug: "ongoing-management",
    title: "Ongoing management",
    summary:
      "Day-to-day oversight of your property and tenancy, so you always know where things stand.",
    details: [
      "Ongoing tenancy management and renewals",
      "Regular updates on your property's status",
      "Handling day-to-day landlord and tenant queries",
      "One direct contact throughout",
    ],
    image: {
      src: "/images/service-ongoing-management.jpg",
      alt: "A red-brick residential building in Kensington, London",
    },
  },
];

export const servicesIntro = {
  heading: "Full property management, done properly",
  subheading:
    "Everything a landlord needs to hand a property over with confidence — from finding the right tenant to keeping things running day to day. No pricing games, no hidden layers: this is what's included.",
};

export const aboutContent = {
  heading: "Founder-led, from day one",
  intro:
    "NIMI is a newly founded property management company, built to give UK landlords a more direct and responsive alternative to large agencies.",
  // Keep this section short and honest — do not imply history or a client base that doesn't exist yet.
  story: [
    "NIMI was started with a simple observation: landlords are often left waiting on hold, passed between departments, or kept in the dark about their own property. That's not how it should work.",
    "As a new, founder-led operation, every property NIMI manages is handled with direct, personal attention — not passed down a chain of account managers. When you call, you speak to the person actually managing your property.",
    "Being new means being focused. NIMI is building its reputation one property, one landlord, and one tenancy at a time — with clear communication and full accountability from the outset.",
  ],
  // Update once NIMI has a growing team; keep singular/founder framing honest until then.
  approach: {
    heading: "What direct involvement means in practice",
    points: [
      {
        title: "One point of contact",
        description:
          "You deal directly with the founder, not a rotating cast of account handlers.",
      },
      {
        title: "Fast replies",
        description:
          "Calls and messages are answered promptly, with no call centre in between.",
      },
      {
        title: "Full visibility",
        description:
          "You always know what's happening with your property and why.",
      },
    ],
  },
  // Placeholder section, intentionally sparse — populate honestly once true.
  credentials: {
    heading: "Accreditations & memberships",
    note: "NIMI is a new operation. Details of any professional memberships, insurance, and compliance accreditations will be published here as they are put in place.",
  },
  image: {
    src: "/images/about-liverpool-street.jpg",
    alt: "A residential terraced street in Liverpool, UK",
  },
};

export const contactContent = {
  heading: "Get in touch",
  subheading:
    "Whether you have one property or a growing portfolio, get in touch directly for a straightforward conversation about how NIMI can manage it.",
  formNote:
    "Fields marked * are required. We'll come back to you as quickly as we can.",
  image: {
    src: "/images/contact-front-door.jpg",
    alt: "A painted blue front door on a brick townhouse in Birmingham, UK",
  },
};

export const footerContent = {
  note: "NIMI Property Management is a new, founder-led operation providing residential property management services to landlords across the UK.",
};
