import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
