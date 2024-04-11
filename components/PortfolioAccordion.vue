<template>
  <section class="text-white body-font">
    <div class="container px-5 py-[100px] mx-auto">
      <p class="font_Airborne w-full border-b pb-2">Другие проекты</p>
      <NuxtLink :to="item.toLink" v-for="(item, index) in portfolio" :key="index" class="portfolio-items grid grid-cols-2 py-[20px] border-b hover:text-[#FF66C4] cursor-pointer">
        <h2 class="font_Airborne text-[24px] md:text-[32px] lg:text-[50px]">{{ item.title }}</h2>
        <p class="font_Airborne text-[24px] md:text-[36px] lg:text-[60px] ml-auto">{{ item.year }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const portfolio = [
  { title: 'Dostyk Trans Terminal', year: '2021', toLink: '/portfolio/DTT' },
  { title: 'Midas Event', year: '2021', toLink: '/portfolio/MidasEvent' },
  { title: 'Wallet Kit', year: '2023', toLink: '/portfolio/WalletKit' },
  { title: 'Pixel Course', year: '2023', toLink: '/portfolio/PixelSchool' },
  { title: 'YAQ', year: '2021' },
  { title: 'Completto', year: '2023' },
  { title: 'Чек-маркет', year: '2021' }
]
</script>

<style scoped>
.portfolio-items {
  transition: all 0.3s;
}
</style>