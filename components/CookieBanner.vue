<template>
    <div class="cookie-banner z-50 flex justify-between fixed left-0 right-0 bottom-0 px-5 xl:px-24 py-5 text-white" v-if="!accepted">
      <p class="text-xs sm:text-sm 2xl:text-base lg:w-1/2 2xl:w-1/3 mr-5">©2022 Athena Plus. Этот сайт использует cookies чтобы убедиться что вы получите лучший опыт. <NuxtLink to="/privacy" class="uppercase underline">Политика конфиденциальности</NuxtLink></p>
      <div class="flex items-center">
        <button @click="accept" class="border border-white text-sm sm:text-base px-3 sm:px-12 py-1 mr-5">Принять</button>
        <button @click="dismiss" class="text-xl sm:text-2xl">&#9932;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accepted: false,
      };
    },
    methods: {
      accept() {
        this.accepted = true;
        localStorage.setItem("cookieAccepted", true);
      },
      dismiss() {
        this.accepted = true;
    },
    },
    mounted() {
      if (localStorage.getItem("cookieAccepted")) {
        this.accepted = true;
      }
    },
  };
  </script>
  
  <style scoped>
  .cookie-banner {
    background: rgba(34, 34, 34, 0.9);
  }
  </style>