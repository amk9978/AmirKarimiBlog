import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  draft: boolean;
  originalUrl?: string;
  canonicalUrl?: string;
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function normalizeTags(tags: unknown): string[] {
  if (Array.isArray(tags)) return tags.map(String);
  if (typeof tags === "string") return tags.split(",").map((tag) => tag.trim()).filter(Boolean);
  return [];
}

function assertString(value: unknown, field: string, filename: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing required frontmatter field "${field}" in ${filename}`);
  }
  return value;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const filename = `${slug}.mdx`;
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: assertString(data.title, "title", filename),
    description: assertString(data.description, "description", filename),
    date: assertString(data.date, "date", filename),
    updated: typeof data.updated === "string" ? data.updated : undefined,
    tags: normalizeTags(data.tags),
    draft: Boolean(data.draft),
    originalUrl: typeof data.originalUrl === "string" ? data.originalUrl : undefined,
    canonicalUrl: typeof data.canonicalUrl === "string" ? data.canonicalUrl : undefined,
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllPosts({ includeDrafts = false } = {}): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map(({ content: _content, ...meta }) => meta);
}
