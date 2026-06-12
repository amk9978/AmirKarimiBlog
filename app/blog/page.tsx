import type { Metadata } from "next";
import { BlogPosts } from "@/components/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and notes by Amir Mohammad Karimi.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `${site.name} — Blog`,
    description: "Writing on software engineering, AI infrastructure, and systems design.",
    url: `${site.url}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Blog</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Essays on backend systems, AI tooling, infrastructure, and the practicality behind technical taste.
        </p>
      </div>
      <BlogPosts />
    </section>
  );
}
