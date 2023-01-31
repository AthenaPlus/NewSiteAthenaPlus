<template>
    <section
        class="text-gray-100 flex min-h-screen relative bg-no-repeat bg-left-top lg:bg-center bg-cover bg-[url('/img/mask/bg_freme__athena.png')] overflow-hidden">
        <div class="absolute top-0 left-0 bottom-0 bg-[#0B0B0B] w-[300px] "></div>
        <div class="absolute right-0 bottom-0 bg-right  bg-contain bg-no-repeat bg-[url('/img/mask/Athena.png')] w-[800px] h-[826px]">
            <img src="/img/mask/Lauot3.png" alt="" class="mask">
            <img src="/img/mask/Lauot4.png" alt="" class="absolute inset-0 ">
        </div>
        <div class="container px-5 mx-auto flex flex-row">
            <div
                class="w-full md:w-1/2 bg-[#0B0B0B] text-white min-h-screen  py-14 md:pt-[200px]">
                <div class="w-full h-full max-w-3xl pr-0 md:pr-10">
                    <h1 class="text-[32px] md:text-[80px] leading-none md:leading-[92px] anime__left1">
                        О веб-студии
                    </h1>
                    <img src="/img/photo_section2.jpg" alt="" class="md:hidden mt-5" />
                    <h2 class="text-[20px] md:text-[26px] leading-[100%] md:leading-[150%] font-semibold mb-2.5 mt-5 anime__left2">
                        Мы являемся самой прогрессивной веб-студией на казахстанском рынке
                    </h2>
                    <p class="mb-12 text-base md:text-xl LineHeight_30 font-normal pr-0 md:pr-5 anime__left3">
                        Мы создали Athena Plus объединив наши навыки веб-разработки, контент-стратегии и социальных
                        сетей в
                        мощную и гибкую команду. Дизайнеры, стратеги брендов и менеджеры проектов
                        сотрудничают с
                        вами, чтобы создать дальновидный пользовательский опыт, чтобы вы могли сосредоточиться на
                        результате.
                        Сотрудничество с нами гарантирует вам приобретение лучшего диджитал-продукта.
                    </p>
                    <!-- <div class="flex justify-start"> -->
                    <!-- <button class="btn btn--shadow">записаться на интервью</button> -->
                    <!-- </div> -->
                </div>
            </div>
        </div>

        <!-- <div class="w-1/2 bg-cover bg-right bg-[url('/img/bg_second_freim.webp')] min-h-screen">R</div> -->
    </section>
</template>

<script setup>

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
    /* or 39px */
    color: #FFFFFF;
}

.LineHeight_30 {
    line-height: 150%;
}


</style>