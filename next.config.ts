import type { NextConfig } from "next";

// TEMPORARY: lets the site work at <user>.github.io/tiwaritents/ before the custom
// domain is connected. REMOVE this line (set to "") once the custom domain is live.
const BASE_PATH = "/tiwaritents";

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  // Static export for GitHub Pages: `next build` writes plain files to ./out.
  output: "export",
  // Pages has no image optimizer, so serve the files in public/images as-is.
  images: { unoptimized: true },
  // /about/ -> about/index.html, so direct links and refreshes work on Pages.
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
