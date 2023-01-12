import type { Frontmatter } from "@types";
import type { MarkdownInstance } from "astro";

export const getSortedPosts = (posts: MarkdownInstance<Frontmatter>[]) =>
  posts
    .filter(({ frontmatter }) => !frontmatter.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.frontmatter.datetime).getTime() / 1000) -
        Math.floor(new Date(a.frontmatter.datetime).getTime() / 1000)
    );
