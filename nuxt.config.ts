
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo', '@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-svgo', 'nuxt-headlessui', '@fullpage/nuxt-fullpage', 'nuxt-simple-sitemap', '@nuxtjs/yandex-metrika' 
    {
      id: '92703087',
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    }
  ],

    css: ['animate.css'],

    apollo: {
      clients: {
        default: {
          httpEndpoint: 'https://cmsathenaplus.herokuapp.com/graphql'
        }
      },
    },

    runtimeConfig: {
      siteUrl: 'https://athenaplus.kz',
      public: {
        strapi: {
          url: process.env.STRAPI_URL,
          prefix: '/api',
          version: 'v4',
          cookie: {},
          cookieName: 'strapi_jwt'
        },
      },

    },



    nitro: {
      prerender: {
        crawlLinks: true,
        routes: [
          '/',
        ],
        
      },

    },


    build: {
      
    }

})


