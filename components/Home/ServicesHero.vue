<template>
    <section
        class="text-white relative min-h-screen bg-[url('/img/bg_frame3_mob.png')] md:bg-[url('/img/bg_ServicesHero.webp')] bg-no-repeat bg-top bg-contain md:bg-cover">
        <!-- <video autoplay loop muted plays- inline class="absolute inset-0 w-full zindex-1">
            <source
                src="https://res.cloudinary.com/dfevgyt2k/video/upload/c_fill,g_center,w_1920/v1675238076/video/video_athena_3frem_entqsh.webm"
                type="video/webm">
        </video> -->
        <div class="container px-5 py-24 mx-auto zindex-1000 overflow-x-hidden">
            <div class="mt-11 w-full lg:w-[700px]">
                <h2
                    class="font_Airborne text-[32px] md:text-7xl lg:text-[80px] md:leading-[92px] pt-5 md:my-5 uppercase anime__left1">
                    Каждый проект</h2>
                <h2
                    class="font_Airborne uppercase text-[20px] md:text-4xl lg:text-[50px] md:leading-[57px] text-right pr-0 md:pr-6 mb-[20px] md:mb-[30px] anime__right1">
                    как арт-объект</h2>
                <p class="w-full lg:w-[470px] text-base md:text-lg anime__left3">Мы крайне негативно относимся к
                    сайтам-однодневкам с кривым дизайном и слабой идеей. Поэтому для нас важно предать проекту
                    уникальную айдентику.</p>
            </div>
            <div class="steps flex flex-wrap items-start mt-[20px] md:mt-[150px] zindex-100">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-0 md:pl-0 md:pr-8 py-6 ">
                    <h3 class="font_Airborne uppercase text-3xl mb-[20px]">Этапы разработки</h3>
                    <p class="text-base">
                        Мы ведем проекты по специальному авторскому алгоритму. Ведя проект совместно с нами, вы
                        гарантируете качественный запуск.
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-0 md:px-8 py-6 hidden md:block">
                    <h4 class="text-[28px] mb-[20px] inline-flex items-center gap-4">
                        <IconUnion1 /> Интервью
                    </h4>
                    <p class="text-base">
                        Устанавливаются ваши предпочтения. Формируется концепция будущего проекта. Совместно составляем
                        техническое задание и бриф.
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-0 md:px-8 py-6 hidden md:block">
                    <h4 class="text-[28px] mb-[20px] inline-flex items-center gap-4">
                        <IconUnion2 /> Разработка
                    </h4>
                    <p class="text-base">
                        Выстроим логическую структуру и архитектуру проекта. Далее создадим уникальный дизайн, а после
                        передадим макет на вёрстку, где сайт “оживает”.
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-0 md:px-8 py-6 hidden md:block">
                    <h4 class="text-[28px] mb-[20px] inline-flex items-center gap-4">
                        <IconUnion3 /> Тесты и SEO
                    </h4>
                    <p class="text-base">
                        Проверим проект. Узнаем как сайт будет работать в разных ситуациях. После, проводим первичную
                        оптимизацию и выводим сайт в диджитал-сферу
                    </p>
                </div>
            </div>
            <SlaiderServiceshero class="block md:hidden" />
        </div>
    </section>
</template>

<script setup>
import IconUnion1 from '~/assets/icons/Union1.svg'
import IconUnion2 from '~/assets/icons/Union2.svg'
import IconUnion3 from '~/assets/icons/Union3.svg'

</script>


<style scoped>

.plan {
    position: relative;
}
.plan::before {
    content: '';
    position: absolute;
    width: 50px;
    top: 50%;
    left: -50%;
    background: #0B0B0B;
    border: 1px solid #FFFFFF;
}
@media (min-width: 1300px) and (max-width:1441px) {
    .steps {
        margin-top: 70px;
    }
}
</style>