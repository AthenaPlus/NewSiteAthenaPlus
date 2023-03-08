<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 py-24">
            <div class="flex flex-wrap flex-col md:flex-row items-center justify-between">
                <h1 class="text-[66px] mr-auto">Блог</h1>
                <div class="flex flex-wrap gap-4 font_Airborne">
                    <!-- <button class="text-lg p-[15px] border-2 border-white rounded-full">все</button>
                    <button class="text-lg p-[15px] border-2 border-white rounded-full">новости</button>
                    <button class="text-lg p-[15px] border-2 border-white rounded-full">статьи</button>
                    <button class="text-lg p-[15px] border-2 border-white rounded-full">советы</button> -->
                </div>
            </div>
            <div class="mb-[85px]">
                <p class="max-w-5xl text-xl">
                    Читайте интересные новости из мира IT и дизайна вместе с Athena Plus. Мы регулярно постим статьи, которые помогут сделать ваши IT-продукты лучше.
                </p>
            </div>

            <!-- Контейнер контент Блога -->

            <div v-for="article in qc" :key="article._path" class="flex flex-wrap place-content-between gap-[34px] border-t border-white/70 pt-[50px] pt-6 mb-[60px]">
                <div class="max-w-[380px]">
                    <NuxtLink :to="article._path">
                        <img v-if="article.img" :src="article.img" :alt="article.title">
                        <img v-else class="w-full object-cover object-center" src="https://dummyimage.com/720x400" :alt="article.title" width="720" height="400">
                    </NuxtLink>
                </div>
                <div class="flex flex-col">
                    <h3 class="font_Airborne">{{ article.title }}</h3>
                    <p v-if="article.description" class="max-w-2xl">
                        {{ article.description }}
                    </p>
                    <p v-else class="max-w-2xl">
                        Здесь должно быть описание статьи в блоге! Если вы это видите значит сработал <span class="text-pink-500"> v-else </span>  и не сработал <span class="text-pink-500"> v-if="article.description"</span>
                    </p>
                    <div class="mt-auto">
                        <span v-if="article.date" class="">
                            {{ convertDate(article.date) }}
                        </span>
                        <span v-else class="">
                            Время будущего
                        </span>
                    </div>
                </div>
                <div class="">
                    <NuxtLink :to="article._path" class="">
                        <IconArrowright class="w-[40px]" />
                    </NuxtLink>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import IconArrowright from '~/assets/icons/arrow__right.svg'
import { convertDate } from '~/assets/utils/index'


useHead({
  title: 'My Blog',
  meta: [
    { name: 'description', content: 'Веб-Сайты UX/UI Айдентика Разработка и дизайн сайтов опережающих тренды Современный дизайн, инновационная технология, результативный маркетинг - все это в нашей веб-студии' }
  ],
})
const { query } = useRoute();
const { category } = query
// blog?category=Tips+from+the+chef
const qc = await queryContent('blog')
  .where({ category })
  .sort({ date: -1 })
  .find()

</script>

<style scoped>


</style> 