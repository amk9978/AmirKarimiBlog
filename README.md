# AMK Personal Site

A minimal personal website and blog built with Next.js, local MDX posts, RSS, sitemap, and Vercel-friendly defaults.

## Stack

- Next.js App Router
- Local `.mdx` posts in `content/posts`
- RSS route at `/rss.xml`
- Sitemap at `/sitemap.xml`
- Vercel deployment-ready

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit identity

Update:

```text
lib/site.ts
```

Most important field before production:

```ts
url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
```

On Vercel, set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Add a post

Create a new file:

```text
content/posts/my-post-slug.mdx
```

Use this frontmatter:

```mdx
---
title: "Post title"
description: "Short SEO/social summary."
date: "2026-06-11"
tags: ["software", "ai"]
draft: false
---

Your post here.
```

## Import your Medium article

Use the draft template:

```text
content/posts/imported-medium-article-template.mdx
```

Recommended flow:

1. Copy the Medium article into Markdown/MDX.
2. Preserve the original publish date in `date`.
3. Add the original Medium URL in `originalUrl`.
4. Publish it on this site.
5. Edit the Medium story and set the canonical link to the new page on this site.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the GitHub repo into Vercel.
3. Set the environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Deploy.


## Import paths

This starter intentionally uses relative imports instead of `@/` aliases so it works cleanly with both Webpack and Turbopack.
