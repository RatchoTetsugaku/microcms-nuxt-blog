import axios from "axios";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "microcms-nuxt-blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    async routes() {
      const pages = await axios
        .get(
          "https://sparkling_water_test01.microcms.io/api/v1/blog?limit=100",
          {
            headers: { "X-API-KEY": "0b74e5c9-9a5c-4ad6-a56b-b350d5baa7a7" }
          }
        )
        .then(res =>
          res.data.contents.map(content => ({
            route: `/${content.id}`,
            payload: content
          }))
        );
      return pages;
    }
  }
};
