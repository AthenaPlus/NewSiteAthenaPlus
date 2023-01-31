// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-svgo', 'nuxt-headlessui', '@fullpage/nuxt-fullpage', 'nuxt-simple-sitemap',],
    css: ['animate.css'],

    runtimeConfig: {
      siteUrl: 'https://athenaplus.kz',
    },


})
