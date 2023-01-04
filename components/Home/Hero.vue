<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 py-24 ">
            <div class=" flex  lg:flex-row flex-col items-center">
                <div
                    class="order-2 lg:order-1 lg:flex-grow w-full lg:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center">
                    <h1 class="hidden lg:contents h1-title animate__animated animate__bounce">
                        {{ HeroTitle }}
                    </h1>
                    <h2 class="text-xl lg:text-[26px] font-semibold mb-4 mt-5">{{ HeroSubtitle }}</h2>
                    <p class="mb-12 text-base lg:text-xl LineHeight_30 font-normal">{{ HeroDescription }}</p>
                    <div class="flex justify-center">
                        <button
                            class="btn btn--shadow">записаться
                            на интервью</button>
                    </div>
                    <div class="flex flex-wrap justify-start gap-2.5 mt-28">
                        <Nuxt-link v-for="HeroLabel in HeroLabels" :key="HeroLabel.index" :to="HeroLabel.url"
                            class="font_Airborne rounded-full border-2 border-white py-5 px-6">{{ HeroLabel.title }}</Nuxt-link>
                    </div>
                </div>
                <div class="order-1 lg:order-2 w-full lg:w-1/2">
                    <h1 class="contents lg:hidden font_Airborne text-[40px] animate__animated animate__bounce">
                        {{ HeroTitle }}
                    </h1>
                    <div class="pt-5 lg:pt-0">
                        <IconPicterFrame1/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconPicterFrame1 from '~/assets/icons/PicterFrame1.svg'


const HeroTitle = 'веб-проекты со стилем'
const HeroSubtitle = 'Мы создаём креативные веб-проекты для вашего бизнеса'
const HeroDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  еще тут текст и всякие крутые штуки и тд veniam, quis.'

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
        title: '#coding',
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

</style>