// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "@nuxt/ui"],


  pinia: {
    storesDirs: ['./stores/**',],
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },

  app: {
    pageTransition: { name: "blur", mode: "out-in" },
    layoutTransition: { name: "blur", mode: "out-in" },

    head: {
      title: "Quran",
      charset: "utf-8",
      htmlAttrs: {
        lang: "fa-IR",
        dir: "rtl",
      },
    },
  },

  compatibilityDate: "2024-10-05",
});