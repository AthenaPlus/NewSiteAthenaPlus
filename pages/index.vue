<template>
  <div ref="fullpage" :options="options">
    <HomeHero class="snap-start w-full section" />
    <HomeServicesMain class="snap-start px-5 sm:px-0 py-12 sm:py-14 md:py-16 lg:py-28 xl:py-36 w-full section" />
    <HomeAbout class="snap-start w-full px-5 sm:px-0  py-12 md:min-h-0 sm:py-14 md:py-16 lg:py-28 xl:py-36 section" />
    <HomeServices class="snap-start w-full px-5 sm:px-0  py-12 sm:py-14 md:py-16 lg:py-28 xl:py-36 section" />
    <HomePartners class="snap-start w-full px-5 sm:px-0  sm:pt-14 md:pt-16 lg:pt-28 xl:pt-36 section" />
    <HomeOrderproject class="snap-start w-full px-5 sm:px-0  py-12 sm:py-14 md:py-16 lg:py-28 xl:py-36 section" />
    <CookieBanner />
  </div>
</template>

<script setup>
useHead({
    title: 'Разработка IT-Решений Нового Формата | Алматы, Athena Plus Digital',
    meta: [
        { name: 'description', content: 'Креативные IT-Решения на основе глубокой аналитики рынка. ' }
    ],

    script: [
    // {
    //   src: 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js',
    //   body: true
    // },
    // {
    //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js',
    //   body: true
    // },

  ]
})
</script>

<script>
  export default {
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
          licenseKey: 'YOUR_KEY_HERE',
          navigation: 'true',
          scrollOverflow: true,
          scrollBar: false,
          anchors: ['top', 'services#1', 'about', 'services#2', 'partners', 'order'],
        },
      }
    },

    methods: {
      afterLoad() {
        console.log("Emitted 'after load' event.")
      },
    },
  }
</script>

<style>

</style>