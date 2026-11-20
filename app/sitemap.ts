import type { MetadataRoute } from "next";
import { business } from "@/site.config";

export const dynamic = "force-static";

// The site is exported with trailing slashes (/about/), so list those exact
// URLs. Listing /about would make Search Console report a redirect.
const base = business.siteUrl.replace(/\/+$/, "");
const paths = ["/", "/about/", "/services/", "/gallery/", "/contact/", "/privacy/", "/terms/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/privacy/" || path === "/terms/" ? 0.3 : 0.8,
  }));
}
