import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Home">
        {site.shortName}
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/blog">Blog</Link>
        <a href="/rss.xml">RSS</a>
      </nav>
    </header>
  );
}
