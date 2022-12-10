<template>
    <section class="text-white body-font">
        <div class="container mx-auto px-5 py-24 ">
            <div class=" flex  md:flex-row flex-col items-center">
                <div
                    class="lg:flex-grow w-full md:w-1/2 lg:pr-16 md:pr-14 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="h1-title">
                        {{ HeroTitle }}
                    </h1>
                    <h2 class="HeroSubtitle mb-2.5 mt-5">{{ HeroSubtitle }}</h2>
                    <p class="mb-12 text-xl LineHeight_30 font-normal">{{ HeroDescription }}</p>
                    <div class="flex justify-center">
                        <button
                            class="bg-btn inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 font_Airborne text-xl uppercase">записаться
                            на интервью</button>
                    </div>
                    <div class="flex flex-wrap justify-start gap-2.5 mt-28">
                        <Nuxt-link v-for="HeroLabel in HeroLabels" :key="HeroLabel.index" :to="HeroLabel.url"
                            class="font_Airborne rounded-full border-2 border-white py-5 px-6">{{ HeroLabel.title }}</Nuxt-link>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <IconPicterFrame1/>
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
/* Border Gradient variant-2 */
.btn {
  position: relative;
  padding: 15px 20px;
  margin-top: 20px;
  border: 0;
  border-radius: 50px;
  font-size: 20px;
  font-family: inherit;
  color: inherit;
  background: none;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  border: var(--border-w) solid transparent;
  background: linear-gradient(45deg, purple, orange) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.btn:hover::before {
}

</style>