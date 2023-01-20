<template>
    <section class="text-white body-font overflow-hidden bg-[url('/img/bg_referral.jpg')] bg-no-repeat bg-center bg-cover relative z-[5]">
        <div class="absolute bg-[url('/img/bg_referral_mask.png')] inset-0 -z"></div>
        <div class="container px-5 py-24 mx-auto grid min-h-screen place-content-center ">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-6xl lg:text-[66px] animate__animated animate__zoomIn animate__delay-1s">Стань партнером новой веб-студии </h1>
                </div>
                <div class="w-full md:w-1/2 pl-0 md:pl-10">
                    <p class="text-[26px] mb-4 animate__animated animate__zoomIn animate__delay-2s">
                        Приведи клиента и получи до 10% от суммы договора. Без дополнительных комиссий и подводных камней.
                    </p>
                    <button class="btn-primary hover:btn--shadow uppercase">Подать заявку</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

.-z {
    z-index: -1;
}
</style>