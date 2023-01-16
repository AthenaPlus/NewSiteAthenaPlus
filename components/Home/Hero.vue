<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 py-14 md:py-24 ">
            <div class=" flex  lg:flex-row flex-col items-center">
                <div
                    class="order-2 lg:order-1 lg:flex-grow w-full lg:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center">
                    <h1 class="hidden lg:block h1-title animate__animated animate__bounceInRight">
                        {{ HeroTitle }}
                    </h1>

                    <h2 class="text-xl lg:text-[26px] font-semibold mb-4 mt-0 md:mt-5 mr-auto">{{ HeroSubtitle }}</h2>
                    <p class="hidden md:contents text-base lg:text-xl LineHeight_30 font-normal">{{
                        HeroDescription
                    }}</p>
                    <div class="mr-auto md:mt-[25px]">
                        <button class="btn btn--shadow">Записаться
                            на Интервью</button>
                    </div>
                    <div class="hidden md:flex flex-wrap justify-start gap-2.5 mt-[25px]">
                        <Nuxt-link v-for="HeroLabel in HeroLabels" :key="HeroLabel.index" :to="HeroLabel.url"
                            class="font_Airborne rounded-full border-2 border-white py-[13px] px-[13px] leading-[21px]">
                            {{HeroLabel.title}}
                        </Nuxt-link>
                    </div>
                </div>
                <div class="order-1 lg:order-2 w-full lg:w-1/2">
                    <h1
                        class="contents lg:hidden font_Airborne text-[30px] md:text-[40px] leading-none _anim-items animat_Title">
                        {{ HeroTitle }}
                    </h1>
                    <div class="pt-5 lg:pt-0">
                        <img src="/img/AthenaFirst.png" alt="" class="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconPicterFrame1 from '~/assets/icons/PicterFrame1.svg'


const HeroTitle = 'Веб-Сайты UX/UI Айдентика'
const HeroSubtitle = 'Разработка и дизайн сайтов опережающих тренды'
const HeroDescription = 'Современный дизайн, инновационная технология, результативный маркетинг - все это в нашей веб-студии'

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
        title: '#projectsuport',
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

<style scoped>
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
	transform: translate(0px, 120%);
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
	transform: translate(0px, 0);
	opacity: 1;
}

.animat_SubTitle._active {
	transform: translate(0px, 0);
	opacity: 1;
}

</style>