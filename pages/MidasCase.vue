<template>
    <section class="text-white min-h-screen overflow-hidden">
        <div class="flex flex-col-reverse w-full sm:flex-row sm:w-11/12 mx-auto justify-between px-5 pb-12 mt-16 md:py-24">
            <div class="sm:w-2/5 lg:w-1/2 xl:w-2/5 sm:pr-5 lg:pr-10" v-for="case1 in cases" :key="case1">
                <h2 class="font_Airborne hidden sm:block sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-1 md:pb-3 2xl:pb-5">Кейс:</h2>
                <h3 class="sm:text-2xl hidden sm:block 2xl:text-3xl pb-1 md:pb-3 lg:pb-5 2xl:pb-10">{{ case1.title }}</h3>
                <p class="hidden sm:block sm:text-xs md:text-sm 2xl:text-lg pb-1 md:pb-5 2xl:pb-10">{{ case1.desc }}</p>
                <div class="flex sm:block my-5">
                    <h3 class="md:text-lg xl:text-xl md:pb-3 pr-3">Ссылка:</h3>
                    <a href="midasevent.kz" class="font-normal underline">www.midasevent.kz</a>
                </div>
                <div class="flex sm:block items-center">
                    <h3 class="md:text-lg xl:text-xl sm:pt-5 2xl:pt-10 pr-3">Шрифты:</h3>
                    <p class="font-normal sm:pt-3">Oswald/NunitoSans</p>
                </div>
                <h3 class="md:text-lg xl:text-xl pt-5 2xl:pt-10 pb-3">Цвета:</h3>
                <div class="flex mr-5">
                    <div>
                        <p class="color-1 w-5 h-5 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 rounded-full ml-[3px] mr-6 sm:mr-5 mb-2"></p>
                        <p class="text-[10px] sm:text-lg">#000000</p>
                    </div>
                    <div>
                        <p class="color-2 w-5 h-5 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 rounded-full ml-[3px] mr-6 sm:mr-5 mb-2"></p>
                        <p class="text-[10px] sm:text-lg">#000000</p>
                    </div>
                    <div>
                        <p class="color-1 w-5 h-5 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 rounded-full ml-[3px] mr-6 sm:mr-5 mb-2"></p>
                        <p class="text-[10px] sm:text-lg">#000000</p>
                    </div>
                    <div>
                        <p class="color-1 w-5 h-5 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 rounded-full ml-[3px] mr-6 sm:mr-5 mb-2"></p>
                        <p class="text-[10px] sm:text-lg">#000000</p>
                    </div>
                    <div>
                        <p class="color-1 w-5 h-5 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 rounded-full ml-[3px] mr-6 sm:mr-5 mb-2"></p>
                        <p class="text-[10px] sm:text-lg">#000000</p>
                    </div>
                    <div>
                        <p class="color-1 w-5 h-5 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 rounded-full ml-[3px] mr-6 sm:mr-5 mb-2"></p>
                        <p class="text-[10px] sm:text-lg">#000000</p>
                    </div>
                </div>
            </div>
            <div class="lg:pl-10 order-1" v-for="case1 in cases" :key="case1">
                <h2 class="font_Airborne sm:hidden block text-4xl pb-3">Кейс:</h2>
                <h3 class="sm:text-2xl sm:hidden block text-lg pb-3">Navat</h3>
                <img :src="case1.img" alt="">
            </div>
        </div>
        <div>
            <Accordion-case class="w-11/12 mx-auto mt-5 sm:mt-10" />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            cases: [{
                title: 'Midas Event agency',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                img: '/img/MidasFrame.png'
            }]
        }
    }
}
</script>

<style scoped>
.color-1 {
    background: #D9D9D9;
}
.color-2 {
    background: #AB6949;
}
</style>