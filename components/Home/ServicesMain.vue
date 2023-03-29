<template>
    <section
        class="text-white min-h-screen">
        <div class="container mx-auto my-24 md:pl-0 lg:my-20 sm:pl-5 lg:px-20 2xl:px-0 overflow-x-hidden">
            <h2 class="font_Airborne 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl mb-5 xl:mb-8 px-3 md:px-0 anime__left1">Услуги</h2>
            <!-- <div v-for="item in items" :key="item">
                <div class="lg:flex flex-wrap">
                    <img :src="item.img" alt="" class="lg:pr-20">
                </div>
            </div> -->
            <div class="overflow-hidden">
                <div class="lg:flex lg:justify-end">
                    <div class="md:py-2 lg:py-5 lg:pr-20"> 
                        <img :src="items[0].img" alt="">
                        <div class="item-div relative bottom-8 left-3 xs:bottom-10 sm:bottom-14 sm:left-10 md:bottom-16 lg:left-0 lg:bottom-20 lg:pt-3 xl:pt-0 xl:bottom-20 2xl:bottom-24">
                            <p class="item-title text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne lg:p-7">{{ items[0].title }}</p>
                        </div>
                    </div>
                    <div class="lg:flex lg:justify-end">
                        <div class="md:py-2 lg:py-5 float-right lg:float-none"> 
                            <img :src="items[1].img" alt="" class="lg:w-full w-11/12 float-right lg:float-none">
                            <div class="item-div relative bottom-9 left-10 xs:bottom-10 sm:bottom-14 sm:left-24 md:bottom-16 md:pt-5 lg:bottom-20 lg:left-0 lg:pt-3 xl:pt-0 xl:bottom-20 2xl:bottom-24">
                                <p class="item-title1 text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne lg:p-7">{{ items[1].title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:flex lg:justify-end">
                    <div class="md:py-2 lg:py-5 lg:pr-20"> 
                        <img :src="items[2].img" alt="">
                        <div class="item-div relative bottom-10 left-3 xs:bottom-10 sm:bottom-16 sm:left-10 md:bottom-20 lg:left-0 lg:bottom-20 lg:pt-3 xl:pt-0 xl:bottom-20 2xl:bottom-24">
                            <p class="item-title2 text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne lg:p-7">{{ items[2].title }}</p>
                        </div>
                    </div>
                    <div class="lg:flex lg:justify-end">
                        <div class="md:py-2 lg:py-5 float-right lg:float-none"> 
                            <img :src="items[3].img" alt="" class="lg:w-full w-11/12 float-right lg:float-none">
                            <div class="item-div relative bottom-8 left-10 xs:bottom-8 sm:bottom-12 sm:left-24 md:bottom-16 lg:left-0 lg:bottom-20 lg:pt-3 xl:pt-0 xl:bottom-20 2xl:bottom-24">
                                <p class="item-title3 text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne lg:p-7">{{ items[3].title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:flex lg:justify-end">
                    <div class="md:py-2 lg:py-5 lg:pr-20"> 
                        <img :src="items[4].img" alt="">
                        <div class="item-div relative bottom-8 left-3 xs:bottom-8 sm:bottom-12 sm:left-10 md:bottom-16 lg:left-0 lg:bottom-20 lg:pt-3 xl:pt-0 xl:bottom-20 2xl:bottom-24">
                            <p class="item-title4 text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne lg:p-7">{{ items[4].title }}</p>
                        </div>
                    </div>
                    <div class="lg:flex lg:justify-end">
                        <div class="md:py-2 lg:py-5 float-right lg:float-none"> 
                            <img :src="items[5].img" alt="" class="lg:w-full w-11/12 float-right lg:float-none">
                            <div class="item-div relative bottom-10 left-10 xs:bottom-10 sm:bottom-14 sm:left-24 md:bottom-16 lg:left-0 lg:bottom-20 lg:pt-3 xl:pt-0 xl:bottom-20 2xl:bottom-24">
                                <p class="item-title5 text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne lg:p-7">{{ items[5].title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return { 
            items: [{
                title: 'Мобильные приложения',
                img: '/img/ServiceImg1.png'
            },
            {
                title: 'Сайты',
                img: '/img/ServiceImg2.png'
            },
            {
                title: 'SEO',
                img: '/img/ServiceImg3.png'
            },
            {
                title: 'Графический дизайн',
                img: '/img/ServiceImg4.png'
            },
            {
                title: 'Реклама',
                img: '/img/ServiceImg5.png'
            },
            {
                title: 'Поддержка',
                img: '/img/ServiceImg6.png'
            },
        ] 
        }
    }
}

</script>


<style scoped>
/* @media(min-width: 400px) and (max-width: 640px) {
    .item-div {
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    p {
        font-size: 20px;
    }
    .item-title {
        position: absolute;
        bottom: 20%;
    }
    .item-title1 {
        position: absolute;
        bottom: 1%;
    }
    .item-title2 {
        position: absolute;
        bottom: 56%;
    }
    .item-title3 {
        position: absolute;
        bottom: 7%;
    }
    .item-title4 {
        position: absolute;
        bottom: 10%;
    }
    .item-title5 {
        position: absolute;
        bottom: 39%;
    }
} */
</style>