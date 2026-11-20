import type { Metadata } from "next";
import { Cormorant_Garamond, PT_Sans } from "next/font/google";
import { business } from "@/site.config";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: business.seo.title,
    template: "%s",
  },
  description: business.seo.description,
  applicationName: business.name,
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    url: business.siteUrl,
    siteName: business.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: business.hero.image, alt: business.hero.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: business.seo.title,
    description: business.seo.description,
    images: [business.hero.image],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ptSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ivory-light text-charcoal font-body antialiased selection:bg-accent-light selection:text-forest-deep">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ivory-light focus:px-4 focus:py-2 focus:text-forest-dark focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {business.cta.skipToContent}
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
