import Link from "next/link";
import { BlogPosts } from "@/components/posts";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div>
        <p className="uppercase text-xs tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          Software Engineering · AI Infrastructure · Technical Leadership
        </p>
        <h1 className="mt-4 mb-6 text-3xl md:text-4xl font-semibold tracking-tight title">
          {site.name}
        </h1>
        <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed">
          I'm a senior backend and AI engineer building scalable systems, production-grade
          infrastructure, and developer tooling. I write about pragmatic AI adoption, runtime
          performance, and the product taste that keeps teams shipping with conviction.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium transition hover:border-neutral-500 hover:dark:border-neutral-500"
          >
            Read the blog
          </Link>
          <a
            href={site.github}
            className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium transition hover:border-neutral-500 hover:dark:border-neutral-500"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium transition hover:border-neutral-500 hover:dark:border-neutral-500"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold tracking-tight mb-4">Latest writing</h2>
        <BlogPosts limit={3} />
      </div>
    </section>
  );
}
