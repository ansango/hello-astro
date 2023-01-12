import { slug as slugger } from "github-slugger";
import type { Frontmatter } from "@types";

export const slugifyStr = (str: string) => slugger(str);

export const slugify = (frontmatter: Frontmatter) =>
  frontmatter.slug ? slugger(frontmatter.slug) : slugger(frontmatter.title);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));