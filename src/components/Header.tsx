"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { navLinks, siteMeta } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between py-2.5">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-navy-900"
                      : "text-charcoal/70 hover:text-navy-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href={siteMeta.phoneHref}
              className="text-sm font-medium text-navy-900 hover:text-accent-500 transition-colors"
            >
              {siteMeta.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-navy-900 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-navy-800"
            >
              Request a quote
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-navy-900"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-base font-medium text-charcoal hover:bg-neutral-50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteMeta.phoneHref}
              className="rounded-sm px-2 py-3 text-base font-medium text-navy-900"
            >
              {siteMeta.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-navy-900 px-5 py-3 text-sm font-medium tracking-wide text-white"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
