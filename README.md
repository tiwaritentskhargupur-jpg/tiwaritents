# Tent House

A Next.js website for a tent-rental and event styling company. The look follows the Stitch screens: ivory pages, forest green, champagne gold, Cormorant Garamond headings, and PT Sans text.

All client-facing copy lives in one file.

## Edit the business

Open [`site.config.ts`](site.config.ts) and change:

- Business name, monogram, tagline, and city
- Phone, email, WhatsApp number, address, and hours
- Social links, map link, and map embed URL
- Services, packages, testimonials, gallery captions, and FAQ
- Button labels and the SEO title and description
- `siteUrl`, once you know the live domain

Pages and components read that file. You do not need to edit them to rename the business or rewrite a paragraph.

Gallery and section photos are files in `public/images`. They are placeholder photographs. Replace a file and keep the same name, or change the path in `site.config.ts`.

The browser icon is `app/icon.svg`. If you change the monogram in the config, update the letters in that icon too.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Check a production build before you deploy:

```bash
npm run build
```

## Deploy on Vercel

The Vercel CLI is not set up on this machine, so deploy from the Vercel website by importing the GitHub repository.

1. Push this project to GitHub (the repository name used for this site is `tent-house`).
2. Sign in at [vercel.com/new](https://vercel.com/new).
3. Choose **Import Git Repository** and select `tent-house`.
4. Leave the framework preset as **Next.js**. The root of the repository is the app. No environment variables are required.
5. Deploy.
6. When the site has a real domain, set `siteUrl` in `site.config.ts` to that address (for example `https://your-domain.com`) and deploy again. Sitemap, robots, and social preview links use that value.

Vercel will run `npm run build` for you. Later changes on the connected branch deploy automatically.
