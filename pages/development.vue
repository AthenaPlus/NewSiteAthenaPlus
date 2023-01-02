<script setup>
useHead({
  title: 'Страница в разработке',
  meta: [
    { name: 'description', content: 'СТРАНИЦА В РАЗРАБОТКЕ Скоро тут будет много интересного' }
  ],
})
</script>

<template>
  <section class="bg-black pt-10">
    <div class="antialiased  text-white grid min-h-screen place-content-top overflow-hidden bg-[url('/img/bg_development.png')] bg-no-repeat bg-center bg-cover md:bg-auto">
      <div class="max-w-520px text-center z-10 mt-[150px]">
        <h1 class="text-4xl md:text-7xl lg:text-[100px] lg:leading-[115px] font-normal">страница</h1>
        <h2 class="font_Airborne text-3xl md:text-5xl lg:text-[69px] mb-[50px]"> в разработке</h2>
        <p class="text-xl md:text-[26px]">Скоро тут будет много интересного</p>
        <div class="w-full flex items-center justify-center mt-[50px]">
          <NuxtLink to="/" class="btn-primary hover:btn--shadow uppercase">назад на главную</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

</script>


<style>

</style>