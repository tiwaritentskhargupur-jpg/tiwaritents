import { business } from "@/site.config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    image: `${business.siteUrl}${business.hero.image}`,
    telephone: business.phoneDisplay,
    email: business.email,
    url: business.siteUrl,
    priceRange: business.priceRange,
    openingHours: business.openingHoursSchema,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine,
      addressLocality: business.city,
      addressCountry: business.countryCode,
    },
    areaServed: business.city,
    sameAs: business.social.map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
