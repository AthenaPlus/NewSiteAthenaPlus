<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 sm:py-24 mt-24 sm:mt-0">
            <div class=" flex  lg:flex-row flex-col items-center">
                <div
                    class="order-2 lg:order-1 lg:flex-grow w-full lg:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center">
                    <h1 class="hidden lg:block h1-title animate__animated animate__fadeInLeft animate__delay-0.5s lg:text-7xl xl:text-8xl">
                        {{ HeroTitle }}
                    </h1>

                    <h2 class="text-xl lg:text-[26px] font-semibold mb-4 mt-0 md:mt-5 mr-auto anime__left2">{{ HeroSubtitle }}</h2>
                    <p class="hidden md:block text-base lg:text-xl LineHeight_30 font-normal anime__left3">{{
                        HeroDescription
                    }}</p>
                    <div class="md:mr-auto md:mt-[25px]">
                        <a data-menuanchor="order" href="#order" class="btn btn--shadow">Записаться
                            на Интервью</a>
                    </div>
                    <!-- <div class="hidden md:flex flex-wrap justify-start gap-2.5 mt-[25px]">
                        <Nuxt-link v-for="HeroLabel in HeroLabels" :key="HeroLabel.index" :to="HeroLabel.url"
                            class="font_Airborne rounded-full border-2 border-white py-[13px] px-[13px] leading-[21px]">
                            {{HeroLabel.title}}
                        </Nuxt-link>
                    </div> -->
                </div>
                <div class="order-1 lg:order-2 w-full lg:w-11/12">
                    <h1
                        class="block lg:hidden font_Airborne mt-10 text-[30px] md:text-[40px] leading-none animate__animated animate__fadeInLeft animate__delay-0.5s">
                        {{ HeroTitle }}
                    </h1>
                    <div class="pt-5 lg:pt-0 animate__animated animate__zoomIn animate__delay-1s xl:mb-20 2xl:mb-0">
                        <img src="/img/Palm.png" alt="" class="absolute 2xl:top-14 2xl:left-0 xl:top-10 xl:left-0 lg:top-10 w-full">
                        <img src="/img/AthenaMain.png" alt="" class="animate__animated animate__zoomIn animate__delay-1s mx-auto lg:w-4/5 2xl:w-2/3 xl:w-4/5 w-4/5">
                        <img src="/img/Clouds.png" alt="" class="z-10 min-[300px]:top-16 min-[400px]:top-24 sm:top-36 sm:left-5 md:top-32 md:left-5 md:w-full lg:top-20 lg:left-3 xl:top-28 xl:left-5 2xl:top-32 2xl:left-20 2xl:w-4/5 absolute">
                    </div>
                </div>
            </div>
        </div>
        <div class="text-wrapper">
            <div class="flex  gap-2.5 mt-[25px]">
                <Nuxt-link v-for="HeroLabel in HeroLabels" :key="HeroLabel.index" :to="HeroLabel.url"
                    class="font_Airborne py-[13px] px-[13px] leading-[21px]">
                    {{HeroLabel.title}}
                </Nuxt-link>
            </div>
            <div class="flex  gap-2.5 mt-[25px]">
                <Nuxt-link v-for="HeroLabel in HeroLabels" :key="HeroLabel.index" :to="HeroLabel.url"
                    class="font_Airborne py-[13px] px-[13px] leading-[21px]">
                    {{HeroLabel.title}}
                </Nuxt-link>
            </div>
                <div class="flex  gap-2.5 mt-[25px]">
                <Nuxt-link v-for="HeroLabel in HeroLabels" :key="HeroLabel.index" :to="HeroLabel.url"
                    class="font_Airborne py-[13px] px-[13px] leading-[21px]">
                    {{HeroLabel.title}}
                </Nuxt-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconPicterFrame1 from '~/assets/icons/PicterFrame1.svg'


const HeroTitle = 'Веб-Сайты UX/UI Айдентика'
const HeroSubtitle = 'Разработка и дизайн IT-продуктов опережающих тренды'
const HeroDescription = 'Современный дизайн, мобильные приложения, результативный маркетинг - в новом формате'

const HeroLabels = [
    {
        title: '#webdevelopment',
        url: '/'
    },
    {
        title: '#ux/ui',
        url: '/'
    },
    {
        title: '#webdesign',
        url: '/'
    },
    {
        title: '#projectsupport',
        url: '/'
    },
    {
        title: '#seo',
        url: '/'
    },
    {
        title: '#brandmanagement',
        url: '/'
    },
    {
        title: '#digitalmarketing',
        url: '/'
    },

]

</script>

<style>
.HeroTitle {
    font-family: 'Airborne';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 100%;
    /* or 100px */
    color: #FFFFFF;
}

.HeroSubtitle {
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

/* Border Gradient */
.Border-Gradient {
    border: 2px solid #FF2BFF;
    border-radius: 100px;
    border-image: linear-gradient(to bottom, #FCB040, #FF2BFF);
    border-image-slice: 1;
}

.border-gradient-to-b {
    border: 2px solid #FF2BFF;
    border-radius: 100px;
    border-image: -moz-linear-gradient(to bottom, #FCB040, #FF2BFF );
    border-image: -webkit-linear-gradient(to bottom, #FCB040, #FF2BFF );
    border-image: linear-gradient(to bottom, #FCB040 , #FF2BFF );
    border-image-slice: 1;
    transition: all 0.5s ease-out;
}

.border-gradient-to-b:hover {
    border: 2px solid #FF2BFF;
    border-radius: 100px;
    border-image: -moz-linear-gradient(to bottom, #FF2BFF, #FCB040 );
    border-image: -webkit-linear-gradient(to bottom, #FF2BFF, #FCB040  );
    border-image: linear-gradient(to bottom, #FF2BFF, #FCB040  );
    border-image-slice: 1;
    transition: all 0.5s ease-out;
}


/* CSS для Анимации Заголовка и под заголовка */

.animat_Title {
	transform: translate(-120%, 0%);
	opacity: 0;
	transition: all 0.5s ease 0s;
}

.animat_SubTitle {
	transform: translate(0px, 100px);
	opacity: 0;
	transition: all 0.8s ease 0.5s;
	--animate-duration: 0.5s;
}

.animat_Title._active {
	transform: translate(0, 0);
	opacity: 1;
}

.animat_SubTitle._active {
	transform: translate(0px, 0);
	opacity: 1;
}

.text-wrapper {
    display: flex;
    justify-content: flex-start;
    background: #0b0b0b;
    overflow: hidden;
    margin-top: -50px;
}

.text-wrapper div {
    font-size: 25px;
    text-transform: uppercase;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: #fff;
    white-space: nowrap;
    animation: move-rtl 15s linear infinite;
}

@keyframes move-rtl {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

</style>