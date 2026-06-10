import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import { site } from "../lib/site";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="stack hero">
      <p className="eyebrow">Software engineering · AI · Infrastructure · Startups</p>
      <h1>{site.name}</h1>
      <p className="lead">
        I write about backend engineering, AI infrastructure, developer tools, systems,
        startup execution, and the trade-offs behind technical taste.
      </p>

      <div className="actions">
        <Link className="button" href="/blog">Read the blog</Link>
        <a className="button secondary" href={site.github}>GitHub</a>
      </div>

      <section className="stack">
        <h2>Latest writing</h2>
        <div className="post-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              <p className="meta">{new Date(post.date).toLocaleDateString("en", { dateStyle: "medium" })} · {post.readingTime}</p>
              <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
