import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPosts({ limit }: { limit?: number } = {}) {
  const published = getAllPosts().filter((post) => !post.draft);
  const posts = typeof limit === "number" ? published.slice(0, limit) : published;

  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-6"
          href={`/blog/${post.slug}`}
        >
          <div className="flex flex-col md:flex-row md:items-baseline md:space-x-3">
            <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              {formatDate(post.date)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
              {post.title}
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            {post.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
