import type { Frontmatter } from "@types";
import type { MarkdownInstance } from "astro";
import { slugifyAll } from "./slugify";

export const getPostsByTag = (
  posts: MarkdownInstance<Frontmatter>[],
  tag: string
) => posts.filter(post => slugifyAll(post.frontmatter.tags).includes(tag));
