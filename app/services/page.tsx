import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/site.config";
import { fillTemplate, whatsappHref } from "@/lib/links";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: business.seo.pages.services.title,
  description: business.seo.pages.services.description,
};

export default function ServicesPage() {
  const detailed = business.services.filter((service) => service.detail);

  return (
    <>
      <PageHero
        eyebrow={business.servicesPage.eyebrow}
        title={business.servicesPage.title}
        intro={business.servicesPage.intro}
      />

      <section className="py-20 lg:py-28 bg-ivory-light border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {detailed.map((service, index) => {
            const detail = service.detail;
            if (!detail) return null;
            const flipped = index % 2 === 1;

            return (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div
                  className={`lg:col-span-6 rounded-lg overflow-hidden border border-border-soft shadow-sm bg-forest-deep ${
                    flipped ? "order-1 lg:order-2" : ""
                  }`}
                >
                  <div className="relative h-[400px]">
                    <Photo
                      src={service.image}
                      alt={service.imageAlt}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <div
                  id={service.id}
                  className={`lg:col-span-6 space-y-4 scroll-mt-28 ${
                    flipped ? "order-2 lg:order-1" : ""
                  }`}
                >
                  <span className="font-label text-label-sm uppercase text-accent block">
                    {detail.eyebrow}
                  </span>
                  <h2 className="font-headline text-headline-lg text-forest-dark font-bold">
                    {detail.title}
                  </h2>
                  <p className="font-body text-body-md text-charcoal-muted leading-relaxed">
                    {detail.body}
                  </p>
                  <ul className="space-y-2 font-body text-body-sm text-forest-dark">
                    {detail.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Icon name="check" className="text-accent shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    {detail.enquireMessage ? (
                      <a
                        href={whatsappHref(detail.enquireMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-label text-label-lg text-accent hover:text-forest-dark uppercase transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {detail.enquireLabel}
                        <Icon name="arrow_forward" />
                      </a>
                    ) : (
                      <Link
                        href="/contact#enquiry-form"
                        className="inline-flex items-center gap-2 font-label text-label-lg text-accent hover:text-forest-dark uppercase transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {detail.enquireLabel}
                        <Icon name="arrow_forward" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-beige-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={business.packagesSection.eyebrow}
            title={business.packagesSection.title}
            intro={business.packagesSection.intro}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {business.packagesSection.items.map((item) => (
              <article
                key={item.id}
                className="p-8 rounded-lg bg-ivory-light border border-border-soft flex flex-col"
              >
                <p className="font-label text-label-sm uppercase text-accent">{item.guests}</p>
                <h3 className="font-headline text-headline-md text-forest-dark font-bold mt-3">
                  {item.name}
                </h3>
                <p className="font-headline text-headline-sm text-accent mt-2">{item.price}</p>
                <p className="font-body text-body-md text-charcoal-muted mt-4 leading-relaxed">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-2 font-body text-body-sm text-forest-dark flex-grow">
                  {item.includes.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Icon name="check" className="text-accent shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref(
                    fillTemplate(business.whatsappMessages.package, { package: item.name }),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-label text-label-lg text-accent hover:text-forest-dark uppercase transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.enquireLabel}
                  <Icon name="arrow_forward" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
