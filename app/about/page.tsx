import type { Metadata } from "next";
import { business } from "@/site.config";
import { whatsappHref } from "@/lib/links";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: business.seo.pages.about.title,
  description: business.seo.pages.about.description,
};

export default function AboutPage() {
  const page = business.aboutPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} align="left" />

      <section className="py-20 lg:py-28 bg-ivory-light border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-label text-label-sm uppercase text-accent block">
                {page.storyEyebrow}
              </span>
              <h2 className="font-headline text-display-lg-mobile md:text-headline-lg lg:text-display-lg text-forest-dark font-bold leading-tight text-balance">
                {page.storyTitle}
              </h2>
              {page.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body text-body-md text-charcoal-muted leading-relaxed text-pretty"
                >
                  {paragraph}
                </p>
              ))}
              <div className="pt-6 border-t border-border-soft grid grid-cols-2 gap-6">
                {page.highlights.map((item) => (
                  <div key={item.title}>
                    <p className="font-headline text-headline-sm text-forest-dark font-bold">
                      {item.title}
                    </p>
                    <p className="font-body text-body-sm text-charcoal-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[460px] rounded-lg overflow-hidden border border-border-soft shadow-md bg-forest-deep">
                <Photo
                  src={page.image}
                  alt={page.imageAlt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-beige-subtle border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={page.pillarsEyebrow}
            title={page.pillarsTitle}
            intro={page.pillarsIntro}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="p-8 rounded-lg bg-ivory-light border border-border-soft flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-forest-dark text-accent-light flex items-center justify-center mb-6">
                  <Icon name={pillar.icon} />
                </div>
                <h3 className="font-headline text-headline-xs text-forest-dark font-bold mb-2">
                  {pillar.title}
                </h3>
                <p className="font-body text-body-sm text-charcoal-muted leading-relaxed">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory-light border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={business.testimonialsSection.eyebrow}
            title={business.testimonialsSection.title}
            intro={business.testimonialsSection.intro}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {business.testimonialsSection.items.map((item) => (
              <figure
                key={item.name}
                className="p-8 rounded-lg bg-beige-subtle border border-border-soft border-l-4 border-l-accent"
              >
                <blockquote className="font-headline text-headline-sm italic text-forest-dark leading-snug">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-body text-body-md font-bold text-forest-dark">{item.name}</p>
                  <p className="font-body text-body-sm text-charcoal-muted">{item.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-dark text-ivory-light">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-headline text-headline-md font-bold">{page.ctaTitle}</h2>
            <p className="font-body text-body-md text-ivory-light/80 mt-1">{page.ctaBody}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <ButtonLink
              href={whatsappHref(business.whatsappMessages.about)}
              variant="gold"
              className="w-full sm:w-auto px-6 py-3.5"
            >
              <Icon name="chat" />
              {business.cta.whatsappUs}
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost" className="w-full sm:w-auto px-6 py-3.5">
              {business.cta.sendEnquiry}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
