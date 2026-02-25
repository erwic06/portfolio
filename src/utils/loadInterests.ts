import { ComponentType } from "react";

export interface Interest {
  slug: string;
  title: string;
  description: string;
  order: number;
  Component: ComponentType;
}

const modules = import.meta.glob<{
  default: ComponentType;
  frontmatter: {
    title: string;
    description: string;
    order: number;
  };
}>("../content/interests/*.mdx", { eager: true });

export function loadInterests(): Interest[] {
  const interests: Interest[] = [];

  for (const [path, mod] of Object.entries(modules)) {
    const slug = path.split("/").pop()!.replace(".mdx", "");
    const fm = mod.frontmatter;
    interests.push({
      slug,
      title: fm.title,
      description: fm.description,
      order: fm.order,
      Component: mod.default,
    });
  }

  return interests.sort((a, b) => a.order - b.order);
}
