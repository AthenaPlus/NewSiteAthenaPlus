<template>
  <full-page ref="fullpage" :options="options">
    <HomeHero class="snap-start w-full min-h-screen section" />
    <HomeAbout class="snap-start w-full min-h-screen section" />
    <HomeServices class="snap-start w-full min-h-screen section" />
    <!-- <HomeAdvantage class="snap-start w-full min-h-screen section" /> -->
    <!-- <HomeServicesHero class="snap-start w-full min-h-screen section" /> -->
    <HomeProcessProjects class="snap-start w-full min-h-screen section" />
    <HomeOrderproject class="snap-start w-full min-h-screen section" />
  </full-page>
</template>

<script setup>
useHead({
    title: 'Разработка IT-Решений Нового Формата | Алматы, Athena Plus Digital',
    meta: [
        { name: 'description', content: 'Креативные IT-Решения на основе глубокой аналитики рынка. ' }
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
          anchors: ['top', 'about', 'services', 'process', 'order'],
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