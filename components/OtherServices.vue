<template>
  <section>
    <div>
      <NuxtLink :to="item.toLink" v-for="(item, index) in otherServices" :key="index" class="services-items cursor-pointer">
        <p class="font_Airborne text-[20px] md:text-4xl lg:text-[50px] text-center py-4 border-y">{{ item.title }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const otherServices = [
  { title: 'Одностраничный сайт', toLink: '/services/OnepageWebsite'  },
  { title: 'Корпоративный сайт', toLink: '/services/CorporateWebsite'  },
  { title: 'Интернет магазин', toLink: '/services/OnlineStore'  },
  { title: 'Сайт визитка', toLink: '/services/WebApp'  }
]
</script>

<style scoped>
.services-items p:hover {
  background: linear-gradient(90.00deg, rgb(253, 156, 94),rgb(255, 59, 233) 100%) !important;
}
.services-items {
  transition: all 0.5s;
}
</style>