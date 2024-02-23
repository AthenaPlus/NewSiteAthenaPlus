
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo', '@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-svgo', 'nuxt-headlessui', '@fullpage/nuxt-fullpage'],

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
    },

    head: {
      script: [
        {
          hid: 'yandex-metrika',
          innerHTML: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
            ym(90029747, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `,
          type: 'text/javascript',
          charset: 'utf-8',
        },
      ],
      noscript: [
        {
          hid: 'yandex-metrika-noscript',
          innerHTML: `
            <div><img src="https://mc.yandex.ru/watch/90029747" style="position:absolute; left:-9999px;" alt="" /></div>
          `,
        },
      ],
    }
})


