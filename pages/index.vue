<template>
  <full-page ref="fullpage" :options="options">
    <HomeHero class="snap-start w-full min-h-screen section" />
    <HomeAbout class="snap-start w-full min-h-screen section" />
    <!-- <HomeServices class="snap-start w-full min-h-screen section" /> -->
    <!-- <HomeAdvantage class="snap-start w-full min-h-screen section" /> -->
    <!-- <HomeServicesHero class="snap-start w-full min-h-screen section" /> -->
    <HomeProcessProjects class="snap-start w-full min-h-screen section" />
    <HomeOrderproject class="snap-start w-full min-h-screen section" />
  </full-page>
</template>

<script setup>
useHead({
    title: 'Athena Веб-проекты со стилем',
    meta: [
        { name: 'description', content: 'веб-проекты со стилем Мы создаём креативные веб-проекты для вашего бизнеса' }
    ],
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
          anchors: ['top', 'advantage', 'services', 'process', 'order'],
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