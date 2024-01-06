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
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
