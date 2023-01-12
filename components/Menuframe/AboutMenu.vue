<template>
    <section class="text-white body-font overflow-x-hidden transition ease-in-out duration-500">
        <div class="container px-4 px-9 py-10 mx-auto">
            <div class="border-b-2 border-white pb-[30px] w-full">
                <h2 class="title uppercase">О компании</h2>
            </div>
            <p class="text-white mt-5">Узнайте подробнее о нашей структуре и методах работы</p>

                <div class="flex flex-col lg:flex-row lg:flex-wrap -mx-12 overflow-y-auto  max-h-screen pb-[150px] p-[22px] 2xl:p-0">
                    <div class="p-6 2xl:p-12 w-full xl:w-1/2">
                        <div class="flex flexp-row  gap-[18px]">
                            <div class="w-full md:min-w-[150px]">
                                <img src="/img/About_photo1.png" alt="" class="w-full xl:w-[200px] 2xl:w-[350px] object-cover">
                            </div>
                            <div class="w-full lg:min-w-[200px]">
                                <h3 class="text-2xl">Всё о Нас</h3>
                                <div class="border-b-2 w-full mt-[25px] mb-[15px]"></div>
                                <p class="text-base font-light pb-4">История становления студии, миссия, методы работы и
                                    многое другое.</p>
                                <NuxtLink to="/about" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg px-[20px] py-[10px] w-full transition duration-700 ease-in-out">
                                    Открыть
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 2xl:p-12 w-full xl:w-1/2">
                        <div class="flex flex-row  gap-[18px]">
                            <div class="w-full md:min-w-[150px]">
                                <img src="/img/About_photo2.png" alt="" class="w-full xl:w-[200px]  2xl:w-[350px] object-cover">
                            </div>
                            <div class="w-full lg:min-w-[200px]">
                                <h3 class="text-2xl">Карьера</h3>
                                <div class="border-b-2 w-full mt-[25px] mb-[15px]"></div>
                                <p class="text-base font-light pb-4">Постройте свою карьеру лучшей казахстанской
                                    веб-студии!</p>
                                <NuxtLink to="/vacancy" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg px-[20px] py-[10px] w-full transition duration-700 ease-in-out">
                                    Открыть
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 2xl:p-12 w-full xl:w-1/2">
                        <div class="flex flex-row  gap-[18px]">
                            <div class="w-full md:min-w-[150px]">
                                <img src="/img/About_photo3.png" alt="" class="w-full xl:w-[200px]  2xl:w-[350px]  object-cover">
                            </div>
                            <div class="w-full lg:min-w-[200px]">
                                <h3 class="text-2xl">Реферал</h3>
                                <div class="border-b-2 w-full mt-[25px] mb-[15px]"></div>
                                <p class="text-base font-light pb-4">Приводите клиентов и получайте 10% от сделки!</p>
                                <NuxtLink to="/referral" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg px-[20px] py-[10px] w-full transition duration-700 ease-in-out">
                                    Открыть
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 2xl:p-12 w-full xl:w-1/2">
                        <div class="flex flex-row  gap-[18px]">
                            <div class="w-full md:min-w-[150px]">
                                <img src="/img/About_photo4.png" alt="" class="w-full xl:w-[200px]  2xl:w-[350px]  object-cover">
                            </div>
                            <div class="w-full lg:min-w-[200px]">
                                <h3 class="text-2xl">Блог</h3>
                                <div class="border-b-2 w-full mt-[25px] mb-[15px]"></div>
                                <p class="text-base font-light pb-4">Читайте полезные статьи о веб-индустрии на нашей
                                    платформе.</p>
                                <NuxtLink to="/development" @click="addToggle"
                                    class="bg--btn btn--shadow bg-white text-black text-lg px-[20px] py-[10px] w-full transition duration-700 ease-in-out">
                                    Открыть
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        addToggle() {
            this.$emit('addToggle')
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