<template>
    <div class="scroll__y">
        <HomeHero class="scroll-my-0 snap-start min-h-screen"/>
        <HomeAdvantage class="scroll-my-0 snap-start min-h-screen"/>
        <!-- <HomeServicesHero class="scroll-my-0 snap-start min-h-screen" /> -->
        <!-- <HomeOrderproject class="scroll-my-0 snap-start min-h-screen"/> -->
    </div>
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

}
</script>

<style>
    .scroll__y {
        scroll-snap-type: y mandatory;
    }
</style>