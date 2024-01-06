/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  siteUrl: dev ? "http://localhost:3000" : "https://penziontrutnov.cz",
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://www.penziontrutnov.cz/cs",
      hreflang: "cs",
    },
    {
      href: "https://www.penziontrutnov.cz/en",
      hreflang: "en",
    },
  ],
};
