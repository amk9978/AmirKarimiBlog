# Amir Karimi — Personal Site & Blog

A fast, minimal Next.js site that serves as the canonical home for Amir Karimi's writing. Posts live in the repo as MDX files, publish to `/blog`, and feed the RSS/sitemap routes for syndication.

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000. Run a production check with:

```bash
npm run build
```

## Configuration

Set the public site URL in your environment:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

For local work this defaults to `http://localhost:3000`, and `.env.example` contains the baseline value.

## Writing Workflow

### Add a New Post

1. Create `content/posts/my-new-post.mdx`.
2. Add frontmatter:

   ```mdx
   ---
   title: "Post title"
   description: "Short SEO summary."
   date: "2024-06-01"
   tags: ["software", "ai"]
   draft: false
   originalUrl: "https://external-url.com/article" # optional
   ---
   
   Your post content here.
   ```

3. Set `draft: true` to keep it out of `/blog` and the RSS feed. Change to `false` when you publish.

Reading time is calculated automatically and appears in the list + post header.

### Cross-Posting to Medium/Substack

1. Publish on this site first so it becomes the source of truth.
2. Use this site's URL as the canonical link when importing or republishing elsewhere.
3. Copy the article into Medium/Substack manually (or use their import tool) and point readers back here.

## Project Layout

- `app/` — routes, metadata, RSS/sitemap/robots
- `components/` — shared UI (e.g. `Header`)
- `content/posts/` — MDX posts with frontmatter
- `lib/` — post loader and site metadata helpers

Imports use the `@/` alias defined in `tsconfig.json`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Create a new Vercel project from the repo.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` with your production domain.
4. Trigger a deploy. Vercel will run `npm install` and `npm run build` automatically.

Once deployed, `/rss.xml`, `/sitemap.xml`, and `/robots.txt` stay in sync with your published posts.
