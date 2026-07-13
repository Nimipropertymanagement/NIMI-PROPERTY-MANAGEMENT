import Link from "next/link";
import Logo from "@/components/Logo";
import { footerContent, navLinks, siteMeta } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Logo variant="light" size="lg" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {footerContent.note}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Get in touch
            </h3>
            <p className="mt-4 text-sm text-white/80">
              Call{" "}
              <a
                href={siteMeta.phoneHref}
                className="font-medium text-white hover:text-accent-400 transition-colors"
              >
                {siteMeta.phoneDisplay}
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-sm border border-white/20 px-5 py-2.5 text-sm font-medium tracking-wide text-white hover:bg-white/10 transition-colors"
            >
              Request a quote
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {year} {siteMeta.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
