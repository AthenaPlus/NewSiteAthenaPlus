<template>
<header class="text-white body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <IconLogo class="w-10 h-10 stroke-pink-500"/>
      <h1 class="ml-3 text-34 uppercase">Athena <span class="text-gradient">plus</span></h1>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
</template>

<script setup>
import IconLogo from '~/assets/icons/logo.svg'

</script>

<style scoped>
.text-34 {
    font-size: 34px;
}
.text-gradient {
    background: -webkit-linear-gradient(#FCB040, #FF2BFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>