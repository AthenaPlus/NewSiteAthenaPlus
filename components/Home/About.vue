<template>
    <section class="text-gray-100 overflow-hidden relative">
        <div class="sm:container px-5 py-0 mx-auto overflow-x-hidden">
            <div class="sm:flex justify-between items-center sm:w-full">
                <div class="text-main sm:w-1/2 2xl:w-1/2 md:w-1/2 lg:w-2/5 mx-auto mr-3 md:pl-5 sm:pr-0 z-10">
                <div class="text-block xl:mx-auto">
                    <h2 data-aos="fade-right" class="AboutTitle 2xl:text-7xl xl:text-6xl md:text-4xl text-3xl mb-5 xl:mb-8">О Веб-студии</h2>
                    <p class="AboutSubtitle xl:text-xl md:text-base text-sm mb-5 font-semibold">Мы создаем веб-продукты, выводящие бизнес на новый уровень </p>
                    <p class="AboutSubtitle 2xl:text-xl xl:text-lg md:text-base text-sm">Сотрудничество с нами гарантирует вам
                        приобретение лучшего диджитал-продукта. Мы
                        повышаем конверсию через дизайн.</p>

                    <div class="flex justify-between flex-wrap py-5">
                        <div v-for="AboutItem in AboutItems" :key="AboutItem.index" class="w-1/2 flex py-5">
                            <div class="mt-3 mr-5">
                                <img src="/img/webp/Arrow.webp" alt="" width="17" height="17">
                            </div>
                            <div class="AboutSubtitle">
                                <p class="2xl:text-4xl md:text-2xl text-xl font-semibold">{{ AboutItem.subTitle }}</p>
                                <p class="2xl:text-xl md:text-base text-sm">{{ AboutItem.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gallery 2xl:w-1/2 lg:w-7/12 sm:w-1/2 pl-5 xl:pl-10 2xl:pl-0 overflow-hidden">
                <svg width="2731" height="100" viewBox="0 0 2731 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="1365.5" cy="50" rx="1365.5" ry="50" fill="#0B0B0B" />
                </svg>

                <SlaiderAbout />

                <svg width="2747" height="100" class="el-2" viewBox="0 0 2747 100" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="1373.5" cy="50" rx="1373.5" ry="50" fill="#0B0B0B" />
                </svg>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup>
const AboutItems = [
    {
        subTitle: '3 года',
        title: 'на рынке'
    },
    {
        subTitle: 'Свыше 50',
        title: 'проектов'
    },
    {
        subTitle: '10 лет',
        title: 'опыта'
    },
    {
        subTitle: 'нас 7',
        title: 'специалистов'
    }
]
</script>


<style scoped>

.text-main {
    position: relative;
    right: 50%;
}

.AboutTitle {
    font-family: 'Airborne', sans-serif;
}

.AboutSubtitle {
    font-family: 'Source Sans Pro', sans-serif;
}

.SubTitle {
    background: linear-gradient(180deg, #FF2BFF 10%, #FE9402 100%);
    color: transparent;
    background-clip: text;   
}

svg:nth-child(1) {
    position: absolute;
    z-index: 2;
    left: -10%;
    top: -15%;
}

.el-2 {
    position: absolute;
    z-index: 3;
    left: -10%;
    bottom: -15%;
}

.gallery {
    position: absolute;
    left: 50%;
}

.btn2 {
    display: none;  
}

@media(min-width: 1280px) and (max-width: 1535px) {
    .text-main {
    position: relative;
    right: 60%;
    }
}
@media(min-width: 1024px) and (max-width: 1280px) {
    .text-main {
    position: relative;
    right: 60%;
}
}
@media(max-width: 640px) {
    .container {
        width: 100%;
        margin-left: 0;
        margin-right: none
    }
    .text-main {
    position: static;
}
.gallery {
    position: relative;
    right: 0%;
    left: 0%;
}
}
@media(max-width: 360px) {
    svg:nth-child(1) {
    position: absolute;
    z-index: 2;
    left: -10%;
    top: -24%;
}

.el-2 {
    position: absolute;
    z-index: 3;
    left: -10%;
    bottom: -24%;
}
}
</style>
