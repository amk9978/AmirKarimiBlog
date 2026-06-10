import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getPostSlugs } from "../../../lib/posts";
import { site } from "../../../lib/site";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((item) => item.slug === slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.canonicalUrl ?? url,
    },
    openGraph: {
      type: "article",
      url: `${site.url}${url}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [site.author],
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!getPostSlugs().includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);
  if (post.draft) notFound();

  return (
    <article className="post stack">
      <header className="stack">
        <p className="meta">{new Date(post.date).toLocaleDateString("en", { dateStyle: "long" })} · {post.readingTime}</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.description}</p>
        {post.originalUrl && (
          <p className="note">
            Originally published elsewhere. <a href={post.originalUrl}>View original</a>.
          </p>
        )}
      </header>
      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
