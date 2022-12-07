<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 py-24">
            <div class=" flex  md:flex-row flex-col items-center">
                <div
                    class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="WhatwedoTitle">
                        {{ WhatwedoTitle }}
                    </h1>
                    <h2 class="WhatwedoSubtitle mb-2.5 mt-5">{{ WhatwedoSubtitle }}</h2>
                    <p class="mb-12 text-xl LineHeight_30 font-normal">{{ WhatwedoDescription }}</p>
                    <div class="flex justify-center">
                        <button
                            class="bg-btn inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 font_Airborne text-xl uppercase">записаться
                            на интервью</button>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <nuxt-img class="object-center" alt="hero" src="img/bg_frame_3.png" width="" height="" />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-x-14">
                <div class="w-full   bg-pink-500">

                    <h3>Создание веб-сайтов</h3>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const WhatwedoTitle = 'веб-проекты со стилем'
const WhatwedoSubtitle = 'Мы создаём креативные веб-проекты для вашего бизнеса'
const WhatwedoDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  еще тут текст и всякие крутые штуки и тд veniam, quis.'
</script>

<style scoped>
.WhatwedoTitle {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 100%;
    /* or 100px */
    color: #FFFFFF;
}

.WhatwedoSubtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    /* or 39px */
    color: #FFFFFF;
}

.LineHeight_30 {
    line-height: 150%;
}
</style>