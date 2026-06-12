import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        That page doesn't exist. Head back to the homepage or explore the latest writing.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm"
        >
          Read the blog
        </Link>
      </div>
    </section>
  );
}
