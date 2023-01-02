<script setup>
useHead({
    title: '404 Error - Page Not Found ',
    meta: [
        { name: 'description', content: 'A great 404 page can be a smart way to show off your brand’s personality.' }
    ],
})
</script>

<template>
    <section class="bg-black bg-[url('/img/bg_development.png')] bg-no-repeat bg-center">
        <div
            class="antialiased  text-white grid min-h-screen place-content-center overflow-hidden ">
            <div class="fixed left-0 right-0 z-10"></div>
            <div class="max-w-520px text-center z-20 -mt-[180px]">
                <h1 class="text-8xl sm:text-10xl font-medium mb-8">404</h1>
                <p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">Page - "{{ $route.path }}"
                    not found </p>
                <div class="w-full flex items-center justify-center">
                    <NuxtLink to="/" class="btn-primary uppercase">назад на главную</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>


<style>

</style>