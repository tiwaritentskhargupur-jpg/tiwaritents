import Link from "next/link";
import { business } from "@/site.config";
import { phoneHref, whatsappHref } from "@/lib/links";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { EnquiryForm } from "@/components/EnquiryForm";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Icon } from "@/components/Icon";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  const homeServices = business.services.filter((service) => service.showOnHome);
  const homeGallery = business.gallery.items.filter((item) => item.showOnHome);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-forest-deep"
      >
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
          <Photo
            src={business.hero.image}
            alt={business.hero.imageAlt}
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent opacity-85" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-light/40 bg-forest-dark/80 text-accent-light font-label text-label-sm uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
            {business.hero.eyebrow}
          </p>
          <h1 className="font-headline text-display-xl-mobile md:text-display-lg lg:text-display-xl text-ivory-light font-bold max-w-3xl leading-tight mb-6 text-balance">
            {business.hero.title}
          </h1>
          <p className="font-body text-body-lg text-ivory-light/90 max-w-2xl leading-relaxed mb-10 text-pretty">
            {business.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <ButtonLink
              href={whatsappHref(business.whatsappMessages.plan)}
              variant="gold"
              className="w-full sm:w-auto"
            >
              <Icon name="chat" />
              {business.cta.planEvent}
            </ButtonLink>
            <ButtonLink href="#portfolio" variant="ghost" className="w-full sm:w-auto">
              {business.cta.exploreWork}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-28 bg-ivory-light border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="font-label text-label-sm uppercase text-accent mb-3">
                {business.philosophy.eyebrow}
              </span>
              <h2 className="font-headline text-display-lg-mobile md:text-headline-lg lg:text-display-lg text-forest-dark font-bold leading-tight mb-6 text-balance">
                {business.philosophy.title}
              </h2>
              <div className="space-y-4 font-body text-body-md text-charcoal-muted leading-relaxed mb-8">
                {business.philosophy.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="pt-2 border-t border-border-soft flex items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  {business.philosophy.highlights.map((item, index) => (
                    <div key={item.title} className="flex items-center gap-6">
                      {index > 0 ? <span className="w-px h-8 bg-border-soft" /> : null}
                      <div>
                        <p className="font-headline text-headline-sm text-forest-dark font-bold">
                          {item.title}
                        </p>
                        <p className="font-body text-body-sm text-charcoal-muted">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 font-label text-label-lg text-forest-dark hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {business.cta.aboutUs}
                  <Icon name="arrow_forward" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-border-soft shadow-md bg-forest-deep group h-[450px]">
                <Photo
                  src={business.philosophy.image}
                  alt={business.philosophy.imageAlt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-subtle group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-forest-deep/95 p-6 text-ivory-light border-t border-border-dark">
                  <p className="font-headline text-headline-sm font-semibold">
                    {business.philosophy.captionTitle}
                  </p>
                  <p className="font-body text-body-sm text-ivory-light/90 mt-1">
                    {business.philosophy.captionBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-beige-subtle border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={business.servicesIntro.eyebrow}
            title={business.servicesIntro.title}
            intro={business.servicesIntro.intro}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeServices.map((service) => (
              <article
                key={service.id}
                className="group bg-ivory-light border border-border-soft rounded-lg overflow-hidden transition-all duration-300 ease-subtle hover:border-accent hover:shadow-md flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-forest-deep">
                  <Photo
                    src={service.image}
                    alt={service.imageAlt}
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-subtle group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline text-headline-xs text-forest-dark group-hover:text-accent transition-colors mb-2 font-bold">
                    {service.cardTitle}
                  </h3>
                  <p className="font-body text-body-sm text-charcoal-muted leading-relaxed flex-grow">
                    {service.cardSummary}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-lg bg-ivory-light border border-border-soft flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Icon name="verified" className="text-accent" />
              <p className="font-body text-body-md text-forest-dark font-bold">
                {business.serviceExtras.text}
              </p>
            </div>
            <Link
              href="/contact"
              className="font-label text-label-lg text-accent hover:text-forest-dark uppercase transition-colors inline-flex items-center gap-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {business.cta.enquireCustom}
              <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 lg:py-28 bg-ivory-light border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid
            variant="home"
            items={homeGallery}
            filters={business.gallery.homeFilters}
            header={
              <div>
                <span className="font-label text-label-sm uppercase text-accent mb-2 block">
                  {business.gallery.homeEyebrow}
                </span>
                <h2 className="font-headline text-display-lg-mobile md:text-headline-lg lg:text-display-lg text-forest-dark font-bold text-balance">
                  {business.gallery.homeTitle}
                </h2>
              </div>
            }
          />
          <p className="font-body text-body-sm text-charcoal-muted text-center mt-8 italic">
            {business.gallery.homeNote}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-forest-deep text-ivory-light border-b border-border-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={business.promises.eyebrow}
            title={business.promises.title}
            intro={business.promises.intro}
            tone="dark"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {business.promises.items.map((item) => (
              <article
                key={item.title}
                className="p-8 rounded-lg bg-forest-dark/80 border border-border-dark flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent-light flex items-center justify-center mb-6">
                  <Icon name={item.icon} />
                </div>
                <h3 className="font-headline text-headline-sm font-bold mb-2">{item.title}</h3>
                <p className="font-body text-body-md text-ivory-light/80 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory-light border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={business.steps.eyebrow}
            title={business.steps.title}
            intro={business.steps.intro}
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {business.steps.items.map((step) => (
              <li
                key={step.number}
                className="p-8 rounded-lg bg-beige-subtle border border-border-soft flex flex-col"
              >
                <span className="font-headline text-display-lg text-accent font-bold mb-4">
                  {step.number}
                </span>
                <h3 className="font-headline text-headline-xs text-forest-dark font-bold mb-2 text-balance">
                  {step.title}
                </h3>
                <p className="font-body text-body-sm text-charcoal-muted leading-relaxed text-pretty">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-forest-deep overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
          <Photo
            src={business.finalCta.image}
            alt={business.finalCta.imageAlt}
            sizes="100vw"
            className="object-cover object-center"
          />
          </div>
          <div className="absolute inset-0 bg-forest-deep/90" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <p className="inline-block px-4 py-1.5 rounded-full border border-accent-light/40 bg-forest-dark/80 text-accent-light font-label text-label-sm uppercase mb-6">
            {business.finalCta.eyebrow}
          </p>
          <h2 className="font-headline text-display-xl-mobile md:text-headline-lg lg:text-display-lg text-ivory-light font-bold mb-6 text-balance">
            {business.finalCta.title}
          </h2>
          <p className="font-body text-body-lg text-ivory-light/90 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            {business.finalCta.body}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href={whatsappHref(business.whatsappMessages.quote)}
              variant="gold"
              className="w-full sm:w-auto"
            >
              <Icon name="chat" />
              {business.cta.enquireWhatsapp}
            </ButtonLink>
            <ButtonLink href={phoneHref()} variant="ghost" className="w-full sm:w-auto">
              <Icon name="call" />
              {business.cta.callNow}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-28 bg-beige-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={business.homeContact.eyebrow}
            title={business.homeContact.title}
            intro={business.homeContact.intro}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <ContactPanel tone="home" />
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm copy={business.forms.home} tone="ivory" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
