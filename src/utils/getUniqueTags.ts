import type { Frontmatter } from "@types";
import type { MarkdownInstance } from "astro";
import { slugifyStr } from "./slugify";

export const getUniqueTags = (posts: MarkdownInstance<Frontmatter>[]) => {
  let tags: string[] = [];
  const filteredPosts = posts.filter(({ frontmatter }) => !frontmatter.draft);
  filteredPosts.forEach(post => {
    tags = [...tags, ...post.frontmatter.tags]
      .map(tag => slugifyStr(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return tags;
};
