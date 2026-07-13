import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { homeHero, siteMeta } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
});

// PLACEHOLDER domain — replace with the real production domain once confirmed.
const siteUrl = "https://nimipropertymanagement.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NIMI Property Management | UK Residential Landlords",
    template: "%s | NIMI Property Management",
  },
  description:
    "NIMI is a founder-led property management company offering full-service residential property management to landlords across the UK. Direct access, fast response times.",
  openGraph: {
    title: "NIMI Property Management | UK Residential Landlords",
    description: siteMeta.description,
    siteName: siteMeta.legalName,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: homeHero.image.src,
        alt: homeHero.image.alt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
