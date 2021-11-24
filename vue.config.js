/*module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/index/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    subpage: "src/subpage/main.js",
  },
};
*/

require = require("esm")(module);
const { routes } = require("./src/router/routes.js");

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: true
    },
    sitemap: {
      outputDir: "public",
      baseURL: "https://chimboz.fr",
      routes
    }
  },
  transpileDependencies: ["vue-meta"],
  pwa: {
    name: "Chimboz",
    themeColor: "#f0009c",
    msTileColor: "#f0009c",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent"
  }
};
