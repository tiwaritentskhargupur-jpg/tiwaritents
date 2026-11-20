import Link from "next/link";
import { business } from "@/site.config";
import { addressLine, emailHref, phoneHref, whatsappHref } from "@/lib/links";

export function Footer() {
  const footerServices = business.services.filter((service) => service.showInFooter);

  return (
    <footer className="bg-forest-deep text-ivory-light border-t border-border-dark pt-16 pb-28 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-forest-dark flex items-center justify-center border border-accent/40">
                <span className="font-headline text-headline-xs font-bold text-accent-light">
                  {business.monogram}
                </span>
              </span>
              <span className="font-headline text-headline-sm text-ivory-light font-bold">
                {business.name}
              </span>
            </div>
            <p className="font-body text-body-sm text-ivory-light/80 leading-relaxed">
              {business.footer.blurb}
            </p>
            <ul className="flex flex-wrap gap-4">
              {business.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body-sm text-accent-light hover:text-ivory-light transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline text-headline-sm text-accent-light mb-4 font-semibold">
              {business.footer.servicesHeading}
            </h2>
            <ul className="space-y-2.5 font-body text-body-sm text-ivory-light/80">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.detail ? `/services#${service.id}` : "/services"}
                    className="hover:text-accent-light transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {service.footerLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline text-headline-sm text-accent-light mb-4 font-semibold">
              {business.footer.linksHeading}
            </h2>
            <ul className="space-y-2.5 font-body text-body-sm text-ivory-light/80">
              {business.footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent-light transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline text-headline-sm text-accent-light mb-4 font-semibold">
              {business.footer.officeHeading}
            </h2>
            <div className="space-y-3 font-body text-body-sm text-ivory-light/80">
              <p>{addressLine()}</p>
              <p>
                {business.footer.phonePrefix}{" "}
                <a
                  href={phoneHref()}
                  className="hover:text-accent-light transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {business.phoneDisplay}
                </a>
              </p>
              <p>
                {business.footer.whatsappPrefix}{" "}
                <a
                  href={whatsappHref(business.whatsappMessages.floating)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {business.whatsappDisplay}
                </a>
              </p>
              <p>
                {business.footer.emailPrefix}{" "}
                <a
                  href={emailHref()}
                  className="hover:text-accent-light transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {business.email}
                </a>
              </p>
              <p className="text-accent-light">{business.hoursShort}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-body-sm text-ivory-light/70">
          <p>{business.footer.copyright}</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {business.footer.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-accent-light transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
