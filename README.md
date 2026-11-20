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

## Deploy on GitHub Pages

The site is a static export (`output: "export"` in `next.config.ts`). A GitHub Actions workflow
(`.github/workflows/deploy.yml`) builds it and publishes the `out/` folder on every push to `main`.

One-time setup:

1. In the repo, open **Settings -> Pages** and set **Source** to **GitHub Actions**.
2. Under **Custom domain**, enter the domain (for example `www.example.com`) and save.
   GitHub then creates or expects a `CNAME` file; keep the domain in **Settings -> Pages** as the source of truth.
3. At the domain registrar add DNS records:
   - `www` -> CNAME to `<github-username>.github.io`
   - apex domain -> A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. When the certificate is ready, tick **Enforce HTTPS**.
5. Set `siteUrl` in `site.config.ts` to the final address (for example `https://www.example.com`) and push again.
   The sitemap, robots file and social preview links use that value.

Because the site is served from the domain root, no `basePath` is needed. If you ever serve it from
`<user>.github.io/<repo>` instead, add `basePath: "/<repo>"` to `next.config.ts`.

Preview the exact output locally:

```bash
npm run build
npx serve out
```
