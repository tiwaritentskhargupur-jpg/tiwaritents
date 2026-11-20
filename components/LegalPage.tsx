import { PageHero } from "./PageHero";

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={updated} />
      <section className="py-20 lg:py-28 bg-ivory-light">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-headline text-headline-md text-forest-dark font-bold mb-3">
                {section.heading}
              </h2>
              <p className="font-body text-body-md text-charcoal-muted leading-relaxed">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
