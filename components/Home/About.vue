<template>
    <section class="text-gray-100 min-h-screen overflow-hidden">
        <svg width="2731" height="100" viewBox="0 0 2731 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="1365.5" cy="50" rx="1365.5" ry="50" fill="#0B0B0B" />
        </svg>
        <div class="about-main xl:flex justify-between items-center sm:mt-0 sm:mb-0 mx-5">
            <div class="xl:w-1/2 w-full">
                <div class="xl:w-2/3 xl:mx-auto">
                    <h2 class="AboutTitle 2xl:text-7xl text-3xl mb-5 xl:mb-8">О Веб-студии</h2>
                    <p class="AboutSubtitle xl:text-xl text-base mb-5 font-semibold">Мы являемся самой прогрессивной веб-студией
                        на казахстанском рынке </p>
                    <p class="AboutSubtitle xl:text-xl text-base">Сотрудничество с нами гарантирует вам
                        приобретение лучшего диджитал-продукта. Мы
                        повышаем конверсию через дизайн.</p>

                    <div class="flex justify-between flex-wrap py-5">
                        <div v-for="AboutItem in AboutItems" :key="AboutItem.index" class="w-1/2 flex py-5">
                            <div class="mt-3 mr-5">
                                <img src="/img/Arrow.png" alt="">
                            </div>
                            <div class="AboutSubtitle">
                                <p class="xl:text-4xl text-2xl font-semibold">{{ AboutItem.subTitle }}</p>
                                <p class="xl:text-xl text-base">{{ AboutItem.title }}</p>
                            </div>
                        </div>
                    </div>
                        <a href="/about" class="btn1 btn btn--shadow px-32">Больше о нас</a>
                </div>
            </div>
            <div class="gallery xl:w-1/2 my-5">
                <SlaiderAbout />
            </div>
            <a href="/about" class="btn2 btn btn--shadow w-11/12 text-center mx-auto mt-10">Больше о нас</a>
        </div>

        <svg width="2747" height="100" class="el-2" viewBox="0 0 2747 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="1373.5" cy="50" rx="1373.5" ry="50" fill="#0B0B0B" />
        </svg>
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
        subTitle: 'нас 15',
        title: 'людей'
    }
]
</script>

<style scoped>
.AboutTitle {
    font-family: 'Airborne';
}

.AboutSubtitle {
    font-family: 'Source Sans Pro';
}

svg:nth-child(1) {
    position: absolute;
    z-index: 2;
    left: 47%;
    top: 21%;
}
.el-2 {
    position: absolute;
    z-index: 3;
    left: 47%;
    bottom: 21%;
}
.gallery {
    position: relative;
}

.btn2 {
    display: none;
}

@media (min-width: 300px) and (max-width: 1024px) {

    svg {
        display: none
    }
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
</style>