import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and notes by Amir Mohammad Karimi.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="stack">
      <h1>Blog</h1>
      <p className="lead">Essays, engineering notes, and startup thinking.</p>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <p className="meta">{new Date(post.date).toLocaleDateString("en", { dateStyle: "medium" })} · {post.readingTime}</p>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.description}</p>
            {post.tags.length > 0 && <p className="tags">{post.tags.map((tag) => `#${tag}`).join(" ")}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
