<template>
  <div class="relative">
    <NuxtLayout>
      <NuxtPage :transition="false" />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'My App',
  htmlAttrs: {
      lang: 'ru',
    },
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  link: [
  {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap',
      crossorigin: ''
    }
  ],
  script: [
    {
      src: '/js/main.js',
      body: true
    },
    {
      src: '/js/animeTextScroll.js',
      body: true
    },
  ],

})

// const nuxtApp = useNuxtApp()
//   nuxtApp.hook("page:finish", () => {
//      window.scrollTo(0, 0)
//   })
</script>
