<template>
    <section class="text-gray-100 min-h-screen overflow-hidden">
        <div class="about-main sm:flex justify-between items-center sm:mt-0 sm:mb-0 ml-5 md:ml-16 lg:ml-20 2xl:ml-5 xl:my-20 2xl:my-0">
            <div class="sm:w-1/2 2xl:w-1/2 md:w-1/2 lg:w-2/5 mx-auto">
                <div class="text-block xl:mx-auto">
                    <h2 class="AboutTitle 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl mb-5 xl:mb-8 anime__left1">О Веб-студии</h2>
                    <p class="AboutSubtitle xl:text-xl md:text-base text-sm mb-5 font-semibold">Мы создаем веб-продукты, выводящие бизнес на новый уровень </p>
                    <p class="AboutSubtitle 2xl:text-xl xl:text-lg md:text-base text-sm">Сотрудничество с нами гарантирует вам
                        приобретение лучшего диджитал-продукта. Мы
                        повышаем конверсию через дизайн.</p>

                    <div class="flex justify-between flex-wrap py-5">
                        <div v-for="AboutItem in AboutItems" :key="AboutItem.index" class="w-1/2 flex py-5">
                            <div class="mt-3 mr-5">
                                <img src="/img/Arrow.png" alt="">
                            </div>
                            <div class="AboutSubtitle">
                                <p class="2xl:text-4xl md:text-2xl text-xl font-semibold">{{ AboutItem.subTitle }}</p>
                                <p class="2xl:text-xl md:text-base text-sm">{{ AboutItem.title }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- <a href="#" class="btn1 btn btn--shadow px-20 2xl:px-32">Больше о нас</a> -->
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
            <!-- <a href="/about" class="btn2 btn btn--shadow w-11/12 text-center mx-auto mt-10">Больше о нас</a> -->
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
        subTitle: 'Свыше 40',
        title: 'проектов'
    },
    {
        subTitle: '10 лет',
        title: 'опыта'
    },
    {
        subTitle: 'нас 11',
        title: 'людей'
    }
]
</script>

<style scoped>
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
    position: relative;
}

.btn2 {
    display: none;  
}

@media (min-width: 200px) and (max-width: 639px) {
    .about-main {
        margin-top: 120px;
        margin-bottom: 40px;
        padding-bottom: 40px;
    }

    .btn1 {
        display: none;
    }

    .btn2 {
        display: block;
    }
}

@media (min-width: 1536px) {
    .text-block {
        width: 68%;
    }
}

</style>