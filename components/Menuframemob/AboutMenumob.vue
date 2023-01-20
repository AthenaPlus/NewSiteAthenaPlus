<template>
    <section class="text-white body-font overflow-x-hidden transition ease-in-out duration-500">
        <div class="container px-4 py-3 mx-auto">
            <div class="flex flex-wrap justify-between border-b-2 border-white pb-[10px] w-full">
                <h2 class="text-[32px] font_Airborne uppercase">О Компании</h2>
                <button @click="clickAboutmob"  class="text-white">
                    <XMarkIcon class="h-6 w-6 text-white"/>
                </button>
            </div>
            <p class="text-white my-5">Узнайте подробнее о нашей структуре и методах работы</p>

                <div class="flex flex-col  overflow-y-auto  max-h-screen pb-[150px]">
                    <div class="w-full mb-20">
                        <div class="flex flexp-row  gap-[18px] mb-[22px]">
                            <div class="w-full min-w-[130px]">
                                <img src="/img/About_photo1.png" alt="" class="w-full lg:w-[350px] object-cover">
                            </div>
                            <div class="w-full">
                                <h3 class="text-2xl">Всё о Нас</h3>
                                <div class="border-b-2 w-full my-[10px]"></div>
                                <p class="text-xs font-normal pb-4">История становления студии, миссия, методы работы и
                                    многое другое.</p>
                            </div>
                        </div>
                        <NuxtLink to="/about" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg py-[10px] inline-flex items-center justify-center  w-full transition duration-700 ease-in-out">
                                    Открыть
                        </NuxtLink>
                    </div>
                    <div class="w-full mb-20">
                        <div class="flex flex-row  gap-[18px] mb-[22px]">
                            <div class="w-full min-w-[130px]">
                                <img src="/img/About_photo2.png" alt="" class="w-full lg:w-[350px] object-cover">
                            </div>
                            <div class="w-full">
                                <h3 class="text-2xl">Карьера</h3>
                                <div class="border-b-2 w-full my-[10px]"></div>
                                <p class="text-xs font-normal pb-4">Постройте свою карьеру в лучшей казахстанской
                                    веб-студии</p>
                            </div>
                        </div>
                        <NuxtLink to="/vacancy" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg px-[20px] py-[10px] inline-flex items-center justify-center w-full transition duration-700 ease-in-out">
                                    Открыть
                        </NuxtLink>
                    </div>
                    <div class="w-full mb-20">
                        <div class="flex flex-row  gap-[18px] mb-[22px]">
                            <div class="w-full min-w-[130px]">
                                <img src="/img/About_photo3.png" alt="" class="w-full lg:w-[350px] object-cover">
                            </div>
                            <div class="w-full">
                                <h3 class="text-2xl">Рефералы</h3>
                                <div class="border-b-2 w-full my-[10px]"></div>
                                <p class="text-xs font-normal pb-4">Приводите клиентов и получайте 10% от сделки!</p>
                            </div>
                        </div>
                        <NuxtLink to="/referral" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg px-[20px] py-[10px] inline-flex items-center justify-center w-full transition duration-700 ease-in-out">
                                    Открыть
                                </NuxtLink>
                    </div>
                    <div class="w-full mb-20">
                        <div class="flex flex-row  gap-[18px] mb-[22px]">
                            <div class="w-full min-w-[130px]">
                                <img src="/img/About_photo4.png" alt="" class="w-full lg:w-[350px] object-cover">
                            </div>
                            <div class="w-full">
                                <h3 class="text-2xl">Блог</h3>
                                <div class="border-b-2 w-full my-[10px]"></div>
                                <p class="text-xs font-normal pb-4">Читайте полезные статьи о веб-индустрии на нашей
                                    платформе.</p>
                            </div>
                        </div>
                        <NuxtLink to="/development" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg px-[20px] py-[10px] inline-flex items-center justify-center w-full transition duration-700 ease-in-out">
                                    Открыть
                                </NuxtLink>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/solid'
export default {
    components: { XMarkIcon },

    methods: {
        addToggle() {
            this.$emit('addToggle')
        },
        clickAboutmob() {
            this.$emit('clickAboutmob')
        }
    }
}
</script>

<style scoped>
.title {
    font-family: 'Airborne';
font-style: normal;
font-weight: 400;
font-size: 54px;
line-height: 77%;
/* or 42px */


color: #FFFFFF;
}

.bg--btn:hover {
      background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
      color: #fff;
    }
</style>