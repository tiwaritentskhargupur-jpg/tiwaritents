import type { Metadata } from "next";
import { business } from "@/site.config";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: business.seo.pages.terms.title,
  description: business.seo.pages.terms.description,
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow={business.terms.eyebrow}
      title={business.terms.title}
      updated={business.terms.updated}
      sections={business.terms.sections}
    />
  );
}
