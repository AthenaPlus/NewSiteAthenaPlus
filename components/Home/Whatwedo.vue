<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 py-24">
            <div class=" flex  md:flex-row flex-col items-center">
                <div
                    class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="WhatwedoTitle">
                        {{ WhatwedoTitle }}
                    </h1>
                    <p class="mb-10 text-xl LineHeight_30 font-normal">{{ WhatwedoDescription }}</p>
                    <p class="mb-10 text-xl LineHeight_30 font-normal">{{ WhatwedoDescription2 }}</p>
                    <div class="flex justify-center">
                        <button
                            class="bg-btn inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 font_Airborne text-xl uppercase">записаться
                            на интервью</button>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img class="object-center" alt="hero" src="/img/bg_frame_3.png" width="" height="" />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-x-14 gap-y-20">
                <div class="flex flex-col md:flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#1</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                    </div>
                    <div class="mt-9">
                        <IconIcon1 class="w-52 h-52"/>
                    </div>
                </div>

                <div class="flex flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#2</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                    </div>
                    <div class="mt-9">
                        <IconIcon2 class="w-52 h-52"/>
                    </div>
                </div>

                <div class="flex flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#3</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                    </div>
                    <div class="mt-9">
                        <IconIcon3 class="w-52 h-52"/>
                    </div>
                </div>

                <div class="flex flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#4</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                    </div>
                    <div class="mt-9">
                        <IconIcon4 class="w-52 h-52"/>
                    </div>
                </div>

                <div class="flex flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#5</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                    </div>
                    <div class="mt-9">
                        <IconIcon5 class="w-52 h-52"/>
                    </div>
                </div>
                <div class="flex flex-row justify-between gap-x-1 w-full border-t-2 border-white">
                    <div class="w-28"><span class="Namber">#6</span></div>
                    <div class="text-right pr-7">
                        <h3 class="text-3xl font-semibold mt-16">Создание веб-сайтов</h3>
                        <p class="max-w-sm ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                    </div>
                    <div class="mt-9">
                        <IconIcon6 class="w-52 h-52"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconIcon1 from '~/assets/icons/icon1.svg'
import IconIcon2 from '~/assets/icons/icon2.svg'
import IconIcon3 from '~/assets/icons/icon3.svg'
import IconIcon4 from '~/assets/icons/icon4.svg'
import IconIcon5 from '~/assets/icons/icon5.svg'
import IconIcon6 from '~/assets/icons/icon6.svg'

const WhatwedoTitle = 'чем мы занимаемся'
const WhatwedoDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const WhatwedoDescription2 = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'



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


.Namber {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 102.99%;
    /* or 82px */

    text-align: left;


    background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
</style>