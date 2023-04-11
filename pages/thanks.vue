<template>
    <section class="mainer-block flex min-h-screen relative bg-no-repeat bg-left-top bg-cover lg:bg-[url('/img/mask/bg_freme__athena.webp')] overflow-hidden">
        <div class="athena-mainer absolute hidden md:block top-0 left-0 bottom-0 bg-[#0B0B0B] w-[25%] z-5"></div>
        <div class="athena absolute right-0 bottom-0 bg-right  bg-contain bg-no-repeat lg:bg-[url('/img/mask/Athena.webp')] hidden md:block  md:w-[400px] md:h-[414px] lg:w-[500px] lg:h-[514px] xl:w-[650px] xl:h-[670px] 2xl:w-[800px] 2xl:h-[826px] z-30">
            <img src="/img/mask/Lauot3.webp" alt="" class="mask">
            <img src="/img/mask/Lauot4.webp" alt="" class="absolute inset-0">
        </div>
        <div class="thanks-mainer container absolute">
            <div class="thanks w-full lg:w-1/2 bg-[#0B0B0B] text-white min-h-screen">
                <div class="w-full h-full lg:max-w-3xl pr-0 xl:pr-10">
                    <div class="container px-5 py-24 mx-auto h-screen flex flex-col justify-center items-center">
                        <h1 class="text-white text-5xl md:text-8xl">Спасибо!</h1>
                        <h2 class="text-white text-xl md:text-3xl xl:text-4xl my-10">Ваше сообщение отправлено!</h2>
                        <NuxtLink to="/" class="btn">На главную страницу</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
useHead({
    title: 'Ваше сообщение отправлено!',
    meta: [
        { name: 'description', content: 'Ваше сообщение отправлено! Мы создаём креативные веб-проекты для вашего бизнеса' }
    ],
})
</script>

<style scoped>
@media (max-width: 1024px) {
    .mainer-block {
        background: none;
    }
    .athena-mainer {
        display: none;
    }
    .athena {
        display: none;
    }
    .thanks-mainer {
        position: static;
        margin: auto;
    }
    .thanks {
        margin: auto;
    }
}

</style>