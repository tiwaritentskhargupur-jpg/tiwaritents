import type { Metadata } from "next";
import { business } from "@/site.config";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: business.seo.pages.gallery.title,
  description: business.seo.pages.gallery.description,
};

export default function GalleryPage() {
  const items = business.gallery.items.filter((item) => item.showOnPage);

  return (
    <>
      <PageHero
        eyebrow={business.gallery.pageEyebrow}
        title={business.gallery.pageTitle}
        intro={business.gallery.pageIntro}
      />
      <section className="py-20 lg:py-28 bg-ivory-light">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid
            variant="page"
            items={items}
            filters={business.gallery.pageFilters}
          />
          <p className="font-body text-body-sm text-charcoal-muted text-center mt-12 italic">
            {business.gallery.pageNote}
          </p>
        </div>
      </section>
    </>
  );
}
