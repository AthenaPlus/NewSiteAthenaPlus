<script setup>
import {convertDate} from '~/assets/utils/index'
useHead({
  title: '{{ doc.title }}',
  meta: [
    { name: 'description', content: 'Это блог компании Athena Plus Digital. Здесь Вы можете узнать о всех новинках мира IT .' }
  ]
})
</script>
<template>
    <section class="text-gray-100 body-font">
        <ClientOnly>
        <ContentDoc :path="$route.path" v-slot="{ doc }">
            <div class="relative container mx-auto">
                <div class="absolute z-0 h-full w-full">
                    <img v-if="doc.img" :src="doc.img" :alt="doc.title" class="absolute z-0 h-full w-full object-cover" />
                    <img v-else src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_384,w_1740/v1663655906/CHEF%20BREAKFAST/Baner8_Left_sp2git.webp" class="absolute z-0 h-full w-full object-cover" />
                </div>
                <!-- <div class="z-5 absolute h-full w-full bg-gray-900 bg-opacity-10"></div> -->
                <div class="container px-10 mx-auto grid grid-cols-1 content-center h-[200px] sm:h-[300px] md:h-[510px]">
                    <h3 class="tracking-widest text-xl title-font font-medium text-gray-200 opacity-0 mb-1 uppercase z-10">
                        {{ doc.category }}
                    </h3>
                    <h1 class="title-blog z-10 opacity-0">{{ doc.title }}</h1>
                </div>
            </div>
            <div class="container px-5 py-14 mx-auto">
                <NuxtLink to="/blog" class="mr-16 flex  items-center gap-x-1 w-48 hover:text-pink-500">
                    <IconsBookopen class="w-6 h-6 mr-1"/>
                    All articles
                </NuxtLink>
                <ContentRenderer :value="doc" class="conent-descrip text-gray-100 mx-auto text-lg" />
                <p class="my-4 text-gray-400"><span>by, {{ doc.author }}, {{ convertDate(doc.date) }}</span></p>
                <NuxtLink to="/blog" class="mr-16 flex items-center gap-x-1 hover:text-pink-500">
                    <IconsBookopen class="w-6 h-6 mr-1"/>
                    All articles
                </NuxtLink>
            </div>
        </ContentDoc>
    </ClientOnly>
    </section>
</template>

<style>
.conent-descrip {
    max-width: 1000px;
}
.conent-descrip h3 {
    color: #ec4899;
    /* margin-top: 5.5rem; */
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: 500;
}
.conent-descrip h4 {
        margin-top: 1.25rem;
    margin-bottom: 0.5rem;
}
.conent-descrip p {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.conent-descrip img {
    border-radius: 0.25rem; /* 4px */
}
</style>