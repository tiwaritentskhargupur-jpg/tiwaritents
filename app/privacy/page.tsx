import type { Metadata } from "next";
import { business } from "@/site.config";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: business.seo.pages.privacy.title,
  description: business.seo.pages.privacy.description,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow={business.privacy.eyebrow}
      title={business.privacy.title}
      updated={business.privacy.updated}
      sections={business.privacy.sections}
    />
  );
}
