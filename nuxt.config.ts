// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "",
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
      ],
      style: [],
      script: [],
      noscript: [],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],


  googleFonts: {
    prefetch: true,
    preconnect: true,
    download: true,
    inject: true,
    families: {
      Roboto: true,
      "Plus+Jakarta+Sans": true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
});
