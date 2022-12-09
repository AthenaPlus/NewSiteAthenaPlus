<template>
    <section class="text-gray-600 body-font relative min-h-screen bg-[url('/img/bg_frame4.jpg')]">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="title mt-16">Есть проект?</h1>
                <div class="flex items-center justify-end gap-8 mr-32">
                    <IconArrow/>
                    <h2 class="subtitle">Оставте заявку</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconArrow from '~/assets/icons/arrow.svg'

</script>

<style scoped>
.subtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 113px;
    text-align: right;

    color: #FFFFFF;

}
</style>