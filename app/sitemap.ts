import type { MetadataRoute } from "next";
import { business } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/gallery", "/contact", "/privacy", "/terms"];

  return paths.map((path) => ({
    url: `${business.siteUrl}${path}`,
  }));
}
