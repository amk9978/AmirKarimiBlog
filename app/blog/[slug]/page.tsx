import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";
import { site } from "@/lib/site";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getAllPosts().find((item) => item.slug === params.slug);
  if (!post) return {};

  const canonical = post.canonicalUrl ?? `${site.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [site.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!getPostSlugs().includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);
  if (post.draft) notFound();

  const canonical = post.canonicalUrl ?? `${site.url}/blog/${post.slug}`;

  return (
    <section className="space-y-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            description: post.description,
            url: canonical,
            author: {
              "@type": "Person",
              name: site.author,
              url: site.url,
            },
          }),
        }}
      />
      <header className="space-y-3">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {formatDate(post.date)} · {post.readingTime}
        </p>
        <h1 className="title font-semibold text-3xl tracking-tighter">
          {post.title}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {post.description}
        </p>
        {post.originalUrl && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Originally published at{" "}
            <a
              className="underline"
              href={post.originalUrl}
              target="_blank"
              rel="noreferrer"
            >
              {post.originalUrl}
            </a>
            .
          </p>
        )}
      </header>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
