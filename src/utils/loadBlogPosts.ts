import { ComponentType } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  Component: ComponentType;
}

const modules = import.meta.glob<{
  default: ComponentType;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    readTime: string;
  };
}>("../content/blog/*.mdx", { eager: true });

export function loadBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, mod] of Object.entries(modules)) {
    const slug = path.split("/").pop()!.replace(".mdx", "");
    const fm = mod.frontmatter;
    posts.push({
      slug,
      title: fm.title,
      date: fm.date,
      excerpt: fm.excerpt,
      readTime: fm.readTime,
      Component: mod.default,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
