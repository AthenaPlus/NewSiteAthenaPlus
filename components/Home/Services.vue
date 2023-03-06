<template>
    <section class="text-gray-100 min-h-screen overflow-hidden">
        <div class="service-main flex sm:w-11/12  lg:w-5/6 mx-auto justify-end my-16">
            <div class="mr-20 overflow-hidden">
                    <div class="w-full">
                        <h2 class="font_Airborne sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-5 anime__left1">
                            <span class="font-light">—</span> Каждый проект
                        </h2>
                        <h2 class="font_Airborne sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:ml-36 md:ml-44 lg:ml-64 xl:ml-80 2xl:ml-96 anime__right1">
                            как арт-объект
                        </h2>
                    </div>
                <div class="flex flex-wrap lg:flex-nowrap justify-between items-end mt-10 lg:mt-32" v-show="content0">
                    <div class="md:w-4/5 lg:w-2/5 order-last lg:order-first">
                        <p class="md:text-lg lg:text-base xl:text-xl">{{ ServiceItems[0].desc }}</p>
                    </div>
                    <div class="md:w-4/5 lg:w-1/2 order-first lg:order-last mb-5">
                        <img :src="ServiceItems[0].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end mt-32" v-show="content1">
                    <div class="w-2/5">
                        <p class="text-lg xl:text-xl">{{ ServiceItems[1].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[1].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end mt-32" v-show="content2">
                    <div class="w-2/5">
                        <p class="text-lg xl:text-xl">{{ ServiceItems[2].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[2].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end mt-32" v-show="content3">
                    <div class="w-2/5">
                        <p class="text-lg xl:text-xl">{{ ServiceItems[3].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[3].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end mt-32" v-show="content4">
                    <div class="w-2/5">
                        <p class="text-lg xl:text-xl">{{ ServiceItems[4].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[4].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end mt-32" v-show="content5">
                    <div class="w-2/5">
                        <p class="text-lg xl:text-xl">{{ ServiceItems[5].desc }}</p>
                    </div>
                    <div class="w-1/2">
                        <img :src="ServiceItems[5].img" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-end mt-32" v-show="content6">
                    <div class="w-2/5">
                        <p class="text-lg xl:text-xl">{{ ServiceItems[6].desc }}</p>
                    </div>
                    <div class="lg:w-3/5 xl:w-1/2">
                        <img :src="ServiceItems[6].img" alt="">
                    </div>
                </div>
            </div>
            <div class="service-items">
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-on:click="show0">{{ ServiceItems[0].title }}</p>
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-on:click="show1">{{ ServiceItems[1].title }}</p>
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-on:click="show2">{{ ServiceItems[2].title }}</p>
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-on:click="show3">{{ ServiceItems[3].title }}</p>
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-on:click="show4">{{ ServiceItems[4].title }}</p>
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-on:click="show5">{{ ServiceItems[5].title }}</p>
                <p class="service-item font_Airborne font-normal text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-10 cursor-pointer" v-on:click="show6">{{ ServiceItems[6].title }}</p>
            </div>
        </div>
        <Accordion class="accordion-mobile py-20" />
    </section>
</template>

<script setup>

const ServiceItems = [{
    id: 1,
    title: 'Интервью',
    desc: 'Проводим съемку интервью в профессиональной фотостудии для создания лучшего продукта. Формируем концепцию будущего проекта. Определяем сильные стороны Вашей компании.',
    img: '/img/ServicePhoto1.png'
},
{
    id: 2,
    title: 'Анализ',
    desc: 'Исследуем конкурентов и их сильные стороны, проверяем рыночный потенциал, проводим опрос целевой аудитории. Строим аналитику и предоставляем картину рынка. ',
    img: '/img/ServicePhoto2.png'
},
{
    id: 3,
    title: 'Маркетинг',
    desc: 'Составляем стратегию для улучшения имиджа бренда и максимального коэффицента конверсии. Наш целевой порог - не менее 10%.',
    img: '/img/ServicePhoto3.png'
},
{
    id: 4,
    title: 'UX/UI',
    desc: 'Pixel-Perfect-подход от дизайнеров из лучших школ. Повышаем рентабельность проектов при помощи премиального UX/UI, интерактивности и геймификации.',
    img: '/img/ServicePhoto4.png'
},
{
    id: 5,
    title: 'Разработка',
    desc: 'От вёрстки, до посадки на передовые языки программирования и фреймворки. Доводим проект до технического совершенства.',
    img: '/img/ServicePhoto5.png'
},
{
    id: 6,
    title: 'MVP',
    desc: ' MVP-стадия для проверки гипотез на целевой аудитории. Разрабатываем продающий подход. Внедряем его в конечную версию проекта перед запуском.',
    img: '/img/ServicePhoto6.png'
},
{
    id: 7,
    title: 'Запуск',
    desc: 'Запускаем лучший продукт в нише, имеющий уникальную ценность. Доведя каждый элемент до совершенства, задаем стандарты рынка.',
    img: '/img/ServicePhoto7.png'
}]

</script>

<script scoped>

export default {
    data: () => {
        return {
            content0: true,
            content1: false,
            content2: false,
            content3: false,
            content4: false,
            content5: false,
            content6: false,
            isActive: false
        }
    },
    methods: {
        show0() {
            this.content0 = true,
                this.content1 = false,
                this.content2 = false,
                this.content3 = false,
                this.content4 = false,
                this.content5 = false,
                this.content6 = false
        },
        show1() {
            this.content0 = false,
                this.content1 = true,
                this.content2 = false,
                this.content3 = false,
                this.content4 = false,
                this.content5 = false,
                this.content6 = false
        },
        show2() {
            this.content0 = false,
                this.content1 = false,
                this.content2 = true,
                this.content3 = false,
                this.content4 = false,
                this.content5 = false,
                this.content6 = false
        }
        ,
        show3() {
            this.content0 = false,
                this.content1 = false,
                this.content2 = false,
                this.content3 = true,
                this.content4 = false,
                this.content5 = false,
                this.content6 = false
        }
        ,
        show4() {
            this.content0 = false,
                this.content1 = false,
                this.content2 = false,
                this.content3 = false,
                this.content4 = true,
                this.content5 = false,
                this.content6 = false
        }
        ,
        show5() {
            this.content0 = false,
                this.content1 = false,
                this.content2 = false,
                this.content3 = false,
                this.content4 = false,
                this.content5 = true,
                this.content6 = false
        }
        ,
        show6() {
            this.content0 = false,
                this.content1 = false,
                this.content2 = false,
                this.content3 = false,
                this.content4 = false,
                this.content5 = false,
                this.content6 = true
        }
    }
}

</script>

<style scoped>
.service-item:hover {
    background: linear-gradient(180deg, #FF2BFF 0%, #FE7C3C 43.23%, #FE9402 100%);
    color: transparent;
    background-clip: text;
    transition: all 0.3s;
}

.service-item .active {
    background: linear-gradient(180deg, #FF2BFF 0%, #FE7C3C 43.23%, #FE9402 100%);
    color: transparent;
    background-clip: text;
}

@media (min-width: 640px) {
    .accordion-mobile {
        display: none;
    }
}

@media (min-width: 200px) and (max-width: 639px) {
    .service-main {
        display: none;
    }
    .accordion-mobile {
        display: block;
    }
}
</style>