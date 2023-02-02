<template>
    <section class="relative">
        <video autoplay loop muted plays- inline class="absolute inset-0 w-full zindex-1">
            <source
                src="https://res.cloudinary.com/dfevgyt2k/video/upload/f_webm,g_center/v1675310690/video/video_athena_3frem_ukin8j.webm"
                type="video/webm">
        </video>
        <div class="container px-5 py-24 mx-auto h-screen flex flex-col justify-center items-center">
            <h1 class="text-white text-5xl  md:text-8xl">Спасибо!</h1>
            <h2 class="text-white text-xl md:text-5xl my-10">Ваше сообщение отправлено!</h2>
            <NuxtLink to="/" class="btn">На главную страницу</NuxtLink>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>