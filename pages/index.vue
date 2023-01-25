<template>
    <!-- <div class="snap-y snap-mandatory w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth"> -->
    <full-page ref="fullpage" :options="options">
        <HomeHero class="snap-start w-full min-h-screen section" />
        <HomeAdvantage class="snap-start w-full min-h-screen section" />
        <HomeServicesHero class="snap-start w-full min-h-screen section" />
        <HomeOrderproject class="snap-start w-full min-h-screen section" />
    </full-page>
    <!-- </div> -->
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
          navigation: 'true'
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