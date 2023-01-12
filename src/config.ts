import type { SocialObjects } from "@types";

export const site = {
  website: "https://ansango.com/",
  author: "Anibal Santos",
  desc: "Blog about web development, programming, and other stuff.",
  title: "Ansango",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};
export const logoImage = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
export const socials: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ansango/anibalsantos",
    linkTitle: ` ${site.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/ansango/anibalsantos",
    linkTitle: `${site.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${site.title}`,
    active: false,
  },
];
