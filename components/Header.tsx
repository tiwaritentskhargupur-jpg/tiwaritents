"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "@/site.config";
import { phoneHref } from "@/lib/links";
import { Icon } from "./Icon";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-40 bg-ivory-light/95 border-b border-border-soft backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-3 group rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-0"
        >
          <span className="w-12 h-12 shrink-0 rounded-full bg-forest-deep flex items-center justify-center border border-accent/40 shadow-sm transition-transform duration-300 ease-subtle group-hover:scale-105">
            <span className="font-headline text-headline-xs font-bold text-accent-light">
              {business.monogram}
            </span>
          </span>
          <span className="flex flex-col min-w-0">
            <span className="font-headline text-headline-xs sm:text-headline-sm text-forest-dark tracking-wide font-bold group-hover:text-accent transition-colors truncate">
              {business.name}
            </span>
            <span className="hidden sm:block font-label text-label-sm uppercase text-charcoal-muted">
              {business.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label={business.cta.mainNav} className="hidden md:flex items-center gap-8">
          {business.nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`font-body text-body-md font-bold tracking-wide transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  current ? "text-accent" : "text-charcoal hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href={phoneHref()}
            aria-label={business.cta.callAria}
            title={business.cta.callNow}
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-soft text-forest-dark hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon name="call" />
          </a>
          <Link
            href="/contact#enquiry-form"
            className="inline-flex items-center justify-center px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-forest-dark text-on-primary font-label text-label-sm sm:text-label-lg uppercase transition-colors duration-300 ease-subtle hover:bg-forest-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="sm:hidden">{business.cta.getQuoteShort}</span>
            <span className="hidden sm:inline">{business.cta.getQuote}</span>
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-soft text-forest-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">
              {open ? business.cta.closeMenu : business.cta.openMenu}
            </span>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label={business.cta.mobileNav}
          className="md:hidden border-t border-border-soft bg-ivory-light px-6 py-4"
        >
          <ul className="flex flex-col">
            {business.nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`block py-3 font-body text-body-lg border-b border-border-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      current ? "text-accent" : "text-forest-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
