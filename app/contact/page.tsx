import type { Metadata } from "next";
import { business } from "@/site.config";
import { ContactPanel } from "@/components/ContactPanel";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: business.seo.pages.contact.title,
  description: business.seo.pages.contact.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={business.contactPage.eyebrow}
        title={business.contactPage.title}
        intro={business.contactPage.intro}
      />
      <section className="py-20 lg:py-28 bg-ivory-light border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <ContactPanel tone="contact" />
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm copy={business.forms.contact} tone="beige" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-beige-subtle">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            eyebrow={business.faqSection.eyebrow}
            title={business.faqSection.title}
            intro={business.faqSection.intro}
          />
          <div className="space-y-4">
            {business.faqSection.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-border-soft bg-ivory-light open:shadow-sm"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-headline text-headline-xs text-forest-dark font-bold flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="font-body text-accent text-headline-sm group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 font-body text-body-md text-charcoal-muted leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
