
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo', '@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-svgo', 'nuxt-headlessui', '@fullpage/nuxt-fullpage', '@nuxtjs/sitemap'],

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

    plugins: [
      { src: '@/plugins/aos.js', mode: 'client' }
    ],


    nitro: {
      prerender: {
        crawlLinks: true,
        routes: [
          '/',
          'sitemap.xml'
        ],
        
      },

    },

    site: {
      url: 'https://athenaplus.kz/',
    },

    build: {
      
    },
    buildModules: [
      '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
      config: {
        theme: {
          extend: {
            screens: {
              'xs': '400px'
            }
          }
        }
      }
    }

})


